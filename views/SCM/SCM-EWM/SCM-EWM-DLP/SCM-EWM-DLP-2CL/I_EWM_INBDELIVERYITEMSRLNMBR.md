---
name: I_EWM_INBDELIVERYITEMSRLNMBR
description: Ewm Inbdeliveryitemsrlnmbr
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
  - delivery
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_INBDELIVERYITEMSRLNMBR

**Ewm Inbdeliveryitemsrlnmbr**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMInboundDelivery` | `_WhseInbDeliveryItem.EWMInboundDelivery` |
| key `EWMInboundDeliveryItem` | `_WhseInbDeliveryItem.InboundDeliveryItem` |
| key `EWMSerialNumber` | `cast( _SerialNumber.EWMSerialNumber as ewm_de_serialnumber )` |
| `EWMWarehouse` | `_WhseInbDeliveryItem.EWMWarehouse` |
| `EWMDeliveryDocumentCategory` | `_WhseInbDeliveryItem.DeliveryDocumentCategory` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@EndUserText.label: 'Warehouse Inb Deliv Item Serial Number'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]

@VDM.viewType: #COMPOSITE
define view entity I_EWM_InbDeliveryItemSrlNmbr
  as select from P_EWM_SerialNumberUnion01 as _SerialNumber
  inner join I_EWM_InbDeliveryItemBasic as _WhseInbDeliveryItem on _SerialNumber.DeliveryUUID = _WhseInbDeliveryItem.InboundDeliveryUUID
                                                                and _SerialNumber.DeliveryItemUUID = _WhseInbDeliveryItem.InboundDeliveryItemUUID
                                                                and _SerialNumber.DeliveryDocumentCategory = 'PDI'
{
  key _WhseInbDeliveryItem.EWMInboundDelivery                      as EWMInboundDelivery,
  key _WhseInbDeliveryItem.InboundDeliveryItem                     as EWMInboundDeliveryItem,
  key cast( _SerialNumber.EWMSerialNumber as ewm_de_serialnumber ) as EWMSerialNumber,
      _WhseInbDeliveryItem.EWMWarehouse                            as EWMWarehouse,
      _WhseInbDeliveryItem.DeliveryDocumentCategory                as EWMDeliveryDocumentCategory
}
  where _SerialNumber.DeliveryUUID = _WhseInbDeliveryItem.InboundDeliveryUUID
    and _SerialNumber.DeliveryItemUUID = _WhseInbDeliveryItem.InboundDeliveryItemUUID
    and _SerialNumber.DeliveryDocumentCategory = 'PDI' 
    and _WhseInbDeliveryItem.DeliveryItemCategory <> 'CGO' // Filter to remove tranist warehouse deliveries
    and instr(_SerialNumber.EWMSerialNumber, '
) = 0
```
