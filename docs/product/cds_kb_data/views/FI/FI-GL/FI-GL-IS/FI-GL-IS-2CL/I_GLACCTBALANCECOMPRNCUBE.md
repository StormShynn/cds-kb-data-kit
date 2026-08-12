---
name: I_GLACCTBALANCECOMPRNCUBE
description: "This CDS view provides the comparison of balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two specific time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECOMPRNCUBE')/$value
semantic_en: "This CDS view provides the comparison of balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two specific time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?"
semantic_vi: "G/L Account Balance Comparison - Cube — CDS view giao diện dựa trên P_GlAcctBalanceComprn."
keywords:
  - "G/L Account Balance Comparison - Cube"
  - "g/l"
  - "account"
  - "balance"
  - "comparison"
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
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_GLACCTBALANCECOMPRNCUBE

**This CDS view provides the comparison of balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two specific time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECOMPRNCUBE')/$value) |

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
| `ComprnFiscalPeriodDate` | ✓ | |  |  | `CHAR(11)` | Comparison Fiscal Period Date |
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
| `GLAccountHierarchy` |  | |  | `GLAccount` | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
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
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
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
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InvtrySpecialStockValnType_2` |  | |  | `cast(P_GlAcctBalanceComprn.InventorySpecialStockValnType as fis_inventoryspclstockvalntype preserving type)` | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InventorySpclStockWBSElement` |  | |  | `cast(_InvtrySpclStockWBSElmntIntID.WBSElement as mlmat_ps_posid preserving type )` | `CHAR(24)` | WBS Element (external) of Valuated Special Inventory |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( _InvtrySpclStkWBSElmntBscData.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
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
| `PartnerProjectExternalID` |  | |  | `cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` | `CHAR(24)` | Partner Project External ID |
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
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElement` |  | | `_WBSElementInternalID` | `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  | `cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` | `CHAR(24)` | Partner WBS Element External ID |
| `Project` |  | | `_ProjectInternalID` | `Project` | `CHAR(24)` | Project Definition |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` | `CHAR(24)` | Project External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
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
| `CorporateGroupChartOfAccounts` |  | | `_ChartOfAccounts` | `CorporateGroupChartOfAccounts` | `CHAR(4)` | Group Chart of Accts |
| `CorporateGroupAccount` |  | | `_GLAccountInChartOfAccounts` | `CorporateGroupAccount` | `CHAR(10)` | Group Account Number |
| `IsBalanceSheetAccount` |  | | `_GLAccountInChartOfAccounts` | `IsBalanceSheetAccount` | `CHAR(1)` | Is Balance Sheet Account |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ComprnAmountInBalTransCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Balance Transaction Currency |
| `ComprnAmountInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Transaction Currency |
| `ComprnAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Company Code Currency |
| `ComprnAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Global Currency |
| `ComprnAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Functional Currency |
| `ComprnAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 1 |
| `ComprnAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 2 |
| `ComprnAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 3 |
| `ComprnAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 4 |
| `ComprnAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 5 |
| `ComprnAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 6 |
| `ComprnAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 7 |
| `ComprnAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 8 |
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
| `ComprnDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Company Code Currency |
| `ComprnCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Company Code Currency |
| `ComprnDebitAmtInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Transaction Currency |
| `ComprnCreditAmtInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Transaction Currency |
| `ComprnDebitAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Compariosn Debit Amount in Balance Transaction Currency |
| `ComprnCreditAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Compariosn Credit Amount in Balance Transaction Currency |
| `ComprnDebitAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Global Currency |
| `ComprnCreditAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Global Currency |
| `ComprnDebitAmtInFunctionalCrcy` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Functional Currency |
| `ComprnCreditAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Functional Currency |
| `ComprnDebitAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 1 |
| `ComprnCreditAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 1 |
| `ComprnDebitAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 2 |
| `ComprnCreditAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 2 |
| `ComprnDebitAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 3 |
| `ComprnCreditAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 3 |
| `ComprnDebitAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 4 |
| `ComprnCreditAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 4 |
| `ComprnDebitAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 5 |
| `ComprnCreditAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 5 |
| `ComprnDebitAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 6 |
| `ComprnCreditAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 6 |
| `ComprnDebitAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 7 |
| `ComprnCreditAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 7 |
| `ComprnDebitAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Debit Amount in Free Defined Currency 8 |
| `ComprnCreditAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Credit Amount in Free Defined Currency 8 |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
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
| `ComprnEndingBalInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Company Code Currency |
| `ComprnEndingBalInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Transaction Currency |
| `ComprnEndingBalInBalTransCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Balance Transaction Currency |
| `ComprnEndingBalInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Global Currency |
| `ComprnEndingBalInFuncnlCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Functional Currency |
| `ComprnEndingBalInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 1 |
| `ComprnEndingBalInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 2 |
| `ComprnEndingBalInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 3 |
| `ComprnEndingBalInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 4 |
| `ComprnEndingBalInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 5 |
| `ComprnEndingBalInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 6 |
| `ComprnEndingBalInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 7 |
| `ComprnEndingBalInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 8 |
| `FromPostingDate` |  | |  |  | `DATS(8)` | Posting Date From |
| `ToPostingDate` |  | |  |  | `DATS(8)` | Posting Date To |
| `ComprnFromPostingDate` |  | |  |  | `DATS(8)` | Comparison Posting Date From |
| `ComprnToPostingDate` |  | |  |  | `DATS(8)` | Comparison Posting Date To |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | | `_CalendarDate` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | | `_CalendarDate` | `YearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | | `_CalendarDate` | `YearMonth` | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | | `_CalendarDate` | `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | | `_CalendarDate` | `YearWeek` | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | | `_FiscalCalendarDate` | `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | | `_FiscalCalendarDate` | `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | | `_FiscalCalendarDate` | `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | | `_FiscalCalendarDate` | `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  | `cast( '' as aufart)` | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  | `cast( '' as auart)` | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  | `cast( '' as anlkl)` | `CHAR(8)` | Asset Class |
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
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
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
| `_ProductGroup` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_CorporateGroupChartOfAccounts` | | ✓ | | | | |
| `_CorporateGroupAccount` | | ✓ | | | | |
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
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_SenderGLAccount` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_PartnerServiceDocumentType` | | ✓ | | | | |
| `_PartnerServiceDocument` | | ✓ | | | | |
| `_PartnerServiceDocumentItem` | | ✓ | | | | |
| `_LedgerCompanyCodeCrcyRoles` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclPeriod` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnAmtType` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_ConsolidationUnit` | | ✓ | | | | |
| `_PartnerConsolidationUnit` | | ✓ | | | | |
| `_ConsolidationChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFinancialStatementItem` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubitem` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountHierarchy` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_EliminationProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_InventorySpecialStockSupplier` | `I_Supplier` | [0..1] |
| `_AlternativeGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CorporateGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CorporateGroupAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_PredecessorReferenceDocType` | `I_ReferenceDocumentType` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_SenderGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountWithBP` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_GroupFixedAsset` | `I_FixedAsset` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrderCategory` | `I_OrderCategory` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_InvtrySpclStkWBSElmntBscData` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerSalesDocument` | `I_SalesDocument` | [0..1] |
| `_PartnerSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_PartnerBusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpclStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventorySpclStkSalesDocument` | `I_SalesDocument` | [0..1] |
| `_InventorySpclStkSalesDocItm` | `I_SalesDocumentItem` | [0..1] |
| `_InvtrySpclStockWBSElmntIntID` | `I_WBSElementByInternalKey` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [1..1] |
| `_PartnerControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_MovementCategory` | `I_MovementCategory` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_OperatingConcern` | `I_OperatingConcern` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_PurReqValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectInternalID` | `I_ProjectByInternalKey` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_PartnerServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_PartnerServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_PartnerServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_LedgerCompanyCodeCrcyRoles` | `I_LedgerCompanyCodeCrcyRoles` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_GroupMasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_TimeSheetOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_PubSecBudgetCnsmpnType` | `I_PubSecBdgtCnsmpnType` | [0..1] |
| `_PubSecBudgetCnsmpnAmtType` | `I_PubSecBdgtCnsmpnAmtType` | [0..1] |
| `_Company` | `I_Globalcompany` | [0..1] |
| `_ConsolidationUnit` | `I_CnsldtnUnit_3` | [0..1] |
| `_PartnerConsolidationUnit` | `I_CnsldtnUnit_3` | [0..1] |
| `_ConsolidationChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnFinancialStatementItem` | `I_CnsldtnFinStmntItem` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |
| `_CnsldtnSubitem` | `I_CnsldtnSubItem` | [0..1] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECOMPRNCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCECOMPRNCUBE')/$value)*

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
@EndUserText.label: 'G/L Account Balance Comparison - Cube'
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIGLBALCMPCUBE' //, dataExtraction.enabled: true }
@VDM.viewType: #COMPOSITE
//@ObjectModel.representativeKey: 'LedgerGLLineItem'
@AccessControl.authorizationCheck: #CHECK
//@Consumption.dbHints:  ['AGGR_TARGET("ACDOCA")','NO_JOIN_THRU_AGGR']  
@Consumption.dbHints:  ['USE_HEX_PLAN']  
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #REQUIRED 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE 
@Environment.sql.passValueForClient: true
@AccessControl.auditFilter: #ENABLED

define view entity I_GLAcctBalanceComprnCube
with parameters
  P_FromPostingDate       : fis_budat_from,
  P_ToPostingDate         : fis_budat_to,      
  P_ComprnFromPostingDate : fis_comprn_budat_from,
  P_ComprnToPostingDate   : fis_comprn_budat_to 
  
as select from P_GlAcctBalanceComprn ( P_FromPostingDate: $parameters.P_FromPostingDate, P_ToPostingDate: $parameters.P_ToPostingDate, 
                                       P_ComprnFromPostingDate: $parameters.P_ComprnFromPostingDate, P_ComprnToPostingDate: $parameters.P_ComprnToPostingDate) 
as P_GlAcctBalanceComprn
association of exact one to exact one E_JournalEntryItem  as _Extension  on $projection.SourceLedger        = _Extension.SourceLedger
                                                                        and $projection.CompanyCode         = _Extension.CompanyCode
                                                                        and $projection.FiscalYear          = _Extension.FiscalYear
                                                                        and $projection.AccountingDocument  = _Extension.AccountingDocument
                                                                        and $projection.LedgerGLLineItem    = _Extension.LedgerGLLineItem


association[1]    to I_CompanyCode            as _CompanyCode                on $projection.CompanyCode = _CompanyCode.CompanyCode
association[0..1] to I_JournalEntry           as _JournalEntry               on $projection.CompanyCode        = _JournalEntry.CompanyCode and 
                                                                                $projection.FiscalYear         = _JournalEntry.FiscalYear and 
                                                                                $projection.AccountingDocument = _JournalEntry.AccountingDocument 
association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear             on $projection.FiscalYear         = _FiscalYear.FiscalYear
                                                                                and $projection.CompanyCode    = _FiscalYear.CompanyCode  
association[0..1] to I_ControllingArea        as _ControllingArea            on $projection.ControllingArea = _ControllingArea.ControllingArea

association[0..1] to I_Currency               as _BalanceTransactionCurrency on $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency 
association[0..1] to I_Currency               as _TransactionCurrency        on $projection.TransactionCurrency = _TransactionCurrency.Currency                                                                                                              
association[1]    to I_Currency               as _CompanyCodeCurrency        on $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency 
association[0..1] to I_Currency               as _GlobalCurrency             on $projection.GlobalCurrency = _GlobalCurrency.Currency  
association[0..1] to I_Currency               as _FunctionalCurrency         on $projection.FunctionalCurrency = _FunctionalCurrency.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency1       on $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency2       on $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency3       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency4       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency4.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency5       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency5.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency6       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency6.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency7       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency7.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency8       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency8.Currency 

association[0..1] to I_Segment                as _Segment                    on $projection.Segment = _Segment.Segment
association[0..1] to I_Segment                as _PartnerSegment             on $projection.PartnerSegment = _PartnerSegment.Segment
association[0..*] to I_ProfitCenter           as _ProfitCenter               on $projection.ControllingArea = _ProfitCenter.ControllingArea and  
                                                                                $projection.ProfitCenter = _ProfitCenter.ProfitCenter
association[0..*] to I_ProfitCenter           as _PartnerProfitCenter        on $projection.ControllingArea = _PartnerProfitCenter.ControllingArea and  
                                                                                $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
association[0..1] to I_ProfitCenter           as _CurrentProfitCenter        on $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea and
                                                                                $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter and
                                                                                _CurrentProfitCenter.ValidityStartDate <= $session.system_date and
                                                                                _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
association[0..*] to I_CostCenter             as _CostCenter                 on $projection.ControllingArea = _CostCenter.ControllingArea and  
                                                                                $projection.CostCenter = _CostCenter.CostCenter
association[0..1] to I_CostCenter             as _CurrentCostCenter          on $projection.ControllingArea          = _CurrentCostCenter.ControllingArea and
                                                                                $projection.CostCenter               = _CurrentCostCenter.CostCenter and
                                                                                _CurrentCostCenter.ValidityStartDate <= $session.system_date and
                                                                                _CurrentCostCenter.ValidityEndDate   >= $session.system_date
association[0..*] to I_CostCenter             as _PartnerCostCenter          on $projection.ControllingArea = _PartnerCostCenter.ControllingArea and  
                                                                                $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
association[0..1] to I_BusinessArea           as _BusinessArea               on $projection.BusinessArea = _BusinessArea.BusinessArea
association[0..1] to I_BusinessArea           as _PartnerBusinessArea        on $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
association[0..1] to I_FunctionalArea         as _FunctionalArea             on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
association[0..1] to I_FunctionalArea         as _PartnerFunctionalArea      on $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea

association[0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts and 
                                                                                    $projection.GLAccount = _GLAccountInChartOfAccounts.GLAccount 
association[0..1] to I_GLAccountInChartOfAccounts as _GLAccountHierarchy     on $projection.ChartOfAccounts = _GLAccountHierarchy.ChartOfAccounts and 
                                                                                $projection.GLAccountHierarchy = _GLAccountHierarchy.GLAccount 
association[1]    to I_ChartOfAccounts        as _ChartOfAccounts            on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
association[0..1] to I_GLAccountInCompanyCode as _GLAccountInCompanyCode     on $projection.CompanyCode                = _GLAccountInCompanyCode.CompanyCode and
                                                                                $projection.GLAccount                  = _GLAccountInCompanyCode.GLAccount
association[0..1] to I_AccountingDocumentType as _AccountingDocumentType     on $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
association[0..1] to I_FinancialAccountType   as _FinancialAccountType       on $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
association[1]    to I_DebitCreditCode        as _DebitCreditCode            on $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

association[0..1] to I_Material               as _Material                   on  $projection.Material = _Material.Material  //do not use any longer, use _Product
association[0..1] to I_Product                as _Product                    on  $projection.Product = _Product.Product
association[0..1] to I_Plant                  as _Plant                      on $projection.Plant = _Plant.Plant
association[0..1] to I_Ledger                 as _Ledger                     on $projection.Ledger = _Ledger.Ledger

association [0..1] to I_CustomerGroup         as _CustomerGroup              on $projection.CustomerGroup = _CustomerGroup.CustomerGroup
association[0..1] to I_MaterialGroup          as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup //do not use any longer, use _ProductGroup
association[0..1] to I_ProductGroup           as _ProductGroup               on  $projection.ProductGroup = _ProductGroup.MaterialGroup
//association [0..1] to I_ProductGroup_2        as _ProductGroup_2             on  $projection.ProductGroup = _ProductGroup_2.ProductGroup  

association [0..1] to I_ProductGroup          as _SoldProductGroup           on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup //do not use any longer, use _SoldProductGroup_2
association [0..1] to I_ProductGroup_2        as _SoldProductGroup_2         on  $projection.SoldProductGroup = _SoldProductGroup_2.ProductGroup

association [0..1] to I_Customer              as _Customer                   on $projection.Customer = _Customer.Customer
association [0..1] to I_Supplier              as _Supplier                   on $projection.Supplier = _Supplier.Supplier

association [0..1] to I_CalendarDate          as _CalendarDate               on $projection.PostingDate = _CalendarDate.CalendarDate

association[0..1] to I_Ledger                 as _SourceLedger               on $projection.SourceLedger = _SourceLedger.Ledger

association[0..1] to I_PostingKey             as _PostingKey                 on $projection.PostingKey = _PostingKey.PostingKey
association[0..*] to I_ProfitCenter           as _EliminationProfitCenter    on $projection.ControllingArea = _EliminationProfitCenter.ControllingArea and  
                                                                                $projection.EliminationProfitCenter = _EliminationProfitCenter.ProfitCenter
association [0..1] to I_Supplier              as _InventorySpecialStockSupplier 
                                                                             on $projection.InventorySpecialStockSupplier = _InventorySpecialStockSupplier.Supplier
association[0..1] to I_GLAccountInChartOfAccounts as _AlternativeGLAccount 
                                                                             on $projection.CountryChartOfAccounts = _AlternativeGLAccount.ChartOfAccounts and 
                                                                                $projection.AlternativeGLAccount = _AlternativeGLAccount.GLAccount 
association[0..1] to I_ChartOfAccounts              as _CorporateGroupChartOfAccounts        on $projection.CorporateGroupChartOfAccounts         = _CorporateGroupChartOfAccounts.ChartOfAccounts
association[0..1] to I_GLAccountInChartOfAccounts as _CorporateGroupAccount  on $projection.CorporateGroupChartOfAccounts = _CorporateGroupAccount.ChartOfAccounts and 
                                                                             $projection.CorporateGroupAccount = _CorporateGroupAccount.GLAccount 
association[0..1] to I_SalesOrder                   as _SalesOrder                   on $projection.SalesOrder                      = _SalesOrder.SalesOrder
association[0..1] to I_SalesOrderItem               as _SalesOrderItem               on $projection.SalesOrder                      = _SalesOrderItem.SalesOrder and  
                                                                                        $projection.SalesOrderItem                  = _SalesOrderItem.SalesOrderItem
association[0..1] to I_SalesDocument                as _SalesDocument                on $projection.SalesDocument                   = _SalesDocument.SalesDocument
association[0..1] to I_SalesDocumentItem            as _SalesDocumentItem            on $projection.SalesDocument                   = _SalesDocumentItem.SalesDocument and 
                                                                                        $projection.SalesDocumentItem               = _SalesDocumentItem.SalesDocumentItem                                                                                        
association[0..1] to I_InternalOrder                as _InternalOrder                on $projection.OrderID                         = _InternalOrder.InternalOrder
association[0..1] to I_Order                        as _Order                        on $projection.OrderID                         = _Order.OrderID
//association[0..*] to I_CostAnalysisResource         as _CostAnalysisResource         on $projection.ControllingArea                 = _CostAnalysisResource.ControllingArea and  
//                                                                                        $projection.CostAnalysisResource            = _CostAnalysisResource.CostAnalysisResource 
                                                                                
association[0..1] to I_Employment                   as _Employment                   on $projection.PersonnelNumber                 = _Employment.EmploymentInternalID and
                                                                                        $projection.PostingDate                    <= _Employment.EndDate
association [0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1         on  $projection.PersonnelNumber    = _PersonWorkAgreement_1.PersonWorkAgreement   

association[0..1] to I_FinancialTransactionType     as _FinancialTransactionType      on $projection.FinancialTransactionType       = _FinancialTransactionType.FinancialTransactionType
association[0..1] to I_BusinessTransactionType      as _BusinessTransactionType       on $projection.BusinessTransactionType        = _BusinessTransactionType.BusinessTransactionType

association[0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on $projection.ReferenceDocumentType          = _ReferenceDocumentType.ReferenceDocumentType
association[0..1] to I_ReferenceDocumentType        as _PredecessorReferenceDocType   on $projection.PredecessorReferenceDocType    = _PredecessorReferenceDocType.ReferenceDocumentType
association[0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory    on $projection.AccountingDocumentCategory     = _AccountingDocumentCategory.AccountingDocumentCategory

association[0..1] to I_User                         as _User                          on $projection.AccountingDocCreatedByUser     = _User.UserID

association[0..1] to I_GLAccountType                as _GLAccountType                 on $projection.GLAccountType                  = _GLAccountType.GLAccountType
association[0..1] to I_FinancialAccountType         as _OffsettingAccountType         on $projection.OffsettingAccountType          = _OffsettingAccountType.FinancialAccountType

association[0..1] to I_GLAccountInChartOfAccounts   as _SenderGLAccount               on $projection.ChartOfAccounts                = _SenderGLAccount.ChartOfAccounts and 
                                                                                         $projection.SenderGLAccount                = _SenderGLAccount.GLAccount 
                                                                                                                                                                    
// old association kept for compatibility. DO NOT USE                                                                                         
association [0..1] to I_GLAccountInChartOfAccounts  as _OffsettingAccount            on  $projection.ChartOfAccounts                = _OffsettingAccount.ChartOfAccounts
                                                                                     and $projection.OffsettingAccount              = _OffsettingAccount.GLAccount

association [0..1] to I_OffsettingAccount           as _OffsettingAccountWithBP      on  $projection.OffsettingChartOfAccounts      = _OffsettingAccountWithBP.ChartOfAccounts
                                                                                     and $projection.OffsettingAccountType          = _OffsettingAccountWithBP.OffsettingAccountType
                                                                                     and $projection.OffsettingAccount              = _OffsettingAccountWithBP.OffsettingAccount  
association[0..1] to I_ChartOfAccounts              as _OffsettingChartOfAccounts     on $projection.OffsettingChartOfAccounts      = _OffsettingChartOfAccounts.ChartOfAccounts                                                                                     
association[0..1] to I_ChartOfAccounts              as _CountryChartOfAccounts        on $projection.CountryChartOfAccounts         = _CountryChartOfAccounts.ChartOfAccounts

association[0..1] to I_PurchasingDocument           as _PurchasingDocument            on $projection.PurchasingDocument             = _PurchasingDocument.PurchasingDocument 
association[0..1] to I_PurchasingDocumentItem       as _PurchasingDocumentItem        on $projection.PurchasingDocument             = _PurchasingDocumentItem.PurchasingDocument and  
                                                                                         $projection.PurchasingDocumentItem         = _PurchasingDocumentItem.PurchasingDocumentItem
association[0..1] to I_SpecialGLCode                as _SpecialGLCode                 on $projection.SpecialGLCode                  = _SpecialGLCode.SpecialGLCode and
                                                                                         $projection.FinancialAccountType           = _SpecialGLCode.FinancialAccountType
association[0..*] to I_TaxCode                      as _TaxCode                       on $projection.TaxCode                        = _TaxCode.TaxCode

association[0..1] to I_Housebank                    as _HouseBank                     on $projection.CompanyCode                    = _HouseBank.CompanyCode and
                                                                                         $projection.HouseBank                      = _HouseBank.HouseBank

association[1..1] to I_AccountingDocument           as _ClearingAccountingDocument    on $projection.CompanyCode                    = _ClearingAccountingDocument.CompanyCode and 
                                                                                         $projection.FiscalYear                     = _ClearingAccountingDocument.FiscalYear and 
                                                                                         $projection.ClearingAccountingDocument     = _ClearingAccountingDocument.AccountingDocument 
association [0..1] to I_FiscalYearForCompanyCode    as _ClearingJrnlEntryFiscalYear   on $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode
association [0..1] to I_JournalEntry                as _ClearingJournalEntry          on $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode
                                                                                         and $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear
                                                                                         and $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument                                                                                         
                                                                                         
association[0..1] to I_FixedAsset                   as _FixedAsset                    on $projection.CompanyCode                    = _FixedAsset.CompanyCode and
                                                                                         $projection.MasterFixedAsset               = _FixedAsset.MasterFixedAsset and
                                                                                         $projection.FixedAsset                     = _FixedAsset.FixedAsset
association[0..1] to I_FixedAsset                   as _GroupFixedAsset               on $projection.CompanyCode                    = _GroupFixedAsset.CompanyCode and
                                                                                         $projection.GroupMasterFixedAsset          = _GroupFixedAsset.MasterFixedAsset and
                                                                                         $projection.GroupFixedAsset                = _GroupFixedAsset.FixedAsset
association[0..1] to I_BusinessProcess              as _BusinessProcess               on $projection.ControllingArea                = _BusinessProcess.ControllingArea and                                                                                        
                                                                                         $projection.BusinessProcess                = _BusinessProcess.BusinessProcess
//association[0..1] to I_ControllingObject            as _CostObject                    on $projection.CostObject                     = _CostObject.ControllingObject
association[0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType    on $projection.ControllingArea                = _PartnerCostCtrActivityType.ControllingArea and     
                                                                                         $projection.PartnerCostCtrActivityType     = _PartnerCostCtrActivityType.CostCtrActivityType
association[0..1] to I_InternalOrder                as _PartnerOrder                  on $projection.PartnerOrder                   = _PartnerOrder.InternalOrder
association [0..1] to I_Order                       as _PartnerOrder_2                on  $projection.PartnerOrder                  = _PartnerOrder_2.OrderID   
association[0..1] to I_OrderCategory                as _PartnerOrderCategory          on $projection.PartnerOrderCategory           = _PartnerOrderCategory.OrderCategory
association[0..1] to I_WBSElementByInternalKey      as _WBSElementInternalID          on $projection.WBSElementInternalID           = _WBSElementInternalID.WBSElementInternalID
association[0..1] to I_WBSElement                   as _WBSElement                    on $projection.WBSElement                      = _WBSElement.WBSElement
association[0..1] to I_WBSElement                   as _PartnerWBSElement             on $projection.PartnerWBSElement              = _PartnerWBSElement.WBSElement
association [0..1]  to I_WBSElementBasicData        as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
association [0..1]  to I_WBSElementBasicData        as _PartnerWBSElementBasicData   on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID
association [0..1] to I_WBSElementByExternalID      as _PartnerWBSElementExternalID        on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
association [0..1]  to I_WBSElementBasicData        as _InvtrySpclStkWBSElmntBscData  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscData.WBSElementInternalID     
association [0..1] to I_WBSElementByExternalID       as _InvtrySpclStockWBSElmntExtID  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID
  
association[0..1] to I_Project                      as _PartnerProject                on $projection.PartnerProject                 = _PartnerProject.Project
association [0..1] to I_ProjectByExternalID         as _ProjectExternalID             on  $projection.ProjectExternalID         = _ProjectExternalID.ProjectExternalID
association[0..1] to I_SalesDocument                as _PartnerSalesDocument          on $projection.PartnerSalesDocument           = _PartnerSalesDocument.SalesDocument
association[0..1] to I_SalesDocumentItem            as _PartnerSalesDocumentItem      on $projection.PartnerSalesDocument           = _PartnerSalesDocumentItem.SalesDocument and  
                                                                                         $projection.PartnerSalesDocumentItem       = _PartnerSalesDocumentItem.SalesDocumentItem
association[0..1] to I_BusinessProcess              as _PartnerBusinessProcess        on $projection.ControllingArea                = _PartnerBusinessProcess.ControllingArea and                                                                                        
                                                                                         $projection.PartnerBusinessProcess         = _PartnerBusinessProcess.BusinessProcess

association[0..1] to I_BillingDocumentType          as _BillingDocumentType           on $projection.BillingDocumentType            = _BillingDocumentType.BillingDocumentType 

association[0..1] to I_SalesOrganization            as _SalesOrganization             on $projection.SalesOrganization              = _SalesOrganization.SalesOrganization 
association[0..1] to I_DistributionChannel          as _DistributionChannel           on $projection.DistributionChannel            = _DistributionChannel.DistributionChannel 

association[0..1] to I_Material                     as _SoldMaterial                  on  $projection.SoldMaterial                  = _SoldMaterial.Material //do not use any longer, use _SoldProduct
association[0..1] to I_Product                      as _SoldProduct                   on  $projection.SoldProduct                   = _SoldProduct.Product

association[0..1] to I_Fund                         as _Fund                          on $projection.FinancialManagementArea        = _Fund.FinancialManagementArea and                                                                                        
                                                                                         $projection.Fund                           = _Fund.Fund
association[0..1] to I_Fund                         as _PartnerFund                   on $projection.FinancialManagementArea        = _PartnerFund.FinancialManagementArea and                                                                                        
                                                                                         $projection.PartnerFund                    = _PartnerFund.Fund
association [0..*] to I_FundsCenter                 as _FundsCenter                  on $projection.FinancialManagementArea        = _FundsCenter.FinancialManagementArea
                                                                                         and $projection.FundsCenter                = _FundsCenter.FundsCenter
association[0..1] to I_CompanyCode                  as _PartnerCompanyCode            on $projection.PartnerCompanyCode             = _PartnerCompanyCode.CompanyCode
                                                                                      
association[0..1] to I_InventoryValuationType       as _InventorySpecialStockValnType  on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventoryValuationType

association[0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType      on $projection.InventorySpecialStockType     =  _InventorySpecialStockType.InventorySpecialStockType
association[0..1] to I_InvtrySpecialStockValnType   as _InventorySpclStockValnType    on  $projection.InvtrySpecialStockValnType_2  = _InventorySpclStockValnType.InventorySpecialStockValnType

association[0..1] to I_SalesDocument                as _InventorySpclStkSalesDocument  on $projection.InventorySpclStkSalesDocument =  _InventorySpclStkSalesDocument.SalesDocument

association[0..1] to I_SalesDocumentItem            as _InventorySpclStkSalesDocItm    on $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocItm.SalesDocument and  
                                                                                          $projection.InventorySpclStkSalesDocItm   = _InventorySpclStkSalesDocItm.SalesDocumentItem
association[0..1] to I_WBSElementByInternalKey      as _InvtrySpclStockWBSElmntIntID   on $projection.InvtrySpclStockWBSElmntIntID  = _InvtrySpclStockWBSElmntIntID.WBSElementInternalID
association[0..1] to I_WBSElement                   as _InventorySpclStockWBSElement   on $projection.InventorySpclStockWBSElement  = _InventorySpclStockWBSElement.WBSElement

association[0..1] to I_InventoryValuationType       as _InventoryValuationType         on $projection.InventoryValuationType        = _InventoryValuationType.InventoryValuationType

//association[0..1] to I_ControllingObject            as _OriginSenderObject             on $projection.OriginSenderObject            =  _OriginSenderObject.ControllingObject 

association[0..1] to I_ControllingObjectClass       as _ControllingObjectClass         on $projection.ControllingObjectClass        =  _ControllingObjectClass.ControllingObjectClass

association[1..1] to I_Partnercompany               as _PartnerCompany                 on $projection.PartnerCompany                = _PartnerCompany.PartnerCompany

association[0..1] to I_ControllingObjectClass       as _PartnerControllingObjectClass  on $projection.PartnerControllingObjectClass =  _PartnerControllingObjectClass.ControllingObjectClass

association[0..*] to I_CostCenter                   as _OriginCostCenter               on $projection.ControllingArea               = _OriginCostCenter.ControllingArea and  
                                                                                          $projection.OriginCostCenter              = _OriginCostCenter.CostCenter
                                                                           
association[0..*] to I_CostCenterActivityType       as _CostCtrActivityType            on $projection.ControllingArea               = _CostCtrActivityType.ControllingArea and     
                                                                                          $projection.CostCtrActivityType           = _CostCtrActivityType.CostCtrActivityType

association[0..*] to I_CostCenterActivityType       as _OriginCostCtrActivityType      on $projection.ControllingArea               = _OriginCostCtrActivityType.ControllingArea and     
                                                                                          $projection.OriginCostCtrActivityType           = _OriginCostCtrActivityType.CostCtrActivityType  
                                                                                       
association[0..1] to I_OrderCategory                as _OrderCategory                  on $projection.OrderCategory                 =  _OrderCategory.OrderCategory

//association[0..1] to I_NetworkActivity             as _RelatedNetworkActivity         on $projection.ProjectNetwork                =  _RelatedNetworkActivity.ProjectNetwork and
//                                                                                          $projection.RelatedNetworkActivity        =  _RelatedNetworkActivity.NetworkActivity 

//association[0..1] to I_NetworkActivity             as _PartnerProjectNetworkActivity  on $projection.PartnerProjectNetwork         =  _PartnerProjectNetworkActivity.ProjectNetwork and
//                                                                                          $projection.PartnerProjectNetworkActivity =  _PartnerProjectNetworkActivity.NetworkActivity 
                                                                                                                                                                                                                                                                  

association[0..1] to I_MovementCategory             as _MovementCategory               on $projection.AssetAcctTransClassfctn       = _MovementCategory.AssetAcctTransClassfctn                                                                                                                                                                                                                                                            
association[0..1] to I_AssetTransactionType         as _AssetTransactionType           on $projection.AssetTransactionType          = _AssetTransactionType.AssetTransactionType                                                                                                                                                                                                                                                            

association[0..1] to I_BudgetPeriod                 as _BudgetPeriod                   on $projection.BudgetPeriod                  = _BudgetPeriod.BudgetPeriod                                                                                                                                                                                                                                                            

//association[0..*] to I_CostOriginGroup              as _CostOriginGroup                on $projection.ControllingArea               = _CostOriginGroup.ControllingArea and                                                                                                                                                                                                                                                            
//// not contained in view                                                                  $projection.CostOriginType                = _CostOriginGroup.CostOriginType and                                                                                                                                                                                                                                                           
//                                                                                          $projection.CostOriginGroup               = _CostOriginGroup.CostOriginGroup                                                                                                                                                                                                                                                            

association[0..1] to I_FinancialManagementArea      as _FinancialManagementArea        on $projection.FinancialManagementArea       = _FinancialManagementArea.FinancialManagementArea                                                                                                                                                                                                                                                            
//association[0..1] to I_FundedProgram                as _FundedProgram                  on $projection.FinancialManagementArea       = _FundedProgram.FinancialManagementArea and 
//                                                                                          $projection.FundedProgram                 = _FundedProgram.FundedProgram                                                                                                                                                                                                                                                           

association[0..1] to I_HouseBankAccount             as _HouseBankAccount               on $projection.CompanyCode                   = _HouseBankAccount.CompanyCode and
                                                                                          $projection.HouseBank                     = _HouseBankAccount.HouseBank and                                                                                                                                                                                                                                                           
                                                                                          $projection.HouseBankAccount              = _HouseBankAccount.HouseBankAccount                                                                                                                                                                                                                                                            

association[0..1] to I_LogicalSystem                as _LogicalSystem                  on $projection.LogicalSystem                 = _LogicalSystem.LogicalSystem                                                                                                                                                                                                                                                            

association[0..1] to I_OperatingConcern             as _OperatingConcern               on $projection.OperatingConcern              = _OperatingConcern.OperatingConcern                                                                                                                                                                                                                                                            

association[0..1] to I_ProjectNetwork               as _ProjectNetwork                 on $projection.ProjectNetwork                =  _ProjectNetwork.ProjectNetwork

association[0..1] to I_Purreqvaluationarea          as _PurReqValuationArea            on $projection.ValuationArea                 =  _PurReqValuationArea.ValuationArea

association[0..1] to I_FiscalYearVariant            as _FiscalYearVariant              on $projection.FiscalYearVariant             = _FiscalYearVariant.FiscalYearVariant

association[0..1] to I_FiscalCalendarDate           as _FiscalCalendarDate             on $projection.FiscalYearVariant             = _FiscalCalendarDate.FiscalYearVariant and 
                                                                                          $projection.PostingDate                   = _FiscalCalendarDate.CalendarDate
association[1..1] to I_CalendarMonth                as _CalendarMonth                  on $projection.CalendarMonth                 = _CalendarMonth.CalendarMonth
association[1..1] to I_CalendarQuarter              as _CalendarQuarter                on $projection.CalendarQuarter               = _CalendarQuarter.CalendarQuarter
association[1..1] to I_YearMonth                    as _CalendarYearMonth              on $projection.CalendarYearMonth             = _CalendarYearMonth.YearMonth                                                                                                                                                                               
association[0..1] to I_Project                      as _Project                      on $projection.Project = _Project.Project
association [0..1]  to I_ProjectBasicData           as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID 
association [0..1]  to I_ProjectBasicData           as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID 
association [0..1] to I_ProjectByExternalID         as _PartnerProjectExternalID        on  $projection.PartnerProjectExternalID   = _PartnerProjectExternalID.ProjectExternalID  
association[0..1] to I_ProjectByInternalKey         as _ProjectInternalID            on $projection.ProjectInternalID = _ProjectInternalID.ProjectInternalID 
association[0..1] to I_ServiceDocumentType         as _ServiceDocumentType           on $projection.ServiceDocumentType             = _ServiceDocumentType.ServiceDocumentType
  
association[0..1] to I_SrvcDocByDocumentType       as _ServiceDocument               on $projection.ServiceDocumentType             = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument 
                                                                                                     
association[0..1] to I_SrvcDocItemByDocumentType   as _ServiceDocumentItem           on $projection.ServiceDocumentType             = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem        = _ServiceDocumentItem.ServiceDocumentItem                         
                                             
association[0..1] to I_ServiceDocumentType         as _PartnerServiceDocumentType           on $projection.PartnerServiceDocumentType             = _PartnerServiceDocumentType.ServiceDocumentType
  
association[0..1] to I_SrvcDocByDocumentType       as _PartnerServiceDocument               on $projection.PartnerServiceDocumentType             = _PartnerServiceDocument.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument            = _PartnerServiceDocument.ServiceDocument 
                                                                                                     
association[0..1] to I_SrvcDocItemByDocumentType   as _PartnerServiceDocumentItem           on $projection.PartnerServiceDocumentType             = _PartnerServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument            = _PartnerServiceDocumentItem.ServiceDocument
                                                                                         and $projection.PartnerServiceDocumentItem        = _PartnerServiceDocumentItem.ServiceDocumentItem   
association [0..1] to I_LedgerCompanyCodeCrcyRoles  as _LedgerCompanyCodeCrcyRoles    on  $projection.CompanyCode = _LedgerCompanyCodeCrcyRoles.CompanyCode
                                                                                      and $projection.Ledger      = _LedgerCompanyCodeCrcyRoles.Ledger
association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                       and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
association [0..1] to I_MasterFixedAsset             as _GroupMasterFixedAsset         on  $projection.CompanyCode           = _GroupMasterFixedAsset.CompanyCode
                                                                                       and $projection.GroupMasterFixedAsset = _GroupMasterFixedAsset.MasterFixedAsset
association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType = _ServiceContractType.ServiceDocumentType

association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType = _ServiceContract.ServiceDocumentType
                                                                                       and $projection.ServiceContract     = _ServiceContract.ServiceDocument

association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType = _ServiceContractItem.ServiceDocumentType
                                                                                       and $projection.ServiceContract     = _ServiceContractItem.ServiceDocument
                                                                                       and $projection.ServiceContractItem = _ServiceContractItem.ServiceDocumentItem
association [0..1] to I_TimeSheetOvertimeCat         as _TimeSheetOvertimeCat          on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCat.TimeSheetOvertimeCategory
association [0..1] to I_Grant                        as _Grant                         on  $projection.GrantID                 = _Grant.GrantID
association [0..1] to I_Grant                        as _PartnerGrant                  on  $projection.PartnerGrant            = _PartnerGrant.GrantID

association [0..1] to I_BudgetPeriod                 as _PartnerBudgetPeriod           on  $projection.PartnerBudgetPeriod = _PartnerBudgetPeriod.BudgetPeriod

association [0..1] to I_FundedProgram                as _FundedProgram                 on  $projection.FinancialManagementArea = _FundedProgram.FinancialManagementArea
                                                                                       and $projection.FundedProgram           = _FundedProgram.FundedProgram
association [0..1] to I_CompanyCode                  as _PubSecBudgetAccountCoCode     on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode

association [0..1] to I_PubSecBudgetAccount          as _PubSecBudgetAccount           on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                       and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
                                                                                         

association [0..1] to I_FiscCalendarDateForCompCode  as _PubSecBudgetCnsmpnDate        on  $projection.PubSecBudgetCnsmpnDate    = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                       and $projection.PubSecBudgetAccountCoCode = _PubSecBudgetCnsmpnDate.CompanyCode

association [0..1] to I_FiscalYearPeriodForCmpnyCode as _PubSecBudgetCnsmpnFsclPeriod  on  $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetCnsmpnFsclPeriod.CompanyCode
                                                                                       and $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBudgetCnsmpnFsclPeriod.FiscalYear
                                                                                       and $projection.PubSecBudgetCnsmpnFsclPeriod = _PubSecBudgetCnsmpnFsclPeriod.FiscalPeriod

association [0..1] to I_FiscalYearForCompanyCode     as _PubSecBudgetCnsmpnFsclYear    on  $projection.PubSecBudgetAccountCoCode  = _PubSecBudgetCnsmpnFsclYear.CompanyCode
                                                                                       and $projection.PubSecBudgetCnsmpnFsclYear = _PubSecBudgetCnsmpnFsclYear.FiscalYear

association [0..1] to I_PubSecBdgtCnsmpnType         as _PubSecBudgetCnsmpnType        on  $projection.PubSecBudgetCnsmpnType = _PubSecBudgetCnsmpnType.PubSecBudgetCnsmpnType

association [0..1] to I_PubSecBdgtCnsmpnAmtType      as _PubSecBudgetCnsmpnAmtType     on  $projection.PubSecBudgetCnsmpnAmtType = _PubSecBudgetCnsmpnAmtType.PubSecBudgetCnsmpnAmtType
association [0..1] to I_Globalcompany                as _Company                       on  $projection.Company                       = _Company.Company
association [0..1] to I_CnsldtnUnit_3                as _ConsolidationUnit             on  $projection.ConsolidationUnit             = _ConsolidationUnit.ConsolidationUnit      
association [0..1] to I_CnsldtnUnit_3                as _PartnerConsolidationUnit      on  $projection.PartnerConsolidationUnit      = _PartnerConsolidationUnit.ConsolidationUnit
association [0..1] to I_CnsldtnChartOfAccounts       as _ConsolidationChartOfAccounts  on  $projection.ConsolidationChartOfAccounts  = _ConsolidationChartOfAccounts.ConsolidationChartOfAccounts
association [0..1] to I_CnsldtnFinStmntItem          as _CnsldtnFinancialStatementItem on  $projection.ConsolidationChartOfAccounts  = _CnsldtnFinancialStatementItem.ConsolidationChartOfAccounts
                                                                                       and $projection.CnsldtnFinancialStatementItem = _CnsldtnFinancialStatementItem.FinancialStatementItem
association [0..1] to I_CnsldtnSubItemCategory       as _CnsldtnSubitemCategory        on  $projection.CnsldtnSubitemCategory        = _CnsldtnSubitemCategory.SubItemCategory
association [0..1] to I_CnsldtnSubItem               as _CnsldtnSubitem                on  $projection.CnsldtnSubitemCategory        = _CnsldtnSubitem.SubItemCategory
                                                                                       and $projection.CnsldtnSubitem                = _CnsldtnSubitem.SubItem  

association [0..1] to I_CompanyCode                  as _CashLedgerCompanyCode         on  $projection.CashLedgerCompanyCode = _CashLedgerCompanyCode.CompanyCode

association [0..1] to I_GLAccountInCompanyCode       as _CashLedgerAccount             on  $projection.CashLedgerCompanyCode = _CashLedgerAccount.CompanyCode
                                                                                       and $projection.CashLedgerAccount     = _CashLedgerAccount.GLAccount




{
@ObjectModel.foreignKey.association: '_Ledger'      
key Ledger,
@ObjectModel.foreignKey.association: '_CompanyCode'
key CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
key FiscalYear,
@ObjectModel.foreignKey.association: '_SourceLedger'
key SourceLedger,
@ObjectModel.foreignKey.association: '_JournalEntry'
key AccountingDocument,
key LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_GLAccountFlowType'
key GLAccountFlowType,
key FiscalPeriodDate,
key ComprnFiscalPeriodDate,

LedgerFiscalYear,
//GLRecordType,

///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL 
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
GLAccount as GLAccountHierarchy,

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
@ObjectModel.foreignKey.association: '_CostCenter'      
CostCenter,
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
//SubLedgerAcctLineItemType,
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
ClearingJournalEntry,
ClearingJournalEntryFiscalYear,
//IsCleared,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
AssetDepreciationArea,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
MasterFixedAsset,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FixedAsset'
FixedAsset,
AssetValueDate,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AssetTransactionType'
AssetTransactionType,
AssetAcctTransClassfctn,
DepreciationFiscalPeriod,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
GroupMasterFixedAsset,
@Analytics.internalName: #LOCAL 
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
//I_Glacctbalance.xobew,
@ObjectModel.foreignKey.association: '_InventorySpecialStockType'
InventorySpecialStockType,
@ObjectModel.foreignKey.association: '_InventorySpclStockValnType'      
@Analytics.internalName: #LOCAL
cast(P_GlAcctBalanceComprn.InventorySpecialStockValnType as fis_inventoryspclstockvalntype preserving type) as InvtrySpecialStockValnType_2,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
InventorySpclStkSalesDocument,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
InventorySpclStkSalesDocItm,
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
InvtrySpclStockWBSElmntIntID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID' 
@ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
cast(_InvtrySpclStockWBSElmntIntID.WBSElement as mlmat_ps_posid preserving type ) as InventorySpclStockWBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
cast( _InvtrySpclStkWBSElmntBscData.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type ) as InvtrySpclStockWBSElmntExtID,
@ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
InventorySpecialStockSupplier,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
InventoryValuationType,
@ObjectModel.foreignKey.association: '_Purreqvaluationarea'
ValuationArea,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
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
AccountAssignment,
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
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
PartnerOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerOrderCategory'
PartnerOrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'    
PartnerWBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
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
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
ServiceDocumentType,
@ObjectModel.foreignKey.association: '_ServiceDocument'
ServiceDocument,
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
ServiceDocumentItem,
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
PartnerServiceDocumentType,
@ObjectModel.foreignKey.association: '_PartnerServiceDocument'
PartnerServiceDocument,
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

@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type ) as PartnerProjectExternalID,


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
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
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
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
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


//@ObjectModel.foreignKey.association: '_CostCenter'      
//CostCenter,
CostCtrActivityType,
//InternalOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_Order'
OrderID,
@ObjectModel.foreignKey.association: '_OrderCategory'
OrderCategory,
@ObjectModel.foreignKey.association: '_WBSElementInternalID'
WBSElementInternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'  
@ObjectModel.foreignKey.association: '_WBSElement'      
_WBSElementInternalID.WBSElement as WBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_WBSElementExternalID'
cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
PartnerWBSElementInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type ) as PartnerWBSElementExternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'  
@ObjectModel.foreignKey.association: '_Project'      
_ProjectInternalID.Project as Project,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectExternalID'
cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type ) as ProjectExternalID,
@ObjectModel.foreignKey.association: '_ProjectInternalID'      
P_GlAcctBalanceComprn.ProjectInternalID,
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
PartnerProjectInternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocument'    
SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocumentItem'    
SalesOrderItem,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocument'
SalesDocument,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocumentItem'
SalesDocumentItem,

ClearingDate,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ConsolidationUnit'      
ConsolidationUnit,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'  
PartnerConsolidationUnit,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Company'  
Company, 
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts' 
ConsolidationChartOfAccounts,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem' 
CnsldtnFinancialStatementItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory' 
CnsldtnSubitemCategory,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CnsldtnSubitem' 
CnsldtnSubitem,  
@ObjectModel.foreignKey.association: '_CorporateGroupChartOfAccounts'
_ChartOfAccounts.CorporateGroupChartOfAccounts as CorporateGroupChartOfAccounts,
@ObjectModel.foreignKey.association: '_CorporateGroupAccount'      
_GLAccountInChartOfAccounts.CorporateGroupAccount as CorporateGroupAccount,
//@Semantics.booleanIndicator 
_GLAccountInChartOfAccounts.IsBalanceSheetAccount,

BalanceTransactionCurrency,
TransactionCurrency,
CompanyCodeCurrency,
GlobalCurrency,
FunctionalCurrency,
FreeDefinedCurrency1,
FreeDefinedCurrency2,
FreeDefinedCurrency3,
FreeDefinedCurrency4,
FreeDefinedCurrency5,
FreeDefinedCurrency6,
FreeDefinedCurrency7,
FreeDefinedCurrency8,

// Amount, Comparison Amount 
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } AmountInBalanceTransacCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } AmountInTransactionCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } AmountInCompanyCodeCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } AmountInGlobalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } AmountInFunctionalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } AmountInFreeDefinedCurrency1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } AmountInFreeDefinedCurrency2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } AmountInFreeDefinedCurrency3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } AmountInFreeDefinedCurrency4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } AmountInFreeDefinedCurrency5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } AmountInFreeDefinedCurrency6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } AmountInFreeDefinedCurrency7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } AmountInFreeDefinedCurrency8,


@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }  ComprnAmountInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } ComprnAmountInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } ComprnAmountInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } ComprnAmountInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } ComprnAmountInFunctionalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } ComprnAmountInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } ComprnAmountInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } ComprnAmountInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } ComprnAmountInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } ComprnAmountInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } ComprnAmountInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } ComprnAmountInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } ComprnAmountInFreeDfndCrcy8,


// Debit Credit Amounts, Comparison D/C Amounts
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
@DefaultAggregation: #SUM
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

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
ComprnDebitAmtInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
ComprnCreditAmtInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
ComprnDebitAmtInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
ComprnCreditAmtInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
ComprnDebitAmtInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
ComprnCreditAmtInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
ComprnDebitAmtInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
ComprnCreditAmtInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
ComprnDebitAmtInFunctionalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
ComprnCreditAmtInFuncnlCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
ComprnDebitAmtInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
ComprnCreditAmtInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
ComprnDebitAmtInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
ComprnCreditAmtInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
ComprnDebitAmtInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
ComprnCreditAmtInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
ComprnDebitAmtInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
ComprnCreditAmtInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
ComprnDebitAmtInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
ComprnCreditAmtInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
ComprnDebitAmtInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
ComprnCreditAmtInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
ComprnDebitAmtInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
ComprnCreditAmtInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
ComprnDebitAmtInFreeDfndCrcy8,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
ComprnCreditAmtInFreeDfndCrcy8,


FiscalPeriod,
P_GlAcctBalanceComprn.FlowOfFundsLedgerFiscalYear,

// Ending Balance, Comparison Ending Balance
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


@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
ComprnEndingBalInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
ComprnEndingBalInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
ComprnEndingBalInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
ComprnEndingBalInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
ComprnEndingBalInFuncnlCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
ComprnEndingBalInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
ComprnEndingBalInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
ComprnEndingBalInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
ComprnEndingBalInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
ComprnEndingBalInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
ComprnEndingBalInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
ComprnEndingBalInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
ComprnEndingBalInFreeDfndCrcy8,

FromPostingDate,
ToPostingDate,
ComprnFromPostingDate,
ComprnToPostingDate,

AccrualObjectType,
AccrualObject,
AccrualSubobject,
AccrualItemType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
CashLedgerAccount,

_CalendarDate.CalendarYear as CalendarYear,
@ObjectModel.foreignKey.association: '_CalendarQuarter'
_CalendarDate.CalendarQuarter as CalendarQuarter,
_CalendarDate.YearQuarter as CalendarYearQuarter,
@ObjectModel.foreignKey.association: '_CalendarMonth'
_CalendarDate.CalendarMonth as CalendarMonth,
@ObjectModel.foreignKey.association: '_CalendarYearMonth'
_CalendarDate.YearMonth as CalendarYearMonth,
_CalendarDate.CalendarWeek as CalendarWeek,
_CalendarDate.YearWeek as CalendarYearWeek,
_FiscalCalendarDate.FiscalQuarter as FiscalQuarter,
_FiscalCalendarDate.FiscalWeek as FiscalWeek,
_FiscalCalendarDate.FiscalYearQuarter as FiscalYearQuarter,
_FiscalCalendarDate.FiscalYearWeek as FiscalYearWeek,


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
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_SoldProductGroup,
_SoldProductGroup_2,
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
_FixedAsset,
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
_InvtrySpclStkWBSElmntBscData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  '_InvtrySpclStockWBSElmntExtID'
_InventorySpclStockWBSElement,
_InvtrySpclStockWBSElmntExtID,
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
_PartnerWBSElementExternalID,
_PartnerWBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
_PartnerProject,
_PartnerProjectBasicData,
_PartnerProjectExternalID,
_PartnerSalesDocument,
_PartnerSalesDocumentItem,
_PartnerBusinessProcess,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementExternalID'
_WBSElement,
_WBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementBasicData'
_WBSElementInternalID,
_WBSElementExternalID,      
_BillingDocumentType,
      
_SalesOrganization,
_DistributionChannel,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'      
_SoldMaterial,
_SoldProduct,      
_Fund,
_PartnerFund,
      
_MovementCategory,
_AssetTransactionType,
      
_BudgetPeriod,
      
_FinancialManagementArea,
//_FundedProgram

_FundsCenter,
      
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
_ProjectExternalID,
_ProjectBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectBasicData'
_ProjectInternalID,
      
_PurReqValuationArea,

_FiscalCalendarDate,
_FiscalYearVariant,
_CalendarMonth,
_CalendarQuarter,
_CalendarYearMonth,

_CorporateGroupChartOfAccounts,

_ServiceDocumentType,

_ServiceDocument,

_ServiceDocumentItem,     

_PartnerServiceDocumentType,

_PartnerServiceDocument,

_PartnerServiceDocumentItem, 

P_GlAcctBalanceComprn._GLAccountFlowType,                           
_LedgerCompanyCodeCrcyRoles,
_MasterFixedAsset,
_GroupMasterFixedAsset,
_ServiceContractType,
_ServiceContract,
_ServiceContractItem,
_TimeSheetOvertimeCat,
_FundedProgram,
_PubSecBudgetAccountCoCode,
_PubSecBudgetAccount,
_PubSecBudgetCnsmpnDate,
_PubSecBudgetCnsmpnFsclPeriod,
_PubSecBudgetCnsmpnFsclYear,
_PubSecBudgetCnsmpnType,
_PubSecBudgetCnsmpnAmtType,
_Company,
_ConsolidationUnit,
_PartnerConsolidationUnit,
_ConsolidationChartOfAccounts,
_CnsldtnFinancialStatementItem,
_CnsldtnSubitemCategory,
_CnsldtnSubitem,
_CashLedgerCompanyCode,
_CashLedgerAccount,
_Grant,
_PartnerGrant,
_PartnerBudgetPeriod,  
P_GlAcctBalanceComprn._CustomerCompany,
P_GlAcctBalanceComprn._SupplierCompany,   

P_GlAcctBalanceComprn._FinServicesProductGroup, 
P_GlAcctBalanceComprn._FinancialServicesBranch, 
P_GlAcctBalanceComprn._FinancialDataSource,     
P_GlAcctBalanceComprn._CustomerSupplierIndustry,
P_GlAcctBalanceComprn._CustomerSupplierCountry,
 
// Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
cast( '' as brgru)  as GLAccountAuthorizationGroup,
cast( '' as brgru)  as SupplierBasicAuthorizationGrp,
cast( '' as brgru)  as CustomerBasicAuthorizationGrp,
cast( '' as brgru)  as AcctgDocTypeAuthorizationGroup,
cast( '' as aufart) as OrderType,
cast( '' as auart)  as SalesOrderType,
cast( '' as anlkl)  as AssetClass    

}
```
