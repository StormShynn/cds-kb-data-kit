---
name: I_CNTRLSUPLRQTANSCHEDULELINE
description: CNTRLSUPLRQTANSchedule Line
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - schedule-line
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRQTANSCHEDULELINE

**CNTRLSUPLRQTANSchedule Line**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `AwardedQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `_CentralSupplierQuotation` | | ✓ | | | | |
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralSupplierQuotation` | `I_CentralSupplierQuotation` | [1..1] |
| `_CntrlSupplierQuotationItem` | `I_CntrlSupplierQuotationItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLQTNSCHDLN'
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Supplier Quotation Item Schedule Line'
@AbapCatalog.preserveKey:true

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CntrlSuplrQtanScheduleLine
  as select from R_CntrlSuplrQtanScheduleLine

  association [1..1] to I_CentralSupplierQuotation   as _CentralSupplierQuotation   on  $projection.CentralSupplierQuotation = _CentralSupplierQuotation.CentralSupplierQuotation

  association [1..1] to I_CntrlSupplierQuotationItem as _CntrlSupplierQuotationItem on  $projection.CentralSupplierQuotation     = _CntrlSupplierQuotationItem.CentralSupplierQuotation
                                                                                    and $projection.CentralSupplierQuotationItem = _CntrlSupplierQuotationItem.CentralSupplierQuotationItem
{
  key CentralSupplierQuotation,
  key CentralSupplierQuotationItem,
  key ScheduleLine,

      DelivDateCategory,
      R_CntrlSuplrQtanScheduleLine.ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      ScheduleLineDeliveryTime,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RoughGoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      R_CntrlSuplrQtanScheduleLine.AwardedQuantity,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
      R_CntrlSuplrQtanScheduleLine.PerformancePeriodStartDate,
      R_CntrlSuplrQtanScheduleLine.PerformancePeriodEndDate,

      //Associations
      _CentralSupplierQuotation,
      _CntrlSupplierQuotationItem
      //_DeliveryDateCategory
}
where
  ScheduleLine = '0001'
```
