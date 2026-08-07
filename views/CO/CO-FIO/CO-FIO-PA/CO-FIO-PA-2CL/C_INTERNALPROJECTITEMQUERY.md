---
name: C_INTERNALPROJECTITEMQUERY
description: This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value
semantic_en: This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Internal Project Item Query
  - Internal Project Item Query
  - Internal Project Item Query
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
  - lob:controlling
  - lob:finance
  - product
  - project
  - metadata-only
---
# C_INTERNALPROJECTITEMQUERY

**This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
