---
name: I_ENTPROJELMNTCNFGRDWRKITMTXT
description: "Entprojelmntcnfgrdwrkitmtxt"
app_component: PPM-SCL-STR
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
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTCNFGRDWRKITMTXT

**Entprojelmntcnfgrdwrkitmtxt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `EntProjElmntWorkItem` | ✓ | |  | `workitem_id` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EntProjElmntCnfgrdWrkItmName` |  | |  | `workitem_name` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IEnPrjCnfgCnfgrdWrkItmTxt'
@ObjectModel.representativeKey: 'EntProjElmntWorkItem'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.dataCategory:#TEXT
@ObjectModel.sapObjectNodeType.name:'EnPrjElmConfiguredWorkItemText'
@EndUserText.label: 'Enterprise Proj Cnfgrd Work Item - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
define view entity I_EntProjElmntCnfgrdWrkItmTxt
  as select from /cpd/fc_workitem
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key workitem_id   as EntProjElmntWorkItem,

      @Semantics.language: true
  key spras         as Language,

      @Semantics.text : true
      workitem_name as EntProjElmntCnfgrdWrkItmName,

      _Language
}
```
