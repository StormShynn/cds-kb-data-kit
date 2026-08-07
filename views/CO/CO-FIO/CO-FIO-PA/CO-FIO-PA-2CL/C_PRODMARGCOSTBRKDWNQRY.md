---
name: C_PRODMARGCOSTBRKDWNQRY
description: This CDS view is designed to provide a detailed analysis of product profitability by breaking down costs associated with products. It allows users to analyze financial data related to product costs, including variable and fixed costs, within a specified fiscal period and reporting date. The view is structured to support analytical queries, enabling users to filter and aggregate data based on various dimensions such as company code, fiscal year, product group, and more. This CDS view provides the data to answer the following business questions: What is the profitability of specific products within a given fiscal period? How do variable and fixed costs contribute to the overall cost of goods sold (COGS) for products? What are the cost breakdown components for products sold within a specific time frame? How do different sales and distribution channels impact product profitability? What is the financial impact of specific sales documents and customer groups on product costs? How do different organizational divisions and profit centers contribute to product profitability? What is the effect of different cost breakdown methods on the analysis of product costs? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODMARGCOSTBRKDWNQRY')/$value
semantic_en: This CDS view is designed to provide a detailed analysis of product profitability by breaking down costs associated with products. It allows users to analyze financial data related to product costs, including variable and fixed costs, within a specified fiscal period and reporting date. The view is structured to support analytical queries, enabling users to filter and aggregate data based on various dimensions such as company code, fiscal year, product group, and more. This CDS view provides the data to answer the following business questions: What is the profitability of specific products within a given fiscal period? How do variable and fixed costs contribute to the overall cost of goods sold (COGS) for products? What are the cost breakdown components for products sold within a specific time frame? How do different sales and distribution channels impact product profitability? What is the financial impact of specific sales documents and customer groups on product costs? How do different organizational divisions and profit centers contribute to product profitability? What is the effect of different cost breakdown methods on the analysis of product costs? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product Profitability CostBrkDwn - Qry
  - Product Profitability CostBrkDwn - Qry
  - Product Profitability CostBrkDwn - Qry
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
# C_PRODMARGCOSTBRKDWNQRY

**This CDS view is designed to provide a detailed analysis of product profitability by breaking down costs associated with products. It allows users to analyze financial data related to product costs, including variable and fixed costs, within a specified fiscal period and reporting date. The view is structured to support analytical queries, enabling users to filter and aggregate data based on various dimensions such as company code, fiscal year, product group, and more. This CDS view provides the data to answer the following business questions: What is the profitability of specific products within a given fiscal period? How do variable and fixed costs contribute to the overall cost of goods sold (COGS) for products? What are the cost breakdown components for products sold within a specific time frame? How do different sales and distribution channels impact product profitability? What is the financial impact of specific sales documents and customer groups on product costs? How do different organizational divisions and profit centers contribute to product profitability? What is the effect of different cost breakdown methods on the analysis of product costs? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODMARGCOSTBRKDWNQRY')/$value) |

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
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
