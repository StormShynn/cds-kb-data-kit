---
name: C_PRODUCTMARGINANALYSISQUERY
description: This CDS view is designed to provide a comprehensive analysis of product margins by leveraging various financial and sales data. It aggregates and calculates different financial metrics such as revenue, cost of goods sold (COGS), and contribution margins, allowing businesses to assess their profitability at different levels. This CDS view provides the data to answer the following business questions: What is the billed revenue and recognized revenue for specific products or product groups? How do sales deductions and revenue adjustments impact the overall revenue? What are the variable and fixed costs associated with the cost of goods sold? How do different variances (e.g., price variance, quantity variance) affect the product margin? What are the contribution margins at different levels (I, II, III) for products or product groups? How do overhead costs (e.g., administrative, sales, marketing, R&amp;D) impact the profitability? What is the margin per unit and margin percentage for specific products or product groups? How do different fiscal periods and company codes affect the financial performance? What is the impact of different sales documents and customer groups on the product margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINANALYSISQUERY')/$value
semantic_en: This CDS view is designed to provide a comprehensive analysis of product margins by leveraging various financial and sales data. It aggregates and calculates different financial metrics such as revenue, cost of goods sold (COGS), and contribution margins, allowing businesses to assess their profitability at different levels. This CDS view provides the data to answer the following business questions: What is the billed revenue and recognized revenue for specific products or product groups? How do sales deductions and revenue adjustments impact the overall revenue? What are the variable and fixed costs associated with the cost of goods sold? How do different variances (e.g., price variance, quantity variance) affect the product margin? What are the contribution margins at different levels (I, II, III) for products or product groups? How do overhead costs (e.g., administrative, sales, marketing, R&amp;D) impact the profitability? What is the margin per unit and margin percentage for specific products or product groups? How do different fiscal periods and company codes affect the financial performance? What is the impact of different sales documents and customer groups on the product margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product Margin - Query
  - Product Margin - Query
  - Product Margin - Query
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - document
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# C_PRODUCTMARGINANALYSISQUERY

**This CDS view is designed to provide a comprehensive analysis of product margins by leveraging various financial and sales data. It aggregates and calculates different financial metrics such as revenue, cost of goods sold (COGS), and contribution margins, allowing businesses to assess their profitability at different levels. This CDS view provides the data to answer the following business questions: What is the billed revenue and recognized revenue for specific products or product groups? How do sales deductions and revenue adjustments impact the overall revenue? What are the variable and fixed costs associated with the cost of goods sold? How do different variances (e.g., price variance, quantity variance) affect the product margin? What are the contribution margins at different levels (I, II, III) for products or product groups? How do overhead costs (e.g., administrative, sales, marketing, R&amp;D) impact the profitability? What is the margin per unit and margin percentage for specific products or product groups? How do different fiscal periods and company codes affect the financial performance? What is the impact of different sales documents and customer groups on the product margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINANALYSISQUERY')/$value) |

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
