---
name: I_JOURNALENTRYITEMBROWSER
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
semantic_vi: "Journal Entry Item Browser — CDS view giao diện dựa trên I_JournalEntryItem."
keywords:
  - "journal"
  - "entry"
  - "item"
  - "browser"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
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
---
# I_JOURNALENTRYITEMBROWSER

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
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
| `IsCleared` |  | |  | `cast( ( case I_JournalEntryItem.ClearingDate when '00000000' then ' ' else 'X' end ) as farp_xaugp preserving type )` | `CHAR(1)` | Indicator: Has the Item Been Cleared? |
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
| `InventorySpclStockWBSElement` |  | |  | `cast( I_JournalEntryItem.InventorySpclStockWBSElement as fis_invspstock_wbs_no_conv_dep preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element |
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
| `WBSElement` |  | |  | `cast( I_JournalEntryItem.WBSElement as fis_wbs_no_conv_depre preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `Project` |  | |  | `cast( I_JournalEntryItem.Project as fis_project_no_conv_depre preserving type )` | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` | `CHAR(24)` | Project External ID |
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
| `PartnerWBSElement` |  | |  | `cast( I_JournalEntryItem.PartnerWBSElement as fis_partner_wbs_no_conv_depre preserving type )` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  | `cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  | `cast( I_JournalEntryItem.PartnerProject as fis_part_project_no_conv_depre preserving type )` | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  | `cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` | `CHAR(24)` | Partner Project External ID |
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
| `DebitAmountInFreeDfndCrcy1` |  | |  | `DebitAmountInFreeDefinedCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` |  | |  | `CreditAmountInFreeDefinedCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy2` |  | |  | `DebitAmountInFreeDefinedCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` |  | |  | `CreditAmountInFreeDefinedCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy3` |  | |  | `DebitAmountInFreeDefinedCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` |  | |  | `CreditAmountInFreeDefinedCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy4` |  | |  | `DebitAmountInFreeDefinedCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` |  | |  | `CreditAmountInFreeDefinedCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy5` |  | |  | `DebitAmountInFreeDefinedCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` |  | |  | `CreditAmountInFreeDefinedCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy6` |  | |  | `DebitAmountInFreeDefinedCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` |  | |  | `CreditAmountInFreeDefinedCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy7` |  | |  | `DebitAmountInFreeDefinedCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` |  | |  | `CreditAmountInFreeDefinedCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy8` |  | |  | `DebitAmountInFreeDefinedCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` |  | |  | `CreditAmountInFreeDefinedCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `GLDebitAmountInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_sdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_sdr_hsl preserving type ) end` | `CURR(23)` | G/L Account - Debit Amount in Company Code Currency |
| `AssetDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_adr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_adr_hsl preserving type ) end` | `CURR(23)` | Asset - Debit Amount in Company Code Currency |
| `MaterialDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_mdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_mdr_hsl preserving type ) end` | `CURR(23)` | Material - Debit Amount in Company Code Currency |
| `DebtorDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_ddr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_ddr_hsl preserving type ) end` | `CURR(23)` | Customer - Debit Amount in Company Code Currency |
| `CreditorDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_kdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_kdr_hsl preserving type ) end` | `CURR(23)` | Supplier - Debit Amount in Company Code Currency |
| `GLCreditAmountInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_scr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_scr_hsl preserving type ) end` | `CURR(23)` | G/L Account - Credit Amount in Company Code Currency |
| `AssetCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_acr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_acr_hsl preserving type ) end` | `CURR(23)` | Asset - Credit Amount in Company Code Currency |
| `MaterialCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_mcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_mcr_hsl preserving type ) end` | `CURR(23)` | Material - Credit Amount in Company Code Currency |
| `DebtorCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_dcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_dcr_hsl preserving type ) end` | `CURR(23)` | Customer - Credit Amount in Company Code Currency |
| `CreditorCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_kcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2) ) as fis_kcr_hsl preserving type ) end` | `CURR(23)` | Supplier - Credit Amount in Company Code Currency |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `ClearingStatusSelection` |  | |  | `cast($parameters.P_ClearingStatusSelection as fis_clearingstatusselection preserving type )` | `CHAR(1)` | Clearing Status Selection |
| `_InvtrySpclStkWBSElmntBscData` |  | |  | `_InvtrySpclStockWBSElmntBD` |  |  |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinServicesProductGroupText` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialServicesBranchText` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_FinancialDataSourceText` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderText_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |
| `_FinServicesProductGroupText` | `I_FinServicesProductGroupT` | [0..*] |
| `_FinancialServicesBranch` | `I_FinancialServicesBranch` | [0..1] |
| `_FinancialServicesBranchText` | `I_FinancialServicesBranchT` | [0..*] |
| `_FinancialDataSource` | `I_FinancialDataSource` | [0..1] |
| `_FinancialDataSourceText` | `I_FinancialDataSourceT` | [0..*] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl: {authorizationCheck: #CHECK,
                 personalData.blocking: #REQUIRED }
@EndUserText.label: 'Journal Entry Item Browser'
@VDM.viewType: #COMPOSITE
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType.sizeCategory: #XXL,
                usageType.dataClass:  #TRANSACTIONAL,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@Analytics.technicalName: 'IFIJELITBROWS'
@Environment.sql.passValueForClient: true
@Metadata: { ignorePropagatedAnnotations: true,  
             allowExtensions:true }
@AccessControl.auditFilter: #ENABLED

define view entity I_JournalEntryItemBrowser 
  with parameters P_ClearingStatusSelection   : fis_clearingstatusselection  
  
as select from I_JournalEntryItem as I_JournalEntryItem

association [0..1] to I_PersonWorkAgreement_1 as _PersonWorkAgreement_1      on $projection.PersonnelNumber    = _PersonWorkAgreement_1.PersonWorkAgreement

association [0..1] to I_ProductGroup_2        as _ProductGroup_2             on $projection.ProductGroup       = _ProductGroup_2.ProductGroup
association [0..1] to I_ProductGroup_2        as _SoldProductGroup_2         on $projection.SoldProductGroup   = _SoldProductGroup_2.ProductGroup

//association [0..1] to I_Order                 as _PartnerOrder_2             on  $projection.PartnerOrder_2      = _PartnerOrder_2.OrderID
//association [0..1] to I_Order                 as _PartnerOrderText_2         on  $projection.PartnerOrder_2      = _PartnerOrderText_2.OrderID

association [0..1] to I_FinServicesProductGroup   as _FinServicesProductGroup      on $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
association [0..*] to I_FinServicesProductGroupT  as _FinServicesProductGroupText  on $projection.FinancialServicesProductGroup = _FinServicesProductGroupText.FinancialServicesProductGroup
association [0..1] to I_FinancialServicesBranch   as _FinancialServicesBranch      on $projection.FinancialServicesBranch       = _FinancialServicesBranch.FinancialServicesBranch
association [0..*] to I_FinancialServicesBranchT  as _FinancialServicesBranchText  on $projection.FinancialServicesBranch       = _FinancialServicesBranchText.FinancialServicesBranch
association [0..1] to I_FinancialDataSource       as _FinancialDataSource      on $projection.FinancialDataSource           = _FinancialDataSource.FinancialDataSource
association [0..*] to I_FinancialDataSourceT      as _FinancialDataSourceText  on $projection.FinancialDataSource           = _FinancialDataSourceText.FinancialDataSource
association [0..1] to I_CustomerSupplierIndustry  as _CustomerSupplierIndustry on $projection.CustomerSupplierIndustry      = _CustomerSupplierIndustry.Industry 

association [0..1] to I_WBSElementByExternalID    as _WBSElementExternalID        on $projection.WBSElementExternalID        = _WBSElementExternalID.WBSElementExternalID
association [0..1] to I_WBSElementByExternalID    as _PartnerWBSElementExternalID on $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
association [0..1] to I_ProjectByExternalID       as _ProjectExternalID           on $projection.ProjectExternalID           = _ProjectExternalID.ProjectExternalID
association [0..1] to I_ProjectByExternalID       as _PartnerProjectExternalID    on $projection.PartnerProjectExternalID    = _PartnerProjectExternalID.ProjectExternalID  

association of exact one to exact one E_JournalEntryItem  as _Extension      on $projection.SourceLedger       = _Extension.SourceLedger
                                                                            and $projection.CompanyCode        = _Extension.CompanyCode
                                                                            and $projection.FiscalYear         = _Extension.FiscalYear
                                                                            and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                            and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem                                                                                                                                                         

{
@ObjectModel.foreignKey.association: '_SourceLedger'      
key I_JournalEntryItem.SourceLedger,
@ObjectModel.foreignKey.association: '_CompanyCode'
key I_JournalEntryItem.CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
key I_JournalEntryItem.FiscalYear,
@ObjectModel.foreignKey.association: '_JournalEntry'
key I_JournalEntryItem.AccountingDocument,
key I_JournalEntryItem.LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_Ledger'      
key I_JournalEntryItem.Ledger,

@ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant' //'_LedgerFiscalYear'
I_JournalEntryItem.LedgerFiscalYear,
I_JournalEntryItem.GLRecordType,
I_JournalEntryItem.JrnlEntrAltvFYConsecutiveID,

//LedgerName,
//CompanyCodeName,

// Object which are dependent objects --> first
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
I_JournalEntryItem.ChartOfAccounts,
@ObjectModel.foreignKey.association: '_ControllingArea'
I_JournalEntryItem.ControllingArea,
//ControllingAreaName,


///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.FinancialTransactionType,
I_JournalEntryItem.BusinessTransactionCategory,
I_JournalEntryItem.BusinessTransactionType,
I_JournalEntryItem.ReferenceDocumentType,
I_JournalEntryItem.LogicalSystem,
I_JournalEntryItem.ReferenceDocumentContext,
I_JournalEntryItem.ReferenceDocument,
I_JournalEntryItem.ReferenceDocumentItem,
I_JournalEntryItem.ReferenceDocumentItemGroup,
//SUBTA,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsReversal,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsReversed,
//XTRUEREV,
//AWTYP_REV,
I_JournalEntryItem.ReversalReferenceDocumentCntxt,  
I_JournalEntryItem.ReversalReferenceDocument,
//SUBTA_REV,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsSettlement,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsSettled,
I_JournalEntryItem.PredecessorReferenceDocType,
I_JournalEntryItem.PredecessorReferenceDocCntxt,  
I_JournalEntryItem.PredecessorReferenceDocument,
I_JournalEntryItem.PredecessorReferenceDocItem,
I_JournalEntryItem.PrdcssrJournalEntryCompanyCode,
I_JournalEntryItem.PrdcssrJournalEntryFiscalYear,
I_JournalEntryItem.PredecessorJournalEntry,
I_JournalEntryItem.PredecessorJournalEntryItem,
//PREC_SUBTA,

I_JournalEntryItem.SourceReferenceDocumentType,
I_JournalEntryItem.SourceLogicalSystem,
I_JournalEntryItem.SourceReferenceDocumentCntxt,
I_JournalEntryItem.SourceReferenceDocument,
I_JournalEntryItem.SourceReferenceDocumentItem,
I_JournalEntryItem.SourceReferenceDocSubitem,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsCommitment,   
I_JournalEntryItem.JrnlEntryItemObsoleteReason,
I_JournalEntryItem.OrganizationalChange,   

@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
I_JournalEntryItem.GLAccount,

//GLAccountName,
//GLAccountLongName,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_CostCenter'
I_JournalEntryItem.CostCenter,
//CostCenterName,
@ObjectModel.foreignKey.association: '_ProfitCenter'
I_JournalEntryItem.ProfitCenter,
//ProfitCenterName,
@ObjectModel.foreignKey.association: '_FunctionalArea'
I_JournalEntryItem.FunctionalArea,
//FunctionalAreaName,
@ObjectModel.foreignKey.association: '_BusinessArea'
I_JournalEntryItem.BusinessArea,
//BusinessAreaName,
@ObjectModel.foreignKey.association: '_Segment'
I_JournalEntryItem.Segment,
//SegmentName,
I_JournalEntryItem.PartnerCostCenter,
I_JournalEntryItem.PartnerProfitCenter,
I_JournalEntryItem.PartnerFunctionalArea,
I_JournalEntryItem.PartnerBusinessArea,
I_JournalEntryItem.PartnerCompany,
I_JournalEntryItem.PartnerSegment,


/////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
/////////////////////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
I_JournalEntryItem.BalanceTransactionCurrency as BalanceTransactionCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }  I_JournalEntryItem.AmountInBalanceTransacCrcy,

@ObjectModel.foreignKey.association: '_TransactionCurrency'
I_JournalEntryItem.TransactionCurrency as TransactionCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }  I_JournalEntryItem.AmountInTransactionCurrency,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
I_JournalEntryItem.CompanyCodeCurrency as CompanyCodeCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }  I_JournalEntryItem.AmountInCompanyCodeCurrency,



////////////////////////////////////
// NEW
@ObjectModel.foreignKey.association: '_GlobalCurrency'      
I_JournalEntryItem.GlobalCurrency as GlobalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.AmountInGlobalCurrency,

@ObjectModel.foreignKey.association: '_FunctionalCurrency'
I_JournalEntryItem.FunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
I_JournalEntryItem.AmountInFunctionalCurrency,  

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'      
I_JournalEntryItem.FreeDefinedCurrency1 as FreeDefinedCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency1,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'      
I_JournalEntryItem.FreeDefinedCurrency2 as FreeDefinedCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency2,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'      
I_JournalEntryItem.FreeDefinedCurrency3 as FreeDefinedCurrency3,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency3,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'      
I_JournalEntryItem.FreeDefinedCurrency4 as FreeDefinedCurrency4,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency4,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'      
I_JournalEntryItem.FreeDefinedCurrency5 as FreeDefinedCurrency5,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency5,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'      
I_JournalEntryItem.FreeDefinedCurrency6 as FreeDefinedCurrency6,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency6,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'      
I_JournalEntryItem.FreeDefinedCurrency7 as FreeDefinedCurrency7,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency7,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'      
I_JournalEntryItem.FreeDefinedCurrency8 as FreeDefinedCurrency8,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }  I_JournalEntryItem.AmountInFreeDefinedCurrency8,
////////////////////////////////////


////////////////////////////////////
// NEW
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.FixedAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.GrpValnFixedAmtInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.PrftCtrValnFxdAmtInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.TotalPriceVarcInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.GrpValnTotPrcVarcInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.PrftCtrValnTotPrcVarcInGlbCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.FixedPriceVarcInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.GrpValnFixedPrcVarcInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItem.PrftCtrValnFxdPrcVarcInGlbCrcy,

////////////////////////////////////
 

I_JournalEntryItem.ControllingObjectCurrency as ControllingObjectCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }  I_JournalEntryItem.AmountInObjectCurrency,

I_JournalEntryItem.GrantCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GrantCurrency'} }
I_JournalEntryItem.AmountInGrantCurrency,  


@ObjectModel.foreignKey.association: '_BaseUnit'
I_JournalEntryItem.BaseUnit as BaseUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } I_JournalEntryItem.Quantity,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }  I_JournalEntryItem.FixedQuantity,

@ObjectModel.foreignKey.association: '_CostSourceUnit'
I_JournalEntryItem.CostSourceUnit as CostSourceUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }  I_JournalEntryItem.ValuationQuantity,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }  I_JournalEntryItem.ValuationFixedQuantity,

@ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
I_JournalEntryItem.AdditionalQuantity1Unit as AdditionalQuantity1Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }  I_JournalEntryItem.AdditionalQuantity1,

@ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
I_JournalEntryItem.AdditionalQuantity2Unit as AdditionalQuantity2Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} } I_JournalEntryItem.AdditionalQuantity2,

@ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
I_JournalEntryItem.AdditionalQuantity3Unit as AdditionalQuantity3Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }  I_JournalEntryItem.AdditionalQuantity3,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_IncmpltSummableValnQtyUnt'
I_JournalEntryItem.IncmpltSummableValnQtyUnt,       // IncompleteSummableValuationQuantityUnit
      
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }
I_JournalEntryItem.IncmpltSummableValnQty,                 // IncompleteSummableValuationQuantity
      
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }
I_JournalEntryItem.IncmpltSummableValnFxdQty,               // IncompleteSummableValuationFixQuantity


/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_DebitCreditCode'
I_JournalEntryItem.DebitCreditCode,
I_JournalEntryItem.FiscalPeriod,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
I_JournalEntryItem.FiscalYearVariant,
I_JournalEntryItem.FiscalYearPeriod,
I_JournalEntryItem.PostingDate,
I_JournalEntryItem.DocumentDate,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
I_JournalEntryItem.AccountingDocumentType,
I_JournalEntryItem.AccountingDocumentItem,
I_JournalEntryItem.AssignmentReference,
I_JournalEntryItem.AccountingDocumentCategory,
I_JournalEntryItem.PostingKey,
I_JournalEntryItem.TransactionTypeDetermination,
@ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
I_JournalEntryItem.SubLedgerAcctLineItemType,
I_JournalEntryItem.AccountingDocCreatedByUser,
I_JournalEntryItem.LastChangeDateTime,
I_JournalEntryItem.CreationDateTime,
I_JournalEntryItem.CreationDate,
I_JournalEntryItem.EliminationProfitCenter,
I_JournalEntryItem.OriginObjectType,
I_JournalEntryItem.GLAccountType,
I_JournalEntryItem.AlternativeGLAccount,
I_JournalEntryItem.CountryChartOfAccounts,


/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_ConsolidationUnit'      
I_JournalEntryItem.ConsolidationUnit,
@ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'  
I_JournalEntryItem.PartnerConsolidationUnit,
@ObjectModel.foreignKey.association: '_Company'  
I_JournalEntryItem.Company, 
@ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts' 
I_JournalEntryItem.ConsolidationChartOfAccounts,
@ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem' 
I_JournalEntryItem.CnsldtnFinancialStatementItem,
@ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory' 
I_JournalEntryItem.CnsldtnSubitemCategory,
@ObjectModel.foreignKey.association: '_CnsldtnSubitem' 
I_JournalEntryItem.CnsldtnSubitem,  


///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.InvoiceReference,
I_JournalEntryItem.InvoiceReferenceFiscalYear,
I_JournalEntryItem.FollowOnDocumentType,
I_JournalEntryItem.InvoiceItemReference,
I_JournalEntryItem.ReferencePurchaseOrderCategory,
I_JournalEntryItem.PurchasingDocument,
I_JournalEntryItem.PurchasingDocumentItem,
I_JournalEntryItem.AccountAssignmentNumber,
I_JournalEntryItem.DocumentItemText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocument'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'SalesDocument'
I_JournalEntryItem.SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocumentItem'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'SalesDocumentItem'
I_JournalEntryItem.SalesOrderItem,
I_JournalEntryItem.SalesDocument,
I_JournalEntryItem.SalesDocumentItem,
@ObjectModel.foreignKey.association: '_Product'
I_JournalEntryItem.Product,
@ObjectModel.foreignKey.association: '_ProductGroup_2'
I_JournalEntryItem.ProductGroup,
@ObjectModel.foreignKey.association: '_Plant'
I_JournalEntryItem.Plant,
I_JournalEntryItem.Supplier,

@ObjectModel.foreignKey.association: '_Customer'
I_JournalEntryItem.Customer,
//@ObjectModel.readOnly:true
//@ObjectModel.virtualElement
//@ObjectModel.virtualElementCalculatedBy: 'ABAP:CL_BP_MULTI_ADDR_BF_CALC_EXIT'
//cast(' ' as fis_bpcustmultiaddr preserving type) as BPCustMultiAddrIsActive,

I_JournalEntryItem.ServicesRenderedDate,
I_JournalEntryItem.PerformancePeriodStartDate,
I_JournalEntryItem.PerformancePeriodEndDate,

I_JournalEntryItem.ComponentBreakdown,
I_JournalEntryItem.CompBreakdownScaleNumerator,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialAccountType'
I_JournalEntryItem.FinancialAccountType,
I_JournalEntryItem.SpecialGLCode,
I_JournalEntryItem.TaxCode,
I_JournalEntryItem.HouseBank,
I_JournalEntryItem.HouseBankAccount,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsOpenItemManaged,
I_JournalEntryItem.ClearingDate,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry' 
I_JournalEntryItem.ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
I_JournalEntryItem.ClearingDocFiscalYear,

I_JournalEntryItem.ClearingJournalEntry,
I_JournalEntryItem.ClearingJournalEntryFiscalYear,

//@Semantics.booleanIndicator
//cast( ( case ClearingDate when '00000000' then cast( ' ' as abap.char(1))              
//                                          else cast( 'X' as abap.char(1))
//       end )
//as farp_xaugp ) as IsCleared,
cast( ( case I_JournalEntryItem.ClearingDate when '00000000' then ' '               
                                          else 'X' 
       end )
as farp_xaugp preserving type ) as IsCleared,

I_JournalEntryItem.ValueDate,
I_JournalEntryItem.GeneralLedgerAgingScope,
I_JournalEntryItem.GeneralLedgerAgingIncrement,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.AssetDepreciationArea,
I_JournalEntryItem.MasterFixedAsset,
I_JournalEntryItem.FixedAsset,
I_JournalEntryItem.AssetValueDate,
I_JournalEntryItem.AssetTransactionType,
I_JournalEntryItem.AssetAcctTransClassfctn,
I_JournalEntryItem.DepreciationFiscalPeriod,
I_JournalEntryItem.GroupMasterFixedAsset,
I_JournalEntryItem.GroupFixedAsset,
I_JournalEntryItem.AssetClass,


//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.CostEstimate,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
I_JournalEntryItem.InventorySpecialStockValnType,   
@Analytics.internalName: #LOCAL            
I_JournalEntryItem.InvtrySpecialStockValnType_2,

//xobew,
I_JournalEntryItem.InventorySpecialStockType,
I_JournalEntryItem.InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
I_JournalEntryItem.InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpclStockWBSElmntIntID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
cast( I_JournalEntryItem.InventorySpclStockWBSElement as fis_invspstock_wbs_no_conv_dep preserving type ) as InventorySpclStockWBSElement,              //open again at 15.11.22
I_JournalEntryItem.InvtrySpclStockWBSElmntIntID,
I_JournalEntryItem.InventorySpecialStockSupplier,
I_JournalEntryItem.InventoryValuationType,
I_JournalEntryItem.ValuationArea,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.SenderGLAccount,
I_JournalEntryItem.SenderAccountAssignment,
I_JournalEntryItem.SenderAccountAssignmentType,



////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.ControllingObject,
I_JournalEntryItem.CostOriginGroup,
I_JournalEntryItem.OriginSenderObject,
I_JournalEntryItem.ControllingDebitCreditCode,
I_JournalEntryItem.ControllingObjectDebitType,
//@Semantics.booleanIndicator
I_JournalEntryItem.QuantityIsIncomplete,
I_JournalEntryItem.OffsettingAccount,
I_JournalEntryItem.OffsettingAccountType,
I_JournalEntryItem.OffsettingChartOfAccounts,
//@Semantics.booleanIndicator
I_JournalEntryItem.LineItemIsCompleted,
I_JournalEntryItem.PersonnelNumber,
I_JournalEntryItem.BillableControl,  
I_JournalEntryItem.ControllingObjectClass,
I_JournalEntryItem.PartnerCompanyCode,
I_JournalEntryItem.PartnerControllingObjectClass,
I_JournalEntryItem.OriginCostCenter,
I_JournalEntryItem.OriginProfitCenter,
I_JournalEntryItem.OriginCostCtrActivityType,
I_JournalEntryItem.OriginProduct,
I_JournalEntryItem.VarianceOriginGLAccount,
I_JournalEntryItem.AccountAssignment,
@Analytics.internalName: #LOCAL    
@ObjectModel.foreignKey.association: '_AccountAssignmentType'
I_JournalEntryItem.AccountAssignmentType,  
I_JournalEntryItem.CostCtrActivityType,
I_JournalEntryItem.OrderID,
I_JournalEntryItem.OrderCategory,
I_JournalEntryItem.WBSElementInternalID,    
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementInternalID'
cast( I_JournalEntryItem.WBSElement as fis_wbs_no_conv_depre preserving type ) as WBSElement,              //open again at 15.11.22
cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,  //new 14.10.2024
@ObjectModel.foreignKey.association: '_WorkPackage' 
I_JournalEntryItem.WorkPackage,
I_JournalEntryItem.ProjectInternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectInternalID'
cast( I_JournalEntryItem.Project as fis_project_no_conv_depre preserving type ) as Project,              //open again at 15.11.22
cast( _ProjectBasicData.ProjectExternalID  as fis_projectext_no_conv preserving type ) as ProjectExternalID, //new 14.10.2024
I_JournalEntryItem.OperatingConcern,
I_JournalEntryItem.ProjectNetwork,
I_JournalEntryItem.RelatedNetworkActivity,
I_JournalEntryItem.BusinessProcess,
I_JournalEntryItem.CostObject,
//bemot,
@ObjectModel.foreignKey.association: '_CostAnalysisResource'
I_JournalEntryItem.CostAnalysisResource,
I_JournalEntryItem.CustomerServiceNotification,
I_JournalEntryItem.ServiceDocumentType,
I_JournalEntryItem.ServiceDocument,
I_JournalEntryItem.ServiceDocumentItem,
I_JournalEntryItem.ServiceContract,
I_JournalEntryItem.ServiceContractType,
I_JournalEntryItem.ServiceContractItem,
I_JournalEntryItem.BusinessSolutionOrder,
I_JournalEntryItem.BusinessSolutionOrderItem,
@ObjectModel.foreignKey.association: '_ProviderContract'
I_JournalEntryItem.ProviderContract,
@ObjectModel.foreignKey.association: '_ProviderContractItem'
I_JournalEntryItem.ProviderContractItem,
I_JournalEntryItem.RevenueAccountingContract,
I_JournalEntryItem.PerformanceObligation, 
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
I_JournalEntryItem.TimeSheetOvertimeCategory,  
I_JournalEntryItem.PartnerServiceDocumentType,
I_JournalEntryItem.PartnerServiceDocument,
I_JournalEntryItem.PartnerServiceDocumentItem,
I_JournalEntryItem.PartnerAccountAssignment,
I_JournalEntryItem.PartnerAccountAssignmentType,
I_JournalEntryItem.PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerOrder_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerOrder_2'
I_JournalEntryItem.PartnerOrder,
I_JournalEntryItem.PartnerOrder_2,
I_JournalEntryItem.PartnerOrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementInternalID'
cast( I_JournalEntryItem.PartnerWBSElement as fis_partner_wbs_no_conv_depre preserving type ) as PartnerWBSElement,              //open again at 15.11.22
cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type ) as PartnerWBSElementExternalID, //new 14.10.2024
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectInternalID'
cast( I_JournalEntryItem.PartnerProject as fis_part_project_no_conv_depre preserving type ) as PartnerProject,              //open again at 15.11.22
cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type ) as PartnerProjectExternalID, //new 14.10.2024
I_JournalEntryItem.PartnerSalesDocument,
I_JournalEntryItem.PartnerSalesDocumentItem,
I_JournalEntryItem.PartnerProjectNetwork,
I_JournalEntryItem.PartnerProjectNetworkActivity,
I_JournalEntryItem.PartnerBusinessProcess,
I_JournalEntryItem.PartnerCostObject,
I_JournalEntryItem.PartnerProjectInternalID,
I_JournalEntryItem.PartnerWBSElementInternalID,
@ObjectModel.foreignKey.association: '_WorkPackageWorkItem' 
I_JournalEntryItem.WorkItem,
I_JournalEntryItem.VarianceOriginGroup,

//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
I_JournalEntryItem.BillingDocumentType,
I_JournalEntryItem.SalesOrganization,
I_JournalEntryItem.DistributionChannel,
I_JournalEntryItem.OrganizationDivision,
//SoldMaterial,                                        //do not use any longer, use SoldProduct
@ObjectModel.foreignKey.association: '_SoldProduct'
I_JournalEntryItem.SoldProduct, 
//@ObjectModel.foreignKey.association: '_MaterialGroup'
//MaterialGroup,                                       //do not use any longer, use SoldProduct
@ObjectModel.foreignKey.association: '_SoldProductGroup_2'
I_JournalEntryItem.SoldProductGroup,
@ObjectModel.foreignKey.association: '_CustomerGroup'
I_JournalEntryItem.CustomerGroup,

I_JournalEntryItem.CustomerSupplierCountry,
I_JournalEntryItem.CustomerSupplierIndustry,
I_JournalEntryItem.SalesDistrict,
I_JournalEntryItem.BillToParty,
I_JournalEntryItem.ShipToParty,
I_JournalEntryItem.CustomerSupplierCorporateGroup,

//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
I_JournalEntryItem.CashLedgerCompanyCode,

@ObjectModel.foreignKey.association: '_CashLedgerAccount'
I_JournalEntryItem.CashLedgerAccount,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
//      @ObjectModel.text.association: '_FinancialManagementAreaText'
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
I_JournalEntryItem.FinancialManagementArea,

I_JournalEntryItem.CommitmentItem,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundsCenterStdVH',
                     element: 'FundsCenter' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
@ObjectModel.foreignKey.association: '_FundsCenter'
I_JournalEntryItem.FundsCenter,

@ObjectModel.foreignKey.association: '_FundedProgram'
I_JournalEntryItem.FundedProgram,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundStdVH',
                     element: 'Fund' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
//      @ObjectModel.text.association: '_FundText'
@ObjectModel.foreignKey.association: '_Fund'
I_JournalEntryItem.Fund,

@ObjectModel.foreignKey.association: '_Grant'
I_JournalEntryItem.GrantID,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BudgetPeriodStdVH',
                     element: 'BudgetPeriod' }
        }]
//      @ObjectModel.text.association: '_BudgetPeriodText'
@ObjectModel.foreignKey.association: '_BudgetPeriod'
I_JournalEntryItem.BudgetPeriod,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundStdVH',
                     element: 'Fund' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
//      @ObjectModel.text.association: '_PartnerFundText'
@ObjectModel.foreignKey.association: '_PartnerFund'
I_JournalEntryItem.PartnerFund,

@ObjectModel.foreignKey.association: '_PartnerGrant'
I_JournalEntryItem.PartnerGrant,

@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
I_JournalEntryItem.PartnerBudgetPeriod,

@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
I_JournalEntryItem.PubSecBudgetAccount,

@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
I_JournalEntryItem.PubSecBudgetAccountCoCode,

@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
I_JournalEntryItem.PubSecBudgetCnsmpnDate,

@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
I_JournalEntryItem.PubSecBudgetCnsmpnFsclPeriod,

@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
I_JournalEntryItem.PubSecBudgetCnsmpnFsclYear,
//@Semantics.booleanIndicator 
I_JournalEntryItem.PubSecBudgetIsRelevant,

@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
I_JournalEntryItem.PubSecBudgetCnsmpnType,

@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
I_JournalEntryItem.PubSecBudgetCnsmpnAmtType,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredProgram'
I_JournalEntryItem.SponsoredProgram,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredClass'
I_JournalEntryItem.SponsoredClass,

I_JournalEntryItem.EarmarkedFundsDocument,
I_JournalEntryItem.EarmarkedFundsDocumentItem, 


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
//
// these 3 fields are not in C-View (24.04.23)
// get via datasource extension -> FK  gives VH 
// text.association has no effect -> ID+ Text in one column not possible
// with text.element 2 independent columns  ID and text , but not in 1 column ID+Text
////////////////////////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinServicesProductGroup'
@ObjectModel.text.association: '_FinServicesProductGroupText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItem.FinancialServicesProductGroup,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinancialServicesBranch'
@ObjectModel.text.association: '_FinancialServicesBranchText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItem.FinancialServicesBranch,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinancialDataSource'
@ObjectModel.text.association: '_FinancialDataSourceText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItem.FinancialDataSource,


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
I_JournalEntryItem.JointVenture,
I_JournalEntryItem.JointVentureEquityGroup,
I_JournalEntryItem.JointVentureCostRecoveryCode,
I_JournalEntryItem.JointVenturePartner,
I_JournalEntryItem.JointVentureBillingType,
I_JournalEntryItem.JointVentureEquityType,
I_JournalEntryItem.JointVentureProductionDate,
I_JournalEntryItem.JointVentureBillingDate,
I_JournalEntryItem.JointVentureOperationalDate,
I_JournalEntryItem.CutbackRun,
I_JournalEntryItem.JointVentureAccountingActivity,
I_JournalEntryItem.PartnerVenture,
I_JournalEntryItem.PartnerEquityGroup,
I_JournalEntryItem.SenderCostRecoveryCode,
I_JournalEntryItem.CutbackAccount,
I_JournalEntryItem.CutbackCostObject, 

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
I_JournalEntryItem.REBusinessEntity,
I_JournalEntryItem.RealEstateBuilding,
I_JournalEntryItem.RealEstateProperty,
I_JournalEntryItem.RERentalObject,
I_JournalEntryItem.RealEstateContract,                        
I_JournalEntryItem.REServiceChargeKey,
I_JournalEntryItem.RESettlementUnitID,
I_JournalEntryItem.SettlementReferenceDate,
I_JournalEntryItem.REPartnerBusinessEntity,
I_JournalEntryItem.RealEstatePartnerBuilding,
I_JournalEntryItem.RealEstatePartnerProperty,
I_JournalEntryItem.REPartnerRentalObject,
I_JournalEntryItem.RealEstatePartnerContract,
I_JournalEntryItem.REPartnerServiceChargeKey,
I_JournalEntryItem.REPartnerSettlementUnitID,
I_JournalEntryItem.PartnerSettlementReferenceDate,

 ///////////////////////////////////////////////////////////////////////
 // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
 ///////////////////////////////////////////////////////////////////////     
//   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
//   AccrualObjectType                                            AccrualItemType  are the corresponding types 
//@ObjectModel.foreignKey.association: '_AccrualObjectType'
I_JournalEntryItem.AccrualObjectType,
I_JournalEntryItem.AccrualObjectLogicalSystem,
//@ObjectModel.foreignKey.association: '_AccrualObject'
I_JournalEntryItem.AccrualObject,
//@ObjectModel.foreignKey.association: '_AccrualSubobject'
I_JournalEntryItem.AccrualSubobject,
//@ObjectModel.foreignKey.association: '_AccrualItemType'
I_JournalEntryItem.AccrualItemType, 
I_JournalEntryItem.AccrualReferenceObject,
I_JournalEntryItem.AccrualValueDate,


///////////////////////////////////////////////////////////////////////
 // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
 ///////////////////////////////////////////////////////////////////////    
I_JournalEntryItem.FinancialValuationObjectType,
I_JournalEntryItem.FinancialValuationObject,
I_JournalEntryItem.FinancialValuationSubobject,
I_JournalEntryItem.NetDueDate,
I_JournalEntryItem.CreditRiskClass,


//////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_TECH:  Universal Journal Entry: Technical Fields  //
////////////////////////////////////////////////////////////////////////// 
I_JournalEntryItem.JrnlEntryItemMigrationSource,


@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_JournalEntryItem.DebitAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_JournalEntryItem.CreditAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_JournalEntryItem.DebitAmountInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_JournalEntryItem.CreditAmountInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
I_JournalEntryItem.DebitAmountInBalanceTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
I_JournalEntryItem.CreditAmountInBalanceTransCrcy,


////////////////////////////////////
// NEW
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItem.DebitAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItem.CreditAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
I_JournalEntryItem.DebitAmountInFunctionalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
I_JournalEntryItem.CreditAmountInFunctionalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy1 as DebitAmountInFreeDfndCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy1 as CreditAmountInFreeDfndCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy2 as DebitAmountInFreeDfndCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy2 as CreditAmountInFreeDfndCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy3 as DebitAmountInFreeDfndCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy3 as CreditAmountInFreeDfndCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy4 as DebitAmountInFreeDfndCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy4 as CreditAmountInFreeDfndCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy5 as DebitAmountInFreeDfndCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy5 as CreditAmountInFreeDfndCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy6 as DebitAmountInFreeDfndCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy6 as CreditAmountInFreeDfndCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy7 as DebitAmountInFreeDfndCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy7 as CreditAmountInFreeDfndCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy8 as DebitAmountInFreeDfndCrcy8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy8 as CreditAmountInFreeDfndCrcy8,
//////////////////////////////////

  @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
//    case FinancialAccountType when 'S' then cast(DebitAmountInCoCodeCrcy as fis_sdr_hsl) 
//                                       else cast( cast( '0' as abap.curr( 23,2))  as fis_sdr_hsl)
//    end as GLDebitAmountInCoCodeCrcy,
    case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_sdr_hsl preserving type )
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_sdr_hsl preserving type )
    end 
    as GLDebitAmountInCoCodeCrcy,    
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
//    case FinancialAccountType when 'A' then cast(DebitAmountInCoCodeCrcy as fis_adr_hsl) 
//                        else cast( cast( '0' as abap.curr( 23,2)) as fis_adr_hsl)
//    end as AssetDebitAmtInCoCodeCrcy,
    case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_adr_hsl preserving type )
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_adr_hsl preserving type )
    end
    as AssetDebitAmtInCoCodeCrcy,    
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_mdr_hsl preserving type )
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_mdr_hsl preserving type )
    end
    as MaterialDebitAmtInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_ddr_hsl preserving type )
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_ddr_hsl preserving type )
    end 
    as DebtorDebitAmtInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_kdr_hsl preserving type ) 
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_kdr_hsl preserving type ) 
    end 
    as CreditorDebitAmtInCoCodeCrcy,

    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_scr_hsl preserving type ) 
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_scr_hsl preserving type ) 
    end
    as GLCreditAmountInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_acr_hsl preserving type )  
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_acr_hsl preserving type )  
    end
    as AssetCreditAmtInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_mcr_hsl preserving type ) 
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_mcr_hsl preserving type ) 
    end 
    as MaterialCreditAmtInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_dcr_hsl preserving type )
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_dcr_hsl preserving type )
    end
    as DebtorCreditAmtInCoCodeCrcy,
    
    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_kcr_hsl preserving type )   
                                       else cast( cast( 0 as abap.curr( 23,2) ) as fis_kcr_hsl preserving type )   
    end 
    as CreditorCreditAmtInCoCodeCrcy,

//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalOrder,  
//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalCostCenter,  
//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalSalesDocument,
//@Semantics.booleanIndicator
I_JournalEntryItem.WBSIsStatisticalWBSElement,  

@Aggregation.default: #SUM
I_JournalEntryItem.NumberOfItems, 

cast($parameters.P_ClearingStatusSelection as fis_clearingstatusselection preserving type ) as ClearingStatusSelection,


//$extension.*,

//_WBSElementInternalID,
_WBSElementExternalID,
_PartnerWBSElementExternalID,
I_JournalEntryItem._WBSElementBasicData,
//_WBSElement,
//_ProjectInternalID,
_ProjectExternalID,
_PartnerProjectExternalID,
I_JournalEntryItem._ProjectBasicData,
//_Project,

I_JournalEntryItem._JournalEntry,
I_JournalEntryItem._CompanyCode,
I_JournalEntryItem._FiscalYear,
I_JournalEntryItem._LedgerCompanyCodeCrcyRoles,
//_FiscalPeriod,
//_LedgerFiscalYear,
I_JournalEntryItem._FiscalYearVariant,
I_JournalEntryItem._FiscalPeriodForVariant,
I_JournalEntryItem._LedgerFiscalYearForVariant,
I_JournalEntryItem._ControllingArea,
I_JournalEntryItem._BalanceTransactionCurrency,
I_JournalEntryItem._TransactionCurrency,
I_JournalEntryItem._CompanyCodeCurrency,
I_JournalEntryItem._GlobalCurrency,
I_JournalEntryItem._FunctionalCurrency,
I_JournalEntryItem._FreeDefinedCurrency1,
I_JournalEntryItem._FreeDefinedCurrency2,
I_JournalEntryItem._FreeDefinedCurrency3,
I_JournalEntryItem._FreeDefinedCurrency4,
I_JournalEntryItem._FreeDefinedCurrency5,
I_JournalEntryItem._FreeDefinedCurrency6,
I_JournalEntryItem._FreeDefinedCurrency7,
I_JournalEntryItem._FreeDefinedCurrency8,
I_JournalEntryItem._BaseUnit,
I_JournalEntryItem._CostSourceUnit,
I_JournalEntryItem._AdditionalQuantity1Unit,
I_JournalEntryItem._AdditionalQuantity2Unit,
I_JournalEntryItem._AdditionalQuantity3Unit,
I_JournalEntryItem._IncmpltSummableValnQtyUnt,
I_JournalEntryItem._Segment,
I_JournalEntryItem._ProfitCenter,
I_JournalEntryItem._CurrentProfitCenter,
I_JournalEntryItem._CostCenter,
I_JournalEntryItem._CurrentCostCenter,
I_JournalEntryItem._CostAnalysisResource,
I_JournalEntryItem._AccountAssignmentType,
I_JournalEntryItem._BusinessArea,
I_JournalEntryItem._FunctionalArea,
I_JournalEntryItem._GLAccountInChartOfAccounts,
I_JournalEntryItem._GLAccountInCompanyCode,
I_JournalEntryItem._ChartOfAccounts,
I_JournalEntryItem._AccountingDocumentType,
I_JournalEntryItem._FinancialAccountType,
I_JournalEntryItem._DebitCreditCode, 
//_Material,
//_MaterialGroup,
I_JournalEntryItem._Product,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductGroup_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProductGroup_2'
I_JournalEntryItem._ProductGroup,
_ProductGroup_2,
I_JournalEntryItem._Plant,
I_JournalEntryItem._WorkPackageWorkItem,
I_JournalEntryItem._WorkPackage,
I_JournalEntryItem._Ledger,
I_JournalEntryItem._SourceLedger,

I_JournalEntryItem._Customer,
I_JournalEntryItem._CustomerCompany,
I_JournalEntryItem._CustomerGroup,

I_JournalEntryItem._Supplier,
I_JournalEntryItem._SupplierCompany,

//_SalesOrder,
//_SalesOrderItem,
I_JournalEntryItem._SalesDocument,
I_JournalEntryItem._SalesDocumentItem,

I_JournalEntryItem._InternalOrder,
I_JournalEntryItem._Order,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
I_JournalEntryItem._Employment,
_PersonWorkAgreement_1,
I_JournalEntryItem._BillableControl,

//_Extension  Extensions must be local

I_JournalEntryItem._FinancialTransactionType,
I_JournalEntryItem._BusinessTransactionCategory,
I_JournalEntryItem._BusinessTransactionType,
I_JournalEntryItem._ReferenceDocumentType,
I_JournalEntryItem._PredecessorReferenceDocType,

I_JournalEntryItem._PartnerCostCenter,
I_JournalEntryItem._PartnerProfitCenter,
I_JournalEntryItem._PartnerBusinessArea,
I_JournalEntryItem._PartnerFunctionalArea,
I_JournalEntryItem._PartnerCompanyCode,
I_JournalEntryItem._PartnerSegment,

I_JournalEntryItem._AccountingDocumentCategory,

I_JournalEntryItem._PostingKey,

I_JournalEntryItem._SubLedgerAccLineItemType,

I_JournalEntryItem._User,

I_JournalEntryItem._EliminationProfitCenter,

I_JournalEntryItem._ControllingObject,

I_JournalEntryItem._GLAccountType,
I_JournalEntryItem._AlternativeGLAccount,
//_SenderGLAccount,
I_JournalEntryItem._CountryChartOfAccounts,

I_JournalEntryItem._PurchasingDocument,
I_JournalEntryItem._PurchasingDocumentItem,

I_JournalEntryItem._SpecialGLCode,
I_JournalEntryItem._TaxCode,

I_JournalEntryItem._HouseBank,

I_JournalEntryItem._ClearingJrnlEntryFiscalYear,
I_JournalEntryItem._ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
I_JournalEntryItem._ClearingAccountingDocument,

I_JournalEntryItem._MasterFixedAsset,
I_JournalEntryItem._GroupMasterFixedAsset,
I_JournalEntryItem._FixedAsset,
I_JournalEntryItem._GroupFixedAsset,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
I_JournalEntryItem._InventorySpecialStockValnType,
I_JournalEntryItem._InventorySpclStockValnType, 

I_JournalEntryItem._InventorySpecialStockType,
I_JournalEntryItem._InventorySpclStkSalesDocument,
I_JournalEntryItem._InventorySpclStkSalesDocItm,
//_InventorySpclStockWBSElement,
I_JournalEntryItem._InvtrySpclStockWBSElmntBD as _InvtrySpclStkWBSElmntBscData,
I_JournalEntryItem._InventorySpecialStockSupplier,
I_JournalEntryItem._InventoryValuationType,
I_JournalEntryItem._OriginSenderObject,
I_JournalEntryItem._ControllingObjectClass,
I_JournalEntryItem._PartnerControllingObjectClass,
I_JournalEntryItem._OriginCostCenter,
I_JournalEntryItem._OriginProfitCenter,
I_JournalEntryItem._CostCtrActivityType,
I_JournalEntryItem._OriginCostCtrActivityType,
I_JournalEntryItem._OrderCategory,
//_RelatedNetworkActivity,
//_PartnerProjectNetworkActivity,

I_JournalEntryItem._BusinessProcess,
I_JournalEntryItem._PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrder_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerOrder_2'
I_JournalEntryItem._PartnerOrder,
_PartnerOrder_2,
I_JournalEntryItem._PartnerOrderCategory,
I_JournalEntryItem._PartnerWBSElementBasicData,
//_PartnerWBSElement,
I_JournalEntryItem._PartnerProjectBasicData,
//_PartnerProject,
I_JournalEntryItem._PartnerSalesDocument,
I_JournalEntryItem._PartnerSalesDocumentItem,
I_JournalEntryItem._PartnerBusinessProcess,

I_JournalEntryItem._BillingDocumentType,

I_JournalEntryItem._SalesOrganization,
I_JournalEntryItem._DistributionChannel,

I_JournalEntryItem._SoldProduct,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_SoldProductGroup_2'
I_JournalEntryItem._SoldProductGroup,
I_JournalEntryItem._SoldProductGroup_2,

I_JournalEntryItem._Fund,
I_JournalEntryItem._PartnerFund,
I_JournalEntryItem._FundsCenter,

I_JournalEntryItem._MovementCategory,
I_JournalEntryItem._AssetTransactionType,

I_JournalEntryItem._BudgetPeriod,

I_JournalEntryItem._CostOriginGroup,

I_JournalEntryItem._FinancialManagementArea,
//_FundedProgram

I_JournalEntryItem._HouseBankAccount,

I_JournalEntryItem._LogicalSystem,

I_JournalEntryItem._OperatingConcern,

I_JournalEntryItem._PartnerCompany,

I_JournalEntryItem._ProjectNetwork,

I_JournalEntryItem._PurReqValuationArea,
I_JournalEntryItem._OffsettingAccountType,
I_JournalEntryItem._OffsettingChartOfAccounts,
I_JournalEntryItem._OffsettingAccount,
I_JournalEntryItem._OffsettingAccountWithBP,
I_JournalEntryItem._LedgerText,
I_JournalEntryItem._DebitCreditCodeText,
I_JournalEntryItem._FunctionalAreaText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProfitCenterTxt'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProfitCenterTxt'
I_JournalEntryItem._ProfitCenterText,
I_JournalEntryItem._ProfitCenterTxt,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_CostCenterTxt'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_CostCenterTxt'
I_JournalEntryItem._CostCenterText,
I_JournalEntryItem._CostCenterTxt,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_GLAccountTxt'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_GLAccountTxt'
I_JournalEntryItem._GLAccountText,
I_JournalEntryItem._GLAccountTxt,
I_JournalEntryItem._BusinessAreaText,
I_JournalEntryItem._SegmentText,
I_JournalEntryItem._AccountingDocumentTypeText,
I_JournalEntryItem._SupplierText,
I_JournalEntryItem._ControllingAreaText,
I_JournalEntryItem._CustomerText,
I_JournalEntryItem._CompanyCodeText,
I_JournalEntryItem._OffsettingAccountText,
I_JournalEntryItem._MasterFixedAssetText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrderText_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerOrderText_2'
I_JournalEntryItem._PartnerOrderText,
_PartnerOrderText_2,
I_JournalEntryItem._GroupMasterFixedAssetText,

//_ProjectText,
I_JournalEntryItem._ServiceDocumentType,
I_JournalEntryItem._ServiceDocument,
I_JournalEntryItem._ServiceDocumentItem,
I_JournalEntryItem._ServiceContract,
I_JournalEntryItem._ServiceContractType,
I_JournalEntryItem._ServiceContractItem,
I_JournalEntryItem._TimeSheetOvertimeCat,
I_JournalEntryItem._PartnerServiceDocumentType,
I_JournalEntryItem._PartnerServiceDocument,
I_JournalEntryItem._PartnerServiceDocumentItem,

//_PartnerProjectBasicDataText,
//_PartnerWBSElemntBasicDataText,

I_JournalEntryItem._AccrualObjectType,
I_JournalEntryItem._AccrualObject,
I_JournalEntryItem._AccrualSubobject,
I_JournalEntryItem._AccrualItemType,

I_JournalEntryItem._CreditRiskClass,
I_JournalEntryItem._FinValuationObjectType,

I_JournalEntryItem._CashLedgerCompanyCode,
I_JournalEntryItem._CashLedgerAccount,
I_JournalEntryItem._FundedProgram,
I_JournalEntryItem._Grant,
I_JournalEntryItem._PartnerGrant,
I_JournalEntryItem._PartnerBudgetPeriod,
I_JournalEntryItem._PubSecBudgetAccountCoCode,
I_JournalEntryItem._PubSecBudgetAccount,
I_JournalEntryItem._PubSecBudgetCnsmpnDate,
I_JournalEntryItem._PubSecBudgetCnsmpnFsclPeriod,
I_JournalEntryItem._PubSecBudgetCnsmpnFsclYear,
I_JournalEntryItem._PubSecBudgetCnsmpnType,
I_JournalEntryItem._PubSecBudgetCnsmpnAmtType,
I_JournalEntryItem._SponsoredProgram,
I_JournalEntryItem._SponsoredClass,

I_JournalEntryItem._ConsolidationUnit,
I_JournalEntryItem._PartnerConsolidationUnit,
I_JournalEntryItem._Company,
I_JournalEntryItem._ConsolidationChartOfAccounts,
I_JournalEntryItem._CnsldtnFinancialStatementItem,
I_JournalEntryItem._CnsldtnSubitemCategory,
I_JournalEntryItem._CnsldtnSubitem, 

I_JournalEntryItem._ProviderContract,
I_JournalEntryItem._ProviderContractItem,

_FinServicesProductGroup,
_FinServicesProductGroupText,
_FinancialServicesBranch,
_FinancialServicesBranchText,
_FinancialDataSource,
_FinancialDataSourceText,
_CustomerSupplierIndustry,
I_JournalEntryItem._CustomerSupplierCountry  

}
```
