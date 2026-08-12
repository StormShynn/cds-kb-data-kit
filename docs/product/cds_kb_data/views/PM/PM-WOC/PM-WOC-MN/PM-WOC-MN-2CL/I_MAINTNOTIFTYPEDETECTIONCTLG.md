---
name: I_MAINTNOTIFTYPEDETECTIONCTLG
description: "Maintnotiftypedetectionctlg"
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
# I_MAINTNOTIFTYPEDETECTIONCTLG

**Maintnotiftypedetectionctlg**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NotificationType` | ✓ | |  | `qmart` |  |  |
| `MaintNotifDetectionCatalog` |  | |  | `detectioncatalog` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@VDM.viewType: #BASIC
//@ObjectModel.usageType.serviceQuality: #A
//@ObjectModel.usageType.sizeCategory: #S
//@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel: { supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
modelingPattern: #ANALYTICAL_DIMENSION }
@ObjectModel.representativeKey: 'NotificationType'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.technicalName: 'INOTIFDETCAT'
@EndUserText.label: 'Maint Notif Type Detection Ctlg'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name:'MaintNotifDetectionCatalog'

define view entity I_MaintNotifTypeDetectionCtlg
  as select from eam_notifdetcat
{

       //   @Search.defaultSearchElement: true
       //   @Search.fuzzinessThreshold: 0.8
       //   @Search.ranking: #HIGH
       // @ObjectModel.text.association: '_Text'
  key  eam_notifdetcat.qmart            as NotificationType,

       eam_notifdetcat.detectioncatalog as MaintNotifDetectionCatalog
}
```
