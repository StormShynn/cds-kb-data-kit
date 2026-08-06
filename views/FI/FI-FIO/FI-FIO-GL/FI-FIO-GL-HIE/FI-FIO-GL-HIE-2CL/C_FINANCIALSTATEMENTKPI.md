---
name: C_FINANCIALSTATEMENTKPI
description: This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value
semantic_en: This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group
keywords:
  - KPIs based on Financial Statements
  - KPIs based on Financial Statements
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
  - metadata-only
---
# C_FINANCIALSTATEMENTKPI

**This CDS View provides you with access to a variety of financial statement-based measures that can be analyzed by all details of a journal entry. This view is based on the CDS Cube ViewI_ActualPlanLineItemSemTag, which combines actual and plan data and enriches the data with semantic tags. The measures are used to calculate financial statement-based KPIs based on the semantic tags that are assigned. The calculation of these KPIs is purely based on the aggregation of line items that are enriched by semantic tags. This CDS view provides you with the information that you need to answer the following business questions: What is my Return on Investment per Segment? What are my Cost of Goods sold per Product Group**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATEMENTKPI')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `Assembly` | `CHAR(40)` | Assembly |
| `AssetAcctTransClassfctn` | `CHAR(2)` | Transaction Type Category |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `BusinessProcess` | `CHAR(12)` | Business Process |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ConditionContract` | `CHAR(10)` | Condition Contract |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingDebitCreditCode` | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectClass` | `CHAR(2)` | Controlling Object Class |
| `ControllingObjectDebitType` | `NUMC(1)` | Controlling Object Debit Type |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `CostEstimate` | `NUMC(12)` | Cost Estimate |
| `CostObject` | `CHAR(12)` | Cost Object |
| `CostOriginGroup` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CreationDate` | `DATS(8)` | Creation Date |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerServiceNotification` | `CHAR(12)` | Customer Service Notification |
| `CustomerSupplierCorporateGroup` | `CHAR(10)` | Customer Supplier Corporate Group |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DepreciationFiscalPeriod` | `NUMC(3)` | Fiscal Period of Depreciation |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `EliminationProfitCenter` | `CHAR(10)` | Elimination Profit Center |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `FollowOnDocumentType` | `CHAR(1)` | Follow-On Document Type |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `Fund` | `CHAR(10)` | Fund |
| `FundedProgram` | `CHAR(24)` | Funded Program |
| `FundsCenter` | `CHAR(16)` | Funds Management Center |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` | `CHAR(20)` | Grant |
| `GroupFixedAsset` | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` | `CHAR(12)` | Group Asset |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` | `CHAR(5)` | House Bank Account |
| `InventorySpclStkSalesDocItm` | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStockWBSElement` | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntIntID` | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `InventorySpecialStockSupplier` | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventorySpecialStockType` | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpecialStockValnType` | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `IsLotSizeIndependent` | `CHAR(1)` | Lot-Size-Independent Indicator |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalOrder` | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalSalesDocument` | `CHAR(1)` | Sales Document is statistical |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityGroup` | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureEquityType` | `CHAR(3)` | Joint Venture Equity Type |
| `LastChangeDateTime` | `DEC(15)` | Last Change Date Time |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LineItemIsCompleted` | `CHAR(1)` | Indicator: Line Item is Completed |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `MaintenanceActivityType` | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderIsPlanned` | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriority` | `CHAR(1)` | Priority |
| `MaintPriorityType` | `CHAR(2)` | Priority Type |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group (Deprecated) |
| `OffsettingAccount` | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` | `CHAR(1)` | Offsetting Account Type |
| `OperatingConcern` | `CHAR(4)` | Operating Concern |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderItem` | `NUMC(4)` | Number of Order Item |
| `OrderOperation` | `CHAR(4)` | Order Operation |
| `OrderSuboperation` | `CHAR(4)` | Order Suboperation |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginObjectType` | `NUMC(2)` | Type of Origin Object |
| `OriginSenderObject` | `CHAR(22)` | Origin Sender Object |
| `PartnerAccountAssignment` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessProcess` | `CHAR(12)` | Partner Business Process |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostObject` | `CHAR(12)` | Partner Cost Object |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerOrder` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` | `NUMC(2)` | Partner Order Category |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `PartnerProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectNetwork` | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` | `CHAR(4)` | Partner Project Network Activity |
| `PartnerSalesDocument` | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `Plant` | `CHAR(4)` | Plant |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `PredecessorReferenceDocCntxt` | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` | `CHAR(10)` | Predecessor Reference Document |
| `ProductGroup` | `CHAR(9)` | Product Group for Maintenance Orders |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Project` | `CHAR(24)` | Project |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `QuantityIsIncomplete` | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferencePurchaseOrderCategory` | `NUMC(3)` | Category of Reference Purchase Order |
| `RelatedNetworkActivity` | `CHAR(4)` | Related Network Activity |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal Reference Document Context |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SenderAccountAssignment` | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderGLAccount` | `CHAR(10)` | Sender G/L Account |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `SettlementReferenceDate` | `DATS(8)` | Settlement Reference Date |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `SourceLogicalSystem` | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocSubitem` | `NUMC(6)` | Source Reference Document Subitem |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentCntxt` | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Reference Document Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `SuperiorOrder` | `CHAR(12)` | Number of Superior Order |
| `Supplier` | `CHAR(10)` | Supplier |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of the resource |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `WorkPackage` | `CHAR(50)` | Plan Item |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` | `CURR(23)` | Inverted Amount in Global Currency |
| `WorkingCapitalAmtInGlobCrcy` | `CURR(23)` | Working Capital Amount in Global Currency |
| `PlnWorkingCapitalAmtInGlobCrcy` | `CURR(23)` | Planned Working Capital Amount in Global Currency |
| `WorkingCapitalRatioGlobCrcy` | `DEC(10)` | Working Capital Global Currency Percent |
| `PlnWorkingCapitalRatioGlobCrcy` | `DEC(10)` | Planned Working Capital Ratio Global Currency |
| `CurrentAssetAmtInGlobCrcy` | `CURR(23)` | Current Asset Amount In Global Currency |
| `PlnCurrentAssetAmtInGlobCrcy` | `CURR(23)` | Planned Current Assets in Global Currency |
| `CurrentLiabilityAmtInGlobCrcy` | `CURR(23)` | Current Liability Amount in Global Currency |
| `PlnCurrentLbltyAmtInGlobCrcy` | `CURR(23)` | Planned Current Liabilities in Global Currency |
| `ShEquityAmtInGlobCrcy` | `CURR(23)` | Shareholder Equity Amount In Global Currency |
| `PlnShEquityAmtInGlobCrcy` | `CURR(23)` | Shareholders Equity in Global Currency |
| `AssetAmtInGlobCrcy` | `CURR(23)` | Asset Amount in Global Currency |
| `PlnAssetAmtInGlobCrcy` | `CURR(23)` | Planned Total Assets in Global Currency |
| `LiabilityEquityAmtInGlobCrcy` | `CURR(23)` | Liability and Equity Amount In Global Currency |
| `PlnLbltyEquityAmtInGlobCrcy` | `CURR(23)` | Planned Liabilities and Equity in Global Currency |
| `OpgActyCashAmtInGlobCrcy` | `CURR(23)` | Operating Cash Flow Amount in Global Currency |
| `PlnOpgActyCashAmtInGlobCrcy` | `CURR(23)` | Planned Operating Cash Flow Amount in Global Currency |
| `GrossMarginRatioGlobCrcy` | `DEC(23)` | Gross Margin Global Currency Percent |
| `PlnGrossMarginRatioGlobCrcy` | `DEC(23)` | Planned Gross Margin Ratio Global Currency |
| `OpgMargRatioGlobCrcy` | `DEC(23)` | Operating Margin Global Currency Percent |
| `PlnOpgMargRatioGlobCrcy` | `DEC(23)` | Planned Operating Margin Ratio Global Currency |
| `ProfitMarginRatioGlobCrcy` | `DEC(23)` | Profit Margin Global Currency Percent |
| `PlnProfitMarginRatioGlobCrcy` | `DEC(23)` | Planned Profit Margin Ratio Global Currency |
| `ReturnOnEquityRatioGlobCrcy` | `DEC(23)` | Return on Equity Global Currency Percent |
| `PlnReturnOnEquityRatioGlobCrcy` | `DEC(23)` | Planned Return on Equity Ratio Global Currency |
| `ReturnOnAssetRatioGlobCrcy` | `DEC(23)` | Return on Asset Global Currency Percent |
| `PlnReturnOnAssetRatioGlobCrcy` | `DEC(23)` | Planned Return on Assets Ratio Global Currency |
| `RetOnInvestmentRatioGlobCrcy` | `DEC(23)` | Return on Investment Global Currency Percent |
| `PlnRetOnInvmtRatioGlobCrcy` | `DEC(23)` | Planned Return on Investment Ratio Global Currency |
| `GrossProfitAmtInGlobCrcy` | `CURR(23)` | Gross Profit Amount in Global Currency |
| `PlnGrossProfitAmtInGlobCrcy` | `CURR(23)` | Planned Gross Profit Amount in Global Currency |
| `OpgProfitAmtInGlobCrcy` | `CURR(23)` | Operating Profit Amount in Global Currency |
| `PlnOpgProfitAmtInGlobCrcy` | `CURR(23)` | Planned Operating Profit Amount in Global Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Total |
| `PlnCostOfGdsSoldAmtInGlobCrcy` | `CURR(23)` | Planned Cost of Goods Sold Amount In Global Currency |
| `GrossRevenueAmtInGlobCrcy` | `CURR(23)` | Gross Revenue Amount in Global Currency |
| `PlnGrossRevenueAmtInGlobCrcy` | `CURR(23)` | Planned Gross Revenue Amount in Global Currency |
| `RecognizedRevnAmtInGlobCrcy` | `CURR(23)` | Recognized Revenue |
| `PlnRecgdRevenueAmtInGlobCrcy` | `CURR(23)` | Planned Recognized Revenue Amount In Global Currency |
| `AssetTurnoverRatioGlobCrcy` | `DEC(23)` | Asset Turnover Global Currency Percent |
| `PlnAssetTurnoverRatioGlobCrcy` | `DEC(23)` | Planned Asset Turnover Ratio Global Currency |
| `InvtryTurnoverRatioGlobCrcy` | `DEC(23)` | Inventory Turnover Global Currency Percent |
| `PlnInvtryTurnoverRatioGlobCrcy` | `DEC(23)` | Planned Inventory Turnover Ratio Global Currency |
| `EBTAmountInGlobCrcy` | `CURR(23)` | EBT Amount in Global Currency |
| `PlnEBTAmountInGlobCrcy` | `CURR(23)` | Planned EBT Amount in Global Currency |
| `EBITAmountInGlobCrcy` | `CURR(23)` | EBIT Amount in Global Currency |
| `PlnEBITAmountInGlobCrcy` | `CURR(23)` | Planned EBIT Amount in Global Currency |
| `EBITDAAmountInGlobCrcy` | `CURR(23)` | EBITDA Amount in Global Currency |
| `PlnEBITDAAmountInGlobCrcy` | `CURR(23)` | Planned EBITDA Amount in Global Currency |
| `NetIncomeAmtInGlobCrcy` | `CURR(23)` | Net Income Amount in Global Currency |
| `PlnNetIncomeAmtInGlobCrcy` | `CURR(23)` | Planned Net Profit Amount in Global Currency |
| `TotalOpgExpnInGlobCrcy` | `CURR(23)` | Total Operating Expense Amount in Global Currency |
| `PlnTotalOpgExpnInGlobCrcy` | `CURR(23)` | Planned Total Operating Expense Amount in Global Currency |
| `OpgExpnInGlobCrcy` | `CURR(23)` | Operating Expense Amount in Global Currency |
| `PlnOpgExpnInGlobCrcy` | `CURR(23)` | Planned Operating Expense Amount in Global Currency |
| `OthOpgExpnInGlobCrcy` | `CURR(23)` | Other Operating Expense Amount in Global Currency |
| `PlnOthOpgExpnInGlobCrcy` | `CURR(23)` | Planned Other Operating Expense Amount in Global Currency |
| `StrtgInventoryAmtInGlobCrcy` | `CURR(23)` | Starting Inventory Amount in Global Currency |
| `PlnStrtgInventoryAmtInGlobCrcy` | `CURR(23)` | Planned Starting Inventory Amount in Global Currency |
| `ChgsInventoryAmtInGlobCrcy` | `CURR(23)` | Changes of Inventory Amount in Global Currency |
| `PlnChgsInventoryAmtInGlobCrcy` | `CURR(23)` | Planned Inventory Changes Amount in Global Currency |
| `InventoryAmtInGlobCrcy` | `CURR(23)` | Inventory Amount in Global Currency |
| `PlnInventoryAmtInGlobCrcy` | `CURR(23)` | Planned Inventories Amount in Global Currency |
| `IncomeTaxAmtInGlobCrcy` | `CURR(23)` | Income Tax Amount in Global Currency |
| `PlnIncomeTaxAmtInGlobCrcy` | `CURR(23)` | Planned Income Tax Amount in Global Currency |
| `InterestAmtInGlobCrcy` | `CURR(23)` | Interest Amount in Global Currency |
| `PlnInterestAmtInGlobCrcy` | `CURR(23)` | Planned Interest Amount in Global Currency |
| `TngblAstDeprAmtInGlobCrcy` | `CURR(23)` | Tangible Asset Depreciation Amount in Global Currency |
| `PlnTngblAstDeprAmtInGlobCrcy` | `CURR(23)` | Planned Depreciation of Tangible Assets Amt in Glob Crcy |
| `IntngblAssetAmtznAmtInGlobCrcy` | `CURR(23)` | Intangible Asset Amortization Amount in Global Currency |
| `PlIntngblAstAmtznAmtInGlobCrcy` | `CURR(23)` | Planned Amortization of Intangible Assets Amt in Glob Crcy |
| `FxdAssetRtrmtAmtInGlobCrcy` | `CURR(23)` | Fixed Asset Retirement Amount in Global Currency |
| `PlnFxdAssetRtrmtAmtInGlobCrcy` | `CURR(23)` | Planned Retirement of Fixed Assets Amount in Global Currency |
| `ChgsProvisionAmtInGlobCrcy` | `CURR(23)` | Changes Provision Amount in Global Currency |
| `PlnChgsProvisionAmtInGlobCrcy` | `CURR(23)` | Planned Provisions Amount Changes in Global Currency |
| `ChgsAcctsRblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Receivable Amount in Global Currency |
| `PlnChgsAcctsRblAmtInGlobCrcy` | `CURR(23)` | Planned Receivables Amount Changes in Global Currency |
| `ChgsAcctsOthRblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Other Receivable Amount in Global Crcy |
| `PlnChAcctsOthRblAmtInGlobCrcy` | `CURR(23)` | Planned Other Receivables Amount Changes in Global Currency |
| `ChgsAcctsPyblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Payable Amount in Global Currency |
| `PlnChgsAcctsPyblAmtInGlobCrcy` | `CURR(23)` | Planned Payables Amount Changes in Global Currency |
| `ChgsAcctsOthPyblAmtInGlobCrcy` | `CURR(23)` | Changes of Accounts Other Payable Amount in Global Crcy |
| `PlnChAcctsOthPyblAmtInGlobCrcy` | `CURR(23)` | Planned Other Payables Amount Changes in Global Currency |
