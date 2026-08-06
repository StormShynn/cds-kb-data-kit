---
name: I_CASHFLOWCALCCATEGORYTEXT
description: Cashflowcalccategorytext
app_component: CA-FIM-FMA
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FIM
  - CA-FIM-FMA
  - interface-view
  - text-view
  - text
  - component:CA-FIM-FMA
  - lob:Cross-Application Components
---
# I_CASHFLOWCALCCATEGORYTEXT

**Cashflowcalccategorytext**

| Property | Value |
|---|---|
| App Component | `CA-FIM-FMA` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CashFlowCalculationCategory` | `cast( CashFlowCalcCategoryText.sberfima as tfm_calculation_category preserving type )` |
| key `Language` | `CashFlowCalcCategoryText.spras` |
| `CashFlowCalcCategoryName` | `cast( CashFlowCalcCategoryText.xberfima as tfm_calculation_category_name preserving type )` |
| `_ValueHelp` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValueHelp` | `I_CashFlowCalcCategoryVH` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cash Flow Calculation Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'CashFlowCalculationCategory'
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType:{
    serviceQuality: #B,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true

define view entity I_CashFlowCalcCategoryTEXT
  as select from at40t as CashFlowCalcCategoryText

  association [0..1] to I_CashFlowCalcCategoryVH as _ValueHelp on $projection.CashFlowCalculationCategory = _ValueHelp.CashFlowCalculationCategory
  association [0..1] to I_Language               as _Language  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ValueHelp'
  key cast( CashFlowCalcCategoryText.sberfima as tfm_calculation_category preserving type )      as CashFlowCalculationCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key CashFlowCalcCategoryText.spras                                                             as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      cast( CashFlowCalcCategoryText.xberfima as tfm_calculation_category_name preserving type ) as CashFlowCalcCategoryName,

      _ValueHelp,
      _Language
}
```
