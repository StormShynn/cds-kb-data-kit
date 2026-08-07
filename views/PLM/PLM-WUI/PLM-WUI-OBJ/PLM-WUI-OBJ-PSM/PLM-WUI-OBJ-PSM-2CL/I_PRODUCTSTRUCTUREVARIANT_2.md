---
name: I_PRODUCTSTRUCTUREVARIANT_2
description: Product Structure Variant
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value
semantic_en: Product Structure Variant
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
# I_PRODUCTSTRUCTUREVARIANT_2

**Product Structure Variant**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` |  | |  |  | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantChgStateIntID` |  | |  |  | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantUniqueID` |  | |  |  | `CHAR(32)` |  |
| `ProductStructureVariantName` |  | |  |  | `CHAR(8)` | Variant |
| `ProdStructureVariantParentUUID` |  | |  |  | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureCreationDate` |  | |  |  | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | |  |  | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `ProdStrucVariantChangeNumber` |  | |  |  | `CHAR(12)` | Change Number in iPPE |
| `ProdStrucVariantConcatenated` |  | |  |  | `CHAR(44)` |  |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Change Master Authorization Group |
| `ProdStrucVarIsMrkdForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ProdStrucVarChgNmbrDescription` |  | |  |  | `CHAR(40)` | Change number description |
| `ProductStructureVariantQty` |  | |  |  | `QUAN(13)` | Fixed Quantity in Variant of iPPE Product Structure |
| `ProductStructureVariantUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `MaterialAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ProductStructureVariantType` |  | |  |  | `CHAR(8)` | iPPE Variant Type |
| `ProductStructureGnrcObjType` |  | |  |  | `CHAR(10)` | Object Type |
