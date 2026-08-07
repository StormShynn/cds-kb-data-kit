---
name: I_CNTRLREQFORQTANSCHEDULELINE
description: "CNTRLREQFORQTANSchedule Line"
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
# I_CNTRLREQFORQTANSCHEDULELINE

**CNTRLREQFORQTANSchedule Line**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |  |  |
| `CentralRequestForQuotationItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `_CentralRequestForQuotation` | | ✓ | | | | |
| `_CentralReqForQuotationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralRequestForQuotation` | `I_CentralRequestForQuotation` | [1..1] |
| `_CentralReqForQuotationItem` | `I_CentralReqForQuotationItem` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Central RFQ Item Schedule Line'
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #CHECK

@AbapCatalog.sqlViewName: 'ICNTRLRFQSCHL'
@ObjectModel:{ representativeKey: 'ScheduleLine',
               semanticKey: 'CentralRequestForQuotation',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #B,
               usageType.sizeCategory: #L }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CntrlReqForQtanScheduleLine
  as select from R_CntrlReqForQtanScheduleLine 
  
      //inner join   I_CentralRequestForQuotation on R_CntrlReqForQtanScheduleLine.CentralRequestForQuotation = I_CentralRequestForQuotation.CentralRequestForQuotation
  
    association [1..1] to I_CentralRequestForQuotation as _CentralRequestForQuotation on  $projection.CentralRequestForQuotation = _CentralRequestForQuotation.CentralRequestForQuotation
  
    association [1..1] to I_CentralReqForQuotationItem as _CentralReqForQuotationItem on  $projection.CentralRequestForQuotation     = _CentralReqForQuotationItem.CentralRequestForQuotation
                                                                                      and $projection.CentralRequestForQuotationItem = _CentralReqForQuotationItem.CentralRequestForQuotationItem

{
      @ObjectModel: { foreignKey.association: '_CentralRequestForQuotation' }
  key CentralRequestForQuotation,
      @ObjectModel: { foreignKey.association: '_CentralReqForQuotationItem' } 
  key CentralRequestForQuotationItem,
  key ScheduleLine,
      DelivDateCategory,
      ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      ScheduleLineDeliveryTime,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RoughGoodsReceiptQty,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,

      /* Associations */
      _CentralRequestForQuotation,
      _CentralReqForQuotationItem
      //_DeliveryDateCategory

}
where
  ScheduleLine = '0001'
```
