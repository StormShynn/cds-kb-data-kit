---
name: I_FREIGHTUNITITEMTP
description: Freightunititemtp
app_component: TM-PLN-FU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-PLN
  - TM-PLN-FU
  - interface-view
  - transactional-processing
  - freight
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITITEMTP

**Freightunititemtp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderItemUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspOrdItem` |  | |  |  |  |  |
| `TranspOrdItemType` |  | |  |  |  |  |
| `TranspOrdItemCategory` |  | |  |  |  |  |
| `TranspOrdItemParentItemUUID` |  | |  |  |  |  |
| `TranspOrdItemDesc` |  | |  |  |  |  |
| `IsMainCargoItem` |  | |  |  |  |  |
| `TranspOrdItemSorting` |  | |  |  |  |  |
| `TranspOrdItemShippingCondition` |  | |  |  |  |  |
| `SourceStopUUID` |  | |  |  |  |  |
| `DestinationStopUUID` |  | |  |  |  |  |
| `ShipperUUID` |  | |  |  |  |  |
| `Shipper` |  | |  |  |  |  |
| `ShipperAddressID` |  | |  |  |  |  |
| `ConsigneeUUID` |  | |  |  |  |  |
| `Consignee` |  | |  |  |  |  |
| `ConsigneeAddressID` |  | |  |  |  |  |
| `FreightUnitUUID` |  | |  |  |  |  |
| `TranspBaseDocument` |  | |  |  |  |  |
| `TranspBaseDocumentType` |  | |  |  |  |  |
| `TranspBaseDocumentItem` |  | |  |  |  |  |
| `TranspBaseDocumentItemType` |  | |  |  |  |  |
| `TranspOrdItemPackageID` |  | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `ProductID` |  | |  |  |  |  |
| `MaterialFreightGroup` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `TranspOrdItmMinTemp` |  | |  |  |  |  |
| `TranspOrdItmMaxTemp` |  | |  |  |  |  |
| `TranspOrdItemTemperatureUnit` |  | |  |  |  |  |
| `TranspOrdItemQuantity` |  | |  |  |  |  |
| `TranspOrdItemQuantityUnit` |  | |  |  |  |  |
| `TranspOrdItemGrossWeight` |  | |  |  |  |  |
| `TranspOrdItemGrossWeightUnit` |  | |  |  |  |  |
| `TranspOrdItemGrossVolume` |  | |  |  |  |  |
| `TranspOrdItemGrossVolumeUnit` |  | |  |  |  |  |
| `TranspOrdItemNetWeight` |  | |  |  |  |  |
| `TranspOrdItemNetWeightUnit` |  | |  |  |  |  |
| `TranspOrdItemDngrsGdsSts` |  | |  |  |  |  |
| `I_FreightUnitTP` |  | |  | `FreightUnitItem._TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP` |  |  |
| `I_FreightUnitItemDocRefTP` |  | |  | `FreightUnitItem._TranspOrdItemDocRef as _FreightUnitItemDocRef : redirected to composition child I_FreightUnitItemDocRefTP` |  |  |
| `I_FrtUnitItemCommodityCodeTP` |  | |  | `FreightUnitItem._TranspOrdItemCommodityCode as _FreightUnitItemCommodityCode : redirected to composition child I_FrtUnitItemCommodityCodeTP` |  |  |
| `I_FrtUnitItemSerialNumberTP` |  | |  | `FreightUnitItem._TranspOrdItemSerialNumber as _FreightUnitItemSerialNumber : redirected to composition child I_FrtUnitItemSerialNumberTP` |  |  |
| `I_FreightUnitItemBatchTP` |  | |  | `FreightUnitItem._TranspOrdItemBatch as _FreightUnitItemBatch : redirected to composition child I_FreightUnitItemBatchTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TranspOrdItem'],
   representativeKey: 'TransportationOrderItemUUID',
   sapObjectNodeType.name: 'FreightUnitItem'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
                                           
define view entity I_FreightUnitItemTP
  as projection on R_TransportationOrderItemTP as FreightUnitItem
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
      TranspOrdItemShippingCondition,
      
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
      TranspBaseDocument,
      TranspBaseDocumentType,
      TranspBaseDocumentItem,
      TranspBaseDocumentItemType,

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
      FreightUnitItem._TransportationOrder        as _FreightUnit                  : redirected to parent I_FreightUnitTP,
      FreightUnitItem._TranspOrdItemDocRef        as _FreightUnitItemDocRef        : redirected to composition child I_FreightUnitItemDocRefTP,
      FreightUnitItem._TranspOrdItemCommodityCode as _FreightUnitItemCommodityCode : redirected to composition child I_FrtUnitItemCommodityCodeTP,
      FreightUnitItem._TranspOrdItemSerialNumber  as _FreightUnitItemSerialNumber  : redirected to composition child I_FrtUnitItemSerialNumberTP,
      @Semantics.valueRange.maximum: '1'
      FreightUnitItem._TranspOrdItemBatch         as _FreightUnitItemBatch         : redirected to composition child I_FreightUnitItemBatchTP
}
where FreightUnitItem.TransportationOrderCategory = 'FU'
```
