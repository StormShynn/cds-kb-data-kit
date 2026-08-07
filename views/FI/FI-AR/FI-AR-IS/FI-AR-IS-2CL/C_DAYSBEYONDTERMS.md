---
name: C_DAYSBEYONDTERMS
description: This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value
semantic_en: This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.
semantic_vi: Days Beyond Terms for Smart Business Apps — CDS view tiêu dùng dựa trên I_DaysBeyondTerms.
keywords:
  - days
  - beyond
  - terms
  - for
  - smart
  - business
  - apps
  - calendar
  - month
  - year
  - customer
  - company
  - code
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
  - bo:project
---
# C_DAYSBEYONDTERMS

**This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarMonth` | ✓ | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` | ✓ | |  |  | `NUMC(4)` | Calendar Year |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DurationUnit` |  | |  |  | `UNIT(3)` |  |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `TotalAmountInDisplayCrcy` |  | |  | `1` | `INT1(3)` |  |
| `BeyondTermDays` |  | |  | `1` | `INT1(3)` |  |
| `PaymentsInTermPercent` |  | |  | `1` | `INT1(3)` |  |
| `PaymentsOutOfTermPercent` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIDAYSBYNDTERMS'
@EndUserText.label: 'Days Beyond Terms for Smart Business Apps'
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
define view C_DaysBeyondTerms
  //as select from bseg
  //{
  //key bukrs

  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate        : sydate,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType : kurst_curr

  as select from I_DaysBeyondTerms(P_TodayDate : :P_TodayDate, P_DisplayCurrency : :P_DisplayCurrency, P_ExchangeRateType : :P_ExchangeRateType)

  // define 'sap:text' property in metadata annotations by stating the association to the property with annotation 'semantics.text:true'
  //         (e.g. 'Customer' and '_Customer.CustomerName as xyz')
  // define formulas for KPIs which shall be calculated after aggregation; will be executed by Analytical Engine off DB
{
  key CalendarMonth,
  key CalendarYear,
  key Customer,
  key CompanyCode,

      YearMonth,
      CustomerCountry,
      CustomerRegion,
      AccountingClerk,
      ExchangeRateType,
      ReconciliationAccount,
      ChartOfAccounts,

      @Semantics.currencyCode:true
      DisplayCurrency,

      @EndUserText.label: 'Unit of Measurement'
      @Semantics.unitOfMeasure:true
      DurationUnit,

      _Company.CompanyCodeName                                                                   as CompanyCodeName,
      _Customer.CustomerName                                                                     as CustomerName,
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                               as CustomerCountryName,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                           as CustomerRegionName,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      //    _UnitOfMeasure._Text[1:Language = :P_Language].UnitOfMeasureName                     as DurationUnitName,
      
      CustomerAccountGroup                                                                       as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
      _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc         as CustomerClassificationDesc,

      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'WgtdPaidWthnTermsAmtInDspCrcy + WgtdPaidOutOfTermsAmtInDspCrcy'
      1                                                                                   as TotalAmountInDisplayCrcy,

      @EndUserText.label: 'Days Beyond Terms'
      @Semantics.quantity.unitOfMeasure: 'DurationUnit'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0(WeightedClearedAmountInDspCrcy / ClearedAmountInDisplayCurrency)'
      @AnalyticsDetails.query.decimals: 0
      1                                                                                   as BeyondTermDays,

      @EndUserText.label: 'Payments Within Terms (%)'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.TotalAmountInDisplayCrcy >= 0 AND $projection.TotalAmountInDisplayCrcy <= 0 THEN 100 ELSE NDIV0( ( WgtdPaidWthnTermsAmtInDspCrcy * 100) / ( WgtdPaidWthnTermsAmtInDspCrcy + WgtdPaidOutOfTermsAmtInDspCrcy ) ) END'
      @AnalyticsDetails.query.decimals: 2
      1                                                                                   as PaymentsInTermPercent,

      @EndUserText.label: 'Payments Beyond  Terms (%)'
      @DefaultAggregation: #FORMULA
      //    @AnalyticsDetails.query.formula: 'CASE WHEN $projection.TotalAmountInDisplayCrcy >= 0 AND $projection.TotalAmountInDisplayCrcy <= 0 THEN 0 ELSE ( 100 - NDIV0( ( WgtdPaidWthnTermsAmtInDspCrcy * 100) / ( WgtdPaidWthnTermsAmtInDspCrcy + WgtdPaidOutOfTermsAmtInDspCrcy ) ) ) END'
      @AnalyticsDetails.query.formula: '100 - $projection.PaymentsInTermPercent'
      @AnalyticsDetails.query.decimals: 2
      1                                                                                   as PaymentsOutOfTermPercent

}
```
