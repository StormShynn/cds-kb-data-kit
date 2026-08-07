---
name: I_ACTLPLNLINEITEMSEMTAGGLACCT
description: This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNLINEITEMSEMTAGGLACCT')/$value
semantic_en: This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?
keywords:
  - Actual and Plan Line Item with Semantic Tag
  - Actual and Plan Line Item with Semantic Tag
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_ACTLPLNLINEITEMSEMTAGGLACCT

**This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNLINEITEMSEMTAGGLACCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
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
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Lot-Size-Independent Indicator |
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
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `InvertedAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `InvertedAmtInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Inverted Amount in Free Defined Currency |
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
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Amount in Global Currency |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Amount in Global Currency |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Total Price Variance in Global Currency |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Total Price Variance in Global Currency |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Total Price Variance in Global Cur. |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Price Variance in Global Currency |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Price Variance in Global Currency |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Price Variance in Global Cur. |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in Object Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
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
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
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
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ActlAssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Asset Amount In Company Code Currency |
| `ActlLbltyEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Liabilities and Equity Amount In CompanyCode Currency |
| `ActlNotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Not Assigned Amount In Company Code Currency |
| `ActlNetRsltAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Net Result Amount In CompanyCodeCurrency |
| `ActlPnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual P&L Result Amount In company code currency |
| `ActlGLAcctNetIncAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Net Income Amount In Company Code Currency |
| `PlnAssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Asset Amount In CompanyCode Currency |
| `PlnLbltyEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Liabilities and Equity Amount In Company Code Currency |
| `PlnNotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Not Assigned Amount In Company Code Currency |
| `PlnNetRsltAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Result Amount In Company Code Currency |
| `PlnPnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan P&L Result Amount In company code currency |
| `PlnGLAcctNetIncAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Income Amount In CompanyCode Currency |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
