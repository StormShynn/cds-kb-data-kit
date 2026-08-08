---
name: I_PRODSTRUCVARIANTCHANGESTATE
description: "Product Structure Variant Change State"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value
semantic_en: "Product Structure Variant Change State"
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
# I_PRODSTRUCVARIANTCHANGESTATE

**Product Structure Variant Change State**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` |  | |  |  | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantChgStateIntID` |  | |  |  | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantUniqueID` |  | |  |  | `CHAR(32)` |  |
| `ProdStrucVarBasicDataChgState` |  | |  |  | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantChangeNumber` |  | |  |  | `CHAR(12)` | Change Number in iPPE |
| `ProdStrucVarIsMrkdForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ProdStrucVarChgNmbrDescription` |  | |  |  | `CHAR(40)` | Change number description |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Change Master Authorization Group |
| `ProductStructureGnrcObjType` |  | |  |  | `CHAR(10)` | Object Type |
