---
name: I_PUBSECFINACCTGITEMCUBE
description: "Budgetary Accounting Items - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value
semantic_en: "Budgetary Accounting Items - Cube"
semantic_vi: "Budgetary Accounting Items - Cube — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "budgetary"
  - "accounting"
  - "items"
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
  - bo:companycode
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECFINACCTGITEMCUBE

**Budgetary Accounting Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  | `cast( AcItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  | `cast( AcItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` | `CHAR(24)` | Partner WBS Element External ID |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `PurchaseOrder` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PORD' and AcItem.SourceLedger = '0E' then AcItem.SourceReferenceDocument when AcItem.SourceLedger = '0L' and AcItem.PurchasingDocument is not initial then AcItem.PurchasingDocument else '' end as vdm_purchaseorder preserving type )` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PREQ' then AcItem.SourceReferenceDocument else '' end as vdm_purchaserequisition preserving type )` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'FMRES' then AcItem.SourceReferenceDocument else '' end as fmis_earmarkedfundsdoc preserving type )` | `CHAR(10)` | Document Number for Earmarked Funds |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_BudgetAccountInChtAccts` | | ✓ | | | | |
| `_SourceReferenceDocumentType` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_FundType` | `I_FundType` | [0..1] |
| `_BudgetAccountInChtAccts` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_SourceReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CFIACANC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Budgetary Accounting Items - Cube'

@VDM.viewType: #COMPOSITE
@Analytics: { 
     dataCategory: #CUBE, 
     dataExtraction.enabled: false,
     internalName: #LOCAL 
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
         
}

define view I_PubSecFinAcctgItemCube
  as select from I_GLAccountLineItem as AcItem
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalIDText    on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElementExternalID on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode  on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_FundType                   as _FundType                    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                                     and $projection.FundType                = _FundType.FundType
  association [0..1] to I_BudgetAccountInChtAccts    as _BudgetAccountInChtAccts     on  $projection.ChartOfAccounts     = _BudgetAccountInChtAccts.ChartOfAccounts
                                                                                     and $projection.PubSecBudgetAccount = _BudgetAccountInChtAccts.PubSecBudgetAccount
  association [0..1] to I_ReferenceDocumentType      as _SourceReferenceDocumentType on  $projection.SourceReferenceDocumentType = _SourceReferenceDocumentType.ReferenceDocumentType
{

      @ObjectModel.foreignKey.association: '_Ledger'
  key AcItem.Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key AcItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key AcItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key AcItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AcItem.AccountingDocument,
  key AcItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      AcItem.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      AcItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      AcItem.ControllingArea,

      // Transaction, Currencies, Units
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      AcItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      AcItem.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      AcItem.ReferenceDocumentType,
      AcItem.LogicalSystem,
      AcItem.ReferenceDocumentContext,
      AcItem.ReferenceDocument,
      AcItem.ReferenceDocumentItem,
      AcItem.ReferenceDocumentItemGroup,
      AcItem.IsReversal,
      AcItem.IsReversed,
      AcItem.ReversalReferenceDocumentCntxt,
      AcItem.ReversalReferenceDocument,
      AcItem.IsSettlement,
      AcItem.IsSettled,
      @ObjectModel.foreignKey.association: '_SourceReferenceDocumentType'
      AcItem.SourceReferenceDocumentType,
      AcItem.SourceLogicalSystem,
      AcItem.SourceReferenceDocumentCntxt,
      AcItem.SourceReferenceDocument,
      AcItem.SourceReferenceDocumentItem,
      AcItem.SourceReferenceDocSubitem,
      AcItem.IsCommitment,

      // Master Data - account assignments
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      AcItem.GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      AcItem.CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      AcItem.ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      AcItem.FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      AcItem.BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'

      AcItem.Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      AcItem.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      AcItem.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      AcItem.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      AcItem.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      AcItem.PartnerCompany,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      AcItem.PartnerSegment,

      // Amounts/Units
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      AcItem.TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.AmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.AmountInCompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      AcItem.GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.AmountInGlobalCurrency,
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      AcItem.CostSourceUnit,

      // Mandatory field for G/L in AC
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      AcItem.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      AcItem.FiscalYearVariant,
      AcItem.PostingDate,
      AcItem.DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AcItem.AccountingDocumentType,
      AcItem.AccountingDocumentItem,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      AcItem.AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      AcItem.PostingKey,
      AcItem.LastChangeDateTime,
      AcItem.CreationDateTime,
      AcItem.CreationDate,      
      @ObjectModel.foreignKey.association: '_GLAccountType'
      AcItem.GLAccountType,
      AcItem.InvoiceReference,
      AcItem.InvoiceReferenceFiscalYear,

      // Fields of subledgers for universal journal
      AcItem.InvoiceItemReference,
      AcItem.ReferencePurchaseOrderCategory,
      AcItem.PurchasingDocument,
      AcItem.PurchasingDocumentItem,
      AcItem.AccountAssignmentNumber,
      @Semantics.text: true
      AcItem.DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      AcItem.SalesDocument,      
      @ObjectModel.foreignKey.association: '_Plant'
      AcItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      AcItem.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      AcItem.Customer,

      // Fields of FI subledger in universal journal
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      AcItem.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      AcItem.SpecialGLCode,
      AcItem.TaxCode,
      AcItem.ClearingDate,
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      AcItem.ClearingAccountingDocument,
      AcItem.ClearingDocFiscalYear,

      // Fields for Asset Accounting in universal journal
      AcItem.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      AcItem.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      AcItem.FixedAsset,
      AcItem.AssetValueDate,
      AcItem.AssetTransactionType,
      AcItem.DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      AcItem.GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      AcItem.GroupFixedAsset,
      AcItem.AssetClass,
      
      // Fields for  Ledger in universal journal
      AcItem.ValuationArea,      

      // Fields for CO
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      AcItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      AcItem.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      AcItem.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      AcItem.OriginCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      AcItem.OrderID,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      AcItem.WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( AcItem._WBSElementBasicData.WBSElementExternalID
            as fis_wbsext_no_conv preserving type )          as WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      AcItem.PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      cast( AcItem._PartnerWBSElementBasicData.WBSElementExternalID
            as fis_partner_wbsext_no_conv preserving type )  as PartnerWBSElementExternalID,

      @ObjectModel.foreignKey.association: '_BusinessProcess'
      AcItem.BusinessProcess,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      AcItem.ServiceDocumentType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      AcItem.ServiceDocument,            
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      AcItem.PartnerOrder,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      AcItem.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      AcItem.PartnerBusinessProcess,

      // Fields for CO-PA
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      AcItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      AcItem.DistributionChannel,
      AcItem.OrganizationDivision,

      // Fields for Public Sector
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      AcItem.FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      AcItem.Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      AcItem.GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      AcItem.BudgetPeriod,
      @ObjectModel.foreignKey.association: '_PartnerFund'
      AcItem.PartnerFund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      AcItem.PartnerGrant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      AcItem.PartnerBudgetPeriod,

      // Add Cash Ledger Account fields
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      AcItem.CashLedgerAccount,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      AcItem.CashLedgerCompanyCode,
      // Add PSM_S4C technical fields
      @Analytics.internalName: #LOCAL
      //MS: Switch to _BudgetAccountInChtAccts to provide the hierarchy
      @ObjectModel.foreignKey.association: '_BudgetAccountInChtAccts'
      //MS: association worked only partially but did not lead to Runtime error: @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      AcItem.PubSecBudgetAccount,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      AcItem.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      AcItem.PubSecBudgetCnsmpnDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      //MS: Marked as error  @Semantics.fiscal.period: true
      AcItem.PubSecBudgetCnsmpnFsclPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      //MS: Marked as error  @Semantics.fiscal.year: true
      AcItem.PubSecBudgetCnsmpnFsclYear,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      AcItem.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      AcItem.PubSecBudgetCnsmpnAmtType,
      @Analytics.internalName: #LOCAL
      AcItem.PubSecBudgetIsRelevant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      AcItem._PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode as PubSecBdgtAcctRevnExpnCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundType'
      AcItem._Fund.FundType                                  as FundType,

      // Specific grantee management fields
      @Analytics.internalName: #LOCAL
      AcItem.SponsoredClass,
      @Analytics.internalName: #LOCAL
      AcItem.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      AcItem.GteeMBudgetValidityNumber,
      // End PSM_S4C technical fields

      // Original documents for semantic navigation
      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'PORD' and
               AcItem.SourceLedger = '0E'
            then AcItem.SourceReferenceDocument
          when AcItem.SourceLedger = '0L' and
               AcItem.PurchasingDocument is not initial
            then AcItem.PurchasingDocument
          else ''
        end as vdm_purchaseorder preserving type )           as PurchaseOrder,

      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'PREQ'
            then AcItem.SourceReferenceDocument
          else ''
        end as vdm_purchaserequisition preserving type )     as PurchaseRequisition,

      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'FMRES'
            then AcItem.SourceReferenceDocument
          else ''
        end as fmis_earmarkedfundsdoc preserving type )      as EarmarkedFundsDocument,


      // Additional Fields
      AcItem.IsStatisticalOrder,
      AcItem.IsStatisticalCostCenter,
      AcItem.IsStatisticalSalesDocument,
      AcItem.WBSIsStatisticalWBSElement,

      // Associations
      AcItem._CashLedgerAccount,
      AcItem._CashLedgerCompanyCode,
      _BudgetAccountInChtAccts, //MS: Add association including hierarchy
      AcItem._PubSecBudgetAccount,
      _PubSecBdgtAcctRevnExpnCode,
      AcItem._PubSecBudgetAccountCoCode,
      AcItem._PubSecBudgetCnsmpnFsclYear,
      AcItem._PubSecBudgetCnsmpnFsclPeriod,
      AcItem._PubSecBudgetCnsmpnType,
      AcItem._PubSecBudgetCnsmpnAmtType,
      AcItem._PubSecBudgetCnsmpnDate,
      AcItem._AccountingDocumentCategory,
      AcItem._AccountingDocumentType,
      @UI.hidden: true
      AcItem._AccountingDocumentTypeText,
      AcItem._AssetTransactionType,
      AcItem._BudgetPeriod,
      @UI.hidden: true
      AcItem._BudgetPeriodText,
      AcItem._BusinessArea,
      @UI.hidden: true
      AcItem._BusinessAreaText,
      AcItem._BusinessProcess,
      @UI.hidden: true
      AcItem._BusinessProcessText,
      AcItem._BusinessTransactionType,
      @UI.hidden: true
      AcItem._BusinessTransactionTypeText,
      AcItem._ChartOfAccounts,
      @UI.hidden: true
      AcItem._ChartOfAccountsText,
      AcItem._ClearingAccountingDocument,
      AcItem._CompanyCode,
      AcItem._CompanyCodeCurrency,
      @UI.hidden: true
      AcItem._CompanyCodeText,
      AcItem._ControllingArea,
      @UI.hidden: true
      AcItem._ControllingAreaText,
      AcItem._CostCenter,
      @UI.hidden: true
      AcItem._CostCenterText,
      AcItem._CostSourceUnit,
      AcItem._CurrentCostCenter,
      AcItem._CurrentProfitCenter,
      AcItem._Customer,
      @UI.hidden: true
      AcItem._CustomerText,
      AcItem._DebitCreditCode,
      @UI.hidden: true
      AcItem._DebitCreditCodeText,
      AcItem._DistributionChannel,
      AcItem._FinancialAccountType,
      @UI.hidden: true
      AcItem._FinancialAccountTypeText,
      AcItem._FinancialManagementArea,
      @UI.hidden: true
      AcItem._FinancialManagementAreaText,
      AcItem._FinancialTransactionType,
      AcItem._FiscalYear,
      AcItem._FiscalYearVariant,
      AcItem._FixedAsset,
      @UI.hidden: true
      AcItem._FixedAssetText,
      AcItem._FunctionalArea,
      @UI.hidden: true
      AcItem._FunctionalAreaText,
      AcItem._Fund,
      _FundType,
      @UI.hidden: true
      AcItem._FundText,
      _Grant,
      _PartnerGrant,
      AcItem._GLAccountInChartOfAccounts,
      AcItem._GLAccountInCompanyCode,
      AcItem._GLAccountTxt,
      AcItem._GLAccountType,
      @UI.hidden: true
      AcItem._GLAcctInChartOfAccountsText,
      AcItem._GlobalCurrency,
      AcItem._GroupFixedAsset,
      @UI.hidden: true
      AcItem._GroupFixedAssetText,
      AcItem._GroupMasterFixedAsset,
      @UI.hidden: true
      AcItem._GroupMasterFixedAssetText,
      AcItem._JournalEntry,
      AcItem._Ledger,
      AcItem._LedgerFiscalYearForVariant,
      @UI.hidden: true
      AcItem._LedgerText,
      AcItem._MasterFixedAsset,
      @UI.hidden: true
      AcItem._MasterFixedAssetText,
      AcItem._Order,
      AcItem._OriginCostCenter,
      AcItem._OriginCostCtrActivityType,
      AcItem._OriginProfitCenter,
      AcItem._PartnerBudgetPeriod,
      AcItem._PartnerBusinessArea,
      @UI.hidden: true
      AcItem._PartnerBusinessAreaText,
      AcItem._PartnerBusinessProcess,
      @UI.hidden: true
      AcItem._PartnerBusinessProcessText,
      AcItem._PartnerCompany,
      AcItem._PartnerCompanyCode,
      @UI.hidden: true
      AcItem._PartnerCompanyCodeText,
      AcItem._PartnerCostCenter,
      AcItem._PartnerFunctionalArea,
      AcItem._PartnerFund,
      @UI.hidden: true
      AcItem._PartnerFundText,
      AcItem._PartnerOrder,
      AcItem._PartnerOrderCategory,
      @UI.hidden: true
      AcItem._PartnerOrderText,
      AcItem._PartnerProfitCenter,
      _PartnerWBSElementExternalID,
      AcItem._PartnerSegment,
      @UI.hidden: true
      AcItem._PartnerSegmentText,
      AcItem._Plant,
      AcItem._PostingKey,
      AcItem._ProfitCenter,
      @UI.hidden: true
      AcItem._ProfitCenterText,
      AcItem._PurchasingDocument,
      AcItem._PurchasingDocumentItem,
      AcItem._ReferenceDocumentType,
      AcItem._SalesDocument,
      AcItem._SalesOrganization,
      AcItem._Segment,
      @UI.hidden: true
      AcItem._SegmentText,
      AcItem._ServiceDocument,    
      AcItem._ServiceDocumentType,  
      AcItem._SourceLedger,
      @UI.hidden: true
      AcItem._SourceLedgerText,
      _SourceReferenceDocumentType,
      AcItem._SpecialGLCode,
      AcItem._Supplier,
      @UI.hidden: true
      AcItem._SupplierText,
      AcItem._TaxCode,
      AcItem._TransactionCurrency,
      AcItem._WBSElementBasicData,
      @UI.hidden: true
      AcItem._WBSElementBasicDataText,
      _WBSElementExternalID,
      @UI.hidden: true
      _WBSElementExternalIDText,
      AcItem._PartnerWBSElementBasicData
}
```
