---
name: C_TOTALACCOUNTSRECEIVABLES
description: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value
semantic_en: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Total Accounts Receivables Smart Business App — CDS view tiêu dùng dựa trên I_TotalAccountsReceivables."
keywords:
  - "total"
  - "accounts"
  - "receivables"
  - "smart"
  - "business"
  - "app"
  - "company"
  - "code"
  - "customer"
  - "interval"
  - "text"
  - "currency"
  - "exchange"
  - "rate"
  - "type"
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
---
# C_TOTALACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `NetDueIntervalText` |  | |  |  | `CHAR(50)` | Net Due Date Interval |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `GLAccountLongName` |  | |  | `_GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 4th Due Period (Display Currency) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFITOTALACCTRBLS'
@EndUserText.label: 'Total Accounts Receivables Smart Business App'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_TotalAccountsReceivables
  with parameters

    @EndUserText.label: 'Open on Key Date'
    @Consumption.defaultValue: 'TODAY'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name: 'C_GregorianCalSglDateFuncVH',
        element: 'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid,
    
    @Consumption.derivation: {
      lookupEntity: 'I_SglGregorianCalDateFunction',
      resultElement: 'DateFunctionStartDate',
      binding: [
        { targetParameter : 'P_DateFunction' ,
          type : #PARAMETER, value : 'P_DateFunction' }
      ]
    }
    @Consumption.hidden: true
    P_TodayDate             : sydate,   // this is rather a key date, we refrain from renaming to be compatible

    @Consumption.defaultValue: '30'
    P_NetDueInterval1InDays : farp_net_due_interval1,

    @Consumption.defaultValue: '60'
    P_NetDueInterval2InDays : farp_net_due_interval2,

    @Consumption.defaultValue: '90'
    P_NetDueInterval3InDays : farp_net_due_interval3,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency       : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType      : kurst,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu
  as select from I_TotalAccountsReceivables(P_TodayDate:             :P_TodayDate,
                                            P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                            P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                            P_NetDueInterval3InDays: :P_NetDueInterval3InDays,
                                            P_DisplayCurrency:       :P_DisplayCurrency,
                                            P_ExchangeRateType:      :P_ExchangeRateType)

  // define 'sap:text' property in metadata annotations by stating the association to the property with annotation 'semantics.text:true'
  //         (e.g. 'Customer' and '_Customer.CustomerName as xyz')
  // define formulas for KPIs which shall be calculated after aggregation; will be executed by Analytical Engine off DB
{
      CompanyCode,
      Customer,
      NetDueIntervalText,

      CompanyCodeCurrency,
      ExchangeRateType,
      CustomerCountry,
      CustomerRegion,
      AccountingClerk,
      SpecialGLCode,
      GLAccount,
      ReconciliationAccount,
      ChartOfAccounts,

      @Semantics.currencyCode:true
      DisplayCurrency,

      _Company.CompanyCodeName                                                                   as CompanyCodeName,
      _Customer.CustomerName                                                                     as CustomerName,
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                               as CustomerCountryName,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                           as CustomerRegionName,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName                       as SpecialGLCodeName,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      _GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName              as GLAccountLongName,
      
      CustomerAccountGroup                                                                       as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
      _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc         as CustomerClassificationDesc,


      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalAmountInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalNotOvrdAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalOverdueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl4AmtInDspCrcy
}
```
