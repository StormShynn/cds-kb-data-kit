---
name: D_RESVNDOCUMENTITEMCHANGED
description: "D Resvndocumentitemchanged"
semantic_vi: "View này hiển thị dữ liệu thay đổi của mục trong tài liệu đặt hàng, có thể được sử dụng để theo dõi các thay đổi của mục trong tài liệu đặt hàng."
keywords:
  - "reservation"
  - "document"
  - "item"
  - "change"
  - "reservation document"
  - "reservation item"
  - "reservation document item"
  - "mm-im-rs"
  - "sourcing & procurement"
  - "lob"
  - "component"
  - "mm-im-rs-2cl"
semantic_en: "This view exposes reservation document item change data, which can be used to track changes to items in a reservation document."
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
# D_RESVNDOCUMENTITEMCHANGED

**D Resvndocumentitemchanged**

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
@EndUserText.label: 'Resvn Document Item Changed Bus Event'
@Event.type: 'Changed'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemChanged
{
  ReservationItem : rspos;
  RecordType: rsart;   
}
```
