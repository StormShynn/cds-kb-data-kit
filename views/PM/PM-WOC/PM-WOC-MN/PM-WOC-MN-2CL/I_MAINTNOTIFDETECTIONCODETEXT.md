---
name: I_MAINTNOTIFDETECTIONCODETEXT
description: "Maintnotifdetectioncodetext"
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
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTNOTIFDETECTIONCODETEXT

**Maintnotifdetectioncodetext**

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
| `Language` | ✓ | |  | `language` |  |  |
| `MaintNotifDetectionCodeText` |  | |  | `detectioncodetext` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maintenance Notif Detection Code - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT ,
  representativeKey: 'MaintNotifDetectionCode',
   usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
  }
}
@Analytics.technicalName: 'IMAINTDETCOTEXT'
@Metadata.ignorePropagatedAnnotations
//@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true
//  dataCategory: #DIMENSION
}
define view entity I_MaintNotifDetectionCodeText
  as select from eam_dtctncode_t
{
  key eam_dtctncode_t.detectioncode     as MaintNotifDetectionCode,
      @Semantics.language: true
  key language                          as Language,
      @Semantics.text: true
      //    @Search.defaultSearchElement: true
      //    @Search.fuzzinessThreshold: 0.8
      //    @Search.ranking: #HIGH
      @EndUserText.label: 'Detection Method Description'
      eam_dtctncode_t.detectioncodetext as MaintNotifDetectionCodeText
}
```
