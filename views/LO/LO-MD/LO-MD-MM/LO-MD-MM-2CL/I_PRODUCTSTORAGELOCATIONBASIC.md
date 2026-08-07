---
name: I_PRODUCTSTORAGELOCATIONBASIC
description: "Productstoragelocationbasic"
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTORAGELOCATIONBASIC

**Productstoragelocationbasic**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` | ✓ | |  |  |  |  |
| `WarehouseStorageBin` |  | |  |  |  |  |
| `MaintenanceStatus` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `PhysicalInventoryBlockInd` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `DateOfLastPostedCntUnRstrcdStk` |  | |  |  |  |  |
| `InventoryCorrectionFactor` |  | |  |  |  |  |
| `InvtryRestrictedUseStockInd` |  | |  |  |  |  |
| `InvtryCurrentYearStockInd` |  | |  |  |  |  |
| `InvtryQualInspCurrentYrStkInd` |  | |  |  |  |  |
| `InventoryBlockStockInd` |  | |  |  |  |  |
| `InvtryRestStockPrevPeriodInd` |  | |  |  |  |  |
| `InventoryStockPrevPeriod` |  | |  |  |  |  |
| `InvtryStockQltyInspPrevPeriod` |  | |  |  |  |  |
| `HasInvtryBlockStockPrevPeriod` |  | |  |  |  |  |
| `FiscalYearCurrentInvtryPeriod` |  | |  |  |  |  |
| `LeanWrhsManagementPickingArea` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `_Product` | | ✓ | | | | |
| `_MaterialStock` | | ✓ | | | | |
| `_Stock` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdStorLocExt` | `E_Productstoragelocation` | [0..1] |
| `_MaterialStock` | `I_MaterialStock_2` | [0..*] |
| `_Stock` | `I_MaterialStock` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
    sqlViewName: 'IPRDSTORLOCBASIC',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Storage Location'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel:{
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    representativeKey: 'Product'
}
@VDM.viewType: #BASIC

@Analytics:{
   dataCategory: #DIMENSION,
   dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    },
    internalName: #LOCAL
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'StorageLocation'
// Scope of this view is V_MARD_MD no aggreated fields should be added to this view.

define view I_ProductStorageLocationBasic
  as select from P_ProductStorageLocationBasic as StorageLocation

  association [1..1] to I_Product                as _Product         on  $projection.Product = _Product.Product
  association [0..1] to E_Productstoragelocation as _ProdStorLocExt  on  $projection.Product         = _ProdStorLocExt.Product
                                                                     and $projection.Plant           = _ProdStorLocExt.Plant
                                                                     and $projection.StorageLocation = _ProdStorLocExt.StorageLocation
  association [0..*] to I_MaterialStock_2        as _MaterialStock   on  $projection.Product         = _MaterialStock.Material
                                                                     and $projection.Plant           = _MaterialStock.Plant 
  association [0..*] to I_MaterialStock          as _Stock           on  $projection.Product         = _Stock.Material
                                                                     and $projection.Plant           = _Stock.Plant
                                                                     and $projection.StorageLocation = _Stock.StorageLocation
  association [1..1] to I_Plant                  as _Plant           on  $projection.Plant = _Plant.Plant
  //Start: enterprise search help (ESH) related associations------------------------------------------------------------------------------------
  //These associations are required in I_ProductStorageLocation as N_ProductStorageLocation has these associations
  //There can be no associations in N_ProductStorageLocation which are not present in I_ProductStorageLocation
  association [1..1] to I_StorageLocation        as _StorageLocation on  $projection.Plant           = _StorageLocation.Plant
                                                                     and $projection.StorageLocation = _StorageLocation.StorageLocation
  //End of ESH related associations-------------------------------------------------------------------------------------------------------------
  association [0..*] to I_ProductDescription_2      as _ProductDescription_2      on  $projection.Product = _ProductDescription_2.Product
{     
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' },
          useAsTemplate: true            
        }]
      @ObjectModel.text.association: '_ProductDescription_2' 
  key Product,
      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' },
          useAsTemplate: true            
        }]
  key Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
  key StorageLocation,
      WarehouseStorageBin,
      MaintenanceStatus,
      IsMarkedForDeletion,
      PhysicalInventoryBlockInd,
      CreationDate,
      DateOfLastPostedCntUnRstrcdStk,
      InventoryCorrectionFactor,
      InvtryRestrictedUseStockInd,
      InvtryCurrentYearStockInd,
      InvtryQualInspCurrentYrStkInd,
      InventoryBlockStockInd,
      InvtryRestStockPrevPeriodInd,
      InventoryStockPrevPeriod,
      InvtryStockQltyInspPrevPeriod,
      HasInvtryBlockStockPrevPeriod,
      FiscalYearCurrentInvtryPeriod,
      LeanWrhsManagementPickingArea,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,

      _Product,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_MaterialStock' 
      _Stock,
      _Plant,
      _StorageLocation, //ESH related associations
      _MaterialStock,
      @Analytics.hidden: true
      _ProductDescription_2

}
```
