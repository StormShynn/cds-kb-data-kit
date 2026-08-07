---
name: C_OVHDPRJBDGTCMTMTQUERY
description: This CDS view is designed to provide an analytical query for overhead project budget commitments. It allows users to analyze and report on various financial aspects of project budgets, including actual costs, commitments, planned costs, and budget availability. The view is tailored for consumption in analytical applications, providing a comprehensive overview of project financials. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects? How much commitment has been made against the project budget? What is the planned cost for the project, and how does it compare to actual costs? What is the total budget allocated for the project, and how much of it is still available? How much of the budget has been used in terms of percentage? What is the variance between planned and actual costs for the project? How do the financials of a project vary across different fiscal years and periods? What are the financial implications of different account assignments and profit centers on project budgets? How do different planning categories and ledgers affect project financials? What is the impact of availability control on project costs and commitments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJBDGTCMTMTQUERY')/$value
semantic_en: This CDS view is designed to provide an analytical query for overhead project budget commitments. It allows users to analyze and report on various financial aspects of project budgets, including actual costs, commitments, planned costs, and budget availability. The view is tailored for consumption in analytical applications, providing a comprehensive overview of project financials. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects? How much commitment has been made against the project budget? What is the planned cost for the project, and how does it compare to actual costs? What is the total budget allocated for the project, and how much of it is still available? How much of the budget has been used in terms of percentage? What is the variance between planned and actual costs for the project? How do the financials of a project vary across different fiscal years and periods? What are the financial implications of different account assignments and profit centers on project budgets? How do different planning categories and ledgers affect project financials? What is the impact of availability control on project costs and commitments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Overhead Project Budget Cmtmt - Query
  - Overhead Project Budget Cmtmt - Query
  - Overhead Project Budget Cmtmt - Query
tags:
  - CO
  - account
  - bo:companycode
  - budget
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
# C_OVHDPRJBDGTCMTMTQUERY

**This CDS view is designed to provide an analytical query for overhead project budget commitments. It allows users to analyze and report on various financial aspects of project budgets, including actual costs, commitments, planned costs, and budget availability. The view is tailored for consumption in analytical applications, providing a comprehensive overview of project financials. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for a specific project or set of projects? How much commitment has been made against the project budget? What is the planned cost for the project, and how does it compare to actual costs? What is the total budget allocated for the project, and how much of it is still available? How much of the budget has been used in terms of percentage? What is the variance between planned and actual costs for the project? How do the financials of a project vary across different fiscal years and periods? What are the financial implications of different account assignments and profit centers on project budgets? How do different planning categories and ledgers affect project financials? What is the impact of availability control on project costs and commitments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJBDGTCMTMTQUERY')/$value) |

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
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ActualCostAmtInDspCrcy_H` |  | |  |  | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency_H` |  | |  |  | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `BdgtCtrldBdgtCostInDspCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BdgtCtrldBdgtCostInDspCrcy_H` |  | |  |  | `DEC(23)` |  |
| `NonAccmltdAssgdValForBdgt` |  | |  |  | `DEC(24)` |  |
| `AvailableBdgtAmtInDspCrcy` |  | |  |  | `DEC(25)` |  |
| `VarianceAmount` |  | |  |  | `DEC(24)` |  |
| `AvailyCtrlActlCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlCmtmtAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlBdgtCostInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlUsdBdgtAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
