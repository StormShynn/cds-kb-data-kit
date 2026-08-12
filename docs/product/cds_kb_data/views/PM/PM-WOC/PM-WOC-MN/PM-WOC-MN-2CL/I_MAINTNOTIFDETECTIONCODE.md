---
name: I_MAINTNOTIFDETECTIONCODE
description: "Maintnotifdetectioncode"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_MAINTNOTIFDETECTIONCODE

**Maintnotifdetectioncode**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintNotifDetectionCode` | ✓ | |  | `detectioncode` |  |  |
| `IsDeactivated` |  | |  | `deactivated` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintNotifDetectionCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintNotifDetectionCode'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
modelingPattern: #ANALYTICAL_DIMENSION }
@ObjectModel.resultSet.sizeCategory: #XS
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'IMAINTDETCODE'
@EndUserText.label: 'Maintenance Notification Detection Code'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCode'
define view entity I_MaintNotifDetectionCode as select from eam_dtctncode
association [0..*] to I_MaintNotifDetectionCodeText as _Text 
            on $projection.MaintNotifDetectionCode = _Text.MaintNotifDetectionCode 
{
//   @Search.defaultSearchElement: true
//   @Search.fuzzinessThreshold: 0.8
//   @Search.ranking: #HIGH     
   @ObjectModel.text.association: '_Text'
   key eam_dtctncode.detectioncode  as MaintNotifDetectionCode,
   deactivated as IsDeactivated,
   // Propagate association
     _Text

}
```
