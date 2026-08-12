---
name: I_QLTYMGMTSYSTEMTEXT
description: "Qltymgmtsystemtext"
app_component: QM-PT-2CL
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
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYMGMTSYSTEMTEXT

**Qltymgmtsystemtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `QualityManagementSystem` | ✓ | |  | `qssysfam` |  |  |
| `Language` | ✓ | |  | `sprsl` |  |  |
| `QualityManagementSystemText` |  | |  | `cast( tq02u.qstext as vdm_qmsystem_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_QualityManagementSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_QualityManagementSystem` | `I_QualityManagementSystem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Management System - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IQLTYMGMTSYSTT'
@ObjectModel.representativeKey: 'QualityManagementSystem'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyMgmtSystemText as select from tq02u 

  association [0..1] to I_Language as _Language
      on  $projection.Language = _Language.Language
  association [1..1] to I_QualityManagementSystem as _QualityManagementSystem
      on  $projection.QualityManagementSystem = _QualityManagementSystem.QualityManagementSystem
{
  key tq02u.qssysfam as QualityManagementSystem,
  @Semantics.language: true
  key tq02u.sprsl as Language,
  
  @Semantics.text: true
  cast( tq02u.qstext as vdm_qmsystem_text preserving type  )      as QualityManagementSystemText, 
  /* Associations */
  _QualityManagementSystem,
  _Language  
  
}
```
