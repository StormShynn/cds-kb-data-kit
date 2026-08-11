---
name: I_SOLVEDDSPUTCASESTSDURNC
description: "This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value
semantic_en: "This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_SOLVEDDSPUTCASESTSDURNC

**This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCaseStatusDurnInDays` |  | |  |  | `INT4(10)` | Solved Case Status Duration in Days |
| `NumberOfDisputeCases` |  | |  |  | `INT4(10)` | Number of Dispute Cases |
