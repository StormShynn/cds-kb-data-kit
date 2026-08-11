---
name: I_GENERALLEDGERIMPAIRMENT
description: "General Ledger Impairment - Cube"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value
semantic_en: "General Ledger Impairment - Cube"
semantic_vi: "General Ledger Impairment - Cube — CDS view giao diện dựa trên P_ProcessedImpairmentLineItem."
keywords:
  - "general"
  - "ledger"
  - "impairment"
  - "cube"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
  - "country"
tags:
  - FI
  - component:FI-GL-GL-G-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - interface-view
  - lob:finance
---
# I_GENERALLEDGERIMPAIRMENT

**General Ledger Impairment - Cube**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `GeneralLedgerAgingIncrement` |  | |  |  | `CHAR(15)` | Aging Increment |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `LossAllowanceKeyFigure` |  | |  |  | `CHAR(30)` | Key Figure |
| `LossAllowanceSortSequenceValue` |  | |  |  | `NUMC(3)` | Sorting Order of Key Figures in a Layout |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  | `(0 - AmountInDisplayCurrency)` | `CURR(23)` |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_KeyFigure` | | ✓ | | | | |
| `_CreditRiskClassVH` | | ✓ | | | | |
| `_AgingIncrementVH` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [1..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_KeyFigure` | `I_LossAllowanceKeyFigure` | [0..1] |
| `_CreditRiskClassVH` | `I_CreditRiskClass` | [0..1] |
| `_AgingIncrementVH` | `I_LossAllowanceAgingIncrement` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGLIMPAIR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE
                 }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: false }
@EndUserText.label: 'General Ledger Impairment - Cube'
///*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_GeneralLedgerImpairment
  with parameters
//    @Consumption.valueHelp: '_Ledger'
    P_Ledger              : fis_rldnr,
//    @Consumption.valueHelp: '_CompanyCode'
    P_CompanyCode         : fis_bukrs,
//    @Consumption.valueHelp: '_CurrencyRoleVH'
    P_CurrencyRole        : fis_curtp,
//    @Consumption.valueHelp: '_LayoutVH'
    P_LossAllowanceLayout : fins_key_figure_layout,
//    @Consumption.valueHelp: '_FiscalYear'
    P_FiscalYear          : gjahr,
//    @Consumption.valueHelp: '_FiscalPeriod'
    P_FiscalPeriod        : poper
  as select from P_ProcessedImpairmentLineItem( P_Ledger: $parameters.P_Ledger, P_CompanyCode: $parameters.P_CompanyCode, P_CurrencyRole: $parameters.P_CurrencyRole, P_LossAllowanceLayout: :P_LossAllowanceLayout, P_FiscalYear: :P_FiscalYear, P_FiscalPeriod: :P_FiscalPeriod )
  association [0..1] to I_CompanyCode                  as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Ledger                       as _Ledger                   on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear               on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod             on  $projection.FiscalYear   = _FiscalPeriod.FiscalYear
                                                                                    and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
                                                                                    and $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  association [0..1] to I_GLAccount                    as _GLAccount                on  $projection.CompanyCode = _GLAccount.CompanyCode
                                                                                    and $projection.GLAccount   = _GLAccount.GLAccount
  association [0..1] to I_Customer                     as _Customer                 on  $projection.Customer = _Customer.Customer
  association [0..1] to I_BusinessPartner              as _BusinessPartner          on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..*] to I_CostCenter                   as _CostCenter               on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..*] to I_ProfitCenter                 as _ProfitCenter             on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_FunctionalArea               as _FunctionalArea           on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_BusinessArea                 as _BusinessArea             on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_ControllingArea              as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Segment                      as _Segment                  on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Segment                      as _PartnerSegment           on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..*] to I_CostCenter                   as _PartnerCostCenter        on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                    and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*] to I_ProfitCenter                 as _PartnerProfitCenter      on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                    and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea    on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea      on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [1..1] to I_Partnercompany               as _PartnerCompany           on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType on  $projection.SubLedgerAcctLineItemType = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
  association [0..1] to I_LossAllowanceKeyFigure       as _KeyFigure                on  $projection.LossAllowanceKeyFigure = _KeyFigure.LossAllowanceKeyFigure
//  association [0..1] to I_LossAllowanceLayout          as _LayoutVH                 on  _LayoutVH.LossAllowanceLayout = $parameters.P_LossAllowanceLayout
//  association [0..1] to I_Ledger                       as _LedgerVH                 on  _LedgerVH.Ledger = $parameters.P_Ledger
//  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYearVH             on  _FiscalYearVH.CompanyCode = $parameters.P_CompanyCode
//                                                                                    and _FiscalYearVH.FiscalYear  = $parameters.P_FiscalYear
//  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriodVH           on  _FiscalPeriodVH.CompanyCode  = $parameters.P_CompanyCode
//                                                                                    and _FiscalPeriodVH.FiscalYear   = $parameters.P_FiscalYear
//                                                                                    and _FiscalPeriodVH.FiscalPeriod = $parameters.P_FiscalPeriod
//  association [0..1] to I_CompanyCode                  as _CompanyCodeVH            on  _CompanyCodeVH.CompanyCode = $parameters.P_CompanyCode
//  association [0..*] to I_LedgerCompanyCodeCrcyRolesVH as _CurrencyRoleVH           on  _CurrencyRoleVH.Ledger      = $projection.Ledger
//                                                                                    and _CurrencyRoleVH.CompanyCode = $projection.CompanyCode
  association [0..1] to I_CreditRiskClass              as _CreditRiskClassVH        on  $projection.CreditRiskClass = _CreditRiskClassVH.CreditRiskClass
  association [0..1] to I_LossAllowanceAgingIncrement  as _AgingIncrementVH         on  $projection.GeneralLedgerAgingIncrement = _AgingIncrementVH.GeneralLedgerAgingIncrement
//  association [0..1] to I_LedgerCompanyCodeCrcyRoles   as AccountingPrinciple       on  Config.accountingprinciple = AccountingPrinciple.AccountingPrinciple
//  association [0..1] to I_AcctgPrncpImprmtConfign      as Config                    on  Config.AccountingPrinciple = AccountingPrinciple.AccountingPrinciple
//                                                                                    and Config.AccountingPrinciple = _AgingIncrementVH.GeneralLedgerAgingScope
  association [0..*] to I_ProfitCenter                 as _CurrentProfitCenter      on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                    and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode   on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                    and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
{
  @ObjectModel.foreignKey.association: '_Ledger'
  Ledger,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  CompanyCode,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  FiscalYear,
  @ObjectModel.foreignKey.association: '_FiscalPeriod'
  FiscalPeriod,
  Country,
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  BusinessPartner,
  @ObjectModel.foreignKey.association: '_CreditRiskClassVH'
  CreditRiskClass,
  @ObjectModel.foreignKey.association: '_AgingIncrementVH'
  GeneralLedgerAgingIncrement,
  @ObjectModel.foreignKey.association: '_GLAccount'
  GLAccount,
  @ObjectModel.foreignKey.association: '_Customer'
  Customer,
  @ObjectModel.foreignKey.association: '_CostCenter'
  CostCenter,
  @ObjectModel.foreignKey.association: '_ProfitCenter'
  ProfitCenter,
  @ObjectModel.foreignKey.association: '_FunctionalArea'
  FunctionalArea,
  @ObjectModel.foreignKey.association: '_BusinessArea'
  BusinessArea,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,
  @ObjectModel.foreignKey.association: '_Segment'
  Segment,
  @ObjectModel.foreignKey.association: '_PartnerCostCenter'
  PartnerCostCenter,
  @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
  PartnerProfitCenter,
  @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
  PartnerFunctionalArea,
  @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
  PartnerBusinessArea,
  @ObjectModel.foreignKey.association: '_PartnerCompany'
  PartnerCompany,
  @ObjectModel.foreignKey.association: '_PartnerSegment'
  PartnerSegment,
  @ObjectModel.foreignKey.association: '_KeyFigure'
  LossAllowanceKeyFigure,
  LossAllowanceSortSequenceValue,
  @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
  SubLedgerAcctLineItemType,
  DisplayCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  (0 - AmountInDisplayCurrency) as AmountInDisplayCurrency,

  _CompanyCode,
  _Ledger,
  _FiscalYear,
  _FiscalPeriod,
  _GLAccount,
  _Customer,
  _CostCenter,
  _ProfitCenter,
  _FunctionalArea,
  _BusinessArea,
  _ControllingArea,
  _Segment,
  _PartnerSegment,
  _PartnerCostCenter,
  _PartnerProfitCenter,
  _PartnerFunctionalArea,
  _PartnerBusinessArea,
  _PartnerCompany,
  _SubLedgerAccLineItemType,
  _KeyFigure,
  _BusinessPartner,
  _CreditRiskClassVH,
  _AgingIncrementVH,
//  _CurrencyRoleVH,
  _CurrentProfitCenter,
  _GLAccountInCompanyCode
}
```
