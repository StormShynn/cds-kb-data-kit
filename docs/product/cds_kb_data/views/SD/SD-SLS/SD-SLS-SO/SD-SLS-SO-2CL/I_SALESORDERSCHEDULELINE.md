---
name: I_SALESORDERSCHEDULELINE
description: "Sales OrderSchedule Line"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - schedule-line
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERSCHEDULELINE

**Sales OrderSchedule Line**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_order preserving type)` |  |  |
| `SalesOrderItem` | ✓ | |  | `cast(SalesDocumentScheduleLine.SalesDocumentItem as sales_order_item preserving type)` |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ScheduleLineCategory` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `IsRequestedDelivSchedLine` |  | |  | `cast(SalesDocumentScheduleLine.IsRequestedDelivSchedLine as reqd_deliv)` |  |  |
| `RequestedDeliveryDate` |  | |  | `cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)` |  |  |
| `RequestedDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `CorrectedQtyInOrderQtyUnit` |  | |  |  |  |  |
| `IsConfirmedDelivSchedLine` |  | |  | `cast(SalesDocumentScheduleLine.IsConfirmedDelivSchedLine as confd_deliv)` |  |  |
| `ConfirmedDeliveryDate` |  | |  | `cast(SalesDocumentScheduleLine.ConfirmedDeliveryDate as confd_deliv_date)` |  |  |
| `ConfirmedDeliveryTime` |  | |  |  |  |  |
| `ConfdOrderQtyByMatlAvailCheck` |  | |  |  |  |  |
| `ConfdSchedLineReqdDelivDate` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `ProductAvailCheckRqmtDate` |  | |  |  |  |  |
| `ProdAvailabilityCheckRqmtType` |  | |  |  |  |  |
| `ProdAvailyCheckPlanningType` |  | |  |  |  |  |
| `ScheduleLineConfirmationStatus` |  | |  |  |  |  |
| `OrderSchedulingGroup` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `PurchasingOrderType` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `DeliveryCreationDate` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `GoodsIssueDate` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `ItemIsDeliveryRelevant` |  | |  |  |  |  |
| `DelivBlockReasonForSchedLine` |  | |  |  |  |  |
| `OpenReqdDelivQtyInOrdQtyUnit` |  | |  |  |  |  |
| `OpenReqdDelivQtyInBaseUnit` |  | |  |  |  |  |
| `OpenConfdDelivQtyInOrdQtyUnit` |  | |  |  |  |  |
| `OpenConfdDelivQtyInBaseUnit` |  | |  |  |  |  |
| `DeliveredQtyInOrderQtyUnit` |  | |  |  |  |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  |  |  |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  |  |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `OpenDeliveryNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TradeCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    representativeKey: 'ScheduleLine',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #XL
        },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@EndUserText.label: 'Sales Order Schedule Line'
@Analytics.dataCategory: #DIMENSION
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@AccessControl: { authorizationCheck:#CHECK,
                  personalData.blocking:#('TRANSACTIONAL_DATA') }
@AbapCatalog.sqlViewName: 'ISDSLSORDSCHEDLN'

define view I_SalesOrderScheduleLine
  as select from           I_SalesDocumentScheduleLine as SalesDocumentScheduleLine
    left outer to one join I_SalesDocumentBasic        as SalesDocumentBasic on SalesDocumentScheduleLine.SalesDocument = SalesDocumentBasic.SalesDocument
  association [1..1] to I_SalesOrder     as _SalesOrder     on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [1..1] to I_SalesOrderItem as _SalesOrderItem on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                            and $projection.SalesOrder     = _SalesOrderItem.SalesOrder
{
      // Key
      @ObjectModel.foreignKey.association: '_SalesOrder'
  key cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_order preserving type)      as SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key cast(SalesDocumentScheduleLine.SalesDocumentItem as sales_order_item preserving type) as SalesOrderItem,
  key SalesDocumentScheduleLine.ScheduleLine,

      // Category
      @ObjectModel.foreignKey.association: '_ScheduleLineCategory'
      SalesDocumentScheduleLine.ScheduleLineCategory,

      // Sales
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      SalesDocumentScheduleLine.OrderQuantityUnit,
      SalesDocumentScheduleLine.OrderToBaseQuantityDnmntr,
      SalesDocumentScheduleLine.OrderToBaseQuantityNmrtr,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SalesDocumentScheduleLine.BaseUnit,
      SalesDocumentScheduleLine.DeliveryDate,

      // Requested
      cast(SalesDocumentScheduleLine.IsRequestedDelivSchedLine as reqd_deliv)               as IsRequestedDelivSchedLine,
      cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)              as RequestedDeliveryDate,
      SalesDocumentScheduleLine.RequestedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.ScheduleLineOrderQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.CorrectedQtyInOrderQtyUnit,

      // Confirmed
      cast(SalesDocumentScheduleLine.IsConfirmedDelivSchedLine as confd_deliv)              as IsConfirmedDelivSchedLine,
      cast(SalesDocumentScheduleLine.ConfirmedDeliveryDate as confd_deliv_date)             as ConfirmedDeliveryDate,
      SalesDocumentScheduleLine.ConfirmedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.ConfdOrderQtyByMatlAvailCheck,
      SalesDocumentScheduleLine.ConfdSchedLineReqdDelivDate,

      // Availability
      SalesDocumentScheduleLine.ProductAvailabilityDate,
      SalesDocumentScheduleLine.ProductAvailabilityTime,
      SalesDocumentScheduleLine.ProductAvailCheckRqmtDate,
      SalesDocumentScheduleLine.ProdAvailabilityCheckRqmtType,
      SalesDocumentScheduleLine.ProdAvailyCheckPlanningType,
      @ObjectModel.foreignKey.association: '_ScheduleLineConfStatus'
      SalesDocumentScheduleLine.ScheduleLineConfirmationStatus,
      SalesDocumentScheduleLine.OrderSchedulingGroup,

      //InternalProcurement
      SalesDocumentScheduleLine.PlannedOrder,
      @ObjectModel.foreignKey.association: '_OrderID'
      SalesDocumentScheduleLine.OrderID,

      //Purchasing
      SalesDocumentScheduleLine.PurchaseRequisition,
      SalesDocumentScheduleLine.PurchaseRequisitionItem,
      SalesDocumentScheduleLine.PurchasingOrderType,
      SalesDocumentScheduleLine.PurchasingDocumentCategory,


      // Shipping
      SalesDocumentScheduleLine.DeliveryCreationDate,
      SalesDocumentScheduleLine.TransportationPlanningDate,
      SalesDocumentScheduleLine.TransportationPlanningTime,
      SalesDocumentScheduleLine.GoodsIssueDate,
      SalesDocumentScheduleLine.LoadingDate,
      SalesDocumentScheduleLine.GoodsIssueTime,
      SalesDocumentScheduleLine.LoadingTime,
      SalesDocumentScheduleLine.ItemIsDeliveryRelevant,
      @ObjectModel.foreignKey.association: '_DelivBlockReasonForSchedLine'
      SalesDocumentScheduleLine.DelivBlockReasonForSchedLine,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.OpenReqdDelivQtyInOrdQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.OpenReqdDelivQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.OpenConfdDelivQtyInOrdQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.OpenConfdDelivQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentScheduleLine.DeliveredQtyInOrderQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.DeliveredQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.RequestedRqmtQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentScheduleLine.ConfirmedRqmtQtyInBaseUnit,

      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      SalesDocumentScheduleLine.GoodsMovementType,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentScheduleLine.OpenDeliveryNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesDocumentScheduleLine.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_TradeCmplncLegalCtrlChkSts'
      SalesDocumentScheduleLine.TradeCmplncLegalCtrlChkSts,

      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SalesOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SalesOrderItem,
      SalesDocumentScheduleLine._ScheduleLineCategory,
      SalesDocumentScheduleLine._ProdAvailabilityCheckRqmtType,
      SalesDocumentScheduleLine._ScheduleLineConfStatus,
      SalesDocumentScheduleLine._TransactionCurrency,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ManufacturingOrder'
      SalesDocumentScheduleLine._OrderID,
      SalesDocumentScheduleLine._ManufacturingOrder,
      SalesDocumentScheduleLine._OrderQuantityUnit,
      SalesDocumentScheduleLine._BaseUnit,
      SalesDocumentScheduleLine._DelivBlockReasonForSchedLine,
      SalesDocumentScheduleLine._GoodsMovementType,
      SalesDocumentScheduleLine._TradeCmplncLegalCtrlChkSts
}
where
  SalesDocumentBasic.SDDocumentCategory = 'C';
```
