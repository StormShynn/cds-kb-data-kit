---
name: C_MAINTMBLAPPLCOMMSESSIONQUERY
description: "Mobile Communication Session - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value
semantic_en: "Mobile Communication Session - Query"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# C_MAINTMBLAPPLCOMMSESSIONQUERY

**Mobile Communication Session - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserSessionServer` |  | |  |  | `CHAR(32)` | Middleware Server GUID |
| `MobileUserSessionIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MobileUserHasLoggedIn` |  | |  |  | `CHAR(1)` | Active Flag |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSssnCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplCommSessionEndDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSessionEndYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnEndMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplNrOfCommSessions` |  | |  |  | `INT1(3)` |  |
