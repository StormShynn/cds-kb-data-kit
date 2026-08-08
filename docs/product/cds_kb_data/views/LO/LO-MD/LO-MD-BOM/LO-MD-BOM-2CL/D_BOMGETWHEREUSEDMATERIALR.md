---
name: D_BOMGETWHEREUSEDMATERIALR
description: "D Bomgetwhereusedmaterialr"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
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
