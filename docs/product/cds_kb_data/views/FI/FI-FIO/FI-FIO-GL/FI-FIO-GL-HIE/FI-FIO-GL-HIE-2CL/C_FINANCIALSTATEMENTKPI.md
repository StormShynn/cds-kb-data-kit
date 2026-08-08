---
name: C_FINANCIALSTATEMENTKPI
description: "This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value
semantic_en: "This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group"
semantic_vi: "KPIs based on Financial Statements — CDS view tiêu dùng dựa trên I_ActualPlanLineItemSemTag."
keywords:
  - "KPIs based on Financial Statements"
  - "kpis"
  - "based"
  - "financial"
  - "statements"
  - "account"
  - "hierarchy"
  - "ledger"
  - "company"
  - "code"
  - "planning"
  - "category"
  - "semantic"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-HIE-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - lob:finance
  - plan
  - product
---
# C_FINANCIALSTATEMENTKPI

**This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Lot-Size-Independent Indicator |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Global Currency |
| `WorkingCapitalAmtInGlobCrcy` |  | |  | `cast(0 as fis_wrkcptlamt_ksl)` | `CURR(23)` | Working Capital Amount in Global Currency |
| `PlnWorkingCapitalAmtInGlobCrcy` |  | |  | `cast(0 as fis_wrkcptlamt_ksl_p)` | `CURR(23)` | Planned Working Capital Amount in Global Currency |
| `WorkingCapitalRatioGlobCrcy` |  | |  | `cast(0 as fis_wrkcptlratio_ksl)` | `DEC(10)` | Working Capital Global Currency Percent |
| `PlnWorkingCapitalRatioGlobCrcy` |  | |  | `cast(0 as fis_wrkcptlratio_ksl_p)` | `DEC(10)` | Planned Working Capital Ratio Global Currency |
| `CurrentAssetAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'CURASSET' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_curast_ksl preserving type )` | `CURR(23)` | Current Asset Amount In Global Currency |
| `PlnCurrentAssetAmtInGlobCrcy` |  | |  | `cast ( case when ( SemanticTag = 'CURASSET' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_curast_ksl_p preserving type )` | `CURR(23)` | Planned Current Assets in Global Currency |
| `CurrentLiabilityAmtInGlobCrcy` |  | |  | `cast ( case when ( SemanticTag = 'CURLIABEQU' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_curlbty_ksl preserving type )` | `CURR(23)` | Current Liability Amount in Global Currency |
| `PlnCurrentLbltyAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'CURLIABEQU' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_curlbty_ksl_p preserving type )` | `CURR(23)` | Planned Current Liabilities in Global Currency |
| `ShEquityAmtInGlobCrcy` |  | |  | `cast(0 as fis_sheqtyamt_ksl)` | `CURR(23)` | Shareholder Equity Amount In Global Currency |
| `PlnShEquityAmtInGlobCrcy` |  | |  | `cast(0 as fis_sheqtyamt_ksl_p)` | `CURR(23)` | Shareholders Equity in Global Currency |
| `AssetAmtInGlobCrcy` |  | |  | `cast ( case when ( SemanticTag = 'ASSET' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_asset_ksl preserving type )` | `CURR(23)` | Asset Amount in Global Currency |
| `PlnAssetAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'ASSET' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_asset_ksl_p preserving type )` | `CURR(23)` | Planned Total Assets in Global Currency |
| `LiabilityEquityAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'LIAB_EQUIT' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_liab_equity_ksl preserving type )` | `CURR(23)` | Liability and Equity Amount In Global Currency |
| `PlnLbltyEquityAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'LIAB_EQUIT' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_liab_equity_ksl_p preserving type )` | `CURR(23)` | Planned Liabilities and Equity in Global Currency |
| `OpgActyCashAmtInGlobCrcy` |  | |  | `cast (0 as fis_cashopg_ksl)` | `CURR(23)` | Operating Cash Flow Amount in Global Currency |
| `PlnOpgActyCashAmtInGlobCrcy` |  | |  | `cast (0 as fis_cashopg_ksl_p)` | `CURR(23)` | Planned Operating Cash Flow Amount in Global Currency |
| `GrossMarginRatioGlobCrcy` |  | |  | `cast (0 as fis_grossmargin_ksl)` | `DEC(23)` | Gross Margin Global Currency Percent |
| `PlnGrossMarginRatioGlobCrcy` |  | |  | `cast (0 as fis_grossmargin_ksl_p)` | `DEC(23)` | Planned Gross Margin Ratio Global Currency |
| `OpgMargRatioGlobCrcy` |  | |  | `cast (0 as fis_operatingmargin_ksl)` | `DEC(23)` | Operating Margin Global Currency Percent |
| `PlnOpgMargRatioGlobCrcy` |  | |  | `cast (0 as fis_operatingmargin_ksl_p)` | `DEC(23)` | Planned Operating Margin Ratio Global Currency |
| `ProfitMarginRatioGlobCrcy` |  | |  | `cast (0 as fis_profitmargin_ksl)` | `DEC(23)` | Profit Margin Global Currency Percent |
| `PlnProfitMarginRatioGlobCrcy` |  | |  | `cast (0 as fis_profitmargin_ksl_p)` | `DEC(23)` | Planned Profit Margin Ratio Global Currency |
| `ReturnOnEquityRatioGlobCrcy` |  | |  | `cast (0 as fis_returnonequity_ksl)` | `DEC(23)` | Return on Equity Global Currency Percent |
| `PlnReturnOnEquityRatioGlobCrcy` |  | |  | `cast (0 as fis_returnonequity_ksl_p)` | `DEC(23)` | Planned Return on Equity Ratio Global Currency |
| `ReturnOnAssetRatioGlobCrcy` |  | |  | `cast (0 as fis_returnonasset_ksl)` | `DEC(23)` | Return on Asset Global Currency Percent |
| `PlnReturnOnAssetRatioGlobCrcy` |  | |  | `cast (0 as fis_returnonasset_ksl_p)` | `DEC(23)` | Planned Return on Assets Ratio Global Currency |
| `RetOnInvestmentRatioGlobCrcy` |  | |  | `cast (0 as fis_returnoninvest_ksl)` | `DEC(23)` | Return on Investment Global Currency Percent |
| `PlnRetOnInvmtRatioGlobCrcy` |  | |  | `cast (0 as fis_returnoninvest_ksl_p)` | `DEC(23)` | Planned Return on Investment Ratio Global Currency |
| `GrossProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_grossprofit_ksl)` | `CURR(23)` | Gross Profit Amount in Global Currency |
| `PlnGrossProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_grossprofit_ksl_p)` | `CURR(23)` | Planned Gross Profit Amount in Global Currency |
| `OpgProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_opgprofit_ksl)` | `CURR(23)` | Operating Profit Amount in Global Currency |
| `PlnOpgProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_opgprofit_ksl_p)` | `CURR(23)` | Planned Operating Profit Amount in Global Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'RECO_COS' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fins_cogs preserving type )` | `CURR(23)` | Cost of Goods Sold - Total |
| `PlnCostOfGdsSoldAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'RECO_COS' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_cogs_ksl_p preserving type )` | `CURR(23)` | Planned Cost of Goods Sold Amount In Global Currency |
| `GrossRevenueAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'GROSS_REV' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_gross_rev_ksl preserving type )` | `CURR(23)` | Gross Revenue Amount in Global Currency |
| `PlnGrossRevenueAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'GROSS_REV' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_gross_rev_ksl_p preserving type )` | `CURR(23)` | Planned Gross Revenue Amount in Global Currency |
| `RecognizedRevnAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'RECO_REV' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fins_trr_recrevn preserving type )` | `CURR(23)` | Recognized Revenue |
| `PlnRecgdRevenueAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'RECO_REV' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_reco_rev_ksl_p preserving type )` | `CURR(23)` | Planned Recognized Revenue Amount In Global Currency |
| `AssetTurnoverRatioGlobCrcy` |  | |  | `cast (0 as fis_assetturnover_ksl)` | `DEC(23)` | Asset Turnover Global Currency Percent |
| `PlnAssetTurnoverRatioGlobCrcy` |  | |  | `cast (0 as fis_assetturnover_ksl_p)` | `DEC(23)` | Planned Asset Turnover Ratio Global Currency |
| `InvtryTurnoverRatioGlobCrcy` |  | |  | `cast (0 as fis_invtryturnover_ksl)` | `DEC(23)` | Inventory Turnover Global Currency Percent |
| `PlnInvtryTurnoverRatioGlobCrcy` |  | |  | `cast (0 as fis_invtryturnover_ksl_p)` | `DEC(23)` | Planned Inventory Turnover Ratio Global Currency |
| `EBTAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebt_ksl)` | `CURR(23)` | EBT Amount in Global Currency |
| `PlnEBTAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebt_ksl_p)` | `CURR(23)` | Planned EBT Amount in Global Currency |
| `EBITAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebit_ksl)` | `CURR(23)` | EBIT Amount in Global Currency |
| `PlnEBITAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebit_ksl_p)` | `CURR(23)` | Planned EBIT Amount in Global Currency |
| `EBITDAAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebitda_ksl)` | `CURR(23)` | EBITDA Amount in Global Currency |
| `PlnEBITDAAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebitda_ksl_p)` | `CURR(23)` | Planned EBITDA Amount in Global Currency |
| `NetIncomeAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'PL_RESULT' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_netincome_ksl preserving type )` | `CURR(23)` | Net Income Amount in Global Currency |
| `PlnNetIncomeAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'PL_RESULT' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_netincome_ksl_p preserving type )` | `CURR(23)` | Planned Net Profit Amount in Global Currency |
| `TotalOpgExpnInGlobCrcy` |  | |  | `cast (0 as fis_toperexp_ksl)` | `CURR(23)` | Total Operating Expense Amount in Global Currency |
| `PlnTotalOpgExpnInGlobCrcy` |  | |  | `cast (0 as fis_toperexp_ksl_p)` | `CURR(23)` | Planned Total Operating Expense Amount in Global Currency |
| `OpgExpnInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'OPEREXP' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_operexp_ksl preserving type )` | `CURR(23)` | Operating Expense Amount in Global Currency |
| `PlnOpgExpnInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'OPEREXP' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_operexp_ksl_p preserving type )` | `CURR(23)` | Planned Operating Expense Amount in Global Currency |
| `OthOpgExpnInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'OOPEREXP' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_ooperexp_ksl preserving type )` | `CURR(23)` | Other Operating Expense Amount in Global Currency |
| `PlnOthOpgExpnInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'OOPEREXP' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_ooperexp_ksl_p preserving type )` | `CURR(23)` | Planned Other Operating Expense Amount in Global Currency |
| `StrtgInventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod = '000') then AmountInGlobalCurrency end as fis_strtginventory_ksl preserving type )` | `CURR(23)` | Starting Inventory Amount in Global Currency |
| `PlnStrtgInventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod = '000') then AmountInGlobalCurrency end as fis_strtginventory_ksl_p preserving type )` | `CURR(23)` | Planned Starting Inventory Amount in Global Currency |
| `ChgsInventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsinventory_ksl preserving type )` | `CURR(23)` | Changes of Inventory Amount in Global Currency |
| `PlnChgsInventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsinventory_ksl_p preserving type )` | `CURR(23)` | Planned Inventory Changes Amount in Global Currency |
| `InventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_inventory_ksl preserving type )` | `CURR(23)` | Inventory Amount in Global Currency |
| `PlnInventoryAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_inventory_ksl_p preserving type )` | `CURR(23)` | Planned Inventories Amount in Global Currency |
| `IncomeTaxAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'INCOMETAX' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_incometax_ksl preserving type )` | `CURR(23)` | Income Tax Amount in Global Currency |
| `PlnIncomeTaxAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'INCOMETAX' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_incometax_ksl_p preserving type )` | `CURR(23)` | Planned Income Tax Amount in Global Currency |
| `InterestAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'INTEREST' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_interest_ksl preserving type )` | `CURR(23)` | Interest Amount in Global Currency |
| `PlnInterestAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'INTEREST' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_interest_ksl_p preserving type )` | `CURR(23)` | Planned Interest Amount in Global Currency |
| `TngblAstDeprAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'DprTAsset' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_tangassets_ksl preserving type )` | `CURR(23)` | Tangible Asset Depreciation Amount in Global Currency |
| `PlnTngblAstDeprAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'DprTAsset' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_tangassets_ksl_p preserving type )` | `CURR(23)` | Planned Depreciation of Tangible Assets Amt in Glob Crcy |
| `IntngblAssetAmtznAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AmorInAsst' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_itangasset_ksl preserving type )` | `CURR(23)` | Intangible Asset Amortization Amount in Global Currency |
| `PlIntngblAstAmtznAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AmorInAsst' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_itangasset_ksl_p preserving type )` | `CURR(23)` | Planned Amortization of Intangible Assets Amt in Glob Crcy |
| `FxdAssetRtrmtAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'ChgFARet' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_chgfaret_ksl preserving type )` | `CURR(23)` | Fixed Asset Retirement Amount in Global Currency |
| `PlnFxdAssetRtrmtAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'ChgFARet' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_chgfaret_ksl_p preserving type )` | `CURR(23)` | Planned Retirement of Fixed Assets Amount in Global Currency |
| `ChgsProvisionAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Provisions' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsprovision_ksl preserving type )` | `CURR(23)` | Changes Provision Amount in Global Currency |
| `PlnChgsProvisionAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'Provisions' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsprovision_ksl_p preserving type )` | `CURR(23)` | Planned Provisions Amount Changes in Global Currency |
| `ChgsAcctsRblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccRec' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsaccrec_ksl preserving type )` | `CURR(23)` | Changes of Accounts Receivable Amount in Global Currency |
| `PlnChgsAcctsRblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccRec' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsaccrec_ksl_p preserving type )` | `CURR(23)` | Planned Receivables Amount Changes in Global Currency |
| `ChgsAcctsOthRblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccRec_Oth' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsaccrec_oth_ksl preserving type )` | `CURR(23)` | Changes of Accounts Other Receivable Amount in Global Crcy |
| `PlnChAcctsOthRblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccRec_Oth' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsaccrec_oth_ksl_p preserving type )` | `CURR(23)` | Planned Other Receivables Amount Changes in Global Currency |
| `ChgsAcctsPyblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccPay' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_ksl preserving type )` | `CURR(23)` | Changes of Accounts Payable Amount in Global Currency |
| `PlnChgsAcctsPyblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccPay' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_ksl_p preserving type )` | `CURR(23)` | Planned Payables Amount Changes in Global Currency |
| `ChgsAcctsOthPyblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccPay_Oth' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_oth_ksl preserving type )` | `CURR(23)` | Changes of Accounts Other Payable Amount in Global Crcy |
| `PlnChAcctsOthPyblAmtInGlobCrcy` |  | |  | `cast (case when ( SemanticTag = 'AccPay_Oth' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_oth_ksl_p preserving type )` | `CURR(23)` | Planned Other Payables Amount Changes in Global Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIFINSTMTKPI'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'KPIs based on Financial Statements'

@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
 
// these are defaulted as false
//@ObjectModel.updateEnabled: true 
//@ObjectModel.deleteEnabled: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics.query: true
@OData.publish: true

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view C_FinancialStatementKPI

  with parameters
    @AnalyticsDetails.query.variableSequence: 30
    @Consumption.hidden: false
//    @Consumption.valueHelp: '_PlanningCategory'
    @Consumption.valueHelpDefinition: [{
     entity: {
         name:    'I_PlanningCategory',
         element: 'PlanningCategory'
             }
    }]
    @Consumption.defaultValue: 'ACT01'
    P_PlanningCategory : fcom_category,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence: 100
    P_KeyDate          : vdm_v_key_date,
    @AnalyticsDetails.query.variableSequence: 20
    @Consumption.hidden: false
    P_ToFiscalPeriod             : fis_period_to

  // @EndUserText.label: 'Time Selection'
  // @Consumption.defaultValue: 'YEARTODATE'
  // @Consumption.valueHelpDefinition: [{
  // entity: {
  // name: 'C_GregorianCalSglDateFuncVH',
  // element: 'DateFunction'
  // }
  // }]
  // P_DateFunction : datefunctionid


  as select from I_ActualPlanLineItemSemTag as I_ActualPlanLineItemSemTag

//  association [0..1] to I_PlanningCategory as _PlanningCategory on _PlanningCategory.PlanningCategory = :P_PlanningCategory
{
  
  @AnalyticsDetails.query.variableSequence: 5
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccountHierarchy,

  
  @AnalyticsDetails.query.variableSequence: 10
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
  resultElement: 'Ledger', binding: [{ targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Ledger,

  @AnalyticsDetails.query.variableSequence: 25
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PlanningCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SemanticTag,

  //--------------------------------------------------------------------------------
  // Time Dimensions
  //--------------------------------------------------------------------------------
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @AnalyticsDetails.query.variableSequence: 15
  @AnalyticsDetails.query.display: #KEY_TEXT
  LedgerFiscalYear,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PostingDate,

  //--------------------------------------------------------------------------------
  // Other Dimensions
  //--------------------------------------------------------------------------------

  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignmentNumber,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignmentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocCreatedByUser,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocumentCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocumentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AlternativeGLAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Assembly,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetAcctTransClassfctn,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetDepreciationArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetTransactionType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetValueDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssignmentReference,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillableControl,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillingDocumentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillToParty,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BudgetPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessProcess,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessTransactionType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ClearingDate,  
  
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'ClearingJournalEntry'   
  @AnalyticsDetails.query.display: #KEY_TEXT
  ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'  
  @AnalyticsDetails.query.display: #KEY_TEXT
  ClearingDocFiscalYear,
  
@AnalyticsDetails.query.display: #KEY_TEXT
ClearingJournalEntry,
@AnalyticsDetails.query.display: #KEY_TEXT
ClearingJournalEntryFiscalYear,    
  
  @AnalyticsDetails.query.display: #KEY_TEXT
  ConditionContract,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingDebitCreditCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingObjectClass,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingObjectDebitType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostAnalysisResource,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCtrActivityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostEstimate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostObject,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostOriginGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CountryChartOfAccounts,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CreationDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerServiceNotification,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierCorporateGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierCountry,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierIndustry,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DebitCreditCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DepreciationFiscalPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DistributionChannel,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Division,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DocumentDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DocumentItemText,
  @AnalyticsDetails.query.display: #KEY_TEXT
  EliminationProfitCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Equipment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialAccountType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialManagementArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialTransactionType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYear,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearVariant,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FixedAsset,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FollowOnDocumentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalLocation,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Fund,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FundedProgram,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FundsCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccountType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GroupFixedAsset,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GroupMasterFixedAsset,
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBank,
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBankAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InventorySpclStkSalesDocItm,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InventorySpclStkSalesDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpclStockWBSElmntExtID'  
  InventorySpclStockWBSElement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InvtrySpclStockWBSElmntIntID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InvtrySpclStockWBSElmntExtID,    
  @AnalyticsDetails.query.display: #KEY_TEXT
  InventorySpecialStockSupplier,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InventorySpecialStockType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpecialStockValnType_2'
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'  
  InventorySpecialStockValnType,
  @AnalyticsDetails.query.display: #KEY_TEXT  
  InvtrySpecialStockValnType_2,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InventoryValuationType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InvoiceItemReference,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InvoiceReference,
  @AnalyticsDetails.query.display: #KEY_TEXT
  InvoiceReferenceFiscalYear,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsCommitment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsLotSizeIndependent,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsOpenItemManaged,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsReversal,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsReversed,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsSettled,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsSettlement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsStatisticalCostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsStatisticalOrder,
  @AnalyticsDetails.query.display: #KEY_TEXT
  IsStatisticalSalesDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  JointVentureCostRecoveryCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  JointVentureEquityGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  JointVentureEquityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LastChangeDateTime,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LedgerGLLineItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LineItemIsCompleted,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LogicalSystem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaintenanceActivityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaintenanceOrderIsPlanned,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaintenanceOrderPlanningCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaintPriority,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaintPriorityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MasterFixedAsset,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Material,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaterialGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OffsettingAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OffsettingAccountType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OperatingConcern,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderOperation,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderSuboperation,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrganizationDivision,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginCostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginCostCtrActivityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginObjectType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginSenderObject,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerAccountAssignment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerAccountAssignmentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerBudgetPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerBusinessArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerBusinessProcess,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCompany,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCompanyCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerControllingObjectClass,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCostCtrActivityType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCostObject,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerFunctionalArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerFund,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerGrant,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerOrder_2 as PartnerOrder,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerOrderCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProfitCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerProjectExternalID' 
  PartnerProject,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProjectInternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProjectExternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProjectNetwork,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProjectNetworkActivity,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerSalesDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerSalesDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerSegment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerWBSElementExternalID'  
  PartnerWBSElement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerWBSElementInternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerWBSElementExternalID,    
  @AnalyticsDetails.query.display: #KEY_TEXT
  PersonnelNumber,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Plant,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PostingKey,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PredecessorReferenceDocCntxt,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PredecessorReferenceDocItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PredecessorReferenceDocType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PredecessorReferenceDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProductGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'ProjectExternalID' 
  Project,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProjectInternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProjectExternalID,  
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProjectNetwork,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PurchasingDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PurchasingDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  QuantityIsIncomplete,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferenceDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferenceDocumentContext,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferenceDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferenceDocumentItemGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferenceDocumentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReferencePurchaseOrderCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  RelatedNetworkActivity,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReversalReferenceDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReversalReferenceDocumentCntxt,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDistrict,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrder,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrderItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SenderAccountAssignment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SenderAccountAssignmentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SenderGLAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ServicesRenderedDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SettlementReferenceDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ShipToParty,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldMaterial,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProductGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceLedger,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceLogicalSystem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceReferenceDocSubitem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceReferenceDocument,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceReferenceDocumentCntxt,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceReferenceDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SourceReferenceDocumentType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SpecialGLCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SuperiorOrder,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Supplier,
  @AnalyticsDetails.query.display: #KEY_TEXT
  TaxCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  TransactionTypeDetermination,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ValuationArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'WBSElementExternalID' 
  WBSElement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSElementInternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSElementExternalID,  
  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSIsStatisticalWBSElement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WorkCenterInternalID,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WorkItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WorkPackage,













  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Amounts
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  @Semantics.currencyCode:true
  GlobalCurrency,
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
  AmountInGlobalCurrency,
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
  InvertedAmountInGlobalCurrency,

  //--------------------------------------------------------------------------------
  // Liquidity
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Working Capital
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'WorkingCapitalRatioGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.CurrentAssetAmtInGlobCrcy - $projection.CurrentLiabilityAmtInGlobCrcy'
  @EndUserText.label: 'Working Capital Amount in Global Crcy'
  cast(0 as fis_wrkcptlamt_ksl)
                                                                                                                                                                              as WorkingCapitalAmtInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnWorkingCapitalRatioGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnCurrentAssetAmtInGlobCrcy - $projection.PlnCurrentLbltyAmtInGlobCrcy'
  @EndUserText.label: 'Plnd Working Capital Amount in Global Crcy'
  cast(0 as fis_wrkcptlamt_ksl_p)                                                                                                                                             as PlnWorkingCapitalAmtInGlobCrcy,

  //----------------------------------------
  // Working Capital Ratio
  @AnalyticsDetails.query.axis: #ROWS  
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.CurrentAssetAmtInGlobCrcy / $projection.CurrentLiabilityAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Working Capital Ratio Glob Crcy'
  cast(0 as fis_wrkcptlratio_ksl)                                                                                                                                             as WorkingCapitalRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnCurrentAssetAmtInGlobCrcy / $projection.PlnCurrentLbltyAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Working Capital Ratio Global Crcy'
  cast(0 as fis_wrkcptlratio_ksl_p)                                                                                                                                           as PlnWorkingCapitalRatioGlobCrcy,

  //----------------------------------------
  // Current Assets
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'WorkingCapitalAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Current Assets in Global Crcy'
  cast (case when ( SemanticTag = 'CURASSET' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_curast_ksl preserving type )                         as CurrentAssetAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnWorkingCapitalAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Current Assets in Global Crcy'
  cast ( case when ( SemanticTag = 'CURASSET' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_curast_ksl_p preserving type ) as PlnCurrentAssetAmtInGlobCrcy,

  //----------------------------------------
  // Current Liability and Equity
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'WorkingCapitalAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Current Liabilities in Global Crcy'
  cast ( case when ( SemanticTag = 'CURLIABEQU' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_curlbty_ksl preserving type )            as CurrentLiabilityAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnWorkingCapitalAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Current Liabilities in Global Crcy'
  cast (case when ( SemanticTag = 'CURLIABEQU' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_curlbty_ksl_p preserving type ) as PlnCurrentLbltyAmtInGlobCrcy,

  //----------------------------------------
  // Share Holders Equity
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'ReturnOnEquityRatioGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.AssetAmtInGlobCrcy - $projection.LiabilityEquityAmtInGlobCrcy'
  @EndUserText.label: 'Shareholders Equity in Global Crcy'
  cast(0 as fis_sheqtyamt_ksl)                                                                                                                                                as ShEquityAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnReturnOnEquityRatioGlobCrcy'
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnAssetAmtInGlobCrcy - $projection.PlnLbltyEquityAmtInGlobCrcy'
  @EndUserText.label: 'Plnd Shareholders Equity in Global Crcy'
  cast(0 as fis_sheqtyamt_ksl_p)                                                                                                                                              as PlnShEquityAmtInGlobCrcy,


  //----------------------------------------
  // Assets
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'ShEquityAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Assets in Global Crcy'
  cast ( case when ( SemanticTag = 'ASSET' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_asset_ksl preserving type )                              as AssetAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnShEquityAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Total Assets in Global Crcy'
  cast (case when ( SemanticTag = 'ASSET' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_asset_ksl_p preserving type )       as PlnAssetAmtInGlobCrcy,

  //----------------------------------------
  // Liability and Equity
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'ShEquityAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Liabilities and Equity in Global Crcy'
  cast (case when ( SemanticTag = 'LIAB_EQUIT' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_liab_equity_ksl preserving type )              as LiabilityEquityAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnShEquityAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Liabilities and Equity in Global Crcy'
  cast (case when ( SemanticTag = 'LIAB_EQUIT' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_liab_equity_ksl_p preserving type ) as PlnLbltyEquityAmtInGlobCrcy,


  //----------------------------------------
  // Operating Cash Flow
  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - $projection.TngblAstDeprAmtInGlobCrcy - $projection.IntngblAssetAmtznAmtInGlobCrcy - $projection.FxdAssetRtrmtAmtInGlobCrcy - $projection.ChgsProvisionAmtInGlobCrcy - $projection.ChgsInventoryAmtInGlobCrcy - $projection.ChgsAcctsRblAmtInGlobCrcy - $projection.ChgsAcctsOthRblAmtInGlobCrcy + $projection.ChgsAcctsPyblAmtInGlobCrcy + $projection.ChgsAcctsOthPyblAmtInGlobCrcy'
  @EndUserText.label: 'Operating Cash Flow Amount in Global Crcy'
  cast (0 as fis_cashopg_ksl)                                                                                                                                                 as OpgActyCashAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnNetIncomeAmtInGlobCrcy - $projection.PlnTngblAstDeprAmtInGlobCrcy - $projection.PlIntngblAstAmtznAmtInGlobCrcy - $projection.PlnFxdAssetRtrmtAmtInGlobCrcy - $projection.PlnChgsProvisionAmtInGlobCrcy - $projection.PlnChgsInventoryAmtInGlobCrcy - $projection.PlnChgsAcctsRblAmtInGlobCrcy - $projection.PlnChAcctsOthRblAmtInGlobCrcy + $projection.PlnChgsAcctsPyblAmtInGlobCrcy + $projection.PlnChAcctsOthPyblAmtInGlobCrcy'
  @EndUserText.label: 'Plnd Operating Cash Flow Amount in Global Crcy'
  cast (0 as fis_cashopg_ksl_p)                                                                                                                                               as PlnOpgActyCashAmtInGlobCrcy,



  //--------------------------------------------------------------------------------
  // Profitability
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Gross Margin
  @AnalyticsDetails.query.axis: #ROWS  
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.GrossProfitAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Gross Margin Ratio Glob Crcy'
  cast (0 as fis_grossmargin_ksl)                                                                                                                                             as GrossMarginRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnGrossProfitAmtInGlobCrcy / $projection.PlnRecgdRevenueAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Gross Margin Ratio Glob Crcy'
  cast (0 as fis_grossmargin_ksl_p)                                                                                                                                           as PlnGrossMarginRatioGlobCrcy,

  //----------------------------------------
  // Operating Margin (ROS)
  @AnalyticsDetails.query.axis: #ROWS  
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.OpgProfitAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Operating Margin Ratio Glob Crcy'
  cast (0 as fis_operatingmargin_ksl)                                                                                                                                         as OpgMargRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnOpgProfitAmtInGlobCrcy / $projection.PlnRecgdRevenueAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Operating Margin Ratio Glob Crcy'
  cast (0 as fis_operatingmargin_ksl_p)                                                                                                                                       as PlnOpgMargRatioGlobCrcy,

  //----------------------------------------
  // Profit Margin (Net Profit Margin)
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RetOnInvestmentRatioGlobCrcy'  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Profit Margin Ratio Glob Crcy'
  cast (0 as fis_profitmargin_ksl)                                                                                                                                            as ProfitMarginRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnRetOnInvmtRatioGlobCrcy'  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnNetIncomeAmtInGlobCrcy / $projection.PlnRecgdRevenueAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Profit Margin Ratio Glob Crcy'
  cast (0 as fis_profitmargin_ksl_p)                                                                                                                                          as PlnProfitMarginRatioGlobCrcy,

  //----------------------------------------
  // Return on Equity (ROE)
  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.ShEquityAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Return on Equity Ratio Glob Crcy'
  cast (0 as fis_returnonequity_ksl)                                                                                                                                          as ReturnOnEquityRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnNetIncomeAmtInGlobCrcy / $projection.PlnShEquityAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Return on Equity Ratio Glob Crcy'
  cast (0 as fis_returnonequity_ksl_p)                                                                                                                                        as PlnReturnOnEquityRatioGlobCrcy,

  //----------------------------------------
  // Return on Assets (ROA)
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RetOnInvestmentRatioGlobCrcy'  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.AssetAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Return on Assets Ratio Glob Crcy'
  cast (0 as fis_returnonasset_ksl)                                                                                                                                           as ReturnOnAssetRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnRetOnInvmtRatioGlobCrcy'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnNetIncomeAmtInGlobCrcy / $projection.PlnAssetAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Return on Assets Ratio Glob Crcy'
  cast (0 as fis_returnonasset_ksl_p)                                                                                                                                         as PlnReturnOnAssetRatioGlobCrcy,

  //----------------------------------------
  // Return of Investments (ROI)
  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.GrossProfitAmtInGlobCrcy / $projection.CostOfGoodsSoldAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Return on Investment Ratio Glob Crcy'
  cast (0 as fis_returnoninvest_ksl)                                                                                                                                          as RetOnInvestmentRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnGrossProfitAmtInGlobCrcy / $projection.PlnCostOfGdsSoldAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Return on Investment Ratio Glob Crcy'
  cast (0 as fis_returnoninvest_ksl_p)                                                                                                                                        as PlnRetOnInvmtRatioGlobCrcy,

  //----------------------------------------
  // Gross Profit
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'GrossMarginRatioGlobCrcy'
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedRevnAmtInGlobCrcy + $projection.CostOfGoodsSoldAmtInGlobCrcy'
  @EndUserText.label: 'Gross Profit Amt in Glob Crcy'
  cast (0 as fis_grossprofit_ksl)                                                                                                                                             as GrossProfitAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnGrossMarginRatioGlobCrcy'
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnRecgdRevenueAmtInGlobCrcy + $projection.PlnCostOfGdsSoldAmtInGlobCrcy'
  @EndUserText.label: 'Plnd Gross Profit Amt in Glob Crcy'
  cast (0 as fis_grossprofit_ksl_p)                                                                                                                                           as PlnGrossProfitAmtInGlobCrcy,

  //----------------------------------------
  // Operating Profit
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgMargRatioGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedRevnAmtInGlobCrcy + $projection.TotalOpgExpnInGlobCrcy'
  @EndUserText.label: 'Operating Profit Amt in Glob Crcy'
  cast (0 as fis_opgprofit_ksl)                                                                                                                                               as OpgProfitAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgMargRatioGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnRecgdRevenueAmtInGlobCrcy + $projection.PlnTotalOpgExpnInGlobCrcy'
  @EndUserText.label: 'Plnd Operating Profit Amt in Glob Crcy'
  cast (0 as fis_opgprofit_ksl_p)                                                                                                                                             as PlnOpgProfitAmtInGlobCrcy,


  //----------------------------------------
  // Cost of Goods Sold
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'TotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Cost Of Goods Sold Amount In Global Crcy'
  cast (case when ( SemanticTag = 'RECO_COS' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fins_cogs preserving type )                       as CostOfGoodsSoldAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnTotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Cost Of Goods Sold Amount In Global Crcy'
  cast (case when ( SemanticTag = 'RECO_COS' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_cogs_ksl_p preserving type ) as PlnCostOfGdsSoldAmtInGlobCrcy,

  //----------------------------------------
  // Gross Revenue
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'GrossMarginRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Gross Revenue Amount in Global Crcy'
  cast (case when ( SemanticTag = 'GROSS_REV' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_gross_rev_ksl preserving type )              as GrossRevenueAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnGrossMarginRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Gross Revenue Amount in Global Crcy'
  cast (case when ( SemanticTag = 'GROSS_REV' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_gross_rev_ksl_p preserving type ) as PlnGrossRevenueAmtInGlobCrcy,

  //----------------------------------------
  // Net Revenue / Net Sales / Recognized Revenue
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgProfitAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Recognized Revenue Amount In Global Crcy'
  cast (case when ( SemanticTag = 'RECO_REV' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fins_trr_recrevn preserving type )               as RecognizedRevnAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgProfitAmtInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Recognized Revenue Amount In Global Crcy'
  cast (case when ( SemanticTag = 'RECO_REV' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_reco_rev_ksl_p preserving type ) as PlnRecgdRevenueAmtInGlobCrcy,

  //--------------------------------------------------------------------------------
  // Efficiency
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Asset Turnover
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RetOnInvestmentRatioGlobCrcy'  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.RecognizedRevnAmtInGlobCrcy / $projection.AssetAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Asset Turnover Ratio Glob Crcy'
  cast (0 as fis_assetturnover_ksl)                                                                                                                                           as AssetTurnoverRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnRetOnInvmtRatioGlobCrcy'  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.PlnRecgdRevenueAmtInGlobCrcy / $projection.PlnAssetAmtInGlobCrcy) * 100'
  @EndUserText.label: 'Plnd Asset Turnover Ratio Glob Crcy'
  cast (0 as fis_assetturnover_ksl_p)                                                                                                                                         as PlnAssetTurnoverRatioGlobCrcy,

  //----------------------------------------
  // Inventory Turnover
  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.RecognizedRevnAmtInGlobCrcy / (( $projection.StrtgInventoryAmtInGlobCrcy + $projection.InventoryAmtInGlobCrcy ) / 2) ) * 100'
  @EndUserText.label: 'Inventory Turnover Ratio Glob Crcy'
  cast (0 as fis_invtryturnover_ksl)                                                                                                                                          as InvtryTurnoverRatioGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.PlnRecgdRevenueAmtInGlobCrcy / (( $projection.PlnStrtgInventoryAmtInGlobCrcy + $projection.PlnInventoryAmtInGlobCrcy ) / 2) ) * 100'
  @EndUserText.label: 'Plnd Inventory Turnover Ratio Glob Crcy'
  cast (0 as fis_invtryturnover_ksl_p)                                                                                                                                        as PlnInvtryTurnoverRatioGlobCrcy,

  //--------------------------------------------------------------------------------
  // Equity Structure
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // EBT (Earnings before Taxes)
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBITAmountInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - $projection.IncomeTaxAmtInGlobCrcy'
  @EndUserText.label: 'EBT Amt in Glob Crcy'
  cast (0 as fis_ebt_ksl)                                                                                                                                                     as EBTAmountInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBITAmountInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnNetIncomeAmtInGlobCrcy - $projection.PlnIncomeTaxAmtInGlobCrcy'
  @EndUserText.label: 'Plnd EBT Amt in Glob Crcy'
  cast (0 as fis_ebt_ksl_p)                                                                                                                                                   as PlnEBTAmountInGlobCrcy,

  //----------------------------------------
  // EBIT (Earnings before Interest and Taxes)
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBITDAAmountInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - ( $projection.IncomeTaxAmtInGlobCrcy + $projection.InterestAmtInGlobCrcy )'
  @EndUserText.label: 'EBIT Amt in Glob Crcy'
  cast (0 as fis_ebit_ksl)                                                                                                                                                    as EBITAmountInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBITDAAmountInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnNetIncomeAmtInGlobCrcy - ( $projection.PlnIncomeTaxAmtInGlobCrcy + $projection.PlnInterestAmtInGlobCrcy )'
  @EndUserText.label: 'Plnd EBIT Amt in Glob Crcy'
  cast (0 as fis_ebit_ksl_p)                                                                                                                                                  as PlnEBITAmountInGlobCrcy,

  //----------------------------------------
  // EBITDA ( Earnings before Interest, Taxes, Depreciation and Amortization)
  @AnalyticsDetails.query.axis: #ROWS  
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - ( $projection.IncomeTaxAmtInGlobCrcy + $projection.InterestAmtInGlobCrcy + $projection.TngblAstDeprAmtInGlobCrcy + $projection.IntngblAssetAmtznAmtInGlobCrcy )'
  @EndUserText.label: 'EBITDA Amt in Glob Crcy'
  cast (0 as fis_ebitda_ksl)                                                                                                                                                  as EBITDAAmountInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  Root node: @AnalyticsDetails.query.elementHierarchy.parent: '' 
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnNetIncomeAmtInGlobCrcy - ( $projection.PlnIncomeTaxAmtInGlobCrcy + $projection.PlnInterestAmtInGlobCrcy + $projection.PlnTngblAstDeprAmtInGlobCrcy + $projection.PlIntngblAstAmtznAmtInGlobCrcy )'
  @EndUserText.label: 'Plnd EBITDA Amt in Glob Crcy'
  cast (0 as fis_ebitda_ksl_p)                                                                                                                                                as PlnEBITDAAmountInGlobCrcy,


  //----------------------------------------
  // Net Income Including all Accounts
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBTAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Net Profit Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'PL_RESULT' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_netincome_ksl preserving type )             as NetIncomeAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBTAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Net Profit Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'PL_RESULT' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_netincome_ksl_p preserving type ) as PlnNetIncomeAmtInGlobCrcy,

  //----------------------------------------
  // Total Operating Expense
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgProfitAmtInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.CostOfGoodsSoldAmtInGlobCrcy + $projection.OpgExpnInGlobCrcy'
  @EndUserText.label: 'Total Operating Expense Amt in Glob Crcy'
  cast (0 as fis_toperexp_ksl)                                                                                                                                                as TotalOpgExpnInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgProfitAmtInGlobCrcy'  
//  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlnCostOfGdsSoldAmtInGlobCrcy + $projection.PlnOpgExpnInGlobCrcy'
  @EndUserText.label: 'Plnd Total Operating Expense Amt in Glob Crcy'
  cast (0 as fis_toperexp_ksl_p)                                                                                                                                              as PlnTotalOpgExpnInGlobCrcy,

  //----------------------------------------
  // Operating Expense
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'TotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Operating Expense Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'OPEREXP' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_operexp_ksl preserving type )                  as OpgExpnInGlobCrcy,
  
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnTotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Operating Expense Amt in Glob Crcy   '
  cast (case when ( SemanticTag = 'OPEREXP' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_operexp_ksl_p preserving type ) as PlnOpgExpnInGlobCrcy,

  //----------------------------------------
  // Other Operating Expense
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'TotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Other Operating Expense Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'OOPEREXP' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_ooperexp_ksl preserving type )               as OthOpgExpnInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnTotalOpgExpnInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Other Operating Expense Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'OOPEREXP' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_ooperexp_ksl_p preserving type ) as PlnOthOpgExpnInGlobCrcy,

  //----------------------------------------
  // Starting Inventories
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'InvtryTurnoverRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Starting Inventory Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod = '000') then AmountInGlobalCurrency end as fis_strtginventory_ksl preserving type ) as StrtgInventoryAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnInvtryTurnoverRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Starting Inventory Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod = '000') then AmountInGlobalCurrency end as fis_strtginventory_ksl_p preserving type ) as PlnStrtgInventoryAmtInGlobCrcy,

  //----------------------------------------
  // Inventories Changes
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy' 
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Inventory Changes Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsinventory_ksl preserving type ) as ChgsInventoryAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy' 
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Inventory Changes Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsinventory_ksl_p preserving type ) as PlnChgsInventoryAmtInGlobCrcy,

  //----------------------------------------
  // Inventories
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'InvtryTurnoverRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Inventories Amount in Global Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = 'ACT01' ) then AmountInGlobalCurrency end as fis_inventory_ksl preserving type ) as InventoryAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnInvtryTurnoverRatioGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Inventories Amount in Global Crcy'
  cast (case when ( SemanticTag = 'Inventory' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then AmountInGlobalCurrency end as fis_inventory_ksl_p preserving type ) as PlnInventoryAmtInGlobCrcy,

  //----------------------------------------
  // Income Tax
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBTAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Income Tax Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'INCOMETAX' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_incometax_ksl preserving type ) as IncomeTaxAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBTAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Income Tax Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'INCOMETAX' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_incometax_ksl_p preserving type ) as PlnIncomeTaxAmtInGlobCrcy,

  //----------------------------------------
  // Interest
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBITAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Interest Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'INTEREST' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_interest_ksl preserving type ) as InterestAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBITAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Interest Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'INTEREST' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_interest_ksl_p preserving type ) as PlnInterestAmtInGlobCrcy,

  //----------------------------------------
  // Depreciation of Tangible Assets
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBITDAAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Depreciation of Tangible Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'DprTAsset' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_tangassets_ksl preserving type ) as TngblAstDeprAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBITDAAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Depreciation of Tangible Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'DprTAsset' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_tangassets_ksl_p preserving type ) as PlnTngblAstDeprAmtInGlobCrcy,

  //----------------------------------------
  // Amortization of Intangible Assets
  @AnalyticsDetails.query.axis: #ROWS  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'EBITDAAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Amortization of Intangible Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'AmorInAsst' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_itangasset_ksl preserving type ) as IntngblAssetAmtznAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnEBITDAAmountInGlobCrcy'  
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Amortization of Intangible Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'AmorInAsst' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_itangasset_ksl_p preserving type ) as PlIntngblAstAmtznAmtInGlobCrcy,

  //----------------------------------------
  // Gain/Loss from Retirement of Fixed Assets
  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Retirement of Fixed Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'ChgFARet' ) and ( PlanningCategory = 'ACT01' ) then InvertedAmountInGlobalCurrency end as fis_chgfaret_ksl preserving type ) as FxdAssetRtrmtAmtInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plnd Retirement of Fixed Assets Amt in Glob Crcy'
  cast (case when ( SemanticTag = 'ChgFARet' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) then InvertedAmountInGlobalCurrency end as fis_chgfaret_ksl_p preserving type ) as PlnFxdAssetRtrmtAmtInGlobCrcy,

  //----------------------------------------
  // Provisions Changes
  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Provisions Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'Provisions' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsprovision_ksl preserving type ) as ChgsProvisionAmtInGlobCrcy,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Plnd Provisions Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'Provisions' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsprovision_ksl_p preserving type ) as PlnChgsProvisionAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Receivable (Net)
  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Receivables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccRec' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_ksl preserving type ) as ChgsAcctsRblAmtInGlobCrcy,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Plnd Receivables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccRec' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_ksl_p preserving type ) as PlnChgsAcctsRblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Other Receivable
  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Other Receivables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccRec_Oth' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_oth_ksl preserving type ) as ChgsAcctsOthRblAmtInGlobCrcy,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Plnd Other Receivables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccRec_Oth' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_oth_ksl_p preserving type ) as PlnChAcctsOthRblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Payable
  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Payables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccPay' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_ksl preserving type ) as ChgsAcctsPyblAmtInGlobCrcy,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Plnd Payables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccPay' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_ksl_p preserving type ) as PlnChgsAcctsPyblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Other Payables
  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'OpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Other Payables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccPay_Oth' ) and ( PlanningCategory = 'ACT01' ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_oth_ksl preserving type ) as ChgsAcctsOthPyblAmtInGlobCrcy,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlnOpgActyCashAmtInGlobCrcy'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Plnd Other Payables Amt Changes in Glob Crcy'
  cast (case when ( SemanticTag = 'AccPay_Oth' ) and ( PlanningCategory = $parameters.P_PlanningCategory ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_oth_ksl_p preserving type ) as PlnChAcctsOthPyblAmtInGlobCrcy


}
where
  (
       PlanningCategory = 'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  )
  and
  (
      FiscalPeriod <= $parameters.P_ToFiscalPeriod
  )
```
