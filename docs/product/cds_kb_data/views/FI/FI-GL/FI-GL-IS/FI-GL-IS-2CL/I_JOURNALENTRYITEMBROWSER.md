---
name: I_JOURNALENTRYITEMBROWSER
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
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
  - metadata-only
---
# I_JOURNALENTRYITEMBROWSER

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `JrnlEntrAltvFYConsecutiveID` |  | |  |  | `CHAR(10)` | Shifted Fiscal Year Consecutive ID |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
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
| `PrdcssrJournalEntryCompanyCode` |  | |  |  | `CHAR(4)` | Preceding Journal Entry Company Code |
| `PrdcssrJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Preceding Journal Entry Fiscal Year |
| `PredecessorJournalEntry` |  | |  |  | `CHAR(10)` | Preceding Journal Entry Document Number |
| `PredecessorJournalEntryItem` |  | |  |  | `CHAR(6)` | Preceding Journal Entry Line Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `OrganizationalChange` |  | |  |  | `CHAR(10)` | Orgl Change |
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
| `GrantCurrency` |  | |  |  | `CUKY(5)` | Grant currency |
| `AmountInGrantCurrency` |  | |  |  | `CURR(23)` | Grant Amount in Grant Currency |
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
| `IncmpltSummableValnQtyUnt` |  | |  |  | `UNIT(3)` | Incomplete Summable Valuation Quantity Unit |
| `IncmpltSummableValnQty` |  | |  |  | `QUAN(23)` | Incomplete Summable Valuation Quantity |
| `IncmpltSummableValnFxdQty` |  | |  |  | `QUAN(23)` | Incomplete Summable Valuation Fix Quantity |
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
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
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
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `PerformancePeriodStartDate` |  | |  |  | `DATS(8)` | Billing Period of Performance Start Date |
| `PerformancePeriodEndDate` |  | |  |  | `DATS(8)` | Billing Period of Performance End Date |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Component Breakdown |
| `CompBreakdownScaleNumerator` |  | |  |  | `DEC(23)` | Component Breakdown Scale Numerator |
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
| `IsCleared` |  | |  |  | `CHAR(1)` | Indicator: Has the Item Been Cleared? |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `GeneralLedgerAgingScope` |  | |  |  | `CHAR(10)` | General Ledger Aging Scope |
| `GeneralLedgerAgingIncrement` |  | |  |  | `CHAR(15)` | General Ledger Aging Increment |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Controlling Object |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `VarianceOriginGLAccount` |  | |  |  | `CHAR(10)` | Origin G/L Account of a Variance |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
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
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Accounting Contract |
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `VarianceOriginGroup` |  | |  |  | `CHAR(4)` | Variance Origin Group |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `CommitmentItem` |  | |  |  | `CHAR(24)` | Commitment Item |
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
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Earmarked Funds Document |
| `EarmarkedFundsDocumentItem` |  | |  |  | `NUMC(3)` | Earmarked Funds Document Item |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVenturePartner` |  | |  |  | `CHAR(10)` | Joint Venture Partner |
| `JointVentureBillingType` |  | |  |  | `CHAR(2)` | Joint Venture Billing Type |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureBillingDate` |  | |  |  | `DATS(8)` | Joint Venture Billing Date |
| `JointVentureOperationalDate` |  | |  |  | `DATS(8)` | Joint Venture Operational Date |
| `CutbackRun` |  | |  |  | `DEC(21)` | Cutback Run |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `PartnerVenture` |  | |  |  | `CHAR(6)` | Partner Venture |
| `PartnerEquityGroup` |  | |  |  | `CHAR(3)` | Partner Equity Group |
| `SenderCostRecoveryCode` |  | |  |  | `CHAR(2)` | Sender Cost Recovery Code |
| `CutbackAccount` |  | |  |  | `CHAR(10)` | Cutback Account |
| `CutbackCostObject` |  | |  |  | `CHAR(22)` | Cutback Cost Object |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `REPartnerBusinessEntity` |  | |  |  | `CHAR(8)` | RE Partner Business Entity |
| `RealEstatePartnerBuilding` |  | |  |  | `CHAR(8)` | Real Estate Partner Building |
| `RealEstatePartnerProperty` |  | |  |  | `CHAR(8)` | Real Estate Partner Property |
| `REPartnerRentalObject` |  | |  |  | `CHAR(8)` | RE Partner Rental Object |
| `RealEstatePartnerContract` |  | |  |  | `CHAR(13)` | Real Estate Partner Contract |
| `REPartnerServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Partner Service Charge Key |
| `REPartnerSettlementUnitID` |  | |  |  | `CHAR(5)` | RE Partner Settlement Unit |
| `PartnerSettlementReferenceDate` |  | |  |  | `DATS(8)` | Partner Reference Date for Settlement |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualReferenceObject` |  | |  |  | `CHAR(32)` | Accrual Reference Object |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `FinancialValuationObjectType` |  | |  |  | `CHAR(4)` | Financial Valuation Object Type |
| `FinancialValuationObject` |  | |  |  | `CHAR(32)` | Financial Valuation Object |
| `FinancialValuationSubobject` |  | |  |  | `CHAR(32)` | Financial Valuation Subobject |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Credit Risk Class |
| `JrnlEntryItemMigrationSource` |  | |  |  | `CHAR(1)` | Journal Entry Item Migration Source |
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
| `GLDebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Debit Amount in Company Code Currency |
| `AssetDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Debit Amount in Company Code Currency |
| `MaterialDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Debit Amount in Company Code Currency |
| `DebtorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Debit Amount in Company Code Currency |
| `CreditorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Debit Amount in Company Code Currency |
| `GLCreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Credit Amount in Company Code Currency |
| `AssetCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Credit Amount in Company Code Currency |
| `MaterialCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Credit Amount in Company Code Currency |
| `DebtorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Credit Amount in Company Code Currency |
| `CreditorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Credit Amount in Company Code Currency |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `ClearingStatusSelection` |  | |  |  | `CHAR(1)` | Clearing Status Selection |
