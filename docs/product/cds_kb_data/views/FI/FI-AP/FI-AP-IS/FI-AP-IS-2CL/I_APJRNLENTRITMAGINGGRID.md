---
name: I_APJRNLENTRITMAGINGGRID
description: "This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value
semantic_en: "This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?"
semantic_vi: "Aging Grid of Accounts Payables — CDS view giao diện dựa trên P_APJrnlEntrItmAgingGrid4."
keywords:
  - "aging"
  - "grid"
  - "accounts"
  - "payables"
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
  - bo:plant
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - supplier
---
# I_APJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `FinancialAccountType` |  | |  | `cast( 'K' as fis_koart )` | `CHAR(1)` | Financial Account Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `NetDueIntervalText` |  | |  | `cast( case when NumberOfParameters = 3 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('H.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval3InDays then CONCAT_WITH_SPACE('G.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval2InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1','-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = 0 then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval3InDays as abap.char(20)), '-',1), cast(NegNetDueInterval2InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 3 and NetDueInterval = NegNetDueInterval3InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval3InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('F.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval2InDays then CONCAT_WITH_SPACE('E.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(PosNetDueInterval1InDays + 1 as abap.char(20)), '-',1), cast(PosNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = 0 then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)), '-',1), '0',1),1) when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval2InDays as abap.char(20)), '-',1), cast(NegNetDueInterval1InDays - 1 as abap.char(20)),1),1) when NumberOfParameters = 2 and NetDueInterval = NegNetDueInterval2InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval2InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = MaxNetDueIntervalInDays then CONCAT_WITH_SPACE('D.',CONCAT_WITH_SPACE('>', cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = PosNetDueInterval1InDays then CONCAT_WITH_SPACE('C.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE('1', '-',1), cast(PosNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 1 and NetDueInterval = 0 then CONCAT_WITH_SPACE('B.',CONCAT_WITH_SPACE(CONCAT_WITH_SPACE(cast(NegNetDueInterval1InDays as abap.char(20)),'-',1),'0',1),1) when NumberOfParameters = 1 and NetDueInterval = NegNetDueInterval1InDays then CONCAT_WITH_SPACE('A.',CONCAT_WITH_SPACE('<', cast(NegNetDueInterval1InDays as abap.char(20)),1),1) when NumberOfParameters = 0 and NetDueInterval = MaxNetDueIntervalInDays then 'A. > 0' when NumberOfParameters = 0 and NetDueInterval = 0 then 'B. <= 0' else 'ERROR' end as farp_netdue_intvl_text )` | `CHAR(50)` | Net Due Date Interval |
| `SupplierCountry` |  | |  | `cast( _Supplier._StandardAddress._Country.Country as farp_land1 )` | `CHAR(3)` | Country / Region Key |
| `SupplierRegion` |  | | `_Supplier._StandardAddress._Region` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  | `cast( _SupplierCompany.AccountingClerk as farp_busab )` | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` |  | |  | `cast( _Company.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  | `cast( _SupplierCompany.ReconciliationAccount as farp_akont )` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( _Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp )` | `CHAR(4)` | Supplier Basic Authorization Group |
| `SupplierFinsAuthorizationGrp` |  | | `_SupplierCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
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
| `_Supplier` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_SupplierCountry` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_AccountingClerk` | `I_AccountingClerk` | [0..1] |
| `_SupplierCountry` | `I_Country` | [0..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IAPJEITMAGGRID'
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Aging Grid of Accounts Payables'
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1808 and OP 1809 hence no design studio usage before 
@Search.searchable: false // I_Region is annotated as true, hence this new must have an annotation for searchable
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
define view I_APJrnlEntrItmAgingGrid
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate               : sydate,
    P_NetDueInterval1InDays : farp_net_due_interval1,
    P_NetDueInterval2InDays : farp_net_due_interval2,
    P_NetDueInterval3InDays : farp_net_due_interval3,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst

  as select from P_APJrnlEntrItmAgingGrid4(P_KeyDate:               :P_KeyDate,
                                           P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                           P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                           P_NetDueInterval3InDays: :P_NetDueInterval3InDays)

  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [1..1] to I_JournalEntry               as _JournalEntry               on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                    and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                    and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..1] to I_CompanyCode                as _Company                    on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Supplier                   as _Supplier                   on  _Supplier.Supplier = $projection.Supplier
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType       on  _FinancialAccountType.FinancialAccountType = $projection.FinancialAccountType
  association [0..1] to I_SupplierCompany            as _SupplierCompany            on  _SupplierCompany.CompanyCode = $projection.CompanyCode 
                                                                                    and _SupplierCompany.Supplier    = $projection.Supplier   
  association [0..1] to I_AccountingClerk            as _AccountingClerk            on  _AccountingClerk.CompanyCode     = $projection.CompanyCode
                                                                                    and _AccountingClerk.AccountingClerk = $projection.AccountingClerk
  association [0..1] to I_Country                    as _SupplierCountry            on  _SupplierCountry.Country = $projection.SupplierCountry
  association [0..1] to I_Region                     as _SupplierRegion             on  _SupplierRegion.Region  = $projection.SupplierRegion
                                                                                    and _SupplierRegion.Country = $projection.SupplierCountry
  association [0..1] to I_Currency                   as _DisplayCurrency            on  _DisplayCurrency.Currency = $projection.DisplayCurrency
  association [0..1] to I_SpecialGLCode              as _SpecialGLCode              on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                                                    and _SpecialGLCode.FinancialAccountType = 'K' // credit items
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  _ChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  _GLAccountInChartOfAccounts.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _GLAccountInChartOfAccounts.GLAccount       = $projection.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts as _ReconciliationAccount      on  _ReconciliationAccount.ChartOfAccounts = $projection.ChartOfAccounts
                                                                                    and _ReconciliationAccount.GLAccount       = $projection.ReconciliationAccount
  association [0..1] to I_SupplierAccountGroup       as _SupplierAccountGroup       on  _SupplierAccountGroup.SupplierAccountGroup = $projection.SupplierAccountGroup
//  association [0..*] to I_CostCenter               as _CostCenter                 on  _CostCenter.CostCenter = $projection.CostCenter
//                                                                                  and _CostCenter.ControllingArea = $projection.ControllingArea
//  association [0..1] to I_CostCenter                 as _CurrentCostCenter          on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
//                                                                                    and $projection.CostCenter               = _CurrentCostCenter.CostCenter
//                                                                                    and _CurrentCostCenter.ValidityStartDate <= $session.system_date
//                                                                                    and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
//  association [0..1] to I_ControllingArea             as _ControllingArea            on  _ControllingArea.ControllingArea = $projection.ControllingArea

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
      cast( 'K' as fis_koart )                                                        as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
//      foreign key 0..* will cause problem with SADL calling AE (not with AE itself which assumes and searches in view definition for time restrictions)
//      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      BusinessArea,
      Segment,
      //@ObjectModel.foreignKey.association: '_ControllingArea'
      //ControllingArea,
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

      @ObjectModel.foreignKey.association: '_SupplierCountry'
      cast( _Supplier._StandardAddress._Country.Country as farp_land1 )               as SupplierCountry,
      @ObjectModel.foreignKey.association: '_SupplierRegion'
      _Supplier._StandardAddress._Region.Region                                       as SupplierRegion,
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      cast( _SupplierCompany.AccountingClerk as farp_busab )                          as AccountingClerk,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      cast( _Company.ChartOfAccounts as fis_ktopl )                                   as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      cast( _SupplierCompany.ReconciliationAccount as farp_akont )                    as ReconciliationAccount,

      // fields for authorization checks via DCL
      cast( _Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp )             as SupplierBasicAuthorizationGrp,
      _SupplierCompany.AuthorizationGroup                                             as SupplierFinsAuthorizationGrp,
      
      @ObjectModel.foreignKey.association: '_SupplierAccountGroup'
      _Supplier.SupplierAccountGroup                                                  as SupplierAccountGroup,
        
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
      _Supplier,
      _SupplierCompany,
      _FinancialAccountType,      
      _AccountingClerk,
      _SupplierCountry,
      _SupplierRegion,
      _SpecialGLCode,
//      _CostCenter,
      //_CurrentCostCenter,
      //_ControllingArea,
      _GLAccountInChartOfAccounts,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _DisplayCurrency,
      _SupplierAccountGroup
}
```
