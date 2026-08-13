---
name: D_BOMGETWHEREUSEDMATERIALP
description: "D Bomgetwhereusedmaterialp"
semantic_vi: "View này hiển thị các vật liệu được sử dụng trong một bảng thành phần (BOM) nơi một vật liệu cụ thể được sử dụng như một thành phần. Nó có thể được sử dụng để phân tích việc sử dụng vật liệu trong BOMs trên các nhà máy và khoảng thời gian khác nhau."
keywords:
  - "bom"
  - "bill of materials"
  - "material"
  - "component"
  - "plant"
  - "logistics"
  - "sap"
  - "lo-md-bom-2cl"
  - "lo-md-bom"
  - "lo-md"
  - "lo"
  - "material used"
semantic_en: "This view exposes the materials used in a bill of materials (BOM) where a specific material is used as a component. It can be used to analyze the usage of materials in BOMs across different plants and time periods."
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
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BOMGETWHEREUSEDMATERIALP

**D Bomgetwhereusedmaterialp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HeaderValidityEndDate` |  | |  | `datub` |  |  |
| `HeaderValidityStartDate` |  | |  | `datuv` |  |  |
| `BillOfMaterialComponent` |  | |  | `idnrk` |  |  |
| `BillOfMaterialVariant` |  | |  | `stalt` |  |  |
| `BillOfMaterialVersion` |  | |  | `bom_version` |  |  |
| `BillOfMaterialCategory` |  | |  | `stlty` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameters for material where-used list'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 } 
define abstract entity D_BOMGetWhereUsedMaterialP 
{
  HeaderValidityEndDate       : datub;
  HeaderValidityStartDate     : datuv;
  BillOfMaterialComponent     : idnrk;
  BillOfMaterialVariant       : stalt;
  BillOfMaterialVersion       : bom_version;
  BillOfMaterialCategory      : stlty;
  Plant                       : werks_d;
}
```
