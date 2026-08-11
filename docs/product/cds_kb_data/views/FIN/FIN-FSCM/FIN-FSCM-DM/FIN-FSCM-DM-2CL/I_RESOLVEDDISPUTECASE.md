---
name: I_RESOLVEDDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
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
# I_RESOLVEDDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value) |

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
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Fullname of Coordinator |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CurrentYear` |  | |  |  | `CHAR(4)` | Current Year |
| `CurrentMonth` |  | |  |  | `CHAR(2)` | Current Month |
| `CurrentQuarter` |  | |  |  | `CHAR(1)` | Current Quarter |
| `LastQuarter` |  | |  |  | `CHAR(1)` | Last Quarter |
| `CaseClosingYear` |  | |  |  | `CHAR(4)` | Closing Year |
| `CaseClosingMonth` |  | |  |  | `CHAR(2)` | Closing Month |
| `CaseClosingQuarter` |  | |  |  | `CHAR(1)` | Closing Quarter |
| `IsSolvedCurrentYear` |  | |  |  | `INT4(10)` | Solved in current year |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `IsSolvedLastMonth` |  | |  |  | `INT4(10)` | Solved in Last Month |
| `IsSolvedLastQuarter` |  | |  |  | `INT4(10)` | Solved in Last Quarter |
| `IsSolvedLast12Months` |  | |  |  | `INT4(10)` | Solved in last 12 months |
| `Last12MonthsResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last 12 Months for solving Dispute Cases |
| `CurrentMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Month for solving Dispute Cases |
| `LastMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Month for solving Dispute Cases |
| `CurrentYearResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Year for solving Dispute Cases |
| `LastQuarterResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Quarter for solving Dispute Cases |
| `Last12MnthsSlvdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount in Last 12 Months |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
| `LastMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Month |
| `CurYearSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Year |
| `LastQuartSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Quarter |
