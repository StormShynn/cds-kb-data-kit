---
name: I_RPTVMFGCONFMATLDOCITEM
description: Rptvmfgconfmatldocitem
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_RPTVMFGCONFMATLDOCITEM

**Rptvmfgconfmatldocitem**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RepetitiveMfgConfirmation` | ✓ | |  |  |  |  |
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(mseg.CreatedByUser as ernam preserving type)` |  |  |
| `ConfirmationPlant` |  | |  | `cast(conf.Plant as pwwrk preserving type)` |  |  |
| `ReportingPointOperation` |  | |  |  |  |  |
| `RepetitiveMfgConfScenario` |  | |  |  |  |  |
| `RptvMfgConfProcessingType` |  | |  |  |  |  |
| `RptvMfgConfReversedCode` |  | |  |  |  |  |
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
| `InventorySpecialStockType` |  | |  | `cast(mseg.InventorySpecialStockType as pph_sobkz preserving type)` |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)` |  |  |
| `SalesOrder` |  | |  | `cast(mseg.SalesOrder as co_kdauf preserving type)` |  |  |
| `SalesOrderItem` |  | |  | `cast(mseg.SalesOrderItem as co_kdpos preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)` |  |  |
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
| `BaseUnit` |  | |  | `MaterialBaseUnit` |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  | `cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type)` |  |  |
| `_ConfirmationPlant` |  | |  | `_Plant` |  |  |
| `_ProcessingType` |  | |  | `_RptvMfgConfProcessingType` |  |  |
| `_ReversalType` |  | |  | `_RptvMfgConfRevesalType` |  |  |
| `_RepetitiveMfgConfirmation` | | ✓ | | | | |
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_DocumentDate` | | ✓ | | | | |
| `_PostingDate` | | ✓ | | | | |
| `_ShelfLifeExpirationDate` | | ✓ | | | | |
| `_ManufactureDate` | | ✓ | | | | |
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
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ConsumptionPosting` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_InventoryUsabilityCode` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_EWMWarehouse` | | ✓ | | | | |
| `_EWMStorageBin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RepetitiveMfgConfirmation` | `I_RepetitiveMfgConfirmation` | [1..1] |
| `_MaterialDocumentHeader` | `I_MaterialDocumentHeader_2` | [1..1] |
| `_DocumentDate` | `I_CalendarDate` | [0..1] |
| `_PostingDate` | `I_CalendarDate` | [0..1] |
| `_ShelfLifeExpirationDate` | `I_CalendarDate` | [0..1] |
| `_ManufactureDate` | `I_CalendarDate` | [0..1] |
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
| `_InventorySpecialStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_ConsumptionPosting` | `I_ConsumptionPosting` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_InventoryUsabilityCode` | `I_StockType_2` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [0..1] |
| `_EWMWarehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_EWMStorageBin` | `I_EWM_StorageBin_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.technicalName: 'IREMCONFMATDOC'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'RptvMfgConfMatlDocItem'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Material Document Item of Confirmation in Repetitive Mfg'

define view entity I_RptvMfgConfMatlDocItem
  as select from   I_RepetitiveMfgConfirmation    as conf
    inner join     I_RptvMfgConfMatlDocItemAssgmt as afwi on  afwi.RepetitiveMfgConfirmation  = conf.RepetitiveMfgConfirmation
    inner join     I_MaterialDocumentRecord       as mseg on  mseg.MaterialDocumentYear       = afwi.MaterialDocumentYear
                                                          and mseg.MaterialDocument           = afwi.MaterialDocument  
                                                          and mseg.MaterialDocumentItem       = afwi.MaterialDocumentItem
                                                          and mseg.MaterialDocumentRecordType = 'MDOC'                                                        

  association [1..1] to I_RepetitiveMfgConfirmation  as _RepetitiveMfgConfirmation on  $projection.RepetitiveMfgConfirmation = _RepetitiveMfgConfirmation.RepetitiveMfgConfirmation
  association [1..1] to I_MaterialDocumentHeader_2   as _MaterialDocumentHeader    on  $projection.MaterialDocument     = _MaterialDocumentHeader.MaterialDocument
                                                                                   and $projection.MaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
  association [0..1] to I_CalendarDate               as _DocumentDate              on  $projection.DocumentDate = _DocumentDate.CalendarDate
  association [0..1] to I_CalendarDate               as _PostingDate               on  $projection.PostingDate = _PostingDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ShelfLifeExpirationDate   on  $projection.ShelfLifeExpirationDate = _ShelfLifeExpirationDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ManufactureDate           on  $projection.ManufactureDate = _ManufactureDate.CalendarDate 
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
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType    on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting        on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode           on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_StockType_2                as _InventoryUsabilityCode    on  $projection.InventoryUsabilityCode = _InventoryUsabilityCode.StockType
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Batch                      as _Batch                     on  $projection.Material = _Batch.Material
                                                                                   and $projection.Plant    = _Batch.Plant
                                                                                   and $projection.Batch    = _Batch.Batch
  association [0..1] to I_SalesOrder                 as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData       on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
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
      @ObjectModel.foreignKey.association: '_RepetitiveMfgConfirmation'
  key conf.RepetitiveMfgConfirmation,
      @ObjectModel.foreignKey.association: '_MaterialDocumentHeader'
  key afwi.MaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key afwi.MaterialDocumentYear,
      @ObjectModel.foreignKey.association: '_MaterialDocumentItem'
  key afwi.MaterialDocumentItem,

      // Admin
      @Semantics.businessDate.at: true
      mseg.PostingDate,
      @Semantics.systemDate.createdAt: true
      mseg.DocumentDate,
      @Semantics.user.createdBy: true
      cast(mseg.CreatedByUser as ernam preserving type)                           as CreatedByUser,

      //Confirmation data
      @ObjectModel.foreignKey.association: '_ConfirmationPlant'   
      cast(conf.Plant as pwwrk preserving type)                                   as ConfirmationPlant,
      conf.ReportingPointOperation,
      @ObjectModel.foreignKey.association: '_RepetitiveMfgScenario'
      conf.RepetitiveMfgConfScenario,
      @ObjectModel.foreignKey.association: '_ProcessingType'
      conf.RptvMfgConfProcessingType,
      @ObjectModel.foreignKey.association: '_ReversalType'      
      conf.RptvMfgConfReversedCode,

      // Goods Movement data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      cast(mseg.Material as co_matnr preserving type)                             as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      mseg.Plant                                                                  as Plant,
      @ObjectModel.foreignKey.association: '_Reservation'      
      mseg.Reservation                                                            as Reservation,
      @ObjectModel.foreignKey.association: '_ReservationItem'      
      mseg.ReservationItem                                                        as ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'      
      mseg.ReservationRecordType                                                  as ReservationRecordType,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(mseg.StorageLocation as pph_lgort preserving type)                     as StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'      
      mseg.Batch                                                                  as Batch,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      cast(mseg.InventoryValuationType as pph_bwtar preserving type)              as InventoryValuationType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      cast(mseg.ConsumptionPosting as pph_kzvbr preserving type)                  as ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast(mseg.DebitCreditCode as pph_shkzg preserving type)                     as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      cast(mseg.GoodsMovementType as pph_bwart preserving type)                   as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementReason'      
      mseg.GoodsMovementReasonCode                                                as GoodsMovementReasonCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementRefDocType'
      mseg.GoodsMovementRefDocType                                                as GoodsMovementRefDocType,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      cast(mseg.InventoryUsabilityCode as inventoryusabilitycode preserving type) as InventoryUsabilityCode,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(mseg.InventorySpecialStockType as pph_sobkz preserving type)           as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)       as InventorySpecialStockValnType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(mseg.SalesOrder as co_kdauf preserving type)                           as SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(mseg.SalesOrderItem as co_kdpos preserving type)                       as SalesOrderItem,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)              as WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      mseg.Supplier                                                               as Supplier,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_Customer'
      mseg.Customer                                                               as Customer,
      @Semantics.text: true
      cast(mseg.GoodsRecipientName as pph_wempf preserving type)                  as GoodsRecipientName,
      @Semantics.text: true
      cast(mseg.UnloadingPointName as ablad preserving type)                      as UnloadingPointName,
      mseg.ReservationIsFinallyIssued                                             as ReservationIsFinallyIssued,
      mseg.IsCompletelyDelivered                                                  as IsCompletelyDelivered,
      mseg.ShelfLifeExpirationDate                                                as ShelfLifeExpirationDate,
      mseg.ManufactureDate                                                        as ManufactureDate,
      @Consumption.hidden: true
      mseg.StorageType                                                            as StorageType,
      @Consumption.hidden: true
      mseg.StorageBin                                                             as StorageBin,

      // EWM Data
      @ObjectModel.foreignKey.association: '_EWMWarehouse'      
      mseg.EWMWarehouse                                           as EWMWarehouse,
--    @ObjectModel.foreignKey.association: '_EWMStorageBin'      
      mseg.EWMStorageBin                                          as EWMStorageBin,
      mseg.HandlingUnitExternalID                                 as HandlingUnitExternalID,

      // Quantities and UoM
      mseg.MaterialBaseUnit                                       as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      mseg.QuantityInBaseUnit                                     as QuantityInBaseUnit,
      mseg.EntryUnit                                              as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type) as QuantityInEntryUnit,

      // Associations
      _RepetitiveMfgConfirmation,
      _MaterialDocumentHeader,
      afwi._MaterialDocumentYear,
      afwi._MaterialDocumentItem,
      _DocumentDate,
      _PostingDate,
      _ShelfLifeExpirationDate,
      _ManufactureDate,
      conf._Plant as _ConfirmationPlant,
      conf._RepetitiveMfgScenario,
      conf._RptvMfgConfProcessingType as _ProcessingType,
      conf._RptvMfgConfRevesalType    as _ReversalType,
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
      _WBSElementBasicData,
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

  select from I_RepetitiveMfgConfirmation as conf
    inner join I_MaterialDocumentRecord   as mseg on  mseg.MaterialDocument           = conf.MaterialDocument
                                                  and mseg.MaterialDocumentYear       = conf.MaterialDocumentYear
                                                  and mseg.MaterialDocumentRecordType = 'MDOC'

  association [1..1] to I_RepetitiveMfgConfirmation  as _RepetitiveMfgConfirmation on  $projection.RepetitiveMfgConfirmation = _RepetitiveMfgConfirmation.RepetitiveMfgConfirmation
  association [1..1] to I_MaterialDocumentHeader_2   as _MaterialDocumentHeader    on  $projection.MaterialDocument     = _MaterialDocumentHeader.MaterialDocument
                                                                                   and $projection.MaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
  association [1..1] to I_MaterialDocumentItem_2     as _MaterialDocumentItem      on  $projection.MaterialDocumentYear = _MaterialDocumentItem.MaterialDocumentYear 
                                                                                   and $projection.MaterialDocument     = _MaterialDocumentItem.MaterialDocument
                                                                                   and $projection.MaterialDocumentItem = _MaterialDocumentItem.MaterialDocumentItem
  association [1..1] to I_MaterialDocumentYear       as _MaterialDocumentYear      on  $projection.MaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [0..1] to I_CalendarDate               as _DocumentDate              on  $projection.DocumentDate = _DocumentDate.CalendarDate
  association [0..1] to I_CalendarDate               as _PostingDate               on  $projection.PostingDate = _PostingDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ShelfLifeExpirationDate   on  $projection.ShelfLifeExpirationDate = _ShelfLifeExpirationDate.CalendarDate
  association [0..1] to I_CalendarDate               as _ManufactureDate           on  $projection.ManufactureDate = _ManufactureDate.CalendarDate 
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
  association [0..1] to I_InvtrySpecialStockValnType as _InventorySpecialStockValnType on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType    on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_ConsumptionPosting         as _ConsumptionPosting        on  $projection.ConsumptionPosting = _ConsumptionPosting.ConsumptionPosting
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode           on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_StockType_2                as _InventoryUsabilityCode    on  $projection.InventoryUsabilityCode = _InventoryUsabilityCode.StockType
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Batch                      as _Batch                     on  $projection.Material = _Batch.Material
                                                                                   and $projection.Plant    = _Batch.Plant
                                                                                   and $projection.Batch    = _Batch.Batch
  association [0..1] to I_SalesOrder                 as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData       on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
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
  key conf.RepetitiveMfgConfirmation,
  key mseg.MaterialDocument,
  key mseg.MaterialDocumentYear, 
  key mseg.MaterialDocumentItem,

      // Admin
      mseg.PostingDate,
      mseg.DocumentDate,
      cast(mseg.CreatedByUser as ernam preserving type)                           as CreatedByUser,

      //Confirmation data
      cast(conf.Plant as pwwrk preserving type)                                   as ConfirmationPlant,
      conf.ReportingPointOperation,
      conf.RepetitiveMfgConfScenario,
      conf.RptvMfgConfProcessingType,
      conf.RptvMfgConfReversedCode,

      // Goods Movement data
      cast(mseg.Material as co_matnr preserving type)                             as Material,
      mseg.Plant                                                                  as Plant,
      mseg.Reservation                                                            as Reservation,
      mseg.ReservationItem                                                        as ReservationItem,
      mseg.ReservationRecordType                                                  as ReservationRecordType,
      cast(mseg.StorageLocation as pph_lgort preserving type)                     as StorageLocation,
      mseg.Batch                                                                  as Batch,
      cast(mseg.InventoryValuationType as pph_bwtar preserving type)              as InventoryValuationType,
      cast(mseg.ConsumptionPosting as pph_kzvbr preserving type)                  as ConsumptionPosting,
      cast(mseg.DebitCreditCode as pph_shkzg preserving type)                     as DebitCreditCode,
      cast(mseg.GoodsMovementType as pph_bwart preserving type)                   as GoodsMovementType,
      mseg.GoodsMovementReasonCode                                                as GoodsMovementReasonCode,
      mseg.GoodsMovementRefDocType                                                as GoodsMovementRefDocType,
      cast(mseg.InventoryUsabilityCode as inventoryusabilitycode preserving type) as InventoryUsabilityCode,
      cast(mseg.InventorySpecialStockType as pph_sobkz preserving type)           as InventorySpecialStockType,
      cast(mseg.InventorySpecialStockValnType as pph_kzbws preserving type)       as InventorySpecialStockValnType,
      cast(mseg.SalesOrder as co_kdauf preserving type)                           as SalesOrder,
      cast(mseg.SalesOrderItem as co_kdpos preserving type)                       as SalesOrderItem,
      cast(mseg.WBSElementInternalID as ps_s4_pspnr preserving type)              as WBSElementInternalID,
      mseg.Supplier                                                               as Supplier,
      mseg.Customer                                                               as Customer,
      cast(mseg.GoodsRecipientName as pph_wempf preserving type)                  as GoodsRecipientName,
      cast(mseg.UnloadingPointName as ablad preserving type)                      as UnloadingPointName,
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

      // Quantities and UoM
      mseg.MaterialBaseUnit                                       as BaseUnit,
      mseg.QuantityInBaseUnit                                     as QuantityInBaseUnit,
      mseg.EntryUnit                                              as EntryUnit,
      cast(mseg.QuantityInEntryUnit as pph_erfmg preserving type) as QuantityInEntryUnit,

      // Associations
      _RepetitiveMfgConfirmation,
      _MaterialDocumentHeader,
      _MaterialDocumentYear,
      _MaterialDocumentItem,
      _DocumentDate,
      _PostingDate,
      _ShelfLifeExpirationDate,
      _ManufactureDate,
      conf._Plant as _ConfirmationPlant,
      conf._RepetitiveMfgScenario,
      conf._RptvMfgConfProcessingType as _ProcessingType,
      conf._RptvMfgConfRevesalType    as _ReversalType,
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
      _WBSElementBasicData,
      _Supplier,
      _Customer,
      _SupplierCompanyByPlant,
      _CustomerCompanyByPlant,
      _EWMWarehouse,
      _EWMStorageBin
};
```
