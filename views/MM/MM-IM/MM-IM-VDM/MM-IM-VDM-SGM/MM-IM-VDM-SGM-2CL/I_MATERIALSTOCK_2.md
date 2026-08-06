---
name: I_MATERIALSTOCK_2
description: Material Stock 2
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALSTOCK_2

**Material Stock 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `Plant` | `Plant` |
| key `StorageLocation` | `StorageLocation` |
| key `Batch` | `Batch` |
| key `Supplier` | `Supplier` |
| key `SDDocument` | `SDDocument` |
| key `SDDocumentItem` | `SDDocumentItem` |
| key `WBSElementInternalID` | `cast ( WBSElementInternalID as ps_s4_pspnr preserving type )` |
| key `Customer` | `Customer` |
| key `SpecialStockIdfgStockOwner` | `SpecialStockIdfgStockOwner` |
| key `InventoryStockType` | `InventoryStockType` |
| key `InventorySpecialStockType` | `InventorySpecialStockType` |
| key `FiscalYearVariant` | `FiscalYearVariant` |
| key `MatlDocLatestPostgDate` | `MatlDocLatestPostgDate` |
| key `MaterialBaseUnit` | `MaterialBaseUnit` |
| key `CostEstimate` | `CostEstimate` |
| key `ResourceID` | `ResourceID` |
| `CompanyCode` | `CompanyCode` |
| `MatlWrhsStkQtyInMatlBaseUnit` | `MatlWrhsStkQtyInMatlBaseUnit` |
| `MatlCnsmpnQtyInMatlBaseUnit` | `MatlCnsmpnQtyInMatlBaseUnit` |
| `MatlStkIncrQtyInMatlBaseUnit` | `MatlStkIncrQtyInMatlBaseUnit` |
| `MatlStkDecrQtyInMatlBaseUnit` | `MatlStkDecrQtyInMatlBaseUnit` |
| `_Material` | *Association* |
| `_CompanyCode` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_SpecialStockIdfgStockOwner` | *Association* |
| `_InventoryStockType` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_InvtryPrcBasicByPeriodEndDate` | *Association* |
| `_InventoryPriceByPeriodEndDate` | *Association* |
| `_CurrentInvtryPrice` | *Association* |
| `_ResourceBasic` | *Association* |
| `_SpclStkIdfgWBSElmntBasicData` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SpecialStockIdfgStockOwner` | `I_Supplier` | [0..1] |
| `_InventoryStockType` | `I_InventoryStockType` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_InvtryPrcBasicByPeriodEndDate` | `I_InvtryPrcBasicByKeyDate` | [0..1] |
| `_InventoryPriceByPeriodEndDate` | `I_InvtryPrcByKeyDateUsdInLogs` | [0..1] |
| `_CurrentInvtryPrice` | `I_CurrentMatlPriceByCostEst` | [0..1] |
| `_ResourceBasic` | `I_ResourceBasic` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Material Stock Calculation'
@AccessControl: {
                  authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED   --there are no BP references in table MATDOC with an EndOfPurpose state
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass:#TRANSACTIONAL
                           },
                modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: { dataCategory:#CUBE,
              internalName:#LOCAL
            }
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_MaterialStock_2 
as select from I_MaterialStock_Aggr

  association [1..1] to I_Product                   as _Material                      on  $projection.Material = _Material.Product
  association [1..1] to I_CompanyCode               as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Plant                     as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation               on  $projection.Plant           = _StorageLocation.Plant
                                                                                      and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Supplier                  as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer                  as _Customer                      on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Supplier                  as _SpecialStockIdfgStockOwner    on  $projection.SpecialStockIdfgStockOwner = _SpecialStockIdfgStockOwner.Supplier
  association [1..1] to I_InventoryStockType        as _InventoryStockType            on  $projection.InventoryStockType = _InventoryStockType.InventoryStockType
  association [1..1] to I_InventorySpecialStockType as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [1..1] to I_UnitOfMeasure             as _UnitOfMeasure                 on  $projection.MaterialBaseUnit = _UnitOfMeasure.UnitOfMeasure
-- View I_InvtryPrcBasicByKeyDate deliveres the same data as I_InventoryPriceByKeyDate but is performance optimized for stock value calculation from quantities
-- View I_InventoryPriceByKeyDate has to stay for compatibility reasons (I_MaterialStock is C1 released)
  association [0..1] to I_InvtryPrcBasicByKeyDate   as _InvtryPrcBasicByPeriodEndDate on  $projection.CostEstimate = _InvtryPrcBasicByPeriodEndDate.CostEstimate
  association [0..1] to I_InvtryPrcByKeyDateUsdInLogs as _InventoryPriceByPeriodEndDate on  $projection.CostEstimate = _InventoryPriceByPeriodEndDate.CostEstimate 
  association [0..1] to I_CurrentMatlPriceByCostEst as _CurrentInvtryPrice            on  $projection.CostEstimate = _CurrentInvtryPrice.CostEstimate
  association [0..*] to I_ResourceBasic             as _ResourceBasic                 on  $projection.ResourceID   = _ResourceBasic.ResourceID
{
      // Stock Identifier
      @ObjectModel.foreignKey.association: '_Material'
  key Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
  key StorageLocation,
  key Batch,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
  key SDDocument,
  key SDDocumentItem,
  key cast ( WBSElementInternalID as ps_s4_pspnr preserving type )   as WBSElementInternalID,  
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_SpecialStockIdfgStockOwner'
  key SpecialStockIdfgStockOwner,    
      @ObjectModel.foreignKey.association: '_InventoryStockType'
  key InventoryStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key InventorySpecialStockType,
      // Further Stock Groups
      @Semantics.fiscal.yearVariant: true
  key FiscalYearVariant,
      @Semantics.businessDate.at: true
  key MatlDocLatestPostgDate,
      // Units
      
  key MaterialBaseUnit,
  key CostEstimate,
  key ResourceID,
  
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MatlWrhsStkQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MatlCnsmpnQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MatlStkIncrQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MatlStkDecrQtyInMatlBaseUnit,

      // Associations for names and descriptions
      _UnitOfMeasure,
      _Material,
      _CompanyCode,
      _Plant,
      _StorageLocation,
      _Supplier,
      _Customer,
      _SpecialStockIdfgStockOwner,
      _InventoryStockType,
      _InventorySpecialStockType,  
      _InvtryPrcBasicByPeriodEndDate,
      _InventoryPriceByPeriodEndDate,    
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor: '_InvtryPrcBasicByPeriodEndDate'
//      @VDM.lifecycle.status: #DEPRECATED
//      @VDM.lifecycle.successor: '_InvtryPrcBasicByPeriodEndDate'      
//      _InventoryPriceByPeriodEndDate,
//      _InvtryPrcBasicByPeriodEndDate,
      _CurrentInvtryPrice,
      _ResourceBasic,
      _SpclStkIdfgWBSElmntBasicData
}
```
