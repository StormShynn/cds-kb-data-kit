---
name: I_JOURNALENTRYANALYZERCUBE
description: "Journal Entry Analyzer - Cube"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value
semantic_en: "Journal Entry Analyzer - Cube"
semantic_vi: "Journal Entry Analyzer - Cube — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "Journal Entry Analyzer - Cube"
  - "journal"
  - "entry"
  - "analyzer"
  - "cube"
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
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - interface-view
  - lob:finance
---
# I_JOURNALENTRYANALYZERCUBE

**Journal Entry Analyzer - Cube**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast( I_GLAccountLineItem.FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
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
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Component Breakdown |
| `CompBreakdownScaleNumerator` |  | |  |  | `DEC(23)` | Component Breakdown Scale Numerator |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountName` |  | |  |  | `CHAR(80)` | Name of Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )` | `CHAR(24)` | WBS Element External ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ControllingBusTransacType` |  | |  |  | `CHAR(4)` | CO Business Transaction |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )` | `CHAR(24)` | Project External ID |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
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
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
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
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `_SoldProductGroup` |  | |  | `_SoldProductGroup_2` |  |  |
| `_ProductGroup` |  | |  | `_ProductGroup_2` |  |  |
| `_SubldgrAccountLineItemType` |  | |  | `_SubLedgerAccLineItemType` |  |  |
| `_CorporateGroupAccount` | | ✓ | | | | |
| `_CorporateGroupChartOfAccounts` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CorporateGroupAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CorporateGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_ValuationArea` | `I_ValuationArea` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value)*

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED }
@EndUserText.label: 'Journal Entry Analyzer - Cube'
//@ObjectModel.representativeKey: 'LedgerGLLineItem'
@ObjectModel: {
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Analytics: { dataCategory: #CUBE, internalName: #LOCAL  }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true

//@AbapCatalog.entityBuffer.definitionAllowed: false
//@AbapCatalog.viewEnhancementCategory:[#NONE]
@AbapCatalog.extensibility:{
  extensible: true,
  elementSuffix:'JEA'
//  dataSources: ['_Extension'],
//  allowNewDatasources: false,
//  quota: {
//    maximumFields: 1000,
//    maximumBytes: 2500
//  }
 }


define view entity I_JournalEntryAnalyzerCube
  as select from I_GLAccountLineItem as I_GLAccountLineItem
  association [0..1] to I_GLAccountInChartOfAccounts as _CorporateGroupAccount         on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupAccount.ChartOfAccounts
                                                                                       and $projection.CorporateGroupAccount         = _CorporateGroupAccount.GLAccount
  association [0..1] to I_ChartOfAccounts            as _CorporateGroupChartOfAccounts on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupChartOfAccounts.ChartOfAccounts

  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [0..1] to I_ProjectBasicData           as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID

  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID

  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID

  association [0..1] to I_OperationalAcctgDocItem    as _OperationalAcctgDocItem       on  $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode
                                                                                       and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                                       and $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                                       and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem

  association [1..1] to I_CalendarMonth              as _CalendarMonth                 on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter               on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth                  as _CalendarYearMonth             on  $projection.CalendarYearMonth = _CalendarYearMonth.YearMonth
  association [0..1] to I_ValuationArea              as _ValuationArea                 on  $projection.ValuationArea = _ValuationArea.ValuationArea
  
  association of exact one to exact one E_JournalEntryItem  as _Extension              on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                                       and $projection.CompanyCode        = _Extension.CompanyCode
                                                                                       and $projection.FiscalYear         = _Extension.FiscalYear
                                                                                       and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                                       and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
{

      @ObjectModel.foreignKey.association: '_Ledger'
      //      @Consumption.filter.mandatory: true
      //      @Analytics.constraints.filter: #UNIQUE_PER_CELL
  key I_GLAccountLineItem.Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key I_GLAccountLineItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_GLAccountLineItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      //      @Semantics.fiscal.year: true
  key cast( I_GLAccountLineItem.FiscalYear as fis_gjahr_no_conv preserving type )              as FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_GLAccountLineItem.AccountingDocument,
  key I_GLAccountLineItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      I_GLAccountLineItem.LedgerFiscalYear,
      I_GLAccountLineItem.GLRecordType,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_GLAccountLineItem.ControllingArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      I_GLAccountLineItem.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      I_GLAccountLineItem.GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_GLAccountLineItem.CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_GLAccountLineItem.ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      I_GLAccountLineItem.FunctionalArea,

      I_GLAccountLineItem.AccountingDocumentItem,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      I_GLAccountLineItem.DebitCreditCode,

      // Time Characteristics
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      //0FISCPER3 doesn’t support text, variant is unknown. We can’t use T009C since there 0FISCPER3 is not compound to 0FISCVARNT.
      @Semantics.fiscal.period: true
      I_GLAccountLineItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      I_GLAccountLineItem.FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      I_GLAccountLineItem.FiscalYearPeriod,
      //      @Semantics.businessDate.at: true
      I_GLAccountLineItem.PostingDate,
      //      @Semantics.businessDate.at: true
      I_GLAccountLineItem.DocumentDate,

      //  free fields

      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      I_GLAccountLineItem.AccountingDocumentType,
      //      cast(AccountingDocumentType as fis_blart) as JournalEntryType,
      I_GLAccountLineItem.AssignmentReference,
      @ObjectModel.foreignKey.association: '_PostingKey'
      I_GLAccountLineItem.PostingKey,
      I_GLAccountLineItem.TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubldgrAccountLineItemType'
      I_GLAccountLineItem.SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      I_GLAccountLineItem.AccountingDocCreatedByUser,
      //      @Semantics.businessDate.lastChangedAt: true
      I_GLAccountLineItem.LastChangeDateTime,
      I_GLAccountLineItem.CreationDateTime,
      --    cast(CreationDate as FIS_CPDAT) as CreationDate,
      //      @Semantics.businessDate.createdAt: true
      I_GLAccountLineItem.CreationDate,

      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      I_GLAccountLineItem.AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      I_GLAccountLineItem.CountryChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CorporateGroupChartOfAccounts'
      I_GLAccountLineItem._ChartOfAccounts.CorporateGroupChartOfAccounts                       as CorporateGroupChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CorporateGroupAccount'
      I_GLAccountLineItem._GLAccountInChartOfAccounts.CorporateGroupAccount                    as CorporateGroupAccount,
      I_GLAccountLineItem._GLAccountInChartOfAccounts.IsBalanceSheetAccount,
      I_GLAccountLineItem.InvoiceReference,
      @Semantics.fiscal.year: true
      I_GLAccountLineItem.InvoiceReferenceFiscalYear,
      I_GLAccountLineItem.FollowOnDocumentType,
      I_GLAccountLineItem.InvoiceItemReference,
      I_GLAccountLineItem.ReferencePurchaseOrderCategory,
//      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      I_GLAccountLineItem.PurchasingDocument,
//      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      I_GLAccountLineItem.PurchasingDocumentItem,
      I_GLAccountLineItem.AccountAssignmentNumber,
      I_GLAccountLineItem.DocumentItemText,

      @ObjectModel.foreignKey.association: '_SalesDocument'
      I_GLAccountLineItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      I_GLAccountLineItem.SalesDocumentItem,

      @ObjectModel.foreignKey.association: '_Product'
      I_GLAccountLineItem.Product,
      @ObjectModel.foreignKey.association: '_Plant'
      I_GLAccountLineItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      I_GLAccountLineItem.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      I_GLAccountLineItem.Customer,
      
      I_GLAccountLineItem.ComponentBreakdown,
      I_GLAccountLineItem.CompBreakdownScaleNumerator,

      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      I_GLAccountLineItem.SpecialGLCode,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      I_GLAccountLineItem.FinancialAccountType,
      @Semantics.booleanIndicator
      I_GLAccountLineItem.IsOpenItemManaged,
      I_GLAccountLineItem.ClearingDate,


      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      I_GLAccountLineItem.ClearingJournalEntry,
      @Semantics.fiscal.year: true
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      I_GLAccountLineItem.ClearingJournalEntryFiscalYear,

      I_GLAccountLineItem.ValueDate,

      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      I_GLAccountLineItem.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      I_GLAccountLineItem.FixedAsset,
      AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      I_GLAccountLineItem.AssetTransactionType,

      @ObjectModel.foreignKey.association: '_ValuationArea'
      I_GLAccountLineItem.ValuationArea,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      I_GLAccountLineItem.OffsettingAccount,
      I_GLAccountLineItem._OffsettingAccountWithBP.OffsettingAccountName                       as OffsettingAccountName,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      I_GLAccountLineItem.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      I_GLAccountLineItem.OffsettingChartOfAccounts,


      @ObjectModel.foreignKey.association: '_Order'
      I_GLAccountLineItem.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      I_GLAccountLineItem.OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      I_GLAccountLineItem.WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )                  as WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      I_GLAccountLineItem.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      I_GLAccountLineItem.SalesOrganization,
      
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      I_GLAccountLineItem.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Segment'
      I_GLAccountLineItem.Segment,
      


      I_GLAccountLineItem.AccountAssignment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      I_GLAccountLineItem.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      I_GLAccountLineItem.AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      I_GLAccountLineItem.AssetAcctTransClassfctn,
      I_GLAccountLineItem.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      I_GLAccountLineItem.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      I_GLAccountLineItem.BusinessTransactionType,
      I_GLAccountLineItem.ControllingBusTransacType,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      I_GLAccountLineItem.CustomerGroup,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      I_GLAccountLineItem.ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      I_GLAccountLineItem.ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      I_GLAccountLineItem.ServiceDocumentItem,

      I_GLAccountLineItem.DepreciationFiscalPeriod,

      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      I_GLAccountLineItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      I_GLAccountLineItem.GLAccountType,
      @Analytics.internalName: #LOCAL
      I_GLAccountLineItem.AssetClass,

      I_GLAccountLineItem.IsReversal,
      I_GLAccountLineItem.IsReversed,
      I_GLAccountLineItem.IsSettled,
      I_GLAccountLineItem.IsSettlement,


      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      I_GLAccountLineItem.SoldProductGroup,



      I_GLAccountLineItem.PredecessorReferenceDocCntxt,
      I_GLAccountLineItem.PredecessorReferenceDocItem,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      I_GLAccountLineItem.PredecessorReferenceDocType,
      I_GLAccountLineItem.PredecessorReferenceDocument,

      I_GLAccountLineItem.SourceReferenceDocumentType,
      I_GLAccountLineItem.SourceReferenceDocumentCntxt,
      I_GLAccountLineItem.SourceReferenceDocument,
      I_GLAccountLineItem.SourceReferenceDocumentItem,
      I_GLAccountLineItem.SourceReferenceDocSubitem,

      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      I_GLAccountLineItem.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )                    as ProjectExternalID,

      I_GLAccountLineItem.ReferenceDocument,
      I_GLAccountLineItem.ReferenceDocumentContext,
      I_GLAccountLineItem.ReferenceDocumentItem,
      I_GLAccountLineItem.ReferenceDocumentItemGroup,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      I_GLAccountLineItem.ReferenceDocumentType,
      I_GLAccountLineItem.ReversalReferenceDocument,
      I_GLAccountLineItem.ReversalReferenceDocumentCntxt,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      I_GLAccountLineItem.SoldProduct,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      I_GLAccountLineItem.CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItem.SalesDistrict,
      I_GLAccountLineItem.BillToParty,
      I_GLAccountLineItem.ShipToParty,
      I_GLAccountLineItem.IsStatisticalOrder,
      I_GLAccountLineItem.IsStatisticalCostCenter,
      I_GLAccountLineItem.IsStatisticalSalesDocument,
      I_GLAccountLineItem.WBSIsStatisticalWBSElement,





      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ProductGroup'
      I_GLAccountLineItem.ProductGroup,



      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Company'
      I_GLAccountLineItem.Company,


      ///////////////////////////////////////////////////////////////////////////////
      // Currency and Amount Fields
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      I_GLAccountLineItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.DebitAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.CreditAmountInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      I_GLAccountLineItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.AmountInTransactionCurrency,


      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      I_GLAccountLineItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.AmountInGlobalCurrency,

      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      I_GLAccountLineItem.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.AmountInFunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.DebitAmountInFunctionalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.CreditAmountInFunctionalCrcy,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      I_GLAccountLineItem.FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      I_GLAccountLineItem.FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      I_GLAccountLineItem.FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      I_GLAccountLineItem.FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      I_GLAccountLineItem.FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      I_GLAccountLineItem.FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      I_GLAccountLineItem.FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      I_GLAccountLineItem.FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency8,

      I_GLAccountLineItem.ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_GLAccountLineItem.AmountInObjectCurrency,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      I_GLAccountLineItem.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.Quantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      I_GLAccountLineItem.CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      I_GLAccountLineItem.AdditionalQuantity1Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      I_GLAccountLineItem.AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      I_GLAccountLineItem.AdditionalQuantity2Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      I_GLAccountLineItem.AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      I_GLAccountLineItem.AdditionalQuantity3Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      I_GLAccountLineItem.AdditionalQuantity3,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInTransCrcy,

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      I_GLAccountLineItem.BalanceTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.AmountInBalanceTransacCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.DebitAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.CreditAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy1 as DebitAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy1 as CreditAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy2 as DebitAmountInFreeDfndCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy2 as CreditAmountInFreeDfndCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy3 as DebitAmountInFreeDfndCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy3 as CreditAmountInFreeDfndCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy4 as DebitAmountInFreeDfndCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy4 as CreditAmountInFreeDfndCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy5 as DebitAmountInFreeDfndCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy5 as CreditAmountInFreeDfndCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy6 as DebitAmountInFreeDfndCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy6 as CreditAmountInFreeDfndCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy7 as DebitAmountInFreeDfndCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy7 as CreditAmountInFreeDfndCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy8 as DebitAmountInFreeDfndCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy8 as CreditAmountInFreeDfndCrcy8,

      ////////////////////////////////////
      // NEW
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.FixedAmountInGlobalCrcy,


      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.FixedQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationFixedQuantity,
      ////////////////////////////////////

      ///////////////////////////////////////////////////////////////////////////////
      // Fields from associations
      ///////////////////////////////////////////////////////////////////////////////

      I_GLAccountLineItem.CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      I_GLAccountLineItem.CalendarQuarter,
      I_GLAccountLineItem.CalendarYearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      I_GLAccountLineItem.CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      I_GLAccountLineItem.CalendarYearMonth,
      I_GLAccountLineItem.CalendarWeek,
      I_GLAccountLineItem.CalendarYearWeek,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalQuarter                                    as FiscalQuarter,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalWeek                                       as FiscalWeek,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalYearQuarter                                as FiscalYearQuarter,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalYearWeek                                   as FiscalYearWeek,

      ///////////////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////////////

      I_GLAccountLineItem._JournalEntry,
      _OperationalAcctgDocItem,
      I_GLAccountLineItem._CompanyCode,
      I_GLAccountLineItem._FiscalYear,
      I_GLAccountLineItem._FiscalPeriodForVariant,
      I_GLAccountLineItem._LedgerFiscalYearForVariant,
      I_GLAccountLineItem._FiscalYearVariant,
      I_GLAccountLineItem._FiscalYearPeriodForVariant,

      I_GLAccountLineItem._ControllingArea,
      I_GLAccountLineItem._BalanceTransactionCurrency,
      I_GLAccountLineItem._TransactionCurrency,
      I_GLAccountLineItem._CompanyCodeCurrency,
      I_GLAccountLineItem._GlobalCurrency,
      I_GLAccountLineItem._FunctionalCurrency,
      I_GLAccountLineItem._FreeDefinedCurrency1,
      I_GLAccountLineItem._FreeDefinedCurrency2,
      I_GLAccountLineItem._FreeDefinedCurrency3,
      I_GLAccountLineItem._FreeDefinedCurrency4,
      I_GLAccountLineItem._FreeDefinedCurrency5,
      I_GLAccountLineItem._FreeDefinedCurrency6,
      I_GLAccountLineItem._FreeDefinedCurrency7,
      I_GLAccountLineItem._FreeDefinedCurrency8,
      I_GLAccountLineItem._BaseUnit,
      I_GLAccountLineItem._CostSourceUnit,
      I_GLAccountLineItem._AdditionalQuantity1Unit,
      I_GLAccountLineItem._AdditionalQuantity2Unit,
      I_GLAccountLineItem._AdditionalQuantity3Unit,
      I_GLAccountLineItem._Segment,
      I_GLAccountLineItem._ProfitCenter,
      I_GLAccountLineItem._CurrentProfitCenter,
      I_GLAccountLineItem._CostCenter,
      I_GLAccountLineItem._CurrentCostCenter,
      I_GLAccountLineItem._AccountAssignmentType,
      I_GLAccountLineItem._Company,


      _ProjectBasicData,

      _ProjectExternalID,

      _WBSElementBasicData,

      _WBSElementExternalID,

      
      I_GLAccountLineItem._Product,
      I_GLAccountLineItem._SoldProduct,
      I_GLAccountLineItem._SoldProductGroup_2 as _SoldProductGroup,

      I_GLAccountLineItem._ProductGroup_2 as _ProductGroup,

      I_GLAccountLineItem._SalesDocument,

      I_GLAccountLineItem._SalesDocumentItem,


      I_GLAccountLineItem._InternalOrder,
      I_GLAccountLineItem._Order,

      I_GLAccountLineItem._FunctionalArea,
      I_GLAccountLineItem._OrderCategory,

      I_GLAccountLineItem._GLAccountInChartOfAccounts,
      I_GLAccountLineItem._GLAccountInCompanyCode,
      I_GLAccountLineItem._ChartOfAccounts,
      I_GLAccountLineItem._AccountingDocumentType,
      I_GLAccountLineItem._FinancialAccountType,
      I_GLAccountLineItem._DebitCreditCode,
      I_GLAccountLineItem._Plant,
      I_GLAccountLineItem._Ledger,
      I_GLAccountLineItem._SourceLedger,

      I_GLAccountLineItem._Customer,
      I_GLAccountLineItem._CustomerCompany,
      I_GLAccountLineItem._CustomerGroup,
      I_GLAccountLineItem._Supplier,
      I_GLAccountLineItem._SupplierCompany,

      I_GLAccountLineItem._PostingKey,
      I_GLAccountLineItem._SubLedgerAccLineItemType as _SubldgrAccountLineItemType,
      I_GLAccountLineItem._AccountingDocumentCategory,
      I_GLAccountLineItem._FinancialTransactionType,
      I_GLAccountLineItem._BusinessTransactionCategory,
      I_GLAccountLineItem._BusinessTransactionType,
      I_GLAccountLineItem._ReferenceDocumentType,
      I_GLAccountLineItem._PredecessorReferenceDocType,

      I_GLAccountLineItem._User,


      I_GLAccountLineItem._GLAccountType,
      I_GLAccountLineItem._OffsettingAccountType,
      I_GLAccountLineItem._OffsettingChartOfAccounts,
      I_GLAccountLineItem._OffsettingAccount,
      I_GLAccountLineItem._OffsettingAccountWithBP,
      I_GLAccountLineItem._AlternativeGLAccount,

      I_GLAccountLineItem._CountryChartOfAccounts,
      _CorporateGroupChartOfAccounts,
      _CorporateGroupAccount,
//      I_GLAccountLineItem._PurchasingDocument,
//      I_GLAccountLineItem._PurchasingDocumentItem,

      I_GLAccountLineItem._SpecialGLCode,
      I_GLAccountLineItem._ClearingJrnlEntryFiscalYear,
      I_GLAccountLineItem._ClearingJournalEntry,

      I_GLAccountLineItem._MasterFixedAsset,
      I_GLAccountLineItem._FixedAsset,
      I_GLAccountLineItem._MovementCategory,
      I_GLAccountLineItem._AssetTransactionType,


      I_GLAccountLineItem._BillingDocumentType,
      I_GLAccountLineItem._SalesOrganization,
      I_GLAccountLineItem._DistributionChannel,
      I_GLAccountLineItem._Division,
      I_GLAccountLineItem._CustomerSupplierCountry,
      I_GLAccountLineItem._SalesDistrict,
      I_GLAccountLineItem._BillToParty,
      I_GLAccountLineItem._ShipToParty,


      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      
      _ValuationArea,

      I_GLAccountLineItem._ServiceDocumentType,
      I_GLAccountLineItem._ServiceDocument,
      I_GLAccountLineItem._ServiceDocumentItem


      //_Extension  Extensions must be local

}
```
