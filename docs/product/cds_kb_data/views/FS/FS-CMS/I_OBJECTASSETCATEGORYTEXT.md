---
name: I_OBJECTASSETCATEGORYTEXT
description: "Object Asset Category - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value
semantic_en: "Object Asset Category - Text"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTASSETCATEGORYTEXT

**Object Asset Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetCategory` |  | |  |  | `CHAR(6)` | Asset Category Identification No |
| `Language` |  | |  |  | `LANG(1)` | Language in which Description is Required |
| `ObjectAssetCategoryText` |  | |  |  | `CHAR(40)` |  Asset Category Name in a Specified Language |
