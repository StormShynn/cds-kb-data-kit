---
name: I_OBJECTPRTLINKDATA
description: "Object Part Link Data"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value
semantic_en: "Object Part Link Data"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTPRTLINKDATA

**Object Part Link Data**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectPrtLinkUUID` |  | |  |  | `RAW(16)` | Part Link GUID |
| `ObjectReferenceUUID` |  | |  |  | `RAW(16)` | Object reference GUID |
| `ObjectPrtRefUUID` |  | |  |  | `RAW(16)` | Part Reference GUID |
| `ObjectPrtID` |  | |  |  | `NUMC(4)` | Object Part Link - Part ID |
| `ObjectPrtReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
