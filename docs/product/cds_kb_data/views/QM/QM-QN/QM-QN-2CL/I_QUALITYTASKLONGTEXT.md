---
name: I_QUALITYTASKLONGTEXT
description: "Qualitytasklongtext"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
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
# I_QUALITYTASKLONGTEXT

**Qualitytasklongtext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityTaskInternalId` | ✓ | |  | `qmnum` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `LongTextInternalNumber` | ✓ | |  | `counter` |  |  |
| `LongTextID` |  | |  | `textid` |  |  |
| `QualityTaskLongText` |  | |  | `content` |  |  |
| `LongTextCreatedByUser` |  | |  | `created_by` |  |  |
| `LongTextCreatedAt` |  | |  | `cast( created_at as qlt_longtext_created_at preserving type )` |  |  |
| `LongTextLastChangedByUser` |  | |  | `changed_by` |  |  |
| `LongTextLastChangedAt` |  | |  | `cast( changed_at as qlt_longtext_changed_at preserving type )` |  |  |
| `MimeType` |  | |  | `cast( mimetype as w3conttype )` |  |  |
| `_QualityTask` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityTask` | `I_QualityTask` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'LongTextInternalNumber'
}
@Analytics.technicalName: 'IQTSKLT'
@EndUserText.label: 'Quality Task Long Text'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityTaskLongText as select from qtaskltext 

    association [1..1] to I_QualityTask         as _QualityTask         on $projection.QualityTaskInternalId = _QualityTask.QualityTaskInternalId    
    association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_QualityTask'
    key qmnum                                                       as QualityTaskInternalId,   
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key langu                                                       as Language,
    
    key counter                                                     as LongTextInternalNumber,
    
    textid                                                          as LongTextID,
    
    @Semantics.text
    content                                                         as QualityTaskLongText,
    
    created_by                                                      as LongTextCreatedByUser,
    cast( created_at as qlt_longtext_created_at preserving type )   as LongTextCreatedAt,
    changed_by                                                      as LongTextLastChangedByUser,
    cast( changed_at as qlt_longtext_changed_at preserving type )   as LongTextLastChangedAt,
    cast( mimetype as w3conttype )                                  as MimeType,
    
    /* Association */
    _QualityTask,
    _Language
        
} where qtaskltext.qmnum like '$%'
    and qtaskltext.manum = '0000'
```
