---
name: D_SUPPLYDEMANDITEMGETPEGGINGR
description: "D Supplydemanditemgetpeggingr"
semantic_vi: "View D_SUPPLYDEMANDITEMGETPEGGINGR CDS hiển thị dữ liệu nhu cầu và cung cấp vật liệu tại mức độ chi tiết vật phẩm, hữu ích cho kế hoạch và thực hiện sản xuất trong SAP PP-FIO-2CL."
keywords:
  - "material demand"
  - "supply data"
  - "manufacturing planning"
  - "sap pp-fio-2cl"
  - "demand and supply"
  - "material requirement planning"
  - "mrp"
  - "demand mrp element"
  - "supply chain management"
  - "nguồn cung cấp"
  - "kế hoạch sản xuất"
  - "truy vấn dữ liệu"
semantic_en: "The D_SUPPLYDEMANDITEMGETPEGGINGR CDS view exposes material demand and supply data at the item level, useful for manufacturing planning and execution in SAP PP-FIO-2CL."
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# D_SUPPLYDEMANDITEMGETPEGGINGR

**D Supplydemanditemgetpeggingr**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |
| `MRPPlant` |  | |  | `werks_d` |  |  |
| `MRPArea` |  | |  | `berid` |  |  |
| `DemandMRPElementIndex` |  | |  | `int4` |  |  |
| `DemandMRPElement` |  | |  | `del12` |  |  |
| `DemandMRPElementItem` |  | |  | `delps` |  |  |
| `DemandMRPElementScheduleLine` |  | |  | `delet` |  |  |
| `DemandMRPElementCategory` |  | |  | `delkz` |  |  |
| `DemandMRPElmntCategoryShrtName` |  | |  | `delb0` |  |  |
| `DemandMRPElementDate` |  | |  | `dat00` |  |  |
| `DemandMRPElementStorageLoc` |  | |  | `lgort_d` |  |  |
| `DemandMRPElementSegment` |  | |  | `sgt_rcat` |  |  |
| `SpecialStockAssignment` |  | |  | `sobkz` |  |  |
| `DynamicPeggingQuantity` |  | |  | `pph_pegging_qty` |  |  |
| `MaterialBaseUnit` |  | |  | `meins` |  |  |
| `SupplyMRPElementIndex` |  | |  | `int4` |  |  |
| `SupplyMRPElement` |  | |  | `del12` |  |  |
| `SupplyMRPElementItem` |  | |  | `delps` |  |  |
| `SupplyMRPElementScheduleLine` |  | |  | `delet` |  |  |
| `SupplyMRPElementCategory` |  | |  | `delkz` |  |  |
| `SupplyMRPElmntCategoryShrtName` |  | |  | `delb0` |  |  |
| `SupplyMRPElementDate` |  | |  | `dat00` |  |  |
| `SupplyMRPElementStorageLoc` |  | |  | `lgort_d` |  |  |
| `SupplyMRPElementSegment` |  | |  | `sgt_rcat` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Item Pegging Data'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_SupplyDemandItemGetPeggingR
{
  Material                       : matnr;
  MRPPlant                       : werks_d;
  MRPArea                        : berid;
  DemandMRPElementIndex          : abap.int4;
  DemandMRPElement               : del12;
  DemandMRPElementItem           : delps;
  DemandMRPElementScheduleLine   : delet;
  DemandMRPElementCategory       : delkz;
  DemandMRPElmntCategoryShrtName : delb0;
  DemandMRPElementDate           : dat00;
  DemandMRPElementStorageLoc     : lgort_d;
  DemandMRPElementSegment        : sgt_rcat;
  @Semantics.booleanIndicator
  SpecialStockAssignment         : sobkz;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  DynamicPeggingQuantity         : pph_pegging_qty;
  MaterialBaseUnit               : meins;
  SupplyMRPElementIndex          : abap.int4;
  SupplyMRPElement               : del12;
  SupplyMRPElementItem           : delps;
  SupplyMRPElementScheduleLine   : delet;
  SupplyMRPElementCategory       : delkz;
  SupplyMRPElmntCategoryShrtName : delb0;
  SupplyMRPElementDate           : dat00;
  SupplyMRPElementStorageLoc     : lgort_d;
  SupplyMRPElementSegment        : sgt_rcat;

  _DummyAssociation              : association to parent D_SupDmndItmGetPggngWthItemsR;

}
```
