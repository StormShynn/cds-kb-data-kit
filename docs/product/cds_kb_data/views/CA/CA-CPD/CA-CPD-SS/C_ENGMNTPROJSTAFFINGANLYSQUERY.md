---
name: C_ENGMNTPROJSTAFFINGANLYSQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# C_ENGMNTPROJSTAFFINGANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Resource ID |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `BillingControlCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `PlndEffortUpToCurPerd` |  | |  |  | `QUAN(15)` | Total Quantity |
| `EngmntProjStaffedEffort` |  | |  |  | `QUAN(15)` | Total Quantity |
| `StaffedEffortUpToCurPerdQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `TotRecHrsSentForApproval` |  | |  |  | `QUAN(15)` |  |
| `MisgTmeEntriesInHrs` |  | |  |  | `INT1(3)` |  |
| `UnstaffedEffort` |  | |  |  | `INT1(3)` |  |
| `TotalRecordedHours` |  | |  |  | `QUAN(15)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  |  | `INT1(3)` |  |
