---
name: D_OUTBDELIVPKNGSTATUSCHANGED
description: "D Outbdelivpkngstatuschanged"
semantic_vi: "View này hiển thị các thay đổi trạng thái tài liệu giao hàng, cho phép các nhà phát triển theo dõi các thay đổi trạng thái tổng hợp và xác nhận."
keywords:
  - "delivery document"
  - "tài liệu giao hàng"
  - "logistics execution"
  - "status change"
  - "thay đổi trạng thái"
  - "overall picking status"
  - "trạng thái tổng hợp"
  - "sap cds"
  - "cds view"
  - "view d_outbdelivpkngstatuschanged"
semantic_en: "This view exposes delivery document status changes, allowing developers to track changes in overall picking and confirmation statuses. It is used when analyzing logistics execution data."
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |
| `OverallPickingStatus` |  | |  | `kostk` |  |  |
| `PreviousOverallPickingStatus` |  | |  | `kostk` |  |  |
| `OverallPickingConfStatus` |  | |  | `koquk` |  |  |
| `PrevOverallPickingConfStatus` |  | |  | `koquk` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `SDDocumentCategory` |  | |  | `vbtypl` |  |  |

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
