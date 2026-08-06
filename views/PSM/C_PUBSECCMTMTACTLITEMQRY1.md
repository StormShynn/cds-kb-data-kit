---
name: C_PUBSECCMTMTACTLITEMQRY1
description: Commitment/Actual Items - Detailed Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLITEMQRY1')/$value
semantic_en: Commitment/Actual Items - Detailed Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECCMTMTACTLITEMQRY1

**Commitment/Actual Items - Detailed Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLITEMQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Fund` | `CHAR(10)` | Fund |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` | `CURR(25)` | Commitment Expense Amount in Company Code Currency |
| `PubSecExpnActlAmtInCoCodeCrcy` | `CURR(25)` | Actual Expense Amount in Company Code Currency |
| `PubSecExpnCmtmtAmtInTransCrcy` | `CURR(25)` | Commitment Expense Amount in Transaction Currency |
| `PubSecExpnActlAmtInTransCrcy` | `CURR(25)` | Actual Expense Amount in Transaction Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` | `CURR(25)` | Commitment Revenue Amount in Company Code Currency |
| `PubSecRevnActlAmtInCoCodeCrcy` | `CURR(25)` | Actual Revenue Amount in Company Code Currency |
| `PubSecRevnCmtmtAmtInTransCrcy` | `CURR(25)` | Commitment Revenue Amount in Transaction Currency |
| `PubSecRevnActlAmtInTransCrcy` | `CURR(25)` | Actual Revenue Amount in Transaction Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `DebitAmountInCoCodeCrcy` | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` | `CURR(23)` | Credit Amount in Transaction Currency |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `OffsettingAccount` | `CHAR(10)` | Offsetting Account |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `CreationDate` | `DATS(8)` | Creation Date |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `InventorySpecialStockValnType` | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InventorySpecialStockType` | `CHAR(1)` | Inventory Special Stock Type |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `OffsettingAccountType` | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` | `CHAR(1)` | Indicator: Line Item is Completed |
| `ControllingObjectClass` | `CHAR(2)` | Controlling Object Class |
| `PartnerControllingObjectClass` | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `OperatingConcern` | `CHAR(4)` | Operating Concern |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessProcess` | `CHAR(12)` | Business Process |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ControllingObjectDebitType` | `NUMC(1)` | Controlling Object Debit Type |
| `CostEstimate` | `NUMC(12)` | Cost Estimate |
| `CustomerServiceNotification` | `CHAR(12)` | Customer Service Notification |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `DepreciationFiscalPeriod` | `NUMC(3)` | Fiscal Period of Depreciation |
| `EliminationProfitCenter` | `CHAR(10)` | Elimination Profit Center |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` | `CHAR(20)` | Grant |
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
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `GroupFixedAsset` | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` | `CHAR(12)` | Group Asset |
| `InventorySpclStkSalesDocItm` | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpecialStockSupplier` | `CHAR(10)` | Supplier of Inventory Special Stock |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginObjectType` | `NUMC(2)` | Type of Origin Object |
| `PartnerAccountAssignment` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessProcess` | `CHAR(12)` | Partner Business Process |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerCostObject` | `CHAR(12)` | Partner Cost Object |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerOrder` | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrderCategory` | `NUMC(2)` | Partner Order Category |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerSalesDocument` | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `PredecessorReferenceDocCntxt` | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` | `CHAR(10)` | Predecessor Reference Document |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal Reference Document Context |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `SenderAccountAssignment` | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderGLAccount` | `CHAR(10)` | Sender G/L Account |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
