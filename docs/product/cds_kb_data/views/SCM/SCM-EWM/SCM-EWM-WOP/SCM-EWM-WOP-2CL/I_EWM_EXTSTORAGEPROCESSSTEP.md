---
name: I_EWM_EXTSTORAGEPROCESSSTEP
description: "This CDS view provides information about process steps of external storage in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCESSSTEP')/$value
semantic_en: "This CDS view provides information about process steps of external storage in your warehouse."
semantic_vi: "External Storage Process — CDS view giao diện dựa trên External Storage Process."
keywords:
  - "external"
  - "storage"
  - "process"
  - "step"
  - "internal"
tags:
  - SCM
  - bo:project
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_EXTSTORAGEPROCESSSTEP

**This CDS view provides information about process steps of external storage in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCESSSTEP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExternalStorageProcessStep` | ✓ | |  | `procs` | `CHAR(4)` | External Storage Process Step |
| `InternalStorageProcessStep` |  | |  | `iproc` | `CHAR(4)` | Internal Storage Process Step |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_ExtStorageProcStepText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCESSSTEP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCESSSTEP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMESPS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External Storage Process'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'ExternalStorageProcessStep'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations:true
define view I_EWM_ExtStorageProcessStep
  as select from /scwm/tprocs as  ExtStgProcStep
  association [0..*] to I_EWM_ExtStorageProcStepText  as  _Text   on  $projection.ExternalStorageProcessStep = _Text.ExternalStorageProcessStep
{

      @ObjectModel.text.association: '_Text'
  key procs as ExternalStorageProcessStep,
      iproc as InternalStorageProcessStep,
      _Text
}
```
