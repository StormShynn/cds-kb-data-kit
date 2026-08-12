---
name: I_MAINTNOTIFDETECTIONCODETEXT
description: "Maintnotifdetectioncodetext"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
