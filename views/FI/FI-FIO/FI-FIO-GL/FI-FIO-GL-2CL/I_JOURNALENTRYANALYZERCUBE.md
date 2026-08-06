---
name: I_JOURNALENTRYANALYZERCUBE
description: Journal Entry Analyzer - Cube
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value
semantic_en: Journal Entry Analyzer - Cube
keywords:
  - Journal Entry Analyzer - Cube
  - Journal Entry Analyzer - Cube
  - Journal Entry Analyzer - Cube
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_JOURNALENTRYANALYZERCUBE

**Journal Entry Analyzer - Cube**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYANALYZERCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` | `CHAR(1)` | Record Type |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` | `DEC(15)` | Creation Date Time |
| `CreationDate` | `DATS(8)` | Creation Date |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CorporateGroupChartOfAccounts` | `CHAR(4)` | Group Chart of Accts |
| `CorporateGroupAccount` | `CHAR(10)` | Group Account Number |
| `IsBalanceSheetAccount` | `CHAR(1)` | Is Balance Sheet Account |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `ComponentBreakdown` | `CHAR(16)` | Component Breakdown |
| `CompBreakdownScaleNumerator` | `DEC(23)` | Component Breakdown Scale Numerator |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingJournalEntry` | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ValueDate` | `DATS(8)` | Value Date |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `OffsettingAccount` | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountName` | `CHAR(80)` | Name of Offsetting Account |
| `OffsettingAccountType` | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` | `CHAR(4)` | Offsetting Chart of Accounts |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `AssetAcctTransClassfctn` | `CHAR(2)` | Transaction Type Category |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BusinessTransactionCategory` | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ControllingBusTransacType` | `CHAR(4)` | CO Business Transaction |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `DepreciationFiscalPeriod` | `NUMC(3)` | Fiscal Period of Depreciation |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `PredecessorReferenceDocCntxt` | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` | `CHAR(10)` | Predecessor Reference Document |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocumentCntxt` | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` | `NUMC(6)` | Source Reference Document Subitem |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal Reference Document Context |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `IsStatisticalOrder` | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ProductGroup` | `CHAR(9)` | Product Group for Maintenance Orders |
| `Company` | `CHAR(6)` | Company |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `DebitAmountInCoCodeCrcy` | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` | `CURR(23)` | Credit Amount in Company Code Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
| `DebitAmountInFunctionalCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ControllingObjectCurrency` | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` | `CURR(23)` | Amount in Object Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `AdditionalQuantity1Unit` | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` | `QUAN(23)` | Additional Quantity 3 |
| `DebitAmountInTransCrcy` | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` | `CURR(23)` | Credit Amount in Transaction Currency |
| `BalanceTransactionCurrency` | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` | `CURR(23)` | Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFreeDfndCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `FixedAmountInGlobalCrcy` | `CURR(23)` | Fixed Amount in Global Currency |
| `FixedQuantity` | `QUAN(23)` | Fixed Quantity |
| `ValuationFixedQuantity` | `QUAN(23)` | Valuation Fixed Quantity |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` | `NUMC(6)` | Year Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` | `NUMC(6)` | Year Week |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
