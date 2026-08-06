---
name: I_COSTINGVALUATIONVARTEXT
description: Costingvaluationvartext
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
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVALUATIONVARTEXT

**Costingvaluationvartext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `ValuationVariant` | `bwvar` |
| `ValuationVariantName` | `cast(txbwv as fpc_valuation_variant_name preserving type)` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ValuationVariant',
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #CUSTOMIZING },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@EndUserText.label: 'Valuation Variant in Costing - Text'

define view entity I_CostingValuationVarText
  as select from tck06
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                     as Language,
  key bwvar                                                     as ValuationVariant,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(txbwv as fpc_valuation_variant_name preserving type) as ValuationVariantName,

      _Language
}
```
