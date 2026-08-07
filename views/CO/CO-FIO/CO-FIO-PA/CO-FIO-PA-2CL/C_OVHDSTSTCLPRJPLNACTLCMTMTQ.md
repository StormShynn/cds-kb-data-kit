---
name: C_OVHDSTSTCLPRJPLNACTLCMTMTQ
description: This CDS view is designed to provide an analytical query for an overview of overhead statistical project planning, actuals, and commitments. It allows users to analyze financial data related to projects, including planned costs, actual costs, commitments, and variances. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects within a given fiscal year and period? How do the planned costs compare to the actual costs for projects, and what is the variance between them? What are the commitment amounts for projects, and how do they impact the overall financial planning? How can financial data be filtered and analyzed based on various dimensions such as company code, fiscal year, profit center, and project manager? What is the financial status of projects in terms of cost center, segment, and currency? How can users navigate and filter project-related financial data using specific parameters like ledger and planning category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDSTSTCLPRJPLNACTLCMTMTQ')/$value
semantic_en: This CDS view is designed to provide an analytical query for an overview of overhead statistical project planning, actuals, and commitments. It allows users to analyze financial data related to projects, including planned costs, actual costs, commitments, and variances. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects within a given fiscal year and period? How do the planned costs compare to the actual costs for projects, and what is the variance between them? What are the commitment amounts for projects, and how do they impact the overall financial planning? How can financial data be filtered and analyzed based on various dimensions such as company code, fiscal year, profit center, and project manager? What is the financial status of projects in terms of cost center, segment, and currency? How can users navigate and filter project-related financial data using specific parameters like ledger and planning category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - OH Ststcl Proj Actl Cmtmt Ovw - Query
  - OH Ststcl Proj Actl Cmtmt Ovw - Query
  - OH Ststcl Proj Actl Cmtmt Ovw - Query
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
  - plan
  - project
  - metadata-only
---
# C_OVHDSTSTCLPRJPLNACTLCMTMTQ

**This CDS view is designed to provide an analytical query for an overview of overhead statistical project planning, actuals, and commitments. It allows users to analyze financial data related to projects, including planned costs, actual costs, commitments, and variances. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects within a given fiscal year and period? How do the planned costs compare to the actual costs for projects, and what is the variance between them? What are the commitment amounts for projects, and how do they impact the overall financial planning? How can financial data be filtered and analyzed based on various dimensions such as company code, fiscal year, profit center, and project manager? What is the financial status of projects in terms of cost center, segment, and currency? How can users navigate and filter project-related financial data using specific parameters like ledger and planning category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDSTSTCLPRJPLNACTLCMTMTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
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
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `PlanCostInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CostVariance` |  | |  |  | `DEC(24)` |  |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
