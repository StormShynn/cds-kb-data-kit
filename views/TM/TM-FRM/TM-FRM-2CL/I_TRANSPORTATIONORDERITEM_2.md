---
name: I_TRANSPORTATIONORDERITEM_2
description: Transportationorderitem 2
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - transport
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORTATIONORDERITEM_2

**Transportationorderitem 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
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
| `PredecessorTransportationOrder` |  | |  |  |  |  |
| `PrdcssrTranspOrderItemUUID` |  | |  |  |  |  |
| `TranspBaseDocument` |  | |  |  |  |  |
| `TranspBaseDocumentType` |  | |  |  |  |  |
| `TranspBaseDocumentItem` |  | |  |  |  |  |
| `TranspBaseDocumentItemType` |  | |  |  |  |  |
| `TranspOrdShptItemRefUUID` |  | |  |  |  |  |
| `TransportationEquipmentGroup` |  | |  |  |  |  |
| `TransportationEquipmentType` |  | |  |  |  |  |
| `TranspEquipmentIsShipperOwned` |  | |  |  |  |  |
| `TranspEquipmentPlateNumber` |  | |  |  |  |  |
| `TranspEquipRegistrationCountry` |  | |  |  |  |  |
| `TranspEquipCapacityLength` |  | |  |  |  |  |
| `TranspEquipCapacityWidth` |  | |  |  |  |  |
| `TranspEquipCapacityHeight` |  | |  |  |  |  |
| `TranspEquipCapacityUnit` |  | |  |  |  |  |
| `TranspEquipCapacityWeight` |  | |  |  |  |  |
| `TranspEquipCapacityWeightUnit` |  | |  |  |  |  |
| `TranspEquipCapacityVolume` |  | |  |  |  |  |
| `TranspEquipCapacityVolumeUnit` |  | |  |  |  |  |
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
| `TranspOrdItemLength` |  | |  |  |  |  |
| `TranspOrdItemWidth` |  | |  |  |  |  |
| `TranspOrdItemHeight` |  | |  |  |  |  |
| `TranspOrdItemLengthUnit` |  | |  |  |  |  |
| `TranspOrdItemPalletSpacesQty` |  | |  |  |  |  |
| `TranspOrdItemPalletSpacesUnit` |  | |  |  |  |  |
| `TranspOrdItemGoodsValueAmount` |  | |  |  |  |  |
| `TranspOrdItemGoodsValueCrcy` |  | |  |  |  |  |
| `TranspOrdItemInsurableValAmt` |  | |  |  |  |  |
| `TranspOrdItemInsurableValCrcy` |  | |  |  |  |  |
| `TranspOrdItemDngrsGdsSts` |  | |  |  |  |  |
| `_PrdcssrTransportationOrder` | | ✓ | | | | |
| `_PrdcssrTranspOrderItemUUID` | | ✓ | | | | |
| `_FreightUnit` | | ✓ | | | | |
| `_TranspOrdItemParentItem` | | ✓ | | | | |
| `_SourceStop` | | ✓ | | | | |
| `_DestinationStop` | | ✓ | | | | |
| `_Consignee` | | ✓ | | | | |
| `_Shipper` | | ✓ | | | | |
| `_TranspOrdItemType` | | ✓ | | | | |
| `_TranspOrdItemCategory` | | ✓ | | | | |
| `_TranspOrdItemGrossWeightUnit` | | ✓ | | | | |
| `_TranspOrdItemGrossVolumeUnit` | | ✓ | | | | |
| `_TranspOrdItemNetWeightUnit` | | ✓ | | | | |
| `_TranspOrdItemQuantityUnit` | | ✓ | | | | |
| `_TranspOrdItemTemperatureUnit` | | ✓ | | | | |
| `_TranspOrdItemCapacityUnit` | | ✓ | | | | |
| `_TranspOrdItmCapGrossVolUnit` | | ✓ | | | | |
| `_TranspOrdItmCapGrossWeightUnt` | | ✓ | | | | |
| `_TranspOrdItemLengthUnit` | | ✓ | | | | |
| `_TranspOrdItemPalletSpacesUnit` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_BusTransDocTypeCode` | | ✓ | | | | |
| `_BusTransDocItemTypeCode` | | ✓ | | | | |
| `_TranspOrdItemDngrsGdsStatus` | | ✓ | | | | |
| `_TranspOrdItemGoodsValueCrcy` | | ✓ | | | | |
| `_TranspOrdItemInsurableValCrcy` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_TransportationOrder` | | ✓ | | | | |
| `_TranspOrdItemSeal` | | ✓ | | | | |
| `_TranspOrdItemDocRef` | | ✓ | | | | |
| `_TranspOrdItemCommodityCode` | | ✓ | | | | |
| `_TranspOrdItemBatch` | | ✓ | | | | |
| `_TranspOrdItemSerialNumber` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrdcssrTransportationOrder` | `I_TransportationOrder_2` | [0..1] |
| `_PrdcssrTranspOrderItemUUID` | `I_TransportationOrderItem_2` | [0..1] |
| `_FreightUnit` | `I_TransportationOrder_2` | [0..1] |
| `_TranspOrdItemParentItem` | `I_TransportationOrderItem_2` | [0..1] |
| `_SourceStop` | `I_TransportationOrderStop_2` | [0..1] |
| `_DestinationStop` | `I_TransportationOrderStop_2` | [0..1] |
| `_Consignee` | `I_BusinessPartner` | [0..1] |
| `_Shipper` | `I_BusinessPartner` | [0..1] |
| `_TranspOrdItemType` | `I_TranspOrdItemType_2` | [0..1] |
| `_TranspOrdItemCategory` | `I_TranspOrdItemCategory_2` | [0..1] |
| `_TranspOrdItemGrossWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemGrossVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemNetWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemTemperatureUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemCapacityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItmCapGrossVolUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItmCapGrossWeightUnt` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdItemLengthUnit` | `I_UnitOfMeasure` | [1..1] |
| `_TranspOrdItemPalletSpacesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TransportationGroup` | `I_TransportationGroup` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_BusTransDocTypeCode` | `I_BusTransDocTypeCode` | [0..1] |
| `_BusTransDocItemTypeCode` | `I_BusTransDocItemTypeCode` | [0..1] |
| `_TranspOrdItemDngrsGdsStatus` | `I_TranspOrdDngrsGdsStatus` | [0..1] |
| `_TranspOrdItemGoodsValueCrcy` | `I_Currency` | [0..1] |
| `_TranspOrdItemInsurableValCrcy` | `I_Currency` | [0..1] |
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_Extension` | `E_TransportationOrderItem` | [1] |

## Source Code

```abap
@EndUserText:   { label:              'Transportation Order Item'}
@ObjectModel:   { sapObjectNodeType.name: 'TransportationOrderItem',
                  representativeKey:  'TransportationOrderItemUUID',
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #XL,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                  modelingPattern: #ANALYTICAL_DIMENSION }
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API}
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking:#('TRANSACTIONAL_DATA') }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TransportationOrderItem_2
  as select from R_TransportationOrderItem as item
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrder_2 as _TransportationOrder           on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID

  composition [0..*] of I_TranspOrdItemSeal            as _TranspOrdItemSeal
  composition [0..*] of I_TranspOrdItemDocRef          as _TranspOrdItemDocRef
  composition [0..*] of I_TranspOrdItemCommodityCode   as _TranspOrdItemCommodityCode
  composition [0..*] of I_TranspOrdItemBatch           as _TranspOrdItemBatch
  composition [0..*] of I_TranspOrdItemSerialNumber    as _TranspOrdItemSerialNumber

  association [0..1] to I_TransportationOrder_2        as _PrdcssrTransportationOrder    on $projection.PredecessorTransportationOrder = _PrdcssrTransportationOrder.TransportationOrderUUID
  association [0..1] to I_TransportationOrderItem_2    as _PrdcssrTranspOrderItemUUID    on $projection.PrdcssrTranspOrderItemUUID = _PrdcssrTranspOrderItemUUID.TransportationOrderItemUUID
  association [0..1] to I_TransportationOrder_2        as _FreightUnit                   on $projection.FreightUnitUUID = _FreightUnit.TransportationOrderUUID
  association [0..1] to I_TransportationOrderItem_2    as _TranspOrdItemParentItem       on $projection.TranspOrdItemParentItemUUID = _TranspOrdItemParentItem.TransportationOrderItemUUID
  association [0..1] to I_TransportationOrderStop_2    as _SourceStop                    on $projection.SourceStopUUID = _SourceStop.TransportationOrderStopUUID
  association [0..1] to I_TransportationOrderStop_2    as _DestinationStop               on $projection.DestinationStopUUID = _DestinationStop.TransportationOrderStopUUID
  association [0..1] to I_BusinessPartner              as _Consignee                     on $projection.Consignee = _Consignee.BusinessPartner
  association [0..1] to I_BusinessPartner              as _Shipper                       on $projection.Shipper = _Shipper.BusinessPartner

  /* Foreign Key and Text Associations */
  association [0..1] to I_TranspOrdItemType_2          as _TranspOrdItemType             on $projection.TranspOrdItemType = _TranspOrdItemType.TranspOrdItemType
  association [0..1] to I_TranspOrdItemCategory_2      as _TranspOrdItemCategory         on $projection.TranspOrdItemCategory = _TranspOrdItemCategory.TranspOrdItemCategory
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemGrossWeightUnit  on $projection.TranspOrdItemGrossWeightUnit = _TranspOrdItemGrossWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemGrossVolumeUnit  on $projection.TranspOrdItemGrossVolumeUnit = _TranspOrdItemGrossVolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemNetWeightUnit    on $projection.TranspOrdItemNetWeightUnit = _TranspOrdItemNetWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemQuantityUnit     on $projection.TranspOrdItemQuantityUnit = _TranspOrdItemQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemTemperatureUnit  on $projection.TranspOrdItemTemperatureUnit = _TranspOrdItemTemperatureUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemCapacityUnit     on $projection.TranspEquipCapacityUnit = _TranspOrdItemCapacityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItmCapGrossVolUnit   on $projection.TranspEquipCapacityVolumeUnit = _TranspOrdItmCapGrossVolUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItmCapGrossWeightUnt on $projection.TranspEquipCapacityWeightUnit = _TranspOrdItmCapGrossWeightUnt.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _TranspOrdItemLengthUnit       on $projection.TranspOrdItemLengthUnit = _TranspOrdItemLengthUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _TranspOrdItemPalletSpacesUnit on $projection.TranspOrdItemPalletSpacesUnit = _TranspOrdItemPalletSpacesUnit.UnitOfMeasure
  association [0..1] to I_TransportationGroup          as _TransportationGroup           on $projection.TransportationGroup = _TransportationGroup.TransportationGroup
  association [0..1] to I_Product                      as _Product                       on $projection.ProductID = _Product.Product
  association [0..1] to I_BusTransDocTypeCode          as _BusTransDocTypeCode           on $projection.TranspBaseDocumentType = _BusTransDocTypeCode.BusinessTransactionDocType
  association [0..1] to I_BusTransDocItemTypeCode      as _BusTransDocItemTypeCode       on $projection.TranspBaseDocumentItemType = _BusTransDocItemTypeCode.BusinessTransacDocItmTypeCode
  association [0..1] to I_TranspOrdDngrsGdsStatus      as _TranspOrdItemDngrsGdsStatus   on $projection.TranspOrdItemDngrsGdsSts = _TranspOrdItemDngrsGdsStatus.TranspOrderDngrsGdsSts
  association [0..1] to I_Currency                     as _TranspOrdItemGoodsValueCrcy   on $projection.TranspOrdItemGoodsValueCrcy = _TranspOrdItemGoodsValueCrcy.Currency
  association [0..1] to I_Currency                     as _TranspOrdItemInsurableValCrcy on $projection.TranspOrdItemInsurableValCrcy = _TranspOrdItemInsurableValCrcy.Currency
  association [0..1] to I_ShippingCondition            as _ShippingCondition             on $projection.TranspOrdItemShippingCondition = _ShippingCondition.ShippingCondition

  association [1]    to E_TransportationOrderItem      as _Extension                     on $projection.TransportationOrderItemUUID = _Extension.TransportationOrderItemUUID
{
      /* Attributes */
      // Identification
      @ObjectModel.text.element:  [ 'TranspOrdItemDesc' ]
  key TransportationOrderItemUUID    as TransportationOrderItemUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      TransportationOrderUUID        as TransportationOrderUUID,
      TranspOrdItem                  as TranspOrdItem,
      @ObjectModel.foreignKey.association: '_TranspOrdItemType'
      TranspOrdItemType              as TranspOrdItemType,
      @ObjectModel.foreignKey.association: '_TranspOrdItemCategory'
      TranspOrdItemCategory          as TranspOrdItemCategory,

      @ObjectModel.foreignKey.association: '_TranspOrdItemParentItem'
      TranspOrdItemParentItemUUID    as TranspOrdItemParentItemUUID,
      @Semantics.text: true
      TranspOrdItemDesc              as TranspOrdItemDesc,
      @Semantics.booleanIndicator:true
      IsMainCargoItem                as IsMainCargoItem,
      TranspOrdItemSorting           as TranspOrdItemSorting,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      TranspOrdItemShippingCondition as TranspOrdItemShippingCondition,

      // Locations
      @ObjectModel.foreignKey.association: '_SourceStop'
      SourceStopUUID                 as SourceStopUUID,
      @ObjectModel.foreignKey.association: '_DestinationStop'
      DestinationStopUUID            as DestinationStopUUID,

      // Parties
      ShipperUUID                    as ShipperUUID,
      @ObjectModel.foreignKey.association: '_Shipper'
      Shipper                        as Shipper,
      ShipperAddressID               as ShipperAddressID,
      ConsigneeUUID                  as ConsigneeUUID,
      @ObjectModel.foreignKey.association: '_Consignee'
      Consignee                      as Consignee,
      ConsigneeAddressID             as ConsigneeAddressID,

      // Document References
      @ObjectModel.foreignKey.association: '_FreightUnit'
      FreightUnitUUID                as FreightUnitUUID,
      @ObjectModel.foreignKey.association: '_PrdcssrTransportationOrder'
      PredecessorTransportationOrder as PredecessorTransportationOrder,
      @ObjectModel.foreignKey.association: '_PrdcssrTranspOrderItemUUID'
      PrdcssrTranspOrderItemUUID     as PrdcssrTranspOrderItemUUID,
      TranspBaseDocument             as TranspBaseDocument,
      @ObjectModel.foreignKey.association: '_BusTransDocTypeCode'
      TranspBaseDocumentType         as TranspBaseDocumentType,
      TranspBaseDocumentItem         as TranspBaseDocumentItem,
      @ObjectModel.foreignKey.association: '_BusTransDocItemTypeCode'
      TranspBaseDocumentItemType     as TranspBaseDocumentItemType,
      TranspOrdShptItemRefUUID       as TranspOrdShptItemRefUUID,

      // Equipment Attributes
      TransportationEquipmentGroup   as TransportationEquipmentGroup,
      TransportationEquipmentType    as TransportationEquipmentType,
      TranspEquipmentIsShipperOwned  as TranspEquipmentIsShipperOwned,
      TranspEquipmentPlateNumber     as TranspEquipmentPlateNumber,
      TranspEquipRegistrationCountry as TranspEquipRegistrationCountry,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityLength      as TranspEquipCapacityLength,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityWidth       as TranspEquipCapacityWidth,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityUnit'
      TranspEquipCapacityHeight      as TranspEquipCapacityHeight,
      TranspEquipCapacityUnit        as TranspEquipCapacityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityWeightUnit'
      TranspEquipCapacityWeight      as TranspEquipCapacityWeight,
      TranspEquipCapacityWeightUnit  as TranspEquipCapacityWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspEquipCapacityVolumeUnit'
      TranspEquipCapacityVolume      as TranspEquipCapacityVolume,
      TranspEquipCapacityVolumeUnit  as TranspEquipCapacityVolumeUnit,

      // Package Attributes
      TranspOrdItemPackageID         as TranspOrdItemPackageID,

      // Product Attributes
      @Semantics.uuid:true
      ProductUUID                    as ProductUUID,
      @ObjectModel.foreignKey.association: '_Product'
      ProductID                      as ProductID,
      MaterialFreightGroup           as MaterialFreightGroup,
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      TransportationGroup            as TransportationGroup,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemTemperatureUnit'
      TranspOrdItmMinTemp            as TranspOrdItmMinTemp,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemTemperatureUnit'
      TranspOrdItmMaxTemp            as TranspOrdItmMaxTemp,
      TranspOrdItemTemperatureUnit   as TranspOrdItemTemperatureUnit,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemQuantityUnit'
      TranspOrdItemQuantity          as TranspOrdItemQuantity,
      @ObjectModel.foreignKey.association: '_TranspOrdItemQuantityUnit'
      TranspOrdItemQuantityUnit      as TranspOrdItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemGrossWeightUnit'
      TranspOrdItemGrossWeight       as TranspOrdItemGrossWeight,
      @ObjectModel.foreignKey.association: '_TranspOrdItemGrossWeightUnit'
      TranspOrdItemGrossWeightUnit   as TranspOrdItemGrossWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemGrossVolumeUnit'
      TranspOrdItemGrossVolume       as TranspOrdItemGrossVolume,
      @ObjectModel.foreignKey.association: '_TranspOrdItemGrossVolumeUnit'
      TranspOrdItemGrossVolumeUnit   as TranspOrdItemGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemNetWeightUnit'
      TranspOrdItemNetWeight         as TranspOrdItemNetWeight,
      @ObjectModel.foreignKey.association: '_TranspOrdItemNetWeightUnit'
      TranspOrdItemNetWeightUnit     as TranspOrdItemNetWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemLengthUnit'
      TranspOrdItemLength            as TranspOrdItemLength,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemLengthUnit'
      TranspOrdItemWidth             as TranspOrdItemWidth,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemLengthUnit'
      TranspOrdItemHeight            as TranspOrdItemHeight,
      @ObjectModel.foreignKey.association: '_TranspOrdItemLengthUnit'
      TranspOrdItemLengthUnit        as TranspOrdItemLengthUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdItemPalletSpacesUnit'
      TranspOrdItemPalletSpacesQty   as TranspOrdItemPalletSpacesQty,
      @ObjectModel.foreignKey.association: '_TranspOrdItemPalletSpacesUnit'
      TranspOrdItemPalletSpacesUnit  as TranspOrdItemPalletSpacesUnit,

      @Semantics.amount.currencyCode: 'TranspOrdItemGoodsValueCrcy'
      TranspOrdItemGoodsValueAmount  as TranspOrdItemGoodsValueAmount,
      @ObjectModel.foreignKey.association: '_TranspOrdItemGoodsValueCrcy'
      TranspOrdItemGoodsValueCrcy    as TranspOrdItemGoodsValueCrcy,
      @Semantics.amount.currencyCode: 'TranspOrdItemInsurableValCrcy'
      TranspOrdItemInsurableValAmt   as TranspOrdItemInsurableValAmt,
      @ObjectModel.foreignKey.association: '_TranspOrdItemInsurableValCrcy'
      TranspOrdItemInsurableValCrcy  as TranspOrdItemInsurableValCrcy,

      // Status
      @ObjectModel.foreignKey.association: '_TranspOrdItemDngrsGdsStatus'
      TranspOrdItemDngrsGdsSts       as TranspOrdItemDngrsGdsSts,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationOrder,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdItemSeal,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdItemDocRef,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdItemCommodityCode,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdItemBatch,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdItemSerialNumber,

      _TranspOrdItemParentItem,
      _SourceStop,
      _DestinationStop,
      _PrdcssrTransportationOrder,
      _PrdcssrTranspOrderItemUUID,
      _FreightUnit,
      _Shipper,
      _Consignee,
      _TranspOrdItemType,
      _TranspOrdItemCategory,
      _TranspOrdItemGrossWeightUnit,
      _TranspOrdItemGrossVolumeUnit,
      _TranspOrdItemNetWeightUnit,
      _TranspOrdItemQuantityUnit,
      _TranspOrdItmCapGrossVolUnit,
      _TranspOrdItemTemperatureUnit,
      _TranspOrdItemCapacityUnit,
      _TranspOrdItmCapGrossWeightUnt,
      _TranspOrdItemLengthUnit,
      _TranspOrdItemPalletSpacesUnit,
      _BusTransDocTypeCode,
      _BusTransDocItemTypeCode,
      _Product,
      _TransportationGroup,
      _TranspOrdItemDngrsGdsStatus,
      _TranspOrdItemGoodsValueCrcy,
      _TranspOrdItemInsurableValCrcy,
      _ShippingCondition

}
```
