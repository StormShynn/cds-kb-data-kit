---
name: C_MAINTNOTIFITEMTASKDEX
description: Data Extraction for Maint Notif Itm Task
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMTASKDEX')/$value
semantic_en: Data Extraction for Maint Notif Itm Task
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - task
  - metadata-only
---
# C_MAINTNOTIFITEMTASKDEX

**Data Extraction for Maint Notif Itm Task**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMTASKDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintenanceNotificationTask` |  | |  |  | `NUMC(4)` | Sequential Task Number |
| `MaintenanceNotificationItem` |  | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintNotifTaskCodeCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Tasks |
| `MaintNotifTaskCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Tasks |
| `MaintNotifTaskCode` |  | |  |  | `CHAR(4)` | Task Code |
| `MaintNotifTaskTxt` |  | |  |  | `CHAR(40)` | Short Text for Task |
| `ResponsiblePersonFunctionCode` |  | |  |  | `CHAR(2)` | Partner Function |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `NotificationTaskSortNumber` |  | |  |  | `NUMC(4)` | Sort Number for Task |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Planned Start Date |
| `PlannedStartTime` |  | |  |  | `TIMS(6)` | Planned Start Time for Task |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Planned Finish Date |
| `PlannedEndTime` |  | |  |  | `TIMS(6)` | Planned Finish Time for Task |
| `CompletionDate` |  | |  |  | `DATS(8)` | Date on Which the Task Was Completed |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Time at Which Task Was Completed |
| `CompletedByUser` |  | |  |  | `CHAR(12)` | Person Who Completed the Task |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `MaintNotifTaskInternalID` |  | |  |  | `CHAR(22)` | Object Number for Status Management |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
