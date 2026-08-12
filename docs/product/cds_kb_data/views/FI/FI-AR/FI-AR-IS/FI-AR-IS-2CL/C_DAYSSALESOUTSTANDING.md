---
name: C_DAYSSALESOUTSTANDING
description: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value
semantic_en: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period"
semantic_vi: "Days Sales Outstanding Smart Business App — CDS view tiêu dùng dựa trên I_DaysSalesOutstanding."
keywords:
  - "days"
  - "sales"
  - "outstanding"
  - "smart"
  - "business"
  - "app"
  - "company"
  - "code"
  - "customer"
  - "calendar"
  - "year"
  - "month"
  - "special"
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
  - bo:salesorder
---
# C_DAYSSALESOUTSTANDING

**This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `CalendarYear` | ✓ | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | ✓ | |  |  | `NUMC(2)` | Calendar Month |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DurationUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `GLAccountLongName` |  | |  | `_GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DebitAmtInDisplayCrcy` |  | |  |  | `CURR(27)` |  |
| `RevenueAmountInDisplayCrcy` |  | |  |  | `CURR(27)` |  |
| `DaysSalesOutstanding` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIDAYSSLSOUTSTG'
@EndUserText.label: 'Days Sales Outstanding Smart Business App'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_DaysSalesOutstanding
  with parameters
    @Consumption.defaultValue: '1'
    P_RblsRollingAverageMonths : fis_rbls_rolling_avg_months,

    @Consumption.defaultValue: '1'
    P_RevnRollingAverageMonths : fis_revn_rolling_avg_months,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate                : sydate,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                 : sylangu,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency          : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType         : kurst

  as select from I_DaysSalesOutstanding(P_RblsRollingAverageMonths:     :P_RblsRollingAverageMonths,
                                        P_RevnRollingAverageMonths:     :P_RevnRollingAverageMonths,
                                        P_TodayDate:                    :P_TodayDate,
                                        P_DisplayCurrency:              :P_DisplayCurrency,
                                        P_ExchangeRateType:             :P_ExchangeRateType)

  // define 'sap:text' property in metadata annotations by stating the association to the property with annotation 'semantics.text:true'
  //         (e.g. 'Customer' and '_Customer.CustomerName as xyz')
  // define formulas for KPIs which shall be calculated after aggregation; will be executed by Analytical Engine off DB
{
  key CompanyCode,
  key Customer,
  key CalendarYear,
  key CalendarMonth,
  key SpecialGLCode,
  key GLAccount,

      YearMonth,
      ExchangeRateType,
      CustomerCountry,
      CustomerRegion,
      AccountingClerk,
      ReconciliationAccount,
      ChartOfAccounts,
      @EndUserText.label: 'Unit of Measurement'
      @Semantics.unitOfMeasure: true
      DurationUnit,

      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/
      _Company.CompanyCodeName                                                                  as CompanyCodeName,
      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/
      _Customer.CustomerName                                                                    as CustomerName,
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                              as CustomerCountryName,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                          as CustomerRegionName,
      _AccountingClerk.AccountingClerkName                                                      as AccountingClerkName,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                  as ReconciliationAccountLongName,
      _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName                      as SpecialGLCodeName,
      // due to unknown reasons the warning about double joins does not appear where it occurs, hence here another suppression of the warning about double joins
      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/        
      _GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName              as GLAccountLongName,
      
       CustomerAccountGroup                                                                      as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
      _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc         as CustomerClassificationDesc,

      @Semantics.currencyCode:true
      DisplayCurrency,

      @EndUserText.label: 'Debit Amt Dsp Crcy'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitAmtInDisplayCrcy,
      @EndUserText.label: 'Rev Amount Dsp Crcy'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RevenueAmountInDisplayCrcy,

      @EndUserText.label: 'Days Sales Outstanding'
      @Semantics.quantity.unitOfMeasure: 'DurationUnit'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0(30 * DebitAmtInDisplayCrcy / RevenueAmountInDisplayCrcy)'
      @AnalyticsDetails.query.decimals: 0
      1                                                                                   as DaysSalesOutstanding

}
```
