---
name: I_SLSORDWTHOUTCHRGSCHEDLINE
description: "Slsordwthoutchrgschedline"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWTHOUTCHRGSCHEDLINE

**Slsordwthoutchrgschedline**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  | `cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_order preserving type)` |  |  |
| `SalesOrderWithoutChargeItem` | ✓ | |  | `cast(SalesDocumentScheduleLine.SalesDocumentItem as sales_order_item preserving type)` |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ScheduleLineCategory` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `IsRequestedDelivSchedLine` |  | |  | `cast(IsRequestedDelivSchedLine as reqd_deliv)` |  |  |
| `RequestedDeliveryDate` |  | |  | `cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)` |  |  |
| `RequestedDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `CorrectedQtyInOrderQtyUnit` |  | |  |  |  |  |
| `IsConfirmedDelivSchedLine` |  | |  | `cast(IsConfirmedDelivSchedLine as confd_deliv)` |  |  |
| `ConfirmedDeliveryDate` |  | |  | `cast(ConfirmedDeliveryDate as confd_deliv_date)` |  |  |
| `ConfirmedDeliveryTime` |  | |  |  |  |  |
| `ConfdOrderQtyByMatlAvailCheck` |  | |  |  |  |  |
| `ConfdSchedLineReqdDelivDate` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `ProductAvailCheckRqmtDate` |  | |  |  |  |  |
| `ProdAvailabilityCheckRqmtType` |  | |  |  |  |  |
| `ProdAvailyCheckPlanningType` |  | |  |  |  |  |
| `ScheduleLineConfirmationStatus` |  | |  |  |  |  |
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
| `GoodsMovementType` |  | |  |  |  |  |
| `OpenDeliveryNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |
| `_SalesOrderWithoutChargeItem` | | ✓ | | | | |
| `_ScheduleLineCategory` | | ✓ | | | | |
| `_ProdAvailabilityCheckRqmtType` | | ✓ | | | | |
| `_ScheduleLineConfStatus` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_DelivBlockReasonForSchedLine` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutCharge` | `I_SalesOrderWithoutCharge` | [1..1] |
| `_SalesOrderWithoutChargeItem` | `I_SalesOrderWithoutChargeItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Schedule Line for Sales Order Without Charge'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog.sqlViewName: 'ISDSOWOCSCHEDLN'
@AbapCatalog.preserveKey:true
@AccessControl: { authorizationCheck:#CHECK,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }
@ObjectModel: {
   representativeKey: 'ScheduleLine',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]  
}
@Metadata.allowExtensions: true
@Analytics:{dataCategory:#DIMENSION}
@Metadata.ignorePropagatedAnnotations: true

define view I_SlsOrdWthoutChrgSchedLine 
               as select from I_SalesDocumentScheduleLine as SalesDocumentScheduleLine 
       left outer to one join I_SalesDocumentBasic        as SalesDocumentBasic           on  SalesDocumentScheduleLine.SalesDocument = SalesDocumentBasic.SalesDocument
  association [1..1] to I_SalesOrderWithoutCharge         as _SalesOrderWithoutCharge     on  $projection.SalesOrderWithoutCharge = _SalesOrderWithoutCharge.SalesOrderWithoutCharge
  association [1..1] to I_SalesOrderWithoutChargeItem     as _SalesOrderWithoutChargeItem on  $projection.SalesOrderWithoutChargeItem = _SalesOrderWithoutChargeItem.SalesOrderWithoutChargeItem
                                                                                         and  $projection.SalesOrderWithoutCharge = _SalesOrderWithoutChargeItem.SalesOrderWithoutCharge
{
      // Key
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutCharge'
  key cast(SalesDocumentScheduleLine.SalesDocument as vdm_sales_order preserving type)      as SalesOrderWithoutCharge,
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutChargeItem'
  key cast(SalesDocumentScheduleLine.SalesDocumentItem as sales_order_item preserving type) as SalesOrderWithoutChargeItem,
  key SalesDocumentScheduleLine.ScheduleLine,

      // Category
      @ObjectModel.foreignKey.association: '_ScheduleLineCategory'
      ScheduleLineCategory,

      // Sales
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      SalesDocumentScheduleLine.DeliveryDate,

      // Requested
      cast(IsRequestedDelivSchedLine as reqd_deliv)                             as IsRequestedDelivSchedLine,
      cast(SalesDocumentScheduleLine.RequestedDeliveryDate as reqd_deliv_date)  as RequestedDeliveryDate,
      RequestedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      CorrectedQtyInOrderQtyUnit,

      // Confirmed
      cast(IsConfirmedDelivSchedLine as confd_deliv)                            as IsConfirmedDelivSchedLine,
      cast(ConfirmedDeliveryDate as confd_deliv_date)                           as ConfirmedDeliveryDate,
      ConfirmedDeliveryTime,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdOrderQtyByMatlAvailCheck,
      ConfdSchedLineReqdDelivDate,

      // Availibity
      ProductAvailabilityDate,
      ProductAvailabilityTime,
      ProductAvailCheckRqmtDate,
      ProdAvailabilityCheckRqmtType,
      ProdAvailyCheckPlanningType,
      @ObjectModel.foreignKey.association: '_ScheduleLineConfStatus'
      ScheduleLineConfirmationStatus,

      //InternalProcurement
      PlannedOrder,
      @ObjectModel.foreignKey.association: '_OrderID'
      SalesDocumentScheduleLine.OrderID,

      //Purchasing
      PurchaseRequisition,
      PurchaseRequisitionItem,
      PurchasingOrderType,
      PurchasingDocumentCategory,

      // Shipping
      DeliveryCreationDate,
      TransportationPlanningDate,
      TransportationPlanningTime,
      GoodsIssueDate,
      LoadingDate,
      GoodsIssueTime,
      LoadingTime,
      ItemIsDeliveryRelevant,
      @ObjectModel.foreignKey.association: '_DelivBlockReasonForSchedLine'
      DelivBlockReasonForSchedLine,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OpenReqdDelivQtyInOrdQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      OpenReqdDelivQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OpenConfdDelivQtyInOrdQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      OpenConfdDelivQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      DeliveredQtyInOrderQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      DeliveredQuantityInBaseUnit,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      OpenDeliveryNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesDocumentScheduleLine.TransactionCurrency,

      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SalesOrderWithoutCharge,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SalesOrderWithoutChargeItem,
      _ScheduleLineCategory,
      _ProdAvailabilityCheckRqmtType,
      _ScheduleLineConfStatus,
      SalesDocumentScheduleLine._TransactionCurrency,
      _OrderID,
      _OrderQuantityUnit,
      _BaseUnit,
      _DelivBlockReasonForSchedLine,
      _GoodsMovementType

}
where SalesDocumentBasic.SDDocumentCategory = 'I';
```
