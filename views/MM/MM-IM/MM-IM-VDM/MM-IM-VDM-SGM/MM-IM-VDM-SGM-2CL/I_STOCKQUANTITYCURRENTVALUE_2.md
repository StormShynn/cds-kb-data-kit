---
name: I_STOCKQUANTITYCURRENTVALUE_2
description: "Stockquantitycurrentvalue 2"
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
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKQUANTITYCURRENTVALUE_2

**Stockquantitycurrentvalue 2**

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
| `Currency` | ✓ | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as nsdm_display_currency preserving type )` |  |  |
| `ValuationAreaType` |  | |  |  |  |  |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  |  |  |
| `StockValueInCCCrcy` |  | |  |  |  |  |
| `StockValueInDisplayCurrency` |  | |  | `cast(currency_conversion( amount => StockValueInCCCrcy, source_currency => Currency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => CurrentDate ) as nsdm_amount_display_currency preserving type )` |  |  |
| `ProductGroup` |  | | `_Product` | `ProductGroup` |  |  |
| `ProductType` |  | | `_Product` | `ProductType` |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SpecialStockIdfgStockOwner` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventoryStockType` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

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
| `_ProductType` | `I_Producttype` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |

## Source Code

```abap
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED   --there are no BP references in table MATDOC with an EndOfPurpose state
                }
@EndUserText.label: 'Current Stock Quantity and Value'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
                 usageType:{
                              sizeCategory: #XXL,
                              serviceQuality: #D,
                              dataClass:#TRANSACTIONAL
                           },
                 modelingPattern: #ANALYTICAL_CUBE,
                 supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
         viewType: #COMPOSITE
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This view is the succesor of view I_StockQuantityCurrentValue. It is optimized for performance by use of an additional 
// field for use as lookupEntity, which is an incompatible change for a C1 released view
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         
      }

@Analytics: { dataCategory:#CUBE,
              internalName:#LOCAL,
              technicalName: 'ISTOCKQUANVALC_2'
            }   
@Metadata: {
              ignorePropagatedAnnotations: true,
              allowExtensions: true
           }
define view entity I_StockQuantityCurrentValue_2 
with parameters
  @Consumption: {
                   defaultValue: 'EUR',
                   valueHelpDefinition: [{
                                            entity: {
                                                       name:'I_Currency',
                                                       element:'Currency'
                                                    }
                                        }]
                }
  P_DisplayCurrency: nsdm_display_currency
as select from P_MatStkQtyValCur1_2
  association [0..1] to I_Product                   as _Product                    on  $projection.Product                    = _Product.Product
  association [0..1] to I_Plant                     as _Plant                      on  $projection.Plant                      = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation            on  $projection.Plant                      = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation            = _StorageLocation.StorageLocation
  association [0..1] to I_Supplier                  as _Supplier                   on  $projection.Supplier                   = _Supplier.Supplier
  association [0..1] to I_Customer                  as _Customer                   on  $projection.Customer                   = _Customer.Customer
  association [0..1] to I_Supplier                  as _SpecialStockIdfgStockOwner on  $projection.SpecialStockIdfgStockOwner = _SpecialStockIdfgStockOwner.Supplier
  association [0..1] to I_InventorySpecialStockType as _InventorySpecialStockType  on  $projection.InventorySpecialStockType  = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InventoryStockType        as _InventoryStockType         on  $projection.InventoryStockType         = _InventoryStockType.InventoryStockType
  association [0..1] to I_Producttype               as _ProductType                on  $projection.ProductType                = _ProductType.ProductType
  association [0..1] to I_ProductGroup_2            as _ProductGroup               on  $projection.ProductGroup               = _ProductGroup.ProductGroup
  association [1..1] to I_UnitOfMeasure             as _UnitOfMeasure              on  $projection.MaterialBaseUnit           = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to I_Currency                  as _Currency                   on  $projection.Currency                   = _Currency.Currency
{
/*  @ObjectModel: {
                   foreignKey.association: '_Product',
                   text.element:  [ 'ProductDescription' ]
                 }*/
  @ObjectModel.foreignKey.association: '_Product'
  key Material                                                           as Product,
/*  @ObjectModel: {
                  foreignKey.association: '_Plant',
                  text.element:  [ 'PlantName' ]
                }*/
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
/*  @ObjectModel: {
                   foreignKey.association: '_InventoryStockType',
                   text.element: [ 'InventoryStockTypeName' ]
                }*/
  @ObjectModel.foreignKey.association: '_InventoryStockType'
  key InventoryStockType,
/*  @ObjectModel: {
                   foreignKey.association: '_InventorySpecialStockType',
                   text.element: [ 'InventorySpecialStockTypeName' ]
                }*/
  @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key InventorySpecialStockType,
  key MaterialBaseUnit,
  @ObjectModel.foreignKey.association: '_Currency'
  key Currency,
  cast($parameters.P_DisplayCurrency as nsdm_display_currency preserving type )     as DisplayCurrency,

  @Environment.sql.passValue: true
  ValuationAreaType,

  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  @DefaultAggregation : #SUM
  MatlWrhsStkQtyInMatlBaseUnit,
  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation : #SUM
  StockValueInCCCrcy,
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @DefaultAggregation: #SUM
  cast(currency_conversion( amount             => StockValueInCCCrcy,
                            source_currency    => Currency,
                            target_currency    => $parameters.P_DisplayCurrency,
                            exchange_rate_date => CurrentDate )
                       as nsdm_amount_display_currency preserving type ) as StockValueInDisplayCurrency,
/*  @ObjectModel: {
                  foreignKey.association: '_ProductGroup',
                  text.element: [ 'MaterialGroupName' ]
                }*/
  @ObjectModel.foreignKey.association: '_ProductGroup'
  _Product.ProductGroup                                                  as ProductGroup,
/*  @ObjectModel: {
                   foreignKey.association: '_ProductType',
                   text.element: [ 'MaterialTypeName' ]
                }*/
  @ObjectModel.foreignKey.association: '_ProductType'
  _Product.ProductType                                                   as ProductType,

--  _Product._MaterialText[1: Language=$session.system_language].ProductDescription                       as ProductDescription,
--  _Plant.PlantName                                                                                      as PlantName,
--  _InventoryStockType._Text[1: Language=$session.system_language].InventoryStockTypeName                as InventoryStockTypeName,
--  _InventorySpecialStockType._Text[1: Language=$session.system_language].InventorySpecialStockTypeName  as InventorySpecialStockTypeName,
--  _Product._ProductGroupText[1: Language=$session.system_language].MaterialGroupName                    as MaterialGroupName,
--  _Product._ProductTypeName[1: Language=$session.system_language].MaterialTypeName                      as MaterialTypeName,

  _UnitOfMeasure,
  _Product,
  _Plant,
  _StorageLocation,
  _Supplier,
  _Customer,
  _SpecialStockIdfgStockOwner,
  _InventoryStockType,
  _InventorySpecialStockType,
  _ProductType,
  _ProductGroup,
  _Currency
}
```
