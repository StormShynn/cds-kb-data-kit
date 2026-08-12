---
name: I_DEFECTLONGTEXT
description: "Defectlongtext"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - text-view
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTLONGTEXT

**Defectlongtext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `usageType: { dataClass: #TRANSACTIONAL, sizeCategory: #L, serviceQuality: #A }` |  |  |
| `'LongTextInternalNumber'` |  | |  | `representativeKey: 'LongTextInternalNumber'` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel:
    { usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A
    },
    representativeKey: 'LongTextInternalNumber',
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IDEFLONGTXT'
@EndUserText.label: 'Defect Long Text'
@Metadata.ignorePropagatedAnnotations: true // Projection from generic NotificationItemLT to DefectLT => Start new with annotations

define view entity I_DefectLongText as select from I_NotificationItemLongText

    association [1..1] to I_Defect as _Defect    on $projection.DefectInternalID = _Defect.DefectInternalID

{

    @ObjectModel.foreignKey.association: '_Defect'
    key cast( I_NotificationItemLongText.Notification as qdefectinternalid preserving type ) as DefectInternalID,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key Language,
    
    key LongTextInternalNumber,
    
    
    LongTextID,
    
    @EndUserText:{  label: 'Defect Detailed Description',
                    quickInfo: 'Detailed Description of Defect'
    }/* normally you should build a vdm_q* data element and cast the field to it to get the label, but cast to STRING is not allowed */
    @Semantics.text: true
    NotificationItemLongText as DefectLongText,
    
    LongTextCreatedByUser,
    LongTextCreatedAt,
    LongTextLastChangedByUser,
    LongTextLastChangedAt,
    MimeType,
    
    /* Associations */
    _Defect,
    _Language
  
} where I_NotificationItemLongText.Notification like '$%'
    and I_NotificationItemLongText.NotificationItem = '0000'
```
