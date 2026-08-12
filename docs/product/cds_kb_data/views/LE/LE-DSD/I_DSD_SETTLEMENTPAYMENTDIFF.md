---
name: I_DSD_SETTLEMENTPAYMENTDIFF
description: "Dsd Settlementpaymentdiff"
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - payment
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLEMENTPAYMENTDIFF

**Dsd Settlementpaymentdiff**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DSD_SettlementDocument` | ✓ | | `_PaymentDifferences` | `sld_doc_id` |  |  |
| `SettlementPaymentMethod` | ✓ | | `_PaymentDifferences` | `payment_type` |  |  |
| `SettlementCheckOutAmount` |  | | `_PaymentDifferences` | `amount_co` |  |  |
| `SettlementExpenditureAmount` |  | | `_PaymentDifferences` | `amount_expenses` |  |  |
| `SettlementReceiptsAmount` |  | | `_PaymentDifferences` | `amount_earnings` |  |  |
| `SettlementCheckInAmount` |  | | `_PaymentDifferences` | `amount_ci` |  |  |
| `SettlementDifferencesAmount` |  | | `_PaymentDifferences` | `amount_diff` |  |  |
| `SettlementDifferenceReason` |  | | `_PaymentDifferences` | `reason` |  |  |
| `Currency` |  | | `_PaymentDifferences` | `currency_amount` |  |  |
| `SettlmtPlndExpndtrRcptAmount` |  | | `_PaymentDifferences` | `amount_plan` |  |  |
| `MoneyDifferenceWithinTolerance` |  | | `_PaymentDifferences` | `amount_diff_eval` |  |  |
| `SettlementToleranceGroup` |  | | `_PaymentDifferences` | `tolgrp_id` |  |  |
| `Plant` |  | | `_Header` | `plant` |  |  |
| `_PaymentMethod` | | ✓ | | | | |
| `_DifferenceReason` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_MoneyDifference` | | ✓ | | | | |
| `_ToleranceGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentMethod` | `I_DSD_SettlementPaymentMethod` | [0..1] |
| `_DifferenceReason` | `I_DSD_SettlmtDifferenceReason` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_MoneyDifference` | `I_DSD_DifferenceEvaluation` | [0..1] |
| `_ToleranceGroup` | `I_DSD_SettlementToleranceGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Payment Differences'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementPaymentDiff
  as select from /dsd/sl_sld_mbal as _PaymentDifferences

  inner join /dsd/sl_sld_head as _Header on _PaymentDifferences.sld_doc_id = _Header.sld_doc_id 
  
  association [0..1] to I_DSD_SettlementPaymentMethod  as _PaymentMethod    on $projection.SettlementPaymentMethod        = _PaymentMethod.SettlementPaymentMethod
  association [0..1] to I_DSD_SettlmtDifferenceReason  as _DifferenceReason on $projection.SettlementDifferenceReason     = _DifferenceReason.SettlementDifferenceReason
  association [0..1] to I_Currency                     as _Currency         on $projection.Currency                       = _Currency.Currency
  association [0..1] to I_DSD_DifferenceEvaluation     as _MoneyDifference  on $projection.MoneyDifferenceWithinTolerance = _MoneyDifference.DifferenceEvaluation  
  association [0..1] to I_DSD_SettlementToleranceGroup as _ToleranceGroup   on $projection.SettlementToleranceGroup       = _ToleranceGroup.SettlementToleranceGroup

{
  key _PaymentDifferences.sld_doc_id       as DSD_SettlementDocument,
  key _PaymentDifferences.payment_type     as SettlementPaymentMethod,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_co        as SettlementCheckOutAmount,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_expenses  as SettlementExpenditureAmount,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_earnings  as SettlementReceiptsAmount,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_ci        as SettlementCheckInAmount,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_diff      as SettlementDifferencesAmount,
      _PaymentDifferences.reason           as SettlementDifferenceReason,
      _PaymentDifferences.currency_amount  as Currency,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      _PaymentDifferences.amount_plan      as SettlmtPlndExpndtrRcptAmount,
      _PaymentDifferences.amount_diff_eval as MoneyDifferenceWithinTolerance,
      _PaymentDifferences.tolgrp_id        as SettlementToleranceGroup,
      
      _Header.plant                        as Plant,

      _PaymentMethod,
      _DifferenceReason,
      _Currency,
      _MoneyDifference,
      _ToleranceGroup

}
```
