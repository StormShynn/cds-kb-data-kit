---
name: C_BKCSHBALANCEFORPERIODQUERY
description: "This CDS view retrieves bank account balances of different types for a specified date range. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALANCEFORPERIODQUERY')/$value
semantic_en: "This CDS view retrieves bank account balances of different types for a specified date range. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Balances for Period - Query — CDS view tiêu dùng dựa trên Bank Account Balances for Period - Query."
keywords:
  - "bank"
  - "account"
  - "balances"
  - "for"
  - "period"
  - "query"
  - "company"
  - "code"
  - "country"
  - "name"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BKCSHBALANCEFORPERIODQUERY

**This CDS view retrieves bank account balances of different types for a specified date range. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the ledger balances, available balances, value date balances, and adjusted value date balances of a bank account for key dates during a user-defined date range? Are there any differences between different balance types, for example, ledger balance and value date balance, on a specific key date during the date range? What is the aggregated balance of a specific type of bank account on a specific key date during the date range? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALANCEFORPERIODQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `CashBalanceType` |  | |  |  | `CHAR(1)` | Cash Balance Type |
| `CashBalanceDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `TransactionDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type)` | `CUKY(5)` | Display Currency |
| `CalculatedAmountInDspCrcy` |  | |  | `cast (currency_conversion( amount => CashBalanceAmount, source_currency => CashBalanceCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => TransactionDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as net_amount_in_dsp_crcy)` | `CURR(19)` | Net Value in Display Currency |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALANCEFORPERIODQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALANCEFORPERIODQUERY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Bank Account Balances for Period - Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType:#CONSUMPTION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
define transient view entity C_BkCshBalanceForPeriodQuery
  provider contract analytical_query
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence : 10
    @AnalyticsDetails.variable: {  mandatory: true }
    @EndUserText.label: 'From Key Date'
    P_StartDate        : valut,
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence : 20
    @AnalyticsDetails.variable: {  mandatory: true }
    @EndUserText.label: 'To Key Date'
    P_EndDate          : valut,
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [
     { entity:  { name:    'I_ExchangeRateTypeStdVH',
             element: 'ExchangeRateType' }
     }]
    @AnalyticsDetails.query.variableSequence : 30
    P_ExchangeRateType : kurst,
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CurrencyStdVH',
                 element: 'Currency' }
         }]
    @AnalyticsDetails.query.variableSequence : 40
    P_DisplayCurrency  : vdm_v_display_currency
  as projection on I_BkCashBalanceForPeriodCube( P_StartDate: $parameters.P_StartDate, P_EndDate : $parameters.P_EndDate  )
{
  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition:[{
    entity:{ name : 'I_CompanyCodeVH', element:'CompanyCode' }

  }]
  @AnalyticsDetails.query.axis: #ROWS
  CompanyCode,
  //Bank Data
  @EndUserText.label: 'Bank Country/Region'
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition:[{
   entity:{ name : 'I_CountryVH', element:'Country' }

  }]
  BankCountry,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  Bank,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  BankName,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  SWIFTCode,
  //Bank Account Data
  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  BankAccountType,
  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  BankAccountCharacteristic,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  BankAccountNumber,
  //Balance Data
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #ROWS
  CashBalanceType,
  @EndUserText.label: 'Latest Balance Date'
  CashBalanceDate,
  @EndUserText.label: 'Key Date'
  TransactionDate,
  @EndUserText.label: 'Balance Amount'
  @Semantics.amount.currencyCode: 'CashBalanceCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  CashBalanceAmount,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CashBalanceCurrency,


  //Caculated data
  @UI.textArrangement: #TEXT_LAST
  cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type) as DisplayCurrency,
  @EndUserText.label: 'Balance Amount in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
      cast (currency_conversion(
        amount =>  CashBalanceAmount,
        source_currency => CashBalanceCurrency,
        target_currency => $parameters.P_DisplayCurrency,
        exchange_rate_date => TransactionDate,
        exchange_rate_type => $parameters.P_ExchangeRateType
      ) as net_amount_in_dsp_crcy)                                                  as CalculatedAmountInDspCrcy,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  BankAccountStatus,
  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  BankAccountContractType,
  BankStatementShortID,
  @UI.textArrangement: #TEXT_LAST
  BankAccountInternalID,
  BankAccountDescription
}
```
