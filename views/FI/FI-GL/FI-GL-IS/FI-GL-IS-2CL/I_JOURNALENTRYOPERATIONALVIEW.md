---
name: I_JOURNALENTRYOPERATIONALVIEW
description: This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value
semantic_en: This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_JOURNALENTRYOPERATIONALVIEW

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AccountingDocumentCreationDate` |  | |  |  | `DATS(8)` | Accounting Document Entry Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Change Date |
| `JournalEntryLastChangeDateTime` |  | |  |  | `DEC(15)` | Journal Entry Last Change Date Time |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `TransactionCode` |  | |  |  | `CHAR(20)` | Transaction Code |
| `IntercompanyTransaction` |  | |  |  | `CHAR(16)` | Intercompany Transaction Number |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `RecurringAccountingDocument` |  | |  |  | `CHAR(10)` | Recurring Journal Entry |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document |
| `ReverseDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Reverse Document Fiscal Year |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `AbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `EffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Exchange Rate |
| `BatchInputSession` |  | |  |  | `CHAR(12)` | Batch Input Session |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Object key |
| `ReversalIsPlanned` |  | |  |  | `CHAR(1)` | Indicator: Reversal Is Planned for Document |
| `PlannedReversalDate` |  | |  |  | `DATS(8)` | Planned Date for the Reversal Posting |
| `TaxIsCalculatedAutomatically` |  | |  |  | `CHAR(1)` | Tax Is Automatically Calculated |
| `TaxBaseAmountIsNetAmount` |  | |  |  | `CHAR(1)` | Tax Base Amount is Net Amount |
| `SourceCompanyCode` |  | |  |  | `CHAR(4)` | Source Company Code |
| `TaxAbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Tax Exchange Rate |
| `TaxExchangeRate` |  | |  |  | `DEC(9)` | Tax Exchange Rate |
| `TaxExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Tax Exchange Rate Is Indirect Quotation |
| `TaxEffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Tax Exchange Rate |
| `ReversalReason` |  | |  |  | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `Branch` |  | |  |  | `CHAR(4)` | Branch |
| `Reference1InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `InvoiceReceiptDate` |  | |  |  | `DATS(8)` | Invoice Receipt Date |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `AlternativeReferenceDocument` |  | |  |  | `CHAR(26)` | Alternative Reference Document |
| `TaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `AccountingDocumentClass` |  | |  |  | `CHAR(6)` | Accounting Document Class |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `SenderLogicalSystem` |  | |  |  | `CHAR(10)` | Sender Logical System |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Sender System |
| `SenderAccountingDocument` |  | |  |  | `CHAR(10)` | Sender Journal Entry |
| `SenderFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year in Sender System |
| `LatePaymentReason` |  | |  |  | `CHAR(2)` | Late Payment Reason |
| `SalesDocumentCondition` |  | |  |  | `CHAR(10)` | Sales Document Condition |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
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
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Amount in Global Currency |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Amount in Global Currency |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Total Price Variance in Global Currency |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Total Price Variance in Global Currency |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Total Price Variance in Global Cur. |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Price Variance in Global Currency |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Price Variance in Global Currency |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Price Variance in Global Cur. |
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
| `CreationDateTime` |  | |  |  | `DEC(15)` | Date time of creation of Journal Entry Item |
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
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
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
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
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
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
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
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
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
| `ClearingCreationDate` |  | |  |  | `DATS(8)` | Clearing Creation Date |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `TaxType` |  | |  |  | `CHAR(1)` | Tax Type |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Corporate Group Account |
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `ScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line |
| `IsSalesRelated` |  | |  |  | `CHAR(1)` | Is Sales Related |
| `LineItemDisplayIsEnabled` |  | |  |  | `CHAR(1)` | Indicator: Can Line Items Be Displayed by Account? |
| `IsNotCashDiscountLiable` |  | |  |  | `CHAR(1)` | Is Not Cash Discount Liable |
| `IsAutomaticallyCreated` |  | |  |  | `CHAR(1)` | Is Automatically Created |
| `IsUsedInPaymentTransaction` |  | |  |  | `CHAR(1)` | Is Used In Payment Transaction |
| `OperationalGLAccount` |  | |  |  | `CHAR(10)` | Operational General Ledger Account |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Branch Account |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `ProfitLossAccountType` |  | |  |  | `CHAR(2)` | Profit Loss Account Type |
| `SpecialGLAccountAssignment` |  | |  |  | `CHAR(18)` | Assignment Number for Special G/L Accounts |
| `DueCalculationBaseDate` |  | |  |  | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentBlockingReason` |  | |  |  | `CHAR(1)` | Payment Blocking Reason |
| `FixedCashDiscount` |  | |  |  | `CHAR(1)` | Fixed Cash Discount |
| `TaxDistributionCode1` |  | |  |  | `CHAR(2)` | Tax Code 1 for Distribution |
| `TaxDistributionCode2` |  | |  |  | `CHAR(2)` | Tax Code 2 for Distribution |
| `TaxDistributionCode3` |  | |  |  | `CHAR(2)` | Tax Code 3 for Distribution |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `InvoiceList` |  | |  |  | `NUMC(8)` | Invoice List |
| `BillOfExchangeUsage` |  | |  |  | `CHAR(1)` | Bill of Exchange Usage Type |
| `DunningKey` |  | |  |  | `CHAR(1)` | Dunning Key |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `WithholdingTaxCertificate` |  | |  |  | `CHAR(10)` | Withholding Tax Certificate |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | Is completely delivered |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration |
| `DelivOfGoodsDestCountry` |  | |  |  | `CHAR(3)` | Country/Region of Destination for Delivery of Goods |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Treasury Contract Type |
| `AssetContract` |  | |  |  | `CHAR(13)` | Asset Contract |
| `CashFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  |  | `CHAR(8)` | Internal Key for Real Estate Object |
| `CommitmentItem` |  | |  |  | `CHAR(14)` | Commitment Item |
| `CommitmentItemShortID` |  | |  |  | `CHAR(14)` | Commitment Item ShortID |
| `OrderInternalBillOfOperations` |  | |  |  | `NUMC(10)` | Order Internal Bill of Operations ID |
| `OrderIntBillOfOperationsItem` |  | |  |  | `NUMC(8)` | Order Internal Bill of Operations Item |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Is EU Triangular Deal |
| `CompanyCodeCurrencyDetnMethod` |  | |  |  | `CHAR(1)` | Company Code Currency Determination Method |
| `ClearingIsReversed` |  | |  |  | `CHAR(1)` | Clearing Is Reversed |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment Method Supplement |
| `Reference1IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `IsNegativePosting` |  | |  |  | `CHAR(1)` | Is Negative Posting |
| `PaymentCardItem` |  | |  |  | `NUMC(3)` | Payment Card Item |
| `PaymentCardPaymentSettlement` |  | |  |  | `CHAR(10)` | Payment Card Payment Settlement |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `Reference3IDByBusinessPartner` |  | |  |  | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `DataExchangeInstruction1` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 1 |
| `DataExchangeInstruction2` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 2 |
| `DataExchangeInstruction3` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 3 |
| `DataExchangeInstruction4` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 4 |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `HasPaymentOrder` |  | |  |  | `CHAR(1)` | Indicator: Payment Order Exists for this Item |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determination of Tax Rates |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `TaxSection` |  | |  |  | `CHAR(4)` | Tax Section |
| `AccountsReceivableIsPledged` |  | |  |  | `CHAR(2)` | Accounts Receivable Is Pledged |
| `AcctsReceivablePledgingCode` |  | |  |  | `CHAR(2)` | Accounts Receivable Pledging Code |
| `CustomerIsInExecution` |  | |  |  | `CHAR(1)` | Customer Is In Execution |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `PaymentServiceProvider` |  | |  |  | `CHAR(4)` | Payment Service Provider |
| `PaymentRefByPaytSrvcProvider` |  | |  |  | `CHAR(35)` | Payment Reference by Payment Service Provider |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Reference Document |
| `AccountingDocumentItemRef` |  | |  |  | `NUMC(10)` | Journal Entry Line Item Reference |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | |  |  | `DATS(8)` | Cash Discount 2 Due Date |
| `BranchCode` |  | |  |  | `CHAR(5)` | Branch Code |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Currency for Automatic Payment |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Credit Control Area Currency |
| `GoodsMovementEntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `PurchasingDocumentPriceUnit` |  | |  |  | `UNIT(3)` | Purchasing Document Price Unit |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Material Price Unit Quantity |
| `IN_GSTPartner` |  | |  |  | `CHAR(10)` | GST Partner |
| `IN_GSTPlaceOfSupply` |  | |  |  | `CHAR(3)` | Place of Supply |
| `IN_HSNOrSACCode` |  | |  |  | `CHAR(16)` | HSN or SAC Code |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | G/L Account Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Supplier Basic Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Accounting Document Type Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
