---
name: I_STOREPICKINGREQUEST
description: "Store Picking Request"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value
semantic_en: "Store Picking Request"
semantic_vi: "Store Picking Request — CDS view cơ bản dựa trên rfm_st_pick_req."
keywords:
  - "store"
  - "picking"
  - "request"
  - "reference"
  - "order"
  - "document"
  - "type"
  - "planned"
  - "date"
  - "time"
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
# I_STOREPICKINGREQUEST

**Store Picking Request**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StorePickingRequest` | ✓ | |  | `storepickingrequest` | `CHAR(10)` | Store Picking Request ID |
| `StoreReferenceOrder` |  | |  | `referencestorepickuporder` | `CHAR(10)` | Order Number of the Reference Document |
| `StoreReferenceDocumentType` |  | |  | `storepickupordertype` | `CHAR(2)` | Document Type of the Reference Document |
| `StorePlannedPickingDateTime` |  | |  | `storeplannedpickingdatetime` | `DEC(21)` | Time Stamp of Store Picking Request |
| `StorePickingRequestStatus` |  | |  | `storepickingrequeststatus` | `CHAR(2)` | Store Picking Request Status |
| `HandoverShelfSpaceID` |  | |  | `handovershelfspaceid` | `CHAR(20)` | Handover Shelf Space ID |
| `UserAssignedToPickingRequest` |  | |  | `userassignedtopickingrequest` | `CHAR(12)` | User Name |
| `GrossWeight` |  | |  | `grossweight` | `QUAN(15)` | Store Picking Request Gross Weight |
| `WeightUnit` |  | |  | `weightunit` | `UNIT(3)` | Store Picking Request Gross Weight Unit of Measure |
| `GrossVolume` |  | |  | `grossvolume` | `QUAN(15)` | Store Picking Request Gross Volume |
| `VolumeUnit` |  | |  | `volumeunit` | `UNIT(3)` | Store Picking Request Gross Volume Unit of Measure |
| `RetailStoreCustomerReference` |  | | `_RetailStoreOrderBusinessData` | `RetailStoreCustomerReference` | `CHAR(35)` | Customer Reference |
| `RetailStoreExternalReference` |  | | `_RetailStoreOrderBusinessData` | `RetailStoreExternalReference` | `CHAR(12)` | Your Reference |
| `_Site` | | ✓ | | | | |
| `_RetailStoreOrderBusinessData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_RetailStoreOrderBusinessData` | `I_RetailStoreOrderBusinessData` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOREPICKINGREQUEST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTRPICKREQ'
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
//@ObjectModel.usageType: {serviceQuality: #B,dataClass: #TRANSACTIONAL,sizeCategory: #L}
@ObjectModel: {
   representativeKey: 'StorePickingRequest',
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE ,
                            #ANALYTICAL_DIMENSION
                            ],
   modelingPattern: [ #ANALYTICAL_DIMENSION ],                          
   usageType: {serviceQuality: #B,dataClass: #TRANSACTIONAL,sizeCategory: #L}
 }
 @Metadata.ignorePropagatedAnnotations:true
 @Metadata.allowExtensions:true
 @EndUserText.label: 'Store Picking Request'
 @ObjectModel.sapObjectNodeType.name:'StorePickingRequest'

define view I_StorePickingRequest as select from rfm_st_pick_req
association [1..1] to I_Site      as _Site    on  $projection.Store = _Site.Site  
association [0..1] to I_RetailStoreOrderBusinessData as _RetailStoreOrderBusinessData on $projection.StoreReferenceOrder = _RetailStoreOrderBusinessData.ReferenceStorePickUpOrder
                                                                                      and _RetailStoreOrderBusinessData.ReferenceStorePickupOrderItem = '000000'
{
@ObjectModel.foreignKey.association: '_Site'
  key store                        as Store,
  key storepickingrequest          as StorePickingRequest,
      referencestorepickuporder    as StoreReferenceOrder,
      storepickupordertype         as StoreReferenceDocumentType,
      storeplannedpickingdatetime  as StorePlannedPickingDateTime,
      storepickingrequeststatus    as StorePickingRequestStatus,
      handovershelfspaceid         as HandoverShelfSpaceID,
      userassignedtopickingrequest as UserAssignedToPickingRequest,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      grossweight                  as GrossWeight,
      @Semantics.unitOfMeasure: true
      weightunit                   as WeightUnit,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      grossvolume                  as GrossVolume,
      @Semantics.unitOfMeasure: true
      volumeunit                   as VolumeUnit, 
      _RetailStoreOrderBusinessData.RetailStoreCustomerReference as RetailStoreCustomerReference,
      _RetailStoreOrderBusinessData.RetailStoreExternalReference as RetailStoreExternalReference, 
      _RetailStoreOrderBusinessData,  
      _Site
}
```
