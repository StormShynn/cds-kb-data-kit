---
name: D_OUTBDELIVPKNGSTATUSCHANGED
description: D Outbdelivpkngstatuschanged
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
# D_OUTBDELIVPKNGSTATUSCHANGED

**D Outbdelivpkngstatuschanged**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DeliveryDocumentType` | `lfart` |
| `OverallPickingStatus` | `kostk` |
| `PreviousOverallPickingStatus` | `kostk` |
| `OverallPickingConfStatus` | `koquk` |
| `PrevOverallPickingConfStatus` | `koquk` |
| `SalesOrganization` | `vkorg` |
| `SDDocumentCategory` | `vbtypl` |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Picking Status Changed'
@ObjectModel.sapObjectNodeType.name: 'OutboundDelivery'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutbDelivPkngStatusChanged
{
      DeliveryDocumentType         : lfart;

      @Event.qualifiesEventType    : true
      @Event.previousValue.element : 'PreviousOverallPickingStatus'
      OverallPickingStatus         : kostk;

      PreviousOverallPickingStatus : kostk;
                       
      @Event.qualifiesEventType    : true
      @Event.previousValue.element : 'PrevOverallPickingConfStatus'
      OverallPickingConfStatus     : koquk;
      
      PrevOverallPickingConfStatus : koquk;
      
      SalesOrganization            : vkorg;

      SDDocumentCategory           : vbtypl;
}
```
