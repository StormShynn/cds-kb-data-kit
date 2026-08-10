---
name: I_OPENDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_OPENDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  |  | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DisputedAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` |  | |  |  | `INT4(10)` | Number of Dispute Cases |
| `DisputeCase` |  | |  |  | `CHAR(12)` | Case ID |
