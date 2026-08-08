---
name: I_PRODSTRUCVARIANTBASIC
description: "Product Structure Variant Basic"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value
semantic_en: "Product Structure Variant Basic"
tags:
  - PLM
  - bo:material
  - component:PLM-WUI-OBJ-PSM-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-PSM
  - PLM-WUI-OBJ-PSM-2CL
  - product
  - metadata-only
---
# I_PRODSTRUCVARIANTBASIC

**Product Structure Variant Basic**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` |  | |  |  | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantUniqueID` |  | |  |  | `CHAR(32)` |  |
| `ProductStructureVariantName` |  | |  |  | `CHAR(8)` | Variant |
| `ProdStructureVariantParentUUID` |  | |  |  | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureVariantType` |  | |  |  | `CHAR(8)` | iPPE Variant Type |
| `ProductStructureGnrcObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `ProductStructureCreationDate` |  | |  |  | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | |  |  | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
