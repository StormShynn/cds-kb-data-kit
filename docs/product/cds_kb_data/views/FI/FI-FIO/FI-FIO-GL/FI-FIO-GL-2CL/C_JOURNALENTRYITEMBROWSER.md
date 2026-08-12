---
name: C_JOURNALENTRYITEMBROWSER
description: "Journal Entry Item Browser"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOURNALENTRYITEMBROWSER')/$value
semantic_en: "Journal Entry Item Browser"
semantic_vi: "Journal Entry Item Browser — CDS view tiêu dùng dựa trên I_JournalEntryItemBrowser."
keywords:
  - "Display Line Items in General Ledger"
  - "journal"
  - "entry"
  - "item"
  - "browser"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_JOURNALENTRYITEMBROWSER

**Journal Entry Item Browser**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOURNALENTRYITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast( I_JournalEntryItemBrowser.FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `CompanyCodeName` |  | |  | `cast( I_JournalEntryItemBrowser._CompanyCode.CompanyCodeName as fis_butxt preserving type )` | `CHAR(25)` | Company Code Name |
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
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  | `cast(_GLAccountTextRawData[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )` | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  | `cast( _GLAccountTextRawData[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat )` | `CHAR(50)` | G/L Account Long Name |
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
| `ExchangeRateType` |  | |  | `cast($parameters.P_ExchangeRateType as fis_dispcurr_kurst preserving type )` | `CHAR(4)` | Exchange Rate Type of Display Currency |
| `ExchangeRateDate` |  | |  | `cast($parameters.P_ExchangeRateDate as fis_exchange_rate_date_dispcu preserving type )` | `DATS(8)` | Exchange Rate Date of Display Currency |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type )` | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast( cast(currency_conversion ( amount => I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency, source_currency => I_JournalEntryItemBrowser.CompanyCodeCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR' , exchange_rate_date => $parameters.P_ExchangeRateDate ) as abap.curr(23,2) ) as fis_amount_display_crcy preserving type)` | `CURR(23)` | Amount in Display Currency |
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
| `IsNegativePosting` |  | |  | `case when ( I_JournalEntryItemBrowser.AmountInBalanceTransacCrcy > 0 or I_JournalEntryItemBrowser.AmountInTransactionCurrency > 0 or I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency > 0 or I_JournalEntryItemBrowser.AmountInGlobalCurrency > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency1 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency2 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency3 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency4 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency5 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency6 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency7 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency8 > 0 ) and I_JournalEntryItemBrowser.DebitCreditCode = 'H' then cast( 'X' as fis_xnegp preserving type ) when ( I_JournalEntryItemBrowser.AmountInBalanceTransacCrcy < 0 or I_JournalEntryItemBrowser.AmountInTransactionCurrency < 0 or I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency < 0 or I_JournalEntryItemBrowser.AmountInGlobalCurrency < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency1 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency2 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency3 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency4 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency5 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency6 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency7 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency8 < 0 ) and I_JournalEntryItemBrowser.DebitCreditCode = 'S' then cast( 'X' as fis_xnegp preserving type ) else cast( ' ' as fis_xnegp preserving type ) end` | `CHAR(1)` | Is Negative Posting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `UserDescription` |  | |  | `cast( _UserContactCard.UserDescription as fis_userdescription preserving type )` | `CHAR(80)` | Journal Entry Created By (Name) |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  | `cast( tstmp_to_dats( I_JournalEntryItemBrowser.CreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as fis_creation_date )` | `DATS(8)` | Journal Entry Creation Date in Server Time |
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
| `DocumentItemText` |  | |  | `cast( I_JournalEntryItemBrowser.DocumentItemText as fis_sgtxt preserving type )` | `CHAR(50)` | Journal Entry Item Text |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BPCustMultiAddrIsActive` |  | |  | `cast ( _BusinessPartner.BPCustMultiAddrIsActive as fis_bpcustmultiaddr preserving type)` | `CHAR(1)` | Business Partner Customer: Is Multi Address Active? |
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
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( I_JournalEntryItemBrowser._InvtrySpclStkWBSElmntBscData.WBSElementExternalID as fis_invspstock_wbsext_no_conv )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpclStockWBSElement` |  | |  | `cast( I_JournalEntryItemBrowser.InventorySpclStockWBSElement as fis_invspstock_wbs_depre )` | `CHAR(24)` | Inventory Special Stock WBS Element |
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
| `EmployeeFullName` |  | |  | `case when ( I_JournalEntryItemBrowser.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx ) end` | `CHAR(80)` | Full Name |
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
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PrtnWBSElementExternalIDName` |  | |  | `cast( I_JournalEntryItemBrowser._PartnerWBSElementExternalID.WBSDescription as fis_partwbselementextidname preserving type )` | `CHAR(40)` | Partner WBS Element External ID Name |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSElementExternalIDName` |  | |  | `cast( I_JournalEntryItemBrowser._WBSElementExternalID.WBSDescription as fis_wbselementexternalidname preserving type )` | `CHAR(40)` | WBS Element External ID Name |
| `WBSElement` |  | |  | `cast( I_JournalEntryItemBrowser.WBSElement as fis_wbs_depre )` | `CHAR(24)` | WBS Element |
| `WBSDescription` |  | | `_WBSElementBasicData` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `PartnerWBSElementDescription` |  | |  | `cast( _PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_description preserving type )` | `CHAR(40)` | Partner WBS Element Name |
| `ProjectDescription` |  | | `_ProjectBasicData` | `ProjectDescription` | `CHAR(40)` | Project Name |
| `PartnerProjectDescription` |  | |  | `cast( _PartnerProjectBasicData.ProjectDescription as fis_partner_projectdescription preserving type )` | `CHAR(40)` | Partner Project Name |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectExternalIDName` |  | |  | `cast( I_JournalEntryItemBrowser._PartnerProjectExternalID.ProjectDescription as fis_partprojectexternalidname preserving type )` | `CHAR(40)` | Partner Project External ID Name |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ProjectExternalIDName` |  | |  | `cast( I_JournalEntryItemBrowser._ProjectExternalID.ProjectDescription as fis_projectexternalidname preserving type )` | `CHAR(40)` | Project External ID Name |
| `Project` |  | |  | `cast( I_JournalEntryItemBrowser.Project as fis_project_depre )` | `CHAR(24)` | Project |
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
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  | `cast( I_JournalEntryItemBrowser.PartnerWBSElement as fis_partner_wbs_depre )` | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  | `cast( I_JournalEntryItemBrowser.PartnerProject as fis_part_project_depre )` | `CHAR(24)` | Partner Project |
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
| `CommitmentItem` |  | |  |  | `CHAR(24)` | Commitment Item |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Earmarked Funds Document |
| `EarmarkedFundsDocumentItem` |  | |  |  | `NUMC(3)` | Earmarked Funds Document Item |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CashLedgerAccountName` |  | |  | `cast( _CashLedgerAccountText[1: Language = $session.system_language].GLAccountName as fis_re_account_name preserving type )` | `CHAR(20)` | Cash Origin Account Name |
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
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `FinancialValuationObjectType` |  | |  |  | `CHAR(4)` | Financial Valuation Object Type |
| `FinancialValuationObject` |  | |  |  | `CHAR(32)` | Financial Valuation Object |
| `FinancialValuationSubobject` |  | |  |  | `CHAR(32)` | Financial Valuation Subobject |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Credit Risk Class |
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
| `DebitAmountInFreeDefinedCrcy1` |  | |  | `DebitAmountInFreeDfndCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  | `CreditAmountInFreeDfndCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  | `DebitAmountInFreeDfndCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  | `CreditAmountInFreeDfndCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  | `DebitAmountInFreeDfndCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  | `CreditAmountInFreeDfndCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` |  | |  | `DebitAmountInFreeDfndCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` |  | |  | `CreditAmountInFreeDfndCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` |  | |  | `DebitAmountInFreeDfndCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` |  | |  | `CreditAmountInFreeDfndCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` |  | |  | `DebitAmountInFreeDfndCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` |  | |  | `CreditAmountInFreeDfndCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` |  | |  | `DebitAmountInFreeDfndCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` |  | |  | `CreditAmountInFreeDfndCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` |  | |  | `DebitAmountInFreeDfndCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` |  | |  | `CreditAmountInFreeDfndCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `SenderAccountingDocument` |  | |  | `cast( I_JournalEntryItemBrowser._JournalEntry.SenderAccountingDocument as fis_belnr_sender )` | `CHAR(10)` | Sender Journal Entry |
| `SenderCompanyCode` |  | |  | `cast( I_JournalEntryItemBrowser._JournalEntry.SenderCompanyCode as bukrs_sender )` | `CHAR(4)` | Company Code in Sender System |
| `SenderFiscalYear` |  | |  | `cast( I_JournalEntryItemBrowser._JournalEntry.SenderFiscalYear as fis_gjahr_sender_no_conv )` | `NUMC(4)` | Fiscal Year in Sender System |
| `SenderLogicalSystem` |  | |  | `cast( I_JournalEntryItemBrowser._JournalEntry.SenderLogicalSystem as fis_logsystem_sender )` | `CHAR(10)` | Sender Logical System |
| `GlobalCurrencyRole` |  | |  |  | `CHAR(2)` | Global Currency Role |
| `FreeDefinedCurrency1Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 1 Role  (Currency Type) |
| `FreeDefinedCurrency2Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 2 Role  (Currency Type) |
| `FreeDefinedCurrency3Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 3 Role  (Currency Type) |
| `FreeDefinedCurrency4Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 4 Role  (Currency Type) |
| `FreeDefinedCurrency5Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 5 Role  (Currency Type) |
| `FreeDefinedCurrency6Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 6 Role  (Currency Type) |
| `FreeDefinedCurrency7Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 7 Role  (Currency Type) |
| `FreeDefinedCurrency8Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 8 Role  (Currency Type) |
| `GlobalCurrencyRoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._GlobalCurrencyRole._Text[1: Language = $session.system_language].CurrencyRoleName as fis_gc_currole_name )` | `CHAR(60)` | Global Currency Role Name |
| `FreeDefinedCurrency1RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency1Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc1_currole_name )` | `CHAR(60)` | Freely Defined Currency 1 Role Name |
| `FreeDefinedCurrency2RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency2Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc2_currole_name )` | `CHAR(60)` | Freely Defined Currency 2 Role Name |
| `FreeDefinedCurrency3RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency3Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc3_currole_name )` | `CHAR(60)` | Freely Defined Currency 3 Role Name |
| `FreeDefinedCurrency4RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency4Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc4_currole_name )` | `CHAR(60)` | Freely Defined Currency 4 Role Name |
| `FreeDefinedCurrency5RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency5Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc5_currole_name )` | `CHAR(60)` | Freely Defined Currency 5 Role Name |
| `FreeDefinedCurrency6RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency6Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc6_currole_name )` | `CHAR(60)` | Freely Defined Currency 6 Role Name |
| `FreeDefinedCurrency7RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency7Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc7_currole_name )` | `CHAR(60)` | Freely Defined Currency 7 Role Name |
| `FreeDefinedCurrency8RoleName` |  | |  | `cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency8Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc8_currole_name )` | `CHAR(60)` | Freely Defined Currency 8 Role Name |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as fis_brgru_glaccount)` | `CHAR(4)` | G/L Account Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( '' as fis_brgru_supplier)` | `CHAR(4)` | Supplier Basic Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as fis_brgru_customer)` | `CHAR(4)` | Customer Basic Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  | `cast( '' as fis_brgru_acctgdoctype)` | `CHAR(4)` | Accounting Document Type Authorization Group |
| `OrderType` |  | |  | `cast( '' as aufart)` | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  | `cast( '' as auart)` | `CHAR(4)` | Sales Document Type |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerWBSElementText` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectText` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_LedgerCompanyCodeVH` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_UserContactCard` | | ✓ | | | | |
| `_TimeSheetOvertimeCatText` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_GLAccountText` | | ✓ | | | | |
| `_PartnerProfitCenterText` | | ✓ | | | | |
| `_OriginCostCenterText` | | ✓ | | | | |
| `_OriginCostCtrActivityTypeText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_SoldProductText` | | ✓ | | | | |
| `_SubLedgerAccLineItemTypeT` | | ✓ | | | | |
| `_SponsoredProgramCoreText` | | ✓ | | | | |
| `_SponsoredClassCoreText` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnAmtTypeT` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnTypeText` | | ✓ | | | | |
| `_BudgetAccountText` | | ✓ | | | | |
| `_BudgetPeriodText` | | ✓ | | | | |
| `_PartnerBudgetPeriodText` | | ✓ | | | | |
| `_CashLedgerAccountText` | | ✓ | | | | |
| `_FundText` | | ✓ | | | | |
| `_PartnerFundText` | | ✓ | | | | |
| `_GrantText` | | ✓ | | | | |
| `_PartnerGrantText` | | ✓ | | | | |
| `_FundedProgramText` | | ✓ | | | | |
| `_FundsCenterText` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderText_2` | | ✓ | | | | |
| `_OrderIDText` | | ✓ | | | | |
| `_PartnerOrderText` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_CustomerGroupText` | | ✓ | | | | |
| `_CustomerSupplierIndustryText` | | ✓ | | | | |
| `_CustomerSupplierCountryText` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclPeriod` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnAmtType` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_InvtrySpclStockWBSElmntText` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElementText` | `I_WBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementInternalIDText` | `I_WBSElementByInternalKey` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectText` | `I_Project` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerProjectText` | `I_Project` | [0..1] |
| `_ProjectInternalID` | `I_ProjectByInternalKey` | [0..1] |
| `_ProjectInternalIDText` | `I_ProjectByInternalKey` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_ProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElemntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_LedgerCompanyCodeVH` | `I_LedgerCompanyCodeVH` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_UserContactCard` | `I_UserContactCard` | [0..1] |
| `_TimeSheetOvertimeCatText` | `I_TimeSheetOvertimeCatText` | [0..*] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_GLAccountText` | `I_GLAccountText` | [0..*] |
| `_GLAccountTextRawData` | `I_GLAccountTextRawData` | [0..*] |
| `_PartnerProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_OriginCostCenterText` | `I_CostCenterText` | [0..*] |
| `_OriginCostCtrActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_SoldProductText` | `I_ProductText` | [0..*] |
| `_SubLedgerAccLineItemTypeT` | `I_SubLedgerAccLineItemTypeT` | [0..*] |
| `_SponsoredProgramCoreText` | `I_SponsoredProgramTextCore` | [0..*] |
| `_SponsoredClassCoreText` | `I_SponsoredClassCoreText` | [0..*] |
| `_PubSecBdgtCnsmpnAmtTypeT` | `I_PubSecBdgtCnsmpnAmtTypeText` | [0..*] |
| `_PubSecBdgtCnsmpnTypeText` | `I_PubSecBdgtCnsmpnTypeText` | [0..*] |
| `_BudgetAccountText` | `I_BudgetAccountText` | [0..*] |
| `_BudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_PartnerBudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_CashLedgerAccountText` | `I_GLAccountText` | [0..*] |
| `_FundText` | `I_FundText` | [0..*] |
| `_PartnerFundText` | `I_FundText` | [0..*] |
| `_GrantText` | `I_GrantText` | [0..*] |
| `_PartnerGrantText` | `I_GrantText` | [0..*] |
| `_FundedProgramText` | `I_FundedProgramText` | [0..*] |
| `_FundsCenterText` | `I_FundsCenterText` | [0..*] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrderText_2` | `I_Order` | [0..1] |
| `_OrderIDText` | `I_Order` | [0..1] |
| `_PartnerOrderText` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_BusinessPartner` | `C_BusinessPartner` | [0..1] |
| `_CustomerGroupText` | `I_CustomerGroupText` | [0..*] |
| `_CustomerSupplierIndustryText` | `I_CustomerSupplierIndustryText` | [0..*] |
| `_CustomerSupplierCountryText` | `I_CountryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOURNALENTRYITEMBROWSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOURNALENTRYITEMBROWSER')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Journal Entry Item Browser'

// @Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
//@Analytics: { dataCategory: #CUBE } - consumption views should not have a @Analytics.dataCategory
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@Analytics.technicalName: 'CFIJELITBROWS'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
// @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE] 
@ObjectModel.modelingPattern: #NONE
@Environment.sql.passValueForClient: true
                                     
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.auditFilter: #ENABLED
@AccessControl.personalData.blocking: #REQUIRED 
@AccessControl.privilegedAssociations:  [ '_UserContactCard', '_PurReqValuationArea', 
                                          '_LedgerText','_ControllingAreaText','_CostCenterText','_ProfitCenterText','_FunctionalAreaText',
                                          '_BusinessAreaText','_SegmentText','_PartnerProfitCenterText','_DebitCreditCodeText',
                                          '_AccountingDocumentTypeText','_ProductText','_SupplierText','_CustomerText',
                                          '_MasterFixedAssetText','_WBSElementExternalIDText','_ProjectExternalIDText','_TimeSheetOvertimeCatText',
                                          '_OrderIDText','_PartnerOrderText','_PartnerOrderText_2','_SoldProductText',
                                          '_SponsoredProgramCoreText','_SponsoredClassCoreText','_PubSecBdgtCnsmpnAmtTypeT',
                                          '_PubSecBdgtCnsmpnTypeText','_BudgetAccountText','_BudgetPeriodText','_PartnerBudgetPeriodText',
                                          '_CashLedgerAccountText','_FundText','_PartnerFundText','_GrantText','_PartnerGrantText',
                                          '_FundsCenterText' , '_FundedProgramText' ]

//@Search.searchable: true

@UI.headerInfo: {
  typeName: 'Journal Entry',
  typeNamePlural: 'Journal Entries',
  title: { type: #STANDARD, value: 'AccountingDocument' },
  description: { type: #STANDARD, value: 'LedgerGLLineItem' }
}

@UI.textArrangement: #TEXT_LAST
@Consumption.dbHints: ['USE_HEX_PLAN']
define view entity C_JournalEntryItemBrowser
            with parameters 
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH' , element: 'Currency' }                                     
                                  }]              
                            P_DisplayCurrency   : vdm_v_display_currency ,
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateTypeStdVH' , element: 'ExchangeRateType' }                                     
                                  }]                              
                            P_ExchangeRateType  : kurst, 
                            P_ExchangeRateDate  : vdm_v_exchange_rate_date,
                            P_KeyDate           : vdm_v_key_date,
                            P_ClearingStatusSelection   : fis_clearingstatusselection  
                                                                                  
as select from I_JournalEntryItemBrowser  ( P_ClearingStatusSelection: $parameters.P_ClearingStatusSelection ) as I_JournalEntryItemBrowser


/////////////////////////////////////////////////////////////////////////////////////////////////
// DO NOT USE  --  @VDM.lifecycle.status: #DEPRECATED      --  here only because of redefining //
/////////////////////////////////////////////////////////////////////////////////////////////////   
association [0..1] to I_WBSElement                   as _WBSElement                    on  $projection.WBSElement = _WBSElement.WBSElement
association [0..1] to I_WBSElement                   as _WBSElementText                on  $projection.WBSElement = _WBSElementText.WBSElement
association [0..1] to I_WBSElement                   as _InventorySpclStockWBSElement  on  $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement
association [0..1] to I_WBSElement                   as _InvtrySpclStockWBSElmntText   on  $projection.InventorySpclStockWBSElement = _InvtrySpclStockWBSElmntText.WBSElement
association [0..1] to I_WBSElement                   as _PartnerWBSElement             on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement
association [0..1] to I_WBSElement                   as _PartnerWBSElementText         on  $projection.PartnerWBSElement = _PartnerWBSElementText.WBSElement

association [0..1] to I_WBSElementByInternalKey      as _WBSElementInternalID          on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID
association [0..1] to I_WBSElementByInternalKey      as _WBSElementInternalIDText      on  $projection.WBSElementInternalID = _WBSElementInternalIDText.WBSElementInternalID


// association [0..1] to I_WBSElementByInternalKey      as _InvtrySpclStockWBSElmntIntID  on  $projection.invtryspclstockwbselmntintid = _InvtrySpclStockWBSElmntIntID.WBSElementInternalID

association [0..1] to I_Project                      as _Project                       on  $projection.Project = _Project.Project
association [0..1] to I_Project                      as _ProjectText                   on  $projection.Project = _ProjectText.Project
association [0..1] to I_Project                      as _PartnerProject                on  $projection.PartnerProject = _PartnerProject.Project
association [0..1] to I_Project                      as _PartnerProjectText            on  $projection.PartnerProject = _PartnerProjectText.Project

association [0..1] to I_ProjectByInternalKey         as _ProjectInternalID             on  $projection.ProjectInternalID = _ProjectInternalID.ProjectInternalID
association [0..1] to I_ProjectByInternalKey         as _ProjectInternalIDText         on  $projection.ProjectInternalID = _ProjectInternalIDText.ProjectInternalID


//////////////////////
// new associations //
//////////////////////
//association [0..1] to I_ProjectByExternalID         as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID    in I_view
association [0..1] to I_ProjectByExternalID         as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID

//association [0..1] to I_WBSElementByExternalID       as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID    in I_view
association [0..1] to I_WBSElementByExternalID       as _WBSElementExternalIDText    on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID

association [0..1] to I_ProjectBasicData             as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
association [0..1] to I_ProjectBasicData             as _ProjectBasicDataText          on  $projection.ProjectInternalID = _ProjectBasicDataText.ProjectInternalID
association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID
association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicDataText   on  $projection.PartnerProjectInternalID = _PartnerProjectBasicDataText.ProjectInternalID
    
association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID  
association [0..1] to I_WBSElementBasicData          as _WBSElementBasicDataText       on  $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID 
association [0..1] to I_WBSElementBasicData          as _PartnerWBSElementBasicData    on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID
association [0..1] to I_WBSElementBasicData          as _PartnerWBSElemntBasicDataText on $projection.PartnerWBSElementInternalID = _PartnerWBSElemntBasicDataText.WBSElementInternalID
association [0..1] to I_WBSElementByExternalID       as _InvtrySpclStockWBSElmntExtID  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID

//association [0..1] to I_WBSElementByExternalID       as _PartnerWBSElementExternalID        on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID   I_view
association [0..1] to I_WBSElementByExternalID       as _PartnerWBSElemntExtrnalIDText    on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID

// association [0..1] to I_ProjectByExternalID       as _PartnerProjectExternalID        on  $projection.PartnerProjectExternalID   = _PartnerProjectExternalID.ProjectExternalID  I_view  
association [0..1] to I_ProjectByExternalID       as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID   = _PartnerProjctExtrnalIDText.ProjectExternalID 
  
association [0..1] to I_LedgerCompanyCodeVH as _LedgerCompanyCodeVH 
      on  $projection.Ledger       = _LedgerCompanyCodeVH.Ledger and
          $projection.CompanyCode  = _LedgerCompanyCodeVH.CompanyCode
          
association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode 
        on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode 
        and $projection.GLAccount = _GLAccountInCompanyCode.GLAccount             

association [0..1] to I_UserContactCard     as _UserContactCard 
        on  $projection.AccountingDocCreatedByUser = _UserContactCard.ContactCardID
        
association [0..*] to I_TimeSheetOvertimeCatText     as _TimeSheetOvertimeCatText   on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCatText.TimeSheetOvertimeCategory        
        
        
association [0..1] to I_OperationalAcctgDocItem      as _OperationalAcctgDocItem      on $projection.CompanyCode                = _OperationalAcctgDocItem.CompanyCode
                                                                                     and $projection.FiscalYear                 = _OperationalAcctgDocItem.FiscalYear
                                                                                     and $projection.AccountingDocument         = _OperationalAcctgDocItem.AccountingDocument        
                                                                                     and $projection.AccountingDocumentItem     = _OperationalAcctgDocItem.AccountingDocumentItem
                                                                                     
// redefine the wrong text association (wrong in I_JournalEntryItem and higher ; cannot be correted there because of compatibility)
association [0..*] to I_ProfitCenterText             as _ProfitCenterText              on  $projection.ControllingArea = _ProfitCenterText.ControllingArea
                                                                                       and $projection.ProfitCenter    = _ProfitCenterText.ProfitCenter
  
association [0..*] to I_CostCenterText               as _CostCenterText                on  $projection.ControllingArea = _CostCenterText.ControllingArea
                                                                                       and $projection.CostCenter      = _CostCenterText.CostCenter
  
association [0..*] to I_GLAccountText                as _GLAccountText                 on  $projection.ChartOfAccounts = _GLAccountText.ChartOfAccounts
                                                                                       and $projection.GLAccount       = _GLAccountText.GLAccount   
association [0..*] to I_GLAccountTextRawData         as _GLAccountTextRawData          on  $projection.ChartOfAccounts = _GLAccountTextRawData.ChartOfAccounts
                                                                                       and $projection.GLAccount       = _GLAccountTextRawData.GLAccount                                                                                        
association [0..*] to I_ProfitCenterText             as _PartnerProfitCenterText       on  $projection.ControllingArea     = _PartnerProfitCenterText.ControllingArea
                                                                                       and $projection.PartnerProfitCenter = _PartnerProfitCenterText.ProfitCenter
                                                                                       
association [0..*] to I_CostCenterText               as _OriginCostCenterText          on  $projection.ControllingArea  = _OriginCostCenterText.ControllingArea
                                                                                       and $projection.OriginCostCenter = _OriginCostCenterText.CostCenter    
                                                                                       
association [0..*] to I_CostCenterActivityTypeText   as _OriginCostCtrActivityTypeText on  $projection.ControllingArea           = _OriginCostCtrActivityTypeText.ControllingArea
                                                                                       and $projection.OriginCostCtrActivityType = _OriginCostCtrActivityTypeText.CostCtrActivityType                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                      
association [0..*] to I_ProductText                  as _ProductText                   on  $projection.Product = _ProductText.Product

association [0..*] to I_ProductText                  as _SoldProductText               on  $projection.SoldProduct = _SoldProductText.Product

association [0..*] to I_SubLedgerAccLineItemTypeT    as _SubLedgerAccLineItemTypeT     on  $projection.SubLedgerAcctLineItemType = _SubLedgerAccLineItemTypeT.SubLedgerAcctLineItemType

association [0..*] to I_SponsoredProgramTextCore     as _SponsoredProgramCoreText      on  $projection.SponsoredProgram          = _SponsoredProgramCoreText.SponsoredProgram
association [0..*] to I_SponsoredClassCoreText       as _SponsoredClassCoreText        on  $projection.SponsoredClass            = _SponsoredClassCoreText.SponsoredClass
association [0..*] to I_PubSecBdgtCnsmpnAmtTypeText  as _PubSecBdgtCnsmpnAmtTypeT      on  $projection.PubSecBudgetCnsmpnAmtType = _PubSecBdgtCnsmpnAmtTypeT.PubSecBudgetCnsmpnAmtType
association [0..*] to I_PubSecBdgtCnsmpnTypeText     as _PubSecBdgtCnsmpnTypeText      on  $projection.PubSecBudgetCnsmpnType    = _PubSecBdgtCnsmpnTypeText.PubSecBudgetCnsmpnType
association [0..*] to I_BudgetAccountText            as _BudgetAccountText             on  $projection.ChartOfAccounts           = _BudgetAccountText.ChartOfAccounts
                                                                                       and $projection.PubSecBudgetAccount       = _BudgetAccountText.PubSecBudgetAccount
association [0..*] to I_BudgetPeriodText             as _BudgetPeriodText              on  $projection.BudgetPeriod              = _BudgetPeriodText.BudgetPeriod
association [0..*] to I_BudgetPeriodText             as _PartnerBudgetPeriodText       on  $projection.PartnerBudgetPeriod       = _PartnerBudgetPeriodText.BudgetPeriod
association [0..*] to I_GLAccountText                as _CashLedgerAccountText         on  $projection.ChartOfAccounts           = _CashLedgerAccountText.ChartOfAccounts
                                                                                       and $projection.CashLedgerAccount         = _CashLedgerAccountText.GLAccount
association [0..*] to I_FundText                     as _FundText                      on  $projection.FinancialManagementArea   = _FundText.FinancialManagementArea
                                                                                       and $projection.Fund                      = _FundText.Fund
association [0..*] to I_FundText                     as _PartnerFundText               on  $projection.FinancialManagementArea   = _PartnerFundText.FinancialManagementArea
                                                                                       and $projection.PartnerFund               = _PartnerFundText.Fund
association [0..*] to I_GrantText                    as _GrantText                     on  $projection.GrantID                   = _GrantText.GrantID
association [0..*] to I_GrantText                    as _PartnerGrantText              on  $projection.PartnerGrant              = _PartnerGrantText.GrantID
association [0..*] to I_FundedProgramText            as _FundedProgramText             on  $projection.FinancialManagementArea   = _FundedProgramText.FinancialManagementArea
                                                                                       and $projection.FundedProgram             = _FundedProgramText.FundedProgram                                                                                       
association [0..*] to I_FundsCenterText              as _FundsCenterText               on  $projection.FinancialManagementArea   = _FundsCenterText.FinancialManagementArea
                                                                                       and $projection.FundsCenter               = _FundsCenterText.FundsCenter                                                                                       

association [0..1] to I_Order                        as _PartnerOrder_2                 on  $projection.PartnerOrder             = _PartnerOrder_2.OrderID
association [0..1] to I_Order                        as _PartnerOrderText_2             on  $projection.PartnerOrder             = _PartnerOrderText_2.OrderID
association [0..1] to I_Order                        as _OrderIDText                   on  $projection.OrderID                   = _OrderIDText.OrderID
/* needed for compatibility reasons */
association [0..1] to I_InternalOrder                as _PartnerOrderText              on  $projection.PartnerOrder              = _PartnerOrderText.InternalOrder
association [0..1] to I_InternalOrder                as _PartnerOrder                  on  $projection.PartnerOrder              = _PartnerOrder.InternalOrder
    
association [0..1] to C_BusinessPartner              as _BusinessPartner               on  $projection.Customer                  = _BusinessPartner.BusinessPartner

association [0..*] to I_CustomerGroupText            as _CustomerGroupText             on $projection.CustomerGroup              = _CustomerGroupText.CustomerGroup
association [0..*] to I_CustomerSupplierIndustryText as _CustomerSupplierIndustryText  on $projection.CustomerSupplierIndustry   = _CustomerSupplierIndustryText.Industry
association [0..*] to I_CountryText                  as _CustomerSupplierCountryText   on $projection.CustomerSupplierCountry    = _CustomerSupplierCountryText.Country 
          
association of exact one to exact one E_JournalEntryItem  as _Extension                on $projection.SourceLedger               = _Extension.SourceLedger
                                                                                      and $projection.CompanyCode                = _Extension.CompanyCode
                                                                                      and $projection.FiscalYear                 = _Extension.FiscalYear
                                                                                      and $projection.AccountingDocument         = _Extension.AccountingDocument
                                                                                      and $projection.LedgerGLLineItem           = _Extension.LedgerGLLineItem
                                                                                                                                                 
{
//    @ObjectModel.text.element: ['LedgerName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'LedgerName' 
// I_Ledger --> I_LedgerStdVH  
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }                                     
                                  }]    
//@Consumption.valueHelp: '_Ledger'
@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: true }
/* with this statement App works only for leading ledger
@Consumption.derivation: { lookupEntity: 'I_Ledger', 
      resultElement: 'Ledger', binding: [
      { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
     }
*/
@UI.fieldGroup: [{ qualifier: '_BASIC', groupLabel: 'Basic Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]   
@UI.selectionField: [{position: 10}]
@ObjectModel.foreignKey.association: '_Ledger'   
@ObjectModel.text.association: '_LedgerText'   
key I_JournalEntryItemBrowser.Ledger,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }                                     
                                  }] 
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SourceLedger'      
key I_JournalEntryItemBrowser.SourceLedger,

@Consumption.semanticObject: 'CompanyCode'
//@Consumption.valueHelpDefinition: [{ entity: { name: 'I_LedgerCompanyCodeVH' , element: 'CompanyCode' },    
//                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' },                                                          
//                                                          { localElement: 'Ledger' , element: 'Ledger' } ]                                     
//                                  }]           
@Consumption.valueHelp: '_LedgerCompanyCodeVH'
//@Consumption.valueHelp: '_LedgerCompanyCodeVH.CompanyCode'
//@Consumption.valueHelp: '_CompanyCode'     // possible, different F4 requested  
    @ObjectModel.text.element: ['CompanyCodeName'] //Inserted by VDM CDS Suite Plugin
//  @Consumption.labelElement: 'CompanyCodeName'   20200210
//@Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
@Consumption.filter: { multipleSelections: true }
@UI.fieldGroup: [{ qualifier: '_BASIC', groupLabel: 'Basic Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
//@Consumption.semanticObject: 'CompanyCode'
//@UI.lineItem: [{type: #FOR_INTENT_BASED_NAVIGATION, semanticObjectAction: 'display'}]
@UI.selectionField: [{position: 20}]
//@UI.lineItem: {position:20}
@UI.lineItem: [{position:20, invocationGrouping}]
@ObjectModel.foreignKey.association: '_CompanyCode'
key I_JournalEntryItemBrowser.CompanyCode,

@UI.fieldGroup: [{ qualifier: '_FISCAL', groupLabel: 'Fiscal Calendar Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
//@Consumption.valueHelp: '_FiscalYear'
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_FiscalYearForCompanyCode' , element: 'FiscalYear' },    
                                     additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]  
@ObjectModel.foreignKey.association: '_FiscalYear'
key cast( I_JournalEntryItemBrowser.FiscalYear as fis_gjahr_no_conv preserving type ) as FiscalYear,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_JournalEntryVH', element: 'AccountingDocument' },
                                       additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.semanticObject: 'AccountingDocument'
@UI.lineItem: [{position:50}]
@ObjectModel.foreignKey.association: '_JournalEntry'
-- key cast(AccountingDocument as fis_belnr preserving type ) as AccountingDocument,
key I_JournalEntryItemBrowser.AccountingDocument,

key I_JournalEntryItemBrowser.LedgerGLLineItem,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_FiscalYearForCompanyCode' , element: 'FiscalYear' },    
                                     additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_FISCAL', groupLabel: 'Fiscal Calendar Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant' //'_LedgerFiscalYear'
@Semantics.fiscal.year: true
I_JournalEntryItemBrowser.LedgerFiscalYear,

@ObjectModel.foreignKey.association: '_OperationalAcctgDocItem'
I_JournalEntryItemBrowser.AccountingDocumentItem,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.GLRecordType,

@Semantics.text:true
cast( I_JournalEntryItemBrowser._CompanyCode.CompanyCodeName as fis_butxt preserving type ) as CompanyCodeName,

// Object which are dependent objects --> first
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ChartOfAccountsStdVH', element: 'ChartOfAccounts' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
I_JournalEntryItemBrowser.ChartOfAccounts,

@Consumption.valueHelpDefinition: [ { entity:  { name:    'I_ControllingAreaStdVH', element: 'ControllingArea' }
                                  }]
//    @ObjectModel.text.element: ['ControllingAreaName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'ControllingAreaName' 
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.semanticObject: 'ControllingArea'
@ObjectModel.foreignKey.association: '_ControllingArea'
@ObjectModel.text.association: '_ControllingAreaText'
I_JournalEntryItemBrowser.ControllingArea,

//ControllingAreaName,


///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FinancialTransactionTypeVH', element: 'FinancialTransactionType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
I_JournalEntryItemBrowser.FinancialTransactionType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_BusTransactionCategoryVH', element: 'BusinessTransactionCategory' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 21, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
I_JournalEntryItemBrowser.BusinessTransactionCategory,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_BusinessTransactionTypeVH', element: 'BusinessTransactionType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 21, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
I_JournalEntryItemBrowser.BusinessTransactionType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ReferenceDocumentTypeVH', element: 'ReferenceDocumentType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
I_JournalEntryItemBrowser.ReferenceDocumentType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_LogicalSystem', element: 'LogicalSystem' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_LogicalSystem'      
I_JournalEntryItemBrowser.LogicalSystem,

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ReferenceDocumentContext,

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ReferenceDocument,

I_JournalEntryItemBrowser.ReferenceDocumentItem,

I_JournalEntryItemBrowser.ReferenceDocumentItemGroup,
//SUBTA,

@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsReversal,

@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsReversed,
//XTRUEREV,
//AWTYP_REV,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ReversalReferenceDocumentCntxt,  

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ReversalReferenceDocument,
//SUBTA_REV,

@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsSettlement,

@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsSettled,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ReferenceDocumentTypeVH', element: 'ReferenceDocumentType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
I_JournalEntryItemBrowser.PredecessorReferenceDocType,

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PredecessorReferenceDocCntxt,  

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PredecessorReferenceDocument,

I_JournalEntryItemBrowser.PredecessorReferenceDocItem,
//PREC_SUBTA,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SourceReferenceDocumentType,
@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SourceLogicalSystem,
@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SourceReferenceDocumentCntxt,
@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SourceReferenceDocument,
I_JournalEntryItemBrowser.SourceReferenceDocumentItem,
//@ObjectModel.readOnly: true
I_JournalEntryItemBrowser.SourceReferenceDocSubitem,

@Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsCommitment,     

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.JrnlEntryItemObsoleteReason,

    @Consumption.semanticObject: 'GLAccount'
    @ObjectModel.text.element: ['GLAccountLongName'] //Inserted by VDM CDS Suite Plugin
//  @Consumption.labelElement: 'GLAccountLongName' 
//@Consumption.valueHelp: '_GLAccountInCompanyCode'
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH' , element: 'GLAccount' },    
                                     additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]    
//    @Search.defaultSearchElement: true
//    @UI.lineItem: [{position:20, importance:#HIGH,  type: #FOR_INTENT_BASED_NAVIGATION, semanticObjectAction: 'displayGLLineItem', label: 'Display G/L Line Items'}]                                                                   
@UI.lineItem: [{position:30}]
@UI.selectionField: [{position: 30}]
    @UI.identification:[{position:20, importance:#HIGH}]    
@Consumption.filter: { multipleSelections: true }
@UI.fieldGroup: [{ qualifier: '_BASIC', groupLabel: 'Basic Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
I_JournalEntryItemBrowser.GLAccount,
cast(_GLAccountTextRawData[1: Language = $session.system_language].GLAccountName as fis_txt30_skat ) as GLAccountName,
@Semantics.text:true
cast( _GLAccountTextRawData[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat ) as GLAccountLongName,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
//    @ObjectModel.text.element: ['CostCenterName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'CostCenterName' 
@Consumption.semanticObject: 'CostCenter'
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_CostCenterVH' , element: 'CostCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' },
                                                          { localElement: 'ProfitCenter' , element: 'ProfitCenter' },
                                                          { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CostCenter'
@ObjectModel.text.association: '_CostCenterText'
I_JournalEntryItemBrowser.CostCenter,

//@ObjectModel.readOnly: true
//CostCenterName,

//    @ObjectModel.text.element: ['ProfitCenterName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'ProfitCenterName' 
@Consumption.semanticObject: 'ProfitCenter'
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH' , element: 'ProfitCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' },
                                                          { localElement: 'Segment' , element: 'Segment' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:120}]
@ObjectModel.foreignKey.association: '_ProfitCenter'
@ObjectModel.text.association: '_ProfitCenterText'
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.ProfitCenter,
 
//@ObjectModel.readOnly: true
//ProfitCenterName,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FunctionalAreaVH', element: 'FunctionalArea' }
                                 }]
//    @ObjectModel.text.element: ['FunctionalAreaName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'FunctionalAreaName' 
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FunctionalArea'
@ObjectModel.text.association: '_FunctionalAreaText'
I_JournalEntryItemBrowser.FunctionalArea,

//FunctionalAreaName,

//    @ObjectModel.text.element: ['BusinessAreaName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'BusinessAreaName' 
@Consumption.valueHelpDefinition: [{ entity:  { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' }
                                  }]      
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BusinessArea'
@ObjectModel.text.association: '_BusinessAreaText'
I_JournalEntryItemBrowser.BusinessArea,

//BusinessAreaName,

//    @ObjectModel.text.element: ['SegmentName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'SegmentName' 
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SegmentStdVH', element: 'Segment' }
                                 }]     
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:130}]
@ObjectModel.foreignKey.association: '_Segment'
@ObjectModel.text.association: '_SegmentText'
I_JournalEntryItemBrowser.Segment,

//SegmentName,

//@Consumption.semanticObject: 'CostCenter'
@Consumption.valueHelpDefinition: [{ entity: { name: 'I_CostCenterVH' , element: 'CostCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerCostCenter'
I_JournalEntryItemBrowser.PartnerCostCenter,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH' , element: 'ProfitCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
//@Consumption.semanticObject: 'ProfitCenter'
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_PartnerProfitCenterText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
//@ObjectModel.text.element: ['PartnerProfitCenterName']
I_JournalEntryItemBrowser.PartnerProfitCenter,

//@UI.hidden: true
//cast( _PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name ) as PartnerProfitCenterName,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FunctionalAreaVH', element: 'FunctionalArea' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerFunctionalArea,

@Consumption.valueHelpDefinition: [{ entity:  { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' }
                                  }]  
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerBusinessArea,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PartnerCompanyStdVH', element: 'PartnerCompany' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerCompany,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SegmentStdVH', element: 'Segment' }
                                 }] 
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerSegment,


/////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
/////////////////////////////////////////////////////////////////////////////////////

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
I_JournalEntryItemBrowser.BalanceTransactionCurrency as BalanceTransactionCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }  I_JournalEntryItemBrowser.AmountInBalanceTransacCrcy,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_TransactionCurrency'
I_JournalEntryItemBrowser.TransactionCurrency as TransactionCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }  I_JournalEntryItemBrowser.AmountInTransactionCurrency,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
I_JournalEntryItemBrowser.CompanyCodeCurrency as CompanyCodeCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:90}]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }  I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency,


cast($parameters.P_ExchangeRateType as fis_dispcurr_kurst preserving type ) as ExchangeRateType,

cast($parameters.P_ExchangeRateDate as fis_exchange_rate_date_dispcu preserving type ) as ExchangeRateDate,

cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type ) as DisplayCurrency,

@Consumption.filter: { hidden: true }
@ObjectModel.filter.enabled: false
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
cast( cast(currency_conversion ( 
    amount => I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency, 
    source_currency => I_JournalEntryItemBrowser.CompanyCodeCurrency,
    target_currency => $parameters.P_DisplayCurrency,
    exchange_rate_type => $parameters.P_ExchangeRateType,
    error_handling => 'FAIL_ON_ERROR' ,
//  error_handling => 'SET_TO_NULL' ,
//  client => $parameters.SAPClient,
//    round => 'X',                        // #CDSBoolean.true,
//    decimal_shift => 'X',                // #CDSBoolean.true,
//    decimal_shift_back => 'X',           // #CDSBoolean.true,
    exchange_rate_date => $parameters.P_ExchangeRateDate ) as abap.curr(23,2) ) as fis_amount_display_crcy preserving type) as AmountInDisplayCurrency,



////////////////////////////////////
// NEW
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_GlobalCurrency'      
I_JournalEntryItemBrowser.GlobalCurrency as GlobalCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  I_JournalEntryItemBrowser.AmountInGlobalCurrency,


@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FunctionalCurrency'
I_JournalEntryItemBrowser.FunctionalCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
I_JournalEntryItemBrowser.AmountInFunctionalCurrency,  


@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'      
I_JournalEntryItemBrowser.FreeDefinedCurrency1 as FreeDefinedCurrency1,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency1,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'      
I_JournalEntryItemBrowser.FreeDefinedCurrency2 as FreeDefinedCurrency2,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency2,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'      
I_JournalEntryItemBrowser.FreeDefinedCurrency3 as FreeDefinedCurrency3,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency3,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'      
I_JournalEntryItemBrowser.FreeDefinedCurrency4 as FreeDefinedCurrency4,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency4,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'      
I_JournalEntryItemBrowser.FreeDefinedCurrency5 as FreeDefinedCurrency5,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency5,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'      
I_JournalEntryItemBrowser.FreeDefinedCurrency6 as FreeDefinedCurrency6,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency6,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'      
I_JournalEntryItemBrowser.FreeDefinedCurrency7 as FreeDefinedCurrency7,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency7,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CurrencyStdVH', element: 'Currency' }
                                 }]
@ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'      
I_JournalEntryItemBrowser.FreeDefinedCurrency8 as FreeDefinedCurrency8,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }  
I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency8,
////////////////////////////////////


////////////////////////////////////
// NEW
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.FixedAmountInGlobalCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.GrpValnFixedAmtInGlobCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.PrftCtrValnFxdAmtInGlobCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.TotalPriceVarcInGlobalCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.GrpValnTotPrcVarcInGlobCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.PrftCtrValnTotPrcVarcInGlbCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.FixedPriceVarcInGlobalCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.GrpValnFixedPrcVarcInGlobCrcy,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
I_JournalEntryItemBrowser.PrftCtrValnFxdPrcVarcInGlbCrcy,

////////////////////////////////////

I_JournalEntryItemBrowser.ControllingObjectCurrency as ControllingObjectCurrency,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }  I_JournalEntryItemBrowser.AmountInObjectCurrency,


@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }
                                 }]
@ObjectModel.foreignKey.association: '_BaseUnit'
I_JournalEntryItemBrowser.BaseUnit as BaseUnit,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } 
I_JournalEntryItemBrowser.Quantity,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }  
I_JournalEntryItemBrowser.FixedQuantity,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }
                                 }]
@ObjectModel.foreignKey.association: '_CostSourceUnit'
I_JournalEntryItemBrowser.CostSourceUnit as CostSourceUnit,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }  
I_JournalEntryItemBrowser.ValuationQuantity,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }  
I_JournalEntryItemBrowser.ValuationFixedQuantity,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }
                                 }]
@ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
I_JournalEntryItemBrowser.AdditionalQuantity1Unit as AdditionalQuantity1Unit,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }  
I_JournalEntryItemBrowser.AdditionalQuantity1,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }
                                 }]
@ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
I_JournalEntryItemBrowser.AdditionalQuantity2Unit as AdditionalQuantity2Unit,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} } 
I_JournalEntryItemBrowser.AdditionalQuantity2,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }
                                 }]
@ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
I_JournalEntryItemBrowser.AdditionalQuantity3Unit as AdditionalQuantity3Unit,

@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }  
I_JournalEntryItemBrowser.AdditionalQuantity3,


/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
//@ObjectModel.text.element: ['DebitCreditCodeName']
//@Consumption.labelElement: 'DebitCreditCodeName'
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
// @Consumption.valueHelp: '_DebitCreditCode'
@Consumption.valueHelpDefinition: [{ entity:  { name: 'I_DebitCreditCodeVH', element: 'DebitCreditCode' }
                                  }] 
@ObjectModel.foreignKey.association: '_DebitCreditCode'
@ObjectModel.text.association: '_DebitCreditCodeText'
I_JournalEntryItemBrowser.DebitCreditCode,

//DebitCreditCodeName,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
case when (    I_JournalEntryItemBrowser.AmountInBalanceTransacCrcy   > 0 or I_JournalEntryItemBrowser.AmountInTransactionCurrency  > 0 or I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency  > 0
            or I_JournalEntryItemBrowser.AmountInGlobalCurrency       > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency1 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency2 > 0 
            or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency3 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency4 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency5 > 0 
            or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency6 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency7 > 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency8 > 0 ) 
            and I_JournalEntryItemBrowser.DebitCreditCode = 'H' then cast( 'X' as fis_xnegp preserving type )
     when (    I_JournalEntryItemBrowser.AmountInBalanceTransacCrcy   < 0 or I_JournalEntryItemBrowser.AmountInTransactionCurrency  < 0 or I_JournalEntryItemBrowser.AmountInCompanyCodeCurrency  < 0
            or I_JournalEntryItemBrowser.AmountInGlobalCurrency       < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency1 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency2 < 0 
            or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency3 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency4 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency5 < 0 
            or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency6 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency7 < 0 or I_JournalEntryItemBrowser.AmountInFreeDefinedCurrency8 < 0 ) 
            and I_JournalEntryItemBrowser.DebitCreditCode = 'S' then cast( 'X' as fis_xnegp preserving type )            
     else cast( ' ' as fis_xnegp preserving type )
end as IsNegativePosting,  


@UI.fieldGroup: [{ qualifier: '_FISCAL', groupLabel: 'Fiscal Calendar Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
@Semantics.fiscal.period: true
I_JournalEntryItemBrowser.FiscalPeriod,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FiscalYearVariantStdVH', element: 'FiscalYearVariant' }
                                 }]
@ObjectModel.foreignKey.association: '_FiscalYearVariant'
@Semantics.fiscal.yearVariant: true      
I_JournalEntryItemBrowser.FiscalYearVariant,

@UI.fieldGroup: [{ qualifier: '_FISCAL', groupLabel: 'Fiscal Calendar Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.fiscal.yearPeriod: true
I_JournalEntryItemBrowser.FiscalYearPeriod,

@UI.selectionField: [{position: 50}]
@UI.fieldGroup: [{ qualifier: '_BASIC', groupLabel: 'Basic Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:70}]
I_JournalEntryItemBrowser.PostingDate,

@UI.fieldGroup: [{ qualifier: '_FISCAL', groupLabel: 'Fiscal Calendar Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.filter.selectionType:#INTERVAL
I_JournalEntryItemBrowser.DocumentDate,

//    @ObjectModel.text.element: ['AccountingDocumentTypeName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'AccountingDocumentTypeName' 
@Consumption.valueHelpDefinition: [ { entity:  { name:    'I_AccountingDocumentTypeStdVH', element: 'AccountingDocumentType' }
                                  }]     
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:60}]
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
@ObjectModel.text.association: '_AccountingDocumentTypeText'
I_JournalEntryItemBrowser.AccountingDocumentType,

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:40}]
I_JournalEntryItemBrowser.AssignmentReference,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_JournalEntryCategory', element: 'JournalEntryCategory' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
I_JournalEntryItemBrowser.AccountingDocumentCategory,
-- cast( AccountingDocumentCategory as fis_bstat) as AccountingDocumentCategory,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PostingKeyVH', element: 'PostingKey' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:80}]
@ObjectModel.foreignKey.association: '_PostingKey'
I_JournalEntryItemBrowser.PostingKey,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.TransactionTypeDetermination,
//slalittype,

@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
@ObjectModel.text.association: '_SubLedgerAccLineItemTypeT'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.SubLedgerAcctLineItemType,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
//@Consumption.valueHelp: '_User'    because I_user has AccessControl.authorizationCheck: #PRIVILEGED_ONLY
//@ObjectModel.foreignKey.association: '_User'   
@ObjectModel.text.element: ['UserDescription']   
I_JournalEntryItemBrowser.AccountingDocCreatedByUser,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
cast( _UserContactCard.UserDescription as fis_userdescription preserving type ) as UserDescription,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.filter: { selectionType : #INTERVAL, multipleSelections: false, mandatory: false }
//@Consumption.filter: { selectionType : #RANGE, multipleSelections: false, mandatory: false }
@ObjectModel.filter.enabled: true
I_JournalEntryItemBrowser.LastChangeDateTime,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.filter: { selectionType : #INTERVAL, multipleSelections: false }
@ObjectModel.filter.enabled: true
I_JournalEntryItemBrowser.CreationDateTime,

@ObjectModel.filter.enabled: false
// 27.11.2020
//cast( COALESCE( _JournalEntry.AccountingDocumentCreationDate,
//                 tstmp_to_dats( CreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )   
//              )  as fis_creation_date ) as CreationDate,  
cast( tstmp_to_dats( I_JournalEntryItemBrowser.CreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as fis_creation_date ) as CreationDate,                
// since 22.07.2019
// Text: Jrnl Entry Creation Date in Server Time
// in the underlying views we have UTC Time in CreationDate independent of text
// because of cast( cast(substring( cast(timestamp as abap.char(30)) , 1 , 8) as abap.dats(8))  as fis_cpdat )   as CreationDate,                

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH' , element: 'ProfitCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@ObjectModel.foreignKey.association: '_EliminationProfitCenter'
I_JournalEntryItemBrowser.EliminationProfitCenter,

@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.OriginObjectType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_GLAccountType', element: 'GLAccountType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_GLAccountType'
I_JournalEntryItemBrowser.GLAccountType,

@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.AlternativeGLAccount,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ChartOfAccountsStdVH', element: 'ChartOfAccounts' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
I_JournalEntryItemBrowser.CountryChartOfAccounts,


/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
// Fields are in I_JournalEntryItemBrowser
////////////////////////////////////////////////////////////////////////////
//ConsolidationUnit,
//PartnerConsolidationUnit,
//Company, 
//ConsolidationChartOfAccounts,
//FinancialStatementItem,
//SubItemCategory,
//SubItem, 


///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.InvoiceReference,

@UI.fieldGroup: [{ qualifier: '_REFERENCE', groupLabel: 'Reference Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.InvoiceReferenceFiscalYear,

I_JournalEntryItemBrowser.FollowOnDocumentType,

I_JournalEntryItemBrowser.InvoiceItemReference,

I_JournalEntryItemBrowser.ReferencePurchaseOrderCategory,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PurchasingDocumentStdVH', element: 'PurchasingDocument' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PurchasingDocument'      
I_JournalEntryItemBrowser.PurchasingDocument,

I_JournalEntryItemBrowser.PurchasingDocumentItem,

I_JournalEntryItemBrowser.AccountAssignmentNumber,

@UI.lineItem: [{position:140}]
cast( I_JournalEntryItemBrowser.DocumentItemText as fis_sgtxt preserving type ) as DocumentItemText,

//@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SalesOrderStdVH', element: 'SalesOrder' }
//                                 }]
//@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 42, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_SalesOrder'      
//SalesOrder,

//SalesOrderItem,

@Consumption.semanticObject: 'SalesOrder'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SalesDocument'      
I_JournalEntryItemBrowser.SalesDocument,

I_JournalEntryItemBrowser.SalesDocumentItem,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProductVH', element: 'Product' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_Product'
@ObjectModel.text.association: '_ProductText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.Product,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProductGroupVH', element: 'ProductGroup' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ProductGroup_2'
I_JournalEntryItemBrowser.ProductGroup,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PlantStdVH', element: 'Plant' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_Plant'
I_JournalEntryItemBrowser.Plant,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_Supplier_VH', element: 'Supplier' }
                                 }]
//    @ObjectModel.text.element: ['SupplierName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'SupplierName' 
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.semanticObject: 'Supplier'
@ObjectModel.foreignKey.association: '_Supplier'
@ObjectModel.text.association: '_SupplierText'
I_JournalEntryItemBrowser.Supplier,

//SupplierName,

@Consumption.valueHelpDefinition:[
  { entity: { name: 'I_Customer_VH', element: 'Customer' },
    qualifier: 'CustMultiAddr1', 
    label: 'Customers with Standard Address'},
  { entity: { name: 'I_BPCustomerMultiAddrVH', element: 'Customer'},
    qualifier: 'CustMultiAddr',
    label: 'Customers with Multiple Addresses',
    enabled: 'BPCustMultiAddrIsActive' }]
//    @ObjectModel.text.element: ['CustomerName'] //Inserted by VDM CDS Suite Plugin
//    @Consumption.labelElement: 'CustomerName' 
@Consumption.semanticObject: 'Customer'
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_Customer'
@ObjectModel.text.association: '_CustomerText'
I_JournalEntryItemBrowser.Customer,

//@ObjectModel.readOnly: true
@UI.hidden: true
cast ( _BusinessPartner.BPCustMultiAddrIsActive as fis_bpcustmultiaddr preserving type) as BPCustMultiAddrIsActive,

//CustomerName,

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
///////////////////////////////////////////////////////////////////////// 
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FinancialAccountTypeStdVH', element: 'FinancialAccountType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FinancialAccountType'
I_JournalEntryItemBrowser.FinancialAccountType,

I_JournalEntryItemBrowser.SpecialGLCode,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_TaxCodeValueHelp', element: 'TaxCode' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
@UI.lineItem: [{position:100}]
//@ObjectModel.foreignKey.association: '_TaxCode'
//Foreign key association only possible with full key which would require TaxCalculationProcedure
I_JournalEntryItemBrowser.TaxCode,

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
// @ObjectModel.foreignKey.association: '_HouseBank'
I_JournalEntryItemBrowser.HouseBank,

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
// @ObjectModel.foreignKey.association: '_HouseBankAccount'
I_JournalEntryItemBrowser.HouseBankAccount,

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.IsOpenItemManaged,

@UI.fieldGroup: [{ qualifier: '_BASIC', groupLabel: 'Basic Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ClearingDate,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry' 
I_JournalEntryItemBrowser.ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
I_JournalEntryItemBrowser.ClearingDocFiscalYear,

@UI.lineItem: [{position:110}]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ClearingJournalEntry,
@UI.lineItem: [{position:110}]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ClearingJournalEntryFiscalYear,

@UI.lineItem: [{position:10}]
I_JournalEntryItemBrowser.IsCleared,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
I_JournalEntryItemBrowser.AssetDepreciationArea,

      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_MasterFixedAssetStdVH',
                     element: 'MasterFixedAsset' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' }]
        }]
      @ObjectModel.text.association: '_MasterFixedAssetText'
      // ]--GENERATED

@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_MasterFixedAsset'      
I_JournalEntryItemBrowser.MasterFixedAsset,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FixedAssetStdVH', element: 'FixedAsset' },
                                       additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' },
                                                            { localElement: 'MasterFixedAsset' , element: 'MasterFixedAsset' }  ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FixedAsset'
I_JournalEntryItemBrowser.FixedAsset,

I_JournalEntryItemBrowser.AssetValueDate,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_AssetTransactionTypeVH', element: 'AssetTransactionType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_AssetTransactionType'      
I_JournalEntryItemBrowser.AssetTransactionType,

I_JournalEntryItemBrowser.AssetAcctTransClassfctn,

I_JournalEntryItemBrowser.DepreciationFiscalPeriod,
 
      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_MasterFixedAssetStdVH',
                     element: 'MasterFixedAsset' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' }]
        }]
      // ]--GENERATED
@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'      
I_JournalEntryItemBrowser.GroupMasterFixedAsset,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FixedAssetStdVH', element: 'FixedAsset' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_GroupFixedAsset'      
I_JournalEntryItemBrowser.GroupFixedAsset,

@UI.fieldGroup: [{ qualifier: '_ASSET', groupLabel: 'Asset Accounting Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.AssetClass,

//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
////////////////////////////////////////////////////////////////////////// 

I_JournalEntryItemBrowser.CostEstimate,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
I_JournalEntryItemBrowser.InventorySpecialStockValnType,   
@Analytics.internalName: #LOCAL            
I_JournalEntryItemBrowser.InvtrySpecialStockValnType_2,
//xobew,

I_JournalEntryItemBrowser.InventorySpecialStockType,

I_JournalEntryItemBrowser.InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,

I_JournalEntryItemBrowser.InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,

@Consumption.hidden: true
I_JournalEntryItemBrowser.InvtrySpclStockWBSElmntIntID,

I_JournalEntryItemBrowser.InventorySpecialStockSupplier,

I_JournalEntryItemBrowser.InventoryValuationType,

I_JournalEntryItemBrowser.ValuationArea,

// cast( COALESCE( _InvtrySpclStkWBSElmntBscData.WBSElementExternalID , '' ) as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,
cast( I_JournalEntryItemBrowser._InvtrySpclStkWBSElmntBscData.WBSElementExternalID  as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
// see remarks on WBSElement
cast( I_JournalEntryItemBrowser.InventorySpclStockWBSElement as fis_invspstock_wbs_depre ) as InventorySpclStockWBSElement,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
////////////////////////////////////////////////////////////////////////////// 

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
//@Consumption.valueHelp: '_SenderGLAccount'
I_JournalEntryItemBrowser.SenderGLAccount,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SenderAccountAssignment,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SenderAccountAssignmentType,

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ControllingObjectVH', element: 'ControllingObject' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ControllingObject'
I_JournalEntryItemBrowser.ControllingObject,

@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_CostOriginGroup'
//Foreign Key association would require CostOriginType as additional field in association
//although only value '02' is delivered as fix value of domain there might be customer fix value appends 
//cast('02' as HRKTYP) as CostOriginType,    
I_JournalEntryItemBrowser.CostOriginGroup,

I_JournalEntryItemBrowser.OriginSenderObject,

@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.ControllingDebitCreditCode,

I_JournalEntryItemBrowser.ControllingObjectDebitType,

I_JournalEntryItemBrowser.QuantityIsIncomplete,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_OffsettingAccountStdVH', element: 'OffsettingAccount' }
                                 }]
@ObjectModel.text.element: ['OffsettingAccountName']
//@Consumption.labelElement: 'OffsettingAccountName' 
//@Consumption.semanticObject: 'GLAccount'
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Financial Accounting Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
I_JournalEntryItemBrowser.OffsettingAccount,

@Semantics.text:true
I_JournalEntryItemBrowser._OffsettingAccountWithBP.OffsettingAccountName as OffsettingAccountName,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FinancialAccountTypeStdVH', element: 'FinancialAccountType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Financial Accounting Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
I_JournalEntryItemBrowser.OffsettingAccountType,

// @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
I_JournalEntryItemBrowser.OffsettingChartOfAccounts,

I_JournalEntryItemBrowser.LineItemIsCompleted,

// @ObjectModel.text.element: ['YY1_EmplFullName'] blocked by ATC check
// @Consumption.labelElement: 'EmployeeFullName'
// @Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PersWrkAgrmtSrchHelp', element: 'PersonWorkAgreement' }  }]  05.10.2023
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_WorkAssignmentsVH', element: 'WorkAssignment' }  }]      // this is not the key !                           
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_Employment'            27.07.2020      
I_JournalEntryItemBrowser.PersonnelNumber,

@Semantics.text:true
// _Employment._Employee.EmployeeFullName as EmployeeFullName,    29.05.2020
//_PersonWorkAgreement_1.PersonFullName  as EmployeeFullName,       27.07.2020
// cast( 'XXXXX' as bu_name1tx ) as EmployeeFullName,
case when ( I_JournalEntryItemBrowser.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx )
//                                                                    else cast( '' as bu_name1tx )
end  as EmployeeFullName,


@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_BillableControlVH', element: 'BillableControl' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BillableControl'
I_JournalEntryItemBrowser.BillableControl,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ControllingObjectClass', element: 'ControllingObjectClass' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ControllingObjectClass'
I_JournalEntryItemBrowser.ControllingObjectClass,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CompanyCodeVH', element: 'CompanyCode' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
I_JournalEntryItemBrowser.PartnerCompanyCode,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ControllingObjectClass', element: 'ControllingObjectClass' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
I_JournalEntryItemBrowser.PartnerControllingObjectClass,

      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_OriginCostCenter'
@ObjectModel.text.association: '_OriginCostCenterText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.OriginCostCenter,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH' , element: 'ProfitCenter' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_OriginProfitCenter'
I_JournalEntryItemBrowser.OriginProfitCenter,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CostCenterActivityTypeVH', element: 'CostCtrActivityType' },
                                       additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'  
@ObjectModel.text.association: '_OriginCostCtrActivityTypeText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
I_JournalEntryItemBrowser.OriginCostCtrActivityType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProductVH', element: 'Product' } }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.OriginProduct,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH' , element: 'GLAccount' },    
                                     additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]  
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.VarianceOriginGLAccount,

@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.AccountAssignment,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_AccountAssignmentTypeStdVH', element: 'AccountAssignmentType' }  }]                                 
@UI.fieldGroup: [{ qualifier: '_ACCOUNT', groupLabel: 'Account Assignment Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL    
@ObjectModel.foreignKey.association: '_AccountAssignmentType'
I_JournalEntryItemBrowser.AccountAssignmentType,  

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CostCenterActivityTypeVH', element: 'CostCtrActivityType' },
                                       additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CostCtrActivityType'      
I_JournalEntryItemBrowser.CostCtrActivityType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_OrderBasicVH', element: 'OrderID' }
                                 }]
@ObjectModel.text.association: '_OrderIDText'
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.semanticObject: 'Order'
@ObjectModel.foreignKey.association: '_Order'      
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.OrderID,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_OrderCategoryVH', element: 'OrderCategory' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_OrderCategory'
I_JournalEntryItemBrowser.OrderCategory,

// @Consumption.hidden: true      available since 9.4.24
@ObjectModel.text.element: ['WBSDescription']                    //18.4.2024
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementBasicDataStdVH',
                     element: 'WBSElementInternalID' }
        }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]        
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_WBSElementBasicData'
I_JournalEntryItemBrowser.WBSElementInternalID,

// @Consumption.hidden: true      available since 9.4.24   
@ObjectModel.text.element: ['PartnerWBSElementDescription']    //18.4.24
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementBasicDataStdVH',
                     element: 'WBSElementInternalID' }
        }]      
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 23, exclude: false, importance: #HIGH, type: #STANDARD }]        
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
I_JournalEntryItemBrowser.PartnerWBSElementInternalID,

@Consumption.semanticObject: 'WBSElement'
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementBasicDataStdVH',
                     element: 'WBSElementExternalID' }
        }]
//@ObjectModel.text.element: ['PartnerWBSElementDescription']     // active 18.4.2024-14.10.2024   
//@ObjectModel.text.association: '_PartnerWBSElemntExtrnalIDText' // not possible anymore because change element->association not allowed ATC
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN           // not possible anymore because change element->association not allowed ATC 
@ObjectModel.text.element: ['PrtnWBSElementExternalIDName']       // starting from 14.10.2024
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 23, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
// cast( COALESCE( _PartnerWBSElementBasicData.WBSElementExternalID , '' ) as fis_partner_wbsext_no_conv ) as PartnerWBSElementExternalID,
I_JournalEntryItemBrowser.PartnerWBSElementExternalID,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( I_JournalEntryItemBrowser._PartnerWBSElementExternalID.WBSDescription as fis_partwbselementextidname preserving type ) as PrtnWBSElementExternalIDName,

@Consumption.semanticObject: 'WBSElement'
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementBasicDataStdVH',
                     element: 'WBSElementExternalID' }
        }]
//@ObjectModel.text.element: ['WBSDescription']                 // active 18.4.2024-14.10.2024
//@ObjectModel.text.association: '_WBSElementExternalIDText'    // until 18.4.2024 ;; not possible anymore because change element->association not allowed ATC
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN         //                    not possible anymore because change element->association not allowed ATC 
@ObjectModel.text.element: ['WBSElementExternalIDName']         // starting from 14.10.2024
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_WBSElementExternalID'
// cast( COALESCE( _WBSElementBasicData.WBSElementExternalID , '' ) as fis_wbsext_no_conv ) as WBSElementExternalID,  24.01.20 Coalesce not needed anymore because of UI5 improvements
//@ObjectModel.filter.transformedBy: 'ABAP:ZJO_SADL_EXIT_FILTER_TRANSFORM'
I_JournalEntryItemBrowser.WBSElementExternalID,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( I_JournalEntryItemBrowser._WBSElementExternalID.WBSDescription as fis_wbselementexternalidname preserving type ) as WBSElementExternalIDName,

      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_WBSElementStdVH',
                     element: 'WBSElement' }
        }]
      // ]--GENERATED
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 17, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_WBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'
// the source for this field changes sometimes until 2018: from ACDOCA -- from LoJ -- from ACDOCA
// since mid of 2018 : from LoJ
//cast( COALESCE( _WBSElementBasicData.WBSElement , '' ) as fis_wbs ) as WBSElement, // until 24.01.20: from LoJ without NULL values 
// cast( _WBSElementBasicData.WBSElement as fis_wbs ) as WBSElement,  // until 15.11.2022: from LoJ with NULL values 
cast( I_JournalEntryItemBrowser.WBSElement as fis_wbs_depre ) as WBSElement,                    // since 15.11.2022: again from ACDOCA to avoid NULL values 

@ObjectModel.filter.enabled: false
@Semantics.text:true
_WBSElementBasicData.WBSDescription,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( _PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_description preserving type ) as PartnerWBSElementDescription,

@ObjectModel.filter.enabled: false
@Semantics.text:true
_ProjectBasicData.ProjectDescription,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( _PartnerProjectBasicData.ProjectDescription as fis_partner_projectdescription preserving type ) as PartnerProjectDescription,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_WorkPackageStdVH', element: 'WorkPackage' }
                                 }]
@ObjectModel.foreignKey.association: '_WorkPackage' 
I_JournalEntryItemBrowser.WorkPackage,

// @Consumption.hidden: true      available since 9.4.24
@ObjectModel.text.element: ['ProjectDescription']                    //18.4.2024
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectBasicDataStdVH',
                     element: 'ProjectInternalID' }
        }]    
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 18, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ProjectBasicData'
I_JournalEntryItemBrowser.ProjectInternalID,

// @Consumption.hidden: true      available since 9.4.24   
@ObjectModel.text.element: ['PartnerProjectDescription']    //18.4.24
@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectBasicDataStdVH',
                     element: 'ProjectInternalID' }
        }]    
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 24, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
I_JournalEntryItemBrowser.PartnerProjectInternalID,

@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectBasicDataStdVH',
                     element: 'ProjectExternalID' }
        }]
//@ObjectModel.text.element: ['PartnerProjectDescription']      // active 18.4.2024-14.10.2024   
//@ObjectModel.text.association: '_PartnerProjctExtrnalIDText'  // not possible anymore because change element->association not allowed ATC
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN         // not possible anymore because change element->association not allowed ATC
@ObjectModel.text.element: ['PartnerProjectExternalIDName']     // starting from 14.10.2024
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 24, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
//cast( COALESCE( _PartnerProjectBasicData.ProjectExternalID , '' ) as fis_part_projectext_no_conv ) as PartnerProjectExternalID,
I_JournalEntryItemBrowser.PartnerProjectExternalID,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( I_JournalEntryItemBrowser._PartnerProjectExternalID.ProjectDescription as fis_partprojectexternalidname preserving type ) as PartnerProjectExternalIDName,

@Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjectBasicDataStdVH',
                     element: 'ProjectExternalID' }
        }] 
//@ObjectModel.text.element: ['ProjectDescription']          // active 18.4.2024-14.10.2024
//@ObjectModel.text.association: '_ProjectExternalIDText'    // until 18.4.2024 ;; not possible anymore because change element->association not allowed ATC
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN      //                    not possible anymore because change element->association not allowed ATC
@ObjectModel.text.element: ['ProjectExternalIDName']         // starting from 14.10.2024
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 18, exclude: false, importance: #HIGH, type: #STANDARD }]
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectExternalID'
//cast( COALESCE( _ProjectBasicData.ProjectExternalID , '' ) as fis_projectext_no_conv ) as ProjectExternalID,
I_JournalEntryItemBrowser.ProjectExternalID,

@ObjectModel.filter.enabled: false
@Semantics.text:true
cast( I_JournalEntryItemBrowser._ProjectExternalID.ProjectDescription as fis_projectexternalidname preserving type ) as ProjectExternalIDName,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProjectStdVH', element: 'Project' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 19, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_Project'  
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'
// see remarks on WBSElement
cast( I_JournalEntryItemBrowser.Project as fis_project_depre ) as Project,

I_JournalEntryItemBrowser.OperatingConcern,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProjectNetworkStdVH', element: 'ProjectNetwork' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ProjectNetwork'
I_JournalEntryItemBrowser.ProjectNetwork,

I_JournalEntryItemBrowser.RelatedNetworkActivity,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_BusinessProcessStdVH' , element: 'BusinessProcess' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 21, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BusinessProcess'      
I_JournalEntryItemBrowser.BusinessProcess,

@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 22, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.CostObject,
//bemot,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_CostAnalysisResourceStdVH' , element: 'CostAnalysisResource' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 23, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CostAnalysisResource'      
I_JournalEntryItemBrowser.CostAnalysisResource,

I_JournalEntryItemBrowser.CustomerServiceNotification,

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                     element: 'ServiceDocumentType' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 31, exclude: false, importance: #HIGH, type: #STANDARD }]        
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
I_JournalEntryItemBrowser.ServiceDocumentType,

@Consumption.semanticObject: 'ServiceDocument'
@Consumption.valueHelpDefinition: [ { entity:  { name:    'I_AcctgServiceDocumentVH', element: 'ServiceDocument' } ,
                                      additionalBinding: [ { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 32, exclude: false, importance: #HIGH, type: #STANDARD }]        
@ObjectModel.foreignKey.association: '_ServiceDocument'
I_JournalEntryItemBrowser.ServiceDocument,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                     element: 'ServiceDocumentItem' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 33, exclude: false, importance: #HIGH, type: #STANDARD }]        
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
I_JournalEntryItemBrowser.ServiceDocumentItem,


@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                     element: 'ServiceDocumentType' }
        }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]       
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
I_JournalEntryItemBrowser.PartnerServiceDocumentType,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentVH',
                     element: 'ServiceDocument' }
        }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 31, exclude: false, importance: #HIGH, type: #STANDARD }]        
@ObjectModel.foreignKey.association: '_PartnerServiceDocument'
I_JournalEntryItemBrowser.PartnerServiceDocument,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                     element: 'ServiceDocumentItem' }
        }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 32, exclude: false, importance: #HIGH, type: #STANDARD }]       
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
I_JournalEntryItemBrowser.PartnerServiceDocumentItem,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ServiceContractTypeStdVH',
                     element: 'ServiceDocumentType' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 34, exclude: false, importance: #HIGH, type: #STANDARD }]      
@ObjectModel.foreignKey.association: '_ServiceContractType'
I_JournalEntryItemBrowser.ServiceContractType,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceContractVH',
                     element: 'ServiceContract' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 35, exclude: false, importance: #HIGH, type: #STANDARD }]      
@ObjectModel.foreignKey.association: '_ServiceContract'
I_JournalEntryItemBrowser.ServiceContract,
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 36, exclude: false, importance: #HIGH, type: #STANDARD }]      
@ObjectModel.foreignKey.association: '_ServiceContractItem'
I_JournalEntryItemBrowser.ServiceContractItem,  

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 37, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.BusinessSolutionOrder,

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 38, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.BusinessSolutionOrderItem,

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProviderContractVH',
                     element: 'ProviderContract' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 41, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ProviderContract'
I_JournalEntryItemBrowser.ProviderContract,

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProviderContractItemVH',
                     element: 'ProviderContractItem' }
        }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 42, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_ProviderContractItem'
I_JournalEntryItemBrowser.ProviderContractItem,

@Analytics.internalName: #LOCAL
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 22, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
@ObjectModel.text.association: '_TimeSheetOvertimeCatText'
I_JournalEntryItemBrowser.TimeSheetOvertimeCategory, 

@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerAccountAssignment,

@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerAccountAssignmentType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CostCenterActivityTypeVH', element: 'CostCtrActivityType' },
                                       additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'      
I_JournalEntryItemBrowser.PartnerCostCtrActivityType,

      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_OrderBasicVH',
                     element: 'OrderID' }
        }]
      @ObjectModel.text.association: '_PartnerOrderText_2'
      // ]--GENERATED
//@Consumption.semanticObject: 'InternalOrder'
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PartnerOrder_2 as PartnerOrder,
 
//@Consumption.valueHelpDefinition: [ 
//  { entity:  { name:    'I_Order',
//               element: 'OrderID' }
//  }]
//@ObjectModel.text.association: '_PartnerOrderText_2'
//@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_PartnerOrder_2'
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
//PartnerOrder_2, 

//@ObjectModel.readOnly: true
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerOrderCategory,
 
      //--[ GENERATED:012:GFBfhxvv7jY4pDtYd3QQwm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_WBSElementStdVH',
                     element: 'WBSElement' }
        }]
      // ]--GENERATED
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerWBSElement' 
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
// see remarks on WBSElement  
cast( I_JournalEntryItemBrowser.PartnerWBSElement as fis_partner_wbs_depre ) as PartnerWBSElement,   

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProjectStdVH', element: 'Project' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
// see remarks on WBSElement  
cast( I_JournalEntryItemBrowser.PartnerProject as fis_part_project_depre ) as PartnerProject,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerSalesDocument'
I_JournalEntryItemBrowser.PartnerSalesDocument,

I_JournalEntryItemBrowser.PartnerSalesDocumentItem,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProjectNetworkStdVH', element: 'ProjectNetwork' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 17, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerProjectNetwork,

I_JournalEntryItemBrowser.PartnerProjectNetworkActivity,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_BusinessProcessStdVH' , element: 'BusinessProcess' },    
                                     additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 18, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerBusinessProcess'      
I_JournalEntryItemBrowser.PartnerBusinessProcess,

@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 19, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PartnerCostObject,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_WorkPackageWorkItemStdVH', element: 'WorkItem' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_CONTROLLING', groupLabel: 'Cost Accounting Fields', position: 24, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_WorkPackageWorkItem' 
I_JournalEntryItemBrowser.WorkItem,


//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////

@Consumption.valueHelpDefinition: [  { entity:  { name: 'C_BillingDocumentTypeVH', element: 'BillingDocumentType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 17, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BillingDocumentType'      
I_JournalEntryItemBrowser.BillingDocumentType,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SalesOrganization', element: 'SalesOrganization' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SalesOrganization'
I_JournalEntryItemBrowser.SalesOrganization,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_DistributionChannel', element: 'DistributionChannel' }
                                 }]

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_DistributionChannel'      
I_JournalEntryItemBrowser.DistributionChannel,

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.OrganizationDivision,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProductVH', element: 'Product' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_SoldProductText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.SoldProduct,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_ProductGroupVH', element: 'ProductGroup' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SoldProductGroup_2'
I_JournalEntryItemBrowser.SoldProductGroup,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CustomerGroupVH', element: 'CustomerGroup' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CustomerGroup'
@ObjectModel.text.association: '_CustomerGroupText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.CustomerGroup,

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_CustomerSupplierCountryText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.CustomerSupplierCountry,

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_CustomerSupplierIndustryText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.CustomerSupplierIndustry,

@UI.fieldGroup: [{ qualifier: '_LOGISTICS', groupLabel: 'Logistic Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.SalesDistrict,

I_JournalEntryItemBrowser.BillToParty,

I_JournalEntryItemBrowser.ShipToParty,

I_JournalEntryItemBrowser.CustomerSupplierCorporateGroup,


//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FinMgmtAreaStdVH', element: 'FinancialManagementArea' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FinancialManagementArea'      
I_JournalEntryItemBrowser.FinancialManagementArea,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FundStdVH', element: 'Fund' },
                                     additionalBinding: [ { localElement: 'FinancialManagementArea' , element: 'FinancialManagementArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_Fund'
@ObjectModel.text.association: '_FundText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.Fund,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_GrantStdVH', element: 'GrantID' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_GrantText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.GrantID,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_BudgetPeriodStdVH', element: 'BudgetPeriod' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_BudgetPeriod'
@ObjectModel.text.association: '_BudgetPeriodText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.BudgetPeriod,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FundStdVH', element: 'Fund' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PartnerFund'
@ObjectModel.text.association: '_PartnerFundText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PartnerFund,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_GrantStdVH', element: 'GrantID' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 21, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_PartnerGrantText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PartnerGrant,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_BudgetPeriodStdVH', element: 'BudgetPeriod' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PARTNER', groupLabel: 'Partner Fields', position: 22, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_PartnerBudgetPeriodText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PartnerBudgetPeriod,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FundsCenterLatestVH', element: 'FundsCenter' },
                                     additionalBinding: [ { localElement: 'FinancialManagementArea' , element: 'FinancialManagementArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_FundsCenter'   
@ObjectModel.text.association: '_FundsCenterText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN   
I_JournalEntryItemBrowser.FundsCenter,

@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_FundedProgramStdVH', element: 'FundedProgram' },
                                     additionalBinding: [ { localElement: 'FinancialManagementArea' , element: 'FinancialManagementArea' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.association: '_FundedProgramText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.FundedProgram,

///////////Start of BF:PSM_BUDGET_ACCOUNTING_CONTROL section///////////

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.CommitmentItem,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.EarmarkedFundsDocument,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.EarmarkedFundsDocumentItem, 

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
I_JournalEntryItemBrowser.CashLedgerCompanyCode,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_CashLedgerCompanyCode,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity: { name: 'I_GLAccountInCompanyCodeStdVH' , element: 'GLAccount' },
                                     additionalBinding: [ { localElement: 'CashLedgerCompanyCode' , element: 'CompanyCode' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 31, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
// 17.03.2023:  @Feature + @ObjectModel.text.association  together does not work --> ATC with extensibility in systems behind development system
//@ObjectModel.text.association: '_CashLedgerAccountText'
//@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
@ObjectModel.text.element: ['CashLedgerAccountName']
I_JournalEntryItemBrowser.CashLedgerAccount,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.hidden: true
@Semantics.text:true
cast( _CashLedgerAccountText[1: Language = $session.system_language].GLAccountName as fis_re_account_name preserving type ) as CashLedgerAccountName,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_CashLedgerAccount,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_CashLedgerAccountText,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PubSecBudgetAccountStdVH', element: 'PubSecBudgetAccount' },
                                     additionalBinding: [ { localElement: 'PubSecBudgetAccountCoCode' , element: 'PubSecBudgetAccountCoCode' } ]
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 32, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
@ObjectModel.text.association: '_BudgetAccountText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PubSecBudgetAccount,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetAccount,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_BudgetAccountText,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 33, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
I_JournalEntryItemBrowser.PubSecBudgetAccountCoCode,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetAccountCoCode,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 34, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
@Consumption.filter.selectionType:#INTERVAL
I_JournalEntryItemBrowser.PubSecBudgetCnsmpnDate,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetCnsmpnDate,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 35, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
I_JournalEntryItemBrowser.PubSecBudgetCnsmpnFsclPeriod,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetCnsmpnFsclPeriod,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 36, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
I_JournalEntryItemBrowser.PubSecBudgetCnsmpnFsclYear,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetCnsmpnFsclYear,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 37, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.PubSecBudgetIsRelevant,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PubSecBdgtCnsmpnType', element: 'PubSecBudgetCnsmpnType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 38, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
@ObjectModel.text.association: '_PubSecBdgtCnsmpnTypeText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PubSecBudgetCnsmpnType,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetCnsmpnType,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBdgtCnsmpnTypeText,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_PubSecBdgtCnsmpnAmtType', element: 'PubSecBudgetCnsmpnAmtType' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 39, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
@ObjectModel.text.association: '_PubSecBdgtCnsmpnAmtTypeT'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.PubSecBudgetCnsmpnAmtType,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBudgetCnsmpnAmtType,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_PubSecBdgtCnsmpnAmtTypeT,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SponsoredProgramStdVH', element: 'SponsoredProgram' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 40, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SponsoredProgram'
@ObjectModel.text.association: '_SponsoredProgramCoreText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.SponsoredProgram,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_SponsoredProgram,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_SponsoredProgramCoreText,

@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
@Consumption.valueHelpDefinition: [  { entity:  { name: 'I_SponsoredClassStdVH', element: 'SponsoredClass' }
                                 }]
@UI.fieldGroup: [{ qualifier: '_PUBLIC_SECTOR', groupLabel: 'Public Sector Management Fields', position: 41, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.foreignKey.association: '_SponsoredClass'
@ObjectModel.text.association: '_SponsoredClassCoreText'
@ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN
I_JournalEntryItemBrowser.SponsoredClass,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_SponsoredClass,
@Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
_SponsoredClassCoreText,
///////////End of BF:PSM_BUDGET_ACCOUNTING_CONTROL section/////////////


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
///////////////////////////////////////////////////////////////////////
// @Consumption.switched : [ {id: ['FINS_FS_ACCDIM'] } ]  //other syntax as in RSRT apps (is working in 2408);  solution for SEGW/SADL apps comes later after 2408
@Feature: 'FINS_FS_ACCDIM'
@UI.fieldGroup: [{ qualifier: '_FINSERVICES', groupLabel: 'Financial Services Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
FinancialServicesProductGroup,
// @Consumption.switched : [ {id: ['FINS_FS_ACCDIM'] } ]
@Feature: 'FINS_FS_ACCDIM'
@UI.fieldGroup: [{ qualifier: '_FINSERVICES', groupLabel: 'Financial Services Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
FinancialServicesBranch,
// @Consumption.switched : [ {id: ['TEST_TOGGLE'] } ]
@Feature: 'FINS_FS_ACCDIM'
@UI.fieldGroup: [{ qualifier: '_FINSERVICES', groupLabel: 'Financial Services Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
FinancialDataSource,    

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 30, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.JointVenture,

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 31, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.JointVentureEquityGroup,

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 32, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.JointVentureCostRecoveryCode,
//vptnr,
//btype,

I_JournalEntryItemBrowser.JointVentureEquityType,
//prodper,

@UI.fieldGroup: [{ qualifier: '_DOCUMENT', groupLabel: 'Financial Accounting Fields', position: 33, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.JointVentureAccountingActivity,

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
I_JournalEntryItemBrowser.SettlementReferenceDate,
//pswenr,
//psgenr,
//psgrnr,
//psmenr,
//precnnr,
//psnksl,
//psempsl,
//pdabrz,

 ///////////////////////////////////////////////////////////////////////
 // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
 ///////////////////////////////////////////////////////////////////////     
//   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
//   AccrualObjectType                                            AccrualItemType  are the corresponding types
@UI.fieldGroup: [{ qualifier: '_ACCRUAL', groupLabel: 'Accrual Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_AccrualObjectType' 
I_JournalEntryItemBrowser.AccrualObjectType,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_AccrualObjectVH' , element: 'AccrualObject' },    
                                     additionalBinding: [ { localElement: 'AccrualObjectType' , element: 'AccrualObjectType' } ,
                                                          { localElement: 'CompanyCode' , element: 'CompanyCode' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_ACCRUAL', groupLabel: 'Accrual Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_AccrualObject' 
I_JournalEntryItemBrowser.AccrualObject,

@Consumption.valueHelpDefinition: [{ entity: { name: 'I_AccrualSubobjectVH' , element: 'AccrualSubobject' },    
                                     additionalBinding: [ { localElement: 'AccrualObjectType' , element: 'AccrualObjectType' } ,
                                                          { localElement: 'CompanyCode' , element: 'CompanyCode' } ,
                                                          { localElement: 'AccrualObject' , element: 'AccrualObject' } ]
                                  }]
@UI.fieldGroup: [{ qualifier: '_ACCRUAL', groupLabel: 'Accrual Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_AccrualSubobject' 
I_JournalEntryItemBrowser.AccrualSubobject,

@UI.fieldGroup: [{ qualifier: '_ACCRUAL', groupLabel: 'Accrual Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
//@ObjectModel.foreignKey.association: '_AccrualItemType' 
I_JournalEntryItemBrowser.AccrualItemType, 


///////////////////////////////////////////////////////////////////////
 // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
 ///////////////////////////////////////////////////////////////////////  
@UI.fieldGroup: [{ qualifier: '_FINVALU', groupLabel: 'Financial Valuation Fields', position: 01, exclude: false, importance: #HIGH, type: #STANDARD }]   
I_JournalEntryItemBrowser.FinancialValuationObjectType,
@UI.fieldGroup: [{ qualifier: '_FINVALU', groupLabel: 'Financial Valuation Fields', position: 02, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.FinancialValuationObject,
@UI.fieldGroup: [{ qualifier: '_FINVALU', groupLabel: 'Financial Valuation Fields', position: 03, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.FinancialValuationSubobject,
@UI.fieldGroup: [{ qualifier: '_FINVALU', groupLabel: 'Financial Valuation Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
@Consumption.filter.selectionType:#INTERVAL
I_JournalEntryItemBrowser.NetDueDate,
@UI.fieldGroup: [{ qualifier: '_FINVALU', groupLabel: 'Financial Valuation Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
I_JournalEntryItemBrowser.CreditRiskClass,



@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_JournalEntryItemBrowser.DebitAmountInCoCodeCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 08, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_JournalEntryItemBrowser.CreditAmountInCoCodeCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 09, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_JournalEntryItemBrowser.DebitAmountInTransCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 10, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_JournalEntryItemBrowser.CreditAmountInTransCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
I_JournalEntryItemBrowser.DebitAmountInBalanceTransCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
I_JournalEntryItemBrowser.CreditAmountInBalanceTransCrcy,


////////////////////////////////////
// NEW
@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItemBrowser.DebitAmountInGlobalCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
I_JournalEntryItemBrowser.CreditAmountInGlobalCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
I_JournalEntryItemBrowser.DebitAmountInFunctionalCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
I_JournalEntryItemBrowser.CreditAmountInFunctionalCrcy,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 11, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy1 as DebitAmountInFreeDefinedCrcy1,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 12, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy1 as CreditAmountInFreeDefinedCrcy1,
 
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 13, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy2 as DebitAmountInFreeDefinedCrcy2,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 14, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy2 as CreditAmountInFreeDefinedCrcy2,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 15, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy3 as DebitAmountInFreeDefinedCrcy3,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 16, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy3 as CreditAmountInFreeDefinedCrcy3,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 17, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy4 as DebitAmountInFreeDefinedCrcy4,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 18, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy4 as CreditAmountInFreeDefinedCrcy4,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 19, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy5 as DebitAmountInFreeDefinedCrcy5,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy5 as CreditAmountInFreeDefinedCrcy5,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 21, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy6 as DebitAmountInFreeDefinedCrcy6,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 22, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy6 as CreditAmountInFreeDefinedCrcy6,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 23, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy7 as DebitAmountInFreeDefinedCrcy7,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 24, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy7 as CreditAmountInFreeDefinedCrcy7,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 25, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
I_JournalEntryItemBrowser.DebitAmountInFreeDfndCrcy8 as DebitAmountInFreeDefinedCrcy8,

@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 26, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
I_JournalEntryItemBrowser.CreditAmountInFreeDfndCrcy8 as CreditAmountInFreeDefinedCrcy8,
//////////////////////////////////


I_JournalEntryItemBrowser.IsStatisticalOrder,  

@UI.fieldGroup: [{ qualifier: '_ADMIN', groupLabel: 'Administrative Fields', position: 20, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.filter.enabled: true
I_JournalEntryItemBrowser.IsStatisticalCostCenter,  

I_JournalEntryItemBrowser.IsStatisticalSalesDocument,

I_JournalEntryItemBrowser.WBSIsStatisticalWBSElement,  

@ObjectModel.filter.enabled: false
@Aggregation.default: #SUM
@UI.lineItem: [{position:150}]
I_JournalEntryItemBrowser.NumberOfItems,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 04, exclude: false, importance: #HIGH, type: #STANDARD }]
//cast( COALESCE( _JournalEntry.SenderAccountingDocument , '' ) as fis_belnr_sender ) as SenderAccountingDocument,
cast(  I_JournalEntryItemBrowser._JournalEntry.SenderAccountingDocument as fis_belnr_sender ) as SenderAccountingDocument,
-- cast( SenderAccountingDocument as fis_belnr_sender) as SenderAccountingDocument,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 05, exclude: false, importance: #HIGH, type: #STANDARD }]
//cast(COALESCE( _JournalEntry.SenderCompanyCode, '' ) as bukrs_sender ) as SenderCompanyCode,
cast( I_JournalEntryItemBrowser._JournalEntry.SenderCompanyCode as bukrs_sender ) as SenderCompanyCode,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 06, exclude: false, importance: #HIGH, type: #STANDARD }]
//cast( COALESCE( _JournalEntry.SenderFiscalYear , '0000' ) as gjahr_sender ) as SenderFiscalYear,
cast( I_JournalEntryItemBrowser._JournalEntry.SenderFiscalYear as fis_gjahr_sender_no_conv ) as SenderFiscalYear,

@UI.fieldGroup: [{ qualifier: '_SENDER', groupLabel: 'Source System Fields', position: 07, exclude: false, importance: #HIGH, type: #STANDARD }]
//cast( COALESCE( _JournalEntry.SenderLogicalSystem, '' ) as logsystem_sender ) as SenderLogicalSystem, 
cast( I_JournalEntryItemBrowser._JournalEntry.SenderLogicalSystem as fis_logsystem_sender ) as SenderLogicalSystem, 

////////////////////////////////////////////////
//@Semantics.currencyCode:true
//ControllingAreaCurrency,
//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'ControllingAreaCurrency'} }
//AmountInCoAreaCurrency,
//
//@Semantics.currencyCode:true
//GroupCurrency,
//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'GroupCurrency'} }
//AmountInGroupCurrency,
//
//@Semantics.currencyCode:true
//HardCurrency,
//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'HardCurrency'} }
//AmountInHardCurrency,
//
//@Semantics.currencyCode:true
//IndexBasedCurrency,
//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'IndexBasedCurrency'} }
//AmountInIndexBasedCurrency,


@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 40, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['GlobalCurrencyRoleName']
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole,  
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 51, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency1RoleName']     
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role, 
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 53, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency2RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role, 
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 55, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency3RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role,  
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 57, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency4RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role, 
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 59, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency5RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role,   
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 61, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency6RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role,  
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 62, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency7RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role, 
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 63, exclude: false, importance: #HIGH, type: #STANDARD }]
@ObjectModel.text.element: ['FreeDefinedCurrency8RoleName'] 
I_JournalEntryItemBrowser._LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role,


@UI.fieldGroup: [{ qualifier: '_AMOUNT1_QUANTITY', groupLabel: 'Amount and Quantity Fields', position: 41, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._GlobalCurrencyRole._Text[1: Language = $session.system_language].CurrencyRoleName , '' )  as fis_gc_currole_name   ) as GlobalCurrencyRoleName,
cast( _LedgerCompanyCodeCrcyRoles._GlobalCurrencyRole._Text[1: Language = $session.system_language].CurrencyRoleName as fis_gc_currole_name   ) as GlobalCurrencyRoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 52, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency1Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc1_currole_name ) as FreeDefinedCurrency1RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency1Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc1_currole_name ) as FreeDefinedCurrency1RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 54, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency2Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc2_currole_name ) as FreeDefinedCurrency2RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency2Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc2_currole_name ) as FreeDefinedCurrency2RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 56, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency3Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc3_currole_name ) as FreeDefinedCurrency3RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency3Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc3_currole_name ) as FreeDefinedCurrency3RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 58, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency4Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc4_currole_name ) as FreeDefinedCurrency4RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency4Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc4_currole_name ) as FreeDefinedCurrency4RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 60, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency5Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc5_currole_name ) as FreeDefinedCurrency5RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency5Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc5_currole_name ) as FreeDefinedCurrency5RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 62, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency6Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc6_currole_name ) as FreeDefinedCurrency6RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency6Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc6_currole_name ) as FreeDefinedCurrency6RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 64, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency7Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc7_currole_name ) as FreeDefinedCurrency7RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency7Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc7_currole_name ) as FreeDefinedCurrency7RoleName,
@UI.fieldGroup: [{ qualifier: '_AMOUNTS_FREE', groupLabel: 'Amount Fields in Freely Defined Currencies', position: 66, exclude: false, importance: #HIGH, type: #STANDARD }]
@Semantics.text:true
//cast( COALESCE( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency8Role._Text[1: Language = $session.system_language].CurrencyRoleName , '' ) as fis_fdc8_currole_name ) as FreeDefinedCurrency8RoleName,
cast( _LedgerCompanyCodeCrcyRoles._FreeDefinedCurrency8Role._Text[1: Language = $session.system_language].CurrencyRoleName as fis_fdc8_currole_name ) as FreeDefinedCurrency8RoleName,


//@Semantics.currencyCode:true
//cast(
//case _LedgerCompanyCodeCrcyRoles.FunctionalCurrencyRole
//when _LedgerCompanyCodeCrcyRoles.CompanyCodeCurrencyRole  then CompanyCodeCurrency
//when _LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole       then GlobalCurrency
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role then FreeDefinedCurrency1
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role then FreeDefinedCurrency2
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role then FreeDefinedCurrency3
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role then FreeDefinedCurrency4
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role then FreeDefinedCurrency5
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role then FreeDefinedCurrency6
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role then FreeDefinedCurrency7
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role then FreeDefinedCurrency8
//else '' end as fins_currf )
//as FunctionalCurrency ,
//
//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
//cast(
//case _LedgerCompanyCodeCrcyRoles.FunctionalCurrencyRole
//when _LedgerCompanyCodeCrcyRoles.CompanyCodeCurrencyRole  then AmountInCompanyCodeCurrency
//when _LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole       then AmountInGlobalCurrency
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role then AmountInFreeDefinedCurrency1
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role then AmountInFreeDefinedCurrency2
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role then AmountInFreeDefinedCurrency3
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role then AmountInFreeDefinedCurrency4
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role then AmountInFreeDefinedCurrency5
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role then AmountInFreeDefinedCurrency6
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role then AmountInFreeDefinedCurrency7
//when _LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role then AmountInFreeDefinedCurrency8
//else 0 end as fins_funccurr preserving type )
//as AmountInFunctionalCurrency ,





//$extension.*,

/////////////////////////////////
// Publishing of Associations -- do some sorting because of Extensibility
/////////////////////////////////

I_JournalEntryItemBrowser._JournalEntry,
_OperationalAcctgDocItem,


////////////////////////////////////////////////////////////////////////////
// now the deprecated associations --  @VDM.lifecycle.status: #DEPRECATED //
////////////////////////////////////////////////////////////////////////////

//                                        -- the coding is not needed because the view was first released in 07/2018
//                                           therefore we can delete the publishing of the associations
// --------------------------------------- 
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalID'
_WBSElement,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalIDText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalIDText'      
//      @Consumption.hidden: true
_WBSElementText,
      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerWBSElementExternalID'
_PartnerWBSElement,

@UI.hidden: true
@Consumption.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerWBSElemntExtrnalIDText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerWBSElemntExtrnalIDText'      
_PartnerWBSElementText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProjectExternalID'
_Project,

@UI.hidden: true
@Consumption.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectExternalIDText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProjectExternalIDText'    
_ProjectText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerProjectExternalID'
_PartnerProject,


/////////////////////////////////
// now the actual associations //
/////////////////////////////////
_WBSElementBasicData,
_WBSElementBasicDataText,
I_JournalEntryItemBrowser._WBSElementExternalID,
_WBSElementExternalIDText,
_ProjectBasicData,
_ProjectBasicDataText,
I_JournalEntryItemBrowser._ProjectExternalID,
_ProjectExternalIDText,
I_JournalEntryItemBrowser._CompanyCode,
I_JournalEntryItemBrowser._FiscalYear,
//_FiscalPeriod,
//_LedgerFiscalYear,
I_JournalEntryItemBrowser._FiscalYearVariant,
I_JournalEntryItemBrowser._FiscalPeriodForVariant,
I_JournalEntryItemBrowser._LedgerFiscalYearForVariant,
I_JournalEntryItemBrowser._ControllingArea,
I_JournalEntryItemBrowser._ControllingAreaText,
I_JournalEntryItemBrowser._BalanceTransactionCurrency,
I_JournalEntryItemBrowser._TransactionCurrency,
I_JournalEntryItemBrowser._CompanyCodeCurrency,
I_JournalEntryItemBrowser._GlobalCurrency,
I_JournalEntryItemBrowser._FunctionalCurrency,
I_JournalEntryItemBrowser._FreeDefinedCurrency1,
I_JournalEntryItemBrowser._FreeDefinedCurrency2,
I_JournalEntryItemBrowser._FreeDefinedCurrency3,
I_JournalEntryItemBrowser._FreeDefinedCurrency4,
I_JournalEntryItemBrowser._FreeDefinedCurrency5,
I_JournalEntryItemBrowser._FreeDefinedCurrency6,
I_JournalEntryItemBrowser._FreeDefinedCurrency7,
I_JournalEntryItemBrowser._FreeDefinedCurrency8,
I_JournalEntryItemBrowser._BaseUnit,
I_JournalEntryItemBrowser._CostSourceUnit,
I_JournalEntryItemBrowser._AdditionalQuantity1Unit,
I_JournalEntryItemBrowser._AdditionalQuantity2Unit,
I_JournalEntryItemBrowser._AdditionalQuantity3Unit,
I_JournalEntryItemBrowser._Segment,
I_JournalEntryItemBrowser._SegmentText,
I_JournalEntryItemBrowser._ProfitCenter,
_ProfitCenterText,
I_JournalEntryItemBrowser._CurrentProfitCenter,
I_JournalEntryItemBrowser._CostCenter,
_CostCenterText,
I_JournalEntryItemBrowser._CurrentCostCenter,
I_JournalEntryItemBrowser._CostAnalysisResource,
I_JournalEntryItemBrowser._AccountAssignmentType,
I_JournalEntryItemBrowser._BusinessArea,
I_JournalEntryItemBrowser._BusinessAreaText,
I_JournalEntryItemBrowser._FunctionalArea,
I_JournalEntryItemBrowser._FunctionalAreaText,
I_JournalEntryItemBrowser._GLAccountInChartOfAccounts,
I_JournalEntryItemBrowser._ChartOfAccounts,
I_JournalEntryItemBrowser._AccountingDocumentType,
I_JournalEntryItemBrowser._AccountingDocumentTypeText,
I_JournalEntryItemBrowser._FinancialAccountType,
I_JournalEntryItemBrowser._DebitCreditCode,
I_JournalEntryItemBrowser._DebitCreditCodeText, 
I_JournalEntryItemBrowser._Product,
_ProductText,
I_JournalEntryItemBrowser._Plant,
I_JournalEntryItemBrowser._WorkPackageWorkItem,
I_JournalEntryItemBrowser._WorkPackage,
I_JournalEntryItemBrowser._Ledger,
I_JournalEntryItemBrowser._LedgerText,
I_JournalEntryItemBrowser._SourceLedger,

I_JournalEntryItemBrowser._Customer,
I_JournalEntryItemBrowser._CustomerText,
I_JournalEntryItemBrowser._CustomerGroup,
_CustomerGroupText,
I_JournalEntryItemBrowser._CustomerSupplierIndustry,
_CustomerSupplierIndustryText,
I_JournalEntryItemBrowser._CustomerSupplierCountry,
_CustomerSupplierCountryText,  

I_JournalEntryItemBrowser._Supplier,
I_JournalEntryItemBrowser._SupplierText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProductGroup_2'
I_JournalEntryItemBrowser._ProductGroup,
I_JournalEntryItemBrowser._ProductGroup_2,    

I_JournalEntryItemBrowser._SalesDocument,
I_JournalEntryItemBrowser._SalesDocumentItem,

I_JournalEntryItemBrowser._InternalOrder,
I_JournalEntryItemBrowser._Order,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
I_JournalEntryItemBrowser._Employment,
I_JournalEntryItemBrowser._PersonWorkAgreement_1,

I_JournalEntryItemBrowser._BillableControl,

_LedgerCompanyCodeVH,

_GLAccountInCompanyCode,

I_JournalEntryItemBrowser._FinancialTransactionType,
I_JournalEntryItemBrowser._BusinessTransactionCategory,
I_JournalEntryItemBrowser._BusinessTransactionType,
I_JournalEntryItemBrowser._ReferenceDocumentType,
I_JournalEntryItemBrowser._PredecessorReferenceDocType,

I_JournalEntryItemBrowser._PartnerCostCenter,
I_JournalEntryItemBrowser._PartnerProfitCenter,
_PartnerProfitCenterText,
I_JournalEntryItemBrowser._PartnerBusinessArea,
I_JournalEntryItemBrowser._PartnerFunctionalArea,
I_JournalEntryItemBrowser._PartnerCompanyCode,
I_JournalEntryItemBrowser._PartnerSegment,

I_JournalEntryItemBrowser._AccountingDocumentCategory,

I_JournalEntryItemBrowser._PostingKey,

I_JournalEntryItemBrowser._SubLedgerAccLineItemType,
_SubLedgerAccLineItemTypeT,

I_JournalEntryItemBrowser._EliminationProfitCenter,

I_JournalEntryItemBrowser._ControllingObject,

I_JournalEntryItemBrowser._GLAccountType,
I_JournalEntryItemBrowser._AlternativeGLAccount,
//_SenderGLAccount,
I_JournalEntryItemBrowser._CountryChartOfAccounts,

I_JournalEntryItemBrowser._PurchasingDocument,
I_JournalEntryItemBrowser._PurchasingDocumentItem,

I_JournalEntryItemBrowser._SpecialGLCode,
I_JournalEntryItemBrowser._TaxCode,

I_JournalEntryItemBrowser._HouseBank,

I_JournalEntryItemBrowser._ClearingJrnlEntryFiscalYear,
I_JournalEntryItemBrowser._ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
I_JournalEntryItemBrowser._ClearingAccountingDocument,

I_JournalEntryItemBrowser._MasterFixedAsset,
I_JournalEntryItemBrowser._GroupMasterFixedAsset,
I_JournalEntryItemBrowser._FixedAsset,
I_JournalEntryItemBrowser._GroupFixedAsset,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
I_JournalEntryItemBrowser._InventorySpecialStockValnType,
I_JournalEntryItemBrowser._InventorySpclStockValnType, 

I_JournalEntryItemBrowser._InventorySpecialStockType,
I_JournalEntryItemBrowser._InventorySpclStkSalesDocument,
I_JournalEntryItemBrowser._InventorySpclStkSalesDocItm,
I_JournalEntryItemBrowser._InventorySpecialStockSupplier,
I_JournalEntryItemBrowser._InventoryValuationType,
I_JournalEntryItemBrowser._OriginSenderObject,
I_JournalEntryItemBrowser._ControllingObjectClass,
I_JournalEntryItemBrowser._PartnerControllingObjectClass,
I_JournalEntryItemBrowser._OriginCostCenter,
_OriginCostCenterText,
I_JournalEntryItemBrowser._OriginProfitCenter,
I_JournalEntryItemBrowser._CostCtrActivityType,
I_JournalEntryItemBrowser._OriginCostCtrActivityType,
_OriginCostCtrActivityTypeText,
I_JournalEntryItemBrowser._OrderCategory,
//_RelatedNetworkActivity,
//_PartnerProjectNetworkActivity,

I_JournalEntryItemBrowser._BusinessProcess,
I_JournalEntryItemBrowser._PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrder_2'
_PartnerOrder,
_PartnerOrder_2,
I_JournalEntryItemBrowser._PartnerOrderCategory,
I_JournalEntryItemBrowser._PartnerSalesDocument,
I_JournalEntryItemBrowser._PartnerSalesDocumentItem,
I_JournalEntryItemBrowser._PartnerBusinessProcess,

I_JournalEntryItemBrowser._BillingDocumentType,

I_JournalEntryItemBrowser._SalesOrganization,
I_JournalEntryItemBrowser._DistributionChannel,

I_JournalEntryItemBrowser._SoldProduct,
_SoldProductText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
I_JournalEntryItemBrowser._SoldProductGroup,
I_JournalEntryItemBrowser._SoldProductGroup_2,  

I_JournalEntryItemBrowser._Fund,
_FundText,
I_JournalEntryItemBrowser._PartnerFund,
_PartnerFundText,
I_JournalEntryItemBrowser._FundsCenter,
_GrantText,
_PartnerGrantText,
_FundsCenterText,
_FundedProgramText,

I_JournalEntryItemBrowser._MovementCategory,
I_JournalEntryItemBrowser._AssetTransactionType,

I_JournalEntryItemBrowser._BudgetPeriod,
_BudgetPeriodText,
_PartnerBudgetPeriodText,

I_JournalEntryItemBrowser._CostOriginGroup,

I_JournalEntryItemBrowser._FinancialManagementArea,
//_FundedProgram

I_JournalEntryItemBrowser._HouseBankAccount,

I_JournalEntryItemBrowser._LogicalSystem,

I_JournalEntryItemBrowser._OperatingConcern,

I_JournalEntryItemBrowser._PartnerCompany,

I_JournalEntryItemBrowser._ProjectNetwork,

I_JournalEntryItemBrowser._PurReqValuationArea,

_UserContactCard,
I_JournalEntryItemBrowser._OffsettingAccountType,
I_JournalEntryItemBrowser._OffsettingChartOfAccounts,
//_OffsettingAccount,
I_JournalEntryItemBrowser._OffsettingAccountWithBP,

I_JournalEntryItemBrowser._ServiceDocumentType,
I_JournalEntryItemBrowser._ServiceDocument,
I_JournalEntryItemBrowser._ServiceDocumentItem,
I_JournalEntryItemBrowser._PartnerServiceDocumentType,
I_JournalEntryItemBrowser._PartnerServiceDocument,
I_JournalEntryItemBrowser._PartnerServiceDocumentItem,
I_JournalEntryItemBrowser._ServiceContract,
I_JournalEntryItemBrowser._ServiceContractType,
I_JournalEntryItemBrowser._ServiceContractItem,
I_JournalEntryItemBrowser._TimeSheetOvertimeCat,
_TimeSheetOvertimeCatText,
@UI.hidden: true
@Consumption.hidden: true
_GLAccountText,
@UI.hidden: true
@Consumption.hidden: true
I_JournalEntryItemBrowser._CompanyCodeText,
@UI.hidden: true
@Consumption.hidden: true
I_JournalEntryItemBrowser._OffsettingAccountText,

I_JournalEntryItemBrowser._PartnerProjectExternalID,
_PartnerProjctExtrnalIDText,
I_JournalEntryItemBrowser._PartnerWBSElementExternalID,
_PartnerWBSElemntExtrnalIDText,
_PartnerProjectBasicData,
_PartnerProjectBasicDataText,
_PartnerWBSElementBasicData,
_PartnerWBSElemntBasicDataText,

_InvtrySpclStockWBSElmntExtID,

I_JournalEntryItemBrowser._AccrualObjectType,
I_JournalEntryItemBrowser._AccrualObject,
I_JournalEntryItemBrowser._AccrualSubobject,
I_JournalEntryItemBrowser._AccrualItemType,

I_JournalEntryItemBrowser._CreditRiskClass,
I_JournalEntryItemBrowser._FinValuationObjectType,

I_JournalEntryItemBrowser._ProviderContract,
I_JournalEntryItemBrowser._ProviderContractItem,  

// Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }
cast( '' as fis_brgru_glaccount)  as GLAccountAuthorizationGroup,
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }
cast( '' as fis_brgru_supplier)  as SupplierBasicAuthorizationGrp,
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }    
cast( '' as fis_brgru_customer)  as CustomerBasicAuthorizationGrp,
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }  
cast( '' as fis_brgru_acctgdoctype)  as AcctgDocTypeAuthorizationGroup,
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }  
cast( '' as aufart) as OrderType,
@UI.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  ''
//@Consumption.filter: { hidden: true }     
cast( '' as auart)  as SalesOrderType,


      @UI.hidden: true
      @Consumption.hidden: true
      _OrderIDText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrderText_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrderText_2'
      @UI.hidden: true
      @Consumption.hidden: true
      _PartnerOrderText,
      @UI.hidden: true
      @Consumption.hidden: true
      _PartnerOrderText_2,
      @UI.hidden: true
      @Consumption.hidden: true
      I_JournalEntryItemBrowser._GroupMasterFixedAssetText,
      @UI.hidden: true
      @Consumption.hidden: true
      I_JournalEntryItemBrowser._MasterFixedAssetText


} 
where 
( 
    ( I_JournalEntryItemBrowser.ClearingStatusSelection = '1' )         // All Items
    or     
                                                                                                                          
 (     ( I_JournalEntryItemBrowser.ClearingStatusSelection = '2' )      // Open Items 4 OIM
  and ( I_JournalEntryItemBrowser.PostingDate <= $parameters.P_KeyDate ) 
  and ( ( I_JournalEntryItemBrowser.ClearingDate > $parameters.P_KeyDate ) or ( I_JournalEntryItemBrowser.ClearingDate =  '00000000' ) )
  and ( I_JournalEntryItemBrowser.IsOpenItemManaged = 'X' ) 
 ) or   
  
 (     ( I_JournalEntryItemBrowser.ClearingStatusSelection = '3' )      // Open Items 4 All
  and ( I_JournalEntryItemBrowser.PostingDate <= $parameters.P_KeyDate ) 
  and ( ( I_JournalEntryItemBrowser.ClearingDate > $parameters.P_KeyDate ) or ( I_JournalEntryItemBrowser.ClearingDate =  '00000000' ) )
 ) or   
                     
 (  ( I_JournalEntryItemBrowser.ClearingStatusSelection = '4' ) 
   and  ( I_JournalEntryItemBrowser.PostingDate <= $parameters.P_KeyDate ) 
   and  ( I_JournalEntryItemBrowser.ClearingDate > $parameters.P_KeyDate )  
  ) or
       
 ( ( I_JournalEntryItemBrowser.ClearingStatusSelection = '5' ) 
   and  (   I_JournalEntryItemBrowser.ClearingDate <> '00000000'  )
  )  
)
```
