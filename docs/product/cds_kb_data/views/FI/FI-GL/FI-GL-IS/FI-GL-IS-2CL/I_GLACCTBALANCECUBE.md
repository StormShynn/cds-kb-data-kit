---
name: I_GLACCTBALANCECUBE
description: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value
semantic_en: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
semantic_vi: "G/L Account Balance - Cube — CDS view giao diện dựa trên I_GLAcctBalance."
keywords:
  - "G/L Account Balance - Cube"
  - "g/l"
  - "account"
  - "balance"
  - "cube"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "source"
  - "accounting"
  - "document"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_GLACCTBALANCECUBE

**This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountFlowType` | ✓ | |  |  | `CHAR(10)` | G/L Account Flow Type |
| `FiscalPeriodDate` | ✓ | |  |  | `CHAR(11)` | Fiscal Period Date |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
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
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `Material` |  | |  |  | `CHAR(40)` | Product (Deprecated) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpclStockWBSElement` |  | |  | `cast(I_GLAcctBalance._InvtrySpclStockWBSElmntIntID.WBSElement as mlmat_ps_posid preserving type )` | `CHAR(24)` | WBS Element (external) of Valuated Special Inventory |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Sender System |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `VarianceOriginGLAccount` |  | |  |  | `CHAR(10)` | Origin G/L Account of a Variance |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Product Sold (Deprecated) |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs preserving type )` | `CHAR(24)` | WBS Element |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Project` |  | |  | `cast(Project as fis_project preserving type )` | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `EndingBalanceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Company Code Currency |
| `EndingBalanceAmtInTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Transaction Currency |
| `EndingBalanceAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `EndingBalanceAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Global Currency |
| `EndingBalanceAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Functional Currency |
| `EndingBalAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 1 |
| `EndingBalAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 2 |
| `EndingBalAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 3 |
| `EndingBalAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 4 |
| `EndingBalAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 5 |
| `EndingBalAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 6 |
| `EndingBalAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 7 |
| `EndingBalAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 8 |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of the Accrual Object |
| `AccrualReferenceObject` |  | |  |  | `CHAR(32)` | Accrual Reference Object |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  | `YearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  | `YearMonth` | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  | `YearWeek` | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalPeriodStartDate` |  | | `_FiscalPeriodForVariant` | `FiscalPeriodStartDate` | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | | `_FiscalPeriodForVariant` | `FiscalPeriodEndDate` | `DATS(8)` | End Date of Fiscal Period |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_CorporateGroupAccount` | | ✓ | | | | |
| `_CorporateGroupChartOfAccounts` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_AccountAssignmentType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_SenderGLAccount` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_PartnerServiceDocumentType` | | ✓ | | | | |
| `_PartnerServiceDocument` | | ✓ | | | | |
| `_PartnerServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElmntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_AccrualObjectType` | | ✓ | | | | |
| `_AccrualObject` | | ✓ | | | | |
| `_AccrualSubobject` | | ✓ | | | | |
| `_AccrualItemType` | | ✓ | | | | |
| `_GLAccountFlowType` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclPeriod` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnAmtType` | | ✓ | | | | |
| `_ConsolidationUnit` | | ✓ | | | | |
| `_PartnerConsolidationUnit` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_ConsolidationChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFinancialStatementItem` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubitem` | | ✓ | | | | |
| `_LedgerCompanyCodeCrcyRoles` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CorporateGroupAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CorporateGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectInternalID` | `I_ProjectByInternalKey` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_AccountAssignmentType` | `I_AccountAssignmentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 // Caution:
// --------
//
// As this CDS view is a very complex view und consumes data from the biggest tables of the S/4 HANA system we are forced to restrict access and give usage recommendations. 
// Please read this information carefully!
// 
// Please be informed that SAP offers various possibilities to build views for a balance calculation. 
// This CDS view is only relevant for you if you need a cumulative balances calculation over a sequence of a time dimension. In all other cases please do not use this view.
// Please check instead if the CDS view I_GLAccountYearToDateBalanceC meets your requirement.
// 
// Do not use this CDS view in the following scenarios:
// - As a CDS modelling data source within your own CDS model
// - Any scenario other than an Analytical Query 
// - In a data extraction scenario
// 
// The following section describes how the balance calculation of this CDS view works and what it was designed for:
// 
// A cumulative balance means that the line items of a period are also assigned to the balances of a future period.
// A possible reporting result can be for example:
//
//   GLAccount FiscalPeriod  DebitAmount CreditAmount  EndingBalanceInCoCodeCrcy
//   400000    001           100                       100   
//   400000    002            50                       150   
//   400000    003           100                       250   
//   400000    004                       75            175   
//   400000    005           300                       475   
//  
// To provide this result, the queries being made against this view must include a time dimension, otherwise a query of the GL Account ending balance at the end of period 005 without a time dimension 
// will result in 1150 (100+150+250-175+475) and thus in wrong balances. 
// Therefore the consumption of the CDS view must only be an analytical query with exception aggregation of type #LAST, since this exception aggregation can return the 475 GL Account ending balance 
// at the end of period 005, while native SQL ( Select GLAccount, sum(EndingBalance)… ) will return 1150.     
// 
// Assigning line items of a period to future periods in order to provide a cumulative balance requires high memory and CPU consumption in the HANA database. 
// Therefore, it is not recommended to use this CDS view as a CDS modelling data source within a different CDS model, but to only use it as an analytical provider as it is documented in the 
// @ObjectModel.supportedCapabilities annotation of the CDS view.

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'G/L Account Balance - Cube'
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIGLBALCUBE' //, dataExtraction.enabled: true }
@VDM.viewType: #COMPOSITE
//@ObjectModel.representativeKey: 'FiscalPeriodDate'
@AccessControl.authorizationCheck: #CHECK
//@Consumption.dbHints:  ['AGGR_TARGET("ACDOCA")','NO_JOIN_THRU_AGGR']                      
@Consumption.dbHints:  ['USE_HEX_PLAN']                      
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking:#REQUIRED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE 
@Environment.sql.passValueForClient: true
@AccessControl.auditFilter: #ENABLED

define view entity I_GLAcctBalanceCube
with parameters
  P_FromPostingDate       : fis_budat_from,
  P_ToPostingDate         : fis_budat_to      

as select from I_GLAcctBalance 
( P_FromPostingDate: $parameters.P_FromPostingDate, P_ToPostingDate: $parameters.P_ToPostingDate ) 
as I_GLAcctBalance

association of exact one to exact one E_JournalEntryItem  as _Extension           on $projection.SourceLedger                   = _Extension.SourceLedger
                                                                                  and $projection.CompanyCode                   = _Extension.CompanyCode
                                                                                  and $projection.FiscalYear                    = _Extension.FiscalYear
                                                                                  and $projection.AccountingDocument            = _Extension.AccountingDocument
                                                                                  and $projection.LedgerGLLineItem              = _Extension.LedgerGLLineItem

association[0..1] to I_GLAccountInChartOfAccounts   as _CorporateGroupAccount     on $projection.CorporateGroupChartOfAccounts  = _CorporateGroupAccount.ChartOfAccounts and 
                                                                                  $projection.CorporateGroupAccount             = _CorporateGroupAccount.GLAccount 

association[0..1] to I_ChartOfAccounts              as _CorporateGroupChartOfAccounts on $projection.CorporateGroupChartOfAccounts         = _CorporateGroupChartOfAccounts.ChartOfAccounts
association[1..1] to I_CalendarMonth                as _CalendarMonth              on $projection.CalendarMonth                = _CalendarMonth.CalendarMonth
association[1..1] to I_CalendarQuarter              as _CalendarQuarter            on $projection.CalendarQuarter              = _CalendarQuarter.CalendarQuarter
association[1..1] to I_YearMonth                    as _CalendarYearMonth          on $projection.CalendarYearMonth            = _CalendarYearMonth.YearMonth 
association[0..1] to I_WBSElement                   as _WBSElement                 on $projection.WBSElement                   = _WBSElement.WBSElement 
association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID                                                                                        
association[0..1] to I_WBSElement                   as _InventorySpclStockWBSElement on $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement 
association[0..1] to I_Project                      as _Project                      on $projection.Project = _Project.Project
association[0..1] to I_ProjectByInternalKey         as _ProjectInternalID            on $projection.ProjectInternalID = _ProjectInternalID.ProjectInternalID 
association [0..1] to I_ProjectByExternalID         as _ProjectExternalID            on  $projection.ProjectExternalID   = _ProjectExternalID.ProjectExternalID 
association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID  
association [0..1] to I_ProjectBasicData            as _ProjectBasicData            on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
association [0..1] to I_FiscalPeriodForVariant      as _FiscalPeriodForVariant  on $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant and
                                                                                   $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear and
                                                                                   $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
association [0..1] to I_Order                        as _PartnerOrder_2                 on  $projection.PartnerOrder              = _PartnerOrder_2.OrderID   

association [0..1]  to I_AccountAssignmentType    as _AccountAssignmentType            on  $projection.AccountAssignmentType = _AccountAssignmentType.AccountAssignmentType                                                                                    

{
@ObjectModel.foreignKey.association: '_Ledger'      
key Ledger,
@ObjectModel.foreignKey.association: '_CompanyCode'
key CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
//@Semantics.fiscal.year: true
key FiscalYear,
@ObjectModel.foreignKey.association: '_SourceLedger'
key SourceLedger,
@ObjectModel.foreignKey.association: '_JournalEntry'
key AccountingDocument,
key LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_GLAccountFlowType'
key GLAccountFlowType,
key FiscalPeriodDate,

LedgerFiscalYear,
//GLRecordType,

///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
FinancialTransactionType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
BusinessTransactionType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
ReferenceDocumentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_LogicalSystem'
LogicalSystem,
ReferenceDocumentContext,
ReferenceDocument,
ReferenceDocumentItem,
ReferenceDocumentItemGroup,
//I_Glacctbalance.SUBTA,
//@Semantics.booleanIndicator 
IsReversal,
//@Semantics.booleanIndicator 
IsReversed,
//I_Glacctbalance.XTRUEREV,
//I_Glacctbalance.AWTYP_REV,
ReversalReferenceDocumentCntxt,
ReversalReferenceDocument,
//I_Glacctbalance.SUBTA_REV,
//@Semantics.booleanIndicator 
IsSettlement,
//@Semantics.booleanIndicator 
IsSettled,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
PredecessorReferenceDocType,
PredecessorReferenceDocCntxt,
PredecessorReferenceDocument,
PredecessorReferenceDocItem,
//I_Glacctbalance.PREC_SUBTA,

@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'      
GLAccount,

@ObjectModel.foreignKey.association: '_GLAccountHierarchy'      
GLAccountHierarchy,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
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
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerCompany'
PartnerCompany,
@ObjectModel.foreignKey.association: '_PartnerSegment'     
PartnerSegment,

/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_DebitCreditCode'      
DebitCreditCode,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'
FiscalYearVariant,
FiscalYearPeriod,
@ObjectModel.foreignKey.association: '_FiscalCalendarDate'      
PostingDate,
//I_Glacctbalance.bldat,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'      
AccountingDocumentType,
//I_Glacctbalance.buzei,
AssignmentReference,
@ObjectModel.foreignKey.association: '_PostingKey'      
PostingKey,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
AccountingDocumentCategory,
TransactionTypeDetermination,
SubLedgerAcctLineItemType,
AccountingDocCreatedByUser,
//I_Glacctbalance.timestamp,
@ObjectModel.foreignKey.association: '_EliminationProfitCenter'      
EliminationProfitCenter,
OriginObjectType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_GLAccountType'
GLAccountType,
@ObjectModel.foreignKey.association: '_ChartOfAccounts'      
ChartOfAccounts,
@ObjectModel.foreignKey.association: '_AlternativeGLAccount'      
AlternativeGLAccount,
@ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
CountryChartOfAccounts,

///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
InvoiceReference,
InvoiceReferenceFiscalYear,
FollowOnDocumentType,
InvoiceItemReference,
ReferencePurchaseOrderCategory,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PurchasingDocument'
PurchasingDocument,
PurchasingDocumentItem,
AccountAssignmentNumber,
@Semantics.text: true
DocumentItemText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
@ObjectModel.foreignKey.association: '_Material'      
Material,
@ObjectModel.foreignKey.association: '_Product'
Product, 
@ObjectModel.foreignKey.association: '_Plant'      
Plant,
@ObjectModel.foreignKey.association: '_Supplier'      
Supplier,
@ObjectModel.foreignKey.association: '_Customer'      
Customer,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialAccountType'      
FinancialAccountType,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
SpecialGLCode,
TaxCode,
@ObjectModel.foreignKey.association: '_HouseBank'
HouseBank,
@ObjectModel.foreignKey.association: '_HouseBankAccount'
HouseBankAccount,
//@Semantics.booleanIndicator 
IsOpenItemManaged,
//I_Glacctbalance.augdt,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry'      
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
ClearingDocFiscalYear,
@ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
ClearingJournalEntryFiscalYear,
@ObjectModel.foreignKey.association: '_ClearingJournalEntry'
ClearingJournalEntry, 
//IsCleared,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
AssetDepreciationArea,
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
MasterFixedAsset,
@ObjectModel.foreignKey.association: '_FixedAsset'
FixedAsset,
AssetValueDate,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AssetTransactionType'
AssetTransactionType,
AssetAcctTransClassfctn,
DepreciationFiscalPeriod,
@ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
GroupMasterFixedAsset,
@ObjectModel.foreignKey.association: '_GroupFixedAsset'
GroupFixedAsset,
//I_Glacctbalance.settlement_rule,

//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////
CostEstimate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
@ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
InventorySpecialStockValnType,
@ObjectModel.foreignKey.association: '_InventorySpclStockValnType'      
@Analytics.internalName: #LOCAL
InvtrySpecialStockValnType_2,

//I_Glacctbalance.xobew,
@ObjectModel.foreignKey.association: '_InventorySpecialStockType'
InventorySpecialStockType,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
InventorySpclStkSalesDocument,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
InventorySpclStkSalesDocItm,
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
InvtrySpclStockWBSElmntIntID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
InvtrySpclStockWBSElmntExtID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
@ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
cast(I_GLAcctBalance._InvtrySpclStockWBSElmntIntID.WBSElement as mlmat_ps_posid preserving type ) as InventorySpclStockWBSElement,
@ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'      
InventorySpecialStockSupplier,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
InventoryValuationType,
@ObjectModel.foreignKey.association: '_Purreqvaluationarea'
ValuationArea,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
SenderCompanyCode,
SenderGLAccount,
SenderAccountAssignment,
SenderAccountAssignmentType,

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
//UtilsProfileConstcyChkGrp,
//ControllingDebitCreditCode,
ControllingObjectDebitType,
//@Semantics.booleanIndicator 
QuantityIsIncomplete,
@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
OffsettingAccount,
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
OffsettingAccountType,
@ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
OffsettingChartOfAccounts,
//@Semantics.booleanIndicator 
LineItemIsCompleted,
PersonnelNumber,
@ObjectModel.foreignKey.association: '_ControllingObjectClass'
ControllingObjectClass,
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
PartnerCompanyCode,
@ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
PartnerControllingObjectClass,
//I_Glacctbalance.aufnr_org,
@ObjectModel.foreignKey.association: '_OriginCostCenter'
OriginCostCenter,
@ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
OriginCostCtrActivityType,
OriginProduct,
VarianceOriginGLAccount,
AccountAssignment,
@Analytics.internalName: #LOCAL    
@ObjectModel.foreignKey.association: '_AccountAssignmentType'
AccountAssignmentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectNetwork'
ProjectNetwork,
RelatedNetworkActivity,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BusinessProcess'
BusinessProcess,
CostObject,
//I_Glacctbalance.bemot,
CustomerServiceNotification,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_OperatingConcern'
OperatingConcern,
PartnerAccountAssignment,
PartnerAccountAssignmentType,
PartnerCostCtrActivityType,
@Analytics.internalName: #LOCAL 
//@ObjectModel.foreignKey.association: '_PartnerOrder'
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
PartnerOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerOrderCategory'
PartnerOrderCategory,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
PartnerWBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
PartnerProject,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerSalesDocument'
PartnerSalesDocument,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
PartnerSalesDocumentItem,
PartnerProjectNetwork,
PartnerProjectNetworkActivity,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
PartnerBusinessProcess,
PartnerCostObject,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
ServiceDocumentType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocument'
ServiceDocument,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
ServiceDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
PartnerServiceDocumentType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocument'
PartnerServiceDocument,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
PartnerServiceDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractType'
ServiceContractType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContract'
ServiceContract,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractItem'
ServiceContractItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
TimeSheetOvertimeCategory,   
//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BillingDocumentType'
BillingDocumentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesOrganization'
SalesOrganization,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_DistributionChannel'
DistributionChannel,
OrganizationDivision,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProduct'      
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProduct'
SoldMaterial,
@ObjectModel.foreignKey.association: '_SoldProduct'
SoldProduct, 
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
@ObjectModel.foreignKey.association: '_MaterialGroup'      
MaterialGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SoldProductGroup_2'
SoldProductGroup,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:   'SoldProductGroup'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'
@ObjectModel.foreignKey.association: '_ProductGroup'
ProductGroup, 
@ObjectModel.foreignKey.association: '_CustomerGroup'      
CustomerGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CustomerSupplierCountry'      
CustomerSupplierCountry,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'      
CustomerSupplierIndustry,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinServicesProductGroup'      
FinancialServicesProductGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinancialServicesBranch'      
FinancialServicesBranch,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinancialDataSource'      
FinancialDataSource,

//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////
//I_Glacctbalance.re_bukrs,
//I_Glacctbalance.re_account,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
JointVenture,
JointVentureEquityGroup,
JointVentureCostRecoveryCode,
//I_Glacctbalance.vptnr,
//I_Glacctbalance.btype,
JointVentureEquityType,
//I_Glacctbalance.prodper,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
//I_Glacctbalance.swenr,
//I_Glacctbalance.sgenr,
//I_Glacctbalance.sgrnr,
//I_Glacctbalance.smenr,
//I_Glacctbalance.recnnr,
//I_Glacctbalance.snksl,
//I_Glacctbalance.sempsl,
SettlementReferenceDate,
//I_Glacctbalance.pswenr,
//I_Glacctbalance.psgenr,
//I_Glacctbalance.psgrnr,
//I_Glacctbalance.psmenr,
//I_Glacctbalance.precnnr,
//I_Glacctbalance.psnksl,
//I_Glacctbalance.psempsl,
//I_Glacctbalance.pdabrz,


@ObjectModel.foreignKey.association: '_CostCenter'      
CostCenter,
CostCtrActivityType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_Order'
OrderID,
@ObjectModel.foreignKey.association: '_OrderCategory'
OrderCategory,
@ObjectModel.foreignKey.association: '_WBSElementInternalID'
WBSElementInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_WBSElementExternalID'
WBSElementExternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'
@ObjectModel.foreignKey.association: '_WBSElement'      
cast( WBSElement as fis_wbs preserving type ) as WBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
PartnerWBSElementInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
PartnerWBSElementExternalID,
@ObjectModel.foreignKey.association: '_Project'   
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'   
cast(Project as fis_project preserving type ) as Project, 
@ObjectModel.foreignKey.association: '_ProjectInternalID'      
I_GLAcctBalance.ProjectInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectExternalID'      
I_GLAcctBalance.ProjectExternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'  
I_GLAcctBalance.PartnerProjectInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'  
I_GLAcctBalance.PartnerProjectExternalID,
@Analytics.internalName: #LOCAL 
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocument' 
@ObjectModel.foreignKey.association: '_SalesOrder'
SalesOrder,
@Analytics.internalName: #LOCAL 
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocumentItem'   
@ObjectModel.foreignKey.association: '_SalesOrderItem'
SalesOrderItem,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocument'
SalesDocument,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocumentItem'
SalesDocumentItem,

ClearingDate,

@ObjectModel.foreignKey.association: '_ConsolidationUnit'      
ConsolidationUnit,
@ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'  
PartnerConsolidationUnit,
@ObjectModel.foreignKey.association: '_Company'  
Company, 
@ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts' 
ConsolidationChartOfAccounts,
@ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem' 
CnsldtnFinancialStatementItem,
@ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory' 
CnsldtnSubitemCategory,
@ObjectModel.foreignKey.association: '_CnsldtnSubitem' 
CnsldtnSubitem,  
@ObjectModel.foreignKey.association: '_CorporateGroupChartOfAccounts' 
I_GLAcctBalance._ChartOfAccounts.CorporateGroupChartOfAccounts as CorporateGroupChartOfAccounts,
@ObjectModel.foreignKey.association: '_CorporateGroupAccount'      
I_GLAcctBalance._GLAccountInChartOfAccounts.CorporateGroupAccount as CorporateGroupAccount,
I_GLAcctBalance._GLAccountInChartOfAccounts.IsBalanceSheetAccount,

@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'      
BalanceTransactionCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } AmountInBalanceTransacCrcy,

@ObjectModel.foreignKey.association: '_TransactionCurrency'      
TransactionCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } AmountInTransactionCurrency,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'      
CompanyCodeCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } AmountInCompanyCodeCurrency,

@ObjectModel.foreignKey.association: '_GlobalCurrency'      
GlobalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } AmountInGlobalCurrency,

@ObjectModel.foreignKey.association: '_FunctionalCurrency'      
FunctionalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } AmountInFunctionalCurrency,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'      
FreeDefinedCurrency1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } AmountInFreeDefinedCurrency1,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'      
FreeDefinedCurrency2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } AmountInFreeDefinedCurrency2,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'      
FreeDefinedCurrency3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } AmountInFreeDefinedCurrency3,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'      
FreeDefinedCurrency4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } AmountInFreeDefinedCurrency4,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'      
FreeDefinedCurrency5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } AmountInFreeDefinedCurrency5,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'      
FreeDefinedCurrency6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } AmountInFreeDefinedCurrency6,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'      
FreeDefinedCurrency7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } AmountInFreeDefinedCurrency7,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'      
FreeDefinedCurrency8,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } AmountInFreeDefinedCurrency8,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
DebitAmountInCoCodeCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
CreditAmountInCoCodeCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
DebitAmountInTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
CreditAmountInTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
DebitAmountInBalanceTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
CreditAmountInBalanceTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
DebitAmountInGlobalCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
CreditAmountInGlobalCrcy,


@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
DebitAmountInFunctionalCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
CreditAmountInFunctionalCrcy,


@DefaultAggregation:#SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
DebitAmountInFreeDefinedCrcy1,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
CreditAmountInFreeDefinedCrcy1,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
DebitAmountInFreeDefinedCrcy2,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
CreditAmountInFreeDefinedCrcy2,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
DebitAmountInFreeDefinedCrcy3,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
CreditAmountInFreeDefinedCrcy3,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
DebitAmountInFreeDefinedCrcy4,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
CreditAmountInFreeDefinedCrcy4,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
DebitAmountInFreeDefinedCrcy5,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
CreditAmountInFreeDefinedCrcy5,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
DebitAmountInFreeDefinedCrcy6,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
CreditAmountInFreeDefinedCrcy6,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
DebitAmountInFreeDefinedCrcy7,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
CreditAmountInFreeDefinedCrcy7,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
DebitAmountInFreeDefinedCrcy8,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
CreditAmountInFreeDefinedCrcy8,

FiscalPeriod,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
EndingBalanceAmtInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
EndingBalanceAmtInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
EndingBalanceAmtInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
EndingBalanceAmtInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
EndingBalanceAmtInFuncnlCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
EndingBalAmtInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
EndingBalAmtInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
EndingBalAmtInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
EndingBalAmtInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
EndingBalAmtInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
EndingBalAmtInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
EndingBalAmtInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
EndingBalAmtInFreeDfndCrcy8,

AccrualObjectType,
AccrualObject,
AccrualSubobject,
AccrualItemType,
@Analytics.internalName: #LOCAL
AccrualObjectLogicalSystem,
@Analytics.internalName: #LOCAL
AccrualReferenceObject,
@Analytics.internalName: #LOCAL
AccrualValueDate,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
CashLedgerAccount,

@ObjectModel.foreignKey.association: '_FinancialManagementArea'
@Analytics.internalName: #LOCAL 
FinancialManagementArea,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundsCenter'
FundsCenter,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundedProgram'
FundedProgram,

@ObjectModel.foreignKey.association: '_Fund'
@Analytics.internalName: #LOCAL 
Fund,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_Grant'
GrantID,

@ObjectModel.foreignKey.association: '_BudgetPeriod'
@Analytics.internalName: #LOCAL 
BudgetPeriod,

@ObjectModel.foreignKey.association: '_PartnerFund'
@Analytics.internalName: #LOCAL 
PartnerFund,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerGrant'
PartnerGrant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
PartnerBudgetPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
PubSecBudgetAccount,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
PubSecBudgetAccountCoCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
PubSecBudgetCnsmpnDate,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
PubSecBudgetCnsmpnFsclPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
PubSecBudgetCnsmpnFsclYear,
@Analytics.internalName: #LOCAL
PubSecBudgetIsRelevant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
PubSecBudgetCnsmpnType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
PubSecBudgetCnsmpnAmtType,

FlowOfFundsLedgerFiscalYear,

IsStatisticalCostCenter,
IsStatisticalOrder,
IsStatisticalSalesDocument,
WBSIsStatisticalWBSElement,

I_GLAcctBalance._CalendarDate.CalendarYear as CalendarYear,
@ObjectModel.foreignKey.association: '_CalendarQuarter'
I_GLAcctBalance._CalendarDate.CalendarQuarter as CalendarQuarter,
I_GLAcctBalance._CalendarDate.YearQuarter as CalendarYearQuarter,
@ObjectModel.foreignKey.association: '_CalendarMonth'
I_GLAcctBalance._CalendarDate.CalendarMonth as CalendarMonth,
@ObjectModel.foreignKey.association: '_CalendarYearMonth'
I_GLAcctBalance._CalendarDate.YearMonth as CalendarYearMonth,
I_GLAcctBalance._CalendarDate.CalendarWeek as CalendarWeek,
I_GLAcctBalance._CalendarDate.YearWeek as CalendarYearWeek,
I_GLAcctBalance._FiscalCalendarDate.FiscalQuarter as FiscalQuarter,
I_GLAcctBalance._FiscalCalendarDate.FiscalWeek as FiscalWeek,
I_GLAcctBalance._FiscalCalendarDate.FiscalYearQuarter as FiscalYearQuarter,
I_GLAcctBalance._FiscalCalendarDate.FiscalYearWeek as FiscalYearWeek,
_FiscalPeriodForVariant.FiscalPeriodStartDate,
_FiscalPeriodForVariant.FiscalPeriodEndDate,

_CompanyCode,
_JournalEntry,
_FiscalYear,
_ControllingArea,
_BalanceTransactionCurrency,
_TransactionCurrency,
_CompanyCodeCurrency,
_GlobalCurrency,
_FunctionalCurrency,
_FreeDefinedCurrency1,
_FreeDefinedCurrency2,
_FreeDefinedCurrency3,
_FreeDefinedCurrency4,
_FreeDefinedCurrency5,
_FreeDefinedCurrency6,
_FreeDefinedCurrency7,
_FreeDefinedCurrency8,
_Segment,
_PartnerSegment,
_ProfitCenter,
_CurrentProfitCenter,
_PartnerProfitCenter,
_CostCenter,
_CurrentCostCenter,
_PartnerCostCenter,
_AccountAssignmentType,
_BusinessArea,
_PartnerBusinessArea,
_FunctionalArea,
_PartnerFunctionalArea,
_GLAccountInChartOfAccounts,
_GLAccountHierarchy,
_ChartOfAccounts,
_GLAccountInCompanyCode,
_AccountingDocumentType,
_FinancialAccountType,
_DebitCreditCode, 
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
_Material,
_Product,
_Plant,
_Ledger,
_CustomerGroup,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_MaterialGroup,
_SoldProductGroup_2,
//_ProductGroup_2, 
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_ProductGroup_2'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: '_ProductGroup_2'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_ProductGroup,
_Customer,
_Supplier,
_CalendarDate,
_SourceLedger,  
_PostingKey,
_EliminationProfitCenter,
_InventorySpecialStockSupplier,
_AlternativeGLAccount,  
_CorporateGroupAccount,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocument'
_SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocumentItem'
_SalesOrderItem,
_SalesDocument,
_SalesDocumentItem,
_InternalOrder,
_Order,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
_Employment,
_PersonWorkAgreement_1,
_FinancialTransactionType,
_BusinessTransactionType,
_ReferenceDocumentType,
_PredecessorReferenceDocType,
_PartnerCompanyCode,
_AccountingDocumentCategory,
_User,
_GLAccountType,
_OffsettingAccountType,
_OffsettingChartOfAccounts,
_OffsettingAccount,
_OffsettingAccountWithBP,
_SenderGLAccount,
_CountryChartOfAccounts,
_PurchasingDocument,
_PurchasingDocumentItem,
_SpecialGLCode,
_TaxCode,
_HouseBank,
_ClearingJrnlEntryFiscalYear,
_ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
_ClearingAccountingDocument,
_MasterFixedAsset,
_FixedAsset,
_GroupMasterFixedAsset,
_GroupFixedAsset,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
_InventorySpecialStockValnType,
_InventorySpclStockValnType,
_InventorySpecialStockType,
_InventorySpclStkSalesDocument,
_InventorySpclStkSalesDocItm,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
_InvtrySpclStockWBSElmntIntID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  '_InvtrySpclStockWBSElmntExtID'
_InventorySpclStockWBSElement,
_InvtrySpclStkWBSElmntBscData,
_InventoryValuationType,
_ControllingObjectClass,
_PartnerControllingObjectClass,
_OriginCostCenter,
_CostCtrActivityType,
_OriginCostCtrActivityType,
_OrderCategory,
//_RelatedNetworkActivity,
//_PartnerProjectNetworkActivity,
      
_BusinessProcess,
_PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrder_2'
_PartnerOrder,
_PartnerOrder_2,
_PartnerOrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerWBSElementExternalID'
_PartnerWBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
_PartnerProject,
_PartnerSalesDocument,
_PartnerSalesDocumentItem,
_PartnerBusinessProcess,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementExternalID'
_WBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementBasicData'
_WBSElementInternalID,
_WBSElementExternalID,    
_WBSElementBasicData,                   
_BillingDocumentType,
      
_SalesOrganization,
_DistributionChannel,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'  
_SoldMaterial,
_SoldProduct,    
      
      
_MovementCategory,
_AssetTransactionType,
      
      
_HouseBankAccount,
      
_LogicalSystem,
      
_OperatingConcern,
      
_PartnerCompany,
      
_ProjectNetwork,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectExternalID'
_Project,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectBasicData'
_ProjectInternalID,

_ProjectExternalID,
 
 _ProjectBasicData,              
      
_PurReqValuationArea,

_FiscalCalendarDate,

_CorporateGroupChartOfAccounts,

_FiscalYearVariant,

_CalendarMonth,

_CalendarQuarter,

_CalendarYearMonth,

_ServiceDocumentType,

_ServiceDocument,

_ServiceDocumentItem,

_PartnerServiceDocumentType,

_PartnerServiceDocument,

_PartnerServiceDocumentItem,
_ServiceContract,
_ServiceContractType,
_ServiceContractItem,
_TimeSheetOvertimeCat,
_PartnerProjectExternalID,
_PartnerProjctExtrnalIDText,
_PartnerWBSElementExternalID,
_PartnerWBSElemntExtrnalIDText,
_PartnerProjectBasicData,
_PartnerProjectBasicDataText,
_PartnerWBSElementBasicData,
_PartnerWBSElmntBasicDataText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InvtrySpclStkWBSElmntBscData'  
_InvtrySpclStockWBSElmntBD,
_InvtrySpclStockWBSElmntExtID,

_AccrualObjectType,
_AccrualObject,
_AccrualSubobject,
_AccrualItemType, 

_GLAccountFlowType,
_FiscalPeriodForVariant,
_CashLedgerCompanyCode,
_CashLedgerAccount,
_FinancialManagementArea,
_FundsCenter,
_FundedProgram,
_Fund,
_Grant,
_BudgetPeriod,
_PartnerFund,
_PartnerGrant,
_PartnerBudgetPeriod,
_PubSecBudgetAccountCoCode,
_PubSecBudgetAccount,
_PubSecBudgetCnsmpnDate,
_PubSecBudgetCnsmpnFsclPeriod,
_PubSecBudgetCnsmpnFsclYear,
_PubSecBudgetCnsmpnType,
_PubSecBudgetCnsmpnAmtType,   
  
_ConsolidationUnit,
_PartnerConsolidationUnit,
_Company,
_ConsolidationChartOfAccounts,
_CnsldtnFinancialStatementItem,
_CnsldtnSubitemCategory,
_CnsldtnSubitem,

_LedgerCompanyCodeCrcyRoles,
_CustomerCompany,
_SupplierCompany,

_FinServicesProductGroup, 
_FinancialServicesBranch, 
_FinancialDataSource,     
_CustomerSupplierIndustry,
_CustomerSupplierCountry, 

// Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      GLAccountAuthorizationGroup,
      SupplierBasicAuthorizationGrp,
      CustomerBasicAuthorizationGrp,
      AcctgDocTypeAuthorizationGroup,
      OrderType,
      SalesOrderType,
      AssetClass   

}
```
