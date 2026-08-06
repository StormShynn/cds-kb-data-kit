---
name: I_QLTYMGMTSYSTEMFORSUPPLIERTXT
description: Qltymgmtsystemforsuppliertxt
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `sprsl` |
| key `QualityMgmtSystemForSupplier` | `qssys` |
| `QltyMgmtSystemForSupplierText` | `qstext` |
| `_Language` | *Association* |
| `_QualityMgmtSystemForSupplier` | *Association* |

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
