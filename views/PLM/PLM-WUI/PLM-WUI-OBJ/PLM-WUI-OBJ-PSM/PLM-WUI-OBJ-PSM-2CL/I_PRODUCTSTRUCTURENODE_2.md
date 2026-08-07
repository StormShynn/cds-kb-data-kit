---
name: I_PRODUCTSTRUCTURENODE_2
description: "Product Structure Node"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value
semantic_en: "Product Structure Node"
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
# I_PRODUCTSTRUCTURENODE_2

**Product Structure Node**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureNodeUUID` |  | |  |  | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureNodeUniqueID` |  | |  |  | `CHAR(32)` |  |
| `ProductStructureNodeName` |  | |  |  | `CHAR(40)` | iPPE Node Description |
| `ClassInternalID` |  | |  |  | `NUMC(10)` | Internal Class Number |
| `ProductStructureNodeType` |  | |  |  | `CHAR(8)` | iPPE Node Type |
| `ProductStructureGnrcObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `ProductStructureCreationDate` |  | |  |  | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | |  |  | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
