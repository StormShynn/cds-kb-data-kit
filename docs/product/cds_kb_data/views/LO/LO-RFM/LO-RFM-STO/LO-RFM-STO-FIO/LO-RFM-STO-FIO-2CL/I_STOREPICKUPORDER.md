---
name: I_STOREPICKUPORDER
description: "Store Pickup Order"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value
semantic_en: "Store Pickup Order"
semantic_vi: "Store Pickup Order — CDS view cơ bản dựa trên rfm_st_pick_ord."
keywords:
  - "store"
  - "pickup"
  - "order"
  - "pick"
  - "expd"
  - "handover"
  - "customer"
  - "picking"
  - "status"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - order
---
# I_STOREPICKUPORDER

**Store Pickup Order**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StorePickUpOrder` | ✓ | |  | `storepickuporder` | `CHAR(10)` | Store Pickup Order |
| `StoreOrderExpdHandoverDteTme` |  | |  | `storeorderexpdhandoverdtetme` | `DEC(21)` | Expected Date and Time of Order Handover |
| `Customer` |  | | `_SalesOrder` | `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `StoreOrderPickingStatus` |  | |  | `storeorderpickingstatus` | `CHAR(2)` | Order Picking Status |
| `StoreOrderPaymentStatus` |  | |  | `storeorderpaymentstatus` | `CHAR(1)` | Store Pickup Order Payment Status |
| `StoreOrderOverallStatus` |  | |  | `storeorderoverallstatus` | `CHAR(1)` | Pickup Order Overall Status |
| `StoreOrderRejectionReason` |  | |  | `storeorderrejectionreason` | `CHAR(2)` | Store Pickup Order Rejection Reason |
| `NmbrOfFullyPickedItems` |  | |  | `nmbroffullypickeditems` | `CHAR(6)` | Number of Fully Picked Items |
| `NmbrOfPartiallyPickedItems` |  | |  | `nmbrofpartiallypickeditems` | `CHAR(6)` | Count of Partially Picked Items in Store |
| `NmbrOfUnavailableItems` |  | |  | `nmbrofunavailableitems` | `CHAR(6)` | Count of Unavailable Items in Store |
| `StorePickUpOrderIsSubstnEnbld` |  | |  | `storepickuporderissubstnenbld` | `CHAR(1)` | Substitution Preference for Store Pickup Order |
| `NmbrOfSubstitutedItems` |  | |  | `nmbrofsubstituteditems` | `CHAR(6)` | Count of Substituted Items |
| `_SalesOrder` | | ✓ | | | | |
| `_Site` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_Site` | `I_Site` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKUPORDER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTPICKUPORD'
//@VDM.viewType: #BASIC
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
} 
@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics:{
    dataCategory: #DIMENSION,
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true ,
        delta.changeDataCapture: {
                         mapping:[
                                   {
                                      table: 'rfm_st_pick_ord', role: #MAIN,
                                            viewElement: ['Store', 'StorePickUpOrder'],
                                            tableElement: ['store', 'storepickuporder']  
                                   } 
                                  ]
        } 
    }
} 

//@ObjectModel.usageType: {serviceQuality: #C,dataClass: #TRANSACTIONAL,sizeCategory: #XL}
@ObjectModel: {
   representativeKey: 'StorePickUpOrder',
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE, 
                            #ANALYTICAL_DIMENSION
                            ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ],                         
   usageType: {serviceQuality: #C,dataClass: #TRANSACTIONAL,sizeCategory: #XL}
 }
 @EndUserText.label: 'Store Pickup Order'
 @Metadata.ignorePropagatedAnnotations:true
 @Metadata.allowExtensions:true
 @ObjectModel.sapObjectNodeType.name: 'StorePickupOrder'
 
define view I_StorePickupOrder  as select from rfm_st_pick_ord as StorePickupOrder
//rfm_st_pick_ord need to be replaced rtst_pp_orders
association [1..1] to I_SalesOrder   as _SalesOrder   on $projection.StorePickUpOrder   = _SalesOrder.SalesOrder
association [1..1] to I_Site                   as _Site    on  $projection.Store = _Site.Site
{
@ObjectModel.foreignKey.association: '_Site'
key StorePickupOrder.store                             as Store,
key StorePickupOrder.storepickuporder                  as StorePickUpOrder,
    StorePickupOrder.storeorderexpdhandoverdtetme      as StoreOrderExpdHandoverDteTme,
    _SalesOrder.SoldToParty                            as Customer,
    StorePickupOrder.storeorderpickingstatus           as StoreOrderPickingStatus,
    StorePickupOrder.storeorderpaymentstatus           as StoreOrderPaymentStatus,
    StorePickupOrder.storeorderoverallstatus           as StoreOrderOverallStatus,
    StorePickupOrder.storeorderrejectionreason         as StoreOrderRejectionReason,
//    StorePickupOrder.storeresvnhndovrreason            as StoreResvnHndovrReason,
    StorePickupOrder.nmbroffullypickeditems            as NmbrOfFullyPickedItems,
    StorePickupOrder.nmbrofpartiallypickeditems        as NmbrOfPartiallyPickedItems,
    StorePickupOrder.nmbrofunavailableitems            as NmbrOfUnavailableItems,
    @Semantics.booleanIndicator: true
    StorePickupOrder.storepickuporderissubstnenbld     as StorePickUpOrderIsSubstnEnbld,
    StorePickupOrder.nmbrofsubstituteditems            as NmbrOfSubstitutedItems,
    _SalesOrder,
    _Site
 
 }
 where _SalesOrder._SoldToParty.IsBusinessPurposeCompleted = ''
```
