---
name: C_PRODUCTMARGINCOMPARISONQRY
description: This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value
semantic_en: This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product Margin Comparison - Query
  - Product Margin Comparison - Query
  - Product Margin Comparison - Query
tags:
  - CO
  - bo:companycode
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

**This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `BlldAddl1QuantityInAddl1Unit` |  | |  |  | `DEC(23)` |  |
| `ShpdValnQtyInCostSourceUnit` |  | |  |  | `DEC(23)` |  |
