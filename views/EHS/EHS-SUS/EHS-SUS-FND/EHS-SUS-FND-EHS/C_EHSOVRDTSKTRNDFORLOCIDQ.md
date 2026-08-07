---
name: C_EHSOVRDTSKTRNDFORLOCIDQ
description: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - metadata-only
---
# C_EHSOVRDTSKTRNDFORLOCIDQ

**This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Task Definition Priority Description |
| `EHSSemanticObjectName` |  | |  |  | `CHAR(60)` | Task Origin |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
