---
name: I_TOTALACCOUNTSRECEIVABLES
description: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value
semantic_en: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?"
semantic_vi: "Total Accounts Receivables — CDS view giao diện dựa trên P_TotalAccountsReceivables12."
keywords:
  - "total"
  - "accounts"
  - "receivables"
  - "company"
  - "code"
  - "customer"
  - "account"
  - "special"
  - "interval"
  - "text"
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
---
# I_TOTALACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `NetDueIntervalText` | ✓ | |  | `cast( NetDueIntervalText as farp_netdue_intvl_text )` | `CHAR(50)` | Net Due Date Interval |
| `FinancialAccountType` |  | |  | `cast( 'D' as fis_koart )` | `CHAR(1)` | Financial Account Type |
| `CompanyCodeCurrency` |  | | `_Company` | `Currency` | `CUKY(5)` | Currency Key |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  | `cast( sum( TotalAmountInDisplayCrcy ) as farp_total_amount_display_crcy )` | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  | `cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_tot_not_ovrd_amt_dspcrcy )` | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  | `cast( sum( TotalOverdueAmtInDspCrcy ) as farp_total_overdue_amt_dspcrcy)` | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl4AmtInDspCrcy ) as farp_netdue_intvl4_amt_dspcrcy )` | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFITOTALACCTRBLS'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Total Accounts Receivables'
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

define view I_TotalAccountsReceivables
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate             : sydate,    // this is rather a key date, we refrain from renaming it to be compatible
    P_NetDueInterval1InDays : farp_net_due_interval1,
    P_NetDueInterval2InDays : farp_net_due_interval2,
    P_NetDueInterval3InDays : farp_net_due_interval3,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst

  as select from P_TotalAccountsReceivables12(P_TodayDate:             :P_TodayDate,
                                              P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                              P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                              P_NetDueInterval3InDays: :P_NetDueInterval3InDays,
                                              P_DisplayCurrency:       :P_DisplayCurrency,
                                              P_ExchangeRateType:      :P_ExchangeRateType)
  association [0..1] to I_CompanyCode                as _Company                    on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer                   as _Customer                   on  _Customer.Customer = $projection.Customer
  association [0..1] to I_CustomerCompany            as _CustomerCompany            on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                                    and _CustomerCompany.Customer    = $projection.Customer
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType       on  _FinancialAccountType.FinancialAccountType = $projection.FinancialAccountType
  association [0..1] to I_AccountingClerk            as _AccountingClerk            on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                                    and _AccountingClerk.AccountingClerk = $projection.AccountingClerk
  association [0..1] to I_Country                    as _CustomerCountry            on  _CustomerCountry.Country = $projection.CustomerCountry
  association [0..1] to I_Region                     as _CustomerRegion             on  _CustomerRegion.Region  = $projection.CustomerRegion
                                                                                    and _CustomerRegion.Country = $projection.CustomerCountry
  association [0..1] to I_Currency                   as _DisplayCurrency            on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  association [0..1] to I_Currency                   as _CompanyCodeCurrency        on  _CompanyCodeCurrency.Currency = $projection.CompanyCodeCurrency
  association [0..1] to I_SpecialGLCode              as _SpecialGLCode              on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                                                    and _SpecialGLCode.FinancialAccountType = 'D'
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  _GLAccountInChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _GLAccountInChartOfAccounts.GLAccount       = $projection.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount      on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup       on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
  association [0..1] to I_CustomerClassification     as _CustomerClassification     on  _CustomerClassification.CustomerClassification = $projection.CustomerClassification
  
  // associations are declared here in sum for better overview; in runtime the joins are exceuted on appropriate level
  // Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
      @ObjectModel.foreignKey.association: '_Company'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
  key SpecialGLCode,
  key cast( NetDueIntervalText as farp_netdue_intvl_text )                            as NetDueIntervalText,
  
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      cast( 'D' as fis_koart )                                                        as FinancialAccountType,
      // switch to association to make it unique (dependent from key field company) and keep it out of key; can't be removed as query exposes CompanyCodeCurrency already
      // and odata (i.e. query) changes shall be compatible
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      _Company.Currency                                                               as CompanyCodeCurrency,
      //  @ObjectModel.foreignKey.association: '_ExchangeRate'
      ExchangeRateType,
      @ObjectModel.foreignKey.association: '_CustomerCountry'
      cast( _Customer._StandardAddress._Country.Country as farp_land1 )               as CustomerCountry,
      @ObjectModel.foreignKey.association: '_CustomerRegion'
      _Customer._StandardAddress._Region.Region                                       as CustomerRegion,
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _CustomerCompany.AccountingClerk as farp_busab )                          as AccountingClerk,
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
      cast( sum( TotalAmountInDisplayCrcy ) as farp_total_amount_display_crcy )       as TotalAmountInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_tot_not_ovrd_amt_dspcrcy )        as TotalNotOvrdAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalOverdueAmtInDspCrcy )  as farp_total_overdue_amt_dspcrcy)       as TotalOverdueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )       as NetDueIntvl1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )       as NetDueIntvl2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )       as NetDueIntvl3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl4AmtInDspCrcy ) as farp_netdue_intvl4_amt_dspcrcy )       as NetDueIntvl4AmtInDspCrcy,

      _Company,
      _Customer,
      _CustomerCompany,
      _AccountingClerk,
      _CustomerCountry,
      _CustomerRegion,
      _FinancialAccountType,
      _SpecialGLCode,
      _GLAccountInChartOfAccounts,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _DisplayCurrency,
      _CompanyCodeCurrency,
      _CustomerClassification,
      _CustomerAccountGroup
}                                                              
  group by
      CompanyCode,
      Customer,
      GLAccount,
      SpecialGLCode,  
      NetDueIntervalText,
      _Company.Currency,
      ExchangeRateType,
      _Customer._StandardAddress._Country.Country,
      _Customer._StandardAddress._Region.Region,
      _CustomerCompany.AccountingClerk,
      _Company.ChartOfAccounts,
      _CustomerCompany.ReconciliationAccount,
      _Customer.AuthorizationGroup,
      _CustomerCompany.AuthorizationGroup,
      _Customer.CustomerAccountGroup,
      _Customer.CustomerClassification,
      DisplayCurrency
```
