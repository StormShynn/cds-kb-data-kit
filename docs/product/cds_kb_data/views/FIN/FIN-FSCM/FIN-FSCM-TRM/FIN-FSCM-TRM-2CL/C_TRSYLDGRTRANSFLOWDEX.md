---
name: C_TRSYLDGRTRANSFLOWDEX
description: "Trsyldgrtransflowdex"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryLedgerTransaction` | ✓ | |  |  |  |  |
| `TreasuryLedgerFlow` | ✓ | |  |  |  |  |
| `TreasuryTransactionFlow` |  | |  |  |  |  |
| `TrsyPosTransfSourceTargetCode` |  | |  |  |  |  |
| `TreasuryPositionTransferGroup` |  | |  |  |  |  |
| `TreasuryUpdateType` |  | |  |  |  |  |
| `TreasuryPositionTransferFactor` |  | |  |  |  |  |
| `TrsyPosQuantityChangeCategory` |  | |  |  |  |  |
| `TrsyPosAmountChangeCategory` |  | |  |  |  |  |
| `QuantityInPieces` |  | |  |  |  |  |
| `NominalAmountInNominalCurrency` |  | |  |  |  |  |
| `OriglNominalAmtInNominalCrcy` |  | |  |  |  |  |
| `NominalCurrency` |  | |  |  |  |  |
| `IndexCleanRpaytAmtInPosCrcy` |  | |  |  |  |  |
| `AmountInPositionCurrency` |  | |  |  |  |  |
| `PositionCurrency` |  | |  |  |  |  |
| `AmountInValuationCurrency` |  | |  |  |  |  |
| `ValuationCurrency` |  | |  |  |  |  |
| `CalculationDate` |  | |  |  |  |  |
| `CalcDateIsAsEndDateInclusive` |  | |  |  |  |  |
| `DueDate` |  | |  |  |  |  |
| `CalculationPeriodStartDate` |  | |  |  |  |  |
| `CalculationPeriodEndDate` |  | |  |  |  |  |
| `EffectiveInterestRate` |  | |  |  |  |  |
| `EffctvIntrstRateRdmptnSched` |  | |  |  |  |  |
| `NextEffectiveInterestRate` |  | |  |  |  |  |
| `FixedRedemptionSchedule` |  | |  |  |  |  |
| `CalculationBasis` |  | |  |  |  |  |
| `TreasuryPosition` |  | |  |  |  |  |
| `TreasuryPositionLedgerDate` |  | |  |  |  |  |
| `TrsySubPosition` |  | |  |  |  |  |
| `TreasuryBusinessTransCategory` |  | |  |  |  |  |
| `TreasuryBusinessTransaction` |  | |  |  |  |  |
| `TrsyBusTransactionCreationDate` |  | |  |  |  |  |
| `TrsyBusTransactionCreationTime` |  | |  |  |  |  |
| `TrsyDerivedBusinessTransStatus` |  | |  |  |  |  |
| `TreasuryBusinessTransStatus` |  | |  |  |  |  |
| `TreasuryValuationArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `OriglTrsyBusinessTransaction` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PostingReversalDate` |  | |  |  |  |  |
| `TrsyIntragroupTransacStatus` |  | |  |  |  |  |
| `TreasuryUserStatisticsUUID` |  | |  |  |  |  |

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
