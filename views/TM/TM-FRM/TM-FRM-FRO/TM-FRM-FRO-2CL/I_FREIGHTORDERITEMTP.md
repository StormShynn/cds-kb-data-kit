---
name: I_FREIGHTORDERITEMTP
description: Freightorderitemtp
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - freight
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERITEMTP

**Freightorderitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `TranspOrdShptItemRefUUID` |  | |  |  |
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
| `I_FreightOrderTP` |  | |  | `FreightOrderItem._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |
| `I_FreightOrderItemDocRefTP` |  | |  | `FreightOrderItem._TranspOrdItemDocRef as _FreightOrderItemDocRef : redirected to composition child I_FreightOrderItemDocRefTP` |
| `I_FreightOrderItemSealTP` |  | |  | `FreightOrderItem._TranspOrdItemSeal as _FreightOrderItemSeal : redirected to composition child I_FreightOrderItemSealTP` |
| `I_FrtOrderItemCommodityCodeTP` |  | |  | `FreightOrderItem._TranspOrdItemCommodityCode as _FrtOrderItemCommodityCode : redirected to composition child I_FrtOrderItemCommodityCodeTP` |
| `I_FrtOrderItemSerialNumberTP` |  | |  | `FreightOrderItem._TranspOrdItemSerialNumber as _FreightOrderItemSerialNumber : redirected to composition child I_FrtOrderItemSerialNumberTP` |
| `I_FreightOrderItemBatchTP` |  | |  | `FreightOrderItem._TranspOrdItemBatch as _FreightOrderItemBatch : redirected to composition child I_FreightOrderItemBatchTP` |
| `I_FrtOrdItmMainBPAdDfRpnTP` |  | |  | `FreightOrderItem._TrOrdItmMnBPAddrDfltRprstn as _FrtOrdItmMainBPAddrDfltRprstn : redirected to composition child I_FrtOrdItmMainBPAdDfRpnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Item - TP'
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
   sapObjectNodeType.name: 'FreightOrderItem'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderItemTP
  as projection on R_TransportationOrderItemTP as FreightOrderItem
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
      TranspOrdShptItemRefUUID,

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
      FreightOrderItem._TransportationOrder        as _FreightOrder                  : redirected to parent I_FreightOrderTP,
      FreightOrderItem._TranspOrdItemDocRef        as _FreightOrderItemDocRef        : redirected to composition child I_FreightOrderItemDocRefTP,
      FreightOrderItem._TranspOrdItemSeal          as _FreightOrderItemSeal          : redirected to composition child I_FreightOrderItemSealTP,
      FreightOrderItem._TranspOrdItemCommodityCode as _FrtOrderItemCommodityCode     : redirected to composition child I_FrtOrderItemCommodityCodeTP,
      FreightOrderItem._TranspOrdItemSerialNumber  as _FreightOrderItemSerialNumber  : redirected to composition child I_FrtOrderItemSerialNumberTP,
      @Semantics.valueRange.maximum: '1'
      FreightOrderItem._TranspOrdItemBatch         as _FreightOrderItemBatch         : redirected to composition child I_FreightOrderItemBatchTP,
      FreightOrderItem._TrOrdItmMnBPAddrDfltRprstn as _FrtOrdItmMainBPAddrDfltRprstn : redirected to composition child I_FrtOrdItmMainBPAdDfRpnTP,
      FreightOrderItem._ShipperAddrDfltRprstn      as _ShipperAddrDfltRprstn         : redirected to I_FrtOrdItmMainBPAdDfRpnTP,
      FreightOrderItem._ConsigneeAddrDfltRprstn    as _ConsigneeAddrDfltRprstn       : redirected to I_FrtOrdItmMainBPAdDfRpnTP
}
where
  FreightOrderItem.TransportationOrderCategory = 'TO'
```
