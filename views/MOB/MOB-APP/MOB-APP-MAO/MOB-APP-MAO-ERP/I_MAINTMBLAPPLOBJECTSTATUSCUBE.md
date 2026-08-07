---
name: I_MAINTMBLAPPLOBJECTSTATUSCUBE
description: "Mobile Object Status - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value
semantic_en: "Mobile Object Status - Cube"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MAINTMBLAPPLOBJECTSTATUSCUBE

**Mobile Object Status - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblApplicationObjectKey` |  | |  |  | `CHAR(100)` | Object key for Mobile Status |
| `MaintMblApplObjMblStatusRecord` |  | |  |  | `NUMC(10)` | Record no. |
| `MaintMblApplMobileStatus` |  | |  |  | `CHAR(10)` | Mobile Object Status |
| `MaintMblApplObjMblStsIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MaintMblApplicationObjectType` |  | |  |  | `CHAR(30)` | Object Type for Mobile Status |
| `MaintMblApplObjectSortValue` |  | |  |  | `CHAR(40)` | Sort field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplObjMblStsCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplObjMblStsCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfObjMblStsRecords` |  | |  |  | `INT1(3)` |  |
