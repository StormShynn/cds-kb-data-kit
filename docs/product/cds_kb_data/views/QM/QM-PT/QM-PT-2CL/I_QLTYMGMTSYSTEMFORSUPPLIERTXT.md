---
name: I_QLTYMGMTSYSTEMFORSUPPLIERTXT
description: "Qltymgmtsystemforsuppliertxt"
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
  - supplier
  - component:QM-PT-2CL
  - lob:Quality Management
  - bo:Supplier
---
# I_QLTYMGMTSYSTEMFORSUPPLIERTXT

**Qltymgmtsystemforsuppliertxt**

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
| `Language` | ✓ | |  | `sprsl` |  |  |
| `QualityMgmtSystemForSupplier` | ✓ | |  | `qssys` |  |  |
| `QltyMgmtSystemForSupplierText` |  | |  | `qstext` |  |  |
| `_Language` | | ✓ | | | | |
| `_QualityMgmtSystemForSupplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_QualityMgmtSystemForSupplier` | `I_QualityMgmtSystemForSupplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target QM System for Supplier - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_QltyMgmtSystemForSupplierTxt as select from tq02t
  association [0..1] to I_Language as _Language
      on $projection.Language = _Language.Language
  association [1..1] to I_QualityMgmtSystemForSupplier as _QualityMgmtSystemForSupplier
      on $projection.QualityMgmtSystemForSupplier = _QualityMgmtSystemForSupplier.QualityMgmtSystemForSupplier
{
  @Semantics.language: true
  key sprsl as Language,
  
  key qssys as QualityMgmtSystemForSupplier,
  
  @Semantics.text: true
  qstext as QltyMgmtSystemForSupplierText,
  
  _Language,
  _QualityMgmtSystemForSupplier
}
```
