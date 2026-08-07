---
name: C_PRODUCTMARGINCOMPARISONQRY
description: Product Margin Comparison - Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value
semantic_en: Product Margin Comparison - Query
keywords:
  - Product Margin Comparison - Query
  - Product Margin Comparison - Query
  - Product Margin Comparison - Query
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# C_PRODUCTMARGINCOMPARISONQRY

**Product Margin Comparison - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Role |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `SalesDeductionAmountInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `VarblCOGSAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin1AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `FxdCOGSAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin2AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PeriodicCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AdminOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `SalesOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `MarketingOvhdAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RnDOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin3AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CostOfGoodsSoldAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `DEC(23)` |  |
| `MargPerUntAmtInDisplayCurrency` |  | |  |  | `DECF(34)` |  |
| `ContributionMargin2InPercent` |  | |  |  | `DECF(34)` |  |
| `RatioUnit` |  | |  |  | `UNIT(3)` |  |
| `CurrentFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `PreviousFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `PrevYearCurrentFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurFYPerPreFYPerValue` |  | |  |  | `DEC(24)` |  |
| `DeltaCurFYPerPreFYPerRatio` |  | |  |  | `DECF(34)` |  |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
