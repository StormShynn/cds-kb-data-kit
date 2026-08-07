---
name: C_MAINTENANCEPLANSCHEDULEDEX
description: This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value
semantic_en: This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PM
  - bo:companycode
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - task
  - metadata-only
---
# C_MAINTENANCEPLANSCHEDULEDEX

**This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePackage` |  | |  |  | `NUMC(2)` | Maintenance Package Number |
| `SchedulingType` |  | |  |  | `CHAR(1)` | Scheduling type |
| `SchedulingStatus` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintenanceTaskPerformanceUnit` |  | |  |  | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintenanceCallNextPlannedDate` |  | |  |  | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` |  | |  |  | `DATS(8)` | Call date |
| `CompletionDate` |  | |  |  | `DATS(8)` | Date of last completion in maintenance plan |
| `CompletionTime` |  | |  |  | `TIMS(6)` |  |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `MaintCallCompltnCntrRdng` |  | |  |  | `FLTP(16)` | Counter reading confirmation |
| `MaintenanceCallIsOutstanding` |  | |  |  | `CHAR(1)` | Scheduling status: call outstanding |
| `MaintCallIsInvokedOnPlndDate` |  | |  |  | `CHAR(1)` | Scheduling status: planned date called |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintPlanLastScheduledDate` |  | |  |  | `DATS(8)` | Date of the call |
| `ReleasedByUserName` |  | |  |  | `CHAR(12)` | Name of the person who made the call |
| `MaintPlnCnctntdDuePackagesTxt` |  | |  |  | `CHAR(256)` |  |
| `MaintPlanPrdcssrCallCompltnDte` |  | |  |  | `DATS(8)` | Completion for Predecessor |
| `MaintenancePlanManualCallDate` |  | |  |  | `DATS(8)` | Manual call date |
| `MaintenanceCallLastPlannedDate` |  | |  |  | `DATS(8)` | Last planned date |
