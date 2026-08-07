---
name: D_OUTBOUNDDELIVERYITEMDELETED
description: "D Outbound DeliveryITEMDELETED"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBOUNDDELIVERYITEMDELETED

**D Outbound DeliveryITEMDELETED**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentItemNumber` |  | |  | `posnr` |  |  |
| `OutboundDeliveryItem` |  | |  | `outbound_delivery_item` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Item Deleted'
@ObjectModel.sapObjectNodeType.name: 'OutboundDeliveryItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Event.sapObjectNodeTypeKey:[{element:'OutboundDelivery'}, {element:'OutboundDeliveryItem'}]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryItemDeleted
{
      DocumentItemNumber          : posnr;
      OutboundDeliveryItem        : outbound_delivery_item;
      DeliveryDocumentType        : lfart;
      SalesOrganization           : vkorg;
      SDDocumentCategory          : vbtypl;      
}
```
