---
name: D_OUTBDELIVGISTATUSCHANGED
description: "D Outbdelivgistatuschanged"
semantic_vi: "View D_OUTBDELIVGISTATUSCHANGED hiển thị các thay đổi trạng thái đơn hàng giao hàng trong Logistics Execution của SAP, hữu ích cho việc theo dõi các bản cập nhật trạng thái trong quá trình xử lý đơn hàng."
keywords:
  - "delivery document"
  - "đơn hàng giao hàng"
  - "status change"
  - "thay đổi trạng thái"
  - "logistics execution"
  - "sap"
  - "lob:logistics execution"
  - "component:le-shp-gf-2cl"
  - "sales organization"
  - "delivery document type"
  - "overall goods movement status"
  - "prev overall goods movement status"
semantic_en: "The D_OUTBDELIVGISTATUSCHANGED view exposes delivery document status changes in SAP Logistics Execution, useful for tracking status updates in delivery processing."
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
