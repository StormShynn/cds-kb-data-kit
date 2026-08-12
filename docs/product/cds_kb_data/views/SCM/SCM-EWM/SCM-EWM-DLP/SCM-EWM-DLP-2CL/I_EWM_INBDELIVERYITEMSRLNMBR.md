---
name: I_EWM_INBDELIVERYITEMSRLNMBR
description: "Ewm Inbdeliveryitemsrlnmbr"
app_component: SCM-EWM-DLP-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMInboundDelivery` | ✓ | | `_WhseInbDeliveryItem` | `EWMInboundDelivery` |  |  |
| `EWMInboundDeliveryItem` | ✓ | | `_WhseInbDeliveryItem` | `InboundDeliveryItem` |  |  |
| `EWMSerialNumber` | ✓ | |  | `cast( _SerialNumber.EWMSerialNumber as ewm_de_serialnumber )` |  |  |
| `EWMWarehouse` |  | | `_WhseInbDeliveryItem` | `EWMWarehouse` |  |  |
| `EWMDeliveryDocumentCategory` |  | | `_WhseInbDeliveryItem` | `DeliveryDocumentCategory` |  |  |

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
