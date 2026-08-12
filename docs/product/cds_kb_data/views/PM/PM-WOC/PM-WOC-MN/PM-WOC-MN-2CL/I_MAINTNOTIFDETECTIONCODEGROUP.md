---
name: I_MAINTNOTIFDETECTIONCODEGROUP
description: "Maintnotifdetectioncodegroup"
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
# I_MAINTNOTIFDETECTIONCODEGROUP

**Maintnotifdetectioncodegroup**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintNotifDetectionCodeGroup` | ✓ | |  | `detectioncodegroup` |  |  |
| `IsDeactivated` |  | |  | `deactivated` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintNotifDetectCodeGroupTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintNotifDetectionCodeGroup'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
modelingPattern: #ANALYTICAL_DIMENSION }
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'IMAINTDETCOGRP'
@ObjectModel.resultSet.sizeCategory: #XS
@EndUserText.label: 'Maint Notification Detection Code Group'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCodeGroup'
define view entity I_MaintNotifDetectionCodeGroup as select from eam_detcogrp
association [0..*] to I_MaintNotifDetectCodeGroupTxt as _Text 
           on $projection.MaintNotifDetectionCodeGroup = _Text.MaintNotifDetectionCodeGroup
{
//   @Search.defaultSearchElement: true
//   @Search.fuzzinessThreshold: 0.8
//   @Search.ranking: #HIGH     
   @ObjectModel.text.association: '_Text'
key detectioncodegroup as MaintNotifDetectionCodeGroup,
deactivated as IsDeactivated,
 // Propagate association
     _Text
}
```
