---
name: C_PROFITABILITY_Q0001
description: This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value
semantic_en: This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Project Profitability
  - Project Profitability
  - Project Profitability
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
  - project
  - metadata-only
---
# C_PROFITABILITY_Q0001

**This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` | Fiscal Year Period |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `AssetLiabilityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `Reserves` |  | |  |  | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MarginInPct` |  | |  |  | `DEC(5)` | Margin in Percent |
| `DownPaymentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Customer Down Payment |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
