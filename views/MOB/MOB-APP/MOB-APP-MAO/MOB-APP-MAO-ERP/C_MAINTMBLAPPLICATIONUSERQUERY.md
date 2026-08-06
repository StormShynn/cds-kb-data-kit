---
name: C_MAINTMBLAPPLICATIONUSERQUERY
description: Mobile Application User - Query
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value
semantic_en: Mobile Application User - Query
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# C_MAINTMBLAPPLICATIONUSERQUERY

**Mobile Application User - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MobileUserServerInternal` | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` | `CHAR(30)` | Mobile Application Name |
| `MobileUserGroupInternal` | `CHAR(30)` | Syclo Middleware User Group Id |
| `MobileUser` | `CHAR(12)` | User Name |
| `MaintMobileApplicationUserName` | `CHAR(80)` | User Description |
| `MobileUserIsLocked` | `CHAR(1)` | Lock flag |
| `MobileUserProductRoleIsValid` | `CHAR(1)` | Flag - No Valid Product Role |
| `MobileUserLogicalSystem` | `CHAR(10)` | Logical System |
| `CreationDate` | `DATS(8)` |  |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplNumberOfUsers` | `INT1(3)` |  |
