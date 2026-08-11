---
name: I_STORESTOCKADJUSTMENTITEM
description: "Store Stock Adjustment Item"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value
semantic_en: "Store Stock Adjustment Item"
semantic_vi: "Store Stock Adjustment Item — CDS view cơ bản dựa trên rfm_st_stkadjitm."
keywords:
  - "store"
  - "stock"
  - "adjustment"
  - "item"
  - "product"
  - "quantity"
  - "unit"
  - "measure"
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
  - stock
---
# I_STORESTOCKADJUSTMENTITEM

**Store Stock Adjustment Item**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StoreStockAdjustmentUUID` | ✓ | |  | `storestockadjustmentuuid` | `RAW(16)` | Unique Identifier for New Stock Adjustment |
| `Product` | ✓ | |  | `product` | `CHAR(40)` | Material Number |
| `StockAdjustmentQuantity` |  | |  | `stockadjustmentquantity` | `QUAN(13)` | Stock Adjustment Quantity |
| `UnitOfMeasure` |  | |  | `unitofmeasure` | `UNIT(3)` | Base Unit of Measure |
| `ProductSalesPrice` |  | |  | `productsalesprice` | `CURR(23)` | Product Sales Price |
| `Currency` |  | |  | `currency` | `CUKY(5)` | Currency Key |
| `CostCenter` |  | |  | `costcenter` | `CHAR(10)` | Cost Center |
| `PaymentServiceProviderName` |  | |  | `paymentserviceprovidername` | `CHAR(40)` | Service Provider |
| `ProductClaimDescription` |  | |  | `productclaimdescription` | `CHAR(50)` | Comment |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Creation date and time of Stock Adjustment |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_Site` | | ✓ | | | | |
| `_StockAdjust` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_StockAdjust` | `I_StoreStockAdjustment` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENTITEM')/$value)*

```abap
@AbapCatalog.sqlViewName             : 'ISTORESTKADJITM'
@VDM: {
  viewType                           : #BASIC,
  lifecycle.contract.type            : #PUBLIC_LOCAL_API
}
@AbapCatalog.compiler.compareFilter  : true
@AbapCatalog.preserveKey             : true
@AccessControl.authorizationCheck    : #CHECK
@ClientHandling.algorithm            : #SESSION_VARIABLE

@Analytics: {
  dataCategory                       : #DIMENSION,
  internalName                       : #LOCAL,
  dataExtraction                     : {
    enabled                          : true,
    delta.changeDataCapture          : {
      automatic                      : true
    }
  }
}
@ObjectModel: {
    representativeKey                 : 'Product',
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
@ObjectModel.sapObjectNodeType.name   : 'StoreStockAdjustmentItem'
@EndUserText.label                    : 'Store Stock Adjustment Item'

define view I_StoreStockAdjustmentItem
  as select from rfm_st_stkadjitm
  association [1..1] to I_Site                 as _Site        on  $projection.Store                    = _Site.Site 
  association [1..1] to I_StoreStockAdjustment as _StockAdjust on  $projection.Store                    = _StockAdjust.Store
                                                               and $projection.StoreStockAdjustmentUUID = _StockAdjust.StoreStockAdjustmentUUID

{
  @ObjectModel.foreignKey.association: '_Site'
  key store                      as Store,
  @ObjectModel.foreignKey.association: '_StockAdjust'
  key storestockadjustmentuuid   as StoreStockAdjustmentUUID,
  key product                    as Product,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      stockadjustmentquantity    as StockAdjustmentQuantity,
      unitofmeasure              as UnitOfMeasure,
      @Semantics.amount.currencyCode: 'Currency'
      productsalesprice          as ProductSalesPrice,
      currency                   as Currency,
      costcenter                 as CostCenter,
      paymentserviceprovidername as PaymentServiceProviderName,
      productclaimdescription    as ProductClaimDescription,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime           as CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime         as LastChangeDateTime,
      _Site,
      _StockAdjust
}
```
