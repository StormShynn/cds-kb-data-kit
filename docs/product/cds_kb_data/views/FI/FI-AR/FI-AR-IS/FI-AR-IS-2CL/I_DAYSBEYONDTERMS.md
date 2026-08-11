---
name: I_DAYSBEYONDTERMS
description: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value
semantic_en: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
semantic_vi: "Days Beyond Terms — CDS view giao diện dựa trên P_DaysBeyondTerms11."
keywords:
  - "days"
  - "beyond"
  - "terms"
  - "calendar"
  - "year"
  - "month"
  - "customer"
  - "company"
  - "code"
  - "financial"
  - "account"
  - "type"
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
  - payment
---
# I_DAYSBEYONDTERMS

**This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarYear` | ✓ | |  | `cast( CalendarYear as calendaryear )` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | ✓ | |  | `cast( CalendarMonth as calendarmonth )` | `NUMC(2)` | Calendar Month |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` | ✓ | |  | `PayingCompanyCode` | `CHAR(4)` | Company Code |
| `FinancialAccountType` | ✓ | |  |  | `CHAR(1)` | Account Type |
| `YearMonth` |  | |  | `cast( YearMonth as fis_yearmonth_c )` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `DurationUnit` |  | |  |  | `UNIT(3)` |  |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `WeightedClearedAmountInDspCrcy` |  | |  | `sum( WeightedClearedAmountInDspCrcy )` | `CURR(31)` |  |
| `ClearedAmountInDisplayCurrency` |  | |  | `sum( ClearedAmountInDisplayCurrency )` | `CURR(25)` |  |
| `WgtdPaidWthnTermsAmtInDspCrcy` |  | |  | `sum( WgtdPaidWthnTermsAmtInDspCrcy )` | `CURR(31)` |  |
| `WgtdPaidOutOfTermsAmtInDspCrcy` |  | |  | `sum( WgtdPaidOutOfTermsAmtInDspCrcy )` | `CURR(31)` |  |
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
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIDAYSBYNDTERMS'
@EndUserText.label: 'Days Beyond Terms'
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1808 and OP 1809 hence no design studio usage before 
@Search.searchable: false // I_Region is annotated as true, hence this new must have an annotation for searchable
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.viewEnhancementCategory: [ #PROJECTION_LIST , #GROUP_BY ]

define view I_DaysBeyondTerms
  //as select from bseg
  //{
  //key bukrs

  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate        : sydate,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst

  as select from P_DaysBeyondTerms11(P_TodayDate:        :P_TodayDate,
                                     P_DisplayCurrency:  :P_DisplayCurrency,
                                     P_ExchangeRateType: :P_ExchangeRateType)

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
  association [0..1] to I_Currency                   as _DisplayCurrency       on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  
  association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup  on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
  association [0..1] to I_CustomerClassification     as _CustomerClassification on  _CustomerClassification.CustomerClassification = $projection.CustomerClassification
  
  // associations are declared here in sum for better overview; in runtime the joins are exceuted on appropriate level
  // Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
      @ObjectModel.foreignKey.association: '_CalendarYear'
  key cast( CalendarYear as calendaryear )                                            as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
  key cast( CalendarMonth as calendarmonth )                                          as CalendarMonth,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_Company'
  key PayingCompanyCode                                                               as CompanyCode,
  // technically FinancialAccountType is independent of all other keys, hence it is a key itself
  // FinancialAccountType is restricted to 'D' but as we exposed it before let's keep it
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key FinancialAccountType,

      cast( YearMonth as fis_yearmonth_c )                                            as YearMonth, 

      @ObjectModel.foreignKey.association: '_CustomerCountry'
      cast( _Customer._StandardAddress._Country.Country as farp_land1 )               as CustomerCountry,
      @ObjectModel.foreignKey.association: '_CustomerRegion'
      _Customer._StandardAddress._Region.Region                                       as CustomerRegion,
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _CustomerCompany.AccountingClerk as farp_busab )                          as AccountingClerk,
      ExchangeRateType,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      DurationUnit,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( _Company.ChartOfAccounts as fis_ktopl )                                   as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      cast( _CustomerCompany.ReconciliationAccount as farp_akont )                    as ReconciliationAccount,

      // fields for authorization checks via DCL
      cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )             as CustomerBasicAuthorizationGrp,
      _CustomerCompany.AuthorizationGroup                                             as CustomerFinsAuthorizationGrp,
      
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      _Customer.CustomerAccountGroup                                                  as CustomerAccountGroup,
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      _Customer.CustomerClassification                                                as CustomerClassification,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      sum( WeightedClearedAmountInDspCrcy )                                           as WeightedClearedAmountInDspCrcy, // DaysArrearTimesClearedAmountsAllPeriodsDisplayCurrency

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      sum( ClearedAmountInDisplayCurrency )                                           as ClearedAmountInDisplayCurrency, // ClearedAmountsAllPeriodsDisplayCurrency

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      sum( WgtdPaidWthnTermsAmtInDspCrcy )                                            as WgtdPaidWthnTermsAmtInDspCrcy, // PayedInTermsTimesDaysAllPeriodsDisplayCurrency

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      sum( WgtdPaidOutOfTermsAmtInDspCrcy )                                           as WgtdPaidOutOfTermsAmtInDspCrcy, // PayedOutOfTermsTimesDaysAllPeriodsDisplayCurrency

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
      _ChartOfAccounts,
      _DisplayCurrency,
      _UnitOfMeasure,
      _CustomerClassification,
      _CustomerAccountGroup
}                                                         
  group by 
      CalendarYear,
      CalendarMonth,
      Customer,
      PayingCompanyCode,
      FinancialAccountType,
      YearMonth, 
      _Customer._StandardAddress._Country.Country,
      _Customer._StandardAddress._Region.Region,
      _CustomerCompany.AccountingClerk,
      ExchangeRateType,
      DurationUnit,
      _Company.ChartOfAccounts,
      _CustomerCompany.ReconciliationAccount,
      _Customer.AuthorizationGroup,
      _CustomerCompany.AuthorizationGroup,
      _Customer.CustomerAccountGroup,
      _Customer.CustomerClassification,
      DisplayCurrency
```
