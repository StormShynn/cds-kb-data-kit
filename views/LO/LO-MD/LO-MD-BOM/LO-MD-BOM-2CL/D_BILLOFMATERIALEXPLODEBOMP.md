---
name: D_BILLOFMATERIALEXPLODEBOMP
description: D Bill of MaterialEXPLODEBOMP
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
  - bill-of-material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALEXPLODEBOMP

**D Bill of MaterialEXPLODEBOMP**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BOMExplosionApplication` | `capid` |
| `RequiredQuantity` | `basmn` |
| `BOMHeaderBaseUnit` | `bmein` |
| `BOMExplosionIsLimited` | `brems` |
| `BOMItmQtyIsScrapRelevant` | `auskz` |
| `BillOfMaterialItemCategory` | `postp` |
| `BOMExplosionAssembly` | `matnr` |
| `BOMExplosionDate` | `datuv` |
| `ExplodeBOMLevelValue` | `cs_maxst` |
| `BOMExplosionIsMultilevel` | `mehrs` |
| `MaterialProvisionFltrType` | `beikz` |
| `SparePartFltrType` | `erskz` |
| `FinalPriceIndicator` | `cs_preis` |
| `BOMExplosionIsAlternatePrio` | `altvo` |
| `BillOfMaterialSimulationValue` | `cuobj` |

## Source Code

```abap
@EndUserText.label: 'Parameters for BOM Explosion'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 }   
define abstract entity D_BillOfMaterialExplodeBOMP 
   {
    BOMExplosionApplication : capid ;
    @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
    RequiredQuantity : basmn;
    BOMHeaderBaseUnit: bmein;
    BOMExplosionIsLimited : brems;
    BOMItmQtyIsScrapRelevant : auskz;
    BillOfMaterialItemCategory : postp;
    BOMExplosionAssembly : matnr;
    BOMExplosionDate : datuv;
    ExplodeBOMLevelValue : cs_maxst;
    BOMExplosionIsMultilevel : mehrs;
    MaterialProvisionFltrType : beikz;
    SparePartFltrType : erskz;
    FinalPriceIndicator : cs_preis;
    BOMExplosionIsAlternatePrio : altvo;
    BillOfMaterialSimulationValue : cuobj;
}
```
