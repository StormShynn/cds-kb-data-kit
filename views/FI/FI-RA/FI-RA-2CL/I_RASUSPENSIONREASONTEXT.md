---
name: I_RASUSPENSIONREASONTEXT
description: Suspension Reason - Text
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value
semantic_en: Suspension Reason - Text
tags:
  - FI
  - bo:salesorder
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RASUSPENSIONREASONTEXT

**Suspension Reason - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `RevnAcctgSuspensionReason` |  | |  |  | `CHAR(1)` | Suspension Reason |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RevnAcctgSuspensionReasonName` |  | |  |  | `CHAR(60)` | Suspension Reason Name |
