---
name: I_OBJECTASSETPARTNER
description: Object Asset Business Partner Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value
semantic_en: Object Asset Business Partner Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTASSETPARTNER

**Object Asset Business Partner Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetPartnerUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST_BP |
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetPartnerID` |  | |  |  | `CHAR(32)` | Business Partner ID |
| `ObjectAssetPartnerFunction` |  | |  |  | `CHAR(6)` | Business Partner Function |
| `ObjectAssetPartnerValidFromDte` |  | |  |  | `DATS(8)` | Valid from Date |
| `ObjectAssetPartnerValidToDate` |  | |  |  | `DATS(8)` | Valid to Date |
| `ObjectAssetReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
| `LiquidationObjectRefSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID for Liquidation |
| `InsuranceObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `MovableObjectUUID` |  | |  |  | `RAW(16)` | GUID for  CMS_MOVABLES |
| `RightsObjectUUID` |  | |  |  | `RAW(16)` | Rights GUID |
