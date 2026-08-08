---
name: I_ARJRNLENTRITMAGINGGRID
description: "This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value
semantic_en: "This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?"
semantic_vi: "Aging Grid of Accounts Receivables — CDS view giao diện dựa trên P_ARJrnlEntrItmAgingGrid4."
keywords:
  - "aging"
  - "grid"
  - "accounts"
  - "receivables"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "ledger"
  - "line"
  - "item"
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
# I_ARJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `FinancialAccountType` |  | |  | `cast( 'D' as fis_koart )` | `CHAR(1)` | Financial Account Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `NetDueIntervalText` |  | |  | `cast( case when NumberOfParameters = 3 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('H.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval3InDays then CONCAT_WITH_SPACE('G.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval2InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1','-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = 0 then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval3InDays as abap.char(20)), '-',1), cast(NegNetDueInterval2InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval3InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = 0 then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1) when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = 0 then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)),'-',1),'0',1),1) when NumberOfParameters = 1 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 0 and NetDueInterval = MaxNetDueIntervalInDays then 'A. > 0' when NumberOfParameters = 0 and NetDueInterval = 0 then 'B. <= 0' else 'ERROR' end as farp_netdue_intvl_text )` | `CHAR(50)` | Net Due Date Interval |
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
| `TotalAmountInDisplayCrcy` |  | |  | `cast( currency_conversion( amount => AmountInCompanyCodeCurrency, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_total_amount_display_crcy )` | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => TotalNotOverdueAmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_tot_not_ovrd_amt_dspcrcy )` | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => TotalOverdueAmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_total_overdue_amt_dspcrcy)` | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => NetDueIntvl1AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_netdue_intvl1_amt_dspcrcy )` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => NetDueIntvl2AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_netdue_intvl2_amt_dspcrcy )` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => NetDueIntvl3AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_netdue_intvl3_amt_dspcrcy )` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => NetDueIntvl4AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_netdue_intvl4_amt_dspcrcy )` | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
| `FirstIntvlFutrDueAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => FutureIntvl1AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_futdue_intvl1_amt_dspcrcy )` | `CURR(23)` | Future Amount in 1st Due Period (Display Currency) |
| `SecondIntvlFutrDueAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => FutureIntvl2AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_futdue_intvl2_amt_dspcrcy )` | `CURR(23)` | Future Amount in 2nd Due Period (Display Currency) |
| `ThirdIntvlFutrDueAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => FutureIntvl3AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_futdue_intvl3_amt_dspcrcy )` | `CURR(23)` | Future Amount in 3rd Due Period (Display Currency) |
| `FourthIntvlFutrDueAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => FutureIntvl4AmtInCoCodeCrcy, source_currency => CompanyCodeCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as farp_futdue_lintvl_amt_dspcrcy )` | `CURR(23)` | Futre Due Amount for Last Interval in Display Currency |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CustomerAccountGroup` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IARJEITMAGGRID'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Aging Grid of Accounts Receivables'
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
define view I_ARJrnlEntrItmAgingGrid
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate               : sydate,
    P_NetDueInterval1InDays : farp_net_due_interval1,
    P_NetDueInterval2InDays : farp_net_due_interval2,
    P_NetDueInterval3InDays : farp_net_due_interval3,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst

  as select from P_ARJrnlEntrItmAgingGrid4(P_KeyDate:               :P_KeyDate,
                                           P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                           P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                           P_NetDueInterval3InDays: :P_NetDueInterval3InDays)

  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [1..1] to I_JournalEntry               as _JournalEntry               on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                    and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                    and $projection.AccountingDocument = _JournalEntry.AccountingDocument
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
  association [0..1] to I_Currency                   as _DisplayCurrency            on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  association [0..1] to I_SpecialGLCode              as _SpecialGLCode              on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                                                    and _SpecialGLCode.FinancialAccountType = 'D'
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  _GLAccountInChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _GLAccountInChartOfAccounts.GLAccount       = $projection.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount      on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_CustomerAccountGroup       as _CustomerAccountGroup       on  _CustomerAccountGroup.CustomerAccountGroup = $projection.CustomerAccountGroup
  association [0..1] to I_CustomerClassification     as _CustomerClassification     on  _CustomerClassification.CustomerClassification = $projection.CustomerClassification
//  association [0..*] to I_ProfitCenter               as _ProfitCenter               on  _ProfitCenter.ProfitCenter = $projection.ProfitCenter
//                                                                                    and _ProfitCenter.ControllingArea = $projection.ControllingArea
  association [0..1] to I_ProfitCenter               as _CurrentProfitCenter        on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                    and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_ControllingArea            as _ControllingArea            on  _ControllingArea.ControllingArea = $projection.ControllingArea

{
      @ObjectModel.foreignKey.association: '_Company'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

      AccountingDocumentItem,
//      will be sorted as char (- 1, -10, -100, -2, -20, ...)  as of now hence useless      
//      @DefaultAggregation: #NONE
//      cast( NetDueArrearsDays as zmm_verzn_char )                     as NetDueArrearsDays,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      cast( 'D' as fis_koart )                                                        as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
//      foreign key 0..* will cause problem with SADL calling AE (not with AE itself which assumes and searches in view definition for time restrictions)
//      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      BusinessArea,
      Segment,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      BillingDocument,
      AssignmentReference,

      cast(
      case when NumberOfParameters = 3 and NetDueInterval = MaxNetDueIntervalInDays  then CONCAT_WITH_SPACE('H.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval3InDays as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval3InDays then CONCAT_WITH_SPACE('G.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval2InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval3InDays as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1','-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = 0                        then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1)
           when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval3InDays as abap.char(20)), '-',1), cast(NegNetDueInterval2InDays - 1 as abap.char(20)),1),1)
           when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval3InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval3InDays as abap.char(20)),1),1)

           when NumberOfParameters = 2 and NetDueInterval = MaxNetDueIntervalInDays  then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval2InDays as abap.char(20)),1),1)
           when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1)
           when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1)
           when NumberOfParameters = 2 and NetDueInterval = 0                        then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1)
           when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1)
           when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval2InDays as abap.char(20)),1),1)

           when NumberOfParameters = 1 and NetDueInterval = MaxNetDueIntervalInDays  then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval1InDays as abap.char(20)),1),1)
           when NumberOfParameters = 1 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1)
           when NumberOfParameters = 1 and NetDueInterval = 0                        then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)),'-',1),'0',1),1)
           when NumberOfParameters = 1 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval1InDays as abap.char(20)),1),1)

           when NumberOfParameters = 0 and  NetDueInterval = MaxNetDueIntervalInDays then 'A. > 0'
           when NumberOfParameters = 0 and  NetDueInterval = 0                       then 'B. <= 0'

           else 'ERROR'  // dummy
       end as farp_netdue_intvl_text )                                                as NetDueIntervalText,

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
            amount => AmountInCompanyCodeCurrency,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_total_amount_display_crcy )                                           as TotalAmountInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => TotalNotOverdueAmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_tot_not_ovrd_amt_dspcrcy )                                            as TotalNotOvrdAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => TotalOverdueAmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      )  as farp_total_overdue_amt_dspcrcy)                                           as TotalOverdueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => NetDueIntvl1AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_netdue_intvl1_amt_dspcrcy )                                           as NetDueIntvl1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => NetDueIntvl2AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_netdue_intvl2_amt_dspcrcy )                                           as NetDueIntvl2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => NetDueIntvl3AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_netdue_intvl3_amt_dspcrcy )                                           as NetDueIntvl3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => NetDueIntvl4AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_netdue_intvl4_amt_dspcrcy )                                           as NetDueIntvl4AmtInDspCrcy,
       
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => FutureIntvl1AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_futdue_intvl1_amt_dspcrcy )                                           as FirstIntvlFutrDueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => FutureIntvl2AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_futdue_intvl2_amt_dspcrcy )                                           as SecondIntvlFutrDueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => FutureIntvl3AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_futdue_intvl3_amt_dspcrcy )                                           as ThirdIntvlFutrDueAmtInDspCrcy, 

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => FutureIntvl4AmtInCoCodeCrcy,
            source_currency => CompanyCodeCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => :P_KeyDate,
            exchange_rate_type => :P_ExchangeRateType,
      //        error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
      ) as farp_futdue_lintvl_amt_dspcrcy )                                           as FourthIntvlFutrDueAmtInDspCrcy,
      
      _FiscalYear,
      _JournalEntry,
      _Company,
      _Customer,
      _CustomerCompany,
      _FinancialAccountType,
      _AccountingClerk,
      _CustomerCountry,
      _CustomerRegion,
      _SpecialGLCode,
//      _ProfitCenter,
      _CurrentProfitCenter,
      _ControllingArea,
      _GLAccountInChartOfAccounts,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _DisplayCurrency,
      _CustomerClassification,
      _CustomerAccountGroup
}
```
