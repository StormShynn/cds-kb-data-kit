---
name: D_RESVNDOCUMENTITEMDELETED
description: "D Resvndocumentitemdeleted"
semantic_vi: "View này hiển thị các mục đã xóa trong tài liệu đặt hàng, có thể được sử dụng để theo dõi và quản lý các thay đổi trong tài liệu đặt hàng."
keywords:
  - "reservation document item"
  - "đặt hàng"
  - "tài liệu đặt hàng"
  - "reservation"
  - "xóa"
  - "thay đổi"
  - "sap mm"
  - "mm-im-rs-2cl"
  - "sourcing & procurement"
semantic_en: "This view exposes deleted reservation document items, which can be used to track and manage changes to reservation documents."
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
# D_RESVNDOCUMENTITEMDELETED

**D Resvndocumentitemdeleted**

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
@EndUserText.label: 'Resvn Document Item Deleted Bus Event'
@Event.type: 'Deleted'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemDeleted
{
  ReservationItem : rspos;
  RecordType: rsart; 
}
```
