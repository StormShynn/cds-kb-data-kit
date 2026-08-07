---
name: I_ACTUALPLANLINEITEMSEMTAG
description: "This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANLINEITEMSEMTAG')/$value
semantic_en: "This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?"
semantic_vi: "Actual and Plan Line Item with Semantic Tag Including FA — CDS view giao diện dựa trên P_Actualplanlineitemsemtag."
keywords:
  - "Actual and Plan Line Item with Semantic Tag Including FA"
  - "actual"
  - "and"
  - "plan"
  - "line"
  - "item"
  - "with"
  - "semantic"
  - "tag"
  - "including"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
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
---
# I_ACTUALPLANLINEITEMSEMTAG

**This CDS view contains details for journal entries, such as G/L accounts, company code, cost center, or profit center. Most importantly, this view contains both actual and planned KPI amounts based on the corresponding semantic tags. This CDS view provides the prerequisites for answering the following business questions: What are the plan and actual values for KPIs based on semantic tags?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANLINEITEMSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | ✓ | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
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
| `InvertedAmtInCoCodeCurrency` |  | |  | `cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` |  | |  | `cast(( AmountInGlobalCurrency * -1 ) as fis_ksl_inverted)` | `CURR(23)` | Inverted Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `InvertedAmtInFreeDefinedCrcy1` |  | |  | `cast(( AmountInFreeDefinedCurrency1 * -1 ) as fis_osl_inverted)` | `CURR(23)` | Inverted Amount in Free Defined Currency |
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
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
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
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
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
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
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
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
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
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ActualRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Revenue Amount in Company Code Currency |
| `ActlGrossRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Gross Revenue Amount in Company Code Currency |
| `ActlRecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Recognized Revenue Amount in Company Code Currency |
| `ActlRecgdRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Recognized Revenue Amount In Global Currency |
| `ActlRevnAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Revenue Adjustment Amount in Company Code Currency |
| `ActlDeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Deferred Revenue Amount in Company Code Currency |
| `ActlAccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accrued Revenue Amount in Company Code Currency |
| `ActlBilledRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Billed Revenue Amount In Company Code Currency |
| `ActlBilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Billed Revenue Amt In Global Currency |
| `ActlRecognizedMargAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Recognized Margin Amount in Company Code Currency |
| `ActualCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost Amount in Company Code Currency |
| `ActlCostOfGdsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Cost Of Goods Sold Amount In Global Currency |
| `ActlRecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Recognized Cost Of Goods Sold Amount In CC Currency |
| `ActlCOGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost Of Goods Sold Adjustment Amount In CC Currency |
| `ActlDeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Defferred Cost Of Goods Sold Amount In CC Currency |
| `ActlAccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accrued Cost Of Sold Goods Amount in CC currency |
| `ActlRecgblCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Recognizable Cost Amount in Company Code Currency |
| `ActlImmntLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Reserves for Imminent Loss Amount in CC Currency |
| `ActlSalesDeductRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Reserve for Anticipated Sales Deductions Amt InCCCrcy |
| `ActlUnrlzdCostsRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Reserves for Unrealized Costs Amt in CompanyCode Crcy |
| `ActlSlsDeductionAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Sales Deduction Amount In Global Currency |
| `ActlSlsDeductionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Sales Deduction Amount In Company Currency |
| `ActlPrcDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Price Differences Amount In Global Currency |
| `ActlAdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Administration Overhead Amount in Global Currency |
| `ActlSalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Sales Overhead Amount in Global Currency |
| `ActlMarketingOvhdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Marketing Overhead Amount in Global Currency |
| `ActlRnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Research and Development Overhead Amt in Global Crcy |
| `ActlLongTermInvmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Long-term Investments Amount in Company Code Currency |
| `ActlAcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accounts Receivable Amount in Company Code currency |
| `ActlAcctsOthRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accounts Other Receivable Amt In CompanyCode Currency |
| `ActlAcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accounts Payable Amount InCompanyCodeCurrency |
| `ActlAcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Accounts Other Payable Amount In CompanyCode Currency |
| `ActlProvisionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Provision Amount In CompanyCode Currency |
| `ActlNotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Notes Receivable Amount In CompanyCode Currency |
| `ActlTangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Depreciation of Tangible Assets Amount In CC Currency |
| `ActlIntngblAstAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Intangible Assets Amortization Amt in Co Code Crcy |
| `ActlTangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Tangible Asset Amount InCompanyCodeCurrency |
| `ActlIntangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Intangible Asset Amount InCompanyCodeCurrency |
| `ActlFxdAstRtrmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Investing Fixed Asset Retirement Amt In CC Currency |
| `ActlInventoryAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Inventory Amount In CompanyCode Currency |
| `ActlCommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Common Stocks Amount in Company Code Currency |
| `ActlCshAndCshEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cash And Cash Equivalent Amount InCompanyCodeCurrency |
| `ActlAssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Asset Amount In Company Code Currency |
| `ActlLbltyEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Liabilities and Equity Amount In CompanyCode Currency |
| `ActlNotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Not Assigned Amount In Company Code Currency |
| `ActlNetRsltAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Net Result Amount In CompanyCodeCurrency |
| `ActlPnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual P&L Result Amount In company code currency |
| `ActlGLAcctNetIncAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Net Income Amount In Company Code Currency |
| `ActlOpgActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Operating Activity Cash Amount InCompanyCodeCurrency |
| `ActlInvstgActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Investing Activity Cash Amount In CompanyCodeCurrency |
| `ActlFinActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Financing Activity Cash Amount InCompanyCodeCurrency |
| `ActlNetCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Net Cash Amount In CompanyCode Currency |
| `PlnRevenueAmountInCCCrcy` |  | |  |  | `CURR(23)` | Plan Revenue Amount in Company Code Currency |
| `PlnGrossRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Gross Revenue Amount in Company Code Currency |
| `PlnRecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Revenue Amount in Company Code Currency |
| `PlnRecgdRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Planned Recognized Revenue Amount In Global Currency |
| `PlnRevnAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Revenue Adjustment Amount in Company Code Currency |
| `PlnDeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Deferred Revenue Amount in Company Code Currency |
| `PlnAccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accrued Revenue Amount in Company Code Currency |
| `PlnBilledRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Billed Revenue Amount In Company Code Currency |
| `PlnBilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Billed Revenue Amount In Global Currency |
| `PlnRecognizedMargAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Margin Amount in Company Code Currency |
| `PlnCostAmtInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Cost Amount in Company Code Currency |
| `PlnRecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Cost Of Goods Sold Amount In CC Currency |
| `PlnCOGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Cost Of Goods Sold Adjustment Amount In CC Currency |
| `PlnDeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Defferred Cost Of Goods Sold Amount In CC Currency |
| `PlnAccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accrued Cost Of Sold Goods Amount in CC currency |
| `PlnCostOfGdsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Planned Cost of Goods Sold Amount In Global Currency |
| `PlnImmntLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserves for Imminent Loss Amount in CC Currency |
| `PlnSalesDeductRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserve for Anticipated Sales Deductions Amt InCCCrcy |
| `PlnUnrlzdCostsRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserves for Unrealized Costs Amt in CompanyCode Crcy |
| `PlnSlsDeductionAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Sales Deduction Amount In Global Currency |
| `PlnSlsDeductionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Planned Sales Deduction Amount In Company Currency |
| `PlnPrcDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Price Differences Amount In Global Currency |
| `PlnAdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Administration Overhead Amount in Global Currency |
| `PlnSalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Sales Overhead Amount in Global Currency |
| `PlnMarketingOvhdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Marketing Overhead Amount in Global Currency |
| `PlnRnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Research and Development Overhead Amt in Global Crcy |
| `PlnLongTermInvmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Pln Payts Amt Reltd to Gr Liabilities&Investments In CCCrcy |
| `PlnAcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Receivable Amount in Company Code currency |
| `PlnAcctsOthRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Other Receivable Amt In CompanyCode Currency |
| `PlnAcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Payable Amount InCompanyCodeCurrency |
| `PlnAcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Other Payable Amount In CompanyCode Currency |
| `PlnProvisionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Provision Amount In CompanyCode Currency |
| `PlnNotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Notes Receivable Amount In CompanyCode Currency |
| `PlnTangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Depreciation of Tangible Assets Amount In CC Currency |
| `PlnIntngblAstAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Depreciation of Intangible Assets Amt In CC Currency |
| `PlnTangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Tangible Asset Amount InCompanyCodeCurrency |
| `PlnIntangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Intangible Asset Amount InCompanyCodeCurrency |
| `PlnFxdAstRtrmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Investing Fixed Asset Retirement Amt In CC Currency |
| `PlnInventoryAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Inventory Amount In CompanyCode Currency |
| `PlnCommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Stock Share Amount In CompanyCode Currency |
| `PlnCshAndCshEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Cash And Cash Equivalent Amount InCompanyCodeCurrency |
| `PlnAssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Asset Amount In CompanyCode Currency |
| `PlnLbltyEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Liabilities and Equity Amount In Company Code Currency |
| `PlnNotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Not Assigned Amount In Company Code Currency |
| `PlnNetRsltAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Result Amount In Company Code Currency |
| `PlnPnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan P&L Result Amount In company code currency |
| `PlnGLAcctNetIncAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Income Amount In CompanyCode Currency |
| `PlnContrbnMarg2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Contribution Margin II In Global Currency |
| `PlnOpgActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Operating Activity Cash Amount InCompanyCodeCurrency |
| `PlnInvstgActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Investing Activity Cash Amount In CompanyCodeCurrency |
| `PlnFinActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Financing Activity Cash Amount InCompanyCodeCurrency |
| `PlnNetCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Cash Amount In CompanyCode Currency |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  | `cast( '' as aufart)` | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  | `cast( '' as auart)` | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_AdditionalQuantity1Unit` | | ✓ | | | | |
| `_AdditionalQuantity2Unit` | | ✓ | | | | |
| `_AdditionalQuantity3Unit` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_SuperiorOrder` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_LedgerFiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpclStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpclStkSalesDocument` | `I_SalesOrder` | [0..1] |
| `_InventorySpclStkSalesDocItm` | `I_SalesOrderItem` | [0..1] |
| `_InvtrySpclStockWBSElmntIntID` | `I_WBSElementByInternalKey` | [0..1] |
| `_InvtrySpclStockWBSElmntBD` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_InventorySpecialStockSupplier` | `I_Supplier` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_PurReqValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_ProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElemntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_CostAnalysisResource` | `I_CostAnalysisResource` | [0..*] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [1..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity3Unit` | `I_UnitOfMeasure` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_SemanticTag` | `I_SemanticTag` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [0..1] |
| `_ProjectInternalID` | `I_ProjectByInternalKey` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_MaintenanceOrderSubOperation` | `I_MaintenanceOrderSubOperation` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_Assembly` | `I_Product` | [0..1] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_MaintOrdPlngDegreeCode` | `I_MaintOrdPlngDegreeCode` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_SuperiorOrder` | `I_LogisticsOrder` | [0..1] |
| `_Hierarchy` | `I_FinancialStatementHierarchy` | [0..*] |
| `_GLAccountHierarchy` | `I_GLAccountHierarchy` | [0..*] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ProviderContract` | `I_ProviderContract` | [0..1] |
| `_ProviderContractItem` | `I_ProviderContractItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANLINEITEMSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANLINEITEMSEMTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIAPGLACCTLITST'
@EndUserText.label: 'Actual and Plan Line Item with Semantic Tag Including FA'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: ['USE_HEX_PLAN','NO_JOIN_THRU_AGGR']



define view I_ActualPlanLineItemSemTag
  as select from P_Actualplanlineitemsemtag as P_Actualplanlineitemsemtag
  association [1..1] to E_JournalEntryItem             as _Extension_acdoca              on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                         and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                         and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                         and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                         and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem   as _Extension_acdocp              on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                         and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                         and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
  association [0..1] to I_Ledger                       as _SourceLedger                  on  $projection.SourceLedger = _SourceLedger.Ledger
  association [1..1] to I_JournalEntry                 as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                         and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                         and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Ledger                       as _Ledger                        on  $projection.Ledger = _Ledger.Ledger
  association [1]    to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                         and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [1]    to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode        on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                         and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                    on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_FiscalYearForVariant         as _LedgerFiscalYearForVariant    on  $projection.LedgerFiscalYear  = _LedgerFiscalYearForVariant.FiscalYear
                                                                                         and $projection.FiscalYearVariant = _LedgerFiscalYearForVariant.FiscalYearVariant
  // begin DO NOT USE these associations. Use Associations ForVariant instead
  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod                  on  $projection.FiscalYear   = _FiscalPeriod.FiscalYear
                                                                                         and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
                                                                                         and $projection.CompanyCode  = _FiscalPeriod.CompanyCode

  association [0..1] to I_GLAccountType                as _GLAccountType                 on  $projection.GLAccountType = _GLAccountType.GLAccountType
  // end
  association [0..1] to I_FiscalPeriodForVariant       as _FiscalPeriodForVariant        on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                         and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                         and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
  association [0..1] to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_ProfitCenter                 as _CurrentProfitCenter           on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                         and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                         and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenter                   as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                         and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter                   as _CurrentCostCenter             on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                         and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                         and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                         and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_InventoryValuationType       as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventoryValuationType
  association [0..1] to I_InvtrySpecialStockValnType   as _InventorySpclStockValnType    on  $projection.InvtrySpecialStockValnType_2 = _InventorySpclStockValnType.InventorySpecialStockValnType
  association [0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..1] to I_SalesOrder                   as _InventorySpclStkSalesDocument on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocument.SalesOrder

  association [0..1] to I_SalesOrderItem               as _InventorySpclStkSalesDocItm   on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocItm.SalesOrder
                                                                                         and $projection.InventorySpclStkSalesDocItm   = _InventorySpclStkSalesDocItm.SalesOrderItem

  association [0..1] to I_WBSElementByInternalKey      as _InvtrySpclStockWBSElmntIntID  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStockWBSElmntIntID.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _InvtrySpclStockWBSElmntBD     on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStockWBSElmntBD.WBSElementInternalID
  association [0..1] to I_WBSElementByExternalID       as _InvtrySpclStockWBSElmntExtID  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID
  association [0..1] to I_WBSElement                   as _InventorySpclStockWBSElement  on  $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement

  association [0..1] to I_Supplier                     as _InventorySpecialStockSupplier on  $projection.InventorySpecialStockSupplier = _InventorySpecialStockSupplier.Supplier

  association [0..1] to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType

  association [0..1] to I_Purreqvaluationarea          as _PurReqValuationArea           on  $projection.ValuationArea = _PurReqValuationArea.ValuationArea

  association [0..1] to I_Project                      as _Project                       on  $projection.Project = _Project.Project
  association [0..1] to I_ProjectBasicData             as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
  association [0..1] to I_ProjectBasicData             as _ProjectBasicDataText          on  $projection.ProjectInternalID = _ProjectBasicDataText.ProjectInternalID
  association [0..1] to I_ProjectByExternalID          as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID          as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID
  association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicDataText   on  $projection.PartnerProjectInternalID = _PartnerProjectBasicDataText.ProjectInternalID
  association [0..1] to I_ProjectByExternalID          as _PartnerProjectExternalID      on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID          as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID = _PartnerProjctExtrnalIDText.ProjectExternalID
  association [0..1] to I_WBSElement                   as _WBSElement                    on  $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_WBSElementByInternalKey      as _WBSElementInternalID          on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicDataText       on  $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID
  association [0..1] to I_WBSElementByExternalID       as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID       as _WBSElementExternalIDText      on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementBasicData          as _PartnerWBSElementBasicData    on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _PartnerWBSElemntBasicDataText on  $projection.PartnerWBSElementInternalID = _PartnerWBSElemntBasicDataText.WBSElementInternalID
  association [0..1] to I_WBSElementByExternalID       as _PartnerWBSElementExternalID   on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID       as _PartnerWBSElemntExtrnalIDText on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
  association [0..1] to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_Segment                      as _Segment                       on  $projection.Segment = _Segment.Segment
  association [0..*] to I_CostCenterActivityType       as _CostCtrActivityType           on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea
                                                                                         and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType
  association [0..*] to I_CostAnalysisResource         as _CostAnalysisResource          on  $projection.ControllingArea      = _CostAnalysisResource.ControllingArea
                                                                                         and $projection.CostAnalysisResource = _CostAnalysisResource.CostAnalysisResource
  association [0..1] to I_InternalOrder                as _InternalOrder                 on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1] to I_Order                        as _Order                         on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_WorkPackageWorkItem          as _WorkPackageWorkItem           on  $projection.WorkItem    = _WorkPackageWorkItem.WorkItem
                                                                                         and $projection.WorkPackage = _WorkPackageWorkItem.WorkPackage
  association [0..1] to I_WorkPackage                  as _WorkPackage                   on  $projection.WorkPackage = _WorkPackage.WorkPackage
  association [0..1] to I_CompanyCode                  as _PartnerCompanyCode            on  $projection.PartnerCompanyCode = _PartnerCompanyCode.CompanyCode
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea           on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter                 as _PartnerProfitCenter           on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                         and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                   as _PartnerCostCenter             on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                         and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..1] to I_Project                      as _PartnerProject                on  $projection.PartnerProject = _PartnerProject.Project
  association [0..1] to I_WBSElement                   as _PartnerWBSElement             on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_Segment                      as _PartnerSegment                on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType    on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                         and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
  association [0..1] to I_InternalOrder                as _PartnerOrder                  on  $projection.PartnerOrder = _PartnerOrder.InternalOrder
  association [0..1] to I_Order                        as _PartnerOrder_2                on  $projection.PartnerOrder_2 = _PartnerOrder_2.OrderID
  association [1..1] to I_Partnercompany               as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [1]    to I_FiscalYearVariant            as _FiscalYearVariant             on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_ControllingDebitCreditCode   as _ControllingDebitCreditCode    on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_Employment                   as _Employment                    on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
  association [0..1] to I_BusinessTransactionType      as _BusinessTransactionType       on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..1] to I_AccountingDocumentType       as _AccountingDocumentType        on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType      on  $projection.SubLedgerAcctLineItemType  = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
  association [0..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Material                     as _Material                      on  $projection.Material = _Material.Material
  association [0..1] to I_Customer                     as _Customer                      on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Supplier                     as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAsset                   as _FixedAsset                    on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                         and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [0..1] to I_SalesOrder                   as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem                on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                         and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_BillingDocumentType          as _BillingDocumentType           on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
  association [0..1] to I_SalesOrganization            as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                     as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_Material                     as _SoldMaterial                  on  $projection.SoldMaterial = _SoldMaterial.Material
  association [0..1] to I_MaterialGroup                as _MaterialGroup                 on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductGroup                 as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_Country                      as _CustomerSupplierCountry       on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
  association [0..1] to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Customer                     as _BillToParty                   on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                     as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1]    to I_Currency                     as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _GlobalCurrency                on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency1          on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency2          on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency3          on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency4          on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency5          on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency6          on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency7          on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency8          on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency
  association [0..1] to I_UnitOfMeasure                as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _CostSourceUnit                on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity1Unit       on  $projection.AdditionalQuantity1Unit = _AdditionalQuantity1Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity2Unit       on  $projection.AdditionalQuantity2Unit = _AdditionalQuantity2Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity3Unit       on  $projection.AdditionalQuantity3Unit = _AdditionalQuantity3Unit.UnitOfMeasure
  association [0..1] to I_PlanningCategory             as _PlanningCategory              on  $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [0..1] to I_SemanticTag                  as _SemanticTag                   on  $projection.SemanticTag = _SemanticTag.SemanticTag
  association [0..1] to I_BillableControl              as _BillableControl               on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..1] to I_ConditionContract            as _ConditionContract             on  $projection.ConditionContract = _ConditionContract.ConditionContract

  association [0..1] to I_ProjectByInternalKey         as _ProjectInternalID             on  $projection.ProjectInternalID = _ProjectInternalID.ProjectInternalID
  association [0..1] to I_ProductGroup                 as _SoldProductGroup              on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup

  association [0..1] to I_MaintenanceOrderSubOperation as _MaintenanceOrderSubOperation  on  $projection.OrderID           = _MaintenanceOrderSubOperation.MaintenanceOrder
                                                                                         and $projection.OrderOperation    = _MaintenanceOrderSubOperation.MaintenanceOrderOperation
                                                                                         and $projection.OrderSuboperation = _MaintenanceOrderSubOperation.MaintenanceOrderSubOperation

  association [0..1] to I_Equipment                    as _Equipment                     on  $projection.Equipment = _Equipment.Equipment

  association [0..1] to I_FunctionalLocation           as _FunctionalLocation            on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation

  association [0..1] to I_Product                      as _Assembly                      on  $projection.Assembly = _Assembly.Product
  //association [0..1] to I_Product                      as _SoldProduct                   on  $projection.SoldProduct = _SoldProduct.Product

  association [0..1] to I_MaintenanceActivityType      as _MaintenanceActivityType       on  $projection.MaintenanceActivityType = _MaintenanceActivityType.MaintenanceActivityType

  association [0..1] to I_MaintOrdPlngDegreeCode       as _MaintOrdPlngDegreeCode        on  $projection.MaintenanceOrderPlanningCode = _MaintOrdPlngDegreeCode.MaintenanceOrderPlanningCode

  association [0..1] to I_PMNotificationPriorityType   as _PMNotificationPriorityType    on  $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType

  association [0..1] to I_PMNotificationPriority       as _PMNotificationPriority        on  $projection.MaintPriority     = _PMNotificationPriority.MaintPriority
                                                                                         and $projection.MaintPriorityType = _PMNotificationPriority.MaintPriorityType

  association [0..1] to I_LogisticsOrder               as _SuperiorOrder                 on  $projection.SuperiorOrder = _SuperiorOrder.OrderID
  association [0..*] to I_FinancialStatementHierarchy  as _Hierarchy                     on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy
  association [0..*] to I_GLAccountHierarchy           as _GLAccountHierarchy            on  $projection.GLAccountHierarchy = _GLAccountHierarchy.GLAccountHierarchy

  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem

  association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType = _ServiceContractType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType = _ServiceContract.ServiceDocumentType
                                                                                         and $projection.ServiceContract     = _ServiceContract.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType = _ServiceContractItem.ServiceDocumentType
                                                                                         and $projection.ServiceContract     = _ServiceContractItem.ServiceDocument
                                                                                         and $projection.ServiceContractItem = _ServiceContractItem.ServiceDocumentItem

  association [0..1] to I_ProviderContract             as _ProviderContract              on  $projection.ProviderContract = _ProviderContract.ProviderContract
  association [0..1] to I_ProviderContractItem         as _ProviderContractItem          on  $projection.ProviderContract     = _ProviderContractItem.ProviderContract
                                                                                         and $projection.ProviderContractItem = _ProviderContractItem.ProviderContractItem

{
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

  key FinancialPlanningReqTransSqnc,
  key FinancialPlanningDataPacket,
      //  @DefaultAggregation: #NONE
  key FinancialPlanningEntryItem,

      ///////////////////////////////////////////////////////////////////////
      // I_SemTagFuncArea
      ///////////////////////////////////////////////////////////////////////
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,
      //      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      // '_LedgerFiscalYear'
      @Environment.sql.passValue: true
      @Semantics.fiscal.year: true
      //@ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      LedgerFiscalYear,
      //      @Environment.sql.passValue: true
      ActualPlanCode,
      //  @ObjectModel.foreignKey.association: '_FiscalQuarter'
      @Semantics.fiscal.quarter: true
      @Analytics.internalName: #LOCAL
      FiscalQuarter,

      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BusinessTransactionType,
      ReferenceDocumentType,
      LogicalSystem,
      ReferenceDocumentContext,
      ReferenceDocument,
      ReferenceDocumentItem,
      ReferenceDocumentItemGroup,
      //SUBTA,
      IsReversal,
      IsReversed,
      //XTRUEREV,
      //AWTYP_REV,
      ReversalReferenceDocumentCntxt,
      ReversalReferenceDocument,
      //SUBTA_REV,
      IsSettlement,
      IsSettled,
      PredecessorReferenceDocType,
      PredecessorReferenceDocCntxt,
      PredecessorReferenceDocument,
      PredecessorReferenceDocItem,
      //PREC_SUBTA,

      SourceReferenceDocumentType,
      SourceLogicalSystem,
      SourceReferenceDocumentCntxt,
      SourceReferenceDocument,
      SourceReferenceDocumentItem,
      SourceReferenceDocSubitem,
      IsCommitment,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      WorkItem,
      BillableControl,
      IsLotSizeIndependent,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
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
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      PartnerCompanyCode,
      PartnerControllingObjectClass,

      /////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @Semantics.currencyCode:true
      BalanceTransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      AmountInBalanceTransacCrcy,

      @Semantics.currencyCode:true
      TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      @Semantics.currencyCode:true
      CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)  as InvertedAmtInCoCodeCurrency,

      ////////////////////////////////////
      // NEW
      @Semantics.currencyCode:true
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AmountInGlobalCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      cast(( AmountInGlobalCurrency * -1 ) as fis_ksl_inverted)       as InvertedAmountInGlobalCurrency,           

      @Semantics.currencyCode:true
      FreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      cast(( AmountInFreeDefinedCurrency1 * -1 ) as fis_osl_inverted) as InvertedAmtInFreeDefinedCrcy1,
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      @Semantics.currencyCode:true
      FreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      @Semantics.currencyCode:true
      FreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      @Semantics.currencyCode:true
      FreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      @Semantics.currencyCode:true
      FreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      @Semantics.currencyCode:true
      FreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      @Semantics.currencyCode:true
      FreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,
      ////////////////////////////////////

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      TotalPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnTotPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnTotPrcVarcInGlbCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdPrcVarcInGlbCrcy,
      ////////////////////////////////////


      @Semantics.currencyCode:true
      ControllingObjectCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      AmountInObjectCurrency,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      CostSourceUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationQuantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationFixedQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity1Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity2Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity3Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      AdditionalQuantity3,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      DebitCreditCode,
      //@ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      @Analytics.internalName: #LOCAL
      FiscalPeriod,
      @Analytics.internalName: #LOCAL
      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FiscalYearVariant,
      @Semantics.fiscal.yearPeriod: true
      @Analytics.internalName: #LOCAL
      FiscalYearPeriod,
      PostingDate,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,
      DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      AccountingDocumentItem,
      AssignmentReference,
      AccountingDocumentCategory,
      PostingKey,
      TransactionTypeDetermination,
      //slalittype,
      //      @ObjectModel.foreignKey.association: '_User'
      AccountingDocCreatedByUser,
      LastChangeDateTime,
      -- cast(div(timestamp, 1000000) as FIS_TIMESTAMP) as CreationDate,
      CreationDate,
      EliminationProfitCenter,
      OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      AlternativeGLAccount,
      CountryChartOfAccounts,


      ///////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
      //////////////////////////////////////////////////////////////////////////
      InvoiceReference,
      InvoiceReferenceFiscalYear,
      FollowOnDocumentType,
      InvoiceItemReference,
      ReferencePurchaseOrderCategory,
      PurchasingDocument,
      PurchasingDocumentItem,
      AccountAssignmentNumber,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      ConditionContract,

      //      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      PlanningCategory,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
      /////////////////////////////////////////////////////////////////////////
      FinancialAccountType,
      SpecialGLCode,
      TaxCode,
      HouseBank,
      HouseBankAccount,
      IsOpenItemManaged,
      ClearingDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      ClearingDocFiscalYear,

      ClearingJournalEntry,
      ClearingJournalEntryFiscalYear,

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
      AssetTransactionType,
      AssetAcctTransClassfctn,
      DepreciationFiscalPeriod,
      GroupMasterFixedAsset,
      //      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      GroupFixedAsset,


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
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      InvtrySpecialStockValnType_2,
      //xobew,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      InvtrySpclStockWBSElmntIntID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
      InvtrySpclStockWBSElmntExtID,
      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntIntID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
      InventorySpclStockWBSElement, //  as InventorySpecialStockWBSElement,
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
      CostOriginGroup,
      OriginSenderObject,
      //co_belkz,
      ControllingObjectDebitType,
      QuantityIsIncomplete,
      OffsettingAccount,
      OffsettingAccountType,
      LineItemIsCompleted,
      PersonnelNumber,
      ControllingObjectClass,

      OriginCostCenter,
      OriginCostCtrActivityType,
      AccountAssignment,
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      OrderCategory,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData' //'_WBSElementInternalID'
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectBasicData' //'_ProjectInternalID'
      ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      PartnerProjectExternalID,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      Project,
      OperatingConcern,
      ProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      RelatedNetworkActivity,
      BusinessProcess,
      CostObject,
      //bemot,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      CostAnalysisResource,
      CustomerServiceNotification,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                         element: 'ServiceDocumentType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentVH',
                         element: 'ServiceDocument' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      ServiceDocument,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                         element: 'ServiceDocumentItem' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      ServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ServiceContractTypeStdVH',
                         element: 'ServiceDocumentType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      ServiceContractType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceContractVH',
                         element: 'ServiceContract' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      ServiceContractItem,

      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,

      PartnerAccountAssignment,
      PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,
      PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      PartnerProject,
      PartnerSalesDocument,
      PartnerSalesDocumentItem,
      PartnerProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'
      PartnerProjectNetworkActivity,
      PartnerBusinessProcess,
      PartnerCostObject,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      SoldMaterial,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      //@ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      FinancialManagementArea,
      Fund,
      GrantID,
      BudgetPeriod,
      PartnerFund,
      PartnerGrant,
      PartnerBudgetPeriod,
      FundsCenter,
      FundedProgram,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      JointVenture,
      JointVentureEquityGroup,
      JointVentureCostRecoveryCode,
      //vptnr,
      //btype,
      JointVentureEquityType,
      //prodper,


      SettlementReferenceDate,

      WorkCenterInternalID,
      OrderOperation,
      OrderItem,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //@ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'
      OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      SuperiorOrder,
      MaintenanceOrderIsPlanned,
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

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      DebitAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      CreditAmountInGlobalCrcy,

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
      //////////////////////////////////


      IsStatisticalOrder,
      IsStatisticalCostCenter,
      IsStatisticalSalesDocument,
      WBSIsStatisticalWBSElement,

      ///////////////////////////////////////////////////////////////////////
      // Restricted Key Figures
      ///////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActualRevenueAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlGrossRevenueAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlRecognizedRevnAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlRecgdRevenueAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlRevnAdjustmentAmtInCCCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlDeferredRevenueAmtInCCCrcy, //GrossRevenueDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAccruedRevenueAmtInCCCrcy, //GrossRevenueAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlBilledRevenueAmtInCCCrcy, //GrossRevenueActual,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlBilledRevenueAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlRecognizedMargAmtInCCCrcy, //GrossProfit,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActualCostAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlCostOfGdsSoldAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlRecognizedCOGSAmtInCCCrcy, //CostofGoodsSold,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlCOGSAdjustmentAmtInCCCrcy, //CostofGoodsSoldAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlDeferredCOGSAmtInCCCrcy, //CostofGoodsSoldDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAccruedCOGSAmtInCCCrcy, //CostofGoodsSoldAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlRecgblCostAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlImmntLossRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlSalesDeductRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlUnrlzdCostsRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlSlsDeductionAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlSlsDeductionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlPrcDifferenceAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlAdminOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlSalesOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlMarketingOvhdAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ActlRnDOverheadAmtInGlobCrcy,

      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlLongTermInvmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAcctsRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAcctsOthRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAcctsPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAcctsOthPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlProvisionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlNotesReceivableAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlTangibleAstDeprAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlIntngblAstAmtznAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlTangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlIntangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlFxdAstRtrmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlInventoryAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlCommonStockAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlCshAndCshEqvlntAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlAssetAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlLbltyEquityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlNotAssignedAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlNetRsltAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlPnLResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlGLAcctNetIncAmtInCCCrcy,
      ////////////////////////////////////////////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlOpgActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlInvstgActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ActlFinActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // OperatingActyCashAmtInCCCrcy + InvestingActyCashAmtInCCCrcy + FinancingActyCashAmtInCCCrcy
      ActlNetCashAmtInCCCrcy,

      ////////////////////
      // Revenue
      ////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRevenueAmountInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnGrossRevenueAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedRevnAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnRecgdRevenueAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRevnAdjustmentAmtInCCCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnDeferredRevenueAmtInCCCrcy, //GrossRevenueDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAccruedRevenueAmtInCCCrcy, //GrossRevenueAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnBilledRevenueAmtInCCCrcy, //GrossRevenueActual,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnBilledRevenueAmtInGlobCrcy, //GrossRevenueActual,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedMargAmtInCCCrcy, //GrossProfit,

      ////////////////////
      // Cost
      ////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCostAmtInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedCOGSAmtInCCCrcy, //CostofGoodsSold,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCOGSAdjustmentAmtInCCCrcy, //CostofGoodsSoldAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnDeferredCOGSAmtInCCCrcy, //CostofGoodsSoldDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAccruedCOGSAmtInCCCrcy, //CostofGoodsSoldAccrued,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnCostOfGdsSoldAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnImmntLossRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnSalesDeductRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnUnrlzdCostsRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnSlsDeductionAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnSlsDeductionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnPrcDifferenceAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnAdminOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnSalesOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnMarketingOvhdAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnRnDOverheadAmtInGlobCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Cash Flow Statement (IFRS)
      ///////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnLongTermInvmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsOthRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsOthPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnProvisionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNotesReceivableAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnTangibleAstDeprAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnIntngblAstAmtznAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnTangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnIntangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnFxdAstRtrmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnInventoryAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCommonStockAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCshAndCshEqvlntAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAssetAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnLbltyEquityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNotAssignedAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNetRsltAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnPnLResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnGLAcctNetIncAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnContrbnMarg2AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnOpgActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnInvstgActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnFinActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // OperatingActyCashAmtInCCCrcy + InvestingActyCashAmtInCCCrcy + FinancingActyCashAmtInCCCrcy
      PlnNetCashAmtInCCCrcy,

      _SourceLedger,
      _JournalEntry,
      _ControllingArea,
      _Ledger,
      _CompanyCode,
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _GLAccountInCompanyCode,
      _FiscalYear,
      _LedgerFiscalYearForVariant,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
      _FiscalPeriodForVariant,
      _BusinessArea,
      _ProfitCenter,
      _CurrentProfitCenter,
      _CostCenter,
      _CurrentCostCenter,
      _Project,
      _ProjectBasicData,
      _ProjectBasicDataText,
      _ProjectExternalID,
      _ProjectExternalIDText,
      _PartnerProjectBasicData,
      _PartnerProjectBasicDataText,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,
      _WBSElement,
      _WBSElementInternalID,
      _WBSElementExternalID,
      _WBSElementExternalIDText,
      _WBSElementBasicData,
      _WBSElementBasicDataText,
      _PartnerWBSElementBasicData,
      _PartnerWBSElemntBasicDataText,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      _FunctionalArea,
      _Segment,
      _CostCtrActivityType,
      _CostAnalysisResource,
      _InternalOrder,
      _Order,
      _WorkPackageWorkItem,
      _WorkPackage,
      _PartnerCompanyCode,
      _PartnerBusinessArea,
      _PartnerProfitCenter,
      _PartnerCostCenter,
      _PartnerProject,
      _PartnerWBSElement,
      _PartnerFunctionalArea,
      _PartnerSegment,
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      _PartnerCompany,
      _FiscalYearVariant,
      _ControllingDebitCreditCode,
      _Employment,
      _BusinessTransactionType,
      _SubLedgerAccLineItemType,
      _AccountingDocumentType,
      _Plant,
      _Material,
      _Customer,
      _Supplier,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _BillingDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SoldMaterial,
      _MaterialGroup,
      //_SoldProduct,
      _ProductGroup,
      _CustomerGroup,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _InventorySpecialStockValnType,
      _InventorySpclStockValnType,
      _InventorySpecialStockType,
      _InventorySpclStkSalesDocument,
      _InventorySpclStkSalesDocItm,
      _InvtrySpclStockWBSElmntIntID,
      _InvtrySpclStockWBSElmntBD,
      _InvtrySpclStockWBSElmntExtID,
      _InventorySpclStockWBSElement,
      _InventorySpecialStockSupplier,
      _InventoryValuationType,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _BaseUnit,
      _CostSourceUnit,
      _AdditionalQuantity1Unit,
      _AdditionalQuantity2Unit,
      _AdditionalQuantity3Unit,
      _CustomerSupplierCountry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,
      _PlanningCategory,
      _SemanticTag,
      _PurReqValuationArea,

      _Equipment,
      _FunctionalLocation,
      _MaintenanceActivityType,
      _MaintOrdPlngDegreeCode,
      _PMNotificationPriorityType,
      _PMNotificationPriority,
      _MaintenanceOrderSubOperation,
      _Assembly,
      _SuperiorOrder,
      _ProjectInternalID,
      _ConditionContract,
      _SoldProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccountHierarchy'
      _Hierarchy,
      _GLAccountHierarchy,

      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem,
      _ServiceContract,
      _ServiceContractItem,
      _ServiceContractType,

      _GLAccountType,

      _MasterFixedAsset,
      _FixedAsset,

      _ProviderContract,
      _ProviderContractItem,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      cast( '' as brgru)                                              as GLAccountAuthorizationGroup,
      cast( '' as brgru)                                              as SupplierBasicAuthorizationGrp,
      cast( '' as brgru)                                              as CustomerBasicAuthorizationGrp,
      cast( '' as brgru)                                              as AcctgDocTypeAuthorizationGroup,
      cast( '' as aufart)                                             as OrderType,
      cast( '' as auart)                                              as SalesOrderType,
      //      cast( '' as anlkl)              as AssetClass
      AssetClass,
      
      @Semantics.currencyCode:true
      FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      AmountInFunctionalCurrency

}
```
