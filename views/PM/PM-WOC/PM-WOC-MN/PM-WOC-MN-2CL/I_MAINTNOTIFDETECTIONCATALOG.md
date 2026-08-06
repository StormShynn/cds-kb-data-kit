---
name: I_MAINTNOTIFDETECTIONCATALOG
description: Maintnotifdetectioncatalog
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
# I_MAINTNOTIFDETECTIONCATALOG

**Maintnotifdetectioncatalog**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintNotifDetectionCatalog` | `eam_detcat.detectioncatalog` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintNotifDetectionCtlgText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintNotifDetectionCatalog'

@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION }
@ObjectModel.resultSet.sizeCategory: #XS
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'IMAINTDETCAT'
@EndUserText.label: 'Maintenance Notification Detection Ctlg'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCatalog'
define view entity I_MaintNotifDetectionCatalog as select from eam_detcat 
association [0..*] to I_MaintNotifDetectionCtlgText as _Text 
           on $projection.MaintNotifDetectionCatalog = _Text.MaintNotifDetectionCatalog
{
//      @Search.defaultSearchElement: true
//      @Search.fuzzinessThreshold: 0.8
//      @Search.ranking: #HIGH     
      @ObjectModel.text.association: '_Text'
      key eam_detcat.detectioncatalog as MaintNotifDetectionCatalog,    

     // Propagate association
     _Text
  
} where eam_detcat.deactivated = '';
```
