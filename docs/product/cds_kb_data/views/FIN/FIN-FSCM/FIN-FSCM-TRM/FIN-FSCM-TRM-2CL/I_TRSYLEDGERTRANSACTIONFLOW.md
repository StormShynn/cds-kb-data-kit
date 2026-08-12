---
name: I_TRSYLEDGERTRANSACTIONFLOW
description: "Trsyledgertransactionflow"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYLEDGERTRANSACTIONFLOW

**Trsyledgertransactionflow**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryLedgerTransaction` | ✓ | |  | `cast(transaction_oid as ftr_gen_trl_trans preserving type)` |  |  |
| `TreasuryLedgerFlow` | ✓ | |  | `trlflownumber` |  |  |
| `TreasuryTransactionFlow` |  | |  | `flownumber` |  |  |
| `TrsyPosTransfSourceTargetCode` |  | |  | `sourcetarget_flg` |  |  |
| `TreasuryPositionTransferGroup` |  | |  | `transfer_group` |  |  |
| `TreasuryUpdateType` |  | |  | `flowtype` |  |  |
| `TreasuryPositionTransferFactor` |  | |  | `amount_factor` |  |  |
| `TrsyPosQuantityChangeCategory` |  | |  | `quant_cat` |  |  |
| `TrsyPosAmountChangeCategory` |  | |  | `amount_cat` |  |  |
| `QuantityInPieces` |  | |  | `cast(units as ftr_gen_quantity_in_units_l)` |  |  |
| `NominalAmountInNominalCurrency` |  | |  | `nominal_amt` |  |  |
| `OriglNominalAmtInNominalCrcy` |  | |  | `nominal_org_amt` |  |  |
| `NominalCurrency` |  | |  | `nominal_curr` |  |  |
| `IndexCleanRpaytAmtInPosCrcy` |  | |  | `posamt_idx_clean` |  |  |
| `AmountInPositionCurrency` |  | |  | `position_amt` |  |  |
| `PositionCurrency` |  | |  | `position_curr` |  |  |
| `AmountInValuationCurrency` |  | |  | `valuation_amt` |  |  |
| `ValuationCurrency` |  | |  | `valuation_curr` |  |  |
| `CalculationDate` |  | |  | `calculation_date` |  |  |
| `CalcDateIsAsEndDateInclusive` |  | |  | `calc_date_incl` |  |  |
| `DueDate` |  | |  | `due_date` |  |  |
| `CalculationPeriodStartDate` |  | |  | `calc_begin` |  |  |
| `CalculationPeriodEndDate` |  | |  | `calc_end` |  |  |
| `EffectiveInterestRate` |  | |  | `eff_int_rate_u` |  |  |
| `EffctvIntrstRateRdmptnSched` |  | |  | `sched_eff_rate` |  |  |
| `NextEffectiveInterestRate` |  | |  | `eff_int_rate_n` |  |  |
| `FixedRedemptionSchedule` |  | |  | `sched_fix` |  |  |
| `CalculationBasis` |  | |  | `bbasis` |  |  |
| `TreasuryPosition` |  | |  | `cast(position_oid as ftr_gen_position_uuid)` |  |  |
| `TreasuryPositionLedgerDate` |  | |  | `trldate` |  |  |
| `TrsySubPosition` |  | |  | `subposition_oid` |  |  |
| `_NominalCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_ValuationCurrency` | | ✓ | | | | |
| `_PositionIdentifier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_ValuationCurrency` | `I_Currency` | [0..1] |
| `_PositionIdentifier` | `I_TreasuryPositionIdentifier` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Treasury Ledger Flow'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'TreasuryLedgerTransactionFlow'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@VDM.viewType: #BASIC

define view entity I_TrsyLedgerTransactionFlow
  as select from trlt_flow

  association [0..1] to I_Currency                   as _NominalCurrency    on $projection.NominalCurrency = _NominalCurrency.Currency
  association [0..1] to I_Currency                   as _PositionCurrency   on $projection.PositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency                   as _ValuationCurrency  on $projection.ValuationCurrency = _ValuationCurrency.Currency
  association [0..1] to I_TreasuryPositionIdentifier as _PositionIdentifier on $projection.TreasuryPosition = _PositionIdentifier.TreasuryPosition

{
  key cast(transaction_oid  as ftr_gen_trl_trans preserving type) as TreasuryLedgerTransaction,
  key trlflownumber                                               as TreasuryLedgerFlow,

      flownumber                                                  as TreasuryTransactionFlow,
      sourcetarget_flg                                            as TrsyPosTransfSourceTargetCode,
      transfer_group                                              as TreasuryPositionTransferGroup,
      flowtype                                                    as TreasuryUpdateType,
      amount_factor                                               as TreasuryPositionTransferFactor,
      quant_cat                                                   as TrsyPosQuantityChangeCategory,
      amount_cat                                                  as TrsyPosAmountChangeCategory,
      cast(units as ftr_gen_quantity_in_units_l)                  as QuantityInPieces,

      @Semantics.amount.currencyCode: 'NominalCurrency'
      nominal_amt                                                 as NominalAmountInNominalCurrency,

      @Semantics.amount.currencyCode: 'NominalCurrency'
      nominal_org_amt                                             as OriglNominalAmtInNominalCrcy,

      nominal_curr                                                as NominalCurrency,

      @Semantics.amount.currencyCode: 'PositionCurrency'
      posamt_idx_clean                                            as IndexCleanRpaytAmtInPosCrcy,

      @Semantics.amount.currencyCode: 'PositionCurrency'
      position_amt                                                as AmountInPositionCurrency,

      position_curr                                               as PositionCurrency,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      valuation_amt                                               as AmountInValuationCurrency,

      valuation_curr                                              as ValuationCurrency,
      calculation_date                                            as CalculationDate,
      calc_date_incl                                              as CalcDateIsAsEndDateInclusive,
      due_date                                                    as DueDate,
      calc_begin                                                  as CalculationPeriodStartDate,
      calc_end                                                    as CalculationPeriodEndDate,
      eff_int_rate_u                                              as EffectiveInterestRate,
      sched_eff_rate                                              as EffctvIntrstRateRdmptnSched,
      eff_int_rate_n                                              as NextEffectiveInterestRate,
      sched_fix                                                   as FixedRedemptionSchedule,

      @Semantics.amount.currencyCode: 'PositionCurrency'
      bbasis                                                      as CalculationBasis,

      cast(position_oid     as ftr_gen_position_uuid)             as TreasuryPosition,
      trldate                                                     as TreasuryPositionLedgerDate,
      subposition_oid                                             as TrsySubPosition,


      _PositionIdentifier,
      _NominalCurrency,
      _PositionCurrency,
      _ValuationCurrency
}
```
