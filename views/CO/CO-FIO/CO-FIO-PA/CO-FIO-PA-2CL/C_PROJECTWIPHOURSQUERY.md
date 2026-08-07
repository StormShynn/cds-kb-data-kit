---
name: C_PROJECTWIPHOURSQUERY
description: This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value
semantic_en: This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - WIP Hours on Project - Query
  - WIP Hours on Project - Query
  - WIP Hours on Project - Query
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
  - project
  - transaction
  - metadata-only
---
# C_PROJECTWIPHOURSQUERY

**This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value) |

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
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Project Partner |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(80)` | Project Partner Name |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TimeConfirmationAmtInDspCrcy` |  | |  |  | `CURR(23)` | Time Confirmation Amount in Display Currency |
| `ConfirmedHoursQuantity` |  | |  |  | `QUAN(23)` | Confirmed Hours Quantity |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Billed Revenue |
| `BilledHoursQuantity` |  | |  |  | `QUAN(23)` | Billed Hours Quantity |
| `WrittenOffHoursQuantity` |  | |  |  | `QUAN(23)` | Written off Hours Quantity |
| `WrittenOffAmtInDspCrcy` |  | |  |  | `CURR(23)` | Written off Hours Amount in Display Currency |
| `NonBillableHoursQuantity` |  | |  |  | `QUAN(23)` | Non Billable Hours Quantity |
| `NonBillableAmtInDspCrcy` |  | |  |  | `CURR(23)` | Non Billable Hours Amount in Display Currency |
| `WIPHoursQuantity` |  | |  |  | `QUAN(23)` | WIP Hours Quantity |
| `WIPAmtInDisplayCurrency` |  | |  |  | `CURR(23)` | WIP Amount in Display Currency |
| `CompletedWorkQuantity` |  | |  |  | `QUAN(23)` | Completed Quantity |
| `HourBalanceQuantity` |  | |  |  | `QUAN(23)` | hour balance |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
