---
name: I_WORKASSGMTDETSDEX_1
description: "This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value
semantic_en: "This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKASSGMTDETSDEX_1

**This CDS view is designed to provide key changes made to work assignments and includes information about changes made to job information such as cost center details, assignments, working hours, manager details, status, and job title. This CDS view provides the data to answer the following business questions: What are the start and end dates for each workforce person's work assignment? What is the external ID and country code associated with each work assignment? Is the workforce assignment considered primary for the person? Which company code and cost center are associated with each work assignment? Who is the supervisor for each work assignment, identified by their external ID? What is the job title and job code for each workforce person in their assignment? How many weekly working hours and days are assigned to each workforce person? What percentage of employment is each workforce person assigned to? What is the current status of each work assignment? Are there any work assignments that are blocked from access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` |  |
| `WorkforceAssignmentIsPrimary` |  | |  |  | `CHAR(1)` | Primary Employment Indicator |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SupervisorWorkAssignmentExtID` |  | |  |  | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WorkforcePersonJobTitle` |  | |  |  | `CHAR(256)` | Job Title |
| `WorkforcePersonJobCode` |  | |  |  | `CHAR(128)` | Job Code |
| `WeeklyWorkingHours` |  | |  |  | `DEC(5)` | Working Hours in a Week |
| `WeeklyWorkingDays` |  | |  |  | `DEC(4)` | Working Days in a Week |
| `EmploymentPercent` |  | |  |  | `DEC(5)` | Employment Percentage |
| `WorkAssignmentStatus` |  | |  |  | `CHAR(1)` | Employment Status |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
