---
name: D_BILLOFMATERIALORDEXPLODEBOMP
description: D Bill of MaterialORDEXPLODEBOMP
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
# D_BILLOFMATERIALORDEXPLODEBOMP

**D Bill of MaterialORDEXPLODEBOMP**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrder` |  | |  | `vbeln` |
| `SalesOrderItem` |  | |  | `cs_vbpos` |
| `BOMExplosionApplication` |  | |  | `capid` |
| `RequiredQuantity` |  | |  | `basmn` |
| `BOMHeaderBaseUnit` |  | |  | `bmein` |
| `BOMExplosionIsLimited` |  | |  | `brems` |
| `BOMItmQtyIsScrapRelevant` |  | |  | `auskz` |
| `BillOfMaterialItemCategory` |  | |  | `postp` |
| `BOMExplosionAssembly` |  | |  | `matnr` |
| `BOMExplosionDate` |  | |  | `datuv` |
| `ExplodeBOMLevelValue` |  | |  | `cs_maxst` |
| `BOMExplosionIsMultilevel` |  | |  | `mehrs` |
| `MaterialProvisionFltrType` |  | |  | `beikz` |
| `SparePartFltrType` |  | |  | `erskz` |
| `FinalPriceIndicator` |  | |  | `cs_preis` |
| `BOMExplosionIsAlternatePrio` |  | |  | `altvo` |
| `BillOfMaterialSimulationValue` |  | |  | `cuobj` |

## Source Code

```abap
@EndUserText.label: 'Parameters for a Sales Order Bill of Material Explosion' 
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 }   
define abstract entity D_BillOfMaterialOrdExplodeBOMP 
   {
    SalesOrder : vbeln ;
    SalesOrderItem : cs_vbpos ;
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
