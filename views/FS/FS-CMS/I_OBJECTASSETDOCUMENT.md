---
name: I_OBJECTASSETDOCUMENT
description: Object Asset Document Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value
semantic_en: Object Asset Document Details
tags:
  - FS
  - component:FS-CMS
  - document
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTASSETDOCUMENT

**Object Asset Document Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetDocUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST_DOC |
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetDocReferenceNumber` |  | |  |  | `CHAR(64)` | Reference Document ID |
| `ObjectAssetDocType` |  | |  |  | `CHAR(6)` | Document Type |
| `ObjectAssetDocDate` |  | |  |  | `DATS(8)` | Document Date |
| `ObjectAssetDocPhysicalLocation` |  | |  |  | `CHAR(6)` | Physical Location of Document |
| `ObjectAssetDocValidFromDate` |  | |  |  | `DATS(8)` | Date |
| `ObjectAssetDocValidToDate` |  | |  |  | `DATS(8)` | Date |
| `ObjectAssetReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
| `LiquidationObjectRefSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID for Liquidation |
| `InsuranceObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `MovableObjectUUID` |  | |  |  | `RAW(16)` | GUID for  CMS_MOVABLES |
| `RightsObjectUUID` |  | |  |  | `RAW(16)` | Rights GUID |
