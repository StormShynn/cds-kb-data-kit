---
name: I_MATURITYPROFILECASHFLOW
description: "This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?"
semantic_vi: "Maturity Profile Cash Flow Data - Cube — CDS view giao diện dựa trên P_MaturityProfileCashFlow."
keywords:
  - "maturity"
  - "profile"
  - "cash"
  - "flow"
  - "data"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "security"
  - "account"
  - "class"
  - "fixed"
  - "variable"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_MATURITYPROFILECASHFLOW

**This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `SecurityAccount` | ✓ | |  |  | `CHAR(10)` | Securities Account |
| `SecurityClass` | ✓ | |  |  | `CHAR(13)` | Security Class |
| `FixedVariableInterestRateCat` | ✓ | |  |  | `CHAR(1)` | Interest Rate Category (for Interest Rate Management) |
| `TrsyCshFlowDebtInvmtCode` | ✓ | |  |  | `CHAR(1)` | Debt Investment Indicator |
| `PaymentDate` | ✓ | |  |  | `DATS(8)` | Payment or Delivery Date |
| `ReferenceInterestRate` | ✓ | |  |  | `CHAR(10)` | Reference Interest Rate |
| `InterestRateInPercent` | ✓ | |  |  | `CHAR(17)` |  |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DifferentiationPortfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `SecurityAccountGroup` |  | |  |  | `CHAR(10)` | Securities Account Group |
| `CalendarYear` |  | |  |  | `CHAR(10)` | Reporting Period |
| `YearMonth` |  | |  |  | `CHAR(8)` |  |
| `YearQuarter` |  | |  |  | `CHAR(7)` |  |
| `NominalAmountInNominalCurrency` |  | |  | `sum(TransactionCashFlow.NominalAmountInNominalCurrency)` | `CURR(31)` |  |
| `NominalAmountInReportingCrcy` |  | |  | `sum(TransactionCashFlow.NominalAmountInReportingCrcy)` | `CURR(21)` |  |
| `SignedNominalAmtInDisplayCrcy` |  | |  | `sum(TransactionCashFlow.SignedNominalAmtInDisplayCrcy)` | `CURR(21)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `_CompanyCode` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_TrsyCshFlowDebtInvmtCode` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_SecurityAccountGroup` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_ReferenceInterestRate` | | ✓ | | | | |
| `_FixedVariableInterestCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_Counterparty` | `I_Ftr_Counterparty` | [1..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [1..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [1..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |
| `_FinancialTransaction` | `I_FinancialTransaction` | [1..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [1..1] |
| `_TrsyCshFlowDebtInvmtCode` | `I_TrsyCshFlowDebtInvmtCode` | [1..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [1..1] |
| `_SecurityAccountGroup` | `I_SecurityAccountGroup` | [1..1] |
| `_SecurityClass` | `I_SecurityClass` | [1..1] |
| `_ReferenceInterestRate` | `I_ReferenceInterestRate` | [1..1] |
| `_FixedVariableInterestCat` | `I_FixedVariableInterestCat` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMATPROCSHFLW'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.semanticKey: [ 'FinancialTransaction' ]
@EndUserText.label: 'Maturity Profile Cash Flow Data - Cube'
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
define view I_MaturityProfileCashFlow
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                     : vdm_v_key_date,
    P_DisplayCurrency             : vdm_v_display_currency,
    P_ExchangeRateType            : kurst,
    P_NmbrOfYearsOfTimeToMaturity : ftr_years_to_maturity
  as select from P_MaturityProfileCashFlow(
                 P_KeyDate                     : $parameters.P_KeyDate,
                 P_DisplayCurrency             : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType            : $parameters.P_ExchangeRateType,
                 P_NmbrOfYearsOfTimeToMaturity : $parameters.P_NmbrOfYearsOfTimeToMaturity) as TransactionCashFlow

  association [1..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Currency                  as _DisplayCurrency           on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_Currency                  as _TransactionCurrency       on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Ftr_Counterparty          as _Counterparty              on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [1..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [1..1] to I_FinancialInstrProdCat     as _FinancialInstrProdCat     on  $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [1..1] to I_FinancialInstrTransType   as _FinancialInstrTransType   on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                  and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType
  association [1..1] to I_FinancialTransaction      as _FinancialTransaction      on  $projection.CompanyCode = _FinancialTransaction.CompanyCode         
                                                                                  and $projection.FinancialTransaction = _FinancialTransaction.FinancialTransaction                                                                       
  association [1..1] to I_TreasuryPortfolio         as _Portfolio                 on  $projection.CompanyCode              = _Portfolio.CompanyCode
                                                                                  and $projection.DifferentiationPortfolio = _Portfolio.Portfolio
  association [1..1] to I_TrsyCshFlowDebtInvmtCode  as _TrsyCshFlowDebtInvmtCode  on  $projection.TrsyCshFlowDebtInvmtCode = _TrsyCshFlowDebtInvmtCode.TrsyCshFlowDebtInvmtCode
  association [1..1] to I_SecurityAccount           as _SecurityAccount           on  $projection.CompanyCode     = _SecurityAccount.CompanyCode
                                                                                  and $projection.SecurityAccount = _SecurityAccount.SecurityAccount
  association [1..1] to I_SecurityAccountGroup      as _SecurityAccountGroup      on  $projection.CompanyCode          = _SecurityAccountGroup.CompanyCode
                                                                                  and $projection.SecurityAccountGroup = _SecurityAccountGroup.SecurityAccountGroup
  association [1..1] to I_SecurityClass             as _SecurityClass             on  $projection.SecurityClass = _SecurityClass.SecurityClass
  association [1..1] to I_ReferenceInterestRate     as _ReferenceInterestRate     on  $projection.ReferenceInterestRate = _ReferenceInterestRate.ReferenceInterestRate
  association [1..1] to I_FixedVariableInterestCat  as _FixedVariableInterestCat  on  $projection.FixedVariableInterestRateCat = _FixedVariableInterestCat.FixedVariableInterestRateCat

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key TransactionCashFlow.CompanyCode,

      @ObjectModel.foreignKey.association: '_FinancialTransaction'
  key TransactionCashFlow.FinancialTransaction,

      @ObjectModel.foreignKey.association: '_SecurityAccount'
      @EndUserText.label: 'Security Account'
  key TransactionCashFlow.SecurityAccount,

      @ObjectModel.foreignKey.association: '_SecurityClass'
  key TransactionCashFlow.SecurityClass,

      @ObjectModel.foreignKey.association: '_FixedVariableInterestCat'
  key TransactionCashFlow.FixedVariableInterestRateCat,

      @ObjectModel.foreignKey.association: '_TrsyCshFlowDebtInvmtCode'
  key TransactionCashFlow.TrsyCshFlowDebtInvmtCode,

  key TransactionCashFlow.PaymentDate,

      @ObjectModel.foreignKey.association: '_ReferenceInterestRate'
      @EndUserText.label: 'Reference Interest Rate'
  key TransactionCashFlow.ReferenceInterestRate,

      @EndUserText.label: 'Interest Rate In Percent'
  key TransactionCashFlow.InterestRateInPercent,

      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
      TransactionCashFlow.FinancialInstrProductCategory,

      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
      TransactionCashFlow.FinancialInstrumentProductType,

      @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
      TransactionCashFlow.FinancialInstrTransactionType,

      @ObjectModel.foreignKey.association: '_Counterparty'
      TransactionCashFlow.Counterparty,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCashFlow.TransactionCurrency,

      @ObjectModel.foreignKey.association: '_Portfolio'
      TransactionCashFlow.DifferentiationPortfolio,

      TransactionCashFlow.TermStartDate,

      TransactionCashFlow.TermEndDate,

      @ObjectModel.foreignKey.association: '_SecurityAccountGroup'
      TransactionCashFlow.SecurityAccountGroup,

      @EndUserText.label: 'Maturity Year'
      TransactionCashFlow.CalendarYear,

      @EndUserText.label: 'Maturity Year Month'
      TransactionCashFlow.YearMonth,

      @EndUserText.label: 'Maturity Year Quarter'
      TransactionCashFlow.YearQuarter,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Nominal Amount in Nominal Currency'
      sum(TransactionCashFlow.NominalAmountInNominalCurrency)                                             as NominalAmountInNominalCurrency,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Nominal Amount in Display Crcy'
      sum(TransactionCashFlow.NominalAmountInReportingCrcy)                                               as NominalAmountInReportingCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Signed Nominal Amount in Display Crcy'
      sum(TransactionCashFlow.SignedNominalAmtInDisplayCrcy)                                              as SignedNominalAmtInDisplayCrcy,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      TransactionCashFlow.DisplayCurrency,

      _ReferenceInterestRate,
      _FixedVariableInterestCat,
      _FinancialTransaction,
      _CompanyCode,
      _Counterparty,
      _DisplayCurrency,
      _TransactionCurrency,
      _FinancialInstrProdCat,
      _FinancialInstrProductType,
      _FinancialInstrTransType,
      _Portfolio,
      _TrsyCshFlowDebtInvmtCode,
      _SecurityClass,
      _SecurityAccount,
      _SecurityAccountGroup
}
group by
  TransactionCashFlow.CompanyCode,
  TransactionCashFlow.FinancialTransaction,
  TransactionCashFlow.SecurityAccount,
  TransactionCashFlow.SecurityClass,
  TransactionCashFlow.FixedVariableInterestRateCat,
  TransactionCashFlow.TrsyCshFlowDebtInvmtCode,
  TransactionCashFlow.PaymentDate,
  TransactionCashFlow.ReferenceInterestRate,
  TransactionCashFlow.InterestRateInPercent,
  TransactionCashFlow.FinancialInstrProductCategory,
  TransactionCashFlow.FinancialInstrumentProductType,
  TransactionCashFlow.FinancialInstrTransactionType,
  TransactionCashFlow.Counterparty,
  TransactionCashFlow.TransactionCurrency,
  TransactionCashFlow.DifferentiationPortfolio,
  TransactionCashFlow.TermStartDate,
  TransactionCashFlow.TermEndDate,
  TransactionCashFlow.SecurityAccountGroup,
  TransactionCashFlow.ConditionIsManuallyDtmnd,
  TransactionCashFlow.CalendarYear,
  TransactionCashFlow.YearMonth,
  TransactionCashFlow.YearQuarter,
  TransactionCashFlow.DisplayCurrency
```
