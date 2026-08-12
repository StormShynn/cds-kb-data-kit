---
name: I_MAINTNOTIFDETECTCODEGROUPTXT
description: "Maintnotifdetectcodegrouptxt"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
