---
name: D_MAINTORDRESETTECHCOMPLETEP
description: "D Maintordresettechcompletep"
semantic_vi: "View này hiển thị dữ liệu hoàn thành kỹ thuật của đơn đặt hàng bảo trì được đặt lại, được sử dụng để xác định trạng thái của đơn đặt hàng bảo trì đã được đặt lại thành trạng thái hoàn thành kỹ thuật."
keywords:
  - "maintenance order"
  - "đơn đặt hàng bảo trì"
  - "technical completion"
  - "hoàn thành kỹ thuật"
  - "reset"
  - "đặt lại"
  - "pm"
  - "plant maintenance"
  - "công việc bảo trì"
  - "công cụ"
  - "công cụ bảo trì"
semantic_en: "This view exposes maintenance order reset technical completion data, which is used to determine the status of maintenance orders that have been reset to a technical completion state."
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
# D_MAINTORDRESETTECHCOMPLETEP

**D Maintordresettechcompletep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssgdMaintNotifIsToBePutInProc` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'MaintOrder ResetTechCompl Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdResetTechCompleteP
{
  @EndUserText.label             : 'Put Assigned Notifications In Process Again'
  AssgdMaintNotifIsToBePutInProc : abap_boolean;

}
```
