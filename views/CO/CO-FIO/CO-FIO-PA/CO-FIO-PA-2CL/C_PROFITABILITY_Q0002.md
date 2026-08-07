---
name: C_PROFITABILITY_Q0002
description: This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?
keywords:
  - Product Profitability
  - Product Profitability
  - Product Profitability
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
# C_PROFITABILITY_Q0002

**This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
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
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnitContrbnMargAmtInGlobCrcy` |  | |  |  | `QUAN(23)` | Contribution Margin per Unit |
| `UnitContrbnMargAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin per Unit Amt in Company Code Crcy |
