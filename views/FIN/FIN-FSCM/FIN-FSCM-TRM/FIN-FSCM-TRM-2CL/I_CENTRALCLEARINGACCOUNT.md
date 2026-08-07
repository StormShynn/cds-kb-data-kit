---
name: I_CENTRALCLEARINGACCOUNT
description: "Central Clearing Account"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value
semantic_en: "Central Clearing Account"
tags:
  - FIN
  - account
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CENTRALCLEARINGACCOUNT

**Central Clearing Account**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CENTRALCLEARINGACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralClearingAccountUUID` |  | |  |  | `RAW(16)` | Internal ID of the Central Clearing Account |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CentralClearingAccount` |  | |  |  | `CHAR(10)` | Central Clearing Account |
| `CentralClearingAccountName` |  | |  |  | `CHAR(30)` | Name of the Central Clearing Account |
