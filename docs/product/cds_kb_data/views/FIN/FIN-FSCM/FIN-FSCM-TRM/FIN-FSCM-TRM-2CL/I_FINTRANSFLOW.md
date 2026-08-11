---
name: I_FINTRANSFLOW
description: "This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value
semantic_en: "This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?"
semantic_vi: "Financial Transaction Flow — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "financial"
  - "transaction"
  - "flow"
  - "company"
  - "code"
  - "instrument"
  - "activity"
  - "trans"
  - "creation"
  - "date"
  - "time"
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
# I_FINTRANSFLOW

**This CDS view shows the cash flow of the current activity of financial transactions, including detailed information about dates, amounts, and payments. This CDS view provides the prerequisites for answering the following business questions: What is the cash flow of the current activity of a financial transaction? With which payment request is the flow paid?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` | ✓ | |  |  | `DATS(8)` | Entered On |
| `FinTransFlowCreationTime` | ✓ | |  |  | `TIMS(6)` | Flow Entry Time |
| `FinTransFlowNumber` | ✓ | |  |  | `NUMC(4)` | Transaction Flow |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinTransFlowCategory` |  | |  |  | `CHAR(2)` | Flow Category |
| `FinTransFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `FinTransFlowPaytAmt` |  | |  |  | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransFlowPaytAmtDirection` |  | |  |  | `CHAR(1)` | Flow Payment Amount Direction |
| `FinTransFlowNomAmt` |  | |  |  | `CURR(13)` | Flow Nominal Amount |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
| `FinTransFlowPositionAmount` |  | |  |  | `CURR(13)` | Financial Transaction Position Amount |
| `FinTransFlwPosAmtCrcy` |  | |  |  | `CUKY(5)` | Currency of Position Amount |
| `FinTransFlowInLoclCrcyPaytAmt` |  | |  |  | `CURR(13)` | Payment Amount in Local Currency |
| `LocalCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `FinTransFlowLoclCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Flow Conversion Rate in Local Currency |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransFlowPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `FinTransFlowIntrstRateFixDate` |  | |  |  | `DATS(8)` | Interest Rate Fixing Date |
| `CalculationPeriodStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `CalcPeriodStartDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for Start of a Calculation Period |
| `CalculationPeriodEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `CalcPeriodEndDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for the End of a Calculation Period |
| `NumberOfCalculationDays` |  | |  |  | `NUMC(6)` | Number of Days |
| `InterestCalculationMethod` |  | |  |  | `CHAR(1)` | Interest Calculation Method |
| `FinTransFlowCalcBaseAmount` |  | |  |  | `CURR(13)` | Calculation Base Amount |
| `FinTransFlowCalcBaseAmountCrcy` |  | |  |  | `CUKY(5)` | Currency of Calculation Basis |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `FinTransPresentationItemID` |  | |  |  | `CHAR(10)` | Presentation Item |
| `FinTransFlowPostingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowPostingBlkgReason` |  | |  |  | `NUMC(1)` | Reason Why Flow Is Blocked for Fixing |
| `FinTransFlowPostingRelease` |  | |  |  | `CHAR(1)` | Released for Flow Fixing |
| `FinTransFlowFixingStatus` |  | |  |  | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowFixingBlkgReason` |  | |  |  | `NUMC(1)` | Reason Why Flow Is Blocked for Fixing |
| `FinTransFlowIsFixingReleased` |  | |  |  | `CHAR(1)` | Released for Flow Fixing |
| `FinInterestRateAdjmtStatus` |  | |  |  | `CHAR(2)` | Status of Interest Rate Adjustment |
| `RepetitiveCode` |  | |  | `cast( Flow.RepetitiveCode as rpcode )` | `CHAR(20)` | Repetitive Code |
| `PaymentRepetitiveCode` |  | |  | `cast( Flow.RepetitiveCode as farp_repetitive_code )` | `CHAR(20)` | Repetitive Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for Own House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | Short Key for House Bank Account |
| `PayerPayee` |  | |  |  | `CHAR(10)` | Payer/Payee |
| `PayerPayeeBankDetail` |  | |  |  | `CHAR(4)` | Partner Bank Details |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentMethodsList` |  | |  |  | `CHAR(10)` | List of Respected Payment Methods |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment method supplement |
| `TreasuryIndividualPayment` |  | |  |  | `CHAR(1)` | Individual Payment |
| `TreasuryPaymentIsIndividual` |  | |  |  | `CHAR(1)` | Individual Payment |
| `TrsyPaytGroupingSameDrctnIsRqd` |  | |  |  | `CHAR(1)` | Same Direction Necessary for Joint Payment? |
| `TreasuryPaymentRequestGrouping` |  | |  |  | `CHAR(1)` | Determine Grouping Definition |
| `TreasuryIntGrpgForPaytValue` |  | |  |  | `CHAR(20)` | Grouping Field for Automatic Payments |
| `FinancialTransactionDirection` |  | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinInstrConditionLogicGroup` |  | |  |  | `NUMC(4)` | Condition Logic Group |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `FinTransFlwLoclCrcyAmtCalcType` |  | |  |  | `CHAR(1)` | Indicator for Translation into Local Currency |
| `FinTransFlowCalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
| `FlowCalcDateIsExclusive` |  | |  |  | `CHAR(1)` | Exclusive Indicator for Calculation Date |
| `FlowCalcDateIsMonthEnd` |  | |  |  | `CHAR(1)` | Month-End Indicator for the Calculation Date |
| `IntrstCalcMethFactoryCalendar` |  | |  |  | `CHAR(2)` | Interest Calendar |
| `InterestCalculationType` |  | |  |  | `NUMC(1)` | Type of Interest Calculation |
| `CalcPeriodStartDateIsInclusive` |  | |  |  | `CHAR(1)` | Inclusive Indicator for Start of Calculation Period |
| `CalcPeriodEndDateIsInclusive` |  | |  |  | `CHAR(1)` | Inclusive indicator for end of calculation period |
| `FinTransFlwDerivationProcedure` |  | |  |  | `CHAR(5)` | Procedure for Generating Derived Flows |
| `FinTransPaytRateInPercent` |  | |  | `cast(Flow.PremiumPriceQuotedInPercent as tb_pwkurs)` | `DEC(10)` | Price as Percentage Quotation |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `FinTransFlowCreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `FinTransFlowLastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `FinTransFlowLastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `FinTransFlowLastChangeTime` |  | |  |  | `TIMS(6)` | Time Changed |
| `FinTransFlwAltvPaytDetIsStated` |  | |  |  | `CHAR(1)` | Alternative Payment Details Stated in Flow |
| `TrsyPaytIsPostdToGLAccount` |  | |  |  | `CHAR(1)` | Payment Is Posted to GL Account |
| `TrsyPaytRequestIsGenerated` |  | |  |  | `CHAR(1)` | Generate Payment Request |
| `FinTransFlowIsReversed` |  | |  |  | `CHAR(1)` | Flow Reversal in Treasury |
| `NrOfBaseDaysPerCalcPeriod` |  | |  |  | `NUMC(6)` | Number of Base Days in a Calculation Period |
| `FinTransFlowReferencedFlowType` |  | |  |  | `CHAR(4)` | Referenced Flow Type |
| `FinTransFlowPriceIndexValue` |  | |  |  | `DEC(18)` | Index Value (Independent of Basis) |
| `RepetitiveCodeReferenceText` |  | |  |  | `CHAR(50)` | Reference Text for Repetitive Code |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `TrsyPaymentSupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `PaymentWithAccruedIntrstAmount` |  | |  |  | `CURR(23)` | Payment Amount in Payment Currency |
| `FinTransFlwDerivdFlwGrpgTerm` |  | |  |  | `CHAR(16)` | Grouping Term for Derived Flows |
| `FXRateAdjustmentFixingDate` |  | |  |  | `DATS(8)` | Fixing Date |
| `FXRateAdjustmentStatus` |  | |  |  | `CHAR(2)` | Status of Rate Fixing |
| `FinTransFlowFXRateReadDate` |  | |  |  | `DATS(8)` | Date of the Exchange Rate Read |
| `PrcIdxAdjmtFixingLowDate` |  | |  |  | `DATS(8)` | Index Fixing Date Low |
| `FinTransFlowPrcIdxReadLowDate` |  | |  |  | `DATS(8)` | Index Read Date Low |
| `PrcIdxAdjmtFixingHighDate` |  | |  |  | `DATS(8)` | Index Fixing Date High |
| `FinTransFlowPrcIdxReadHighDate` |  | |  |  | `DATS(8)` | Index Read Date High |
| `PrcIdxAdjustmentStatus` |  | |  |  | `CHAR(2)` | Status of Price Index Fixing |
| `FinTransFlowIndexCleanAmount` |  | |  |  | `CURR(13)` | Amount Index-Clean that Changes the Position |
| `FinTransFlowPaytRsnIsChgd` |  | |  |  | `CHAR(1)` | Changed Status of Payment Reason |
| `FinCndnCrsRefcdAccmlnCndnGrp` |  | |  |  | `NUMC(4)` | Cross-Referenced Condition Group for Accumulation |
| `FinTransFlwReltdAccumulatingID` |  | |  |  | `CHAR(40)` | ID of Related Accumulating Flow |
| `FinTransFlowAccumulatingFlowID` |  | |  |  | `CHAR(40)` | Accumulating Flow ID |
| `FinTransFlowModificationStatus` |  | |  |  | `NUMC(1)` | Change Indicator for FiMa Flow Records |
| `TrsyTransacMgmtBizTransaction` |  | |  |  | `CHAR(60)` | Business Transaction Identifier in Transaction Management |
| `PaymentRequest` |  | |  |  | `CHAR(10)` | Key Number for Payment Request |
| `FinTransFlowPostingDate` |  | |  |  | `DATS(8)` | Flow Posting Date |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_FlowCategory` | | ✓ | | | | |
| `_FlowType` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_BaseAmtCurrency` | | ✓ | | | | |
| `_PostingStatus` | | ✓ | | | | |
| `_PostingBlkgRsn` | | ✓ | | | | |
| `_FixingStatus` | | ✓ | | | | |
| `_FixingBlkgRsn` | | ✓ | | | | |
| `_AdjmtStatus` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_PayerPayee` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_PaymentMethodSupp` | | ✓ | | | | |
| `_PaymentRequest` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_FlowAcctgPaytInfo` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_FlowCategory` | `I_FinTransFlowCategory` | [0..1] |
| `_FlowType` | `I_FinTransFlowType` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_LocalCurrency` | `I_Currency` | [0..1] |
| `_BaseAmtCurrency` | `I_Currency` | [0..1] |
| `_PostingStatus` | `I_FinTransFlowPostgStatus` | [0..1] |
| `_PostingBlkgRsn` | `I_FinTransFlowPostgBlkgRsn` | [0..1] |
| `_FixingStatus` | `I_FinTransFlowFixingStatus` | [0..1] |
| `_FixingBlkgRsn` | `I_FinTransFlowFixingBlkgRsn` | [0..1] |
| `_AdjmtStatus` | `I_FinIntrstRateAdjmtStatus` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_PayerPayee` | `I_BusinessPartner` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PaymentMethod` | `I_PaymentMethod` | [0..1] |
| `_PaymentMethodSupp` | `I_Paymentmethodsupplement` | [0..1] |
| `_PaymentRequest` | `I_PaymentRequest` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_FlowAcctgPaytInfo` | `I_FinTransFlowAcctgPaytInfo` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSFLOW')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSFLOW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Flow'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN']
//view shall provide flow as it is visible in FTR_EDIT on cash flow tab
//therefore flows from several cash flow activities have to be provided
define view I_FinTransFlow
  //all activities containing flows
  as select from R_FinTransCashFlowActivity as Activity
  //all flows of these activities (within where-condition they are restricted)
    inner join   R_FinTransFlow             as Flow on  Activity.CompanyCode                           =  Flow.CompanyCode
                                                    and Activity.FinancialTransaction                  =  Flow.FinancialTransaction
                                                    and Activity.FinancialInstrumentActivity           =  Flow.FinancialInstrumentActivity
                                                    and (
                                                       (
                                                                                                       not(
                                                           Flow.FinTransFlowCategory                   =  '12'
                                                           and(
                                                             Activity.FinancialInstrProductCategory    =  '850'
                                                             or Activity.FinancialInstrProductCategory =  '860'
                                                           )
                                                         ) //repayment
                                                       )
                                                       or(
                                                         (
                                                           Activity.FinancialInstrProductCategory      =  '850'
                                                           or Activity.FinancialInstrProductCategory   =  '860'
                                                         )
                                                         and Flow.FinTransFlowCategory                 =  '12'
                                                         and Flow.FinancialInstrumentActivity          =  Activity.FinInstrLastActiveActivity
                                                       )
                                                     )

  // dimensions, containing for example text fields
  association [0..1] to I_CompanyCode               as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction      as _FinTrans          on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                          and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivity          as _Activity          on  $projection.CompanyCode                 = _Activity.CompanyCode
                                                                          and $projection.FinancialTransaction        = _Activity.FinancialTransaction
                                                                          and $projection.FinancialInstrumentActivity = _Activity.FinancialInstrumentActivity
  association [0..1] to I_TreasuryContractType      as _ContractType      on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..1] to I_FinTransFlowCategory      as _FlowCategory      on  $projection.FinTransFlowCategory = _FlowCategory.FinTransFlowCategory
  association [0..1] to I_FinTransFlowType          as _FlowType          on  $projection.TreasuryContractType = _FlowType.TreasuryContractType
                                                                          and $projection.FinTransFlowType     = _FlowType.FinTransFlowType
  association [0..1] to I_Currency                  as _PaymentCurrency   on  $projection.FinTransFlowPaytAmtCrcy = _PaymentCurrency.Currency
  association [0..1] to I_Currency                  as _NominalCurrency   on  $projection.FinTransFlowNomAmtCrcy = _NominalCurrency.Currency
  association [0..1] to I_Currency                  as _PositionCurrency  on  $projection.FinTransFlwPosAmtCrcy = _PositionCurrency.Currency
  association [0..1] to I_Currency                  as _LocalCurrency     on  $projection.LocalCurrency = _LocalCurrency.Currency
  association [0..1] to I_Currency                  as _BaseAmtCurrency   on  $projection.FinTransFlowCalcBaseAmountCrcy = _BaseAmtCurrency.Currency
  association [0..1] to I_FinTransFlowPostgStatus   as _PostingStatus     on  $projection.FinTransFlowPostingStatus = _PostingStatus.FinTransFlowPostingStatus
  association [0..1] to I_FinTransFlowPostgBlkgRsn  as _PostingBlkgRsn    on  $projection.FinTransFlowPostingBlkgReason = _PostingBlkgRsn.FinTransFlowPostingBlkgReason
  association [0..1] to I_FinTransFlowFixingStatus  as _FixingStatus      on  $projection.FinTransFlowFixingStatus = _FixingStatus.FinTransFlowFixingStatus
  association [0..1] to I_FinTransFlowFixingBlkgRsn as _FixingBlkgRsn     on  $projection.FinTransFlowFixingBlkgReason = _FixingBlkgRsn.FinTransFlowFixingBlkgReason
  association [0..1] to I_FinIntrstRateAdjmtStatus  as _AdjmtStatus       on  $projection.FinInterestRateAdjmtStatus = _AdjmtStatus.FinInterestRateAdjmtStatus
  association [0..1] to I_Housebank                 as _HouseBank         on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                          and $projection.HouseBank   = _HouseBank.HouseBank
  association [0..1] to I_HouseBankAccount          as _HouseBankAccount  on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                          and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                          and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
  association [0..1] to I_BusinessPartner           as _PayerPayee        on  $projection.PayerPayee = _PayerPayee.BusinessPartner
  association [0..1] to I_Country                   as _Country           on  $projection.Country = _Country.Country
  association [0..1] to I_PaymentMethod             as _PaymentMethod     on  $projection.PaymentMethod = _PaymentMethod.PaymentMethod
                                                                          and $projection.Country       = _PaymentMethod.Country
  association [0..1] to I_Paymentmethodsupplement   as _PaymentMethodSupp on  $projection.PaymentMethodSupplement = _PaymentMethodSupp.PaymentMethodSupplement
  association [0..1] to I_PaymentRequest            as _PaymentRequest    on  $projection.PaymentRequest = _PaymentRequest.PaymentRequest
  association [0..1] to I_FinTransactionDirection   as _Direction         on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [1..1] to I_FinTransFlowAcctgPaytInfo as _FlowAcctgPaytInfo on  $projection.TrsyTransacMgmtBizTransaction = _FlowAcctgPaytInfo.TrsyTransacMgmtBizTransaction

{
      //exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Flow.CompanyCode                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Flow.FinancialTransaction                           as FinancialTransaction,
      @ObjectModel.foreignKey.association: '_Activity'
  key Flow.FinancialInstrumentActivity                    as FinancialInstrumentActivity,
  key Flow.FinTransFlowCreationDate                       as FinTransFlowCreationDate,
  key Flow.FinTransFlowCreationTime                       as FinTransFlowCreationTime,
  key Flow.FinTransFlowNumber                             as FinTransFlowNumber,

      @ObjectModel.foreignKey.association: '_ContractType'
      Flow.TreasuryContractType                           as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_FlowCategory'
      Flow.FinTransFlowCategory                           as FinTransFlowCategory,
      @ObjectModel.foreignKey.association: '_FlowType'
      Flow.FinTransFlowType                               as FinTransFlowType,

      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      Flow.FinTransFlowPaytAmt                            as FinTransFlowPaytAmt,
      @ObjectModel.foreignKey.association: '_PaymentCurrency'
      @Semantics.currencyCode: true
      Flow.FinTransFlowPaytAmtCrcy                        as FinTransFlowPaytAmtCrcy,
      @EndUserText.label: 'Payment Amount Direction'
      @EndUserText.quickInfo: 'Payment Amount Direction'
      Flow.FinTransFlowPaytAmtDirection                   as FinTransFlowPaytAmtDirection,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      @EndUserText.label: 'Nominal Amount'
      @EndUserText.quickInfo: 'Nominal Amount'
      Flow.FinTransFlowNomAmt                             as FinTransFlowNomAmt,
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      @EndUserText.label: 'Nominal Amount Currency'
      @EndUserText.quickInfo: 'Nominal Amount Currency'
      Flow.FinTransFlowNomAmtCrcy                         as FinTransFlowNomAmtCrcy,
      @Semantics.amount.currencyCode: 'FinTransFlwPosAmtCrcy'
      Flow.FinTransFlowPositionAmount                     as FinTransFlowPositionAmount,
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      Flow.FinTransFlwPosAmtCrcy                          as FinTransFlwPosAmtCrcy,
      @Semantics.amount.currencyCode: 'LocalCurrency'
      Flow.FinTransFlowInLoclCrcyPaytAmt                  as FinTransFlowInLoclCrcyPaytAmt,
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      _CompanyCode.Currency                               as LocalCurrency,
      Flow.FinTransFlowLoclCrcyCnvrsnRate                 as FinTransFlowLoclCrcyCnvrsnRate,
      Flow.FinTransFlowPaymentDate                        as FinTransFlowPaymentDate,
      Flow.FinTransFlowPaymentDueDate                     as FinTransFlowPaymentDueDate,
      Flow.FinTransFlowIntrstRateFixDate                  as FinTransFlowIntrstRateFixDate,

      Flow.CalculationPeriodStartDate                     as CalculationPeriodStartDate,
      @Semantics.booleanIndicator: true
      Flow.CalcPeriodStartDateIsMonthEnd                  as CalcPeriodStartDateIsMonthEnd,
      Flow.CalculationPeriodEndDate                       as CalculationPeriodEndDate,
      @Semantics.booleanIndicator: true
      Flow.CalcPeriodEndDateIsMonthEnd                    as CalcPeriodEndDateIsMonthEnd,
      Flow.NumberOfCalculationDays                        as NumberOfCalculationDays,
      Flow.InterestCalculationMethod                      as InterestCalculationMethod,
      @Semantics.amount.currencyCode: 'FinTransFlowCalcBaseAmountCrcy'
      Flow.FinTransFlowCalcBaseAmount                     as FinTransFlowCalcBaseAmount,
      @ObjectModel.foreignKey.association: '_BaseAmtCurrency'
      Flow.FinTransFlowCalcBaseAmountCrcy                 as FinTransFlowCalcBaseAmountCrcy,

      Flow.ConditionPercentageRate                        as ConditionPercentageRate,

      Flow.FinTransPresentationItemID                     as FinTransPresentationItemID,

      @ObjectModel.foreignKey.association: '_PostingStatus'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowFixingStatus'
      Flow.FinTransFlowPostingStatus                      as FinTransFlowPostingStatus,
      @ObjectModel.foreignKey.association: '_PostingBlkgRsn'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowFixingBlkgReason'
      Flow.FinTransFlowPostingBlkgReason                  as FinTransFlowPostingBlkgReason,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowIsFixingReleased'
      Flow.FinTransFlowPostingRelease                     as FinTransFlowPostingRelease,


      @ObjectModel.foreignKey.association: '_FixingStatus'
      Flow.FinTransFlowFixingStatus                       as FinTransFlowFixingStatus,
      @ObjectModel.foreignKey.association: '_FixingBlkgRsn'
      Flow.FinTransFlowFixingBlkgReason                   as FinTransFlowFixingBlkgReason,
      Flow.FinTransFlowIsFixingReleased                   as FinTransFlowIsFixingReleased,

      @ObjectModel.foreignKey.association: '_AdjmtStatus'
      Flow.FinInterestRateAdjmtStatus                     as FinInterestRateAdjmtStatus,

      //@ObjectModel.foreignKey.association:  not possible to I_RepetitiveCode as it is not released
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PaymentRepetitiveCode'
      cast( Flow.RepetitiveCode as rpcode )               as RepetitiveCode,
      cast( Flow.RepetitiveCode as farp_repetitive_code ) as PaymentRepetitiveCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
      Flow.HouseBank                                      as HouseBank,
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      Flow.HouseBankAccount                               as HouseBankAccount,
      @ObjectModel.foreignKey.association: '_PayerPayee'
      Flow.PayerPayee                                     as PayerPayee,
      Flow.PayerPayeeBankDetail                           as PayerPayeeBankDetail,
      @ObjectModel.foreignKey.association: '_Country'
      _CompanyCode.Country                                as Country,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      Flow.PaymentMethod                                  as PaymentMethod,
      Flow.PaymentMethodsList                             as PaymentMethodsList,
      @ObjectModel.foreignKey.association: '_PaymentMethodSupp'
      Flow.PaymentMethodSupplement                        as PaymentMethodSupplement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'TreasuryPaymentIsIndividual'
      Flow.TreasuryIndividualPayment                      as TreasuryIndividualPayment,
      Flow.TreasuryPaymentIsIndividual                    as TreasuryPaymentIsIndividual,
      Flow.TrsyPaytGroupingSameDrctnIsRqd                 as TrsyPaytGroupingSameDrctnIsRqd,
      Flow.TreasuryPaymentRequestGrouping                 as TreasuryPaymentRequestGrouping,
      Flow.TreasuryIntGrpgForPaytValue                    as TreasuryIntGrpgForPaytValue,

      @ObjectModel.foreignKey.association: '_Direction'
      Flow.FinancialTransactionDirection                  as FinancialTransactionDirection,
      Flow.FinInstrConditionLogicGroup                    as FinInstrConditionLogicGroup,

      Flow.AssignmentReference                            as AssignmentReference,
      Flow.FinTransFlwLoclCrcyAmtCalcType                 as FinTransFlwLoclCrcyAmtCalcType,
      Flow.FinTransFlowCalculationDate                    as FinTransFlowCalculationDate,
      Flow.FlowCalcDateIsExclusive                        as FlowCalcDateIsExclusive,
      Flow.FlowCalcDateIsMonthEnd                         as FlowCalcDateIsMonthEnd,
      Flow.IntrstCalcMethFactoryCalendar                  as IntrstCalcMethFactoryCalendar,
      Flow.InterestCalculationType                        as InterestCalculationType,
      Flow.CalcPeriodStartDateIsInclusive                 as CalcPeriodStartDateIsInclusive,
      Flow.CalcPeriodEndDateIsInclusive                   as CalcPeriodEndDateIsInclusive,
      Flow.FinTransFlwDerivationProcedure                 as FinTransFlwDerivationProcedure,
      cast(Flow.PremiumPriceQuotedInPercent as tb_pwkurs) as FinTransPaytRateInPercent,
      Flow.PaymentReason                                  as PaymentReason,


      Flow.FinTransFlowCreatedByUser                      as FinTransFlowCreatedByUser,
      Flow.FinTransFlowLastChangedByUser                  as FinTransFlowLastChangedByUser,
      Flow.FinTransFlowLastChangeDate                     as FinTransFlowLastChangeDate,
      Flow.FinTransFlowLastChangeTime                     as FinTransFlowLastChangeTime,
      Flow.FinTransFlwAltvPaytDetIsStated                 as FinTransFlwAltvPaytDetIsStated,
      Flow.TrsyPaytIsPostdToGLAccount                     as TrsyPaytIsPostdToGLAccount,
      Flow.TrsyPaytRequestIsGenerated                     as TrsyPaytRequestIsGenerated,
      Flow.FinTransFlowIsReversed                         as FinTransFlowIsReversed,
      Flow.NrOfBaseDaysPerCalcPeriod                      as NrOfBaseDaysPerCalcPeriod,
      Flow.FinTransFlowReferencedFlowType                 as FinTransFlowReferencedFlowType,
      Flow.FinTransFlowPriceIndexValue                    as FinTransFlowPriceIndexValue,
      Flow.RepetitiveCodeReferenceText                    as RepetitiveCodeReferenceText,
      Flow.StateCentralBankPaymentReason                  as StateCentralBankPaymentReason,
      Flow.TrsyPaymentSupplyingCountry                    as TrsyPaymentSupplyingCountry,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      Flow.PaymentWithAccruedIntrstAmount                 as PaymentWithAccruedIntrstAmount,
      Flow.FinTransFlwDerivdFlwGrpgTerm                   as FinTransFlwDerivdFlwGrpgTerm,
      Flow.FXRateAdjustmentFixingDate                     as FXRateAdjustmentFixingDate,
      Flow.FXRateAdjustmentStatus                         as FXRateAdjustmentStatus,
      Flow.FinTransFlowFXRateReadDate                     as FinTransFlowFXRateReadDate,
      Flow.PrcIdxAdjmtFixingLowDate                       as PrcIdxAdjmtFixingLowDate,
      Flow.FinTransFlowPrcIdxReadLowDate                  as FinTransFlowPrcIdxReadLowDate,
      Flow.PrcIdxAdjmtFixingHighDate                      as PrcIdxAdjmtFixingHighDate,
      Flow.FinTransFlowPrcIdxReadHighDate                 as FinTransFlowPrcIdxReadHighDate,
      Flow.PrcIdxAdjustmentStatus                         as PrcIdxAdjustmentStatus,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      Flow.FinTransFlowIndexCleanAmount                   as FinTransFlowIndexCleanAmount,
      @Semantics.booleanIndicator: true
      Flow.FinTransFlowPaytRsnIsChgd                      as FinTransFlowPaytRsnIsChgd,
      Flow.FinCndnCrsRefcdAccmlnCndnGrp                   as FinCndnCrsRefcdAccmlnCndnGrp,
      Flow.FinTransFlwReltdAccumulatingID                 as FinTransFlwReltdAccumulatingID,
      Flow.FinTransFlowAccumulatingFlowID                 as FinTransFlowAccumulatingFlowID,
      Flow.FinTransFlowModificationStatus                 as FinTransFlowModificationStatus,


      Flow.TrsyTransacMgmtBizTransaction                  as TrsyTransacMgmtBizTransaction,


      // previous wrongly exposed field, correct value expose will be handled uplayer
      //@ObjectModel.foreignKey.association: '_PaymentRequest' - not possible as target view has no representative key
      Flow.PaymentRequest                                 as PaymentRequest,
      Flow.FinTransFlowPostingDate                        as FinTransFlowPostingDate,

      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _FinTrans,
      _Activity,
      _ContractType,
      _FlowCategory,
      _FlowType,
      _PaymentCurrency,
      _NominalCurrency,
      _PositionCurrency,
      _LocalCurrency,
      _BaseAmtCurrency,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_FixingStatus'
      _PostingStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_FixingBlkgRsn'
      _PostingBlkgRsn,
      _FixingStatus,
      _FixingBlkgRsn,
      _AdjmtStatus,
      _HouseBank,
      _HouseBankAccount,
      _PayerPayee,
      _Country,
      _PaymentMethod,
      _PaymentMethodSupp,
      _PaymentRequest,
      _Direction,
      _FlowAcctgPaytInfo
}
//restrict to flows, which are not blocked for specific reasons
where
      Flow.FinTransFlowPostingBlkgReason <> '2'
  and Flow.FinTransFlowPostingBlkgReason <> '4'
  and Flow.FinTransFlowPostingBlkgReason <> '5'
  and Flow.FinTransFlowPostingBlkgReason <> '6'


//variable unfixed flows are stored in own database tables - these flows have to be added
union all select from R_FinTransCashFlowActivity as Activity
  inner join          R_FinTransUnfixedFlow      as Flow_Unfixed on  Activity.CompanyCode                 = Flow_Unfixed.CompanyCode
                                                                 and Activity.FinancialTransaction        = Flow_Unfixed.FinancialTransaction
                                                                 and Activity.FinancialInstrumentActivity = Flow_Unfixed.FinancialInstrumentActivity
// dimensions, containing for example text fields
association [0..1] to I_CompanyCode               as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
association [0..1] to I_FinancialTransaction      as _FinTrans          on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                        and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
association [0..1] to I_FinTransActivity          as _Activity          on  $projection.CompanyCode                 = _Activity.CompanyCode
                                                                        and $projection.FinancialTransaction        = _Activity.FinancialTransaction
                                                                        and $projection.FinancialInstrumentActivity = _Activity.FinancialInstrumentActivity
association [0..1] to I_TreasuryContractType      as _ContractType      on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
association [0..1] to I_FinTransFlowCategory      as _FlowCategory      on  $projection.FinTransFlowCategory = _FlowCategory.FinTransFlowCategory
association [0..1] to I_FinTransFlowType          as _FlowType          on  $projection.TreasuryContractType = _FlowType.TreasuryContractType
                                                                        and $projection.FinTransFlowType     = _FlowType.FinTransFlowType
association [0..1] to I_Currency                  as _PaymentCurrency   on  $projection.FinTransFlowPaytAmtCrcy = _PaymentCurrency.Currency
association [0..1] to I_Currency                  as _NominalCurrency   on  $projection.FinTransFlowNomAmtCrcy = _NominalCurrency.Currency
association [0..1] to I_Currency                  as _PositionCurrency  on  $projection.FinTransFlwPosAmtCrcy = _PositionCurrency.Currency
association [0..1] to I_Currency                  as _LocalCurrency     on  $projection.LocalCurrency = _LocalCurrency.Currency
association [0..1] to I_Currency                  as _BaseAmtCurrency   on  $projection.FinTransFlowCalcBaseAmountCrcy = _BaseAmtCurrency.Currency
association [0..1] to I_FinTransFlowPostgStatus   as _PostingStatus     on  $projection.FinTransFlowPostingStatus = _PostingStatus.FinTransFlowPostingStatus
association [0..1] to I_FinTransFlowPostgBlkgRsn  as _PostingBlkgRsn    on  $projection.FinTransFlowPostingBlkgReason = _PostingBlkgRsn.FinTransFlowPostingBlkgReason
association [0..1] to I_FinTransFlowFixingStatus  as _FixingStatus      on  $projection.FinTransFlowFixingStatus = _FixingStatus.FinTransFlowFixingStatus
association [0..1] to I_FinTransFlowFixingBlkgRsn as _FixingBlkgRsn     on  $projection.FinTransFlowFixingBlkgReason = _FixingBlkgRsn.FinTransFlowFixingBlkgReason
association [0..1] to I_FinIntrstRateAdjmtStatus  as _AdjmtStatus       on  $projection.FinInterestRateAdjmtStatus = _AdjmtStatus.FinInterestRateAdjmtStatus
association [0..1] to I_Housebank                 as _HouseBank         on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                        and $projection.HouseBank   = _HouseBank.HouseBank
association [0..1] to I_HouseBankAccount          as _HouseBankAccount  on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                        and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                        and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
association [0..1] to I_BusinessPartner           as _PayerPayee        on  $projection.PayerPayee = _PayerPayee.BusinessPartner
association [0..1] to I_Country                   as _Country           on  $projection.Country = _Country.Country
association [0..1] to I_PaymentMethod             as _PaymentMethod     on  $projection.PaymentMethod = _PaymentMethod.PaymentMethod
                                                                        and $projection.Country       = _PaymentMethod.Country
association [0..1] to I_Paymentmethodsupplement   as _PaymentMethodSupp on  $projection.PaymentMethodSupplement = _PaymentMethodSupp.PaymentMethodSupplement
association [0..1] to I_PaymentRequest            as _PaymentRequest    on  $projection.PaymentRequest = _PaymentRequest.PaymentRequest
association [0..1] to I_FinTransactionDirection   as _Direction         on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
association [1..1] to I_FinTransFlowAcctgPaytInfo as _FlowAcctgPaytInfo on  $projection.TrsyTransacMgmtBizTransaction = _FlowAcctgPaytInfo.TrsyTransacMgmtBizTransaction

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Flow_Unfixed.CompanyCode                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Flow_Unfixed.FinancialTransaction                           as FinancialTransaction,
      @ObjectModel.foreignKey.association: '_Activity'
  key Flow_Unfixed.FinancialInstrumentActivity                    as FinancialInstrumentActivity,
  key Flow_Unfixed.FinTransFlowCreationDate                       as FinTransFlowCreationDate,
  key Flow_Unfixed.FinTransFlowCreationTime                       as FinTransFlowCreationTime,
  key Flow_Unfixed.FinTransFlowNumber                             as FinTransFlowNumber,

      @ObjectModel.foreignKey.association: '_ContractType'
      Flow_Unfixed.TreasuryContractType                           as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_FlowCategory'
      Flow_Unfixed.FinTransFlowCategory                           as FinTransFlowCategory,
      @ObjectModel.foreignKey.association: '_FlowType'
      Flow_Unfixed.FinTransFlowType                               as FinTransFlowType,

      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      Flow_Unfixed.FinTransFlowPaytAmt                            as FinTransFlowPaytAmt,
      @ObjectModel.foreignKey.association: '_PaymentCurrency'
      @Semantics.currencyCode: true
      Flow_Unfixed.FinTransFlowPaytAmtCrcy                        as FinTransFlowPaytAmtCrcy,
      @EndUserText.label: 'Payment Amount Direction'
      @EndUserText.quickInfo: 'Payment Amount Direction'
      Flow_Unfixed.FinTransFlowPaytAmtDirection                   as FinTransFlowPaytAmtDirection,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      @EndUserText.label: 'Nominal Amount'
      @EndUserText.quickInfo: 'Nominal Amount'
      Flow_Unfixed.FinTransFlowNomAmt                             as FinTransFlowNomAmt,
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      @EndUserText.label: 'Nominal Amount Currency'
      @EndUserText.quickInfo: 'Nominal Amount Currency'
      Flow_Unfixed.FinTransFlowNomAmtCrcy                         as FinTransFlowNomAmtCrcy,
      @Semantics.amount.currencyCode: 'FinTransFlwPosAmtCrcy'
      Flow_Unfixed.FinTransFlowPositionAmount                     as FinTransFlowPositionAmount,
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      Flow_Unfixed.FinTransFlwPosAmtCrcy                          as FinTransFlwPosAmtCrcy,
      @Semantics.amount.currencyCode: 'LocalCurrency'
      Flow_Unfixed.FinTransFlowInLoclCrcyPaytAmt                  as FinTransFlowInLoclCrcyPaytAmt,
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      Flow_Unfixed.LocalCurrency                                  as LocalCurrency,
      Flow_Unfixed.FinTransFlowLoclCrcyCnvrsnRate                 as FinTransFlowLoclCrcyCnvrsnRate,
      Flow_Unfixed.FinTransFlowPaymentDate                        as FinTransFlowPaymentDate,
      Flow_Unfixed.FinTransFlowPaymentDueDate                     as FinTransFlowPaymentDueDate,
      Flow_Unfixed.FinTransFlowIntrstRateFixDate                  as FinTransFlowIntrstRateFixDate,

      Flow_Unfixed.CalculationPeriodStartDate                     as CalculationPeriodStartDate,
      @Semantics.booleanIndicator: true
      Flow_Unfixed.CalcPeriodStartDateIsMonthEnd                  as CalcPeriodStartDateIsMonthEnd,
      Flow_Unfixed.CalculationPeriodEndDate                       as CalculationPeriodEndDate,
      @Semantics.booleanIndicator: true
      Flow_Unfixed.CalcPeriodEndDateIsMonthEnd                    as CalcPeriodEndDateIsMonthEnd,
      Flow_Unfixed.NumberOfCalculationDays                        as NumberOfCalculationDays,
      Flow_Unfixed.InterestCalculationMethod                      as InterestCalculationMethod,
      @Semantics.amount.currencyCode: 'FinTransFlowCalcBaseAmountCrcy'
      Flow_Unfixed.FinTransFlowCalcBaseAmount                     as FinTransFlowCalcBaseAmount,
      @ObjectModel.foreignKey.association: '_BaseAmtCurrency'
      Flow_Unfixed.FinTransFlowCalcBaseAmountCrcy                 as FinTransFlowCalcBaseAmountCrcy,

      Flow_Unfixed.ConditionPercentageRate                        as ConditionPercentageRate,

      Flow_Unfixed.FinTransPresentationItemID                     as FinTransPresentationItemID,

      @ObjectModel.foreignKey.association: '_PostingStatus'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowFixingStatus'
      Flow_Unfixed.FinTransFlowPostingStatus                      as FinTransFlowPostingStatus,
      @ObjectModel.foreignKey.association: '_PostingBlkgRsn'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowFixingBlkgReason'
      Flow_Unfixed.FinTransFlowPostingBlkgReason                  as FinTransFlowPostingBlkgReason,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'FinTransFlowIsFixingReleased'
      Flow_Unfixed.FinTransFlowPostingRelease                     as FinTransFlowPostingRelease,

      @ObjectModel.foreignKey.association: '_FixingStatus'
      Flow_Unfixed.FinTransFlowFixingStatus                       as FinTransFlowFixingStatus,
      @ObjectModel.foreignKey.association: '_FixingBlkgRsn'
      Flow_Unfixed.FinTransFlowFixingBlkgReason                   as FinTransFlowFixingBlkgReason,
      Flow_Unfixed.FinTransFlowIsFixingReleased                   as FinTransFlowIsFixingReleased,

      @ObjectModel.foreignKey.association: '_AdjmtStatus'
      Flow_Unfixed.FinInterestRateAdjmtStatus                     as FinInterestRateAdjmtStatus,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PaymentRepetitiveCode'
      Flow_Unfixed.RepetitiveCode                                 as RepetitiveCode,
      cast( Flow_Unfixed.RepetitiveCode as farp_repetitive_code ) as PaymentRepetitiveCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
      Flow_Unfixed.HouseBank                                      as HouseBank,
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      Flow_Unfixed.HouseBankAccount                               as HouseBankAccount,
      @ObjectModel.foreignKey.association: '_PayerPayee'
      Flow_Unfixed.PayerPayee                                     as PayerPayee,
      Flow_Unfixed.PayerPayeeBankDetail                           as PayerPayeeBankDetail,
      @ObjectModel.foreignKey.association: '_Country'
      Flow_Unfixed.Country                                        as Country,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      Flow_Unfixed.PaymentMethod                                  as PaymentMethod,
      Flow_Unfixed.PaymentMethodsList                             as PaymentMethodsList,
      @ObjectModel.foreignKey.association: '_PaymentMethodSupp'
      Flow_Unfixed.PaymentMethodSupplement                        as PaymentMethodSupplement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'TreasuryPaymentIsIndividual'
      Flow_Unfixed.TreasuryIndividualPayment                      as TreasuryIndividualPayment,
      Flow_Unfixed.TreasuryPaymentIsIndividual                    as TreasuryPaymentIsIndividual,
      Flow_Unfixed.TrsyPaytGroupingSameDrctnIsRqd                 as TrsyPaytGroupingSameDrctnIsRqd,
      Flow_Unfixed.TreasuryPaymentRequestGrouping                 as TreasuryPaymentRequestGrouping,
      Flow_Unfixed.TreasuryIntGrpgForPaytValue                    as TreasuryIntGrpgForPaytValue,

      @ObjectModel.foreignKey.association: '_Direction'
      Flow_Unfixed.FinancialTransactionDirection                  as FinancialTransactionDirection,
      Flow_Unfixed.FinInstrConditionLogicGroup                    as FinInstrConditionLogicGroup,

      Flow_Unfixed.AssignmentReference                            as AssignmentReference,
      Flow_Unfixed.FinTransFlwLoclCrcyAmtCalcType                 as FinTransFlwLoclCrcyAmtCalcType,
      Flow_Unfixed.FinTransFlowCalculationDate                    as FinTransFlowCalculationDate,
      Flow_Unfixed.FlowCalcDateIsExclusive                        as FlowCalcDateIsExclusive,
      Flow_Unfixed.FlowCalcDateIsMonthEnd                         as FlowCalcDateIsMonthEnd,
      Flow_Unfixed.IntrstCalcMethFactoryCalendar                  as IntrstCalcMethFactoryCalendar,
      Flow_Unfixed.InterestCalculationType                        as InterestCalculationType,
      Flow_Unfixed.CalcPeriodStartDateIsInclusive                 as CalcPeriodStartDateIsInclusive,
      Flow_Unfixed.CalcPeriodEndDateIsInclusive                   as CalcPeriodEndDateIsInclusive,
      Flow_Unfixed.FinTransFlwDerivationProcedure                 as FinTransFlwDerivationProcedure,
      Flow_Unfixed.FinTransPaytRateInPercent                      as FinTransPaytRateInPercent,
      Flow_Unfixed.PaymentReason                                  as PaymentReason,

      Flow_Unfixed.FinTransFlowCreatedByUser                      as FinTransFlowCreatedByUser,
      Flow_Unfixed.FinTransFlowLastChangedByUser                  as FinTransFlowLastChangedByUser,
      Flow_Unfixed.FinTransFlowLastChangeDate                     as FinTransFlowLastChangeDate,
      Flow_Unfixed.FinTransFlowLastChangeTime                     as FinTransFlowLastChangeTime,
      Flow_Unfixed.FinTransFlwAltvPaytDetIsStated                 as FinTransFlwAltvPaytDetIsStated,
      Flow_Unfixed.TrsyPaytIsPostdToGLAccount                     as TrsyPaytIsPostdToGLAccount,
      Flow_Unfixed.TrsyPaytRequestIsGenerated                     as TrsyPaytRequestIsGenerated,
      Flow_Unfixed.FinTransFlowIsReversed                         as FinTransFlowIsReversed,
      Flow_Unfixed.NrOfBaseDaysPerCalcPeriod                      as NrOfBaseDaysPerCalcPeriod,
      Flow_Unfixed.FinTransFlowReferencedFlowType                 as FinTransFlowReferencedFlowType,
      Flow_Unfixed.FinTransFlowPriceIndexValue                    as FinTransFlowPriceIndexValue,
      Flow_Unfixed.RepetitiveCodeReferenceText                    as RepetitiveCodeReferenceText,
      Flow_Unfixed.StateCentralBankPaymentReason                  as StateCentralBankPaymentReason,
      Flow_Unfixed.TrsyPaymentSupplyingCountry                    as TrsyPaymentSupplyingCountry,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      Flow_Unfixed.PaymentWithAccruedIntrstAmount                 as PaymentWithAccruedIntrstAmount,
      Flow_Unfixed.FinTransFlwDerivdFlwGrpgTerm                   as FinTransFlwDerivdFlwGrpgTerm,
      Flow_Unfixed.FXRateAdjustmentFixingDate                     as FXRateAdjustmentFixingDate,
      Flow_Unfixed.FXRateAdjustmentStatus                         as FXRateAdjustmentStatus,
      Flow_Unfixed.FinTransFlowFXRateReadDate                     as FinTransFlowFXRateReadDate,
      Flow_Unfixed.PrcIdxAdjmtFixingLowDate                       as PrcIdxAdjmtFixingLowDate,
      Flow_Unfixed.FinTransFlowPrcIdxReadLowDate                  as FinTransFlowPrcIdxReadLowDate,
      Flow_Unfixed.PrcIdxAdjmtFixingHighDate                      as PrcIdxAdjmtFixingHighDate,
      Flow_Unfixed.FinTransFlowPrcIdxReadHighDate                 as FinTransFlowPrcIdxReadHighDate,
      Flow_Unfixed.PrcIdxAdjustmentStatus                         as PrcIdxAdjustmentStatus,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      Flow_Unfixed.FinTransFlowIndexCleanAmount                   as FinTransFlowIndexCleanAmount,
      @Semantics.booleanIndicator: true
      Flow_Unfixed.FinTransFlowPaytRsnIsChgd                      as FinTransFlowPaytRsnIsChgd,
      Flow_Unfixed.FinCndnCrsRefcdAccmlnCndnGrp                   as FinCndnCrsRefcdAccmlnCndnGrp,
      Flow_Unfixed.FinTransFlwReltdAccumulatingID                 as FinTransFlwReltdAccumulatingID,
      Flow_Unfixed.FinTransFlowAccumulatingFlowID                 as FinTransFlowAccumulatingFlowID,
      Flow_Unfixed.FinTransFlowModificationStatus                 as FinTransFlowModificationStatus,



      Flow_Unfixed.TrsyTransacMgmtBizTransaction                  as TrsyTransacMgmtBizTransaction,



      // previous wrongly exposed field, correct value expose will be handled uplayer
      //@ObjectModel.foreignKey.association: '_PaymentRequest' - not possible as target view has no representative key
      Flow_Unfixed.PaymentRequest                                 as PaymentRequest,
      Flow_Unfixed.FinTransFlowPostingDate                        as FinTransFlowPostingDate,


      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _FinTrans,
      _Activity,
      _ContractType,
      _FlowCategory,
      _FlowType,
      _PaymentCurrency,
      _NominalCurrency,
      _PositionCurrency,
      _LocalCurrency,
      _BaseAmtCurrency,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_FixingStatus'
      _PostingStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_FixingBlkgRsn'
      _PostingBlkgRsn,
      _FixingStatus,
      _FixingBlkgRsn,
      _AdjmtStatus,
      _HouseBank,
      _HouseBankAccount,
      _PayerPayee,
      _Country,
      _PaymentMethod,
      _PaymentMethodSupp,
      _PaymentRequest,
      _Direction,
      _FlowAcctgPaytInfo
}
//restrict to flows, which are not blocked for specific reasons
where
      Flow_Unfixed.FinTransFlowPostingBlkgReason <> '2'
  and Flow_Unfixed.FinTransFlowPostingBlkgReason <> '4'
  and Flow_Unfixed.FinTransFlowPostingBlkgReason <> '5'
  and Flow_Unfixed.FinTransFlowPostingBlkgReason <> '6'
```
