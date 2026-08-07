---
name: I_RESPACEGROUPUSAGETYPE
description: Real Estate Space Group Usage Type
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value
semantic_en: Real Estate Space Group Usage Type
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# I_RESPACEGROUPUSAGETYPE

**Real Estate Space Group Usage Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGROUPUSAGETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGroupUsageType` |  | |  |  | `CHAR(4)` | Group Usage Type |
| `REIsUseEnableUsageType` |  | |  |  | `CHAR(1)` | Usage Enablement Type Indicator |
| `REIsOccupancyUsageType` |  | |  |  | `CHAR(1)` | Occupancy Usage Type Indicator |
| `REHasOccpcyUsageTypeCostObject` |  | |  |  | `CHAR(1)` | Occupancy Usage Type Has Cost Object Indicator |
