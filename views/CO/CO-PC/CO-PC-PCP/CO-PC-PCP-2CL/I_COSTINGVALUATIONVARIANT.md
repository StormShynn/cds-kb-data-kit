---
name: I_COSTINGVALUATIONVARIANT
description: Costingvaluationvariant
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVALUATIONVARIANT

**Costingvaluationvariant**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ValuationVariant` | ✓ | |  | `bwvar` |
| `OverheadCostingSheet` |  | |  | `kalsm` |
| `ExtProcuredMatlOvhdCostingSht` |  | |  | `cast(kalsm_raw as fml_kalsm_raw preserving type)` |
| `_Text` | | ✓ | | |
| `_CostingSheetText` | | ✓ | | |
| `_CostingSheetExtText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostingValuationVarText` | [0..*] |
| `_CostingSheetText` | `I_CostingSheetProcedure` | [0..1] |
| `_CostingSheetExtText` | `I_CostingSheetProcedure` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFICOSTVALNVAR',
  compiler.compareFilter: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  sapObjectNodeType.name: 'CostingValuationVariant',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY ],
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'ValuationVariant'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Valuation Variant in Costing'

define view I_CostingValuationVariant
  as select from tck05
  association [0..*] to I_CostingValuationVarText as _Text                on  $projection.ValuationVariant = _Text.ValuationVariant
  association [0..1] to I_CostingSheetProcedure   as _CostingSheetText    on  $projection.OverheadCostingSheet       = _CostingSheetText.CostingSheetProcedure
                                                                          and _CostingSheetText.ConditionApplication = 'KA'
                                                                          and _CostingSheetText.ConditionUsage       = 'A'

  association [0..1] to I_CostingSheetProcedure   as _CostingSheetExtText on  $projection.ExtProcuredMatlOvhdCostingSht = _CostingSheetExtText.CostingSheetProcedure
                                                                          and _CostingSheetExtText.ConditionApplication = 'KA'
                                                                          and _CostingSheetExtText.ConditionUsage       = 'A'
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH
      }
      @ObjectModel.text.association: '_Text'
  key bwvar                                            as ValuationVariant,
  
      kalsm                                            as OverheadCostingSheet,
      
      cast(kalsm_raw as fml_kalsm_raw preserving type) as ExtProcuredMatlOvhdCostingSht,


      _Text,
      _CostingSheetText,
      _CostingSheetExtText
}
```
