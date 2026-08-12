---
name: C_PURCHASINGSOURCEITEMDEX
description: "Purchasingsourceitemdex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASINGSOURCEITEMDEX

**Purchasingsourceitemdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `SourceListRecord` | ✓ | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierIsFixed` |  | |  |  |  |  |
| `PurchaseOutlineAgreement` |  | |  |  |  |  |
| `PurchaseOutlineAgreementItem` |  | |  |  |  |  |
| `PurOutlineAgreementIsFixed` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `IssgPlantIsFixed` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SourceOfSupplyIsBlocked` |  | |  |  |  |  |
| `SourceOfSupplyIsFixed` |  | |  |  |  |  |
| `SourceListStatus` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `SourceListRecordCategory` |  | |  |  |  |  |
| `MRPSourcingControl` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OriginSystem` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_ManufacturerMaterial` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplyingPlant` | `I_Plant` | [0..1] |
| `_ManufacturerMaterial` | `I_Product` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPPRSRCITMDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Source List Item'

@ClientHandling.algorithm                       : #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass             : #TRANSACTIONAL,
                usageType.sizeCategory          : #L,
                usageType.serviceQuality        : #D,
                supportedCapabilities           : [ #EXTRACTION_DATA_SOURCE ]
              }
     
@VDM.viewType                                   : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations           : true

@Analytics: { dataCategory                      : #FACT,
              dataExtraction: {
                enabled                         : true,
                delta.changeDataCapture         : {
                    mapping:[ { table           : 'eord', role: #MAIN,
                                viewElement     : ['Material', 'Plant','SourceListRecord'],
                                tableElement    : ['matnr','werks','zeord']
                              }
                            ]
                }
              }
}
@ObjectModel.sapObjectNodeType.name: 'PurchasingSourceListItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchasingSourceItemDEX
  as select from I_MPPurchasingSourceItem

  association [1..1] to I_Product                    as _Product                    on  $projection.Material = _Product.Product

  association [1..1] to I_Plant                      as _Plant                      on  $projection.Plant = _Plant.Plant
  
  association [0..1] to I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier
  
  association [0..1] to I_Plant                      as _SupplyingPlant             on  $projection.SupplyingPlant = _SupplyingPlant.Plant
  
  association [0..1] to I_Product                    as _ManufacturerMaterial       on  $projection.ManufacturerMaterial = _ManufacturerMaterial.Product
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization     on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  
  association [1..1] to I_UnitOfMeasure              as _OrderQuantityUnit          on  $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  
  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType  on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
{
       @ObjectModel.foreignKey.association: '_Product'
  key  Material                     as Material,

       @ObjectModel.foreignKey.association: '_Plant'
  key  Plant                        as Plant,

  key  SourceListRecord             as SourceListRecord,

       @Semantics.businessDate.createdAt: true
       CreationDate                 as CreationDate,

       @Semantics.user.createdBy: true
       CreatedByUserName            as CreatedByUserName,

       @Semantics.businessDate.from: true
       ValidityStartDate            as ValidityStartDate,

       @Semantics.businessDate.to: true
       ValidityEndDate              as ValidityEndDate,

       @ObjectModel.foreignKey.association: '_Supplier'
       Supplier                     as Supplier,

       SupplierIsFixed              as SupplierIsFixed,

       PurchaseOutlineAgreement     as PurchaseOutlineAgreement,
       
       PurchaseOutlineAgreementItem as PurchaseOutlineAgreementItem,
       
       PurOutlineAgreementIsFixed   as PurOutlineAgreementIsFixed,

       @ObjectModel.foreignKey.association: '_SupplyingPlant'
       SupplyingPlant               as SupplyingPlant,

       IssgPlantIsFixed             as IssgPlantIsFixed,

       @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
       ManufacturerMaterial         as ManufacturerMaterial,

       SourceOfSupplyIsBlocked      as SourceOfSupplyIsBlocked,

       SourceOfSupplyIsFixed        as SourceOfSupplyIsFixed,

       SourceListStatus             as SourceListStatus,

       @ObjectModel.foreignKey.association: '_PurchasingOrganization'
       PurchasingOrganization       as PurchasingOrganization,

       @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
       PurchasingDocumentCategory   as PurchasingDocumentCategory,

       SourceListRecordCategory     as SourceListRecordCategory,

       MRPSourcingControl           as MRPSourcingControl,

       @ObjectModel.sapObjectNodeTypeReference: 'MRPArea'
       MRPArea                      as MRPArea,

       @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
       @Semantics.unitOfMeasure: true
       OrderQuantityUnit            as OrderQuantityUnit,

       OriginSystem                 as OriginSystem,

       @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
       InventorySpecialStockType    as InventorySpecialStockType,

       @Semantics.systemDateTime.lastChangedAt: true
       LastChangeDateTime           as LastChangeDateTime,
       
      _Product,
      _Plant,
      _Supplier,
      _PurchaseContract,
      _SupplyingPlant,
      _ManufacturerMaterial,
      _PurchasingOrganization,
      _PurchasingDocumentCategory,
      _OrderQuantityUnit,
      _InventorySpecialStockType
}
```
