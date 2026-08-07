---
name: I_FREIGHTBOOKINGITEMTP
description: Freightbookingitemtp
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - freight
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGITEMTP

**Freightbookingitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderItemUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TranspOrdItem` |  | |  |  |
| `TranspOrdItemType` |  | |  |  |
| `TranspOrdItemCategory` |  | |  |  |
| `TranspOrdItemParentItemUUID` |  | |  |  |
| `TranspOrdItemDesc` |  | |  |  |
| `IsMainCargoItem` |  | |  |  |
| `TranspOrdItemSorting` |  | |  |  |
| `SourceStopUUID` |  | |  |  |
| `DestinationStopUUID` |  | |  |  |
| `ShipperUUID` |  | |  |  |
| `Shipper` |  | |  |  |
| `ShipperAddressID` |  | |  |  |
| `ConsigneeUUID` |  | |  |  |
| `Consignee` |  | |  |  |
| `ConsigneeAddressID` |  | |  |  |
| `FreightUnitUUID` |  | |  |  |
| `PredecessorTransportationOrder` |  | |  |  |
| `TranspBaseDocument` |  | |  |  |
| `TranspBaseDocumentType` |  | |  |  |
| `TranspBaseDocumentItem` |  | |  |  |
| `TranspBaseDocumentItemType` |  | |  |  |
| `TransportationEquipmentGroup` |  | |  |  |
| `TransportationEquipmentType` |  | |  |  |
| `TranspEquipmentIsShipperOwned` |  | |  |  |
| `TranspEquipmentPlateNumber` |  | |  |  |
| `TranspEquipRegistrationCountry` |  | |  |  |
| `TranspEquipCapacityLength` |  | |  |  |
| `TranspEquipCapacityWidth` |  | |  |  |
| `TranspEquipCapacityHeight` |  | |  |  |
| `TranspEquipCapacityUnit` |  | |  |  |
| `TranspEquipCapacityWeight` |  | |  |  |
| `TranspEquipCapacityWeightUnit` |  | |  |  |
| `TranspEquipCapacityVolume` |  | |  |  |
| `TranspEquipCapacityVolumeUnit` |  | |  |  |
| `TranspOrdItemPackageID` |  | |  |  |
| `ProductUUID` |  | |  |  |
| `ProductID` |  | |  |  |
| `MaterialFreightGroup` |  | |  |  |
| `TransportationGroup` |  | |  |  |
| `TranspOrdItmMinTemp` |  | |  |  |
| `TranspOrdItmMaxTemp` |  | |  |  |
| `TranspOrdItemTemperatureUnit` |  | |  |  |
| `TranspOrdItemQuantity` |  | |  |  |
| `TranspOrdItemQuantityUnit` |  | |  |  |
| `TranspOrdItemGrossWeight` |  | |  |  |
| `TranspOrdItemGrossWeightUnit` |  | |  |  |
| `TranspOrdItemGrossVolume` |  | |  |  |
| `TranspOrdItemGrossVolumeUnit` |  | |  |  |
| `TranspOrdItemNetWeight` |  | |  |  |
| `TranspOrdItemNetWeightUnit` |  | |  |  |
| `TranspOrdItemDngrsGdsSts` |  | |  |  |
| `I_FreightBookingTP` |  | |  | `FreightBookingItem._TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |
| `I_FreightBookingItemDocRefTP` |  | |  | `FreightBookingItem._TranspOrdItemDocRef as _FreightBookingItemDocRef : redirected to composition child I_FreightBookingItemDocRefTP` |
| `I_FreightBookingItemSealTP` |  | |  | `FreightBookingItem._TranspOrdItemSeal as _FreightBookingItemSeal : redirected to composition child I_FreightBookingItemSealTP` |
| `I_FrtBkgItemCommodityCodeTP` |  | |  | `FreightBookingItem._TranspOrdItemCommodityCode as _FrtBookingItemCommodityCode : redirected to composition child I_FrtBkgItemCommodityCodeTP` |
| `I_FrtBookingItemSerialNumberTP` |  | |  | `FreightBookingItem._TranspOrdItemSerialNumber as _FrtBookingItemSerialNumber : redirected to composition child I_FrtBookingItemSerialNumberTP` |
| `I_FreightBookingItemBatchTP` |  | |  | `FreightBookingItem._TranspOrdItemBatch as _FreightBookingItemBatch : redirected to composition child I_FreightBookingItemBatchTP` |
| `I_FrtBkgItmMainBPAdDfRpnTP` |  | |  | `FreightBookingItem._TrOrdItmMnBPAddrDfltRprstn as _FrtBkgItmMainBPAddrDfltRprstn : redirected to composition child I_FrtBkgItmMainBPAdDfRpnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TranspOrdItem'],
   representativeKey: 'TransportationOrderItemUUID',
   sapObjectNodeType.name: 'FreightBookingItem'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingItemTP
  as projection on R_TransportationOrderItemTP as FreightBookingItem
{
      /* Attributes */
      // Identification
  key TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItem,
      TranspOrdItemType,
      TranspOrdItemCategory,

      TranspOrdItemParentItemUUID,
      TranspOrdItemDesc,
      @Semantics.booleanIndicator
      IsMainCargoItem,
      TranspOrdItemSorting,

      // Locations
      SourceStopUUID,
      DestinationStopUUID,

      // Parties
      ShipperUUID,
      Shipper,
      ShipperAddressID,
      ConsigneeUUID,
      Consignee,
      ConsigneeAddressID,

      // Document References
      FreightUnitUUID,
      PredecessorTransportationOrder,
      TranspBaseDocument,
      TranspBaseDocumentType,
      TranspBaseDocumentItem,
      TranspBaseDocumentItemType,

      // Equipment Attributes
      TransportationEquipmentGroup,
      TransportationEquipmentType,
      TranspEquipmentIsShipperOwned,
      TranspEquipmentPlateNumber,
      TranspEquipRegistrationCountry,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityLength,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityWidth,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityHeight,
      TranspEquipCapacityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityWeightUnit'
      TranspEquipCapacityWeight,
      TranspEquipCapacityWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityVolumeUnit'
      TranspEquipCapacityVolume,
      TranspEquipCapacityVolumeUnit,

      // Package Attributes
      TranspOrdItemPackageID,

      // Product Attributes
      ProductUUID,
      ProductID,
      MaterialFreightGroup,
      TransportationGroup,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemTemperatureUnit'
      TranspOrdItmMinTemp,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemTemperatureUnit'
      TranspOrdItmMaxTemp,
      TranspOrdItemTemperatureUnit,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemQuantityUnit'
      TranspOrdItemQuantity,
      TranspOrdItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemGrossWeightUnit'
      TranspOrdItemGrossWeight,
      TranspOrdItemGrossWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemGrossVolumeUnit'
      TranspOrdItemGrossVolume,
      TranspOrdItemGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemNetWeightUnit'
      TranspOrdItemNetWeight,
      TranspOrdItemNetWeightUnit,

      // Status
      TranspOrdItemDngrsGdsSts,

      /* Redirections */
      FreightBookingItem._TransportationOrder        as _FreightBooking                : redirected to parent I_FreightBookingTP,
      FreightBookingItem._TranspOrdItemDocRef        as _FreightBookingItemDocRef      : redirected to composition child I_FreightBookingItemDocRefTP,
      FreightBookingItem._TranspOrdItemSeal          as _FreightBookingItemSeal        : redirected to composition child I_FreightBookingItemSealTP,
      FreightBookingItem._TranspOrdItemCommodityCode as _FrtBookingItemCommodityCode   : redirected to composition child I_FrtBkgItemCommodityCodeTP,
      FreightBookingItem._TranspOrdItemSerialNumber  as _FrtBookingItemSerialNumber    : redirected to composition child I_FrtBookingItemSerialNumberTP,
      @Semantics.valueRange.maximum: '1'
      FreightBookingItem._TranspOrdItemBatch         as _FreightBookingItemBatch       : redirected to composition child I_FreightBookingItemBatchTP,
      FreightBookingItem._TrOrdItmMnBPAddrDfltRprstn as _FrtBkgItmMainBPAddrDfltRprstn : redirected to composition child I_FrtBkgItmMainBPAdDfRpnTP,
      FreightBookingItem._ShipperAddrDfltRprstn      as _ShipperAddrDfltRprstn         : redirected to I_FrtBkgItmMainBPAdDfRpnTP,
      FreightBookingItem._ConsigneeAddrDfltRprstn    as _ConsigneeAddrDfltRprstn       : redirected to I_FrtBkgItmMainBPAdDfRpnTP      
}
where
  FreightBookingItem.TransportationOrderCategory = 'BO'
```
