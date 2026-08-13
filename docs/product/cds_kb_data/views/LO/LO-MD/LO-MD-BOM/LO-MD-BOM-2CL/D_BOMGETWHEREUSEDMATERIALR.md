---
name: D_BOMGETWHEREUSEDMATERIALR
description: "D Bomgetwhereusedmaterialr"
semantic_vi: "View này hiển thị danh sách vật liệu được sử dụng trong một bảng kê vật liệu (BOM) và việc sử dụng của chúng trong các BOM khác. Nó có thể được sử dụng để phân tích sự phụ thuộc của vật liệu và tối ưu hóa cấu trúc BOM."
keywords:
  - "bill of material"
  - "bảng kê vật liệu"
  - "material"
  - "vật liệu"
  - "bom"
  - "bill of materials"
  - "dependency"
  - "phụ thuộc"
  - "sap"
  - "ekko"
  - "logistics"
semantic_en: "This view exposes a list of materials used in a bill of material (BOM) and their usage in other BOMs. It can be used to analyze material dependencies and optimize BOM structures."
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
# D_BOMGETWHEREUSEDMATERIALR

**D Bomgetwhereusedmaterialr**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialItemUUID` |  | |  | `cs_guid` |  |  |
| `BillOfMaterialComponent` |  | |  | `idnrk` |  |  |
| `BillOfMaterialItemNumber` |  | |  | `sposn` |  |  |
| `NewBillOfMaterialItemNumber` |  | |  | `cs_sposn` |  |  |
| `HeaderChangeDocument` |  | |  | `aennr` |  |  |
| `BillOfMaterialCategory` |  | |  | `stlty` |  |  |
| `BillOfMaterial` |  | |  | `stnum` |  |  |
| `SuccessorBillOfMaterial` |  | |  | `cs_stlnr` |  |  |
| `BillOfMaterialVariant` |  | |  | `stalt` |  |  |
| `BillOfMaterialVersion` |  | |  | `bom_version` |  |  |
| `BillOfMaterialItemCategory` |  | |  | `postp` |  |  |
| `BillOfMaterialItemUnit` |  | |  | `kmpme` |  |  |
| `BillOfMaterialItemQuantity` |  | |  | `kmpmg` |  |  |
| `EngineeringChangeDocument` |  | |  | `aennr` |  |  |
| `ValidityStartDate` |  | |  | `datuv` |  |  |
| `ValidityEndDate` |  | |  | `datub` |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  | `stlkn` |  |  |
| `BOMItemDescription` |  | |  | `potx1` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `MaterialName` |  | |  | `maktx` |  |  |
| `PlantName` |  | |  | `werks_name` |  |  |
| `BillOfMaterialVariantUsageDesc` |  | |  | `antxt` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `BillOfMaterialVariantUsage` |  | |  | `stlan` |  |  |
| `BOMVersionStatus` |  | |  | `cs_versnst` |  |  |
| `BOMVersionStatusDescription` |  | |  | `val_text` |  |  |

## Source Code

```abap
@EndUserText.label: 'Result for material where-used list'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 } 
define abstract entity D_BOMGetWhereUsedMaterialR 
{
  BillOfMaterialItemUUID         : cs_guid;
  BillOfMaterialComponent        : idnrk;
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'NewBillOfMaterialItemNumber'
  BillOfMaterialItemNumber       : sposn;
  NewBillOfMaterialItemNumber    : cs_sposn;
  HeaderChangeDocument           : aennr;
  BillOfMaterialCategory         : stlty;
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'SuccessorBillOfMaterial'
  BillOfMaterial                 : stnum;
  SuccessorBillOfMaterial        : cs_stlnr;
  BillOfMaterialVariant          : stalt;
  BillOfMaterialVersion          : bom_version;
  BillOfMaterialItemCategory     : postp;
  BillOfMaterialItemUnit         : kmpme;
  @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
  BillOfMaterialItemQuantity     : kmpmg;
  EngineeringChangeDocument      : aennr;
  ValidityStartDate              : datuv;
  ValidityEndDate                : datub;
  BillOfMaterialItemNodeNumber   : stlkn;
  BOMItemDescription             : potx1;
  Material                       : matnr;
  MaterialName                   : maktx;
  PlantName                      : werks_name;
  BillOfMaterialVariantUsageDesc : antxt;
  Plant                          : werks_d;
  BillOfMaterialVariantUsage     : stlan;
  BOMVersionStatus               : cs_versnst;
  BOMVersionStatusDescription    : val_text;
}
```
