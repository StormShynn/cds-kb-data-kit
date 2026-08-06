---
name: I_PUBSECFINACCTGITEMCUBE
description: Budgetary Accounting Items - Cube
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value
semantic_en: Budgetary Accounting Items - Cube
tags:
  - PSM
  - account
  - bo:companycode
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECFINACCTGITEMCUBE

**Budgetary Accounting Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFINACCTGITEMCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal Reference Document |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` | `DATS(8)` | Posting Date |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `LastChangeDateTime` | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` | `DEC(15)` | Creation Date Time |
| `CreationDate` | `DATS(8)` | Creation Date |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `DepreciationFiscalPeriod` | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` | `CHAR(4)` | Group Asset Subnumber |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `BusinessProcess` | `CHAR(12)` | Business Process |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `PartnerOrder` | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrderCategory` | `NUMC(2)` | Partner Order Category |
| `PartnerBusinessProcess` | `CHAR(12)` | Partner Business Process |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
| `IsStatisticalOrder` | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
