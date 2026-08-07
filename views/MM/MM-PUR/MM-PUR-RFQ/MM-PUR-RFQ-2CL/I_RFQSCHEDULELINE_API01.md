---
name: I_RFQSCHEDULELINE_API01
description: RFQSchedule Line Api 01
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - schedule-line
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_RFQSCHEDULELINE_API01

**RFQSchedule Line Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` | ✓ | |  |  |  |  |
| `RequestForQuotationItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `_RequestForQuotation` | | ✓ | | | | |
| `_RequestForQuotationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequestForQuotation` | `I_Requestforquotation_Api01` | [1..1] |
| `_RequestForQuotationItem` | `I_RfqItem_Api01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMRFQSLINEAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{usageType.dataClass: #TRANSACTIONAL,
              usageType.serviceQuality: #B,
              usageType.sizeCategory: #L}
    @EndUserText.label: 'Schedule Line in Request for Quotation' 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true 

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE 

define view I_RfqScheduleLine_Api01 
  as select from I_RFQScheduleLine 
  
  association [1..1] to I_Requestforquotation_Api01     as _RequestForQuotation     on  $projection.RequestForQuotation = _RequestForQuotation.RequestForQuotation

  association [1..1] to I_RfqItem_Api01 as _RequestForQuotationItem on  $projection.RequestForQuotation     = _RequestForQuotationItem.RequestForQuotation
                                                                    and $projection.RequestForQuotationItem = _RequestForQuotationItem.RequestForQuotationItem  
      
{ 
    key I_RFQScheduleLine.RequestForQuotation,
    key I_RFQScheduleLine.RequestForQuotationItem,
    key I_RFQScheduleLine.ScheduleLine, 
    I_RFQScheduleLine.DelivDateCategory, 
    I_RFQScheduleLine.ScheduleLineDeliveryDate, 
    I_RFQScheduleLine.SchedLineStscDeliveryDate, 
    I_RFQScheduleLine.ScheduleLineDeliveryTime, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    I_RFQScheduleLine.ScheduleLineOrderQuantity, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    I_RFQScheduleLine.RoughGoodsReceiptQty,
    @Semantics.unitOfMeasure: true
    I_RFQScheduleLine.OrderQuantityUnit,
   /*Associations*/  
   _RequestForQuotation,
   _RequestForQuotationItem  
   
} where ScheduleLine = '0001'
```
