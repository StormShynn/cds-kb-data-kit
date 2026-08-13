---
name: D_MAINTORDASSIGNNOTIFICATIONP
description: "D Maintordassignnotificationp"
semantic_vi: "View này hiển thị thông báo chỉ định đơn đặt hàng bảo trì, được sử dụng để gán nhiệm vụ bảo trì cho các đơn đặt hàng cụ thể. Nó được sử dụng để lấy và quản lý thông báo này trong thành phần Bảo trì Cây Cối."
keywords:
  - "maintenance order"
  - "đơn đặt hàng bảo trì"
  - "plant maintenance"
  - "pm"
  - "pm-woc"
  - "notification"
  - "thông báo"
  - "assignment"
  - "gán nhiệm vụ"
  - "cds view"
semantic_en: "This view exposes maintenance order assignment notifications, which are used to assign maintenance tasks to specific orders. It is used to retrieve and manage these notifications in the Plant Maintenance component."
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
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDASSIGNNOTIFICATIONP

**D Maintordassignnotificationp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  | `qmnum` |  |  |
| `NotificationIsHeaderNotif` |  | |  | `eams_flag_header_notif` |  |  |

## Source Code

```abap
@EndUserText.label: 'Assign Notification to Order'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdAssignNotificationP
{
  MaintenanceNotification: qmnum;  
  NotificationIsHeaderNotif: eams_flag_header_notif;
}
```
