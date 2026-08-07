---
name: D_OUTBDELIVDELIVBLOCKCHANGED
description: D Outbdelivdelivblockchanged
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBDELIVDELIVBLOCKCHANGED

**D Outbdelivdelivblockchanged**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryDocumentType` |  | |  | `lfart` |
| `DeliveryBlockReason` |  | |  | `lifsk` |
| `PreviousDeliveryBlockReason` |  | |  | `lifsk` |
| `SalesOrganization` |  | |  | `vkorg` |
| `SDDocumentCategory` |  | |  | `vbtypl` |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Delivery Block Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutbDelivDelivBlockChanged
{
      DeliveryDocumentType        : lfart;

      @Event.qualifiesEventType   : true
      @Event.previousValue.element: 'PreviousDeliveryBlockReason'
      DeliveryBlockReason         : lifsk;

      PreviousDeliveryBlockReason : lifsk;

      SalesOrganization           : vkorg;

      SDDocumentCategory          : vbtypl;
}
```
