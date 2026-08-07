---
name: I_APDAYSPAYOUTST
description: "This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value
semantic_en: "This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?"
semantic_vi: "Days Payable Outstanding — CDS view giao diện dựa trên P_APDaysPayOutst6."
keywords:
  - "days"
  - "payable"
  - "outstanding"
  - "company"
  - "code"
  - "supplier"
  - "year"
  - "month"
  - "country"
  - "region"
tags:
  - FI
  - account
  - bo:plant
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - supplier
---
# I_APDAYSPAYOUTST

**This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `YearMonth` | ✓ | |  | `cast(YearMonth as fis_yearmonth_c)` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `SupplierCountry` |  | | `_Supplier._StandardAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` |  | |  | `cast(_Supplier._StandardAddress.Region as farp_supplier_region)` | `CHAR(3)` | Supplier Region |
| `AccountingClerk` |  | |  | `cast(_SupplierCompany.AccountingClerk as farp_busab)` | `CHAR(2)` | Accounting Clerk |
| `DisplayCurrency` |  | |  | `cast(:P_Currency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast(_Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp )` | `CHAR(4)` | Supplier Basic Authorization Group |
| `SupplierFinsAuthorizationGrp` |  | | `_SupplierCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `WeightedNetAmountInDisplayCrcy` |  | |  | `cast( cast(WeightedAmount as abap.curr(23,2) ) as farp_wgt_net_amt_dsp_crcy)` | `CURR(23)` | Weighted Net Amount in Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast(AmountInCoCdCurrency as farp_amount_display_crcy)` | `CURR(23)` | Amount in Display Currency |
| `_CompanyCode` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_SupplierCountry` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_SupplierCountry` | `I_Country` | [0..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIAP_DPO'
@EndUserText.label: 'Days Payable Outstanding'
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1811 hence no design studio usage before
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
define view I_APDaysPayOutst
with parameters
  P_Currency : vdm_v_display_currency,
  P_ExchangeRateType : kurst,
  @Environment.systemField: #SYSTEM_DATE
  P_ExchangeRateDate : sydate, 
  //P_StartDate : BEGDA,
  @Environment.systemField: #SYSTEM_DATE
  P_EndDate : sydate
as select from P_APDaysPayOutst6 
  (P_Currency : :P_Currency, 
   P_ExchangeRateType : :P_ExchangeRateType, 
   P_ExchangeRateDate : :P_ExchangeRateDate, 
   P_DateTo : :P_EndDate) 
association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode 
association [0..1] to I_Currency as _DisplayCurrency on $projection.DisplayCurrency = _DisplayCurrency.Currency
association [0..1] to I_Country as _SupplierCountry on $projection.SupplierCountry = _SupplierCountry.Country
association [0..1] to I_Region as _SupplierRegion on $projection.SupplierRegion = _SupplierRegion.Region and $projection.SupplierCountry = _SupplierRegion.Country
association [0..1] to I_AccountingClerk as _AccountingClerk on $projection.CompanyCode = _AccountingClerk.CompanyCode 
                                                           and $projection.AccountingClerk = _AccountingClerk.AccountingClerk     
association [0..1] to I_Supplier as _Supplier on $projection.Supplier = _Supplier.Supplier
association [0..1] to I_SupplierCompany as _SupplierCompany on $projection.Supplier = _SupplierCompany.Supplier and
                                                               $projection.CompanyCode = _SupplierCompany.CompanyCode  
// associations are declared here in sum for better overview; in runtime the joins are exceuted on appropriate level
// Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
  key cast(YearMonth as fis_yearmonth_c) as YearMonth,
  
  @ObjectModel.foreignKey.association: '_SupplierCountry'
  _Supplier._StandardAddress.Country as SupplierCountry,
  
  //cast(SUBSTRING(YearMonth, 1, 4) as farp_clearingyear) as ClearingYear,
  //cast(SUBSTRING(YearMonth, 5, 2) as farp_clearingmonth) as ClearingMonth, 
  //@Semantics.currencyCode:true
  //CompanyCodeCurrency,
  //_CompanyCode._Country.CountryThreeLetterISOCode as CompanyCodeCountryISOCode,
  @ObjectModel.foreignKey.association: '_SupplierRegion'
  cast(_Supplier._StandardAddress.Region as farp_supplier_region) as SupplierRegion,
  @ObjectModel.foreignKey.association: '_AccountingClerk'
  cast(_SupplierCompany.AccountingClerk as farp_busab) as AccountingClerk,
        
  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_DisplayCurrency'
  cast(:P_Currency as vdm_v_display_currency) as DisplayCurrency, 
  
  cast(_Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp ) as SupplierBasicAuthorizationGrp,
  _SupplierCompany.AuthorizationGroup as SupplierFinsAuthorizationGrp,
     
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( cast(WeightedAmount as abap.curr(23,2) ) as farp_wgt_net_amt_dsp_crcy) as WeightedNetAmountInDisplayCrcy,  
       
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast(AmountInCoCdCurrency as farp_amount_display_crcy) as AmountInDisplayCurrency,
       
  //this calculation is not correct. use calculation in query C_Apdayspayoutst        
//  @DefaultAggregation: #SUM
//  case 
//    when AmountInCoCdCurrency = 0
//    then 0
//    else ROUND( DIVISION( WeightedAmount, AmountInCoCdCurrency, 2 ), 2 )
//  end  as DaysPayablesOutstanding,
          
  _CompanyCode, 
  _Supplier,
  _SupplierCountry,
  _SupplierRegion,
  _AccountingClerk,
  _DisplayCurrency  
}
//where AmountInCoCdCurrency != 0;
```
