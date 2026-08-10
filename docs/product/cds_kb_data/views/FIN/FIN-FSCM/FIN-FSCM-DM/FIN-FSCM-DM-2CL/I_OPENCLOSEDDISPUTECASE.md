---
name: I_OPENCLOSEDDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_OPENCLOSEDDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  |  | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CaseCreationDate` |  | |  |  | `DATS(8)` |  |
| `CaseClosingDate` |  | |  |  | `DATS(8)` |  |
| `CurrentDay` |  | |  |  | `INT4(10)` | Current Day |
| `IsCreatedToday` |  | |  |  | `INT1(3)` | Created today |
| `IsSolvedToday` |  | |  |  | `INT4(10)` | Solved Today |
| `IsCreatedLast5Days` |  | |  |  | `INT1(3)` | Created in Last 5 Days |
| `IsSolvedLast5Days` |  | |  |  | `INT4(10)` | Solved in Last 5 Days |
| `IsCreatedCurrentMonth` |  | |  |  | `INT4(10)` | Created in Current Month |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `TodayCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Today |
| `TodaySolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved Today |
| `Last5DaysCrtedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount in Last 5 Days |
| `Last5DaysSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved in Last 5 Days |
| `CurMonthCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Current Month |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
