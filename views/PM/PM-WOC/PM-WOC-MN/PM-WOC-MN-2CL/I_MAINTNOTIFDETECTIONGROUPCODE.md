---
name: I_MAINTNOTIFDETECTIONGROUPCODE
description: Maintnotifdetectiongroupcode
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
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
# I_MAINTNOTIFDETECTIONGROUPCODE

**Maintnotifdetectiongroupcode**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintNotifDetectionCodeGroup` | `eam_detgrpcode.detectioncodegroup` |
| key `MaintNotifDetectionCode` | `eam_detgrpcode.detectioncode` |
| `MaintNotifDetectionCodeText` | `_DetectionCodeText[1:Language=$session.system_language].MaintNotifDetectionCodeText` |
| `MaintNotifDetectionCodeGrpTxt` | `_DetectionCodeGroupText[1:Language=$session.system_language].MaintNotifDetectionCodeGrpTxt` |
| `_DetectionCode` | *Association* |
| `_DetectionCodeGroup` | *Association* |
| `_DetectionCodeText` | *Association* |
| `_DetectionCodeGroupText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DetectionCode` | `I_MaintNotifDetectionCode` | [0..1] |
| `_DetectionCodeGroup` | `I_MaintNotifDetectionCodeGroup` | [0..1] |
| `_DetectionCodeText` | `I_MaintNotifDetectionCodeText` | [0..*] |
| `_DetectionCodeGroupText` | `I_MaintNotifDetectCodeGroupTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@VDM.viewType: #BASIC
//@ObjectModel.usageType.serviceQuality: #B
//@ObjectModel.usageType.sizeCategory: #S
//@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING }
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
modelingPattern: #ANALYTICAL_DIMENSION }
@ObjectModel.representativeKey: 'MaintNotifDetectionCode'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'IMAINTDETGRCODE'
@EndUserText.label: 'Maintenance Notification Dtctn Grp Code'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCode'
define view entity I_MaintNotifDetectionGroupCode
  as select from eam_detgrpcode
  association [0..1] to I_MaintNotifDetectionCode      as _DetectionCode          on $projection.MaintNotifDetectionCode = _DetectionCode.MaintNotifDetectionCode
  association [0..1] to I_MaintNotifDetectionCodeGroup as _DetectionCodeGroup     on $projection.MaintNotifDetectionCodeGroup = _DetectionCodeGroup.MaintNotifDetectionCodeGroup

  association [0..*] to I_MaintNotifDetectionCodeText  as _DetectionCodeText      on $projection.MaintNotifDetectionCode = _DetectionCodeText.MaintNotifDetectionCode
  association [0..*] to I_MaintNotifDetectCodeGroupTxt as _DetectionCodeGroupText on $projection.MaintNotifDetectionCodeGroup = _DetectionCodeGroupText.MaintNotifDetectionCodeGroup
{

       //       @Search.defaultSearchElement: true
       //       @Search.fuzzinessThreshold: 0.8
       //       @Search.ranking: #HIGH
       @ObjectModel.foreignKey.association: '_DetectionCodeGroup'
  key  eam_detgrpcode.detectioncodegroup                                                          as MaintNotifDetectionCodeGroup,
//       @ObjectModel.foreignKey.association: '_DetectionCode'
  key  eam_detgrpcode.detectioncode                                                               as MaintNotifDetectionCode,
       _DetectionCodeText[1:Language=$session.system_language].MaintNotifDetectionCodeText        as MaintNotifDetectionCodeText,
       _DetectionCodeGroupText[1:Language=$session.system_language].MaintNotifDetectionCodeGrpTxt as MaintNotifDetectionCodeGrpTxt,

       // Association
       _DetectionCode,
       _DetectionCodeGroup,
       _DetectionCodeText,
       _DetectionCodeGroupText
}
```
