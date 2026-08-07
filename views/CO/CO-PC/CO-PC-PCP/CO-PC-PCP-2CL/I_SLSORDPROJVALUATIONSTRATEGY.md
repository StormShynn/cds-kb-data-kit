---
name: I_SLSORDPROJVALUATIONSTRATEGY
description: Slsordprojvaluationstrategy
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
# I_SLSORDPROJVALUATIONSTRATEGY

**Slsordprojvaluationstrategy**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SlsOrdProjValnStrategy` | ✓ | |  | `cast( cast ( substring( domvalue_l, 1, 1) as abap.char( 1 ) ) as fpc_val_strat_sls_order )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsOrdProjValnStrategyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Strategy'
@VDM.viewType: #BASIC
@ObjectModel: {
  representativeKey: 'SlsOrdProjValnStrategy',
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #MASTER
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.technicalName: 'ISORDPROVALSTRT'
define view entity I_SlsOrdProjValuationStrategy
  as select from dd07l
  association [0..*] to I_SlsOrdProjValnStrategyText as _Text on $projection.SlsOrdProjValnStrategy = _Text.SlsOrdProjValnStrategy
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( domvalue_l, 1, 1) as abap.char( 1 ) ) as fpc_val_strat_sls_order ) as SlsOrdProjValnStrategy,

      _Text
}

where
      domname  = 'FPC_VAL_STRAT_SLS_ORDER'
  and as4local = 'A';
```
