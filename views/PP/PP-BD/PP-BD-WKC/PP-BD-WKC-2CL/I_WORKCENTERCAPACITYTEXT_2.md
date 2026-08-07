---
name: I_WORKCENTERCAPACITYTEXT_2
description: Work Center Capacity - Text
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value
semantic_en: Work Center Capacity - Text
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
  - metadata-only
---
# I_WORKCENTERCAPACITYTEXT_2

**Work Center Capacity - Text**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` |  | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CapacityText` |  | |  |  | `CHAR(40)` | Capacity Short Text |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
