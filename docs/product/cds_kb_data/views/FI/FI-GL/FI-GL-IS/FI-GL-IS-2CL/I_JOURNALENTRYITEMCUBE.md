---
name: I_JOURNALENTRYITEMCUBE
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. Additionally some associations are resolved to use fields from these associations, especially header fields. The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMCUBE')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. Additionally some associations are resolved to use fields from these associations, especially header fields. The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
semantic_vi: "Journal Entry Item - Cube — CDS view tổng hợp dựa trên I_JournalEntryItem."
keywords:
  - "Journal Entry Item - Cube"
  - "journal"
  - "entry"
  - "item"
  - "cube"
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
# I_JOURNALENTRYITEMCUBE

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. Additionally some associations are resolved to use fields from these associations, especially header fields. The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMCUBE')/$value) |

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
| `LedgerName` |  | |  | `I_JournalEntryItem._Ledger._Text[1: Language = $session.system_language].LedgerName` | `CHAR(30)` | Ledger Name |
| `CompanyCodeName` |  | |  | `cast( I_JournalEntryItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )` | `CHAR(25)` | Company Code Name |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  | `cast( I_JournalEntryItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )` | `CHAR(25)` | Controlling Area Name |
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
| `GLAccountName` |  | |  | `cast( I_JournalEntryItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )` | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  | `cast( I_JournalEntryItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )` | `CHAR(50)` | G/L Account Long Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  | `cast( I_JournalEntryItem._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_kostl_name preserving type )` | `CHAR(20)` | Cost Center Name |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  | `I_JournalEntryItem._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  | `cast( I_JournalEntryItem._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )` | `CHAR(30)` | Functional Area Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  | `cast( I_JournalEntryItem._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )` | `CHAR(30)` | Business Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  | `I_JournalEntryItem._Segment._Text[1: Language = $session.system_language].SegmentName` | `CHAR(50)` | Segment Name |
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
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
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
| `ReferenceQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Reference Quantity |
| `ReferenceQuantity` |  | |  |  | `QUAN(23)` | Reference quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DebitCreditCodeName` |  | |  | `cast( I_JournalEntryItem._DebitCreditCode._Text[1: Language = $session.system_language].DebitCreditCodeName as fis_shkzg_name preserving type )` | `CHAR(60)` | Debit/Credit Code Name |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  | `I_JournalEntryItem._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
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
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
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
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `IsCleared` |  | |  | `case I_JournalEntryItem.ClearingDate when '00000000' then cast(' ' as farp_xaugp preserving type ) else cast('X' as farp_xaugp preserving type ) end` | `CHAR(1)` | Indicator: Has the Item Been Cleared? |
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
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpclStockWBSElement` |  | |  | `cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElement as fis_invspstock_wbs preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element |
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
| `OffsettingAccountName` |  | |  |  | `CHAR(80)` | Name of Offsetting Account |
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
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  | `cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` | `CHAR(24)` | Partner WBS Element External ID |
| `WBSElementExternalID` |  | |  | `cast( I_JournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `WBSElement` |  | |  | `cast( I_JournalEntryItem.WBSElement as fis_wbs preserving type )` | `CHAR(24)` | WBS Element |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `ProjectExternalID` |  | |  | `cast( I_JournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` | `CHAR(24)` | Project External ID |
| `PartnerProjectExternalID` |  | |  | `cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` | `CHAR(24)` | Partner Project External ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `Project` |  | |  | `cast( I_JournalEntryItem.Project as fis_project preserving type )` | `CHAR(24)` | Project |
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
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  | `cast( I_JournalEntryItem.PartnerWBSElement as fis_partner_wbs preserving type )` | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  | `cast( I_JournalEntryItem.PartnerProject as fis_part_project preserving type )` | `CHAR(24)` | Partner Project |
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
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
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
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Earmarked Funds Document |
| `EarmarkedFundsDocumentItem` |  | |  |  | `NUMC(3)` | Earmarked Funds Document Item |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
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
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `FinancialValuationObjectType` |  | |  |  | `CHAR(4)` | Financial Valuation Object Type |
| `FinancialValuationObject` |  | |  |  | `CHAR(32)` | Financial Valuation Object |
| `FinancialValuationSubobject` |  | |  |  | `CHAR(32)` | Financial Valuation Subobject |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Credit Risk Class |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
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
| `GLDebitAmountInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_sdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_sdr_hsl preserving type ) end` | `CURR(23)` | G/L Account - Debit Amount in Company Code Currency |
| `AssetDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_adr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_adr_hsl preserving type ) end` | `CURR(23)` | Asset - Debit Amount in Company Code Currency |
| `MaterialDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_mdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_mdr_hsl preserving type ) end` | `CURR(23)` | Material - Debit Amount in Company Code Currency |
| `DebtorDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_ddr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_ddr_hsl preserving type ) end` | `CURR(23)` | Customer - Debit Amount in Company Code Currency |
| `CreditorDebitAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_kdr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_kdr_hsl preserving type ) end` | `CURR(23)` | Supplier - Debit Amount in Company Code Currency |
| `GLCreditAmountInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_scr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_scr_hsl preserving type ) end` | `CURR(23)` | G/L Account - Credit Amount in Company Code Currency |
| `AssetCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_acr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_acr_hsl preserving type ) end` | `CURR(23)` | Asset - Credit Amount in Company Code Currency |
| `MaterialCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_mcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_mcr_hsl preserving type ) end` | `CURR(23)` | Material - Credit Amount in Company Code Currency |
| `DebtorCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_dcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_dcr_hsl preserving type ) end` | `CURR(23)` | Customer - Credit Amount in Company Code Currency |
| `CreditorCreditAmtInCoCodeCrcy` |  | |  | `case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_kcr_hsl preserving type ) else cast( cast( 0 as abap.curr( 23,2)) as fis_kcr_hsl preserving type ) end` | `CURR(23)` | Supplier - Credit Amount in Company Code Currency |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  | `YearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  | `YearMonth` | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  | `YearWeek` | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `SenderAccountingDocument` |  | |  | `cast( I_JournalEntryItem._JournalEntry.SenderAccountingDocument as fis_belnr_sender preserving type )` | `CHAR(10)` | Sender Journal Entry |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Sender System |
| `SenderFiscalYear` |  | |  | `cast( I_JournalEntryItem._JournalEntry.SenderFiscalYear as fis_gjahr_sender_no_conv preserving type )` | `NUMC(4)` | Fiscal Year in Sender System |
| `SenderLogicalSystem` |  | |  | `cast( I_JournalEntryItem._JournalEntry.SenderLogicalSystem as logsystem_sender preserving type )` | `CHAR(10)` | Logical System of the Sender |
| `GlobalCurrencyRole` |  | |  |  | `CHAR(2)` | Global Currency Role |
| `FreeDefinedCurrency1Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 1 Role  (Currency Type) |
| `FreeDefinedCurrency2Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 2 Role  (Currency Type) |
| `FreeDefinedCurrency3Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 3 Role  (Currency Type) |
| `FreeDefinedCurrency4Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 4 Role  (Currency Type) |
| `FreeDefinedCurrency5Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 5 Role  (Currency Type) |
| `FreeDefinedCurrency6Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 6 Role  (Currency Type) |
| `FreeDefinedCurrency7Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 7 Role  (Currency Type) |
| `FreeDefinedCurrency8Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 8 Role  (Currency Type) |
| `EmployeeFullName` |  | |  | `case when ( I_JournalEntryItem.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx ) end` | `CHAR(80)` | Full Name |
| `BillToPartyName` |  | |  | `cast( I_JournalEntryItem._BillToParty.CustomerName as bill_to_name preserving type )` | `CHAR(80)` | Name of Bill-to Party |
| `CostCtrActivityTypeName` |  | |  | `cast( I_JournalEntryItem._CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )` | `CHAR(60)` | Activity Type Name |
| `CustomerGroupName` |  | |  | `cast( I_JournalEntryItem._CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )` | `CHAR(30)` | Name of Customer Group |
| `CustomerSupplierCountryName` |  | |  | `I_JournalEntryItem._CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerSupplierIndustryName` |  | |  | `I_JournalEntryItem._CustomerSupplierIndustryText[1: Language = $session.system_language].SupplierIndustryName` | `CHAR(20)` | Description of the Industry Key |
| `DistributionChannelName` |  | |  | `cast( I_JournalEntryItem._DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName as fis_distributionchannel_name preserving type )` | `CHAR(20)` | Distribution Channel Name |
| `DivisionName` |  | |  | `cast( I_JournalEntryItem._Division._Text[1: Language = $session.system_language].DivisionName as fis_division_name )` | `CHAR(30)` | Name of Division |
| `MaterialName` |  | |  | `I_JournalEntryItem._Material._Text[1: Language = $session.system_language].MaterialName` | `CHAR(40)` | Material Description |
| `MaterialGroupName` |  | |  | `I_JournalEntryItem._MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `SoldMaterialName` |  | |  | `cast( I_JournalEntryItem._SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )` | `CHAR(40)` | Sold Material Name |
| `ProductName` |  | |  | `cast( I_JournalEntryItem._Product._Text[1: Language = $session.system_language].ProductName as fis_product_name preserving type )` | `CHAR(40)` | Product Name |
| `ProductGroupName` |  | |  | `cast( I_JournalEntryItem._ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName as fis_productgroup_name preserving type )` | `CHAR(20)` | Product Group Name |
| `SoldProductName` |  | |  | `cast( I_JournalEntryItem._SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_soldproduct_name preserving type )` | `CHAR(40)` | Product Sold Name |
| `SoldProductGroupName` |  | |  | `cast( I_JournalEntryItem._SoldProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName as fis_soldproductgroup_name preserving type )` | `CHAR(20)` | Product Sold Group Name |
| `PartnerBusinessAreaName` |  | |  | `cast( I_JournalEntryItem._PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )` | `CHAR(30)` | Partner Business Area Name |
| `PartnerCompanyName` |  | |  | `cast( I_JournalEntryItem._PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )` | `CHAR(30)` | Company Name |
| `PartnerCompanyCodeName` |  | |  | `cast( I_JournalEntryItem._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )` | `CHAR(25)` | Partner Company Code Name |
| `PartnerCostCenterName` |  | |  | `cast( I_JournalEntryItem._PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type )` | `CHAR(20)` | Partner Cost Center Name |
| `PartnerCostCtrActivityTypeName` |  | |  | `cast( I_JournalEntryItem._PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name )` | `CHAR(60)` | Partner Activity Type Name |
| `PartnerFunctionalAreaName` |  | |  | `cast( I_JournalEntryItem._PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )` | `CHAR(30)` | Partner Functional Area Name |
| `PartnerProfitCenterName` |  | |  | `cast( I_JournalEntryItem._PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )` | `CHAR(50)` | Partner Profit Center Name |
| `PartnerProjectDescription` |  | |  | `cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )` | `CHAR(40)` | Partner Project Description (1st text line) |
| `PartnerSegmentName` |  | |  | `cast( I_JournalEntryItem._PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )` | `CHAR(50)` | Partner Segment Name |
| `PartnerWBSElementDescription` |  | |  | `cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )` | `CHAR(40)` | Partner WBS Element Description |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ProjectDescription` |  | |  | `cast( I_JournalEntryItem._ProjectBasicData.ProjectDescription as fis_project_description preserving type )` | `CHAR(40)` | Project Description |
| `SalesDistrictName` |  | |  | `I_JournalEntryItem._SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName` | `CHAR(20)` | Name of the District |
| `SalesOrganizationName` |  | |  | `cast( I_JournalEntryItem._SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )` | `CHAR(20)` | Sales Organization Name |
| `ShipToPartyName` |  | |  | `cast( I_JournalEntryItem._ShipToParty.CustomerName as ship_to_name preserving type )` | `CHAR(80)` | Name of Ship-to Party |
| `WBSElementDescription` |  | |  | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | G/L Account Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Supplier Basic Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Accounting Document Type Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerWBSElementText` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectText` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerProjectText` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_SupplierInvoice` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElementText` | `I_WBSElement` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectText` | `I_Project` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerProjectText` | `I_Project` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_SupplierInvoice` | `I_SupplierInvoiceAPI01` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMCUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@Analytics.technicalName: 'IFIDOCJRNLCUBE'
@AccessControl: { authorizationCheck: #CHECK,
                 personalData.blocking: #REQUIRED }
@Analytics: { dataCategory: #CUBE }
@Consumption.dbHints: [ 'USE_HEX_PLAN','NO_HEX_INDEX_JOIN' ]
@EndUserText.label: 'Journal Entry Item - Cube'
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                dataClass:  #MIXED,
                serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
define view entity I_JournalEntryItemCube
  //            with parameters P_DisplayCurrency   : VDM_V_DISPLAY_CURRENCY ,
  //                            P_ExchangeRateType  : KURST,
  //                            P_ExchangeRateDate  : VDM_V_EXCHANGE_RATE_DATE

  as select from I_JournalEntryItem as I_JournalEntryItem

  // merker
  //  left outer join fiscds_lama    on fiscds_lama.matnr_int = acdoca.matnr
  association [0..1] to I_WBSElement              as _WBSElement                    on  $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_WBSElement              as _WBSElementText                on  $projection.WBSElement = _WBSElementText.WBSElement
  association [0..1] to I_WBSElement              as _PartnerWBSElement             on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement
  association [0..1] to I_WBSElement              as _PartnerWBSElementText         on  $projection.PartnerWBSElement = _PartnerWBSElementText.WBSElement
  association [0..1] to I_WBSElement              as _InventorySpclStockWBSElement  on  $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement

  association [0..1] to I_WBSElementByExternalID  as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID  as _WBSElementExternalIDText      on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID  as _PartnerWBSElementExternalID   on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID  as _PartnerWBSElemntExtrnalIDText on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID  as _InvtrySpclStockWBSElmntExtID  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID
  //association [0..1] to I_WBSElementByExternalID       as _InvtrySpclStckWBSElmntExtIDText  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID


  association [0..1] to I_Project                 as _Project                       on  $projection.Project = _Project.Project
  association [0..1] to I_Project                 as _ProjectText                   on  $projection.Project = _ProjectText.Project
  association [0..1] to I_Project                 as _PartnerProject                on  $projection.PartnerProject = _PartnerProject.Project
  association [0..1] to I_Project                 as _PartnerProjectText            on  $projection.PartnerProject = _PartnerProjectText.Project

  association [0..1] to I_ProjectByExternalID     as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID     as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_ProjectByExternalID     as _PartnerProjectExternalID      on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID     as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID = _PartnerProjctExtrnalIDText.ProjectExternalID

  association [0..1] to I_OperationalAcctgDocItem as _OperationalAcctgDocItem       on  $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode
                                                                                    and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                                    and $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                                    and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem

  association [1..1] to I_CalendarMonth           as _CalendarMonth                 on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter         as _CalendarQuarter               on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth               as _CalendarYearMonth             on  $projection.CalendarYearMonth = _CalendarYearMonth.YearMonth

  association [0..1] to I_SupplierInvoiceAPI01    as _SupplierInvoice               on  $projection.ReferenceDocumentType    = 'RMRP'
                                                                                    and $projection.LogicalSystem            = ' '
                                                                                    and $projection.ReferenceDocumentContext = _SupplierInvoice.FiscalYear
                                                                                    and $projection.ReferenceDocument        = _SupplierInvoice.SupplierInvoice

  association of exact one to exact one E_JournalEntryItem  as _Extension           on  $projection.SourceLedger       = _Extension.SourceLedger
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
      //@Semantics.fiscal.year: true
  key I_JournalEntryItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_JournalEntryItem.AccountingDocument,
  key I_JournalEntryItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Ledger'
  key I_JournalEntryItem.Ledger,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant' // '_LedgerFiscalYear'
      @Semantics.fiscal.year: true
      I_JournalEntryItem.LedgerFiscalYear,
      I_JournalEntryItem.GLRecordType,

      I_JournalEntryItem._Ledger._Text[1: Language = $session.system_language].LedgerName                                                                                                                                                                     as LedgerName,
      cast( I_JournalEntryItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )                                                                                                                                                                    as CompanyCodeName,

      // Object which are dependent objects --> first
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      I_JournalEntryItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_JournalEntryItem.ControllingArea,
      cast( I_JournalEntryItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )                                                                                                                                                            as ControllingAreaName,


      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      I_JournalEntryItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      I_JournalEntryItem.BusinessTransactionCategory,
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
      I_JournalEntryItem.JrnlEntryItemObsoleteReason,

      @ObjectModel.foreignKey.association: '_OrganizationalChange'
      I_JournalEntryItem.OrganizationalChange,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      I_JournalEntryItem.GLAccount,

      cast( I_JournalEntryItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )                                                                                                                    as GLAccountName,
      cast( I_JournalEntryItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )                                                                                                as GLAccountLongName,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_JournalEntryItem.CostCenter,
      cast( I_JournalEntryItem._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_kostl_name preserving type )                          as CostCenterName,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_JournalEntryItem.ProfitCenter,
      //_ProfitCenter[1:ValidityStartDate <= $parameters.P_KeyDate and ValidityEndDate >= $parameters.P_KeyDate]._Text[1: Language = $session.system_language].ProfitCenterName  as ProfitCenterName,
      I_JournalEntryItem._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName                                                                as ProfitCenterName,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      I_JournalEntryItem.FunctionalArea,
      cast( I_JournalEntryItem._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )                                                                                                                        as FunctionalAreaName,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      I_JournalEntryItem.BusinessArea,
      cast( I_JournalEntryItem._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )                                                                                                             as BusinessAreaName,
      @ObjectModel.foreignKey.association: '_Segment'
      I_JournalEntryItem.Segment,
      I_JournalEntryItem._Segment._Text[1: Language = $session.system_language].SegmentName                                                                                                                                                                   as SegmentName,
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
      I_JournalEntryItem.BalanceTransactionCurrency                                                                                                                                                                                                           as BalanceTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_JournalEntryItem.AmountInBalanceTransacCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      I_JournalEntryItem.TransactionCurrency                                                                                                                                                                                                                  as TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_JournalEntryItem.AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      I_JournalEntryItem.CompanyCodeCurrency                                                                                                                                                                                                                  as CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_JournalEntryItem.AmountInCompanyCodeCurrency,


      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      I_JournalEntryItem.GlobalCurrency                                                                                                                                                                                                                       as GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.AmountInGlobalCurrency,

      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      I_JournalEntryItem.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_JournalEntryItem.AmountInFunctionalCurrency,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      I_JournalEntryItem.FreeDefinedCurrency1                                                                                                                                                                                                                 as FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      I_JournalEntryItem.FreeDefinedCurrency2                                                                                                                                                                                                                 as FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      I_JournalEntryItem.FreeDefinedCurrency3                                                                                                                                                                                                                 as FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      I_JournalEntryItem.FreeDefinedCurrency4                                                                                                                                                                                                                 as FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      I_JournalEntryItem.FreeDefinedCurrency5                                                                                                                                                                                                                 as FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      I_JournalEntryItem.FreeDefinedCurrency6                                                                                                                                                                                                                 as FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      I_JournalEntryItem.FreeDefinedCurrency7                                                                                                                                                                                                                 as FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      I_JournalEntryItem.FreeDefinedCurrency8                                                                                                                                                                                                                 as FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_JournalEntryItem.AmountInFreeDefinedCurrency8,
      ////////////////////////////////////


      ////////////////////////////////////
      // NEW
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_JournalEntryItem.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.GrpValnFixedAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.PrftCtrValnFxdAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.TotalPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.GrpValnTotPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.PrftCtrValnTotPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.FixedPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.GrpValnFixedPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_JournalEntryItem.PrftCtrValnFxdPrcVarcInGlbCrcy,

      ////////////////////////////////////


      I_JournalEntryItem.ControllingObjectCurrency                                                                                                                                                                                                            as ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_JournalEntryItem.AmountInObjectCurrency,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      I_JournalEntryItem.BaseUnit                                                                                                                                                                                                                             as BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_JournalEntryItem.Quantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_JournalEntryItem.FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      I_JournalEntryItem.CostSourceUnit                                                                                                                                                                                                                       as CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_JournalEntryItem.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_JournalEntryItem.ValuationFixedQuantity,

      I_JournalEntryItem.ReferenceQuantityUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      I_JournalEntryItem.ReferenceQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      I_JournalEntryItem.AdditionalQuantity1Unit                                                                                                                                                                                                              as AdditionalQuantity1Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      I_JournalEntryItem.AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      I_JournalEntryItem.AdditionalQuantity2Unit                                                                                                                                                                                                              as AdditionalQuantity2Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      I_JournalEntryItem.AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      I_JournalEntryItem.AdditionalQuantity3Unit                                                                                                                                                                                                              as AdditionalQuantity3Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      I_JournalEntryItem.AdditionalQuantity3,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      I_JournalEntryItem.DebitCreditCode,
      cast( I_JournalEntryItem._DebitCreditCode._Text[1: Language = $session.system_language].DebitCreditCodeName as fis_shkzg_name preserving type )                                                                                                         as DebitCreditCodeName,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant' //'_FiscalPeriod'
      @Semantics.fiscal.period: true
      I_JournalEntryItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      I_JournalEntryItem.FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant' //'_FiscalYearPeriod'
      @Semantics.fiscal.yearPeriod: true
      I_JournalEntryItem.FiscalYearPeriod,
      //@Semantics.businessDate.at: true
      I_JournalEntryItem.PostingDate,
      //@Semantics.businessDate.at: true
      I_JournalEntryItem.DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      I_JournalEntryItem.AccountingDocumentType,
      I_JournalEntryItem._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName                                                                                                                                     as AccountingDocumentTypeName,
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
      //@Semantics.businessDate.lastChangedAt: true
      I_JournalEntryItem.LastChangeDateTime,
      I_JournalEntryItem.CreationDateTime,
      //@Semantics.businessDate.createdAt: true
      I_JournalEntryItem.CreationDate,
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
      @Semantics.fiscal.year: true
      I_JournalEntryItem.InvoiceReferenceFiscalYear,
      I_JournalEntryItem.FollowOnDocumentType,
      I_JournalEntryItem.InvoiceItemReference,
      I_JournalEntryItem.ReferencePurchaseOrderCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      I_JournalEntryItem.PurchasingDocument,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      I_JournalEntryItem.PurchasingDocumentItem,
      I_JournalEntryItem.AccountAssignmentNumber,
      I_JournalEntryItem.DocumentItemText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'
      @ObjectModel.foreignKey.association: '_SalesOrder'
      I_JournalEntryItem.SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      I_JournalEntryItem.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      I_JournalEntryItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      I_JournalEntryItem.SalesDocumentItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @ObjectModel.foreignKey.association: '_Material'
      I_JournalEntryItem.Material, //do not use any longer, use Product
      @ObjectModel.foreignKey.association: '_Product'
      I_JournalEntryItem.Product,
      @ObjectModel.foreignKey.association: '_Plant'
      I_JournalEntryItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      I_JournalEntryItem.Supplier,
      I_JournalEntryItem._Supplier.SupplierName                                                                                                                                                                                                               as SupplierName,
      @ObjectModel.foreignKey.association: '_Customer'
      I_JournalEntryItem.Customer,
      I_JournalEntryItem._Customer.CustomerName                                                                                                                                                                                                               as CustomerName,
      I_JournalEntryItem.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      I_JournalEntryItem.ConditionContract,
      
      I_JournalEntryItem.ComponentBreakdown,
      I_JournalEntryItem.CompBreakdownScaleNumerator,

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

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      I_JournalEntryItem.ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      @Semantics.fiscal.year: true
      I_JournalEntryItem.ClearingDocFiscalYear,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      I_JournalEntryItem.ClearingJournalEntry,
      @Semantics.fiscal.year: true
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      I_JournalEntryItem.ClearingJournalEntryFiscalYear,

      I_JournalEntryItem.ValueDate,
      //@Semantics.booleanIndicator
      //cast( ( case ClearingDate when '00000000' then ' '
      //                                          else 'X'
      //       end )
      //as farp_xaugp preserving type ) as IsCleared,

      case I_JournalEntryItem.ClearingDate when '00000000' then cast(' ' as farp_xaugp preserving type )
                                                           else cast('X' as farp_xaugp preserving type )
      end                                                                                                                                                                                                                                                     as IsCleared,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////
      I_JournalEntryItem.AssetDepreciationArea,
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
      I_JournalEntryItem.AssetClass,


      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
      //////////////////////////////////////////////////////////////////////////
      I_JournalEntryItem.CostEstimate,

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
      I_JournalEntryItem.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      I_JournalEntryItem.InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      I_JournalEntryItem.InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      I_JournalEntryItem.InvtrySpclStockWBSElmntIntID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
      //cast( COALESCE( _InvtrySpclStockWBSElmntBD.WBSElementExternalID , '' ) as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,
      cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv preserving type )                                                                                                                             as InvtrySpclStockWBSElmntExtID,
      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntExtID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
      //cast( _InvtrySpclStockWBSElmntIntID.WBSElement as fis_invspstock_wbs ) as InventorySpclStockWBSElement,  //  as InventorySpecialStockWBSElement,
      //cast( COALESCE( _InvtrySpclStockWBSElmntBD.WBSElement , '' ) as fis_invspstock_wbs ) as InventorySpclStockWBSElement,  //  as InventorySpecialStockWBSElement,
      cast( I_JournalEntryItem._InvtrySpclStockWBSElmntBD.WBSElement as fis_invspstock_wbs preserving type )                                                                                                                                                  as InventorySpclStockWBSElement,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      I_JournalEntryItem.InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      I_JournalEntryItem.InventoryValuationType,
      @ObjectModel.foreignKey.association: '_PurReqValuationArea'
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
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      I_JournalEntryItem.OffsettingAccount,
      I_JournalEntryItem._OffsettingAccountWithBP.OffsettingAccountName                                                                                                                                                                                       as OffsettingAccountName,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      I_JournalEntryItem.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      I_JournalEntryItem.OffsettingChartOfAccounts,
      //@Semantics.booleanIndicator
      I_JournalEntryItem.LineItemIsCompleted,
      I_JournalEntryItem.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_BillableControl'
      I_JournalEntryItem.BillableControl,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      I_JournalEntryItem.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      I_JournalEntryItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      I_JournalEntryItem.PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      I_JournalEntryItem.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      I_JournalEntryItem.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      I_JournalEntryItem.OriginCostCtrActivityType,
      I_JournalEntryItem.OriginProduct,
      I_JournalEntryItem.VarianceOriginGLAccount,
      I_JournalEntryItem.AccountAssignment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      I_JournalEntryItem.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      I_JournalEntryItem.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      I_JournalEntryItem.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      I_JournalEntryItem.OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      I_JournalEntryItem.WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      I_JournalEntryItem.PartnerWBSElementInternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementByExternalID',
                     element: 'WBSElementExternalID' }
        }]
      @ObjectModel.text.association: '_PartnerWBSElemntExtrnalIDText'
      // ]--GENERATED
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      //cast( COALESCE( _PartnerWBSElementBasicData.WBSElementExternalID , '' ) as fis_partner_wbsext_no_conv ) as PartnerWBSElementExternalID,
      cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )                                                                                                                               as PartnerWBSElementExternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementByExternalID',
                     element: 'WBSElementExternalID' }
        }]
      @ObjectModel.text.association: '_WBSElementExternalIDText'
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      //cast( COALESCE( _WBSElementBasicData.WBSElementExternalID , '' ) as fis_wbsext_no_conv ) as WBSElementExternalID,
      cast( I_JournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )                                                                                                                                              as WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementExternalID'
      // _WBSElementInternalID.WBSElement as WBSElement,  25.07.2018 back to external from ACDOCA
      // WBSElement,                                      17.09.2018 back to external from Masterdata
      cast( I_JournalEntryItem.WBSElement as fis_wbs preserving type )                                                                                                                                                                                        as WBSElement,
      @ObjectModel.foreignKey.association: '_ProjectInternalID'
      I_JournalEntryItem.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      I_JournalEntryItem.PartnerProjectInternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectByExternalID',
                     element: 'ProjectExternalID' }
        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.text.association: '_ProjectExternalIDText'
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      //cast( COALESCE( _ProjectBasicData.ProjectExternalID , '' ) as fis_projectext_no_conv ) as ProjectExternalID,
      cast( I_JournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )                                                                                                                                                as ProjectExternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectByExternalID',
                     element: 'ProjectExternalID' }
        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.text.association: '_PartnerProjctExtrnalIDText'
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      //cast( COALESCE( _PartnerProjectBasicData.ProjectExternalID , '' ) as fis_part_projectext_no_conv ) as PartnerProjectExternalID,
      cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )                                                                                                                                    as PartnerProjectExternalID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      I_JournalEntryItem.WorkPackage,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'ProjectExternalID'
      // _ProjectInternalID.Project as Project,     25.07.2018 back to external from ACDOCA
      // Project,                                   17.09.2018 back to external from Masterdata
      cast( I_JournalEntryItem.Project as fis_project preserving type )                                                                                                                                                                                       as Project,
      @ObjectModel.foreignKey.association: '_OperatingConcern'
      I_JournalEntryItem.OperatingConcern,
      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      I_JournalEntryItem.ProjectNetwork,
      //@ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      I_JournalEntryItem.RelatedNetworkActivity,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      I_JournalEntryItem.BusinessProcess,
      I_JournalEntryItem.CostObject,
      //bemot,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      I_JournalEntryItem.CostAnalysisResource,
      I_JournalEntryItem.CustomerServiceNotification,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      I_JournalEntryItem.ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      I_JournalEntryItem.ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      I_JournalEntryItem.ServiceDocumentItem,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      I_JournalEntryItem.PartnerServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocument'
      I_JournalEntryItem.PartnerServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      I_JournalEntryItem.PartnerServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ServiceContractTypeStdVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      I_JournalEntryItem.ServiceContractType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceContractVH',
                           element: 'ServiceContract' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      I_JournalEntryItem.ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      I_JournalEntryItem.ServiceContractItem,

      I_JournalEntryItem.BusinessSolutionOrder,
      I_JournalEntryItem.BusinessSolutionOrderItem,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      I_JournalEntryItem.TimeSheetOvertimeCategory,
      I_JournalEntryItem.PartnerAccountAssignment,
      I_JournalEntryItem.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      I_JournalEntryItem.PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      I_JournalEntryItem.PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      I_JournalEntryItem.PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      I_JournalEntryItem.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerWBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
      cast( I_JournalEntryItem.PartnerWBSElement as fis_partner_wbs preserving type )                                                                                                                                                                         as PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerProjectExternalID'
      cast( I_JournalEntryItem.PartnerProject as fis_part_project preserving type )                                                                                                                                                                           as PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      I_JournalEntryItem.PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      I_JournalEntryItem.PartnerSalesDocumentItem,
      I_JournalEntryItem.PartnerProjectNetwork,
      //@ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'
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
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      I_JournalEntryItem.SoldMaterial,  //do not use any longer, use SoldProduct
      @ObjectModel.foreignKey.association: '_SoldProduct'
      I_JournalEntryItem.SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      I_JournalEntryItem.MaterialGroup, //do not use any longer, use ProductGroup
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      I_JournalEntryItem.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      I_JournalEntryItem.CustomerGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      I_JournalEntryItem.CustomerSupplierCountry,
      I_JournalEntryItem.CustomerSupplierIndustry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      I_JournalEntryItem.SalesDistrict,
      I_JournalEntryItem.BillToParty,
      I_JournalEntryItem.ShipToParty,
      I_JournalEntryItem.CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      I_JournalEntryItem.CashLedgerCompanyCode,

      @Analytics.internalName: #LOCAL
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

      @Analytics.internalName: #LOCAL
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

      @Analytics.internalName: #LOCAL
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

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      I_JournalEntryItem.PartnerGrant,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      I_JournalEntryItem.PartnerBudgetPeriod,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      I_JournalEntryItem.PubSecBudgetAccount,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      I_JournalEntryItem.PubSecBudgetAccountCoCode,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      I_JournalEntryItem.PubSecBudgetCnsmpnDate,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      I_JournalEntryItem.PubSecBudgetCnsmpnFsclPeriod,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      I_JournalEntryItem.PubSecBudgetCnsmpnFsclYear,
      //@Semantics.booleanIndicator
      @Analytics.internalName: #LOCAL
      I_JournalEntryItem.PubSecBudgetIsRelevant,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      I_JournalEntryItem.PubSecBudgetCnsmpnType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      I_JournalEntryItem.PubSecBudgetCnsmpnAmtType,

      I_JournalEntryItem.EarmarkedFundsDocument,
      I_JournalEntryItem.EarmarkedFundsDocumentItem,

      I_JournalEntryItem.SponsoredProgram,
      I_JournalEntryItem.SponsoredClass,
      I_JournalEntryItem.GteeMBudgetValidityNumber,

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
      I_JournalEntryItem.WorkCenterInternalID,
      I_JournalEntryItem.OrderOperation,
      I_JournalEntryItem.OrderItem,

      I_JournalEntryItem.REBusinessEntity,
      I_JournalEntryItem.RealEstateBuilding,
      I_JournalEntryItem.RealEstateProperty,
      I_JournalEntryItem.RERentalObject,
      I_JournalEntryItem.RealEstateContract,
      I_JournalEntryItem.REServiceChargeKey,
      I_JournalEntryItem.RESettlementUnitID,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
      ///////////////////////////////////////////////////////////////////////
      //   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
      //   AccrualObjectType                                            AccrualItemType  are the corresponding types
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualObjectType'
      I_JournalEntryItem.AccrualObjectType,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualObject'
      I_JournalEntryItem.AccrualObject,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualSubobject'
      I_JournalEntryItem.AccrualSubobject,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualItemType'
      I_JournalEntryItem.AccrualItemType,

      I_JournalEntryItem.AccrualValueDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
      ///////////////////////////////////////////////////////////////////////
      I_JournalEntryItem.FinancialValuationObjectType,
      I_JournalEntryItem.FinancialValuationObject,
      I_JournalEntryItem.FinancialValuationSubobject,
      I_JournalEntryItem.NetDueDate,
      I_JournalEntryItem.CreditRiskClass,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      // @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'
      I_JournalEntryItem.OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      I_JournalEntryItem.Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      I_JournalEntryItem.FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_JournalEntryItem.Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      I_JournalEntryItem.MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      I_JournalEntryItem.MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      I_JournalEntryItem.MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      I_JournalEntryItem.MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      I_JournalEntryItem.SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      I_JournalEntryItem.ProductGroup,
      //@Semantics.booleanIndicator
      I_JournalEntryItem.MaintenanceOrderIsPlanned,


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
      //////////////////////////////////

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_sdr_hsl preserving type )
                                           else cast( cast( 0 as abap.curr( 23,2)) as fis_sdr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as GLDebitAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_adr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_adr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as AssetDebitAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_mdr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_mdr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as MaterialDebitAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_ddr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_ddr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as DebtorDebitAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.DebitAmountInCoCodeCrcy as fis_kdr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_kdr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as CreditorDebitAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'S' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_scr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_scr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as GLCreditAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'A' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_acr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_acr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as AssetCreditAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'M' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_mcr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_mcr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as MaterialCreditAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'D' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_dcr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_dcr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as DebtorCreditAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_JournalEntryItem.FinancialAccountType when 'K' then cast( I_JournalEntryItem.CreditAmountInCoCodeCrcy as fis_kcr_hsl preserving type )
                                         else cast( cast( 0 as abap.curr( 23,2)) as fis_kcr_hsl preserving type )
      end                                                                                                                                                                                                                                                     as CreditorCreditAmtInCoCodeCrcy,

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

      I_JournalEntryItem._CalendarDate.CalendarYear                                                                                                                                                                                                           as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      I_JournalEntryItem._CalendarDate.CalendarQuarter                                                                                                                                                                                                        as CalendarQuarter,
      I_JournalEntryItem._CalendarDate.YearQuarter                                                                                                                                                                                                            as CalendarYearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      I_JournalEntryItem._CalendarDate.CalendarMonth                                                                                                                                                                                                          as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      I_JournalEntryItem._CalendarDate.YearMonth                                                                                                                                                                                                              as CalendarYearMonth,
      I_JournalEntryItem._CalendarDate.CalendarWeek                                                                                                                                                                                                           as CalendarWeek,
      I_JournalEntryItem._CalendarDate.YearWeek                                                                                                                                                                                                               as CalendarYearWeek,
      I_JournalEntryItem._FiscalCalendarDate.FiscalQuarter                                                                                                                                                                                                    as FiscalQuarter,
      I_JournalEntryItem._FiscalCalendarDate.FiscalWeek                                                                                                                                                                                                       as FiscalWeek,
      I_JournalEntryItem._FiscalCalendarDate.FiscalYearQuarter                                                                                                                                                                                                as FiscalYearQuarter,
      I_JournalEntryItem._FiscalCalendarDate.FiscalYearWeek                                                                                                                                                                                                   as FiscalYearWeek,

      //cast( COALESCE( _JournalEntry.SenderAccountingDocument , '' ) as fis_belnr_sender ) as SenderAccountingDocument,
      cast( I_JournalEntryItem._JournalEntry.SenderAccountingDocument as fis_belnr_sender preserving type )                                                                                                                                                   as SenderAccountingDocument,
      // COALESCE( _JournalEntry.SenderCompanyCode , '' ) as SenderCompanyCode,
      SenderCompanyCode,
      //cast( COALESCE( _JournalEntry.SenderFiscalYear , '0000' ) as gjahr_sender ) as SenderFiscalYear,
      cast( I_JournalEntryItem._JournalEntry.SenderFiscalYear as fis_gjahr_sender_no_conv preserving type )                                                                                                                                                   as SenderFiscalYear,
      //cast( COALESCE( _JournalEntry.SenderLogicalSystem, '' ) as logsystem_sender ) as SenderLogicalSystem,
      cast( I_JournalEntryItem._JournalEntry.SenderLogicalSystem as logsystem_sender preserving type )                                                                                                                                                        as SenderLogicalSystem,

      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role,

      // _Employment._Employee.EmployeeFullName as EmployeeFullName,  deprecated
      //_PersonWorkAgreement_1.PersonFullName  as EmployeeFullName,       27.07.2020
      // cast( 'XXXXX' as bu_name1tx ) as EmployeeFullName,
      case when ( I_JournalEntryItem.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx )
      //                                          else cast( '' as bu_name1tx )
      end                                                                                                                                                                                                                                                     as EmployeeFullName,

      cast( I_JournalEntryItem._BillToParty.CustomerName as bill_to_name preserving type )                                                                                                                                                                    as BillToPartyName,
      cast( I_JournalEntryItem._CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )                        as CostCtrActivityTypeName,
      cast( I_JournalEntryItem._CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )                                                                                                                     as CustomerGroupName,
      I_JournalEntryItem._CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName                                                                                                                                                   as CustomerSupplierCountryName,
      I_JournalEntryItem._CustomerSupplierIndustryText[1: Language = $session.system_language].SupplierIndustryName                                                                                                                                           as CustomerSupplierIndustryName,
      cast( I_JournalEntryItem._DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName  as fis_distributionchannel_name preserving type )                                                                                  as DistributionChannelName,
      cast( I_JournalEntryItem._Division._Text[1: Language = $session.system_language].DivisionName as fis_division_name )                                                                                                                                    as DivisionName,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProductName'
      I_JournalEntryItem._Material._Text[1: Language = $session.system_language].MaterialName                                                                                                                                                                 as MaterialName, //do not use any longer, use _ProductGroupName
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductGroupName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroupName'
      I_JournalEntryItem._MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName                                                                                                                                                       as MaterialGroupName, //do not use any longer, use _ProductGroupName
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductName'
      cast( I_JournalEntryItem._SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )                                                                                                              as SoldMaterialName, //do not use any longer, use _SoldProductName

      cast( I_JournalEntryItem._Product._Text[1: Language = $session.system_language].ProductName as fis_product_name preserving type )                                                                                                                       as ProductName,
      cast( I_JournalEntryItem._ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName as fis_productgroup_name preserving type )                                                                                          as ProductGroupName,
      cast( I_JournalEntryItem._SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_soldproduct_name preserving type )                                                                                                               as SoldProductName,
      cast( I_JournalEntryItem._SoldProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName as fis_soldproductgroup_name preserving type )                                                                                  as SoldProductGroupName,

      cast( I_JournalEntryItem._PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )                                                                                              as PartnerBusinessAreaName,
      cast( I_JournalEntryItem._PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )                                                                                                                        as PartnerCompanyName,
      cast( I_JournalEntryItem._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )                                                                                                                                         as PartnerCompanyCodeName,
      cast( I_JournalEntryItem._PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type )           as PartnerCostCenterName,
      cast( I_JournalEntryItem._PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name ) as PartnerCostCtrActivityTypeName,
      cast( I_JournalEntryItem._PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )                                                                                                         as PartnerFunctionalAreaName,
      cast( I_JournalEntryItem._PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )                       as PartnerProfitCenterName,
      cast( I_JournalEntryItem._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )                                                                                                                                  as PartnerProjectDescription,
      cast( I_JournalEntryItem._PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )                                                                                                        as PartnerSegmentName,
      cast( I_JournalEntryItem._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )                                                                                                                                       as PartnerWBSElementDescription,
      I_JournalEntryItem._Plant.PlantName                                                                                                                                                                                                                     as PlantName,
      //cast( _ProjectInternalID.ProjectDescription as fis_project_description ) as ProjectDescription,
      cast( I_JournalEntryItem._ProjectBasicData.ProjectDescription as fis_project_description preserving type )                                                                                                                                              as ProjectDescription,
      I_JournalEntryItem._SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName                                                                                                                                                       as SalesDistrictName,
      cast( I_JournalEntryItem._SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )                                                                                        as SalesOrganizationName,
      cast( I_JournalEntryItem._ShipToParty.CustomerName as ship_to_name preserving type )                                                                                                                                                                    as ShipToPartyName,
      //_WBSElementInternalID.WBSDescription as WBSElementDescription,
      I_JournalEntryItem._WBSElementBasicData.WBSDescription                                                                                                                                                                                                  as WBSElementDescription,

      //$extension.*,

      I_JournalEntryItem._JournalEntry,
      _OperationalAcctgDocItem,
      I_JournalEntryItem._CompanyCode,
      I_JournalEntryItem._FiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      I_JournalEntryItem._FiscalPeriod,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_LedgerFiscalYearForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      I_JournalEntryItem._LedgerFiscalYear,
      I_JournalEntryItem._FiscalYearVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      I_JournalEntryItem._FiscalYearPeriod,
      I_JournalEntryItem._FiscalPeriodForVariant,
      I_JournalEntryItem._LedgerFiscalYearForVariant,
      I_JournalEntryItem._FiscalYearPeriodForVariant,
      I_JournalEntryItem._CalendarDate,
      I_JournalEntryItem._FiscalCalendarDate,
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
      I_JournalEntryItem._Segment,
      I_JournalEntryItem._ProfitCenter,
      I_JournalEntryItem._CurrentProfitCenter,
      I_JournalEntryItem._CostCenter,
      I_JournalEntryItem._CurrentCostCenter,
      I_JournalEntryItem._CostAnalysisResource,
      I_JournalEntryItem._AccountAssignmentType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectExternalID'
      _Project,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectExternalIDText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectExternalIDText'
      @UI.hidden: true
      _ProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectExternalID'
      _PartnerProject,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjctExtrnalIDText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjctExtrnalIDText'
      @Consumption.hidden: true
      _PartnerProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicData'
      I_JournalEntryItem._ProjectInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicDataText'
      @UI.hidden: true
      I_JournalEntryItem._ProjectInternalIDText,

      //@API.element.releaseState: #DEPRECATED
      //@API.element.successor:   '_PartnerProjectBasicData'
      //@VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: '_PartnerProjectBasicData'
      //_PartnerProjectInternalID,

      I_JournalEntryItem._ProjectBasicData,
      @UI.hidden: true
      I_JournalEntryItem._ProjectBasicDataText,
      I_JournalEntryItem._PartnerProjectBasicData,
      @UI.hidden: true
      I_JournalEntryItem._PartnerProjectBasicDataText,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_WBSElementExternalID'
      _WBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalIDText'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_WBSElementExternalIDText'
      @UI.hidden: true
      _WBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerWBSElementExternalID'
      _PartnerWBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElemntExtrnalIDText'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerWBSElemntExtrnalIDText'
      @UI.hidden: true
      _PartnerWBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStockWBSElmntExtID'
      _InventorySpclStockWBSElement,

      //@API.element.releaseState: #DEPRECATED
      //@API.element.successor:    '_InvtrySpclStkWBSElmntBscDataT'
      //@VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscDataT'
      //@UI.hidden: true
      //_InvtrySpclStockWBSElmntText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      I_JournalEntryItem._WBSElementInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicDataText'
      @UI.hidden: true
      I_JournalEntryItem._WBSElementInternalIDText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
      I_JournalEntryItem._InvtrySpclStockWBSElmntIntID,

      I_JournalEntryItem._WBSElementBasicData,
      @UI.hidden: true
      I_JournalEntryItem._WBSElementBasicDataText,
      I_JournalEntryItem._PartnerWBSElementBasicData,
      @UI.hidden: true
      I_JournalEntryItem._PartnerWBSElemntBasicDataText,
      I_JournalEntryItem._InvtrySpclStkWBSElmntBscData,
      // @UI.hidden: true
      //_InvtrySpclStkWBSElmntBscDataT,

      _WBSElementExternalID,
      @UI.hidden: true
      _WBSElementExternalIDText,

      _ProjectExternalID,
      _ProjectExternalIDText,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      I_JournalEntryItem._InvtrySpclStockWBSElmntBD,
      _InvtrySpclStockWBSElmntExtID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      I_JournalEntryItem._Material,
      I_JournalEntryItem._Product,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProduct'
      I_JournalEntryItem._SoldMaterial,
      I_JournalEntryItem._SoldProduct,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      I_JournalEntryItem._MaterialGroup,
      //@API.element.releaseState: #DEPRECATED              not allowed
      //@API.element.successor:    '_SoldProductGroup_2'    not allowed
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      I_JournalEntryItem._SoldProductGroup,
      I_JournalEntryItem._SoldProductGroup_2,

      //@API.element.releaseState: #DEPRECATED            not allowed
      //@API.element.successor:    '_ProductGroup_2'      not allowed
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProductGroup_2'
      I_JournalEntryItem._ProductGroup,
      I_JournalEntryItem._ProductGroup_2,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocument'
      I_JournalEntryItem._SalesOrder,
      I_JournalEntryItem._SalesDocument,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocumentItem'
      I_JournalEntryItem._SalesOrderItem,
      I_JournalEntryItem._SalesDocumentItem,

      I_JournalEntryItem._BusinessArea,
      I_JournalEntryItem._FunctionalArea,
      I_JournalEntryItem._GLAccountInChartOfAccounts,
      I_JournalEntryItem._GLAccountInCompanyCode,
      I_JournalEntryItem._ChartOfAccounts,
      I_JournalEntryItem._AccountingDocumentType,
      I_JournalEntryItem._FinancialAccountType,
      I_JournalEntryItem._DebitCreditCode,
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
      _SupplierInvoice,
      I_JournalEntryItem._ServiceContract,
      I_JournalEntryItem._ServiceContractItem,
      I_JournalEntryItem._ServiceContractType,
      I_JournalEntryItem._TimeSheetOvertimeCat,
      I_JournalEntryItem._InternalOrder,
      I_JournalEntryItem._Order,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PersonWorkAgreement_1'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
      I_JournalEntryItem._Employment,
      I_JournalEntryItem._PersonWorkAgreement_1,

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
      @API.element.successor:   '_PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrder_2'
      I_JournalEntryItem._PartnerOrder,
      I_JournalEntryItem._PartnerOrder_2,
      I_JournalEntryItem._PartnerOrderCategory,
      I_JournalEntryItem._PartnerSalesDocument,
      I_JournalEntryItem._PartnerSalesDocumentItem,
      I_JournalEntryItem._PartnerBusinessProcess,
      I_JournalEntryItem._BillingDocumentType,
      I_JournalEntryItem._SalesOrganization,
      I_JournalEntryItem._DistributionChannel,
      I_JournalEntryItem._Division,
      I_JournalEntryItem._Fund,
      I_JournalEntryItem._PartnerFund,
      I_JournalEntryItem._FundsCenter,
      I_JournalEntryItem._MovementCategory,
      I_JournalEntryItem._AssetTransactionType,
      I_JournalEntryItem._BudgetPeriod,
      I_JournalEntryItem._CostOriginGroup,
      I_JournalEntryItem._CustomerSupplierCountry,
      I_JournalEntryItem._CustomerSupplierIndustryText,
      I_JournalEntryItem._SalesDistrict,
      I_JournalEntryItem._BillToParty,
      I_JournalEntryItem._ShipToParty,
      I_JournalEntryItem._FinancialManagementArea,
      //_FundedProgram
      I_JournalEntryItem._HouseBankAccount,
      I_JournalEntryItem._LogicalSystem,
      I_JournalEntryItem._OperatingConcern,
      I_JournalEntryItem._PartnerCompany,
      I_JournalEntryItem._ProjectNetwork,
      I_JournalEntryItem._PurReqValuationArea,
      I_JournalEntryItem._LedgerCompanyCodeCrcyRoles,
      I_JournalEntryItem._WorkCenter,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      I_JournalEntryItem._OffsettingAccountType,
      I_JournalEntryItem._OffsettingChartOfAccounts,
      I_JournalEntryItem._OffsettingAccount,
      I_JournalEntryItem._OffsettingAccountWithBP,
      I_JournalEntryItem._BillableControl,
      I_JournalEntryItem._ConditionContract,
      I_JournalEntryItem._Equipment,
      I_JournalEntryItem._FunctionalLocation,
      I_JournalEntryItem._MaintenanceActivityType,
      I_JournalEntryItem._MaintOrdPlngDegreeCode,
      I_JournalEntryItem._PMNotificationPriorityType,
      I_JournalEntryItem._PMNotificationPriority,
      // _MaintenanceOrderSubOperation,
      I_JournalEntryItem._Assembly,
      I_JournalEntryItem._SuperiorOrder,
      I_JournalEntryItem._DebitCreditCodeText,
      I_JournalEntryItem._FunctionalAreaText,

      I_JournalEntryItem._ProfitCenterTxt,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProfitCenterTxt'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProfitCenterTxt'
      I_JournalEntryItem._ProfitCenterText,

      I_JournalEntryItem._CostCenterTxt,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_CostCenterTxt'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_CostCenterTxt'
      I_JournalEntryItem._CostCenterText,

      I_JournalEntryItem._GLAccountTxt,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_GLAccountTxt'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_GLAccountTxt'
      I_JournalEntryItem._GLAccountText,

      I_JournalEntryItem._LedgerText,
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
      @API.element.successor:   '_PartnerOrderText_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrderText_2'
      I_JournalEntryItem._PartnerOrderText,
      I_JournalEntryItem._PartnerOrderText_2,
      I_JournalEntryItem._GroupMasterFixedAssetText,
      I_JournalEntryItem._ServiceDocumentType,
      I_JournalEntryItem._ServiceDocument,
      I_JournalEntryItem._ServiceDocumentItem,
      I_JournalEntryItem._PartnerServiceDocumentType,
      I_JournalEntryItem._PartnerServiceDocument,
      I_JournalEntryItem._PartnerServiceDocumentItem,

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

      I_JournalEntryItem._OrganizationalChange,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.GLAccountAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.SupplierBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.CustomerBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.AcctgDocTypeAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.OrderType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_JournalEntryItem.SalesOrderType,

      I_JournalEntryItem._SalesDocument.SDDocumentCategory

      //_Extension  Extensions must be local

}
```
