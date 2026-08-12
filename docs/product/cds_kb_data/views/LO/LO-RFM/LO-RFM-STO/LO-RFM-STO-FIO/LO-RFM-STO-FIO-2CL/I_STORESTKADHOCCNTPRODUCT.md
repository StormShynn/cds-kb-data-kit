---
name: I_STORESTKADHOCCNTPRODUCT
description: "Store Stock Ad hoc Count Product"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value
semantic_en: "Store Stock Ad hoc Count Product"
semantic_vi: "Store Stock Ad hoc Count Product — CDS view cơ bản dựa trên rfm_st_stkcntprd."
keywords:
  - "store"
  - "stock"
  - "hoc"
  - "count"
  - "product"
  - "adhoc"
  - "physical"
  - "inventory"
  - "type"
  - "creation"
  - "date"
  - "time"
tags:
  - LO
  - bo:inventory
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - product
  - stock
---
# I_STORESTKADHOCCNTPRODUCT

**Store Stock Ad hoc Count Product**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StoreStockAdhocCountUUID` | ✓ | |  | `storestockadhoccountuuid` | `RAW(16)` | Unique identifier for New Store Stock Ad hoc Count |
| `StoreStockAdhocCntProduct` | ✓ | |  | `storestockadhoccntproduct` | `CHAR(40)` | Store Stock Ad hoc Count Product |
| `PhysicalInventoryStockType` |  | |  | `physicalinventorystocktype` | `CHAR(1)` | Stock type |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Creation date and time of stock count |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | Changed date and time |
| `BaseUnit` |  | | `_Product` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `GlobalTradeItemNumber` |  | |  | `globaltradeitemnumber` | `CHAR(18)` | International Article Number (EAN/UPC) |
| `_Site` | | ✓ | | | | |
| `_StkAdhocCnt` | | ✓ | | | | |
| `_StkAdhocCntProdLocUoM` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_StkType` | | ✓ | | | | |
| `_UoMDimnDet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_StkAdhocCnt` | `I_StoreStockAdhocCount` | [1] |
| `_StkAdhocCntProdLocUoM` | `I_StoreStkAdhocCntProdLocUoM` | [0..*] |
| `_Product` | `I_Product` | [0..1] |
| `_StkType` | `I_PhysInvtryStockType` | [0..1] |
| `_UoMDimnDet` | `I_UnitOfMeasureDimnPrecision` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTKADHOCCNTPRODUCT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory  : [#NONE]
@AccessControl.authorizationCheck     : #CHECK
@VDM: {
  viewType                            : #BASIC,
  lifecycle.contract.type             : #PUBLIC_LOCAL_API
}
@Analytics: {
  dataCategory                        : #DIMENSION,
  internalName                        : #LOCAL,
  dataExtraction                      : {
    enabled                           : true,
    delta.changeDataCapture           : {
      automatic                       : true
    }
  }
}
@ObjectModel: {
    representativeKey                 : 'StoreStockAdhocCntProduct',
    usageType.serviceQuality          : #A,
    usageType.sizeCategory            : #L,
    usageType.dataClass               : #TRANSACTIONAL,
    supportedCapabilities             : [ #SQL_DATA_SOURCE,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #EXTRACTION_DATA_SOURCE ,
                                          #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                    :  #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations : true
@Metadata.allowExtensions             : true
@ObjectModel.sapObjectNodeType.name   : 'StoreStkAdhocCntProduct'
@EndUserText.label                    : 'Store Stock Ad hoc Count Product'

define view entity I_StoreStkAdhocCntProduct
  as select from rfm_st_stkcntprd
  association [1..1] to I_Site                       as _Site                  on  $projection.Store = _Site.Site
  association [1]    to I_StoreStockAdhocCount       as _StkAdhocCnt           on  $projection.Store                    = _StkAdhocCnt.Store
                                                                               and $projection.StoreStockAdhocCountUUID = _StkAdhocCnt.StoreStockAdhocCountUUID

  association [0..*] to I_StoreStkAdhocCntProdLocUoM as _StkAdhocCntProdLocUoM on  $projection.Store                     = _StkAdhocCntProdLocUoM.Store
                                                                               and $projection.StoreStockAdhocCountUUID  = _StkAdhocCntProdLocUoM.StoreStockAdhocCountUUID
                                                                               and $projection.StoreStockAdhocCntProduct = _StkAdhocCntProdLocUoM.StoreStockAdhocCntProduct

  association [0..1] to I_Product                    as _Product               on  $projection.StoreStockAdhocCntProduct = _Product.Product

  association [0..1] to I_PhysInvtryStockType        as _StkType               on  $projection.PhysicalInventoryStockType = _StkType.PhysicalInventoryStockType

  association [1..1] to I_UnitOfMeasureDimnPrecision as _UoMDimnDet            on  $projection.baseunit = _UoMDimnDet.UnitOfMeasure
{
      @ObjectModel.foreignKey.association: '_Site'
  key store                      as Store,
      @ObjectModel.foreignKey.association: '_StkAdhocCnt'
  key storestockadhoccountuuid   as StoreStockAdhocCountUUID,
  key storestockadhoccntproduct  as StoreStockAdhocCntProduct,
      @ObjectModel.foreignKey.association: '_StkType'
      physicalinventorystocktype as PhysicalInventoryStockType,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime           as CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime         as LastChangeDateTime,
      //      _MaxLoc.StoreStkAdhocCntProdMaxLocVal as StoreStkAdhocCntProdMaxLocVal,
      _Product.BaseUnit,
      globaltradeitemnumber      as GlobalTradeItemNumber,

      /* Associations */
      _Site,
      _StkAdhocCnt,
      _StkAdhocCntProdLocUoM,
      _Product,
      _StkType,
      _UoMDimnDet
}
```
