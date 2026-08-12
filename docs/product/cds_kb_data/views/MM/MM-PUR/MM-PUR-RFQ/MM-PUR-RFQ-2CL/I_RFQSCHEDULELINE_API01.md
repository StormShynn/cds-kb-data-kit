---
name: I_RFQSCHEDULELINE_API01
description: "RFQSchedule Line Api 01"
app_component: MM-PUR-RFQ-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
