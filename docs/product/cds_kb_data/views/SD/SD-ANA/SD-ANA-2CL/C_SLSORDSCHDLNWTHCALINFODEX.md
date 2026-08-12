---
name: C_SLSORDSCHDLNWTHCALINFODEX
description: "Slsordschdlnwthcalinfodex"
app_component: SD-ANA-2CL
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
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# C_SLSORDSCHDLNWTHCALINFODEX

**Slsordschdlnwthcalinfodex**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
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
| `SalesOrder` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `TransitPlant` |  | |  |  |  |  |
| `IsRequestedDelivSchedLine` |  | |  |  |  |  |
| `IsConfirmedDelivSchedLine` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `ConfdOrderQtyByMatlAvailCheck` |  | |  |  |  |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  |  |  |
| `DeliveredQtyInOrderQtyUnit` |  | |  |  |  |  |
| `ValueChainCategory` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ConfirmedDeliveryDate` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `FirstDayOfWeekDate` |  | |  |  |  |  |
| `FirstDayOfMonthDate` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `OrderQuantityUnitSAPCode` |  | |  | `UnitOfMeasureSAPCode` |  |  |
| `OrderQuantityUnitISOCode` |  | |  | `UnitOfMeasureISOCode` |  |  |
| `BaseUnitSAPCode` |  | |  | `UnitOfMeasureSAPCode` |  |  |
| `BaseUnitISOCode` |  | |  | `UnitOfMeasureISOCode` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSDSOHISTDX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl:{
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Data Extraction for Sales Order Sched Line'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'SalesOrderScheduleLine'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true
    }

 }

define view C_SlsOrdSchdLnWthCalInfoDEX
  as select from           I_SalesOrderScheduleLine as SalesOrderScheduleLine
    left outer to one join I_SalesDocumentItemBasic as SalesOrderItem             on  SalesOrderScheduleLine.SalesOrder     = SalesOrderItem.SalesDocument
                                                                                  and SalesOrderScheduleLine.SalesOrderItem = SalesOrderItem.SalesDocumentItem
    left outer to one join I_CalendarDate           as DeliveryDate               on  SalesOrderScheduleLine.DeliveryDate   = DeliveryDate.CalendarDate

    left outer to one join I_UnitOfMeasure          as OrderQuantityUnitofMeasure on SalesOrderScheduleLine.OrderQuantityUnit = OrderQuantityUnitofMeasure.UnitOfMeasure
    left outer to one join I_UnitOfMeasure          as BaseUnitofMeasure          on SalesOrderScheduleLine.BaseUnit = BaseUnitofMeasure.UnitOfMeasure
  association [1..1] to I_SalesOrder     as _SalesOrder     on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [1..1] to I_SalesOrderItem as _SalesOrderItem on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                            and $projection.SalesOrder     = _SalesOrderItem.SalesOrder


{
      @ObjectModel.foreignKey.association: '_SalesOrder'
  key SalesOrderScheduleLine.SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key SalesOrderScheduleLine.SalesOrderItem,

  key SalesOrderScheduleLine.ScheduleLine,
      SalesOrderItem.SalesDocumentType,
      
      SalesOrderItem.SalesOrganization,
      SalesOrderItem.DistributionChannel,
      SalesOrderItem.Division,
      
      SalesOrderItem.SoldToParty,
      SalesOrderItem.ShipToParty,
      SalesOrderItem.Product,
      SalesOrderItem.Plant,
      SalesOrderItem.TransitPlant,
      
      SalesOrderScheduleLine.IsRequestedDelivSchedLine,
      SalesOrderScheduleLine.IsConfirmedDelivSchedLine,

      //Quantity
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderScheduleLine.ScheduleLineOrderQuantity,
      @Aggregation.default:  #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderScheduleLine.ConfdOrderQtyByMatlAvailCheck,        
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesOrderScheduleLine.DeliveredQuantityInBaseUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderScheduleLine.DeliveredQtyInOrderQtyUnit,

      // Value Chain Management
      SalesOrderItem.ValueChainCategory,

      // Dates
      SalesOrderScheduleLine.RequestedDeliveryDate,
      SalesOrderScheduleLine.ConfirmedDeliveryDate,
      SalesOrderScheduleLine.DeliveryDate,
      DeliveryDate.FirstDayOfWeekDate,
      DeliveryDate.FirstDayOfMonthDate,    

      // Unit Of Measure
      @Semantics.unitOfMeasure: true
      SalesOrderScheduleLine.OrderQuantityUnit,
      @Semantics.unitOfMeasure: true
      SalesOrderScheduleLine.BaseUnit,
      
      SalesOrderItem.OrderToBaseQuantityDnmntr,
      SalesOrderItem.OrderToBaseQuantityNmrtr,
      OrderQuantityUnitofMeasure.UnitOfMeasureSAPCode as OrderQuantityUnitSAPCode,
      OrderQuantityUnitofMeasure.UnitOfMeasureISOCode as OrderQuantityUnitISOCode,
      BaseUnitofMeasure.UnitOfMeasureSAPCode          as BaseUnitSAPCode,
      BaseUnitofMeasure.UnitOfMeasureISOCode          as BaseUnitISOCode,

      _SalesOrder,
      _SalesOrderItem
}
```
