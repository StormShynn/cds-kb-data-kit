---
name: D_RESVNDOCUMENTITEMCREATED
description: "D Resvndocumentitemcreated"
semantic_vi: "View D_RESVNDOCUMENTITEMCREATED hiển thị dữ liệu tạo đơn đặt hàng chi tiết, có thể sử dụng khi theo dõi hoặc phân tích việc tạo đơn đặt hàng chi tiết trong quy trình cung ứng và mua sắm."
keywords:
  - "reservation"
  - "document"
  - "item"
  - "creation"
  - "sourcing"
  - "procurement"
  - "mm-im-rs"
  - "lob"
  - "reservationitem"
  - "documentitem"
  - "sourcingandprocurement"
semantic_en: "The D_RESVNDOCUMENTITEMCREATED view exposes reservation document item creation data, which is useful when tracking or analyzing item-level document creation in the sourcing and procurement process."
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-RS
  - document
  - item-level
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# D_RESVNDOCUMENTITEMCREATED

**D Resvndocumentitemcreated**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'ReservationItem'` |  | |  | `element: 'ReservationItem'` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@EndUserText.label: 'Resvn Document Item Created Bus Event'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemCreated
{
  ReservationItem : rspos;
  RecordType: rsart;   
}
```
