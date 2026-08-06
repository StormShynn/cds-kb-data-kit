---
name: D_SUPPLYDEMANDITEMGETPEGGINGR
description: D Supplydemanditemgetpeggingr
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `MRPPlant` | `werks_d` |
| `MRPArea` | `berid` |
| `DemandMRPElementIndex` | `abap.int4` |
| `DemandMRPElement` | `del12` |
| `DemandMRPElementItem` | `delps` |
| `DemandMRPElementScheduleLine` | `delet` |
| `DemandMRPElementCategory` | `delkz` |
| `DemandMRPElmntCategoryShrtName` | `delb0` |
| `DemandMRPElementDate` | `dat00` |
| `DemandMRPElementStorageLoc` | `lgort_d` |
| `DemandMRPElementSegment` | `sgt_rcat` |
| `SpecialStockAssignment` | `sobkz` |
| `DynamicPeggingQuantity` | `pph_pegging_qty` |
| `MaterialBaseUnit` | `meins` |
| `SupplyMRPElementIndex` | `abap.int4` |
| `SupplyMRPElement` | `del12` |
| `SupplyMRPElementItem` | `delps` |
| `SupplyMRPElementScheduleLine` | `delet` |
| `SupplyMRPElementCategory` | `delkz` |
| `SupplyMRPElmntCategoryShrtName` | `delb0` |
| `SupplyMRPElementDate` | `dat00` |
| `SupplyMRPElementStorageLoc` | `lgort_d` |
| `SupplyMRPElementSegment` | `sgt_rcat` |
| `_DummyAssociation` | *Association* |

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
