---
name: I_FINTRANSINTEREST
description: "This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value
semantic_en: "This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?"
semantic_vi: "Fin Trans Interest Information — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "fin"
  - "trans"
  - "interest"
  - "information"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "direction"
  - "condition"
  - "category"
  - "flow"
  - "payt"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
---
# I_FINTRANSINTEREST

**This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialTransactionDirection` | ✓ | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionInterestCategory` |  | |  |  | `NUMC(2)` |  |
| `FinTransFlowPaytAmt` |  | |  |  | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransFlowPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `FinTransFlowIntrstRateFixDate` |  | |  |  | `DATS(8)` | Interest Rate Fixing Date |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `FinInterestRateAdjmtStatus` |  | |  |  | `CHAR(2)` | Status of Interest Rate Adjustment |
| `FinTransIntrstHndlgAtRollover` |  | | `_FinTrans._CurrentActivity` | `FinTransIntrstHndlgAtRollover` | `NUMC(1)` | Interest Handling At Rollover |
| `RolloverDfrrdIntrstPyoutDte` |  | | `_FinTrans._CurrentActivity` | `RolloverDfrrdIntrstPyoutDte` | `DATS(8)` | Payout Date for Deferred Interest |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_IntCat` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_AdjmtStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_IntCat` | `I_FinCndnInterestCategory` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_AdjmtStatus` | `I_FinIntrstRateAdjmtStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSINTRST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Interest Information'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

//view shall provide interest data based on flows
define view I_FinTransInterest
  with parameters
    //parameter needed to get interest flow valid on key date
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : vdm_v_key_date

  //all activities containing flows
  as select from R_FinTransCashFlowActivity as Activity
  //all flows of these activities (within where-condition they are restricted)
    inner join   R_FinTransFlow             as Flow      on  Activity.CompanyCode                 = Flow.CompanyCode
                                                         and Activity.FinancialTransaction        = Flow.FinancialTransaction
                                                         and Activity.FinancialInstrumentActivity = Flow.FinancialInstrumentActivity
    inner join   R_FinTransCondition        as Condition on  Flow.CompanyCode                    = Condition.CompanyCode
                                                         and Flow.FinancialTransaction           = Condition.FinancialTransaction
                                                         and Flow.FinancialInstrumentActivity    = Condition.FinancialInstrumentActivity
                                                         and Flow.FinancialTransactionDirection  = Condition.FinancialTransactionDirection
                                                         and Flow.FinConditionItem               = Condition.FinConditionItem
                                                         and Flow.ConditionItemValidityStartDate = Condition.ConditionItemValidityStartDate
                                                         and Flow.FinConditionSubItem            = Condition.FinConditionSubItem

  // dimensions, containing for example text fields
  association [0..1] to I_CompanyCode              as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction     as _FinTrans        on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                       and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransactionDirection  as _Direction       on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [0..1] to I_FinCndnInterestCategory  as _IntCat          on  $projection.FinConditionInterestCategory = _IntCat.FinConditionInterestCategory
  association [0..1] to I_Currency                 as _PaymentCurrency on  $projection.FinTransFlowPaytAmtCrcy = _PaymentCurrency.Currency
  association [0..1] to I_FinIntrstRateAdjmtStatus as _AdjmtStatus     on  $projection.FinInterestRateAdjmtStatus = _AdjmtStatus.FinInterestRateAdjmtStatus
{
      // exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Flow.CompanyCode                                         as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Flow.FinancialTransaction                                as FinancialTransaction,
      @ObjectModel.foreignKey.association: '_Direction'
  key Flow.FinancialTransactionDirection                       as FinancialTransactionDirection,
      @ObjectModel.foreignKey.association: '_IntCat'
      Condition.FinConditionInterestCategory                   as FinConditionInterestCategory,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      Flow.FinTransFlowPaytAmt                                 as FinTransFlowPaytAmt,
      @ObjectModel.foreignKey.association: '_PaymentCurrency'
      Flow.FinTransFlowPaytAmtCrcy                             as FinTransFlowPaytAmtCrcy,
      Flow.FinTransFlowPaymentDate                             as FinTransFlowPaymentDate,
      Flow.FinTransFlowPaymentDueDate                          as FinTransFlowPaymentDueDate,
      Flow.FinTransFlowIntrstRateFixDate                       as FinTransFlowIntrstRateFixDate,
      Flow.ConditionPercentageRate                             as ConditionPercentageRate,
      @ObjectModel.foreignKey.association: '_AdjmtStatus'
      Flow.FinInterestRateAdjmtStatus                          as FinInterestRateAdjmtStatus,

      _FinTrans._CurrentActivity.FinTransIntrstHndlgAtRollover as FinTransIntrstHndlgAtRollover,
      _FinTrans._CurrentActivity.RolloverDfrrdIntrstPyoutDte   as RolloverDfrrdIntrstPyoutDte,

      // exposed dimensions
      _CompanyCode,
      _FinTrans,
      _Direction,
      _IntCat,
      _PaymentCurrency,
      _AdjmtStatus
}

//restrict to flows, which are not blocked for specific reasons
where
       Flow.FinTransFlowPostingBlkgReason <> '2'
  and  Flow.FinTransFlowPostingBlkgReason <> '4'
  and  Flow.FinTransFlowPostingBlkgReason <> '5'
  and  Flow.FinTransFlowPostingBlkgReason <> '6'

  //flow category interest
  and(
       Flow.FinTransFlowCategory          =  '15'
    or Flow.FinTransFlowCategory          =  '20'
  )
  //key date must be in calculation period
  and  Flow.CalculationPeriodStartDate    <= $parameters.P_KeyDate
  and  Flow.CalculationPeriodEndDate      >= $parameters.P_KeyDate
  //main group
  and(
       Flow.FinInstrConditionLogicGroup   =  '1000'
    or Flow.FinInstrConditionLogicGroup   is initial
  )


//all activities containing flows
union select from R_FinTransCashFlowActivity as Activity
//all flows of these activities (within where-condition they are restricted)
  inner join      R_FinTransUnfixedFlow      as UnfixedFlow on  Activity.CompanyCode                 = UnfixedFlow.CompanyCode
                                                            and Activity.FinancialTransaction        = UnfixedFlow.FinancialTransaction
                                                            and Activity.FinancialInstrumentActivity = UnfixedFlow.FinancialInstrumentActivity
  inner join      R_FinTransCondition        as Condition   on  UnfixedFlow.CompanyCode                    = Condition.CompanyCode
                                                            and UnfixedFlow.FinancialTransaction           = Condition.FinancialTransaction
                                                            and UnfixedFlow.FinancialInstrumentActivity    = Condition.FinancialInstrumentActivity
                                                            and UnfixedFlow.FinancialTransactionDirection  = Condition.FinancialTransactionDirection
                                                            and UnfixedFlow.FinConditionItem               = Condition.FinConditionItem
                                                            and UnfixedFlow.ConditionItemValidityStartDate = Condition.ConditionItemValidityStartDate
                                                            and UnfixedFlow.FinConditionSubItem            = Condition.FinConditionSubItem

// dimensions, containing for example text fields
association [0..1] to I_CompanyCode              as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
association [0..1] to I_FinancialTransaction     as _FinTrans        on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                     and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
association [0..1] to I_FinTransactionDirection  as _Direction       on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
association [0..1] to I_FinCndnInterestCategory  as _IntCat          on  $projection.FinConditionInterestCategory = _IntCat.FinConditionInterestCategory
association [0..1] to I_Currency                 as _PaymentCurrency on  $projection.FinTransFlowPaytAmtCrcy = _PaymentCurrency.Currency
association [0..1] to I_FinIntrstRateAdjmtStatus as _AdjmtStatus     on  $projection.FinInterestRateAdjmtStatus = _AdjmtStatus.FinInterestRateAdjmtStatus
{
      // exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key UnfixedFlow.CompanyCode                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key UnfixedFlow.FinancialTransaction          as FinancialTransaction,
      @ObjectModel.foreignKey.association: '_Direction'
  key UnfixedFlow.FinancialTransactionDirection as FinancialTransactionDirection,
      @ObjectModel.foreignKey.association: '_IntCat'
      Condition.FinConditionInterestCategory    as FinConditionInterestCategory,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      UnfixedFlow.FinTransFlowPaytAmt           as FinTransFlowPaytAmt,
      @ObjectModel.foreignKey.association: '_PaymentCurrency'
      UnfixedFlow.FinTransFlowPaytAmtCrcy       as FinTransFlowPaytAmtCrcy,
      UnfixedFlow.FinTransFlowPaymentDate       as FinTransFlowPaymentDate,
      UnfixedFlow.FinTransFlowPaymentDueDate    as FinTransFlowPaymentDueDate,
      UnfixedFlow.FinTransFlowIntrstRateFixDate as FinTransFlowIntrstRateFixDate,
      UnfixedFlow.ConditionPercentageRate       as ConditionPercentageRate,
      @ObjectModel.foreignKey.association: '_AdjmtStatus'
      UnfixedFlow.FinInterestRateAdjmtStatus    as FinInterestRateAdjmtStatus,

      _FinTrans._CurrentActivity.FinTransIntrstHndlgAtRollover as FinTransIntrstHndlgAtRollover,
      _FinTrans._CurrentActivity.RolloverDfrrdIntrstPyoutDte   as RolloverDfrrdIntrstPyoutDte,

      // exposed dimensions
      _CompanyCode,
      _FinTrans,
      _Direction,
      _IntCat,
      _PaymentCurrency,
      _AdjmtStatus
}

//restrict to flows, which are not blocked for specific reasons
where
       UnfixedFlow.FinTransFlowPostingBlkgReason <> '2'
  and  UnfixedFlow.FinTransFlowPostingBlkgReason <> '4'
  and  UnfixedFlow.FinTransFlowPostingBlkgReason <> '5'
  and  UnfixedFlow.FinTransFlowPostingBlkgReason <> '6'

  //flow category interest
  and(
       UnfixedFlow.FinTransFlowCategory          =  '15'
    or UnfixedFlow.FinTransFlowCategory          =  '20'
  )
  //key date must be in calculation period
  and  UnfixedFlow.CalculationPeriodStartDate    <= $parameters.P_KeyDate
  and  UnfixedFlow.CalculationPeriodEndDate      >= $parameters.P_KeyDate
  //main group
  and(
       UnfixedFlow.FinInstrConditionLogicGroup   =  '1000'
    or UnfixedFlow.FinInstrConditionLogicGroup   is initial
  )
```
