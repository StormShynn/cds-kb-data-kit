---
name: C_PRODUCTPROFITABILITYQUERY
description: This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value
semantic_en: This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product Profitability with Production Variances
  - Product Profitability with Production Variances
  - Product Profitability with Production Variances
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# C_PRODUCTPROFITABILITYQUERY

**This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `VarblCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin I |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `InptPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin II |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin III |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment Amount in Company Code Currency |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Company Code Currency |
| `VarblCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS  - Variable Amount in Company Code Currency |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 1 Amount in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnitContrbnMargAmtInGlobCrcy` |  | |  |  | `QUAN(23)` | Contribution Margin per Unit |
| `UnitContrbnMargAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin per Unit Amt in Company Code Crcy |
| `OutpPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `GlobalCurrencyMarginInPercent` |  | |  |  | `DEC(5)` | Margin in Percent |
| `MarginInPct` |  | |  |  | `DEC(5)` | Margin in Percent |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
