---
name: C_MATURITYPROFILEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATURITYPROFILEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?"
semantic_vi: "Maturity Profile - Query — CDS view tiêu dùng dựa trên I_MaturityProfileCashFlow."
keywords:
  - "maturity"
  - "profile"
  - "query"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "security"
  - "account"
  - "class"
  - "fixed"
  - "variable"
  - "interest"
  - "rate"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
---
# C_MATURITYPROFILEQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATURITYPROFILEQUERY')/$value) |

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
| `SecurityAccountGroup` |  | |  |  | `CHAR(10)` | Securities Account Group |
| `CalendarYear` |  | |  |  | `CHAR(10)` | Reporting Period |
| `YearMonth` |  | |  |  | `CHAR(8)` |  |
| `YearQuarter` |  | |  |  | `CHAR(7)` |  |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(31)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NominalAmountInReportingCrcy` |  | |  |  | `CURR(21)` |  |
| `SignedNominalAmtInDisplayCrcy` |  | |  |  | `CURR(21)` |  |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `_ExchangeRateTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATURITYPROFILEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATURITYPROFILEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMATPROFILEQ'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Maturity Profile - Query'
@Analytics.query: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_QUERY ]

define view C_MaturityProfileQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                     : vdm_v_key_date,
    P_DisplayCurrency             : vdm_v_display_currency,
    P_ExchangeRateType            : kurst,
    @Consumption.defaultValue: 5
    P_NmbrOfYearsOfTimeToMaturity : ftr_years_to_maturity
  as select from I_MaturityProfileCashFlow(
                 P_KeyDate                     : $parameters.P_KeyDate,
                 P_DisplayCurrency             : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType            : $parameters.P_ExchangeRateType,
                 P_NmbrOfYearsOfTimeToMaturity : $parameters.P_NmbrOfYearsOfTimeToMaturity) as TransactionCashFlow
  association [1..1] to I_ExchangeRateType as _ExchangeRateTypeVH on _ExchangeRateTypeVH.ExchangeRateType = $parameters.P_ExchangeRateType
{

      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
  key TransactionCashFlow.CompanyCode,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 40
  key TransactionCashFlow.FinancialTransaction,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 50
  key TransactionCashFlow.SecurityAccount,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 60
  key TransactionCashFlow.SecurityClass,

      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 20
      @AnalyticsDetails.query: {axis: #ROWS, display: #TEXT}
  key TransactionCashFlow.FixedVariableInterestRateCat,

      @AnalyticsDetails.query: {axis: #ROWS, display: #TEXT}
  key TransactionCashFlow.TrsyCshFlowDebtInvmtCode,
  
      @AnalyticsDetails.query.axis: #FREE
  key TransactionCashFlow.PaymentDate,
  
      @AnalyticsDetails.query.axis: #FREE
  key TransactionCashFlow.ReferenceInterestRate,
      
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.hidden
  key TransactionCashFlow.InterestRateInPercent,
      
      @AnalyticsDetails.query: {axis: #FREE, display: #TEXT}
      TransactionCashFlow.FinancialInstrProductCategory,

      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 70
      @AnalyticsDetails.query: {axis: #FREE, display: #TEXT}
      TransactionCashFlow.FinancialInstrumentProductType,
      
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 80
      @AnalyticsDetails.query: {axis: #FREE, display: #TEXT}
      TransactionCashFlow.FinancialInstrTransactionType,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      TransactionCashFlow.Counterparty,

      @Semantics.currencyCode: true
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 90
      TransactionCashFlow.TransactionCurrency,

      @AnalyticsDetails.query.axis: #FREE
      TransactionCashFlow.DifferentiationPortfolio,

      @AnalyticsDetails.query.axis: #FREE
      TransactionCashFlow.SecurityAccountGroup,

      TransactionCashFlow.CalendarYear,
      
      @AnalyticsDetails.query.axis: #FREE
      TransactionCashFlow.YearMonth,
      
      @AnalyticsDetails.query.axis: #FREE
      TransactionCashFlow.YearQuarter,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.hidden
      TransactionCashFlow.NominalAmountInNominalCurrency,

      @Semantics.currencyCode: true
      @UI.hidden: true
      TransactionCashFlow.DisplayCurrency,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #FREE
      TransactionCashFlow.NominalAmountInReportingCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      TransactionCashFlow.SignedNominalAmtInDisplayCrcy,

      @Consumption.valueHelp: '_ExchangeRateTypeVH'
      @UI.hidden: true
      $parameters.P_ExchangeRateType                   as ExchangeRateType,

      @UI.hidden: true
      _ExchangeRateTypeVH
}
```
