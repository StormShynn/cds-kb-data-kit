---
name: I_SLSORDPROJVALNSTRATEGYTEXT
description: Slsordprojvalnstrategytext
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
# I_SLSORDPROJVALNSTRATEGYTEXT

**Slsordprojvalnstrategytext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SlsOrdProjValnStrategy` | `cast( domvalue_l as fpc_val_strat_sls_order )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `SlsOrdProjValnStrgyName` | `cast( ddtext as fpc_val_strat_sls_ord_name preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'SlsOrdProjValnStrategy'
@EndUserText.label: 'Valuation Strategy - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #LANGUAGE_DEPENDENT_TEXT
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SlsOrdProjValnStrategyText
  as select from dd07t
  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.text.element: ['SlsOrdProjValnStrgyName']
  key cast( domvalue_l as fpc_val_strat_sls_order )                as SlsOrdProjValnStrategy,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as fpc_val_strat_sls_ord_name preserving type ) as SlsOrdProjValnStrgyName,

      _Language
}
where
      dd07t.domname  = 'FPC_VAL_STRAT_SLS_ORDER'
  and dd07t.as4local = 'A'
```
