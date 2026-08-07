---
name: I_MAINTNOTIFDETECTCODEGROUPTXT
description: "Maintnotifdetectcodegrouptxt"
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
# I_MAINTNOTIFDETECTCODEGROUPTXT

**Maintnotifdetectcodegrouptxt**

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
| `Language` | ✓ | |  | `language` |  |  |
| `MaintNotifDetectionCodeGrpTxt` |  | |  | `detectioncodegrouptext` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maint Notif Detection Code Grp - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Search.searchable: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'MaintNotifDetectionCodeGroup',
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
  }
}
@Analytics.technicalName: 'IMAINTDETGRPTEXT'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true
  //dataCategory: #DIMENSION
}
@Metadata.ignorePropagatedAnnotations:true
define view entity I_MaintNotifDetectCodeGroupTxt as select from eam_detcogrp_t 

{
   

    //  @ObjectModel.foreignKey.association: '_MaintNotifDetCatalog'
    key detectioncodegroup as MaintNotifDetectionCodeGroup,
    @Semantics.language: true
    key language as Language,

    @Semantics.text: true
//    @Search.defaultSearchElement: true
//    @Search.fuzzinessThreshold: 0.8
//    @Search.ranking: #HIGH
    @EndUserText.label: 'Detection Method Group Description'
    eam_detcogrp_t.detectioncodegrouptext as MaintNotifDetectionCodeGrpTxt
         
}
```
