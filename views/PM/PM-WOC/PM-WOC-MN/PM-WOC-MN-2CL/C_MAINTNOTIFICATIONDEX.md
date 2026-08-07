---
name: C_MAINTNOTIFICATIONDEX
description: Data Extraction for Maint Notification
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value
semantic_en: Data Extraction for Maint Notification
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - notification
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# C_MAINTNOTIFICATIONDEX

**Data Extraction for Maint Notification**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `NotificationText` |  | |  |  | `CHAR(40)` | Short Text |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintNotifProcessingContext` |  | |  |  | `CHAR(2)` | Maintenance Notification Processing Context |
| `MaintNotifRejectionReasonCode` |  | |  |  | `CHAR(3)` | Maintenance Reason Code |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `PreviousFinalDueDate` |  | |  |  | `DATS(8)` | Previous Final Due Date |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `CatalogProfileOriginCode` |  | |  |  | `CHAR(1)` | Origin of Notifications Catalog Profile |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `LocationDescription` |  | |  |  | `CHAR(50)` | Description of Current Location |
| `RequiredStartDate` |  | |  |  | `DATS(8)` | Required Start Date |
| `RequiredStartTime` |  | |  |  | `TIMS(6)` | Required Start Time |
| `RequiredEndDate` |  | |  |  | `DATS(8)` | Required End Date |
| `RequiredEndTime` |  | |  |  | `TIMS(6)` | Required End Time |
| `NotificationCreationDate` |  | |  |  | `DATS(8)` | Date of Notification |
| `NotificationCreationTime` |  | |  |  | `TIMS(6)` | Time of Notification |
| `NotificationReferenceDate` |  | |  |  | `DATS(8)` | Notification Reference Date |
| `NotificationReferenceTime` |  | |  |  | `TIMS(6)` | Notification Reference Time |
| `NotificationCompletionDate` |  | |  |  | `DATS(8)` | Date for Notification Completion |
| `NotificationCompletionTime` |  | |  |  | `TIMS(6)` | Completion Time of Notification |
| `MalfunctionStartDate` |  | |  |  | `DATS(8)` | Start of Malfunction (Date) |
| `MalfunctionStartTime` |  | |  |  | `TIMS(6)` | Start of Malfunction (Time) |
| `MalfunctionEndDate` |  | |  |  | `DATS(8)` | End of Malfunction (Date) |
| `MalfunctionEndTime` |  | |  |  | `TIMS(6)` | End of Malfunction (Time) |
| `MaintNotificationCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Coding |
| `MaintNotificationCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Coding |
| `MaintNotificationCode` |  | |  |  | `CHAR(4)` | Coding |
| `MaintenanceObjectIsDown` |  | |  |  | `CHAR(1)` | Breakdown Indicator |
| `MaintObjectDowntimeDuration` |  | |  |  | `FLTP(16)` | Breakdown Duration |
| `MaintObjDowntimeDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Breakdown Duration |
| `MaintNotifDetectionCatalog` |  | |  |  | `CHAR(2)` | Detection Method Profile |
| `MaintNotifDetectionCodeGroup` |  | |  |  | `CHAR(8)` | Detection Method Group |
| `MaintNotifDetectionCode` |  | |  |  | `CHAR(4)` | Detection Method |
| `MalfunctionEffect` |  | |  |  | `CHAR(1)` | Effect on Operation |
| `MaintNotifInternalID` |  | |  |  | `CHAR(22)` | Object Number for Status Management |
| `NotificationHasLongText` |  | |  |  | `CHAR(1)` | Object Long Text Available |
| `NotificationTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Notification |
| `NotificationTimeZoneOrigin` |  | |  |  | `CHAR(1)` | Origin of Time Zone in Notification |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintenancePlanCallNumber` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceTaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `NotifProcessingPhase` |  | |  |  | `CHAR(1)` | Notification Processing Phase |
| `MaintNotifProcessPhaseCode` |  | |  |  | `CHAR(2)` | Process Phase |
| `MaintNotifProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Object is deleted |
| `IsCompleted` |  | |  |  | `CHAR(1)` | Object is completed |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant for Work Center |
| `MainWorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `NotificationPersonResponsible` |  | |  |  | `CHAR(12)` | Person Responsible ID |
| `ReportedByUser` |  | |  |  | `CHAR(12)` | Name of Person Reporting Notification |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
