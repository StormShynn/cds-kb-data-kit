---
name: C_ARBANKSTMTREPROCESSING
description: "This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value
semantic_en: "This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Reprocessing Rate of Incoming Payments — CDS view tiêu dùng dựa trên I_ARBankStmtReprocessing."
keywords:
  - "reprocessing"
  - "rate"
  - "incoming"
  - "payments"
  - "calendar"
  - "month"
  - "year"
  - "bank"
  - "country"
  - "internal"
  - "company"
  - "code"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - payment
  - transaction
---
# C_ARBANKSTMTREPROCESSING

**This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarMonth` | ✓ | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` | ✓ | |  |  | `NUMC(4)` | Calendar Year |
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | ✓ | |  |  | `CHAR(15)` | Bank Keys |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `AccountingClerk` | ✓ | |  |  | `CHAR(2)` | Accounting Clerk |
| `PaymentManualTransacTypeName` | ✓ | |  |  | `CHAR(40)` | Manual Transaction Text |
| `PaymentExternalTransacType` | ✓ | |  |  | `CHAR(27)` | External Business Transaction |
| `BankStmntItemReprocessReason` |  | |  |  | `CHAR(2)` | Reprocessing Reason Code |
| `BankStmntItemReprocessRsnName` |  | |  | `_BankStmntItemReprocessReason._Text[1:Language = $session.system_language].BankStmntItemReprocessRsnName` | `CHAR(60)` | Reprocessing Reason |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `BankName` |  | | `_Bank` | `BankName` | `CHAR(60)` | Name of Financial Institution |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
| `NumberOfReprocessedItems` |  | |  |  | `INT4(10)` | Number of Reprocessed Items |
| `BankStmntItemReprocgRate` |  | |  | `1` | `INT1(3)` |  |
| `Currency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ReprocessingCostPerCoCode` |  | |  |  | `CURR(23)` | Average Cost to Reprocess an Incoming Payment |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Total Amount in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value)*

```abap
@EndUserText.label: 'Reprocessing Rate of Incoming Payments'
@AbapCatalog.sqlViewName: 'CARBSREPROC'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@Analytics.query: true
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.sizeCategory: #XL 
@ObjectModel.usageType.serviceQuality: #X 
@ObjectModel.usageType.dataClass: #MIXED 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]

define view C_ARBankStmtReprocessing 
with parameters
  @Consumption.hidden: true
  @Environment.systemField: #SYSTEM_DATE
  P_KeyDate:          sydate, 
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                    }]  
  P_ExchangeRateType: kurst,
  P_DisplayCurrency:  vdm_v_display_currency
    
    as select from I_ARBankStmtReprocessing (
  P_KeyDate:          $parameters.P_KeyDate,
  P_ExchangeRateType: $parameters.P_ExchangeRateType,
  P_DisplayCurrency:  $parameters.P_DisplayCurrency)
{
    
    key CalendarMonth,
    key CalendarYear,
    key BankCountry,
    key BankInternalID,
    key CompanyCode,
    key Customer,
    key AccountingClerk,    
    key PaymentManualTransacTypeName,
    key PaymentExternalTransacType,
    BankStmntItemReprocessReason,
    _BankStmntItemReprocessReason._Text[1:Language = $session.system_language].BankStmntItemReprocessRsnName       as BankStmntItemReprocessRsnName,
//    BankStmntItemReprocessRsnName, 
     YearMonth,
    _Company.CompanyCodeName             as CompanyCodeName, 
    _Customer.CustomerName               as CustomerName,
    _AccountingClerk.AccountingClerkName as AccountingClerkName,    
    _Bank.BankName  as  BankName,                 
    @DefaultAggregation: #SUM
    NumberOfItems,
  
    @DefaultAggregation: #SUM
    NumberOfReprocessedItems, 
    
    @EndUserText.label: 'Reprocessing Rate'
    @DefaultAggregation: #FORMULA
    @AnalyticsDetails.query.formula: 'NDIV0(NumberOfReprocessedItems / NumberOfItems)'
    @AnalyticsDetails.query.decimals: 2
    1 as BankStmntItemReprocgRate,
    
    Currency,
    
    @DefaultAggregation: #SUM 
    ReprocessingCostPerCoCode,
    
    @DefaultAggregation: #SUM 
    TotalAmountInDisplayCrcy
    

}
```
