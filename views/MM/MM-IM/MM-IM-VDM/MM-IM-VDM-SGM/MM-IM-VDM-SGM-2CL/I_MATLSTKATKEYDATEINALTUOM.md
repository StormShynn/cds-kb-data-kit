---
name: I_MATLSTKATKEYDATEINALTUOM
description: "Matlstkatkeydateinaltuom"
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
  - unit-of-measure
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_MATLSTKATKEYDATEINALTUOM

**Matlstkatkeydateinaltuom**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `Material` |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `Supplier` | ✓ | |  |  |  |  |
| `SDDocument` | ✓ | |  |  |  |  |
| `SDDocumentItem` | ✓ | |  |  |  |  |
| `WBSElementInternalID` | ✓ | |  |  |  |  |
| `Customer` | ✓ | |  |  |  |  |
| `SpecialStockIdfgStockOwner` | ✓ | |  |  |  |  |
| `InventoryStockType` | ✓ | |  |  |  |  |
| `InventorySpecialStockType` | ✓ | |  |  |  |  |
| `MaterialBaseUnit` | ✓ | |  |  |  |  |
| `AlternativeUnit` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  |  |  |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  |  |  |
| `MatlStkIncrQtyInMatlBaseUnit` |  | |  |  |  |  |
| `MatlStkDecrQtyInMatlBaseUnit` |  | |  |  |  |  |
| `MatlWrhsStkQtyInAltUoM` |  | |  | `cast( fltp_to_dec( MatlWrhsStkQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_qty_auom )` |  |  |
| `MatlCnsmpnQtyInAltUoM` |  | |  | `cast( fltp_to_dec( MatlCnsmpnQtyInAltUoM as abap.dec(31,14) ) as nsdm_consumption_qty_auom )` |  |  |
| `MatlStkIncrQtyInAltUoM` |  | |  | `cast( fltp_to_dec( MatlStkIncrQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_increase_qty_auom )` |  |  |
| `MatlStkDecrQtyInAltUoM` |  | |  | `cast( fltp_to_dec( MatlStkDecrQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_decrease_qty_auom )` |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SpecialStockIdfgStockOwner` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventoryStockType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SpecialStockIdfgStockOwner` | `I_Supplier` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventoryStockType` | `I_InventoryStockType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Stock At Key Date In Alternative UoM'
@AccessControl: {
                   authorizationCheck: #CHECK,
                   personalData.blocking: #NOT_REQUIRED --there are no BP references in table MATDOC with an EndOfPurpose state
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
@Analytics: {
              dataCategory:#CUBE,
              internalName: #LOCAL,
              technicalName: 'IMATSTKDATEAUOM'
            }
@Metadata: {
             ignorePropagatedAnnotations: true,
             allowExtensions: true
           }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */

define view entity I_MatlStkAtKeyDateInAltUoM
  with parameters
    P_KeyDate : vdm_v_key_date    
  as select from P_MatlStkAtKeyDateInAltUoM( P_KeyDate : $parameters.P_KeyDate )
  association [0..1] to I_Product                   as _Product                    on  $projection.Product                    = _Product.Product
  association [0..1] to I_Plant                     as _Plant                      on  $projection.Plant                      = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation            on  $projection.Plant                      = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation            = _StorageLocation.StorageLocation
  association [0..1] to I_Supplier                  as _Supplier                   on  $projection.Supplier                   = _Supplier.Supplier
  association [0..1] to I_Customer                  as _Customer                   on  $projection.Customer                   = _Customer.Customer
  association [0..1] to I_Supplier                  as _SpecialStockIdfgStockOwner on  $projection.SpecialStockIdfgStockOwner = _SpecialStockIdfgStockOwner.Supplier
  association [0..1] to I_InventorySpecialStockType as _InventorySpecialStockType  on  $projection.InventorySpecialStockType  = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InventoryStockType        as _InventoryStockType         on  $projection.InventoryStockType         = _InventoryStockType.InventoryStockType
  association [1..1] to I_UnitOfMeasure             as _UnitOfMeasure              on  $projection.MaterialBaseUnit           = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to I_CompanyCode               as _CompanyCode                on  $projection.CompanyCode                = _CompanyCode.CompanyCode
{
      // Stock Identifier
      @ObjectModel.foreignKey.association: '_Product'
  key Material                                        as Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
  key StorageLocation,
  key Batch,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
  key SDDocument,
  key SDDocumentItem,
  key WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_SpecialStockIdfgStockOwner'
  key SpecialStockIdfgStockOwner,
      @ObjectModel.foreignKey.association: '_InventoryStockType'
  key InventoryStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key InventorySpecialStockType,
      // Further Stock Groups
      // Units
  key MaterialBaseUnit,
  key AlternativeUnit,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,

      // Quantities in Base Unit of Measure
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      MatlWrhsStkQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      MatlCnsmpnQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      MatlStkIncrQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      MatlStkDecrQtyInMatlBaseUnit,
      // Quantities in Alternative Unit of Measure
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      @DefaultAggregation : #SUM
      cast( fltp_to_dec( MatlWrhsStkQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_qty_auom ) as MatlWrhsStkQtyInAltUoM, 
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      @DefaultAggregation : #SUM
      cast( fltp_to_dec( MatlCnsmpnQtyInAltUoM as abap.dec(31,14) ) as nsdm_consumption_qty_auom ) as MatlCnsmpnQtyInAltUoM, 
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      @DefaultAggregation : #SUM
      cast( fltp_to_dec( MatlStkIncrQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_increase_qty_auom ) as MatlStkIncrQtyInAltUoM, 
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      @DefaultAggregation : #SUM
      cast( fltp_to_dec( MatlStkDecrQtyInAltUoM as abap.dec(31,14) ) as nsdm_stock_decrease_qty_auom ) as MatlStkDecrQtyInAltUoM, 

      // Associations for names and descriptions
      _UnitOfMeasure,
      _Product,
      _Plant,
      _StorageLocation,
      _Supplier,
      _Customer,
      _SpecialStockIdfgStockOwner,
      _InventoryStockType,
      _InventorySpecialStockType,
      _CompanyCode
}
```
