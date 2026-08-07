---
name: C_APDAYSPAYOUTST
description: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value
semantic_en: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.
semantic_vi: Days Payable Outstanding Smart Business App — CDS view tiêu dùng dựa trên I_APDaysPayOutst.
keywords:
  - days
  - payable
  - outstanding
  - smart
  - business
  - app
  - company
  - code
  - supplier
  - year
  - month
  - region
  - name
tags:
  - FI
  - bo:plant
  - component:FI-AP-IS-2CL
  - consumption-view
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - lob:finance
  - supplier
---
# C_APDAYSPAYOUTST

**This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `SupplierRegion` |  | |  |  | `CHAR(3)` | Supplier Region |
| `SupplierRegionName` |  | |  | `_SupplierRegion._RegionText[1:Language = $parameters.P_Language].RegionName` | `CHAR(20)` | Description |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SupplierCountryName` |  | |  | `_SupplierCountry._Text[1:Language = $parameters.P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `WeightedNetAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Weighted Net Amount in Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `DaysPayablesOutstanding` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIAP_DPO'
@EndUserText.label: 'Days Payable Outstanding Smart Business App'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true 
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@OData.publish: true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations: true
define view C_APDaysPayOutst
with parameters
  @Consumption.defaultValue: 'EUR'
  P_Currency : vdm_v_display_currency,
  
  @Consumption.defaultValue: 'M'
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } }]
  P_ExchangeRateType : kurst,
// ---> Variable is not shown and is defaulted with todays date
  @Consumption.hidden: true
  @Environment.systemField: #SYSTEM_DATE   
  P_ExchangeRateDate : sydate, 
// ---> Variable is not shown and is defaulted with todays date
// ---> Variable is used only for passing parameter to interface view
//  @Consumption.hidden: true
//  @Environment.systemField: #SYSTEM_DATE   
  //P_StartDate : sydate,  
// ---> Variable is not shown and is defaulted with todays date
  @Consumption.hidden: true
  @Environment.systemField: #SYSTEM_DATE   
  P_EndDate : sydate,
// ---> Variable is not shown and is defaulted with language
  @Consumption.hidden: true
  @Environment.systemField: #SYSTEM_LANGUAGE 
  P_Language: sylangu
as select from I_APDaysPayOutst 
  (P_Currency : $parameters.P_Currency, 
   P_ExchangeRateType : $parameters.P_ExchangeRateType, //'M'
   P_ExchangeRateDate : $parameters.P_ExchangeRateDate, 
   //P_StartDate : $parameters.P_StartDate, 
   P_EndDate : $parameters.P_EndDate)
{
  CompanyCode,
  Supplier,   
  YearMonth,
  //ClearingYear,
  //ClearingMonth, 
  //CompanyCodeCurrency,
  //CompanyCodeCountryISOCode,
  SupplierRegion,
  _SupplierRegion._RegionText[1:Language = $parameters.P_Language].RegionName as SupplierRegionName,
  
  _CompanyCode.CompanyCodeName as CompanyCodeName,
  _Supplier.SupplierName as SupplierName,
  
  AccountingClerk,
  _AccountingClerk.AccountingClerkName as AccountingClerkName,
  
  SupplierCountry,  
  _SupplierCountry._Text[1:Language = $parameters.P_Language].CountryName as SupplierCountryName, 
  
  @Semantics.currencyCode:true
  DisplayCurrency, 
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  WeightedNetAmountInDisplayCrcy as WeightedNetAmountInDisplayCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  AmountInDisplayCurrency as AmountInDisplayCurrency,
  
  @EndUserText.label: 'Days Payables Outstanding'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'WeightedNetAmountInDisplayCrcy / AmountInDisplayCurrency'
  @AnalyticsDetails.query.decimals: 2
  1 as DaysPayablesOutstanding
}
```
