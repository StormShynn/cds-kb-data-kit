---
name: I_STOCKQUANTITYCURRENTVALUE
description: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
semantic_vi: "Current Stock Quantity and Value — CDS view tổng hợp (transactional data) dựa trên P_MatStkQtyValCur1."
keywords:
  - "current"
  - "stock"
  - "quantity"
  - "and"
  - "value"
  - "product"
  - "plant"
  - "storage"
  - "location"
  - "batch"
  - "supplier"
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
---
# I_STOCKQUANTITYCURRENTVALUE

**This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where "the stock value is valuated" by the price at period end?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `Material` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` | ✓ | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` | ✓ | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer for Special Stock |
| `SpecialStockIdfgStockOwner` | ✓ | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `InventoryStockType` | ✓ | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` | ✓ | |  |  | `CHAR(1)` | Special Stock Type |
| `MaterialBaseUnit` | ✓ | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Currency` | ✓ | |  |  | `CUKY(5)` | Currency Key |
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as nsdm_display_currency preserving type )` | `CUKY(5)` | Display Currency |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(17)` | Stock Quantity in Base Unit of Measure |
| `StockValueInCCCrcy` |  | |  |  | `CURR(17)` | Stock Value in Company Code Currency |
| `StockValueInDisplayCurrency` |  | |  | `cast(currency_conversion( amount => StockValueInCCCrcy, source_currency => Currency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => CurrentDate ) as nsdm_amount_display_currency preserving type )` | `CURR(17)` | Stock Value in Display Currency |
| `ProductGroup` |  | | `_Product` | `ProductGroup` | `CHAR(9)` | Product Group |
| `ProductType` |  | | `_Product` | `ProductType` | `CHAR(4)` | Product Type |
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
| `_ProductGroup_2` | | ✓ | | | | |
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
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value)*

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
         viewType: #COMPOSITE,
         lifecycle: {
                    status: #DEPRECATED,
                    successor: 'I_STOCKQUANTITYCURRENTVALUE_2'
                    }
      }
@Analytics:{
             dataCategory:#CUBE,
             technicalName: 'ISTOCKQUANVALCUR',
             internalName: #GLOBAL
           }
@Metadata: {
              ignorePropagatedAnnotations: true,
              allowExtensions: true
           }

define view entity I_StockQuantityCurrentValue
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
as select from P_MatStkQtyValCur1
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
// Deprecated view; successor I_ProductGroup_2
  association [0..1] to I_ProductGroup              as _ProductGroup               on  $projection.ProductGroup               = _ProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2            as _ProductGroup_2             on  $projection.ProductGroup               = _ProductGroup_2.ProductGroup
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
  @Analytics.internalName: #LOCAL
  cast($parameters.P_DisplayCurrency as nsdm_display_currency preserving type )     as DisplayCurrency,

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
  @VDM: {
          lifecycle.status: #DEPRECATED,
          lifecycle.successor: '_ProductGroup_2'
        }
  _ProductGroup,
  _ProductGroup_2,
  _Currency
}
```
