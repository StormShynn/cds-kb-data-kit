---
name: I_FUTUREACCOUNTSRECEIVABLES
description: "This CDS view provides you with an overview of the future receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall future receivables? Which customers have future receivables?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUTUREACCOUNTSRECEIVABLES')/$value
semantic_en: "This CDS view provides you with an overview of the future receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall future receivables? Which customers have future receivables?"
semantic_vi: "Future Accounts Receivables — CDS view giao diện dựa trên P_FutureAccountsReceivables5."
keywords:
  - "future"
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
# I_FUTUREACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the future receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall future receivables? Which customers have future receivables?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUTUREACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `NetDueIntervalText` | ✓ | |  | `cast( NetDueIntervalText as farp_netdue_intvl_text )` | `CHAR(50)` | Net Due Date Interval |
| `FinancialAccountType` |  | |  | `cast( 'D' as fis_koart )` | `CHAR(1)` | Financial Account Type |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfOpenItems` |  | |  | `cast( sum( NumberOfOpenItems ) as farp_number_of_open_items )` | `INT4(10)` | Number of Items |
| `AmountInDisplayCurrency` |  | |  | `cast( sum( AmountInDisplayCurrency ) as farp_amount_display_crcy )` | `CURR(23)` | Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  | `cast( sum( TotalOverdueAmtInDspCrcy ) as farp_overdue_amount_dsp_crcy )` | `CURR(23)` | Overdue Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  | `cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy )` | `CURR(23)` | Not Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl4AmtInDspCrcy ) as farp_netdue_intvl4_amt_dspcrcy )` | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
| `NetDueLastIntvlAmtInDspCrcy` |  | |  | `cast( sum( NetDueLastIntvlAmtInDspCrcy ) as farp_netdue_lintvl_amt_dspcrcy )` | `CURR(23)` | Overdue Amount in Last Interval in Display Currency |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUTUREACCOUNTSRECEIVABLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUTUREACCOUNTSRECEIVABLES')/$value)*

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #XXL //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #X  //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
@AbapCatalog.sqlViewName: 'IFUTUREACCTRBLS'
@EndUserText.label: 'Future Accounts Receivables'
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1808 and OP 1809 hence no design studio usage before
@Search.searchable: false // I_Region is annotated as true, hence this new must have an annotation for searchable
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.viewEnhancementCategory: [ #PROJECTION_LIST , #GROUP_BY ]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true

define view I_FutureAccountsReceivables

  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate               : sydate,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst_curr,
    P_NetDueInterval1InDays : farp_net_due_interval1,
    P_NetDueInterval2InDays : farp_net_due_interval2,
    P_NetDueInterval3InDays : farp_net_due_interval3,
    P_NetDueInterval4InDays : farp_net_due_interval4
  as select from P_FutureAccountsReceivables5( P_KeyDate: :P_KeyDate,
                                                P_DisplayCurrency: :P_DisplayCurrency,
                                                P_ExchangeRateType: :P_ExchangeRateType,
                                                P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                                P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                                P_NetDueInterval3InDays: :P_NetDueInterval3InDays,
                                                P_NetDueInterval4InDays : :P_NetDueInterval4InDays )

  association [0..1] to I_Currency                   as _DisplayCurrency            on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  association [0..1] to I_CompanyCode                as _Company                    on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer                   as _Customer                   on  _Customer.Customer = $projection.Customer
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType       on  _FinancialAccountType.FinancialAccountType = $projection.FinancialAccountType
  association [0..1] to I_CustomerCompany            as _CustomerCompany            on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                                    and _CustomerCompany.Customer    = $projection.Customer
  association [0..1] to I_AccountingClerk            as _AccountingClerk            on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                                    and _AccountingClerk.AccountingClerk = $projection.AccountingClerk
  association [0..1] to I_Country                    as _CustomerCountry            on  _CustomerCountry.Country = $projection.CustomerCountry
  association [0..1] to I_Region                     as _CustomerRegion             on  _CustomerRegion.Region  = $projection.CustomerRegion
                                                                                    and _CustomerRegion.Country = $projection.CustomerCountry
  association [0..1] to I_SpecialGLCode              as _SpecialGLCode              on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                                                    and _SpecialGLCode.FinancialAccountType = 'D' //$projection.FinancialAccountType
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  _GLAccountInChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _GLAccountInChartOfAccounts.GLAccount       = $projection.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount      on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
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

  key cast( NetDueIntervalText as farp_netdue_intvl_text )                             as NetDueIntervalText,

      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      cast( 'D' as fis_koart )                                                        as FinancialAccountType,

      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      cast( _CustomerCompany.ReconciliationAccount as farp_akont )                     as ReconciliationAccount,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( _Company.ChartOfAccounts as fis_ktopl )                                    as ChartOfAccounts,

      //@ObjectModel.foreignKey.association: '_ExchangeRate'
      ExchangeRateType,

      @ObjectModel.foreignKey.association: '_CustomerCountry'
      cast( _Customer._StandardAddress._Country.Country as farp_land1 )                as CustomerCountry,

      @ObjectModel.foreignKey.association: '_CustomerRegion'
      _Customer._StandardAddress._Region.Region                                        as CustomerRegion,

      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _CustomerCompany.AccountingClerk as farp_busab )                           as AccountingClerk,

      // fields for authorization checks via DCL
      cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )              as CustomerBasicAuthorizationGrp,
      _CustomerCompany.AuthorizationGroup                                              as CustomerFinsAuthorizationGrp,
      
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      _Customer.CustomerAccountGroup                                                   as CustomerAccountGroup,
      
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      _Customer.CustomerClassification                                                 as CustomerClassification,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      DisplayCurrency,

      @DefaultAggregation: #SUM
      cast( sum( NumberOfOpenItems )        as farp_number_of_open_items )             as NumberOfOpenItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( AmountInDisplayCurrency ) as farp_amount_display_crcy )               as AmountInDisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalOverdueAmtInDspCrcy ) as farp_overdue_amount_dsp_crcy )          as TotalOverdueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy )         as TotalNotOvrdAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )        as NetDueIntvl1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )        as NetDueIntvl2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )        as NetDueIntvl3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl4AmtInDspCrcy ) as farp_netdue_intvl4_amt_dspcrcy )        as NetDueIntvl4AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueLastIntvlAmtInDspCrcy ) as farp_netdue_lintvl_amt_dspcrcy )     as NetDueLastIntvlAmtInDspCrcy,

      // associations
      _DisplayCurrency,
      _Company,
      _Customer,
      _CustomerCompany,
      _CustomerCountry,
      _CustomerRegion,
      _FinancialAccountType,
      _AccountingClerk,
      _SpecialGLCode,
      _GLAccountInChartOfAccounts,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _CustomerClassification,
      _CustomerAccountGroup
}                                                                     
  group by
    CompanyCode,
    Customer,
    GLAccount,
    SpecialGLCode,
    NetDueIntervalText,
    _CustomerCompany.ReconciliationAccount,
    _Company.ChartOfAccounts,
    ExchangeRateType,
    _Customer._StandardAddress._Country.Country,
    _Customer._StandardAddress._Region.Region,
    _CustomerCompany.AccountingClerk,
    _Customer.AuthorizationGroup,
    _CustomerCompany.AuthorizationGroup,
    _Customer.CustomerAccountGroup,
    _Customer.CustomerClassification,
    DisplayCurrency
```
