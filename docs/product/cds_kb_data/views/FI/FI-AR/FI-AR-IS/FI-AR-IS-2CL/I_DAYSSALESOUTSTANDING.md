---
name: I_DAYSSALESOUTSTANDING
description: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value
semantic_en: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?"
semantic_vi: "Days Sales Outstanding — CDS view giao diện dựa trên P_DaysSalesOutstanding04."
keywords:
  - "days"
  - "sales"
  - "outstanding"
  - "company"
  - "code"
  - "customer"
  - "calendar"
  - "year"
  - "month"
  - "account"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_DAYSSALESOUTSTANDING

**This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `CalendarYear` | ✓ | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | ✓ | |  |  | `NUMC(2)` | Calendar Month |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `FinancialAccountType` | ✓ | |  |  | `CHAR(1)` | Account Type |
| `YearMonth` |  | |  | `cast( YearMonth as fis_yearmonth_c )` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `ExchangeRateType` |  | |  | `cast(:P_ExchangeRateType as kurst)` | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `DurationUnit` |  | |  | `cast( cast( 'TAG' as abap.unit(3) ) as msehi )` | `UNIT(3)` | Unit of Measurement |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  | `cast( DisplayCurrency as vdm_v_display_currency )` | `CUKY(5)` | Display Currency |
| `DebitAmtInDisplayCrcy` |  | |  | `cast(division(DebitInDisplayCrcy, :P_RblsRollingAverageMonths, 6) as abap.curr( 27, 6 ))` | `CURR(27)` |  |
| `RevenueAmountInDisplayCrcy` |  | |  | `cast(division(RevenueInDisplayCrcy, :P_RevnRollingAverageMonths, 6) as abap.curr( 27, 6 ))` | `CURR(27)` |  |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_CalendarYear` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_CalendarYear` | `I_CalendarYear` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIDAYSSLSOUTSTG'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Days Sales Outstanding'
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1808 and OP 1809 hence no design studio usage before 
@Search.searchable: false // I_Region is annotated as true, hence this new must have an annotation for searchable
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@DataAging.noAgingRestriction: true // cleared open items are selected (as "revenue")
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'PREAGGR_BEFORE_JOIN' ]

define view I_DaysSalesOutstanding
  with parameters
    P_RblsRollingAverageMonths : fis_rbls_rolling_avg_months,
    P_RevnRollingAverageMonths : fis_revn_rolling_avg_months,
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate                : sydate,
    P_DisplayCurrency          : vdm_v_display_currency,
    P_ExchangeRateType         : kurst
  as select from P_DaysSalesOutstanding04( P_RblsRollingAverageMonths: :P_RblsRollingAverageMonths, 
                                            P_RevnRollingAverageMonths: :P_RevnRollingAverageMonths,
                                            P_DisplayCurrency:          :P_DisplayCurrency,
                                            P_ExchangeRateType:         :P_ExchangeRateType,
                                            P_TodayDate:                :P_TodayDate )

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure         on  _UnitOfMeasure.UnitOfMeasure = $projection.DurationUnit
  association [0..1] to I_CompanyCode                as _Company               on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer                   as _Customer              on  _Customer.Customer = $projection.Customer
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType  on  _FinancialAccountType.FinancialAccountType = $projection.FinancialAccountType
  association [0..1] to I_CustomerCompany            as _CustomerCompany       on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                               and _CustomerCompany.Customer    = $projection.Customer
  association [0..1] to I_AccountingClerk            as _AccountingClerk       on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                               and _AccountingClerk.AccountingClerk = $projection.AccountingClerk
  association [0..1] to I_Country                    as _CustomerCountry       on  _CustomerCountry.Country = $projection.CustomerCountry
  association [0..1] to I_Region                     as _CustomerRegion        on  _CustomerRegion.Region  = $projection.CustomerRegion
                                                                               and _CustomerRegion.Country = $projection.CustomerCountry
  association [0..1] to I_CalendarYear               as _CalendarYear          on  _CalendarYear.CalendarYear = $projection.CalendarYear
  association [0..1] to I_CalendarMonth              as _CalendarMonth         on  _CalendarMonth.CalendarMonth = $projection.CalendarMonth
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts       on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                               and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_SpecialGLCode              as _SpecialGLCode              on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                                                    and _SpecialGLCode.FinancialAccountType = 'D'
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  _GLAccountInChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _GLAccountInChartOfAccounts.GLAccount       = $projection.GLAccount
  association [0..1] to I_Currency                   as _DisplayCurrency       on  _DisplayCurrency.Currency = $projection.DisplayCurrency

  association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup  on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
  association [0..1] to I_CustomerClassification     as _CustomerClassification on  _CustomerClassification.CustomerClassification = $projection.CustomerClassification
  
  // associations are declared here in sum for better overview; in runtime the joins are exceuted on appropriate level
  // Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
      @ObjectModel.foreignKey.association: '_Company'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_CalendarYear'
  key CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
  key CalendarMonth,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
  key SpecialGLCode,
  // technically FinancialAccountType is independent of all other keys, hence it is a key itself
  // FinancialAccountType is restricted to 'D' but as we exposed it before let's keep it
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key FinancialAccountType,

      cast( YearMonth as fis_yearmonth_c )                                              as YearMonth, 

      //  @ObjectModel.foreignKey.association: '_ExchangeRate'
      cast(:P_ExchangeRateType as kurst)                                                as ExchangeRateType,
      @ObjectModel.foreignKey.association: '_CustomerCountry'
      cast( _Customer._StandardAddress._Country.Country as farp_land1 )                 as CustomerCountry,
      @ObjectModel.foreignKey.association: '_CustomerRegion'
      _Customer._StandardAddress._Region.Region                                         as CustomerRegion,
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _CustomerCompany.AccountingClerk as farp_busab )                            as AccountingClerk,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      cast( cast( 'TAG' as abap.unit(3) ) as msehi )                                    as DurationUnit,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( _Company.ChartOfAccounts as fis_ktopl )                                     as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      cast( _CustomerCompany.ReconciliationAccount as farp_akont )                      as ReconciliationAccount,

      // fields for authorization checks via DCL
      cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )               as CustomerBasicAuthorizationGrp,
      _CustomerCompany.AuthorizationGroup                                               as CustomerFinsAuthorizationGrp,
      
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      _Customer.CustomerAccountGroup                                                    as CustomerAccountGroup,
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      _Customer.CustomerClassification                                                  as CustomerClassification,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      cast( DisplayCurrency as vdm_v_display_currency )                                 as DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast(division(DebitInDisplayCrcy, :P_RblsRollingAverageMonths, 6) as abap.curr( 27, 6 ))       as DebitAmtInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast(division(RevenueInDisplayCrcy, :P_RevnRollingAverageMonths, 6) as abap.curr( 27, 6 ))     as RevenueAmountInDisplayCrcy,

      _Company,
      _Customer,
      _FinancialAccountType,
      _CustomerCompany,
      _AccountingClerk,
      _CustomerCountry,
      _CustomerRegion,
      _CalendarYear,
      _CalendarMonth,
      _ReconciliationAccount,
      _SpecialGLCode,
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _DisplayCurrency,
      _UnitOfMeasure,
      _CustomerClassification,
      _CustomerAccountGroup
}
```
