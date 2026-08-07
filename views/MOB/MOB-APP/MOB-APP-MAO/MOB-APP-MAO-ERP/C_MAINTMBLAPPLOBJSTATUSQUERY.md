---
name: C_MAINTMBLAPPLOBJSTATUSQUERY
description: Mobile Object Status - Query
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value
semantic_en: Mobile Object Status - Query
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# C_MAINTMBLAPPLOBJSTATUSQUERY

**Mobile Object Status - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblApplicationObjectKey` |  | |  |  | `CHAR(100)` | Object key for Mobile Status |
| `MaintMblApplMobileStatus` |  | |  |  | `CHAR(10)` | Mobile Object Status |
| `MaintMblApplObjMblStsIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MaintMblApplicationObjectType` |  | |  |  | `CHAR(30)` | Object Type for Mobile Status |
| `MaintMblApplObjectSortValue` |  | |  |  | `CHAR(40)` | Sort field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplObjMblStsCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplObjMblStsCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfObjMblStsRecords` |  | |  |  | `INT1(3)` |  |
