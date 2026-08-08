---
name: I_WORKASSGMTDETSDEX
description: "You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value
semantic_en: "You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - plan
  - metadata-only
---
# I_WORKASSGMTDETSDEX

**You can use this CDS view to retrieve the data related to the work assignment details of a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: How can I retrieve the data related to the work assignment details of the workforce person? What is the validity of the work assignments? What are the planned working hours of the work assignment? How can I retrieve the job details of the work assignment? How can I retrieve the supervisor details? How can I retrieve the organization details of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkAssignmentIsPrimary` |  | |  |  | `CHAR(1)` | Primary Employment Indicator |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | External User ID |
| `SupervisorWorkAssignmentID` |  | |  |  | `NUMC(8)` | Manager Workforce Assignment ID |
| `SupervisorWorkAssignmentExtID` |  | |  |  | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WorkforcePersonJobTitle` |  | |  |  | `CHAR(256)` | Job Title |
| `WorkforcePersonJobCode` |  | |  |  | `CHAR(128)` | Job Code |
| `WorkingHoursPerWeek` |  | |  |  | `DEC(5)` | Working Hours in a Week |
| `EmploymentPercent` |  | |  |  | `DEC(5)` | Employment Percentage |
| `WorkingDaysPerWeek` |  | |  |  | `DEC(4)` | Working Days in a Week |
| `WorkAssignmentStatus` |  | |  |  | `CHAR(1)` | Employment Status |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CountryOrRegion` |  | |  |  | `CHAR(3)` | Country/Region Key |
