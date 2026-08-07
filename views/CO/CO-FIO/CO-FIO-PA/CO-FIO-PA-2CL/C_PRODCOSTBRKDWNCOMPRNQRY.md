---
name: C_PRODCOSTBRKDWNCOMPRNQRY
description: This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value
semantic_en: This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product Cost Breakdown Comparison - Qry
  - Product Cost Breakdown Comparison - Qry
  - Product Cost Breakdown Comparison - Qry
tags:
  - CO
  - account
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
# C_PRODCOSTBRKDWNCOMPRNQRY

**This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value) |

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
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ComponentBreakdownMethod` |  | |  |  | `CHAR(4)` | Component Breakdown Method |
| `CostBreakdownStructure` |  | |  |  | `CHAR(2)` | Cost Breakdown Structure |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostBreakdownComponent` |  | |  |  | `CHAR(10)` |  |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `VarblCOGSAmtInDspCrcy` |  | |  |  | `CURR(24)` |  |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `RatioUnit` |  | |  |  | `UNIT(3)` |  |
| `CurrentFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `PreviousFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `PrevYearCurrentFYPeriodValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurFYPerPreFYPerValue` |  | |  |  | `DEC(24)` |  |
| `DeltaCurFYPerPreFYPerRatio` |  | |  |  | `DECF(34)` |  |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
