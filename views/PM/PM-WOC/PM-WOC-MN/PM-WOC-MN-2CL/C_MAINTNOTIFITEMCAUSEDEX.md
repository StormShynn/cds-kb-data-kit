---
name: C_MAINTNOTIFITEMCAUSEDEX
description: Data Extr for Maint Notif Item Cause
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value
semantic_en: Data Extr for Maint Notif Item Cause
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# C_MAINTNOTIFITEMCAUSEDEX

**Data Extr for Maint Notif Item Cause**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintenanceNotificationItem` |  | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintenanceNotificationCause` |  | |  |  | `NUMC(4)` | Sequential Number for Cause |
| `MaintNotifCauseCodeCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Causes |
| `MaintNotifCauseCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Causes |
| `MaintNotificationCauseCode` |  | |  |  | `CHAR(4)` | Cause Code |
| `MaintNotifCauseText` |  | |  |  | `CHAR(40)` | Cause Text |
| `MaintNotificationRootCause` |  | |  |  | `CHAR(1)` | Root Cause |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
