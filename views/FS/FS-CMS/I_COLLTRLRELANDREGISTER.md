---
name: I_COLLTRLRELANDREGISTER
description: "Land Register Dets for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value
semantic_en: "Land Register Dets for Collateral"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLRELANDREGISTER

**Land Register Dets for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREPrtLandRegisterUUID` |  | |  |  | `RAW(16)` | GUID for part LR |
| `CollateralRealEstatePartUUID` |  | |  |  | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  |  | `NUMC(10)` | Part ID for the Object |
| `ColltrlRELandRegisterLinkUUID` |  | |  |  | `RAW(16)` | Link Key between RE and LR systems |
