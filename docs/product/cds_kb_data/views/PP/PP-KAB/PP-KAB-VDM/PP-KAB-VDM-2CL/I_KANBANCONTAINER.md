---
name: I_KANBANCONTAINER
description: "Kanbancontainer"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTAINER

**Kanbancontainer**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainer` | ✓ | |  | `cast(pkps.pkkey as vdm_pkkey preserving type)` |  |  |
| `KanbanControlCycle` |  | |  | `cast(pkps.pknum as vdm_pknum preserving type)` |  |  |
| `KanbanControlCycleItem` |  | |  | `cast(pkps.pkpos as vdm_pkpos preserving type)` |  |  |
| `Plant` |  | | `_KanbanControlCycle` | `Plant` |  |  |
| `ProductionSupplyArea` |  | | `_KanbanControlCycle` | `ProductionSupplyArea` |  |  |
| `KanbanContainerStatus` |  | |  | `cast(pkps.pkbst as vdm_pkbst preserving type)` |  |  |
| `IsLocked` |  | |  | `cast(pkps.spkkz as vdm_spkkz preserving type)` |  |  |
| `LastChangeDate` |  | |  | `cast(pkps.saedt as vdm_saedt preserving type)` |  |  |
| `LastChangeTime` |  | |  | `cast(pkps.saeuz as vdm_saeuz preserving type)` |  |  |
| `PlannedOrder` |  | |  | `cast(pkps.plnum as vdm_plnum preserving type)` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `PurchasingDocument` |  | |  | `cast(pkps.ebeln as pph_ebeln preserving type)` |  |  |
| `PurchasingDocumentItem` |  | |  | `cast(pkps.ebelp as pph_ebelp preserving type)` |  |  |
| `SalesDocument` |  | |  | `cast(pkps.vbeln as vdm_vbeln preserving type)` |  |  |
| `SalesDocumentItem` |  | |  | `cast(pkps.vbelp as vdm_posnr preserving type)` |  |  |
| `RepetitiveMfgConfirmation` |  | |  | `cast(pkps.prtnr as pph_prtnr preserving type)` |  |  |
| `Reservation` |  | |  | `cast(pkps.rsnum as vdm_rsnum preserving type)` |  |  |
| `ReservationItem` |  | |  | `cast(pkps.rspos as vdm_rspos preserving type)` |  |  |
| `MaterialDocument` |  | |  | `cast(pkps.mblnr as vdm_mblnr preserving type)` |  |  |
| `MaterialDocumentYear` |  | |  | `cast(pkps.mjahr as vdm_mjahr preserving type)` |  |  |
| `MaterialDocumentItem` |  | |  | `cast(pkps.mblpo as vdm_mblpo preserving type)` |  |  |
| `BaseUnit` |  | | `_KanbanControlCycle` | `BaseUnit` |  |  |
| `ActualQuantityInBaseUnit` |  | |  | `cast(pkps.pkimg as vdm_pkimg preserving type)` |  |  |
| `RequestedQuantityInBaseUnit` |  | |  | `cast(pkps.pkbmg as vdm_pkbmg preserving type)` |  |  |
| `PreviousLastChangeDate` |  | |  | `cast(pkps.sadt2 as vdm_previouslastchangedate preserving type)` |  |  |
| `PreviousLastChangeTime` |  | |  | `cast(pkps.sauz2 as vdm_previouslastchangetime preserving type)` |  |  |
| `TransferRequirementNumber` |  | |  | `cast(pkps.tbnum as vdm_tbnum preserving type)` |  |  |
| `TransferRequirementItem` |  | |  | `cast(pkps.tbpos as vdm_tbpos preserving type)` |  |  |
| `IsDeleted` |  | |  | `cast(pkps.pklkz as vdm_pklkz preserving type)` |  |  |
| `PreviousKanbanContainerStatus` |  | |  | `cast(pkps.pkbsa as vdm_pkbsa preserving type)` |  |  |
| `InternalJITCallNumber` |  | |  | `cast(pkps.pabnum as vdm_pabnum preserving type)` |  |  |
| `JITCallNumber` |  | |  | `cast(pkps.pabnum as vdm_pabnum preserving type)` |  |  |
| `JITCallItemNumber` |  | |  | `cast(pkps.pabpos as vdm_pabpos preserving type)` |  |  |
| `PlannedReceiptDateTime` |  | |  | `cast(pkps.pkgpzg as vdm_pkgpzg preserving type)` |  |  |
| `ChangedPackgInstrnDataIsAvail` |  | |  | `cast(pkps.hdflg as vdm_hdflg preserving type)` |  |  |
| `SequentialNmbrOfSuplrConf` |  | |  | `cast(pkps.etens as vdm_etens preserving type)` |  |  |
| `BackflushReportingPoint` |  | |  | `cast(pkps.zpunkt as vdm_sa_zpunkt preserving type)` |  |  |
| `PurchasingDocumentCategory` |  | |  | `cast(pkps.bstyp as vdm_ebstyp preserving type)` |  |  |
| `Warehouse` |  | |  | `cast(pkps.ewm_lgnum as vdm_lgnum preserving type)` |  |  |
| `EWMWarehouse` |  | |  | `cast(pkps.lgnum_ewm as vdm_lgnum_ewm preserving type)` |  |  |
| `WarehouseTask` |  | |  | `cast(pkps.ewm_tanum as vdm_warehousetask preserving type)` |  |  |
| `EWMWarehouseRequest` |  | |  | `cast(pkps.ewm_wh_request as vdm_warehouse_request preserving type)` |  |  |
| `EWMWarehouseRequestItem` |  | |  | `cast(pkps.ewm_wh_request_item as vdm_warehouse_request_item preserving type)` |  |  |
| `WhseGoodsMovementDocument` |  | |  | `cast(pkps.ewm_gm_doc as vdm_whsegoodsmovementdoc preserving type)` |  |  |
| `WhseGoodsMovementDocumentItem` |  | |  | `cast(pkps.ewm_gm_doc_item as vdm_whsegoodsmovementdocitem preserving type)` |  |  |
| `LastChangeDateTime` |  | |  | `cast(pkps.lastchange_datetime as vdm_lastchangedatetime preserving type)` |  |  |
| `Supplier` |  | | `_KanbanControlCycle` | `Supplier` |  |  |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_KanbanControlCycleItem` | | ✓ | | | | |
| `_KanbanContainerStatus` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductionSupplyArea` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PlannedOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_RepetitiveMfgConfirmation` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_KanbanControlCycleItem` | `I_KanbanControlCycleItem` | [1..1] |
| `_KanbanContainerStatus` | `I_KanbanStatus` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductionSupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [0..1] |
| `_Order` | `I_LogisticsOrder` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_RepetitiveMfgConfirmation` | `I_RepetitiveMfgConfirmation` | [0..1] |
| `_Reservation` | `I_ReservationDocumentHeader` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'KanbanContainer'
@ObjectModel.semanticKey: 'KanbanContainer'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Kanban Container'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_KanbanContainer
  as select from pkps as pkps

  association [1..1] to I_KanbanControlCycle        as _KanbanControlCycle        on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
  association [1..1] to I_KanbanControlCycleItem    as _KanbanControlCycleItem    on  $projection.KanbanControlCycle     = _KanbanControlCycleItem.KanbanControlCycle
                                                                                  and $projection.KanbanControlCycleItem = _KanbanControlCycleItem.KanbanControlCycleItem
  association [1..1] to I_KanbanStatus              as _KanbanContainerStatus     on  $projection.KanbanContainerStatus = _KanbanContainerStatus.KanbanStatus
  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_ProductionSupplyArea      as _ProductionSupplyArea      on  $projection.Plant                = _ProductionSupplyArea.Plant
                                                                                  and $projection.ProductionSupplyArea = _ProductionSupplyArea.ProductionSupplyArea
  association [1..1] to I_UnitOfMeasure             as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_PlannedOrder              as _PlannedOrder              on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
  association [0..1] to I_LogisticsOrder            as _Order                     on  $projection.OrderID = _Order.OrderID
  // order item currently not exposed, because it is not filled in PKPS
  // association [0..1] to I_OrderItem                 as _OrderItem                 on  $projection.OrderID   = _OrderItem.OrderID
  //                                                                                 and $projection.OrderItem = _OrderItem.OrderItem
  association [0..1] to I_PurchasingDocument        as _PurchasingDocument        on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument
  association [0..1] to I_PurchasingDocumentItem    as _PurchasingDocumentItem    on  $projection.PurchasingDocument     = _PurchasingDocumentItem.PurchasingDocument
                                                                                  and $projection.PurchasingDocumentItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1] to I_SalesDocument             as _SalesDocument             on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem         as _SalesDocumentItem         on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                                  and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_RepetitiveMfgConfirmation as _RepetitiveMfgConfirmation on  $projection.RepetitiveMfgConfirmation = _RepetitiveMfgConfirmation.RepetitiveMfgConfirmation
  association [0..1] to I_ReservationDocumentHeader as _Reservation               on  $projection.Reservation = _Reservation.Reservation

  association [0..1] to I_Supplier                  as _Supplier                  on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant    as _SupplierCompanyByPlant    on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                                  and $projection.Plant    = _SupplierCompanyByPlant.Plant
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(pkps.pkkey as vdm_pkkey preserving type)                                as KanbanContainer,

      // Control Cycle
      @ObjectModel.foreignKey.association: '_KanbanControlCycle'
      cast(pkps.pknum as vdm_pknum preserving type)                                as KanbanControlCycle,
      @ObjectModel.foreignKey.association: '_KanbanControlCycleItem'
      cast(pkps.pkpos as vdm_pkpos preserving type)                                as KanbanControlCycleItem,
      @ObjectModel.foreignKey.association: '_Plant'
      _KanbanControlCycle.Plant                                                    as Plant,
      @ObjectModel.foreignKey.association: '_ProductionSupplyArea'
      _KanbanControlCycle.ProductionSupplyArea                                     as ProductionSupplyArea,

      // Attributes
      @ObjectModel.foreignKey.association: '_KanbanContainerStatus'
      cast(pkps.pkbst as vdm_pkbst preserving type)                                as KanbanContainerStatus,
      cast(pkps.spkkz as vdm_spkkz preserving type)                                as IsLocked,
      @Semantics.systemDate.lastChangedAt: true
      cast(pkps.saedt as vdm_saedt preserving type)                                as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      cast(pkps.saeuz as vdm_saeuz preserving type)                                as LastChangeTime,

      // Assignments
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      cast(pkps.plnum as vdm_plnum preserving type)                                as PlannedOrder,
      @ObjectModel.foreignKey.association: '_Order'
      pkps.aufnr                                                                   as OrderID,
      // order item currently not exposed, because it is not filled in PKPS
      // @ObjectModel.foreignKey.association: '_OrderItem'
      // cast(pkps.posnr as pph_posnr preserving type) as OrderItem,
      -- @ObjectModel.foreignKey.association: '_PurchasingDocument'
      cast(pkps.ebeln as pph_ebeln preserving type)                                as PurchasingDocument,
      -- @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      cast(pkps.ebelp as pph_ebelp preserving type)                                as PurchasingDocumentItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      cast(pkps.vbeln as vdm_vbeln preserving type)                                as SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      cast(pkps.vbelp as vdm_posnr preserving type)                                as SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_RepetitiveMfgConfirmation'
      cast(pkps.prtnr as pph_prtnr preserving type)                                as RepetitiveMfgConfirmation,
      @ObjectModel.foreignKey.association: '_Reservation'
      cast(pkps.rsnum as vdm_rsnum preserving type)                                as Reservation,
      cast(pkps.rspos as vdm_rspos preserving type)                                as ReservationItem,
      cast(pkps.mblnr as vdm_mblnr preserving type)                                as MaterialDocument,
      cast(pkps.mjahr as vdm_mjahr preserving type)                                as MaterialDocumentYear,
      cast(pkps.mblpo as vdm_mblpo preserving type)                                as MaterialDocumentItem,

      // Quantities and UoM
      @Semantics.unitOfMeasure: true
      _KanbanControlCycle.BaseUnit                                                 as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(pkps.pkimg as vdm_pkimg preserving type)                                as ActualQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(pkps.pkbmg as vdm_pkbmg preserving type)                                as RequestedQuantityInBaseUnit,

      //
      cast(pkps.sadt2 as vdm_previouslastchangedate preserving type)               as PreviousLastChangeDate,
      cast(pkps.sauz2 as vdm_previouslastchangetime preserving type)               as PreviousLastChangeTime,
      // purchasing document schedule line currently not exposed, because it is not filled in PKPS
      // pkps.etenr as PurchasingDocumentScheduleLine,
      cast(pkps.tbnum as vdm_tbnum preserving type)                                as TransferRequirementNumber,
      cast(pkps.tbpos as vdm_tbpos preserving type)                                as TransferRequirementItem,
      cast(pkps.pklkz as vdm_pklkz preserving type)                                as IsDeleted,
      cast(pkps.pkbsa as vdm_pkbsa preserving type)                                as PreviousKanbanContainerStatus,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'JITCallNumber'
      cast(pkps.pabnum as vdm_pabnum preserving type)                              as InternalJITCallNumber,
      cast(pkps.pabnum as vdm_pabnum preserving type)                              as JITCallNumber,
      cast(pkps.pabpos as vdm_pabpos preserving type)                              as JITCallItemNumber,
      cast(pkps.pkgpzg as vdm_pkgpzg preserving type)                              as PlannedReceiptDateTime,
      cast(pkps.hdflg as vdm_hdflg preserving type)                                as ChangedPackgInstrnDataIsAvail,
      cast(pkps.etens as vdm_etens preserving type)                                as SequentialNmbrOfSuplrConf,
      cast(pkps.zpunkt as vdm_sa_zpunkt preserving type)                           as BackflushReportingPoint,
      cast(pkps.bstyp as vdm_ebstyp preserving type)                               as PurchasingDocumentCategory,
      cast(pkps.ewm_lgnum as vdm_lgnum preserving type)                            as Warehouse,
      cast(pkps.lgnum_ewm as vdm_lgnum_ewm preserving type)                        as EWMWarehouse,
      cast(pkps.ewm_tanum as vdm_warehousetask preserving type)                    as WarehouseTask,
      cast(pkps.ewm_wh_request as vdm_warehouse_request preserving type)           as EWMWarehouseRequest,
      cast(pkps.ewm_wh_request_item as vdm_warehouse_request_item preserving type) as EWMWarehouseRequestItem,
      cast(pkps.ewm_gm_doc as vdm_whsegoodsmovementdoc preserving type)            as WhseGoodsMovementDocument,
      cast(pkps.ewm_gm_doc_item as vdm_whsegoodsmovementdocitem preserving type)   as WhseGoodsMovementDocumentItem,

      @Semantics.systemDateTime.lastChangedAt: true
      cast(pkps.lastchange_datetime as vdm_lastchangedatetime preserving type)     as LastChangeDateTime,

      // Only for DCL
      @Consumption.hidden: true
      _KanbanControlCycle.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,

      // Associations
      _KanbanControlCycle,
      _KanbanControlCycleItem,
      _KanbanContainerStatus,
      _Plant,
      _ProductionSupplyArea,
      _BaseUnit,
      _PlannedOrder,
      _Order,
      // order item currently not exposed, because it is not filled in PKPS
      // _OrderItem,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _SalesDocument,
      _SalesDocumentItem,
      _RepetitiveMfgConfirmation,
      _Reservation
}
```
