---
name: I_PRODUCTPLANTSTORAGE
description: Productplantstorage
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTSTORAGE

**Productplantstorage**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `PlantStorage.Product` |
| key `Plant` | `PlantStorage.Plant` |
| `InventoryForCycleCountInd` | `PlantStorage.InventoryForCycleCountInd` |
| `MaximumStoragePeriod` | `PlantStorage.MaximumStoragePeriod` |
| `ProvisioningServiceLevel` | `PlantStorage.ProvisioningServiceLevel` |
| `IsActiveEntity` | `cast( 'X' as sdraft_is_active preserving type )` |
| `ProdMaximumStoragePeriodUnit` | `PlantStorage.ProdMaximumStoragePeriodUnit` |
| `WrhsMgmtPtwyAndStkRemovalStrgy` | `PlantStorage.WrhsMgmtPtwyAndStkRemovalStrgy` |
| `CycleCountingIndicatorIsFixed` | `PlantStorage.CycleCountingIndicatorIsFixed` |
| `SegmentationStrategyForPlant` | `PlantStorage.SegmentationStrategyForPlant` |
| `DefaultSegmentValue` | `PlantStorage.DefaultSegmentValue` |
| `SgmtHasPrioInProductStockSort` | `PlantStorage.SgmtHasPrioInProductStockSort` |
| `_Product` | *Association* |
| `_ProvisioningSrvcLvl` | *Association* |
| `_Plant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdPlantStorageExt` | `E_Productplant` | [0..1] |
| `_ProvisioningSrvcLvl` | `I_ProductProvisioningSrvcLvl` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLANTSTOR',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product plant storage'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'Product'
@ObjectModel.sapObjectNodeType.name:'ProductPlantStorage'
define view I_Productplantstorage
  as select from P_ProductPlantBasic as PlantStorage

  association [1..1] to I_Product                    as _Product             on  $projection.Product = _Product.Product
  association [0..1] to E_Productplant               as _ProdPlantStorageExt on  $projection.Product = _ProdPlantStorageExt.Product
                                                                             and $projection.Plant   = _ProdPlantStorageExt.Plant
  association [0..1] to I_ProductProvisioningSrvcLvl as _ProvisioningSrvcLvl on  $projection.ProvisioningServiceLevel = _ProvisioningSrvcLvl.ProductProvisioningServiceLvl
  association [1..1] to I_Plant                      as _Plant               on  $projection.Plant = _Plant.Plant
  // To be re-enabled after view modeling correction
  //association [0..1] to I_CycleCountingSettings       as _CycleCountingSettings   on  $projection.InventoryForCycleCountInd = _CycleCountingSettings.CycleCountType
  //                                                                              and $projection.Plant                     = _CycleCountingSettings.Plant
{

  key PlantStorage.Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key PlantStorage.Plant,
      //@ObjectModel.foreignKey.association: '_CycleCountingSettings'
      PlantStorage.InventoryForCycleCountInd,
      PlantStorage.MaximumStoragePeriod,

      //        Retail Fields

      @ObjectModel.foreignKey.association: '_ProvisioningSrvcLvl'
      PlantStorage.ProvisioningServiceLevel,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      // New fields from MDG model, as part of unified API development
      PlantStorage.ProdMaximumStoragePeriodUnit,
      @ObjectModel.sapObjectNodeTypeReference:'ProdWrhsMgmtRotationDateType'
      PlantStorage.WrhsMgmtPtwyAndStkRemovalStrgy,
      PlantStorage.CycleCountingIndicatorIsFixed,
      @Feature:'SW:RFM_SEGMTN_UI'
      PlantStorage.SegmentationStrategyForPlant,
      @Feature:'SW:RFM_SEGMTN_UI'
      PlantStorage.DefaultSegmentValue,
      @Feature:'SW:RFM_SEGMTN_UI'
      @Semantics.booleanIndicator: true 
      PlantStorage.SgmtHasPrioInProductStockSort,

      _Product,
      _ProvisioningSrvcLvl,
      _Plant
      //_CycleCountingSettings


}
```
