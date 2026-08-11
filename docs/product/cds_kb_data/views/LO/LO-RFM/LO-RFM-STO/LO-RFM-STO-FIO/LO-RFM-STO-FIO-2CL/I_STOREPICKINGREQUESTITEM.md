---
name: I_STOREPICKINGREQUESTITEM
description: "Store Picking Request Item"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value
semantic_en: "Store Picking Request Item"
semantic_vi: "Store Picking Request Item — CDS view cơ bản dựa trên rfm_st_pick_reqi."
keywords:
  - "store"
  - "picking"
  - "request"
  - "item"
  - "product"
  - "requested"
  - "quantity"
tags:
  - LO
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
---
# I_STOREPICKINGREQUESTITEM

**Store Picking Request Item**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StorePickingRequest` | ✓ | |  | `storepickingrequest` | `CHAR(10)` | Store Picking Request ID |
| `StorePickingRequestItem` | ✓ | |  | `storepickingrequestitem` | `NUMC(6)` | Store Picking Request Item ID |
| `Product` |  | |  | `product` | `CHAR(40)` | Material Number |
| `RequestedQuantity` |  | |  | `requestedquantity` | `QUAN(13)` | Requested Item Quantity |
| `ProductPickedQuantity` |  | |  | `productpickedquantity` | `QUAN(13)` | Picked Item Quantity |
| `UnitOfMeasure` |  | |  | `unitofmeasure` | `UNIT(3)` | Base Unit of Measure |
| `StorePickingRequestItemStatus` |  | |  | `storepickingrequestitemstatus` | `CHAR(2)` | Store Picking Request Item Status |
| `StoreReferenceOrder` |  | |  | `referencestorepickuporder` | `CHAR(10)` | Order Number of the Reference Document |
| `StoreReferenceOrderItem` |  | |  | `referencestorepickuporderitem` | `NUMC(6)` | Item Number of the Reference Document |
| `StoreItemOverallStatus` |  | |  | `storeitemoverallstatus` | `CHAR(1)` | Store Picking Request Item Overall Status |
| `RequestedStorePickingReqItem` |  | |  | `requestedstorepickingreqitem` | `NUMC(6)` | Requested Item Number of Substitute Product |
| `StorePkngReqItemIsSubstituted` |  | |  | `storepkngreqitemissubstituted` | `CHAR(1)` | Substitution Flag for Store Picking Request Item |
| `ProductRemainingQuantity` |  | |  | `productremainingquantity` | `QUAN(13)` | Remaining Quantity |
| `RetailStoreProdIsPickingCmpltd` |  | |  | `retailstoreprodispickingcmpltd` | `CHAR(1)` | Picking completed flag for Store Picking Request Item |
| `RetailStoreProdIsNonStock` |  | |  | `retailstoreprodisnonstock` | `CHAR(1)` | Retail Store Non Stock Product flag |
| `StorePkngReqItemIsHigherLvl` |  | |  | `storepkngreqitemishigherlvl` | `CHAR(1)` | Higher Level Item Flag for Store Picking Request Item |
| `RetailStoreProductIsEmpties` |  | |  | `retailstoreproductisempties` | `CHAR(1)` | Retail Store Empties Product Flag |
| `_Site` | | ✓ | | | | |
| `_StorePickingRequest` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_StorePickingRequest` | `I_StorePickingRequest` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUESTITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTRPICKITEM'
//@VDM.viewType: #BASIC
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics:{
    dataCategory: #DIMENSION,
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}
//@ObjectModel.usageType: {serviceQuality: #B,dataClass: #TRANSACTIONAL,sizeCategory: #XL}
@ObjectModel: {
   representativeKey: 'StorePickingRequestItem',
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE ,
                            #ANALYTICAL_DIMENSION
                            ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ],
   usageType: {serviceQuality: #B,dataClass: #TRANSACTIONAL,sizeCategory: #XL}
 }
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name : 'StorePickingRequestItem'

@EndUserText.label: 'Store Picking Request Item'

define view I_StorePickingRequestItem
  as select from rfm_st_pick_reqi
  association [1..1] to I_Site                as _Site                on  $projection.Store = _Site.Site
  association [1..1] to I_StorePickingRequest as _StorePickingRequest on  $projection.Store               = _StorePickingRequest.Store
                                                                      and $projection.StorePickingRequest = _StorePickingRequest.StorePickingRequest
{
      @ObjectModel.foreignKey.association: '_Site'
  key store                          as Store,
      @ObjectModel.foreignKey.association: '_StorePickingRequest'
  key storepickingrequest            as StorePickingRequest,
  key storepickingrequestitem        as StorePickingRequestItem,
      product                        as Product,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      requestedquantity              as RequestedQuantity,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      productpickedquantity          as ProductPickedQuantity,
      @Semantics.unitOfMeasure: true
      unitofmeasure                  as UnitOfMeasure,
      storepickingrequestitemstatus  as StorePickingRequestItemStatus,
      referencestorepickuporder      as StoreReferenceOrder,
      referencestorepickuporderitem  as StoreReferenceOrderItem,
      storeitemoverallstatus         as StoreItemOverallStatus,
      requestedstorepickingreqitem   as RequestedStorePickingReqItem,
      @Semantics.booleanIndicator: true
      storepkngreqitemissubstituted  as StorePkngReqItemIsSubstituted,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      productremainingquantity       as ProductRemainingQuantity,
      @Semantics.booleanIndicator: true
      retailstoreprodispickingcmpltd as RetailStoreProdIsPickingCmpltd,
      @Semantics.booleanIndicator: true
      retailstoreprodisnonstock      as RetailStoreProdIsNonStock,
      @Semantics.booleanIndicator: true
      storepkngreqitemishigherlvl    as StorePkngReqItemIsHigherLvl,
      @Semantics.booleanIndicator: true
      retailstoreproductisempties    as RetailStoreProductIsEmpties,
      _Site,
      _StorePickingRequest
}
```
