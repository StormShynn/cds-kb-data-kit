---
name: D_OUTBDELIVGISTATUSCHANGED
description: "D Outbdelivgistatuschanged"
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
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# D_OUTBDELIVGISTATUSCHANGED

**D Outbdelivgistatuschanged**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `OverallGoodsMovementStatus` |  | |  | `wbstk` |  |  |
| `PrevOverallGoodsMovementStatus` |  | |  | `wbstk` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Goods Issue Status Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutbDelivGIStatusChanged
{
      DeliveryDocumentType           : lfart;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element   : 'PrevOverallGoodsMovementStatus'
      OverallGoodsMovementStatus     : wbstk;

      PrevOverallGoodsMovementStatus : wbstk;

      SalesOrganization              : vkorg;

      SDDocumentCategory             : vbtypl;
}
```
