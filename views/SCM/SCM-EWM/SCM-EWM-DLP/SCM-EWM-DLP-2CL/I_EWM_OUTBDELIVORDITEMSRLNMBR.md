---
name: I_EWM_OUTBDELIVORDITEMSRLNMBR
description: Ewm Outbdelivorditemsrlnmbr
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBDELIVORDITEMSRLNMBR

**Ewm Outbdelivorditemsrlnmbr**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMOutboundDeliveryOrder` | `_WhseOutbDeliveryOrderItem.EWMOutboundDeliveryOrder` |
| key `EWMOutboundDeliveryOrderItem` | `_WhseOutbDeliveryOrderItem.EWMOutboundDeliveryOrderItem` |
| key `EWMSerialNumber` | `cast( _SerialNumber.EWMSerialNumber as ewm_de_serialnumber )` |
| `EWMWarehouse` | `_WhseOutbDeliveryOrderItem.EWMWarehouse` |
| `EWMDeliveryDocumentCategory` | `_WhseOutbDeliveryOrderItem.EWMDeliveryDocumentCategory` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@EndUserText.label: 'Warehouse Outb Dlv Ord Itm Serial Number'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]

@VDM.viewType: #COMPOSITE
define view entity I_EWM_OutbDelivOrdItemSrlNmbr   
  as select from P_EWM_SerialNumberUnion01 as _SerialNumber
  inner join I_EWM_OutbDelivOrdItemBasic as _WhseOutbDeliveryOrderItem on _SerialNumber.DeliveryUUID = _WhseOutbDeliveryOrderItem.OutboundDeliveryOrderUUID
                                                                       and _SerialNumber.DeliveryItemUUID = _WhseOutbDeliveryOrderItem.OutboundDeliveryOrderItemUUID
                                                                       and _SerialNumber.DeliveryDocumentCategory = 'PDO'
{
  key _WhseOutbDeliveryOrderItem.EWMOutboundDeliveryOrder          as EWMOutboundDeliveryOrder,
  key _WhseOutbDeliveryOrderItem.EWMOutboundDeliveryOrderItem      as EWMOutboundDeliveryOrderItem,
  key cast( _SerialNumber.EWMSerialNumber as ewm_de_serialnumber ) as EWMSerialNumber,
      _WhseOutbDeliveryOrderItem.EWMWarehouse                      as EWMWarehouse,
      _WhseOutbDeliveryOrderItem.EWMDeliveryDocumentCategory       as EWMDeliveryDocumentCategory
}
  where _SerialNumber.DeliveryUUID = _WhseOutbDeliveryOrderItem.OutboundDeliveryOrderUUID
    and _SerialNumber.DeliveryItemUUID = _WhseOutbDeliveryOrderItem.OutboundDeliveryOrderItemUUID
    and _SerialNumber.DeliveryDocumentCategory = 'PDO'  
    and instr(_SerialNumber.EWMSerialNumber, '
) = 0
    and _SerialNumber.EWMSerialNumberIsInvalid <> 'X'
```
