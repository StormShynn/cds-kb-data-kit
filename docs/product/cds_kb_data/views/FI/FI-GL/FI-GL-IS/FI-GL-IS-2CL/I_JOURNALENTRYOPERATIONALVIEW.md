---
name: I_JOURNALENTRYOPERATIONALVIEW
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?"
semantic_vi: "Operational View on Journal Entry Item — CDS view giao diện dựa trên I_JournalEntryItem."
keywords:
  - "operational"
  - "journal"
  - "entry"
  - "item"
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
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_JOURNALENTRYOPERATIONALVIEW

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
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
| `CreationDateTime` |  | |  | `cast( I_JournalEntryItem.CreationDateTime as fis_creation_timestamp preserving type )` | `DEC(15)` | Date time of creation of Journal Entry Item |
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
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
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
| `WBSElementExternalID` |  | |  | `cast( I_JournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  | `cast( I_JournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` | `CHAR(24)` | Project External ID |
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
| `PartnerWBSElementExternalID` |  | |  | `cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  | `cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` | `CHAR(24)` | Partner Project External ID |
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
| `ClearingCreationDate` |  | | `_OperationalAcctgDocItem` | `ClearingCreationDate` | `DATS(8)` | Clearing Creation Date |
| `SpecialGLTransactionType` |  | | `_OperationalAcctgDocItem` | `SpecialGLTransactionType` | `CHAR(1)` | Special G/L Transaction Type |
| `WithholdingTaxCode` |  | | `_OperationalAcctgDocItem` | `WithholdingTaxCode` | `CHAR(2)` | Withholding Tax Code |
| `TaxType` |  | | `_OperationalAcctgDocItem` | `TaxType` | `CHAR(1)` | Tax Type |
| `ValueDate` |  | | `_OperationalAcctgDocItem` | `ValueDate` | `DATS(8)` | Value Date |
| `CorporateGroupAccount` |  | | `_OperationalAcctgDocItem` | `CorporateGroupAccount` | `CHAR(10)` | Corporate Group Account |
| `PlanningLevel` |  | | `_OperationalAcctgDocItem` | `PlanningLevel` | `CHAR(2)` | Planning Level |
| `BillingDocument` |  | | `_OperationalAcctgDocItem` | `BillingDocument` | `CHAR(10)` | Billing Document |
| `ScheduleLine` |  | | `_OperationalAcctgDocItem` | `ScheduleLine` | `NUMC(4)` | Schedule Line |
| `IsSalesRelated` |  | | `_OperationalAcctgDocItem` | `IsSalesRelated` | `CHAR(1)` | Is Sales Related |
| `LineItemDisplayIsEnabled` |  | | `_OperationalAcctgDocItem` | `LineItemDisplayIsEnabled` | `CHAR(1)` | Indicator: Can Line Items Be Displayed by Account? |
| `IsNotCashDiscountLiable` |  | | `_OperationalAcctgDocItem` | `IsNotCashDiscountLiable` | `CHAR(1)` | Is Not Cash Discount Liable |
| `IsAutomaticallyCreated` |  | | `_OperationalAcctgDocItem` | `IsAutomaticallyCreated` | `CHAR(1)` | Is Automatically Created |
| `IsUsedInPaymentTransaction` |  | | `_OperationalAcctgDocItem` | `IsUsedInPaymentTransaction` | `CHAR(1)` | Is Used In Payment Transaction |
| `OperationalGLAccount` |  | | `_OperationalAcctgDocItem` | `OperationalGLAccount` | `CHAR(10)` | Operational General Ledger Account |
| `BranchAccount` |  | | `_OperationalAcctgDocItem` | `BranchAccount` | `CHAR(10)` | Branch Account |
| `IsBalanceSheetAccount` |  | | `_OperationalAcctgDocItem` | `IsBalanceSheetAccount` | `CHAR(1)` | Is Balance Sheet Account |
| `ProfitLossAccountType` |  | | `_OperationalAcctgDocItem` | `ProfitLossAccountType` | `CHAR(2)` | Profit Loss Account Type |
| `SpecialGLAccountAssignment` |  | | `_OperationalAcctgDocItem` | `SpecialGLAccountAssignment` | `CHAR(18)` | Assignment Number for Special G/L Accounts |
| `DueCalculationBaseDate` |  | | `_OperationalAcctgDocItem` | `DueCalculationBaseDate` | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | | `_OperationalAcctgDocItem` | `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `PaymentMethod` |  | | `_OperationalAcctgDocItem` | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `PaymentBlockingReason` |  | | `_OperationalAcctgDocItem` | `PaymentBlockingReason` | `CHAR(1)` | Payment Blocking Reason |
| `FixedCashDiscount` |  | | `_OperationalAcctgDocItem` | `FixedCashDiscount` | `CHAR(1)` | Fixed Cash Discount |
| `TaxDistributionCode1` |  | | `_OperationalAcctgDocItem` | `TaxDistributionCode1` | `CHAR(2)` | Tax Code 1 for Distribution |
| `TaxDistributionCode2` |  | | `_OperationalAcctgDocItem` | `TaxDistributionCode2` | `CHAR(2)` | Tax Code 2 for Distribution |
| `TaxDistributionCode3` |  | | `_OperationalAcctgDocItem` | `TaxDistributionCode3` | `CHAR(2)` | Tax Code 3 for Distribution |
| `StateCentralBankPaymentReason` |  | | `_OperationalAcctgDocItem` | `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | | `_OperationalAcctgDocItem` | `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `InvoiceList` |  | | `_OperationalAcctgDocItem` | `InvoiceList` | `NUMC(8)` | Invoice List |
| `BillOfExchangeUsage` |  | | `_OperationalAcctgDocItem` | `BillOfExchangeUsage` | `CHAR(1)` | Bill of Exchange Usage Type |
| `DunningKey` |  | | `_OperationalAcctgDocItem` | `DunningKey` | `CHAR(1)` | Dunning Key |
| `LastDunningDate` |  | | `_OperationalAcctgDocItem` | `LastDunningDate` | `DATS(8)` | Date of Last Dunning Notice |
| `DunningLevel` |  | | `_OperationalAcctgDocItem` | `DunningLevel` | `NUMC(1)` | Dunning Level |
| `DunningArea` |  | | `_OperationalAcctgDocItem` | `DunningArea` | `CHAR(2)` | Dunning Area |
| `WithholdingTaxCertificate` |  | | `_OperationalAcctgDocItem` | `WithholdingTaxCertificate` | `CHAR(10)` | Withholding Tax Certificate |
| `IsCompletelyDelivered` |  | | `_OperationalAcctgDocItem` | `IsCompletelyDelivered` | `CHAR(1)` | Is completely delivered |
| `VATRegistration` |  | | `_OperationalAcctgDocItem` | `VATRegistration` | `CHAR(20)` | VAT Registration |
| `DelivOfGoodsDestCountry` |  | | `_OperationalAcctgDocItem` | `DelivOfGoodsDestCountry` | `CHAR(3)` | Country/Region of Destination for Delivery of Goods |
| `PaymentDifferenceReason` |  | | `_OperationalAcctgDocItem` | `PaymentDifferenceReason` | `CHAR(3)` | Payment Difference Reason |
| `TreasuryContractType` |  | | `_OperationalAcctgDocItem` | `TreasuryContractType` | `CHAR(1)` | Treasury Contract Type |
| `AssetContract` |  | | `_OperationalAcctgDocItem` | `AssetContract` | `CHAR(13)` | Asset Contract |
| `CashFlowType` |  | | `_OperationalAcctgDocItem` | `CashFlowType` | `CHAR(4)` | Flow Type |
| `TaxJurisdiction` |  | | `_OperationalAcctgDocItem` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `REInternalFinNumber` |  | | `_OperationalAcctgDocItem` | `REInternalFinNumber` | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | | `_OperationalAcctgDocItem` | `RealEstateObject` | `CHAR(8)` | Internal Key for Real Estate Object |
| `CommitmentItem` |  | | `_OperationalAcctgDocItem` | `CommitmentItem` | `CHAR(14)` | Commitment Item |
| `CommitmentItemShortID` |  | | `_OperationalAcctgDocItem` | `CommitmentItemShortID` | `CHAR(14)` | Commitment Item ShortID |
| `OrderInternalBillOfOperations` |  | | `_OperationalAcctgDocItem` | `OrderInternalBillOfOperations` | `NUMC(10)` | Order Internal Bill of Operations ID |
| `OrderIntBillOfOperationsItem` |  | | `_OperationalAcctgDocItem` | `OrderIntBillOfOperationsItem` | `NUMC(8)` | Order Internal Bill of Operations Item |
| `IsEUTriangularDeal` |  | | `_OperationalAcctgDocItem` | `IsEUTriangularDeal` | `CHAR(1)` | Is EU Triangular Deal |
| `CompanyCodeCurrencyDetnMethod` |  | | `_OperationalAcctgDocItem` | `CompanyCodeCurrencyDetnMethod` | `CHAR(1)` | Company Code Currency Determination Method |
| `ClearingIsReversed` |  | | `_OperationalAcctgDocItem` | `ClearingIsReversed` | `CHAR(1)` | Clearing Is Reversed |
| `PaymentMethodSupplement` |  | | `_OperationalAcctgDocItem` | `PaymentMethodSupplement` | `CHAR(2)` | Payment Method Supplement |
| `Reference1IDByBusinessPartner` |  | | `_OperationalAcctgDocItem` | `Reference1IDByBusinessPartner` | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | | `_OperationalAcctgDocItem` | `Reference2IDByBusinessPartner` | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `IsNegativePosting` |  | | `_OperationalAcctgDocItem` | `IsNegativePosting` | `CHAR(1)` | Is Negative Posting |
| `PaymentCardItem` |  | | `_OperationalAcctgDocItem` | `PaymentCardItem` | `NUMC(3)` | Payment Card Item |
| `PaymentCardPaymentSettlement` |  | | `_OperationalAcctgDocItem` | `PaymentCardPaymentSettlement` | `CHAR(10)` | Payment Card Payment Settlement |
| `CreditControlArea` |  | | `_OperationalAcctgDocItem` | `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `Reference3IDByBusinessPartner` |  | | `_OperationalAcctgDocItem` | `Reference3IDByBusinessPartner` | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `DataExchangeInstruction1` |  | | `_OperationalAcctgDocItem` | `DataExchangeInstruction1` | `NUMC(2)` | Data Exchange Instruction 1 |
| `DataExchangeInstruction2` |  | | `_OperationalAcctgDocItem` | `DataExchangeInstruction2` | `NUMC(2)` | Data Exchange Instruction 2 |
| `DataExchangeInstruction3` |  | | `_OperationalAcctgDocItem` | `DataExchangeInstruction3` | `NUMC(2)` | Data Exchange Instruction 3 |
| `DataExchangeInstruction4` |  | | `_OperationalAcctgDocItem` | `DataExchangeInstruction4` | `NUMC(2)` | Data Exchange Instruction 4 |
| `Region` |  | | `_OperationalAcctgDocItem` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `HasPaymentOrder` |  | | `_OperationalAcctgDocItem` | `HasPaymentOrder` | `CHAR(1)` | Indicator: Payment Order Exists for this Item |
| `PaymentReference` |  | | `_OperationalAcctgDocItem` | `PaymentReference` | `CHAR(30)` | Payment Reference |
| `TaxDeterminationDate` |  | | `_OperationalAcctgDocItem` | `TaxDeterminationDate` | `DATS(8)` | Date for Determination of Tax Rates |
| `BusinessPlace` |  | | `_OperationalAcctgDocItem` | `BusinessPlace` | `CHAR(4)` | Business Place |
| `TaxSection` |  | | `_OperationalAcctgDocItem` | `TaxSection` | `CHAR(4)` | Tax Section |
| `AccountsReceivableIsPledged` |  | | `_OperationalAcctgDocItem` | `AccountsReceivableIsPledged` | `CHAR(2)` | Accounts Receivable Is Pledged |
| `AcctsReceivablePledgingCode` |  | | `_OperationalAcctgDocItem` | `AcctsReceivablePledgingCode` | `CHAR(2)` | Accounts Receivable Pledging Code |
| `CustomerIsInExecution` |  | | `_OperationalAcctgDocItem` | `CustomerIsInExecution` | `CHAR(1)` | Customer Is In Execution |
| `CostElement` |  | | `_OperationalAcctgDocItem` | `CostElement` | `CHAR(10)` | Cost Element |
| `PaymentServiceProvider` |  | | `_OperationalAcctgDocItem` | `PaymentServiceProvider` | `CHAR(4)` | Payment Service Provider |
| `PaymentRefByPaytSrvcProvider` |  | | `_OperationalAcctgDocItem` | `PaymentRefByPaytSrvcProvider` | `CHAR(35)` | Payment Reference by Payment Service Provider |
| `SEPAMandate` |  | | `_OperationalAcctgDocItem` | `SEPAMandate` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `ReferenceDocumentLogicalSystem` |  | | `_OperationalAcctgDocItem` | `ReferenceDocumentLogicalSystem` | `CHAR(10)` | Logical System of Reference Document |
| `AccountingDocumentItemRef` |  | | `_OperationalAcctgDocItem` | `AccountingDocumentItemRef` | `NUMC(10)` | Journal Entry Line Item Reference |
| `CashDiscount1DueDate` |  | | `_OperationalAcctgDocItem` | `CashDiscount1DueDate` | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | | `_OperationalAcctgDocItem` | `CashDiscount2DueDate` | `DATS(8)` | Cash Discount 2 Due Date |
| `BranchCode` |  | | `_OperationalAcctgDocItem` | `BranchCode` | `CHAR(5)` | Branch Code |
| `PaymentCurrency` |  | | `_OperationalAcctgDocItem` | `PaymentCurrency` | `CUKY(5)` | Currency for Automatic Payment |
| `CreditControlAreaCurrency` |  | | `_OperationalAcctgDocItem` | `CreditControlAreaCurrency` | `CUKY(5)` | Credit Control Area Currency |
| `GoodsMovementEntryUnit` |  | | `_OperationalAcctgDocItem` | `GoodsMovementEntryUnit` | `UNIT(3)` | Unit of entry |
| `PurchasingDocumentPriceUnit` |  | | `_OperationalAcctgDocItem` | `PurchasingDocumentPriceUnit` | `UNIT(3)` | Purchasing Document Price Unit |
| `MaterialPriceUnitQty` |  | | `_OperationalAcctgDocItem` | `MaterialPriceUnitQty` | `DEC(5)` | Material Price Unit Quantity |
| `IN_GSTPartner` |  | | `_OperationalAcctgDocItem` | `IN_GSTPartner` | `CHAR(10)` | GST Partner |
| `IN_GSTPlaceOfSupply` |  | | `_OperationalAcctgDocItem` | `IN_GSTPlaceOfSupply` | `CHAR(3)` | Place of Supply |
| `IN_HSNOrSACCode` |  | | `_OperationalAcctgDocItem` | `IN_HSNOrSACCode` | `CHAR(16)` | HSN or SAC Code |
| `_WBSElementBasicData` |  | |  |  |  |  |
| `_Product` |  | |  |  |  |  |
| `_InvtrySpclStkWBSElmntBscData` |  | |  |  |  |  |
| `_PartnerWBSElementBasicData` |  | |  |  |  |  |
| `_Grant` |  | |  |  |  |  |
| `_PartnerGrant` |  | |  |  |  |  |
| `_FiscalYearPeriodForVariant` |  | |  |  |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | G/L Account Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Supplier Basic Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Accounting Document Type Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_ProjectExternalID` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Operational View on Journal Entry Item'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIJRNLENTOPV'
@AccessControl.personalData.blocking: #REQUIRED 
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, 
//                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@AccessControl.auditFilter: #ENABLED 
@Environment.sql.passValueForClient: true
                                     
define view entity I_JournalEntryOperationalView as select from  I_JournalEntryItem as I_JournalEntryItem
//                         inner join I_OperationalAcctgDocItem on I_JournalEntryItem.CompanyCode            = I_OperationalAcctgDocItem.CompanyCode and 
//                                                                 I_JournalEntryItem.FiscalYear             = I_OperationalAcctgDocItem.FiscalYear and
//                                                                 I_JournalEntryItem.AccountingDocument     = I_OperationalAcctgDocItem.AccountingDocument and
//                                                                 I_JournalEntryItem.AccountingDocumentItem = I_OperationalAcctgDocItem.AccountingDocumentItem
//                         inner join I_JournalEntry            on I_JournalEntryItem.CompanyCode            = I_JournalEntry.CompanyCode and 
//                                                                 I_JournalEntryItem.FiscalYear             = I_JournalEntry.FiscalYear and
//                                                                 I_JournalEntryItem.AccountingDocument     = I_JournalEntry.AccountingDocument                                                                                                                                   
                                               
association [0..1] to I_ProjectByExternalID       as _ProjectExternalID                on  $projection.ProjectExternalID            = _ProjectExternalID.ProjectExternalID  
association [0..1] to I_ProjectByExternalID       as _PartnerProjectExternalID         on  $projection.PartnerProjectExternalID     = _PartnerProjectExternalID.ProjectExternalID  

association [0..1] to I_WBSElementByExternalID    as _WBSElementExternalID             on  $projection.WBSElementExternalID         = _WBSElementExternalID.WBSElementExternalID
association [0..1] to I_WBSElementByExternalID    as _PartnerWBSElementExternalID      on  $projection.PartnerWBSElementExternalID  = _PartnerWBSElementExternalID.WBSElementExternalID

association [0..1] to I_WBSElementByExternalID    as _InvtrySpclStockWBSElmntExtID     on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID

association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1            on  $projection.PersonnelNumber              = _PersonWorkAgreement_1.PersonWorkAgreement

association [0..1] to I_OperationalAcctgDocItem   as _OperationalAcctgDocItem          on  $projection.CompanyCode                  = _OperationalAcctgDocItem.CompanyCode 
                                                                                       and $projection.FiscalYear                   = _OperationalAcctgDocItem.FiscalYear 
                                                                                       and $projection.AccountingDocument           = _OperationalAcctgDocItem.AccountingDocument 
                                                                                       and $projection.AccountingDocumentItem       = _OperationalAcctgDocItem.AccountingDocumentItem

association of exact one to exact one E_JournalEntryItem  as _Extension                on  $projection.SourceLedger                 = _Extension.SourceLedger
                                                                                       and $projection.CompanyCode                  = _Extension.CompanyCode
                                                                                       and $projection.FiscalYear                   = _Extension.FiscalYear
                                                                                       and $projection.AccountingDocument           = _Extension.AccountingDocument
                                                                                       and $projection.LedgerGLLineItem             = _Extension.LedgerGLLineItem
                                                                                                                                                      
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


@ObjectModel.foreignKey.association: '_FiscalYearVariant'   
@Semantics.fiscal.yearVariant: true   
I_JournalEntryItem.FiscalYearVariant,
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
I_JournalEntryItem.ChartOfAccounts,
@ObjectModel.foreignKey.association: '_ControllingArea'
I_JournalEntryItem.ControllingArea,

I_JournalEntryItem._JournalEntry.AccountingDocumentCreationDate,
I_JournalEntryItem._JournalEntry.CreationTime,
//aedat,
I_JournalEntryItem._JournalEntry.LastChangeDate,
I_JournalEntryItem._JournalEntry.JournalEntryLastChangeDateTime,
I_JournalEntryItem._JournalEntry.ExchangeRateDate,
I_JournalEntryItem._JournalEntry.TransactionCode,
I_JournalEntryItem._JournalEntry.IntercompanyTransaction,
I_JournalEntryItem._JournalEntry.DocumentReferenceID,
I_JournalEntryItem._JournalEntry.RecurringAccountingDocument,
I_JournalEntryItem._JournalEntry.ReverseDocument,
I_JournalEntryItem._JournalEntry.ReverseDocumentFiscalYear,
I_JournalEntryItem._JournalEntry.AccountingDocumentHeaderText,

// I_JournalEntry
//@Semantics.currencyCode:true
//I_JournalEntryItem.Currency,

I_JournalEntryItem._JournalEntry.AbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AbsoluteExchangeRate'
I_JournalEntryItem._JournalEntry.ExchangeRate, 
I_JournalEntryItem._JournalEntry.ExchRateIsIndirectQuotation,
I_JournalEntryItem._JournalEntry.EffectiveExchangeRate,

// I_JournalEntry
//@Semantics.currencyCode:true
//GroupCurrency,
//GroupCurrencyExchangeRate,

//xnetb,
//frath,
//xrueb,
I_JournalEntryItem._JournalEntry.BatchInputSession,
//dokid,
//arcid,
//iblar,
I_JournalEntryItem._JournalEntry.OriginalReferenceDocument,

// I_JournalEntry
//AdditionalCrcy1ExchangeRate,
//AdditionalCrcy2ExchangeRate,

//basw2,
//basw3,
//umrd2,
//umrd3,
//@Semantics.booleanIndicator
I_JournalEntryItem._JournalEntry.ReversalIsPlanned,
I_JournalEntryItem._JournalEntry.PlannedReversalDate,
//@Semantics.booleanIndicator
I_JournalEntryItem._JournalEntry.TaxIsCalculatedAutomatically,

// I_JournalEntry
//AdditionalCurrency1Role,
//AdditionalCurrency2Role,
//AddtionalCrcy1ExchangeRateType,
//AddtionalCrcy2ExchangeRateType,
//@Semantics.booleanIndicator
I_JournalEntryItem._JournalEntry.TaxBaseAmountIsNetAmount,
I_JournalEntryItem._JournalEntry.SourceCompanyCode,
//xusvr,
//duefl,
I_JournalEntryItem._JournalEntry.TaxAbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'TaxAbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'TaxAbsoluteExchangeRate'
I_JournalEntryItem._JournalEntry.TaxExchangeRate,
I_JournalEntryItem._JournalEntry.TaxExchRateIsIndirectQuotation,
I_JournalEntryItem._JournalEntry.TaxEffectiveExchangeRate,
//lotkz,
//xwvof,
I_JournalEntryItem._JournalEntry.ReversalReason,
//ppnam,
I_JournalEntryItem._JournalEntry.Branch,
//numpg,
//adisc,
I_JournalEntryItem._JournalEntry.Reference1InDocumentHeader,
I_JournalEntryItem._JournalEntry.Reference2InDocumentHeader,
I_JournalEntryItem._JournalEntry.InvoiceReceiptDate,
I_JournalEntryItem._JournalEntry.LedgerGroup,
//propmano,
I_JournalEntryItem._JournalEntry.AlternativeReferenceDocument,
I_JournalEntryItem._JournalEntry.TaxReportingDate,
I_JournalEntryItem._JournalEntry.AccountingDocumentClass,
//xsplit,
//cash_alloc,
//follow_on,
//xreorg,
//subset,
I_JournalEntryItem._JournalEntry.ExchangeRateType,
//kursx,
//kur2x,
//kur3x,
//xmca,
//resubmission,
I_JournalEntryItem._JournalEntry.SenderLogicalSystem,
I_JournalEntryItem._JournalEntry.SenderCompanyCode,
I_JournalEntryItem._JournalEntry.SenderAccountingDocument,
I_JournalEntryItem._JournalEntry.SenderFiscalYear,
//ccins,
//ccnum,
I_JournalEntryItem._JournalEntry.LatePaymentReason,
I_JournalEntryItem._JournalEntry.SalesDocumentCondition,

@ObjectModel.foreignKey.association: '_LedgerFiscalYear'
I_JournalEntryItem.LedgerFiscalYear,
I_JournalEntryItem.GLRecordType,

///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
I_JournalEntryItem.FinancialTransactionType,
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
I_JournalEntryItem.BusinessTransactionType,
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
I_JournalEntryItem.ReferenceDocumentType,
@ObjectModel.foreignKey.association: '_LogicalSystem'
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
@ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
I_JournalEntryItem.PredecessorReferenceDocType,
I_JournalEntryItem.PredecessorReferenceDocCntxt,  
I_JournalEntryItem.PredecessorReferenceDocument,
I_JournalEntryItem.PredecessorReferenceDocItem,
//PREC_SUBTA,

I_JournalEntryItem.SourceReferenceDocumentType,
I_JournalEntryItem.SourceLogicalSystem,
I_JournalEntryItem.SourceReferenceDocumentCntxt,
I_JournalEntryItem.SourceReferenceDocument,
I_JournalEntryItem.SourceReferenceDocumentItem,
I_JournalEntryItem.SourceReferenceDocSubitem,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsCommitment,     

@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
I_JournalEntryItem.GLAccount,


////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_CostCenter'
I_JournalEntryItem.CostCenter,
@ObjectModel.foreignKey.association: '_ProfitCenter'
I_JournalEntryItem.ProfitCenter,
@ObjectModel.foreignKey.association: '_FunctionalArea'
I_JournalEntryItem.FunctionalArea,
@ObjectModel.foreignKey.association: '_BusinessArea'
I_JournalEntryItem.BusinessArea,
@ObjectModel.foreignKey.association: '_Segment'
I_JournalEntryItem.Segment,
@ObjectModel.foreignKey.association: '_PartnerCostCenter'
I_JournalEntryItem.PartnerCostCenter,
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'
I_JournalEntryItem.PartnerProfitCenter,
@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
I_JournalEntryItem.PartnerFunctionalArea,
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
I_JournalEntryItem.PartnerBusinessArea,
@ObjectModel.foreignKey.association: '_PartnerCompany'
I_JournalEntryItem.PartnerCompany,
@ObjectModel.foreignKey.association: '_PartnerSegment'
I_JournalEntryItem.PartnerSegment,


/////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
/////////////////////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
I_JournalEntryItem.BalanceTransactionCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } I_JournalEntryItem.AmountInBalanceTransacCrcy,

@ObjectModel.foreignKey.association: '_TransactionCurrency'
I_JournalEntryItem.TransactionCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } I_JournalEntryItem.AmountInTransactionCurrency,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
I_JournalEntryItem.CompanyCodeCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } I_JournalEntryItem.AmountInCompanyCodeCurrency,


////////////////////////////////////
// NEW
@ObjectModel.foreignKey.association: '_GlobalCurrency'      
I_JournalEntryItem.GlobalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.AmountInGlobalCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.FixedAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.GrpValnFixedAmtInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.PrftCtrValnFxdAmtInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.TotalPriceVarcInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.GrpValnTotPrcVarcInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.PrftCtrValnTotPrcVarcInGlbCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.FixedPriceVarcInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.GrpValnFixedPrcVarcInGlobCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } I_JournalEntryItem.PrftCtrValnFxdPrcVarcInGlbCrcy,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'      
I_JournalEntryItem.FreeDefinedCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } I_JournalEntryItem.AmountInFreeDefinedCurrency1,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'      
I_JournalEntryItem.FreeDefinedCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } I_JournalEntryItem.AmountInFreeDefinedCurrency2,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'      
I_JournalEntryItem.FreeDefinedCurrency3,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } I_JournalEntryItem.AmountInFreeDefinedCurrency3,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'      
I_JournalEntryItem.FreeDefinedCurrency4,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } I_JournalEntryItem.AmountInFreeDefinedCurrency4,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'      
I_JournalEntryItem.FreeDefinedCurrency5,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } I_JournalEntryItem.AmountInFreeDefinedCurrency5,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'      
I_JournalEntryItem.FreeDefinedCurrency6,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } I_JournalEntryItem.AmountInFreeDefinedCurrency6,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'      
I_JournalEntryItem.FreeDefinedCurrency7,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } I_JournalEntryItem.AmountInFreeDefinedCurrency7,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'      
I_JournalEntryItem.FreeDefinedCurrency8,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } I_JournalEntryItem.AmountInFreeDefinedCurrency8,
////////////////////////////////////

I_JournalEntryItem.ControllingObjectCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} } I_JournalEntryItem.AmountInObjectCurrency,


@ObjectModel.foreignKey.association: '_BaseUnit'
I_JournalEntryItem.BaseUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } I_JournalEntryItem.Quantity,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } I_JournalEntryItem.FixedQuantity,

@ObjectModel.foreignKey.association: '_CostSourceUnit'
I_JournalEntryItem.CostSourceUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} } I_JournalEntryItem.ValuationQuantity,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} } I_JournalEntryItem.ValuationFixedQuantity,

@ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
I_JournalEntryItem.AdditionalQuantity1Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} } I_JournalEntryItem.AdditionalQuantity1,

@ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
I_JournalEntryItem.AdditionalQuantity2Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} } I_JournalEntryItem.AdditionalQuantity2,

@ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
I_JournalEntryItem.AdditionalQuantity3Unit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} } I_JournalEntryItem.AdditionalQuantity3,


/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_DebitCreditCode'
I_JournalEntryItem.DebitCreditCode,
@ObjectModel.foreignKey.association: '_FiscalPeriod'
@Semantics.fiscal.period: true
I_JournalEntryItem.FiscalPeriod,
@ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
I_JournalEntryItem.FiscalYearPeriod,
I_JournalEntryItem.PostingDate,
I_JournalEntryItem.DocumentDate,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
I_JournalEntryItem.AccountingDocumentType,
I_JournalEntryItem.AccountingDocumentItem,
I_JournalEntryItem.AssignmentReference,
@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
I_JournalEntryItem.AccountingDocumentCategory,
@ObjectModel.foreignKey.association: '_PostingKey'
I_JournalEntryItem.PostingKey,
I_JournalEntryItem.TransactionTypeDetermination,
@ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
I_JournalEntryItem.SubLedgerAcctLineItemType,
//@ObjectModel.foreignKey.association: '_User'
I_JournalEntryItem.AccountingDocCreatedByUser,
I_JournalEntryItem.LastChangeDateTime,
cast( I_JournalEntryItem.CreationDateTime as fis_creation_timestamp preserving type ) as CreationDateTime,
@ObjectModel.foreignKey.association: '_EliminationProfitCenter'
I_JournalEntryItem.EliminationProfitCenter,
I_JournalEntryItem.OriginObjectType,
@ObjectModel.foreignKey.association: '_GLAccountType'
I_JournalEntryItem.GLAccountType,
@ObjectModel.foreignKey.association: '_AlternativeGLAccount'
I_JournalEntryItem.AlternativeGLAccount,
@ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
I_JournalEntryItem.CountryChartOfAccounts,


///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.InvoiceReference,
I_JournalEntryItem.InvoiceReferenceFiscalYear,
I_JournalEntryItem.FollowOnDocumentType,
I_JournalEntryItem.InvoiceItemReference,
ReferencePurchaseOrderCategory,
@ObjectModel.foreignKey.association: '_PurchasingDocument'
I_JournalEntryItem.PurchasingDocument,
@ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
I_JournalEntryItem.PurchasingDocumentItem,
I_JournalEntryItem.AccountAssignmentNumber,
I_JournalEntryItem.DocumentItemText,

@ObjectModel.foreignKey.association: '_SalesDocument'
I_JournalEntryItem.SalesDocument,
@ObjectModel.foreignKey.association: '_SalesDocumentItem'
I_JournalEntryItem.SalesDocumentItem,
@ObjectModel.foreignKey.association: '_SalesOrder'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocument'
I_JournalEntryItem.SalesOrder,
@ObjectModel.foreignKey.association: '_SalesOrderItem'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocumentItem'
I_JournalEntryItem.SalesOrderItem,

@ObjectModel.foreignKey.association: '_Product'
I_JournalEntryItem.Product,
@ObjectModel.foreignKey.association: '_Material'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
I_JournalEntryItem.Material,

@ObjectModel.foreignKey.association: '_Plant'
I_JournalEntryItem.Plant,
@ObjectModel.foreignKey.association: '_Supplier'
I_JournalEntryItem.Supplier,
@ObjectModel.foreignKey.association: '_Customer'
I_JournalEntryItem.Customer,
I_JournalEntryItem.ServicesRenderedDate,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialAccountType'
I_JournalEntryItem.FinancialAccountType,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
I_JournalEntryItem.SpecialGLCode,
//@ObjectModel.foreignKey.association: '_TaxCode'
I_JournalEntryItem.TaxCode,
@ObjectModel.foreignKey.association: '_HouseBank'
I_JournalEntryItem.HouseBank,
@ObjectModel.foreignKey.association: '_HouseBankAccount'
I_JournalEntryItem.HouseBankAccount,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsOpenItemManaged,
I_JournalEntryItem.ClearingDate,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
I_JournalEntryItem.ClearingJournalEntryFiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
I_JournalEntryItem.ClearingDocFiscalYear,

@Analytics.internalName: #LOCAL        
@ObjectModel.foreignKey.association: '_ClearingJournalEntry'
I_JournalEntryItem.ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry'      
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
I_JournalEntryItem.ClearingAccountingDocument,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.AssetDepreciationArea,
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
I_JournalEntryItem.ServiceDocumentType,
@ObjectModel.foreignKey.association: '_ServiceDocument'
I_JournalEntryItem.ServiceDocument,
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
I_JournalEntryItem.ServiceDocumentItem,
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
I_JournalEntryItem.MasterFixedAsset,
@ObjectModel.foreignKey.association: '_FixedAsset'
I_JournalEntryItem.FixedAsset,
I_JournalEntryItem.AssetValueDate,
@ObjectModel.foreignKey.association: '_AssetTransactionType'
I_JournalEntryItem.AssetTransactionType,
@ObjectModel.foreignKey.association: '_MovementCategory'
I_JournalEntryItem.AssetAcctTransClassfctn,
I_JournalEntryItem.DepreciationFiscalPeriod,
@ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
I_JournalEntryItem.GroupMasterFixedAsset,
@ObjectModel.foreignKey.association: '_GroupFixedAsset'
I_JournalEntryItem.GroupFixedAsset,


//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////
I_JournalEntryItem.CostEstimate,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
@ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
I_JournalEntryItem.InventorySpecialStockValnType,   
@Analytics.internalName: #LOCAL         
@ObjectModel.foreignKey.association: '_InventorySpclStockValnType'      
I_JournalEntryItem.InvtrySpecialStockValnType_2,  

//xobew,
@ObjectModel.foreignKey.association: '_InventorySpecialStockType'
I_JournalEntryItem.InventorySpecialStockType,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
I_JournalEntryItem.InventorySpclStkSalesDocument, 
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
I_JournalEntryItem.InventorySpclStkSalesDocItm,

@ObjectModel.foreignKey.association: '_InvtrySpclStkWBSElmntBscData'
I_JournalEntryItem.InvtrySpclStockWBSElmntIntID,
@ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  'InvtrySpclStockWBSElmntExtID'
I_JournalEntryItem.InventorySpclStockWBSElement, 
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
//cast( COALESCE( _InvtrySpclStockWBSElmntBD.WBSElementExternalID , '' ) as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,
cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type ) as InvtrySpclStockWBSElmntExtID,

@ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
I_JournalEntryItem.InventorySpecialStockSupplier,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
I_JournalEntryItem.InventoryValuationType,
@ObjectModel.foreignKey.association: '_Purreqvaluationarea'
I_JournalEntryItem.ValuationArea,


////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
//@ObjectModel.foreignKey.association: '_SenderGLAccount' 
I_JournalEntryItem.SenderGLAccount,
I_JournalEntryItem.SenderAccountAssignment,
I_JournalEntryItem.SenderAccountAssignmentType,



////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_ControllingObject' 
I_JournalEntryItem.ControllingObject,
//@ObjectModel.foreignKey.association: '_CostOriginGroup'
I_JournalEntryItem.CostOriginGroup,
@ObjectModel.foreignKey.association: '_OriginSenderObject'
I_JournalEntryItem.OriginSenderObject,
I_JournalEntryItem.ControllingDebitCreditCode,
I_JournalEntryItem.ControllingObjectDebitType,
//@Semantics.booleanIndicator
I_JournalEntryItem.QuantityIsIncomplete,
@ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
I_JournalEntryItem.OffsettingChartOfAccounts,
@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
I_JournalEntryItem.OffsettingAccount,
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
I_JournalEntryItem.OffsettingAccountType,
//@Semantics.booleanIndicator
I_JournalEntryItem.LineItemIsCompleted,
I_JournalEntryItem.PersonnelNumber,
@ObjectModel.foreignKey.association: '_ControllingObjectClass'
I_JournalEntryItem.ControllingObjectClass,
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
I_JournalEntryItem.PartnerCompanyCode,
@ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
I_JournalEntryItem.PartnerControllingObjectClass,
@ObjectModel.foreignKey.association: '_OriginCostCenter'
I_JournalEntryItem.OriginCostCenter,
@ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
I_JournalEntryItem.OriginCostCtrActivityType,
I_JournalEntryItem.AccountAssignment,
I_JournalEntryItem.AccountAssignmentType,  
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
I_JournalEntryItem.CostCtrActivityType,
@ObjectModel.foreignKey.association: '_Order' 
I_JournalEntryItem.OrderID,
@ObjectModel.foreignKey.association: '_OrderCategory'
I_JournalEntryItem.OrderCategory,

@ObjectModel.foreignKey.association: '_WBSElement'      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'WBSElementExternalID'
I_JournalEntryItem.WBSElement,
@ObjectModel.foreignKey.association: '_WBSElementInternalID'      
I_JournalEntryItem.WBSElementInternalID,
@ObjectModel.foreignKey.association: '_WBSElementExternalID'      
//cast( COALESCE( I_JournalEntryItem._WBSElementBasicData.WBSElementExternalID , '' ) as fis_wbsext_no_conv ) as WBSElementExternalID,
cast( I_JournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,

@ObjectModel.foreignKey.association: '_WorkPackage' 
I_JournalEntryItem.WorkPackage,

@ObjectModel.foreignKey.association: '_Project'      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'ProjectExternalID'
I_JournalEntryItem.Project,
@ObjectModel.foreignKey.association: '_ProjectBasicData'      
I_JournalEntryItem.ProjectInternalID,
@ObjectModel.foreignKey.association: '_ProjectExternalID'      
//cast( COALESCE( I_JournalEntryItem._ProjectBasicData.ProjectExternalID , '' ) as fis_projectext_no_conv ) as ProjectExternalID,
cast( I_JournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type ) as ProjectExternalID,

@ObjectModel.foreignKey.association: '_OperatingConcern'      
I_JournalEntryItem.OperatingConcern,
@ObjectModel.foreignKey.association: '_ProjectNetwork'      
I_JournalEntryItem.ProjectNetwork,
I_JournalEntryItem.RelatedNetworkActivity,
@ObjectModel.foreignKey.association: '_BusinessProcess'
I_JournalEntryItem.BusinessProcess,
I_JournalEntryItem.CostObject,
//bemot,
@ObjectModel.foreignKey.association: '_CostAnalysisResource'
I_JournalEntryItem.CostAnalysisResource,
I_JournalEntryItem.CustomerServiceNotification,
I_JournalEntryItem.PartnerAccountAssignment,
I_JournalEntryItem.PartnerAccountAssignmentType,
@ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
I_JournalEntryItem.PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerOrder_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerOrder_2'
@ObjectModel.foreignKey.association: '_PartnerOrder'
I_JournalEntryItem.PartnerOrder,
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
I_JournalEntryItem.PartnerOrder_2,
@ObjectModel.foreignKey.association: '_PartnerOrderCategory'
I_JournalEntryItem.PartnerOrderCategory,

@ObjectModel.foreignKey.association: '_PartnerWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerWBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerWBSElementExternalID'
I_JournalEntryItem.PartnerWBSElement,
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'      
I_JournalEntryItem.PartnerWBSElementInternalID,
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'      
//cast( COALESCE( I_JournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID , '' ) as fis_partner_wbsext_no_conv ) as PartnerWBSElementExternalID,
cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type ) as PartnerWBSElementExternalID,

@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerProjectExternalID'
I_JournalEntryItem.PartnerProject,
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
I_JournalEntryItem.PartnerProjectInternalID, 
@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'      
//cast( COALESCE( I_JournalEntryItem._PartnerProjectBasicData.ProjectExternalID , '' ) as fis_part_projectext_no_conv ) as PartnerProjectExternalID,
cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type ) as PartnerProjectExternalID,

@ObjectModel.foreignKey.association: '_PartnerSalesDocument'
I_JournalEntryItem.PartnerSalesDocument,
@ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
I_JournalEntryItem.PartnerSalesDocumentItem,
I_JournalEntryItem.PartnerProjectNetwork,
I_JournalEntryItem.PartnerProjectNetworkActivity,
@ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
I_JournalEntryItem.PartnerBusinessProcess,
I_JournalEntryItem.PartnerCostObject,
@ObjectModel.foreignKey.association: '_WorkPackageWorkItem' 
I_JournalEntryItem.WorkItem,

//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_BillingDocumentType' 
I_JournalEntryItem.BillingDocumentType,
@ObjectModel.foreignKey.association: '_SalesOrganization' 
I_JournalEntryItem.SalesOrganization,
@ObjectModel.foreignKey.association: '_DistributionChannel' 
I_JournalEntryItem.DistributionChannel,
I_JournalEntryItem.OrganizationDivision,

@ObjectModel.foreignKey.association: '_SoldProduct'
I_JournalEntryItem.SoldProduct,
@ObjectModel.foreignKey.association: '_SoldMaterial'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProduct'
I_JournalEntryItem.SoldMaterial,

@ObjectModel.foreignKey.association: '_ProductGroup_2'
I_JournalEntryItem.ProductGroup,

@ObjectModel.foreignKey.association: '_MaterialGroup'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
I_JournalEntryItem.MaterialGroup,
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
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
I_JournalEntryItem.FinancialManagementArea,
@ObjectModel.foreignKey.association: '_Fund'
I_JournalEntryItem.Fund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Grant'
I_JournalEntryItem.GrantID,
@ObjectModel.foreignKey.association: '_BudgetPeriod'
I_JournalEntryItem.BudgetPeriod,
@ObjectModel.foreignKey.association: '_PartnerFund'
I_JournalEntryItem.PartnerFund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerGrant'
I_JournalEntryItem.PartnerGrant,
I_JournalEntryItem.PartnerBudgetPeriod,
@ObjectModel.foreignKey.association: '_FundsCenter'
I_JournalEntryItem.FundsCenter,
I_JournalEntryItem.FundedProgram,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
I_JournalEntryItem.JointVenture,
I_JournalEntryItem.JointVentureEquityGroup,
I_JournalEntryItem.JointVentureCostRecoveryCode,
//vptnr,
//btype,
I_JournalEntryItem.JointVentureEquityType,
//prodper,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
//swenr,
//sgenr,
//sgrnr,
//smenr,
//recnnr,
//snksl,
//sempsl,
I_JournalEntryItem.SettlementReferenceDate,
//pswenr,
//psgenr,
//psgrnr,
//psmenr,
//precnnr,
//psnksl,
//psempsl,
//pdabrz,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_VAL Universal Journal Entry: Fields for Fin. Valuation Object
///////////////////////////////////////////////////////////////////////
I_JournalEntryItem.NetDueDate,


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

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItem.DebitAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItem.CreditAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
I_JournalEntryItem.DebitAmountInFreeDefinedCrcy8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
I_JournalEntryItem.CreditAmountInFreeDefinedCrcy8,
//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalOrder,  
//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalCostCenter,  
//@Semantics.booleanIndicator
I_JournalEntryItem.IsStatisticalSalesDocument,
//@Semantics.booleanIndicator
I_JournalEntryItem.WBSIsStatisticalWBSElement,  


///////////////////////////////////////////////////////////////////////
// .View I_OperationalAcctgDocItem
///////////////////////////////////////////////////////////////////////
_OperationalAcctgDocItem.ClearingCreationDate,
_OperationalAcctgDocItem.SpecialGLTransactionType,
_OperationalAcctgDocItem.WithholdingTaxCode,
@ObjectModel.foreignKey.association: '_TaxType'
_OperationalAcctgDocItem.TaxType,
_OperationalAcctgDocItem.ValueDate,
_OperationalAcctgDocItem.CorporateGroupAccount,
_OperationalAcctgDocItem.PlanningLevel,
_OperationalAcctgDocItem.BillingDocument,
//@ObjectModel.foreignKey.association: '_SalesDocument'
//_OperationalAcctgDocItem.SalesDocument,
//@ObjectModel.foreignKey.association: '_SalesDocumentItem'
//_OperationalAcctgDocItem.SalesDocumentItem,
_OperationalAcctgDocItem.ScheduleLine,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsSalesRelated,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.LineItemDisplayIsEnabled,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsNotCashDiscountLiable,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsAutomaticallyCreated,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsUsedInPaymentTransaction,
_OperationalAcctgDocItem.OperationalGLAccount,
_OperationalAcctgDocItem.BranchAccount,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsBalanceSheetAccount,
_OperationalAcctgDocItem.ProfitLossAccountType,
_OperationalAcctgDocItem.SpecialGLAccountAssignment,
_OperationalAcctgDocItem.DueCalculationBaseDate,
_OperationalAcctgDocItem.PaymentTerms,
_OperationalAcctgDocItem.PaymentMethod,
_OperationalAcctgDocItem.PaymentBlockingReason,
_OperationalAcctgDocItem.FixedCashDiscount,
_OperationalAcctgDocItem.TaxDistributionCode1,
_OperationalAcctgDocItem.TaxDistributionCode2,
_OperationalAcctgDocItem.TaxDistributionCode3,
_OperationalAcctgDocItem.StateCentralBankPaymentReason,
@ObjectModel.foreignKey.association: '_SupplyingCountry'
_OperationalAcctgDocItem.SupplyingCountry,
_OperationalAcctgDocItem.InvoiceList,
//SettlementFiscalYearPeriod,
_OperationalAcctgDocItem.BillOfExchangeUsage,
_OperationalAcctgDocItem.DunningKey,
//DunningBlockingReason,
_OperationalAcctgDocItem.LastDunningDate,
_OperationalAcctgDocItem.DunningLevel,
_OperationalAcctgDocItem.DunningArea,
_OperationalAcctgDocItem.WithholdingTaxCertificate,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsCompletelyDelivered,
_OperationalAcctgDocItem.VATRegistration,
_OperationalAcctgDocItem.DelivOfGoodsDestCountry,
//@ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
_OperationalAcctgDocItem.PaymentDifferenceReason,
_OperationalAcctgDocItem.TreasuryContractType,
_OperationalAcctgDocItem.AssetContract,
_OperationalAcctgDocItem.CashFlowType,
_OperationalAcctgDocItem.TaxJurisdiction,

//@ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
_OperationalAcctgDocItem.REInternalFinNumber,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'REInternalFinNumber'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'REInternalFinNumber'
_OperationalAcctgDocItem.RealEstateObject,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'CommitmentItemShortID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'CommitmentItemShortID'
_OperationalAcctgDocItem.CommitmentItem,
_OperationalAcctgDocItem.CommitmentItemShortID,
_OperationalAcctgDocItem.OrderInternalBillOfOperations,
_OperationalAcctgDocItem.OrderIntBillOfOperationsItem,
//_OperationalAcctgDocItem.WBSElementInternalID,
_OperationalAcctgDocItem.IsEUTriangularDeal,
_OperationalAcctgDocItem.CompanyCodeCurrencyDetnMethod,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.ClearingIsReversed,
_OperationalAcctgDocItem.PaymentMethodSupplement,
_OperationalAcctgDocItem.Reference1IDByBusinessPartner,
_OperationalAcctgDocItem.Reference2IDByBusinessPartner,
//@Semantics.booleanIndicator
_OperationalAcctgDocItem.IsNegativePosting,
_OperationalAcctgDocItem.PaymentCardItem,
_OperationalAcctgDocItem.PaymentCardPaymentSettlement,
_OperationalAcctgDocItem.CreditControlArea,
_OperationalAcctgDocItem.Reference3IDByBusinessPartner,
_OperationalAcctgDocItem.DataExchangeInstruction1,
_OperationalAcctgDocItem.DataExchangeInstruction2,
_OperationalAcctgDocItem.DataExchangeInstruction3,
_OperationalAcctgDocItem.DataExchangeInstruction4,
_OperationalAcctgDocItem.Region,
_OperationalAcctgDocItem.HasPaymentOrder,
_OperationalAcctgDocItem.PaymentReference,
_OperationalAcctgDocItem.TaxDeterminationDate,
_OperationalAcctgDocItem.BusinessPlace,
_OperationalAcctgDocItem.TaxSection,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AcctsReceivablePledgingCode'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AcctsReceivablePledgingCode'
_OperationalAcctgDocItem.AccountsReceivableIsPledged,
_OperationalAcctgDocItem.AcctsReceivablePledgingCode as AcctsReceivablePledgingCode,

_OperationalAcctgDocItem.CustomerIsInExecution,
_OperationalAcctgDocItem.CostElement,
_OperationalAcctgDocItem.PaymentServiceProvider,
_OperationalAcctgDocItem.PaymentRefByPaytSrvcProvider,
_OperationalAcctgDocItem.SEPAMandate,
_OperationalAcctgDocItem.ReferenceDocumentLogicalSystem,
_OperationalAcctgDocItem.AccountingDocumentItemRef,
// field NetDueDate now retrieved from I_JournalEntryItem
//_OperationalAcctgDocItem.NetDueDate,
_OperationalAcctgDocItem.CashDiscount1DueDate,
_OperationalAcctgDocItem.CashDiscount2DueDate,
_OperationalAcctgDocItem.BranchCode,

@ObjectModel.foreignKey.association: '_PaymentCurrency'
_OperationalAcctgDocItem.PaymentCurrency,

@ObjectModel.foreignKey.association: '_CreditControlAreaCurrency'
_OperationalAcctgDocItem.CreditControlAreaCurrency,

@ObjectModel.foreignKey.association: '_GoodsMovementEntryUnit'
_OperationalAcctgDocItem.GoodsMovementEntryUnit,

@ObjectModel.foreignKey.association: '_PurchasingDocumentPriceUnit'
_OperationalAcctgDocItem.PurchasingDocumentPriceUnit,

//      @Aggregation.default: #NONE   // Is default for Type DEC unsigned and 0 decimals in SADL, in AE it will be treated as characteristic 
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
_OperationalAcctgDocItem.MaterialPriceUnitQty,

///////////////////////////////////////////////////////////////////////////////
//GST India BSEG Append
///////////////////////////////////////////////////////////////////////////////
_OperationalAcctgDocItem.IN_GSTPartner,
_OperationalAcctgDocItem.IN_GSTPlaceOfSupply,
_OperationalAcctgDocItem.IN_HSNOrSACCode,    

I_JournalEntryItem._JournalEntry,
I_JournalEntryItem._CompanyCode,
I_JournalEntryItem._FiscalYear,
I_JournalEntryItem._FiscalPeriod,
I_JournalEntryItem._LedgerFiscalYear,
I_JournalEntryItem._FiscalYearVariant,
I_JournalEntryItem._ControllingArea,
I_JournalEntryItem._BalanceTransactionCurrency,
I_JournalEntryItem._TransactionCurrency,
I_JournalEntryItem._CompanyCodeCurrency,
I_JournalEntryItem._GlobalCurrency,
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
I_JournalEntryItem._Segment,
I_JournalEntryItem._ProfitCenter,
I_JournalEntryItem._CurrentProfitCenter,
I_JournalEntryItem._CostCenter,
I_JournalEntryItem._CurrentCostCenter,
I_JournalEntryItem._CostAnalysisResource,

I_JournalEntryItem._WBSElementBasicData as _WBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementBasicData'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementBasicData'
I_JournalEntryItem._WBSElementInternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalID'
I_JournalEntryItem._WBSElement,
_WBSElementExternalID,

I_JournalEntryItem._ProjectBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProjectExternalID'
I_JournalEntryItem._Project,
_ProjectExternalID,

I_JournalEntryItem._BusinessArea,
I_JournalEntryItem._FunctionalArea,
I_JournalEntryItem._GLAccountInChartOfAccounts,
I_JournalEntryItem._GLAccountInCompanyCode,
I_JournalEntryItem._ChartOfAccounts,
I_JournalEntryItem._AccountingDocumentType,
I_JournalEntryItem._FinancialAccountType,
I_JournalEntryItem._DebitCreditCode, 

I_JournalEntryItem._Product as _Product,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
I_JournalEntryItem._Material,

I_JournalEntryItem._Plant,
I_JournalEntryItem._OffsettingAccountType,
I_JournalEntryItem._OffsettingChartOfAccounts,
I_JournalEntryItem._OffsettingAccount,
I_JournalEntryItem._OffsettingAccountWithBP,
I_JournalEntryItem._WorkPackageWorkItem,
I_JournalEntryItem._WorkPackage,
I_JournalEntryItem._Ledger,
I_JournalEntryItem._SourceLedger,

I_JournalEntryItem._Customer,
I_JournalEntryItem._CustomerGroup,
I_JournalEntryItem._Supplier,

I_JournalEntryItem._ProductGroup_2,

I_JournalEntryItem._SoldProductGroup_2,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
I_JournalEntryItem._MaterialGroup,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
I_JournalEntryItem._SoldProductGroup,

I_JournalEntryItem._SalesDocument,
I_JournalEntryItem._SalesDocumentItem,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocument'
I_JournalEntryItem._SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocumentItem'
I_JournalEntryItem._SalesOrderItem,
// _Order,
I_JournalEntryItem._InternalOrder,
I_JournalEntryItem._Order,

_PersonWorkAgreement_1,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PersonWorkAgreement_1'
I_JournalEntryItem._Employment,

I_JournalEntryItem._FinancialTransactionType,
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
I_JournalEntryItem._GroupFixedAsset,
I_JournalEntryItem._FixedAsset,
I_JournalEntryItem._GroupMasterFixedAsset,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
I_JournalEntryItem._InventorySpecialStockValnType,
I_JournalEntryItem._InventorySpclStockValnType,  

I_JournalEntryItem._InventorySpecialStockType,
I_JournalEntryItem._InventorySpclStkSalesDocument,
I_JournalEntryItem._InventorySpclStkSalesDocItm,

I_JournalEntryItem._InvtrySpclStkWBSElmntBscData as _InvtrySpclStkWBSElmntBscData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InvtrySpclStkWBSElmntBscData'
I_JournalEntryItem._InvtrySpclStockWBSElmntIntID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InvtrySpclStockWBSElmntExtID'
I_JournalEntryItem._InventorySpclStockWBSElement,
_InvtrySpclStockWBSElmntExtID,

I_JournalEntryItem._InventorySpecialStockSupplier,
I_JournalEntryItem._InventoryValuationType,
I_JournalEntryItem._OriginSenderObject,
I_JournalEntryItem._ControllingObjectClass,
I_JournalEntryItem._PartnerControllingObjectClass,
I_JournalEntryItem._OriginCostCenter,
I_JournalEntryItem._CostCtrActivityType,
I_JournalEntryItem._OriginCostCtrActivityType,
I_JournalEntryItem._OrderCategory,
//_RelatedNetworkActivity,
//_PartnerProjectNetworkActivity,
I_JournalEntryItem._BusinessProcess,
I_JournalEntryItem._PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrder_2'
I_JournalEntryItem._PartnerOrder,
I_JournalEntryItem._PartnerOrder_2,
I_JournalEntryItem._PartnerOrderCategory,

I_JournalEntryItem._PartnerWBSElementBasicData as _PartnerWBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerWBSElementExternalID'
I_JournalEntryItem._PartnerWBSElement,
_PartnerWBSElementExternalID,

I_JournalEntryItem._PartnerProjectBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
I_JournalEntryItem._PartnerProject,
_PartnerProjectExternalID,

I_JournalEntryItem._PartnerSalesDocument,
I_JournalEntryItem._PartnerSalesDocumentItem,
I_JournalEntryItem._PartnerBusinessProcess,
I_JournalEntryItem._BillingDocumentType,
I_JournalEntryItem._SalesOrganization,
I_JournalEntryItem._DistributionChannel,

I_JournalEntryItem._SoldProduct,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'
I_JournalEntryItem._SoldMaterial,

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
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_JournalEntryItem._PurReqValuationArea,
_OperationalAcctgDocItem,

_OperationalAcctgDocItem._PaymentCurrency,
_OperationalAcctgDocItem._CreditControlAreaCurrency,
_OperationalAcctgDocItem._GoodsMovementEntryUnit,
_OperationalAcctgDocItem._PurchasingDocumentPriceUnit,
//_OperationalAcctgDocItem._PaymentDifferenceReason,
_OperationalAcctgDocItem._SupplyingCountry,
_OperationalAcctgDocItem._TaxType,

I_JournalEntryItem._ServiceDocumentType,
I_JournalEntryItem._ServiceDocument,
I_JournalEntryItem._ServiceDocumentItem,

//_OperationalAcctgDocItem._REObjectByIntFinNumber,

I_JournalEntryItem._Grant as _Grant,
I_JournalEntryItem._PartnerGrant as _PartnerGrant,

I_JournalEntryItem._FiscalYearPeriodForVariant as _FiscalYearPeriodForVariant,

//_OperationalAcctgDocItem._WBSElementInternalID,
      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.GLAccountAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.SupplierBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.CustomerBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.AcctgDocTypeAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.OrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
      I_JournalEntryItem.SalesOrderType,
      I_JournalEntryItem.AssetClass

}
```
