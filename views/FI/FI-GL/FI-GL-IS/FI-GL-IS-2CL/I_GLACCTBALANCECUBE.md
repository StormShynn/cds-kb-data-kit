---
name: I_GLACCTBALANCECUBE
description: This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value
semantic_en: This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?
keywords:
  - G/L Account Balance - Cube
  - G/L Account Balance - Cube
  - G/L Account Balance - Cube
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
  - metadata-only
---
# I_GLACCTBALANCECUBE

**This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Balance CDS view, in this G/L Account Balance Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountFlowType` |  | |  |  | `CHAR(10)` | G/L Account Flow Type |
| `FiscalPeriodDate` |  | |  |  | `CHAR(11)` | Fiscal Period Date |
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
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | WBS Element (external) of Valuated Special Inventory |
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
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Project` |  | |  |  | `CHAR(24)` | Project |
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
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
