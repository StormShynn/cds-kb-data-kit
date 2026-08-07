---
name: I_CASHFLOWCALCCATEGORYVH
description: "Cashflowcalccategoryvh"
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
  - value-help
  - component:CA-FIM-FMA
  - lob:Cross-Application Components
---
# I_CASHFLOWCALCCATEGORYVH

**Cashflowcalccategoryvh**

| Property | Value |
|---|---|
| App Component | `CA-FIM-FMA` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashFlowCalculationCategory` | ✓ | |  | `cast( CashFlowCalcCategory.sberfima as tfm_calculation_category preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CashFlowCalcCategoryTEXT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Cash Flow Calculation Category'
@ObjectModel.representativeKey: 'CashFlowCalculationCategory'
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { usageType.sizeCategory: #M,
                usageType.serviceQuality: #B,
                usageType.dataClass: #ORGANIZATIONAL,
                supportedCapabilities: [#VALUE_HELP_PROVIDER] }
@Consumption.ranked: true
@VDM.viewType: #BASIC

@Search.searchable: true

define view entity I_CashFlowCalcCategoryVH
  as select from at40 as CashFlowCalcCategory

  association [0..*] to I_CashFlowCalcCategoryTEXT as _Text on $projection.CashFlowCalculationCategory = _Text.CashFlowCalculationCategory

{
      @ObjectModel.text.association: '_Text'
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH
      }
  key cast( CashFlowCalcCategory.sberfima as tfm_calculation_category preserving type ) as CashFlowCalculationCategory,

      _Text
}
```
