---
name: D_MAINTORDERSTATUSCLOSEDP
description: "D Maintorderstatusclosedp"
semantic_vi: "View này hiển thị trạng thái của các đơn bảo trì đã được đóng, cung cấp một bản xem xét của trạng thái đơn tại một thời điểm cụ thể. Nó có thể được sử dụng để theo dõi việc đóng đơn bảo trì và phân tích trạng thái của đơn đã đóng theo thời gian."
keywords:
  - "maintenance order"
  - "đơn bảo trì"
  - "status"
  - "trạng thái"
  - "closed"
  - "đóng"
  - "maintenance order status"
  - "trạng thái đơn bảo trì"
  - "pm"
  - "plant maintenance"
  - "bảo trì nhà máy"
  - "pm-woc"
semantic_en: "This view exposes the status of maintenance orders that have been closed, providing a snapshot of the order's status at a specific point in time. It can be used to track the closure of maintenance orders and analyze the status of closed orders over time."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - status
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDERSTATUSCLOSEDP

**D Maintorderstatusclosedp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderReferenceDateTime` |  | |  | `timestamp` |  |  |
| `AssignedMaintNotifIsToBeClosed` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Closed Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrderStatusClosedP
{
  @EndUserText.label             : 'Completion Date/Time'
  //@ObjectModel.mandatory         : true //incompatable changes for public API
  MaintOrderReferenceDateTime    : timestamp;
  @EndUserText.label             : 'Complete Assigned Notifications'
  AssignedMaintNotifIsToBeClosed : abap_boolean;

}
```
