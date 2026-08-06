---
name: I_MAINTMBLAPPLCOMMSESSIONCUBE
description: Mobile Communication Session - Cube
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value
semantic_en: Mobile Communication Session - Cube
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MAINTMBLAPPLCOMMSESSIONCUBE

**Mobile Communication Session - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MobileUserSessionInternal` | `CHAR(32)` | Session GUID |
| `MobileUserSessionServer` | `CHAR(32)` | Middleware Server GUID |
| `MobileUserInternal` | `CHAR(32)` | User GUID |
| `MobileUserSessionIsActive` | `CHAR(1)` | Active Flag |
| `MobileUserHasLoggedIn` | `CHAR(1)` | Active Flag |
| `CreationDate` | `DATS(8)` |  |
| `MaintMblApplCommSssnCrtnYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnCrtnMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplCommSessionEndDate` | `DATS(8)` |  |
| `MaintMblApplCommSessionEndYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnEndMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplNrOfCommSessions` | `INT1(3)` |  |
