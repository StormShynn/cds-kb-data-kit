---
name: I_APFLEXIBLEAGING
description: "This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APFLEXIBLEAGING')/$value
semantic_en: "This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?"
semantic_vi: "Aging Analysis Smart Business App — CDS view giao diện dựa trên P_APAGINGANALYSIS."
keywords:
  - "aging"
  - "analysis"
  - "smart"
  - "business"
  - "app"
  - "company"
  - "code"
  - "transaction"
  - "currency"
  - "account"
  - "supplier"
  - "accounting"
  - "document"
  - "category"
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
# I_APFLEXIBLEAGING

**This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APFLEXIBLEAGING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `TransactionCurrency` | ✓ | |  |  | `CUKY(5)` | Transaction Currency |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentCategory` | ✓ | |  |  | `CHAR(1)` | Document Status |
| `AgingGridText` | ✓ | |  |  | `CHAR(20)` | Aging Grid Text |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `FinancialAccountType` |  | |  | `cast( 'K' as fis_koart )` | `CHAR(1)` | Financial Account Type |
| `ChartOfAccounts` |  | |  | `cast( _CompanyCode.ChartOfAccounts as fis_ktopl )` | `CHAR(4)` | Chart of Accounts |
| `SupplierAccountGroup` |  | |  | `cast (_Supplier.SupplierAccountGroup as farp_supplier_account_group)` | `CHAR(4)` | Supplier Account Group |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `DisplayCurrency` |  | |  | `cast (DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast(_Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp )` | `CHAR(4)` | Supplier Basic Authorization Group |
| `SupplierFinsAuthorizationGrp` |  | | `_SupplierCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `AmountInDisplayCurrency_E` |  | |  | `cast( sum( AmountInDisplayCurrency_E ) as farp_amount_display_crcy )` | `CURR(23)` | Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  | `cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy)` | `CURR(23)` | Not Overdue Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy_E` |  | |  | `cast( sum( TotalOverdueAmtInDspCrcy_E ) as farp_total_overdue_amt_dspcrcy)` | `CURR(23)` | Total Overdue Amount in Display Currency |
| `_CompanyCode` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_GLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APFLEXIBLEAGING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APFLEXIBLEAGING')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IAPFLXBLAGING'
@AccessControl.authorizationCheck:#CHECK
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1811 hence no design studio usage before
@EndUserText.label: 'Aging Analysis Smart Business App'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.viewEnhancementCategory: [ #PROJECTION_LIST , #GROUP_BY ]
@Metadata.allowExtensions: true
define view I_APFlexibleAging
// Corresponds to calculation view 'sap.hba.r.sfin700.AccountsPayableFlexibleAgingQuery'
// Corresponds to node Aggregation
with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate ,
    P_AgingGridMeasureInDays : farp_aging_grid_measure,
    P_NumberOfAgingGridColumns : farp_number_of_grid_columns,
    P_DisplayCurrency : vdm_v_display_currency,
    P_ExchangeRateType : kurst
as select from
P_APAGINGANALYSIS(
    P_KeyDate : :P_KeyDate,
    P_AgingGridMeasureInDays : :P_AgingGridMeasureInDays,
    P_NumberOfAgingGridColumns : :P_NumberOfAgingGridColumns,
    P_DisplayCurrency : :P_DisplayCurrency,
    P_ExchangeRateType: :P_ExchangeRateType)
association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
association [0..1] to I_Supplier as _Supplier on  $projection.Supplier =  _Supplier.Supplier
association [0..1] to I_FinancialAccountType       as _FinancialAccountType       on  _FinancialAccountType.FinancialAccountType = $projection.FinancialAccountType
association [0..1] to I_ChartOfAccounts as _ChartOfAccounts on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
association [0..1] to I_SupplierAccountGroup    as _SupplierAccountGroup    on $projection.SupplierAccountGroup =  _SupplierAccountGroup.SupplierAccountGroup
association [0..1] to I_Currency    as _DisplayCurrency         on $projection.DisplayCurrency  = _DisplayCurrency.Currency
association [0..1] to I_AccountingDocumentCategory as _AccountingDocumentCategory on $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory
association [0..1] to I_GLAccountInChartOfAccounts as _GLAccount             on  $projection.ChartOfAccounts = _GLAccount.ChartOfAccounts
                                                                             and $projection.GLAccount       = _GLAccount.GLAccount
association [0..1] to I_SupplierCompany as _SupplierCompany on $projection.Supplier = _SupplierCompany.Supplier and
                                                               $projection.CompanyCode = _SupplierCompany.CompanyCode
association [0..1] to I_SpecialGLCode   as _SpecialGLCode   on  _SpecialGLCode.SpecialGLCode        = $projection.SpecialGLCode
                                                            and _SpecialGLCode.FinancialAccountType = 'K' // credit items
{
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key CompanyCode,
    key TransactionCurrency,
    @ObjectModel.foreignKey.association: '_GLAccount'
    key GLAccount,
    @ObjectModel.foreignKey.association: '_Supplier'
    key Supplier,
    @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
    key AccountingDocumentCategory,
    key AgingGridText,
    @ObjectModel.foreignKey.association: '_SpecialGLCode'
    key SpecialGLCode,

    @ObjectModel.foreignKey.association: '_FinancialAccountType'
    cast( 'K' as fis_koart ) as FinancialAccountType,
    @ObjectModel.foreignKey.association: '_ChartOfAccounts'
    cast( _CompanyCode.ChartOfAccounts as fis_ktopl ) as ChartOfAccounts,
    @ObjectModel.foreignKey.association: '_SupplierAccountGroup'
    cast (_Supplier.SupplierAccountGroup as farp_supplier_account_group) as SupplierAccountGroup,
    ExchangeRateType,

    @Semantics.currencyCode:true
    @ObjectModel.foreignKey.association: '_DisplayCurrency'
    cast (DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,

    // fields for authorization checks via DCL
    cast(_Supplier.AuthorizationGroup as fis_supplier_basic_auth_grp ) as SupplierBasicAuthorizationGrp,
    _SupplierCompany.AuthorizationGroup as SupplierFinsAuthorizationGrp,

    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'DisplayCurrency'
    cast( sum( AmountInDisplayCurrency_E ) as farp_amount_display_crcy ) as AmountInDisplayCurrency_E,

    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'DisplayCurrency'
    cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy) as TotalNotOvrdAmtInDspCrcy,

    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'DisplayCurrency'
    cast( sum( TotalOverdueAmtInDspCrcy_E ) as farp_total_overdue_amt_dspcrcy) as TotalOverdueAmtInDspCrcy_E,

    //@DefaultAggregation: #SUM
    //cast( sum( NumberOfOpenItems ) as farp_number_of_open_items ) as NumberOfOpenItems,

    _CompanyCode,
    _Supplier,
    _FinancialAccountType,
    _ChartOfAccounts,
    _SupplierAccountGroup,
    _DisplayCurrency,
    _AccountingDocumentCategory,
    _GLAccount,
    _SpecialGLCode
}
  group by
      CompanyCode,
      TransactionCurrency,
      Supplier,
      GLAccount,
      SpecialGLCode,
      AgingGridText,
      AccountingDocumentCategory,
      ExchangeRateType,
      _CompanyCode.ChartOfAccounts,
      _Supplier.AuthorizationGroup,
      _SupplierCompany.AuthorizationGroup,
      _Supplier.SupplierAccountGroup,
      DisplayCurrency
```
