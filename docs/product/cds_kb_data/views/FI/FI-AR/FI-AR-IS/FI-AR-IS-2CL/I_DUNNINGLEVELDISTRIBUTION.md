---
name: I_DUNNINGLEVELDISTRIBUTION
description: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value
semantic_en: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
semantic_vi: "Dunning Level Distribution — CDS view giao diện dựa trên P_DunningLevelDistribution."
keywords:
  - "dunning"
  - "level"
  - "distribution"
  - "company"
  - "code"
  - "customer"
  - "currency"
  - "exchange"
  - "rate"
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
---
# I_DUNNINGLEVELDISTRIBUTION

**This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `DunningLevel` | ✓ | |  |  | `NUMC(1)` | Dunning Level |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ExchangeRateType` |  | |  | `cast(:P_ExchangeRateType as kurst)` | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _CustomerCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  | `cast( _CustomerCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( _Customer.AuthorizationGroup as fis_customer_basic_auth_grp )` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | | `_Customer` | `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `DunningLevel1AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel1AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount1_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 1 in Display Currency |
| `DunningLevel2AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel2AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount2_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 2 in Display Currency |
| `DunningLevel3AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel3AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount3_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 3 in Display Currency |
| `DunningLevel4AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel4AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount4_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 4 in Display Currency |
| `DunningLevel5AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel5AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount5_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 5 in Display Currency |
| `DunningLevel6AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel6AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount6_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 6 in Display Currency |
| `DunningLevel7AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel7AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount7_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 7 in Display Currency |
| `DunningLevel8AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel8AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount8_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 8 in Display Currency |
| `DunningLevel9AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunningLevel9AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_amount9_dsp_crcy )` | `CURR(23)` | Dunning Amount Level 9 in Display Currency |
| `DunningLevelRngeAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DunLevelRngeAmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_TodayDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as far_dun_lvl_rnge_amt_dsp_crcy )` | `CURR(23)` | Dunning Level Range Amount in Display Currency |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIDUNLVLDISTR'
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Dunning Level Distribution'
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

define view I_DunningLevelDistribution
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate                 : sydate,
    P_LowerBoundaryDunningLevel : far_lower_bndry_dunning_level,
    P_UpperBoundaryDunningLevel : far_upper_bndry_dunning_level,
    P_DisplayCurrency           : vdm_v_display_currency,
    P_ExchangeRateType          : kurst
  as select from P_DunningLevelDistribution(P_LowerBoundaryDunningLevel: :P_LowerBoundaryDunningLevel,
                                            P_UpperBoundaryDunningLevel: :P_UpperBoundaryDunningLevel)
  association [0..1] to I_CompanyCode                as _Company               on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer                   as _Customer              on  _Customer.Customer = $projection.Customer
  association [0..1] to I_CustomerCompany            as _CustomerCompany       on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                               and _CustomerCompany.Customer    = $projection.Customer
  association [0..1] to I_AccountingClerk            as _AccountingClerk       on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                               and _AccountingClerk.AccountingClerk = $projection.AccountingClerk
  association [0..1] to I_Country                    as _CustomerCountry       on  _CustomerCountry.Country = $projection.CustomerCountry
  association [0..1] to I_Region                     as _CustomerRegion        on  _CustomerRegion.Region  = $projection.CustomerRegion
                                                                               and _CustomerRegion.Country = $projection.CustomerCountry
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts       on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                               and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_Currency                   as _DisplayCurrency       on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  association [0..1] to I_Currency                   as _CompanyCodeCurrency   on  _CompanyCodeCurrency.Currency = $projection.CompanyCodeCurrency
  association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup  on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
  association [0..1] to I_CustomerClassification     as _CustomerClassification on  _CustomerClassification.CustomerClassification = $projection.CustomerClassification
  
  // associations are declared here in sum for better overview; in runtime the joins are exceuted on appropriate level
  // Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
      @ObjectModel.foreignKey.association: '_Company'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
  key DunningLevel,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      cast(:P_ExchangeRateType as kurst)                                              as ExchangeRateType,
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
      cast(:P_DisplayCurrency as vdm_v_display_currency)                              as DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel1AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount1_dsp_crcy )                                             as DunningLevel1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel2AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount2_dsp_crcy )                                             as DunningLevel2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel3AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount3_dsp_crcy )                                             as DunningLevel3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel4AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount4_dsp_crcy )                                             as DunningLevel4AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel5AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount5_dsp_crcy )                                             as DunningLevel5AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel6AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount6_dsp_crcy )                                             as DunningLevel6AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel7AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount7_dsp_crcy )                                             as DunningLevel7AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel8AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount8_dsp_crcy )                                             as DunningLevel8AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunningLevel9AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_amount9_dsp_crcy )                                             as DunningLevel9AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => DunLevelRngeAmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_TodayDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => #CNV_ERROR_HANDLING.FAIL_ON_ERROR,
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as far_dun_lvl_rnge_amt_dsp_crcy )                                            as DunningLevelRngeAmtInDspCrcy,

      _Company,
      _Customer,
      _CustomerCompany,
      _AccountingClerk,
      _CustomerCountry,
      _CustomerRegion,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _DisplayCurrency,
      _CompanyCodeCurrency,
      _CustomerClassification,
      _CustomerAccountGroup
}
```
