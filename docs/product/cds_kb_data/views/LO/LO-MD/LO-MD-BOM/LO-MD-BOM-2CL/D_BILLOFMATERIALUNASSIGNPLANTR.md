---
name: D_BILLOFMATERIALUNASSIGNPLANTR
description: "D Bill of MaterialUNASSIGNPLANTR"
semantic_vi: "Chứa thông tin về nhà máy chưa được gán cho một bộ phận vật liệu, hữu ích khi quản lý các bộ phận vật liệu và nhà máy liên quan."
keywords:
  - "bill of material"
  - "bộ phận vật liệu"
  - "plant"
  - "nhà máy"
  - "unassigned"
  - "chưa được gán"
  - "sap lo-md-bom-2cl"
  - "logistics general"
  - "material"
  - "vật liệu"
semantic_en: "Exposes unassigned plant information for a bill of material, useful when managing material components and their associated plants."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - material
  - plant
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
  - bo:Plant
---
# D_BILLOFMATERIALUNASSIGNPLANTR

**D Bill of MaterialUNASSIGNPLANTR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOMIsSuccessfulPlantUnassigned` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'BOM unassign plant result'
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER] }   
define abstract entity D_BillOfMaterialUnassignPlantR {
    BOMIsSuccessfulPlantUnassigned :  boolean;   
}
```
