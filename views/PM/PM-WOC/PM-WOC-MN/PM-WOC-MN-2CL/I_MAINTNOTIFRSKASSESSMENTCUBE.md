---
name: I_MAINTNOTIFRSKASSESSMENTCUBE
description: Maint Notif Risk Assessment - Cube
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value
semantic_en: Maint Notif Risk Assessment - Cube
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_MAINTNOTIFRSKASSESSMENTCUBE

**Maint Notif Risk Assessment - Cube**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintEventCnsqncCategoryCode` |  | |  |  | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` |  | |  |  | `NUMC(2)` | Consequence ID |
| `MaintEvtPrioritizationProfile` |  | |  |  | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventLikelihoodCode` |  | |  |  | `NUMC(2)` | Likelihood ID |
| `MaintEventConsequenceGroup` |  | |  |  | `CHAR(10)` | Consequence Category Group ID |
| `MaintEventConsequenceIsLeading` |  | |  |  | `CHAR(1)` | Leading Consequence Indicator |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  | `CHAR(20)` | Technical Object Type |
| `TechnicalObject` |  | |  |  | `CHAR(40)` | Technical Object |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | 30 Characters |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `NumberOfMaintNotifRisk` |  | |  |  | `INT4(10)` |  |
