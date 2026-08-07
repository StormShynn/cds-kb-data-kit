---
name: C_REVNPRJMARGOVWQRY
description: This CDS view is designed to provide an analytical query for an overview of project revenue and margin. It aggregates and presents financial data related to projects, such as billed and recognized revenue, costs, and margins, allowing users to analyze financial performance at a project level. This CDS view provides the data to answer the following business questions: What is the billed revenue for a specific project or set of projects? How much revenue has been recognized for a project? What are the recognized costs and margins for a project? What is the planned revenue and cost for a project, and how do they compare to actuals? What is the margin percentage for a project? How do revenue adjustments and cost of sales adjustments impact the financials of a project? What are the deferred and accrued revenue and costs for a project? How does the financial performance of projects vary across different fiscal years and periods? What is the impact of different planning categories on project financials? How do different company codes and profit centers affect project financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVNPRJMARGOVWQRY')/$value
semantic_en: This CDS view is designed to provide an analytical query for an overview of project revenue and margin. It aggregates and presents financial data related to projects, such as billed and recognized revenue, costs, and margins, allowing users to analyze financial performance at a project level. This CDS view provides the data to answer the following business questions: What is the billed revenue for a specific project or set of projects? How much revenue has been recognized for a project? What are the recognized costs and margins for a project? What is the planned revenue and cost for a project, and how do they compare to actuals? What is the margin percentage for a project? How do revenue adjustments and cost of sales adjustments impact the financials of a project? What are the deferred and accrued revenue and costs for a project? How does the financial performance of projects vary across different fiscal years and periods? What is the impact of different planning categories on project financials? How do different company codes and profit centers affect project financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Project with Revn Margin Overview Query
  - Project with Revn Margin Overview Query
  - Project with Revn Margin Overview Query
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
# C_REVNPRJMARGOVWQRY

**This CDS view is designed to provide an analytical query for an overview of project revenue and margin. It aggregates and presents financial data related to projects, such as billed and recognized revenue, costs, and margins, allowing users to analyze financial performance at a project level. This CDS view provides the data to answer the following business questions: What is the billed revenue for a specific project or set of projects? How much revenue has been recognized for a project? What are the recognized costs and margins for a project? What is the planned revenue and cost for a project, and how do they compare to actuals? What is the margin percentage for a project? How do revenue adjustments and cost of sales adjustments impact the financials of a project? What are the deferred and accrued revenue and costs for a project? How does the financial performance of projects vary across different fiscal years and periods? What is the impact of different planning categories on project financials? How do different company codes and profit centers affect project financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVNPRJMARGOVWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` |  | |  |  | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Billed Revenue |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `MarginInPct` |  | |  |  | `DECF(34)` |  |
| `ActualCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `MnlContrAccrBalShtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Balance Sheet in Display Currency |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `PlannedRevenueAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlndMarginAmt` |  | |  |  | `DEC(23)` |  |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `RecognizedCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `MnlContrAccrIncStatAmtInDC` |  | |  |  | `CURR(23)` | Manual Contract Accruals (I/S) |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `ImminentLossRsrvAdjAmtInDC` |  | |  |  | `CURR(23)` | Imminent Loss Reserves Adj. |
| `ImmntLossRsrvBalShtAmtInDC` |  | |  |  | `CURR(23)` | Imminent Loss Reserves (B/S) |
