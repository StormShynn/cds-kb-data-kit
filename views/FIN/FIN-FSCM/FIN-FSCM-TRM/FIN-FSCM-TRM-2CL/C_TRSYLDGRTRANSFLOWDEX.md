---
name: C_TRSYLDGRTRANSFLOWDEX
description: Trsyldgrtransflowdex
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - consumption-view
  - data-extraction
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# C_TRSYLDGRTRANSFLOWDEX

**Trsyldgrtransflowdex**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TreasuryLedgerTransaction` | `flow.TreasuryLedgerTransaction` |
| key `TreasuryLedgerFlow` | `flow.TreasuryLedgerFlow` |
| `TreasuryTransactionFlow` | `flow.TreasuryTransactionFlow` |
| `TrsyPosTransfSourceTargetCode` | `flow.TrsyPosTransfSourceTargetCode` |
| `TreasuryPositionTransferGroup` | `flow.TreasuryPositionTransferGroup` |
| `TreasuryUpdateType` | `flow.TreasuryUpdateType` |
| `TreasuryPositionTransferFactor` | `flow.TreasuryPositionTransferFactor` |
| `TrsyPosQuantityChangeCategory` | `flow.TrsyPosQuantityChangeCategory` |
| `TrsyPosAmountChangeCategory` | `flow.TrsyPosAmountChangeCategory` |
| `QuantityInPieces` | `flow.QuantityInPieces` |
| `NominalAmountInNominalCurrency` | `flow.NominalAmountInNominalCurrency` |
| `OriglNominalAmtInNominalCrcy` | `flow.OriglNominalAmtInNominalCrcy` |
| `NominalCurrency` | `flow.NominalCurrency` |
| `IndexCleanRpaytAmtInPosCrcy` | `flow.IndexCleanRpaytAmtInPosCrcy` |
| `AmountInPositionCurrency` | `flow.AmountInPositionCurrency` |
| `PositionCurrency` | `flow.PositionCurrency` |
| `AmountInValuationCurrency` | `flow.AmountInValuationCurrency` |
| `ValuationCurrency` | `flow.ValuationCurrency` |
| `CalculationDate` | `flow.CalculationDate` |
| `CalcDateIsAsEndDateInclusive` | `flow.CalcDateIsAsEndDateInclusive` |
| `DueDate` | `flow.DueDate` |
| `CalculationPeriodStartDate` | `flow.CalculationPeriodStartDate` |
| `CalculationPeriodEndDate` | `flow.CalculationPeriodEndDate` |
| `EffectiveInterestRate` | `flow.EffectiveInterestRate` |
| `EffctvIntrstRateRdmptnSched` | `flow.EffctvIntrstRateRdmptnSched` |
| `NextEffectiveInterestRate` | `flow.NextEffectiveInterestRate` |
| `FixedRedemptionSchedule` | `flow.FixedRedemptionSchedule` |
| `CalculationBasis` | `flow.CalculationBasis` |
| `TreasuryPosition` | `flow.TreasuryPosition` |
| `TreasuryPositionLedgerDate` | `flow.TreasuryPositionLedgerDate` |
| `TrsySubPosition` | `flow.TrsySubPosition` |
| `TreasuryBusinessTransCategory` | `trans.TreasuryBusinessTransCategory` |
| `TreasuryBusinessTransaction` | `trans.TreasuryBusinessTransaction` |
| `TrsyBusTransactionCreationDate` | `trans.TrsyBusTransactionCreationDate` |
| `TrsyBusTransactionCreationTime` | `trans.TrsyBusTransactionCreationTime` |
| `TrsyDerivedBusinessTransStatus` | `trans.TrsyDerivedBusinessTransStatus` |
| `TreasuryBusinessTransStatus` | `trans.TreasuryBusinessTransStatus` |
| `TreasuryValuationArea` | `trans.TreasuryValuationArea` |
| `CompanyCode` | `trans.CompanyCode` |
| `OriglTrsyBusinessTransaction` | `trans.OriglTrsyBusinessTransaction` |
| `PostingDate` | `trans.PostingDate` |
| `PostingReversalDate` | `trans.PostingReversalDate` |
| `TrsyIntragroupTransacStatus` | `trans.TrsyIntragroupTransacStatus` |
| `TreasuryUserStatisticsUUID` | `trans.TreasuryUserStatisticsUUID` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'TRLT_FLOW',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'TreasuryLedgerTransaction',
                                                                                 'TreasuryLedgerFlow' ],
                                                                  tableElement: [ 'TRANSACTION_OID', 'TRLFLOWNUMBER' ] },
                                                                { table: 'TRLT_TRANSACTION',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'TreasuryLedgerTransaction' ],
                                                                  tableElement: [ 'OS_GUID' ] } ] }

@EndUserText.label: 'Treasury Ledger Transaction Flow DEX'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #X, sizeCategory: #M, dataClass: #TRANSACTIONAL }

@VDM.viewType: #CONSUMPTION
@ObjectModel.sapObjectNodeType.name: 'TreasuryLedgerTransactionFlow'

define view entity C_TrsyLdgrTransFlowDEX
  as select from           I_TrsyLedgerTransactionFlow as flow

    left outer to one join I_TreasuryLedgerTransaction as trans on flow.TreasuryLedgerTransaction = trans.TreasuryLedgerTransaction

{
  key flow.TreasuryLedgerTransaction,
  key flow.TreasuryLedgerFlow,
      flow.TreasuryTransactionFlow,
      flow.TrsyPosTransfSourceTargetCode,
      flow.TreasuryPositionTransferGroup,
      flow.TreasuryUpdateType,
      flow.TreasuryPositionTransferFactor,
      flow.TrsyPosQuantityChangeCategory,
      flow.TrsyPosAmountChangeCategory,
      flow.QuantityInPieces,
      @Semantics.amount.currencyCode: 'NominalCurrency'
      flow.NominalAmountInNominalCurrency,
      @Semantics.amount.currencyCode: 'NominalCurrency'
      flow.OriglNominalAmtInNominalCrcy,
      flow.NominalCurrency,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      flow.IndexCleanRpaytAmtInPosCrcy,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      flow.AmountInPositionCurrency,
      flow.PositionCurrency,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      flow.AmountInValuationCurrency,
      flow.ValuationCurrency,
      flow.CalculationDate,
      flow.CalcDateIsAsEndDateInclusive,
      flow.DueDate,
      flow.CalculationPeriodStartDate,
      flow.CalculationPeriodEndDate,
      flow.EffectiveInterestRate,
      flow.EffctvIntrstRateRdmptnSched,
      flow.NextEffectiveInterestRate,
      flow.FixedRedemptionSchedule,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      flow.CalculationBasis,
      flow.TreasuryPosition,
      flow.TreasuryPositionLedgerDate,
      flow.TrsySubPosition,

      // Transaction
      trans.TreasuryBusinessTransCategory,
      trans.TreasuryBusinessTransaction,
      trans.TrsyBusTransactionCreationDate,
      trans.TrsyBusTransactionCreationTime,
      trans.TrsyDerivedBusinessTransStatus,
      trans.TreasuryBusinessTransStatus,
      trans.TreasuryValuationArea,
      trans.CompanyCode,
      trans.OriglTrsyBusinessTransaction,
      trans.PostingDate,
      trans.PostingReversalDate,
      trans.TrsyIntragroupTransacStatus,
      trans.TreasuryUserStatisticsUUID
}
```
