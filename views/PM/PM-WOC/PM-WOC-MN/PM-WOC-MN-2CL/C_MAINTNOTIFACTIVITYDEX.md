---
name: C_MAINTNOTIFACTIVITYDEX
description: Data Extraction for Maint Notif Activity
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value
semantic_en: Data Extraction for Maint Notif Activity
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# C_MAINTNOTIFACTIVITYDEX

**Data Extraction for Maint Notif Activity**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenanceNotification` | `CHAR(12)` | Notification Number |
| `MaintNotificationActivity` | `NUMC(4)` | Consecutive Number of Activity |
| `MaintenanceNotificationItem` | `NUMC(4)` | Item Number in Item Record |
| `MaintNotifActivitySortNumber` | `NUMC(4)` | Sort Number for Activity |
| `MaintNotifActivityCodeVersNmbr` | `CHAR(6)` | Version Number |
| `MaintNotifActivityCodeCatalog` | `CHAR(1)` | Catalog Type - Activities |
| `MaintNotifActivityCodeGroup` | `CHAR(8)` | Activity Code Group |
| `MaintNotificationActivityCode` | `CHAR(4)` | Activity Code |
| `MaintNotifActyTxt` | `CHAR(40)` | Activity Text |
| `NotificationHasLongText` | `CHAR(1)` | Object Long Text Available |
| `MaintNotifActivityTxtLanguage` | `CHAR(1)` | Primary language indicator for text segment |
| `MaintNotifActivityStartDate` | `DATS(8)` | Activity Start Date |
| `MaintNotifActivityStartTime` | `TIMS(6)` | Start Time of Activity |
| `MaintNotifActivityEndDate` | `DATS(8)` | Activity End Date |
| `MaintNotifActivityEndTime` | `TIMS(6)` | End Time of Activity |
| `MaintNotifActyQtyFactor` | `NUMC(3)` | Quantity Factor for Activities |
| `MaintNotifActyIsCreatedByCopy` | `CHAR(1)` | Data Record Created with Function 'Create with Copy Model' |
| `IsDeleted` | `CHAR(1)` | Delete Data Record |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangeTime` | `TIMS(6)` | Time of Change |
| `LastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
