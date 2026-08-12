---
name: I_MFGORDERDOCDGOODSMOVEMENT
description: "MFGORDERDOCDGoods Movement"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERDOCDGOODSMOVEMENT

**MFGORDERDOCDGoods Movement**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GoodsMovement` | ✓ | |  |  |  |  |
| `GoodsMovementYear` | ✓ | |  |  |  |  |
| `GoodsMovementItem` | ✓ | |  |  |  |  |
| `ManufacturingOrder` |  | |  | `cast(OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  | `OrderCategory` |  |  |
| `ManufacturingOrderType` |  | |  | `cast(OrderType as manufacturingordertype preserving type)` |  |  |
| `ProductionPlant` |  | |  | `cast(Plant as pwwrk preserving type)` |  |  |
| `Material` |  | |  | `cast(Material as matnr preserving type)` |  |  |
| `GoodsMovementPlant` |  | |  | `cast(GoodsMovementPlant as werks_d preserving type)` |  |  |
| `Reservation` |  | |  | `cast(Reservation as rsnum preserving type)` |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `ReservationRecordType` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `StorageLocation` |  | |  | `cast(StorageLocation as pph_lgort preserving type)` |  |  |
| `Batch` |  | |  | `cast(Batch as charg_d preserving type)` |  |  |
| `InventoryValuationType` |  | |  | `cast(InventoryValuationType as pph_bwtar preserving type)` |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  | `cast(GoodsMovementType as bwart preserving type)` |  |  |
| `GoodsMovementRefDocType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  | `cast(InventorySpecialStockType as pph_sobkz preserving type)` |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  | `cast(PurchaseOrder as vdm_purchaseorder preserving type)` |  |  |
| `PurchaseOrderItem` |  | |  | `cast(PurchaseOrderItem as vdm_purchaseorderitem preserving type)` |  |  |
| `Supplier` |  | |  | `cast(Supplier as lifnr preserving type)` |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `GoodsReceiptIsCmpltlyDelivered` |  | |  |  |  |  |
| `ControllingArea` |  | |  | `cast(ControllingArea as kokrs preserving type)` |  |  |
| `GLAccount` |  | |  | `cast(GLAccount as saknr preserving type)` |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  | `cast(BaseUnit as meins preserving type)` |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  | `cast(EntryUnit as erfme preserving type)` |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  | `cast(CompanyCodeCurrency as cccrcy preserving type)` |  |  |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  |  |  |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_ProductionPlant` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_GoodsMovementPlantText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_MfgOrderText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_StorageLocationText` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_GoodsMovementYear` | | ✓ | | | | |
| `_GoodsMovementHeader` | | ✓ | | | | |
| `_GoodsMovementItem` | | ✓ | | | | |
| `_DocumentDate` | | ✓ | | | | |
| `_PostingDate` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_GoodsMovementPlant` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_ReservationItem` | | ✓ | | | | |
| `_ReservationRecordType` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_GoodsMovementRefDocType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_GoodsMovementPlantText` | `I_Plant` | [1..1] |
| `_MaterialText` | `I_ProductText` | [1..*] |
| `_MfgOrderText` | `I_ManufacturingOrder` | [1..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Documented Goods Movement of a Manufacturing Order'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MfgOrderDocdGoodsMovement
  as select from I_OrderDocumentedGoodsMovement

  association [1..1] to I_ManufacturingOrder  as _MfgOrder         on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [1..1] to I_MfgOrderCategory    as _MfgOrderCategory on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType        as _MfgOrderType     on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [1..1] to I_Plant               as _ProductionPlant  on  $projection.ProductionPlant = _ProductionPlant.Plant

  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant               as _ProductionPlantText    on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [1..1] to I_Plant               as _GoodsMovementPlantText on  $projection.GoodsMovementPlant = _GoodsMovementPlantText.Plant
  association [1..*] to I_ProductText         as _MaterialText           on  $projection.Material = _MaterialText.Product
  association [1..1] to I_ManufacturingOrder  as _MfgOrderText           on  $projection.ManufacturingOrder = _MfgOrderText.ManufacturingOrder
  association [0..1] to I_WBSElementBasicData as _WBSElementText         on  $projection.WBSElementInternalID = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation     as _StorageLocationText    on  $projection.ProductionPlant = _StorageLocationText.Plant
                                                                         and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [0..1] to I_Supplier            as _SupplierText           on  $projection.Supplier = _SupplierText.Supplier
  association [0..1] to I_ControllingArea     as _ControllingAreaText    on  $projection.ControllingArea = _ControllingAreaText.ControllingArea  
  -- end new associations for full coverage of text relations
{     
      // Key
      @ObjectModel.foreignKey.association: '_GoodsMovementHeader'
  key GoodsMovement,
      @ObjectModel.foreignKey.association: '_GoodsMovementYear'
  key GoodsMovementYear, 
      @ObjectModel.foreignKey.association: '_GoodsMovementItem'
  key GoodsMovementItem,

      // Order data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      cast(OrderID as manufacturingorder preserving type)          as ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      OrderCategory                                                as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(OrderType as manufacturingordertype preserving type)    as ManufacturingOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(Plant as pwwrk preserving type)                         as ProductionPlant,

      // Goods Movement data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      cast(Material as matnr preserving type)                      as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_GoodsMovementPlant'
      cast(GoodsMovementPlant as werks_d preserving type)          as GoodsMovementPlant,
      @ObjectModel.foreignKey.association: '_Reservation'
      cast(Reservation as rsnum preserving type)                   as Reservation,
      @ObjectModel.foreignKey.association: '_ReservationItem'
      ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'
      ReservationRecordType,
      ReservationIsFinallyIssued,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(StorageLocation as pph_lgort preserving type)           as StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'
      cast(Batch as charg_d preserving type)                       as Batch,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      cast(InventoryValuationType as pph_bwtar preserving type)    as InventoryValuationType,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      cast(GoodsMovementType as bwart preserving type)             as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementRefDocType'
      GoodsMovementRefDocType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(InventorySpecialStockType as pph_sobkz preserving type) as InventorySpecialStockType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_WBSElement'
      WBSElementInternalID,
--    @ObjectModel.foreignKey.association: '_PurchaseOrder'
      cast(PurchaseOrder as vdm_purchaseorder preserving type)     as PurchaseOrder,
--    @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
      cast(PurchaseOrderItem as vdm_purchaseorderitem preserving type) as PurchaseOrderItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      cast(Supplier as lifnr preserving type)                      as Supplier,
      @Semantics.text: true
      GoodsRecipientName,
      @Semantics.text: true
      UnloadingPointName,
      GoodsReceiptIsNonValuated,
      GoodsReceiptIsCmpltlyDelivered,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast(ControllingArea as kokrs preserving type)               as ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
--    @ObjectModel.foreignKey.association: '_GLAccount'
      cast(GLAccount as saknr preserving type)                     as GLAccount,

      // Dates
      @Semantics.businessDate.at: true
      PostingDate,
      @Semantics.businessDate.at: true
      DocumentDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_BaseUnit'
      cast(BaseUnit as meins preserving type)                      as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      QuantityInBaseUnit,
      @ObjectModel.foreignKey.association: '_EntryUnit'
      cast(EntryUnit as erfme preserving type)                     as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      QuantityInEntryUnit,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      cast(CompanyCodeCurrency as cccrcy preserving type)          as CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      TotalGoodsMvtAmtInCCCrcy,

      // Associations
      _GoodsMovementYear,
      _GoodsMovementHeader,
      _GoodsMovementItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MfgOrder,
      _MfgOrderCategory,
      _MfgOrderType,
      _ProductionPlant,
      _DocumentDate,
      _PostingDate,
      _Material,
      _GoodsMovementPlant,
      _Reservation,
      _ReservationItem,
      _ReservationRecordType,
      _StorageLocation,
      _Batch,
      _BaseUnit,
      _EntryUnit,
      _GoodsMovementType,
      _GoodsMovementRefDocType,
      _InventorySpecialStockType,
      _InventoryValuationType,
      _DebitCreditCode,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElement,
      _EnterpriseProjectElement,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _GLAccount,
      _ControllingArea,
      _Currency,

      // Text relations
      _MaterialText,
      _GoodsMovementPlantText,
      _ProductionPlantText,
      _MfgOrderText,
      _WBSElementText,
      _StorageLocationText,
      _SupplierText,
      _ControllingAreaText
}
where ( OrderCategory = '10' or
        OrderCategory = '40' );  //Manufacturing orders only
```
