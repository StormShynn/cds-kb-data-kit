---
name: I_FUNDACCTGLINEITEMCUBE
description: "Fund Accounting Line Item - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value
semantic_en: "Fund Accounting Line Item - Cube"
semantic_vi: "Fund Accounting Line Item - Cube — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "fund"
  - "accounting"
  - "line"
  - "item"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "document"
tags:
  - PSM
  - account
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_FUNDACCTGLINEITEMCUBE

**Fund Accounting Line Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast( FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | | `_Fund` | `FundType` | `CHAR(6)` | Fund Type |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | | `_Grant` | `GrantType` | `CHAR(2)` | Grant Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `_FundType` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FundType` | `I_FundType` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_GrantType` | `I_GrantType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IFALINEITEMC',
                preserveKey: true,
                buffering.status: #NOT_ALLOWED,
                compiler.compareFilter: true }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED }
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fund Accounting Line Item - Cube'
@ObjectModel: { usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view I_FundAcctgLineItemCube
  as select from I_GLAccountLineItem as I_GLAccountLineItem
  association [0..1] to I_FundType               as _FundType                 on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                              and $projection.fundtype                = _FundType.FundType
  association [0..1] to I_Grant                  as _Grant                    on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GrantType              as _GrantType                on  $projection.granttype = _GrantType.GrantType
{
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast( FiscalYear as fis_gjahr_no_conv preserving type )                 as FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,
      PostingDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      CountryChartOfAccounts,
      InvoiceReference,
      @Semantics.fiscal.year: true
      InvoiceReferenceFiscalYear,
      InvoiceItemReference,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @Semantics.booleanIndicator
      IsOpenItemManaged,
      ClearingDate,
      @Semantics.fiscal.year: true
      ClearingDocFiscalYear,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      CostObject,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_Fund'
      Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundType'
      _Fund.FundType,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
      _Grant.GrantType,
      AssetClass,
      DistributionChannel,
      OrganizationDivision,
      SalesOrganization,
      ServiceDocumentType,
      ValuationArea,
      OrderID,
      ServiceDocument,
      @Consumption.hidden: true
      OrderCategory,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      _Grant.GrantIsNotRelevantGrant,
      _Grant.GrantLifecycleStatus,
      _Grant.GrantAuthznGrp,
      _Grant.GranteeMgmtSponsor,

      _FinancialManagementArea,
      _Grant,
      _Grant._Sponsor,
      _GrantType,
      _FundType,
      _JournalEntry,
      _CompanyCode,
      _FiscalYear,
      _FiscalPeriodForVariant,
      _LedgerFiscalYearForVariant,
      _FiscalYearVariant,
      _Fund,
      _ControllingArea,
      _GLAccountType,
      _Product,
      _CompanyCodeCurrency,
      _Segment,
      _ProfitCenter,
      _CostCenter,
      _SalesDocument,
      _BusinessArea,
      _FunctionalArea,
      _GLAccountInChartOfAccounts,
      _GLAccountInCompanyCode,
      _ChartOfAccounts,
      _AccountingDocumentType,
      _FinancialAccountType,
      _Plant,
      _Ledger,
      _SourceLedger,
      _Customer,
      _Supplier,
      _FinancialTransactionType,
      _AlternativeGLAccount,
      _CountryChartOfAccounts,
      _CurrentCostCenter,
      _CurrentProfitCenter,
      _Order,
      _ServiceDocument
}
```
