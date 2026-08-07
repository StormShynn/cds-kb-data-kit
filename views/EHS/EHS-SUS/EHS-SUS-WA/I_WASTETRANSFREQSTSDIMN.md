---
name: I_WASTETRANSFREQSTSDIMN
description: Waste Transfer Request Status dimension
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value
semantic_en: Waste Transfer Request Status dimension
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTETRANSFREQSTSDIMN

**Waste Transfer Request Status dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteTransfReqStatus` |  | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `WasteTransfReqStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
