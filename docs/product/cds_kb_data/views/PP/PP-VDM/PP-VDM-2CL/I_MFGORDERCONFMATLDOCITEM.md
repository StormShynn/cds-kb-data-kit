---
name: I_MFGORDERCONFMATLDOCITEM
description: "Mfgorderconfmatldocitem"
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
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERCONFMATLDOCITEM

**Mfgorderconfmatldocitem**

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
| `MfgOrderConfirmationGroup` | ✓ | |  |  |  |  |
| `MfgOrderConfirmation` | ✓ | |  |  |  |  |
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentYear` | ✓ | |  | `cast(afwi.MaterialDocumentYear as nsdm_mjahr preserving type)` |  |  |
| `MaterialDocumentItem` | ✓ | |  | `cast(afwi.MaterialDocumentItem as nsdm_mblpo preserving type)` |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(mseg.CreatedByUser as ernam preserving type)` |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderSequence` |  | |  |  |  |  |
| `ManufacturingOrderOperation` |  | |  |  |  |  |
| `ManufacturingOrderOperation_2` |  | |  |  |  |  |
| `ManufacturingOrderItem` |  | |  | `OrderItem` |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ConfirmationPlant` |  | |  | `cast(afru.Plant as vdm_confirmationplant preserving type)` |  |  |
| `ConfirmationText` |  | |  |  |  |  |
| `FinalConfirmationType` |  | |  |  |  |  |
| `IsFinalConfirmation` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `Material` |  | |  | `cast(mseg.Material as co_matnr preserving type)` |  |  |
| `Plant` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `ReservationRecordType` |  | |  |  |  |  |
| `StorageLocation` |  | |  | `cast(mseg.StorageLocation as pph_lgort preserving type)` |  |  |
| `Batch` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  | `cast(mseg.InventoryValuationType as pph_bwtar preserving type)` |  |  |
| `ConsumptionPosting` |  | |  | `cast(mseg.ConsumptionPosting as pph_kzvbr preserving type)` |  |  |
| `DebitCreditCode` |  | |  | `cast(mseg.DebitCreditCode as pph_shkzg preserving type)` |  |  |
| `GoodsMovementType` |  | |  | `cast(mseg.GoodsMovementType as pph_bwart preserving type)` |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `GoodsMovementRefDocType` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  | `cast(mseg.InventoryUsabilityCode as inventoryusabilitycode preserving type)` |  |  |
| `InventorySpecialStockType` |  | |  | `cast(mseg.InventorySpecialStockType as inventoryspecialstocktype preserving type)` |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)` |  |  |
| `SalesOrder` |  | |  | `cast(mseg.SalesOrder as co_kdauf preserving type)` |  |  |
| `SalesOrderItem` |  | |  | `cast(mseg.SalesOrderItem as co_kdpos preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `cast(mseg.WBSElementInternalID as pph_pspel preserving type)` |  |  |
| `WBSElementInternalID_2` |  | |  | `cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)` |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  | `cast(mseg.GoodsRecipientName as pph_wempf preserving type)` |  |  |
| `UnloadingPointName` |  | |  | `cast(mseg.UnloadingPointName as ablad preserving type)` |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMStorageBin` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `MaterialDocumentItemText` |  | |  |  |  |  |
| `BaseUnit` |  | |  | `MaterialBaseUnit` |  |  |
| `QuantityInBaseUnit` |  | |  | `cast(mseg.QuantityInBaseUnit as vdm_pp_menge preserving type)` |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  | `cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type)` |  |  |
| `_ConfirmationPlant` |  | |  | `_Plant` |  |  |
| `_ConfirmationCount` | | ✓ | | | | |
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_DocumentDate` | | ✓ | | | | |
| `_PostingDate` | | ✓ | | | | |
| `_ShelfLifeExpirationDate` | | ✓ | | | | |
| `_ManufactureDate` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderItem` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |
| `_MfgOrderConfirmation` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_ReservationItem` | | ✓ | | | | |
| `_ReservationRecordType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_GoodsMovementReason` | | ✓ | | | | |
| `_GoodsMovementRefDocType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_ConsumptionPosting` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_InventoryUsabilityCode` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementBasic` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_EWMWarehouse` | | ✓ | | | | |
| `_EWMStorageBin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfirmationCount` | `I_ConfirmationCount` | [1..1] |
| `_MaterialDocumentHeader` | `I_MaterialDocumentHeader_2` | [1..1] |
| `_DocumentDate` | `I_CalendarDate` | [0..1] |
| `_PostingDate` | `I_CalendarDate` | [0..1] |
| `_ShelfLifeExpirationDate` | `I_CalendarDate` | [0..1] |
| `_ManufactureDate` | `I_CalendarDate` | [0..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderItem` | `I_ManufacturingOrderItem` | [0..1] |
| `_MfgOrderSequence` | `I_ManufacturingOrderSequence` | [0..1] |
| `_MfgOrderConfirmation` | `I_MfgOrderConfirmation` | [1..1] |
| `_Reservation` | `I_ReservationDocumentHeader` | [0..1] |
| `_ReservationItem` | `I_ReservationDocumentItem` | [0..1] |
| `_ReservationRecordType` | `I_ReservationDocRecordType` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_EntryUnit` | `I_UnitOfMeasure` | [1..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [1..1] |
| `_GoodsMovementReason` | `I_PhysInvtryReasonCode` | [0..1] |
| `_GoodsMovementRefDocType` | `I_GoodsMovementRefDocType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_InventoryUsabilityCode` | `I_StockType_2` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [0..1] |
| `_EWMWarehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_EWMStorageBin` | `I_EWM_StorageBin_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDCNFMATDOC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'MaterialDocumentItem'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Material Document Items of Mfg Order Confirmation'

define view I_MfgOrderConfMatlDocItem
  as select from I_MfgOrderConfirmation       as afru
    inner join   I_OrderConfMatlDocItemAssgmt as afwi on  afwi.ConfirmationGroup = afru.MfgOrderConfirmationGroup
                                                      and afwi.ConfirmationCount = afru.MfgOrderConfirmation
    inner join   I_MaterialDocumentRecord     as mseg on  mseg.MaterialDocumentYear       = afwi.MaterialDocumentYear
                                                      and mseg.MaterialDocument           = afwi.MaterialDocument  
                                                      and mseg.MaterialDocumentItem       = afwi.MaterialDocumentItem
                                                      and mseg.MaterialDocumentRecordType = 'MDOC'                                                        

  association [1..1] to I_ConfirmationCount          as _ConfirmationCount         on  $projection.MfgOrderConfirmationGroup = _ConfirmationCount.ConfirmationGroup
                                                                                   and $projection.MfgOrderConfirmation      = _ConfirmationCount.ConfirmationCount
  association [1..1] to I_MaterialDocumentHeader_2   as _MaterialDocumentHeader    on  $projection.MaterialDocument     = _MaterialDocumentHeader.MaterialDocument
                                                                                   and $projection.MaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
  association [0..1] to I_CalendarDate               as _DocumentDate              on  $projection.DocumentDate = _DocumentDate.CalendarDate
  association [0..1] to I_CalendarDate               as _PostingDate               on  $projection.PostingDate = _PostingDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ShelfLifeExpirationDate   on  $projection.ShelfLifeExpirationDate = _ShelfLifeExpirationDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ManufactureDate           on  $projection.ManufactureDate = _ManufactureDate.CalendarDate  
  association [1..1] to I_ManufacturingOrder         as _MfgOrder                  on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderItem     as _MfgOrderItem              on  $projection.ManufacturingOrder     = _MfgOrderItem.ManufacturingOrder
                                                                                   and $projection.ManufacturingOrderItem = _MfgOrderItem.ManufacturingOrderItem
  association [0..1] to I_ManufacturingOrderSequence as _MfgOrderSequence          on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                                   and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [1..1] to I_MfgOrderConfirmation       as _MfgOrderConfirmation      on  $projection.MfgOrderConfirmationGroup = _MfgOrderConfirmation.MfgOrderConfirmationGroup
                                                                                   and $projection.MfgOrderConfirmation      = _MfgOrderConfirmation.MfgOrderConfirmation
  association [0..1] to I_ReservationDocumentHeader  as _Reservation               on  $projection.Reservation = _Reservation.Reservation
  association [0..1] to I_ReservationDocumentItem    as _ReservationItem           on  $projection.Reservation           = _ReservationItem.Reservation
                                                                                   and $projection.ReservationItem       = _ReservationItem.ReservationItem
                                                                                   and $projection.ReservationRecordType = _ReservationItem.RecordType
  association [0..1] to I_ReservationDocRecordType   as _ReservationRecordType     on  $projection.ReservationRecordType = _ReservationRecordType.RecordType
  association [1..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Material                   as _Material                  on  $projection.Material = _Material.Material
  association [1..1] to I_UnitOfMeasure              as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure              as _EntryUnit                 on  $projection.EntryUnit = _EntryUnit.UnitOfMeasure
  association [1..1] to I_GoodsMovementType          as _GoodsMovementType         on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_PhysInvtryReasonCode       as _GoodsMovementReason       on  $projection.GoodsMovementType       = _GoodsMovementReason.GoodsMovementType
                                                                                   and $projection.GoodsMovementReasonCode = _GoodsMovementReason.ReasonForPhysInvtryDifference
  association [0..1] to I_GoodsMovementRefDocType    as _GoodsMovementRefDocType   on  $projection.GoodsMovementRefDocType = _GoodsMovementRefDocType.GoodsMovementRefDocType
  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType    on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting        on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode           on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_StockType_2                as _InventoryUsabilityCode    on  $projection.InventoryUsabilityCode = _InventoryUsabilityCode.StockType
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Batch                      as _Batch                     on  $projection.Plant    = _Batch.Plant
                                                                                   and $projection.Material = _Batch.Material
                                                                                   and $projection.Batch    = _Batch.Batch
  association [0..1] to I_SalesOrder                 as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _WBSElement                on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasic           on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement   as _EnterpriseProjectElement  on  $projection.WBSElementInternalID_2 = _EnterpriseProjectElement.WBSElementInternalID
  association [0..1] to I_Supplier                   as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer                   as _Customer                  on  $projection.Customer = _Customer.Customer
  association [0..1] to I_SupplierCompanyByPlant     as _SupplierCompanyByPlant    on  $projection.Plant    = _SupplierCompanyByPlant.Plant 
                                                                                   and $projection.Supplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_CustomerCompanyByPlant     as _CustomerCompanyByPlant    on  $projection.Plant    = _CustomerCompanyByPlant.Plant 
                                                                                   and $projection.Customer = _CustomerCompanyByPlant.Customer
  association [0..1] to I_EWM_WarehouseNumber_2      as _EWMWarehouse              on  $projection.EWMWarehouse  = _EWMWarehouse.EWMWarehouse
  association [0..1] to I_EWM_StorageBin_2           as _EWMStorageBin             on  $projection.EWMWarehouse  = _EWMStorageBin.EWMWarehouse
                                                                                   and $projection.EWMStorageBin = _EWMStorageBin.EWMStorageBin
{
      // Key
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
  key afru.MfgOrderConfirmationGroup,
      @ObjectModel.foreignKey.association: '_MfgOrderConfirmation'
  key afru.MfgOrderConfirmation,
      @ObjectModel.foreignKey.association: '_MaterialDocumentHeader'  
  key afwi.MaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key cast(afwi.MaterialDocumentYear as nsdm_mjahr preserving type)        as MaterialDocumentYear, 
      @ObjectModel.text.element: ['MaterialDocumentItemText']
  key cast(afwi.MaterialDocumentItem as nsdm_mblpo preserving type)        as MaterialDocumentItem ,

      // Admin
      @Semantics.businessDate.at: true
      mseg.PostingDate,
      @Semantics.systemDate.createdAt: true
      mseg.DocumentDate,
      @Semantics.user.createdBy: true
      cast(mseg.CreatedByUser as ernam preserving type)                    as CreatedByUser,

      // Order and Operation Data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      afru.ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      afru.ManufacturingOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      afru.ManufacturingOrderOperation,       // with conv. exit NUMCV
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderOperation2'
      afru.ManufacturingOrderOperation_2,     // w/o conversion exit
      @ObjectModel.foreignKey.association: '_MfgOrderItem'
      mseg.OrderItem                                                       as ManufacturingOrderItem,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      afru.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      afru.ManufacturingOrderType,

      //Confirmation data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ConfirmationPlant'
      cast(afru.Plant as vdm_confirmationplant preserving type)            as ConfirmationPlant,
      @Semantics.text: true
      afru.ConfirmationText,
      @ObjectModel.foreignKey.association: '_FinalConfirmationType'
      afru.FinalConfirmationType,
      afru.IsFinalConfirmation,
      afru.OpenReservationsIsCleared,
      @ObjectModel.foreignKey.association: '_ReversedIndicator'
      afru.IsReversed,
      @ObjectModel.foreignKey.association: '_ReversalIndicator'
      afru.IsReversal, 

      // Goods Movement data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      cast(mseg.Material as co_matnr preserving type)                                   as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      mseg.Plant                                                                        as Plant,
      @ObjectModel.foreignKey.association: '_Reservation'      
      mseg.Reservation                                                                  as Reservation,
      @ObjectModel.foreignKey.association: '_ReservationItem'      
      mseg.ReservationItem                                                              as ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'      
      mseg.ReservationRecordType                                                        as ReservationRecordType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(mseg.StorageLocation as pph_lgort preserving type)                           as StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'
      mseg.Batch                                                                        as Batch,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      cast(mseg.InventoryValuationType as pph_bwtar preserving type)                    as InventoryValuationType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(mseg.ConsumptionPosting as pph_kzvbr preserving type)                        as ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast(mseg.DebitCreditCode as pph_shkzg preserving type)                           as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      cast(mseg.GoodsMovementType as pph_bwart preserving type)                         as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementReason'      
      mseg.GoodsMovementReasonCode                                                      as GoodsMovementReasonCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementRefDocType'
      mseg.GoodsMovementRefDocType                                                      as GoodsMovementRefDocType,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      cast(mseg.InventoryUsabilityCode as inventoryusabilitycode preserving type)       as InventoryUsabilityCode,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(mseg.InventorySpecialStockType as inventoryspecialstocktype preserving type) as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)             as InventorySpecialStockValnType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(mseg.SalesOrder as co_kdauf preserving type)                                 as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(mseg.SalesOrderItem as co_kdpos preserving type)                             as SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      cast(mseg.WBSElementInternalID as pph_pspel preserving type)                      as WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementBasic'     
      cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)                    as WBSElementInternalID_2,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      mseg.Supplier                                                                     as Supplier,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_Customer'
      mseg.Customer                                                                     as Customer,
      @Semantics.text: true
      cast(mseg.GoodsRecipientName as pph_wempf preserving type)                        as GoodsRecipientName,
      @Semantics.text: true
      cast(mseg.UnloadingPointName as ablad preserving type)                            as UnloadingPointName,
      mseg.ReservationIsFinallyIssued                                                   as ReservationIsFinallyIssued,
      mseg.IsCompletelyDelivered                                                        as IsCompletelyDelivered,
      mseg.ShelfLifeExpirationDate                                                      as ShelfLifeExpirationDate,
      mseg.ManufactureDate                                                              as ManufactureDate,
      mseg.StorageType                                                                  as StorageType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMStorageBin'
      mseg.StorageBin                                                                   as StorageBin,

      // EWM Data
      @ObjectModel.foreignKey.association: '_EWMWarehouse'      
      mseg.EWMWarehouse                                             as EWMWarehouse,
--    @ObjectModel.foreignKey.association: '_EWMStorageBin'      
      mseg.EWMStorageBin                                            as EWMStorageBin,
      mseg.HandlingUnitExternalID                                   as HandlingUnitExternalID,

      // Text
      @Semantics.text: true
      mseg.MaterialDocumentItemText                                 as MaterialDocumentItemText,

      // Quantities and UoM
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' } } ]
      @Semantics.unitOfMeasure: true
      mseg.MaterialBaseUnit                                         as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(mseg.QuantityInBaseUnit as vdm_pp_menge preserving type) as QuantityInBaseUnit,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' } } ]
      @Semantics.unitOfMeasure: true
      mseg.EntryUnit                                                as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type)   as QuantityInEntryUnit,

      // Associations
      @Consumption.hidden: true
      afru._ConfirmationGroup,
      @Consumption.hidden: true
      _ConfirmationCount,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MfgOrderConfirmation,
      _MaterialDocumentHeader,
      afwi._MaterialDocumentYear,
      _MfgOrder,
      _MfgOrderSequence,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperation2'
      afru._MfgOrderOperation,
      afru._MfgOrderOperation2,
      _MfgOrderItem,
      afru._MfgOrderCategory,
      afru._MfgOrderType,
      afru._Plant as _ConfirmationPlant,
      afru._FinalConfirmationType,
      afru._ReversedIndicator,
      afru._ReversalIndicator,
      _DocumentDate,
      _PostingDate,
      _ShelfLifeExpirationDate,
      _ManufactureDate,
      _Material,
      _Plant,
      _Reservation,
      _ReservationItem,
      _ReservationRecordType,
      _StorageLocation,
      _Batch,
      _BaseUnit,
      _EntryUnit,
      _GoodsMovementType,
      _GoodsMovementReason,
      _GoodsMovementRefDocType,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _InventoryValuationType,
      _ConsumptionPosting,
      _DebitCreditCode,
      _InventoryUsabilityCode,
      _SalesOrder,
      _SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      _WBSElement,
      _WBSElementBasic,
      _EnterpriseProjectElement,
      _Supplier,
      _Customer,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _CustomerCompanyByPlant,
      _EWMWarehouse,
      _EWMStorageBin
}
union all

  select from  I_MfgOrderConfirmation   as afru
    inner join I_MaterialDocumentRecord as mseg on  mseg.MaterialDocument           = afru.MaterialDocument
                                                and mseg.MaterialDocumentYear       = afru.MaterialDocumentYear
                                                and mseg.MaterialDocumentRecordType = 'MDOC'

  association [1..1] to I_ConfirmationCount          as _ConfirmationCount         on  $projection.MfgOrderConfirmationGroup = _ConfirmationCount.ConfirmationGroup
                                                                                   and $projection.MfgOrderConfirmation      = _ConfirmationCount.ConfirmationCount
  association [1..1] to I_MaterialDocumentHeader_2   as _MaterialDocumentHeader    on  $projection.MaterialDocument     = _MaterialDocumentHeader.MaterialDocument
                                                                                   and $projection.MaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
  association [1..1] to I_MaterialDocumentYear       as _MaterialDocumentYear      on  $projection.MaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [0..1] to I_CalendarDate               as _DocumentDate              on  $projection.DocumentDate = _DocumentDate.CalendarDate
  association [0..1] to I_CalendarDate               as _PostingDate               on  $projection.PostingDate = _PostingDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ShelfLifeExpirationDate   on  $projection.ShelfLifeExpirationDate = _ShelfLifeExpirationDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ManufactureDate           on  $projection.ManufactureDate = _ManufactureDate.CalendarDate  
  association [1..1] to I_ManufacturingOrder         as _MfgOrder                  on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderItem     as _MfgOrderItem              on  $projection.ManufacturingOrder     = _MfgOrderItem.ManufacturingOrder
                                                                                   and $projection.ManufacturingOrderItem = _MfgOrderItem.ManufacturingOrderItem
  association [0..1] to I_ManufacturingOrderSequence as _MfgOrderSequence          on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                                   and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [1..1] to I_MfgOrderConfirmation       as _MfgOrderConfirmation      on  $projection.MfgOrderConfirmationGroup = _MfgOrderConfirmation.MfgOrderConfirmationGroup
                                                                                   and $projection.MfgOrderConfirmation      = _MfgOrderConfirmation.MfgOrderConfirmation
  association [0..1] to I_ReservationDocumentHeader  as _Reservation               on  $projection.Reservation = _Reservation.Reservation
  association [0..1] to I_ReservationDocumentItem    as _ReservationItem           on  $projection.Reservation           = _ReservationItem.Reservation
                                                                                   and $projection.ReservationItem       = _ReservationItem.ReservationItem
                                                                                   and $projection.ReservationRecordType = _ReservationItem.RecordType
  association [0..1] to I_ReservationDocRecordType   as _ReservationRecordType     on  $projection.ReservationRecordType = _ReservationRecordType.RecordType
  association [1..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Material                   as _Material                  on  $projection.Material = _Material.Material
  association [1..1] to I_UnitOfMeasure              as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure              as _EntryUnit                 on  $projection.EntryUnit = _EntryUnit.UnitOfMeasure
  association [1..1] to I_GoodsMovementType          as _GoodsMovementType         on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_PhysInvtryReasonCode       as _GoodsMovementReason       on  $projection.GoodsMovementType       = _GoodsMovementReason.GoodsMovementType
                                                                                   and $projection.GoodsMovementReasonCode = _GoodsMovementReason.ReasonForPhysInvtryDifference
  association [0..1] to I_GoodsMovementRefDocType    as _GoodsMovementRefDocType   on  $projection.GoodsMovementRefDocType = _GoodsMovementRefDocType.GoodsMovementRefDocType
  association [0..1] to I_InventorySpecialStockType  as _InventorySpecialStockType on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType    on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting        on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode           on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_StockType_2                as _InventoryUsabilityCode    on  $projection.InventoryUsabilityCode = _InventoryUsabilityCode.StockType
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Batch                      as _Batch                     on  $projection.Plant    = _Batch.Plant
                                                                                   and $projection.Material = _Batch.Material
                                                                                   and $projection.Batch    = _Batch.Batch
  association [0..1] to I_SalesOrder                 as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _WBSElement                on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasic           on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement   as _EnterpriseProjectElement  on  $projection.WBSElementInternalID_2 = _EnterpriseProjectElement.WBSElementInternalID
  association [0..1] to I_Supplier                   as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer                   as _Customer                  on  $projection.Customer = _Customer.Customer
  association [0..1] to I_SupplierCompanyByPlant     as _SupplierCompanyByPlant    on  $projection.Plant    = _SupplierCompanyByPlant.Plant 
                                                                                   and $projection.Supplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_CustomerCompanyByPlant     as _CustomerCompanyByPlant    on  $projection.Plant    = _CustomerCompanyByPlant.Plant 
                                                                                   and $projection.Customer = _CustomerCompanyByPlant.Customer
  association [0..1] to I_EWM_WarehouseNumber_2      as _EWMWarehouse              on  $projection.EWMWarehouse  = _EWMWarehouse.EWMWarehouse
  association [0..1] to I_EWM_StorageBin_2           as _EWMStorageBin             on  $projection.EWMWarehouse  = _EWMStorageBin.EWMWarehouse
                                                                                   and $projection.EWMStorageBin = _EWMStorageBin.EWMStorageBin
{
      // Key
  key afru.MfgOrderConfirmationGroup,
  key afru.MfgOrderConfirmation,
  key mseg.MaterialDocument,
  key mseg.MaterialDocumentYear, 
  key mseg.MaterialDocumentItem,
  
      // Admin
      mseg.PostingDate,
      mseg.DocumentDate,
      cast(mseg.CreatedByUser as ernam preserving type)         as CreatedByUser, 

     // Order and Operation Data
      afru.ManufacturingOrder,
      afru.ManufacturingOrderSequence,
      afru.ManufacturingOrderOperation,       // with conv. exit NUMCV
      afru.ManufacturingOrderOperation_2,     // w/o conversion exit
      mseg.OrderItem                                            as ManufacturingOrderItem,
      afru.ManufacturingOrderCategory,
      afru.ManufacturingOrderType,

      //Confirmation data
      cast(afru.Plant as vdm_confirmationplant preserving type) as ConfirmationPlant,
      afru.ConfirmationText,
      afru.FinalConfirmationType,
      afru.IsFinalConfirmation,
      afru.OpenReservationsIsCleared,
      afru.IsReversed,
      afru.IsReversal, 

      // Goods Movement data
      cast(mseg.Material as co_matnr preserving type)                                   as Material,
      mseg.Plant                                                                        as Plant,
      mseg.Reservation                                                                  as Reservation,
      mseg.ReservationItem                                                              as ReservationItem,
      mseg.ReservationRecordType                                                        as ReservationRecordType,
      cast(mseg.StorageLocation as pph_lgort preserving type)                           as StorageLocation,
      mseg.Batch                                                                        as Batch,
      cast(mseg.InventoryValuationType as pph_bwtar preserving type)                    as InventoryValuationType,
      cast(mseg.ConsumptionPosting as pph_kzvbr preserving type)                        as ConsumptionPosting,
      cast(mseg.DebitCreditCode as pph_shkzg preserving type)                           as DebitCreditCode,
      cast(mseg.GoodsMovementType as pph_bwart preserving type)                         as GoodsMovementType,
      mseg.GoodsMovementReasonCode                                                      as GoodsMovementReasonCode,
      mseg.GoodsMovementRefDocType                                                      as GoodsMovementRefDocType,
      cast(mseg.InventoryUsabilityCode as inventoryusabilitycode preserving type)       as InventoryUsabilityCode,
      cast(mseg.InventorySpecialStockType as inventoryspecialstocktype preserving type) as InventorySpecialStockType,
      cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)             as InventorySpecialStockValnType,
      cast(mseg.SalesOrder as co_kdauf preserving type)                                 as SalesOrder,
      cast(mseg.SalesOrderItem as co_kdpos preserving type)                             as SalesOrderItem,
      cast(mseg.WBSElementInternalID as pph_pspel preserving type)                      as WBSElementInternalID,
      cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)                    as WBSElementInternalID_2,
      mseg.Supplier                                                                     as Supplier,
      mseg.Customer                                                                     as Customer,
      cast(mseg.GoodsRecipientName as pph_wempf preserving type)                        as GoodsRecipientName,
      cast(mseg.UnloadingPointName as ablad preserving type)                            as UnloadingPointName,
      mseg.ReservationIsFinallyIssued,
      mseg.IsCompletelyDelivered,
      mseg.ShelfLifeExpirationDate,
      mseg.ManufactureDate,
      mseg.StorageType,
      mseg.StorageBin,

      // EWM Data
      mseg.EWMWarehouse                                           as EWMWarehouse,
      mseg.EWMStorageBin                                          as EWMStorageBin,
      mseg.HandlingUnitExternalID                                 as HandlingUnitExternalID,

      // Text
      mseg.MaterialDocumentItemText,

      // Quantities and UoM
      mseg.MaterialBaseUnit                                       as BaseUnit,
      mseg.QuantityInBaseUnit                                     as QuantityInBaseUnit,
      mseg.EntryUnit                                              as EntryUnit,
      cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type) as QuantityInEntryUnit,

      // Associations
      afru._ConfirmationGroup,
      _ConfirmationCount,
      _MfgOrderConfirmation,
      _MaterialDocumentHeader,
      _MaterialDocumentYear,
      _MfgOrder,
      _MfgOrderSequence,
      afru._MfgOrderOperation,
      afru._MfgOrderOperation2,
      _MfgOrderItem,
      afru._MfgOrderCategory,
      afru._MfgOrderType,
      afru._Plant as _ConfirmationPlant,
      afru._FinalConfirmationType,
      afru._ReversedIndicator,
      afru._ReversalIndicator,
      _DocumentDate,
      _PostingDate,
      _ShelfLifeExpirationDate,
      _ManufactureDate,
      _Material,
      _Plant,
      _Reservation,
      _ReservationItem,
      _ReservationRecordType,
      _StorageLocation,
      _Batch,
      _BaseUnit,
      _EntryUnit,
      _GoodsMovementType,
      _GoodsMovementReason,
      _GoodsMovementRefDocType,
      _InventorySpecialStockType,
      _InventorySpecialStockValnType,
      _InventoryValuationType,
      _ConsumptionPosting,
      _DebitCreditCode,
      _InventoryUsabilityCode,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElement,
      _WBSElementBasic,
      _EnterpriseProjectElement,
      _Supplier,
      _Customer,
      _SupplierCompanyByPlant,
      _CustomerCompanyByPlant,
      _EWMWarehouse,
      _EWMStorageBin
};
```
