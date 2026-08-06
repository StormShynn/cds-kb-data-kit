---
name: I_HANDLINGUNITITEMTP
description: Handlingunititemtp
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - interface-view
  - transactional-processing
  - item-level
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# I_HANDLINGUNITITEMTP

**Handlingunititemtp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| key `Warehouse` | `Warehouse` |
| key `StockItemUUID` | `StockItemUUID` |
| `HandlingUnitItem` | `HandlingUnitItem` |
| `HandlingUnitTypeOfContent` | `HandlingUnitTypeOfContent` |
| `HandlingUnitNestedExternalID` | `HandlingUnitNestedExternalID` |
| `HandlingUnitReferenceDocument` | `HandlingUnitReferenceDocument` |
| `HandlingUnitRefDocumentItem` | `HandlingUnitRefDocumentItem` |
| `HandlingUnitQuantity` | `HandlingUnitQuantity` |
| `HandlingUnitQuantityUnit` | `HandlingUnitQuantityUnit` |
| `HandlingUnitAltUnitOfMeasure` | `HandlingUnitAltUnitOfMeasure` |
| `Material` | `Material` |
| `Batch` | `Batch` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `HandlingUnitGoodsReceiptDate` | `HandlingUnitGoodsReceiptDate` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `HandlingUnitNrOfAuxPackgMat` | `HandlingUnitNrOfAuxPackgMat` |
| `HandlingUnitNumberOfSerialNumb` | `HandlingUnitNumberOfSerialNumb` |
| `SerialNumberProfile` | `SerialNumberProfile` |
| `SpecialStockIdfgSalesOrder` | `SpecialStockIdfgSalesOrder` |
| `SpecialStockIdfgSalesOrderItem` | `SpecialStockIdfgSalesOrderItem` |
| `_HandlingUnit` | *Association* |
| `_HandlingUnitItemSerialNumber` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Handling Unit Item - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality:  #C,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   },
   semanticKey: ['HandlingUnitExternalID', 'Warehouse', 'StockItemUUID']
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_HandlingUnitItemTP
  as projection on R_HandlingUnitItemTP as HandlingUnitItem
{
  key HandlingUnitExternalID,
  key Warehouse,
  key StockItemUUID,
      HandlingUnitItem,
      //HandlingUnitInternalID,
      @EndUserText.label: 'Item Type'
      HandlingUnitTypeOfContent,
      HandlingUnitNestedExternalID,
      @EndUserText.label: 'Delivery Document'
      HandlingUnitReferenceDocument,
      @EndUserText.label: 'Delivery Document Item'
      HandlingUnitRefDocumentItem,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitQuantityUnit'
      HandlingUnitQuantity,
      @EndUserText.label: 'Packed Quantity Unit'
      HandlingUnitQuantityUnit,
      @EndUserText.label: 'Alternative Packed Quantity Unit'
      HandlingUnitAltUnitOfMeasure,
      Material,
//      MaterialName,  -> should not be part of the projection
      Batch,
      Plant,
      StorageLocation,
      @EndUserText.label: 'Also Shelf Life Exp. or Best-Before Date'
      ShelfLifeExpirationDate,
      HandlingUnitGoodsReceiptDate,
      CountryOfOrigin,
      @EndUserText.label: 'Number of Auxiliary Packaging Materials'
      HandlingUnitNrOfAuxPackgMat,
      @EndUserText.label: 'Number of Serial Numbers'
      HandlingUnitNumberOfSerialNumb,
      SerialNumberProfile,
      SpecialStockIdfgSalesOrder, 
      SpecialStockIdfgSalesOrderItem, 
      
      /* Associations */
      _HandlingUnit : redirected to parent I_HandlingUnitTP,
      _HandlingUnitItemSerialNumber : redirected to composition child I_HandlingUnitItemSerialNoTP
      }
```
