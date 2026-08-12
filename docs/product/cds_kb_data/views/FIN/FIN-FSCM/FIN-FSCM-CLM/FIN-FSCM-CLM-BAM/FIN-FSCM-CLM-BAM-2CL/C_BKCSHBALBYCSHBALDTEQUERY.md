---
name: C_BKCSHBALBYCSHBALDTEQUERY
description: "This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value
semantic_en: "This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Balances - Query — CDS view tiêu dùng dựa trên Bank Account Balances - Query."
keywords:
  - "bank"
  - "account"
  - "balances"
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
  - contract
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BKCSHBALBYCSHBALDTEQUERY

**This CDS view retrieves bank account balances of different types for the specified key date. You can use this query to create models and stories on SAP Analytics Cloud. For more information about how to consume queries to create your own models and stories, see Consume Queries on SAC to Create Models and Stories. This CDS view provides the data to answer the following business questions: What are the closing ledger balance, closing available balance, closing value date balance, adjusted closing value date balance, and the current available balance of a bank account on a specific date? Are there any differences between different balance types, for example, closing ledger balance and closing value date balance? What is the aggregated balance of a specific type of bank account, for example, by bank account type, bank account contract type, or bank account characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value) |

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
| `TransactionDate` |  | |  |  | `DATS(8)` | Key Date |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CalculatedAmountInDspCrcy` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Bank Statement Short Key |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Bank Account Balances - Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType:#CONSUMPTION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
define transient view entity C_BkCshBalByCshBalDteQuery
  provider contract analytical_query
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 10
    @AnalyticsDetails.variable: {  mandatory: true }
    P_KeyDate          : vdm_v_key_date,
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [
     { entity:  { name:    'I_ExchangeRateTypeStdVH',
             element: 'ExchangeRateType' }
     }]
    @AnalyticsDetails.query.variableSequence : 20
    P_ExchangeRateType : kurst,
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CurrencyStdVH',
                 element: 'Currency' }
         }]
    @AnalyticsDetails.query.variableSequence : 30
    P_DisplayCurrency  : vdm_v_display_currency
  as projection on I_BkCshBalByCshBalDteCube( P_KeyDate: $parameters.P_KeyDate, P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency  )
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
  DisplayCurrency,
  @EndUserText.label: 'Balance Amount in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  CalculatedAmountInDspCrcy,

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
