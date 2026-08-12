---
name: I_MAINTNOTIFDETECTIONCATGROUP
description: "Maintnotifdetectioncatgroup"
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
# I_MAINTNOTIFDETECTIONCATGROUP

**Maintnotifdetectioncatgroup**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintNotifDetectionCatalog` | ✓ | |  | `detectioncatalog` |  |  |
| `MaintNotifDetectionCodeGroup` | ✓ | |  | `detectioncodegroup` |  |  |
| `MaintNotifDetectionCatalogText` |  | |  | `_DetectionCtlgText[1:Language=$session.system_language].MaintNotifDetectionCatalogText` |  |  |
| `MaintNotifDetectionCodeGrpTxt` |  | |  | `_DetectCodeGroupText[1:Language=$session.system_language].MaintNotifDetectionCodeGrpTxt` |  |  |
| `_DetectionCatalog` | | ✓ | | | | |
| `_DetectionCodeGroup` | | ✓ | | | | |
| `_DetectionCtlgText` | | ✓ | | | | |
| `_DetectCodeGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DetectionCatalog` | `I_MaintNotifDetectionCatalog` | [0..1] |
| `_DetectionCodeGroup` | `I_MaintNotifDetectionCodeGroup` | [0..1] |
| `_DetectionCtlgText` | `I_MaintNotifDetectionCtlgText` | [0..*] |
| `_DetectCodeGroupText` | `I_MaintNotifDetectCodeGroupTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
//@ObjectModel.usageType.serviceQuality: #B
//@ObjectModel.usageType.sizeCategory: #S
//@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING }
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.representativeKey: 'MaintNotifDetectionCodeGroup'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'IMAINTDETCTGRP'
@EndUserText.label: 'Maintenance Notif Detection CatGrp'
@Metadata.ignorePropagatedAnnotations:true
//@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCodeGroup'

define view entity I_MaintNotifDetectionCatGroup
  as select from eam_detcatgrp
  association [0..1] to I_MaintNotifDetectionCatalog   as _DetectionCatalog    on $projection.MaintNotifDetectionCatalog = _DetectionCatalog.MaintNotifDetectionCatalog
  association [0..1] to I_MaintNotifDetectionCodeGroup as _DetectionCodeGroup  on $projection.MaintNotifDetectionCodeGroup = _DetectionCodeGroup.MaintNotifDetectionCodeGroup

  association [0..*] to I_MaintNotifDetectionCtlgText  as _DetectionCtlgText   on $projection.MaintNotifDetectionCatalog = _DetectionCtlgText.MaintNotifDetectionCatalog
  association [0..*] to I_MaintNotifDetectCodeGroupTxt as _DetectCodeGroupText on $projection.MaintNotifDetectionCodeGroup = _DetectCodeGroupText.MaintNotifDetectionCodeGroup


{
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.8
      //      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_DetectionCatalog'
  key detectioncatalog                                                                        as MaintNotifDetectionCatalog,
      //      @ObjectModel.foreignKey.association: '_DetectionCodeGroup'
  key detectioncodegroup                                                                      as MaintNotifDetectionCodeGroup,
      _DetectionCtlgText[1:Language=$session.system_language].MaintNotifDetectionCatalogText  as MaintNotifDetectionCatalogText,
      _DetectCodeGroupText[1:Language=$session.system_language].MaintNotifDetectionCodeGrpTxt as MaintNotifDetectionCodeGrpTxt,

      // Association
      _DetectionCatalog,
      _DetectionCodeGroup,
      _DetectionCtlgText,
      _DetectCodeGroupText
}
```
