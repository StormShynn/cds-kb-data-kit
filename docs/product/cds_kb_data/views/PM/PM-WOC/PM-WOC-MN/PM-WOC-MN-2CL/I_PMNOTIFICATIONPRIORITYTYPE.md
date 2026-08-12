---
name: I_PMNOTIFICATIONPRIORITYTYPE
description: "Pmnotificationprioritytype"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFICATIONPRIORITYTYPE

**Pmnotificationprioritytype**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintPriorityType` | ✓ | |  | `artpr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PMNotifPriorityTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Notification PriorityType'
@Analytics: { dataCategory: #DIMENSION, 
  dataExtraction : { enabled: true , 
  delta.changeDataCapture.automatic: true } 
}
@Analytics.technicalName: 'IPMNOTIFPRIOTYPE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintPriorityType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.sapObjectNodeType.name:'NotificationPriorityType'

define view entity I_PMNotificationPriorityType
  as select from t356a
  association [0..*] to I_PMNotifPriorityTypeText as _Text on $projection.MaintPriorityType = _Text.MaintPriorityType
{

      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Priority Type'
  key t356a.artpr as MaintPriorityType,

      _Text
}
```
