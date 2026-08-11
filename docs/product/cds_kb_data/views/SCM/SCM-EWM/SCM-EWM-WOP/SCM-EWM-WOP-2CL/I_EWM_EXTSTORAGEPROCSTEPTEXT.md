---
name: I_EWM_EXTSTORAGEPROCSTEPTEXT
description: "This CDS view provides information about process steps of external storage in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value
semantic_en: "This CDS view provides information about process steps of external storage in your warehouse."
semantic_vi: "External Storage Process Step - Text — CDS view giao diện dựa trên External Storage Process Step - Text."
keywords:
  - "external"
  - "storage"
  - "process"
  - "step"
  - "text"
  - "language"
  - "name"
tags:
  - SCM
  - bo:project
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_EXTSTORAGEPROCSTEPTEXT

**This CDS view provides information about process steps of external storage in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ExternalStorageProcessStep` | ✓ | |  | `procs` | `CHAR(4)` | External Storage Process Step |
| `ExternalStorageProcessStepName` |  | |  | `text` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMESPSTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External Storage Process Step - Text'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: ['ExternalStorageProcessStep']
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
                         
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view I_EWM_ExtStorageProcStepText
  as select from /scwm/tprocst as ExtStgProcStepText
{
  @Semantics.language: true
  key langu as Language,
  key procs as ExternalStorageProcessStep,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      text  as ExternalStorageProcessStepName
}
```
