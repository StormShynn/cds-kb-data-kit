---
name: D_MAINTORDCONFIRMATIONCANCELP
description: "D Maintordconfirmationcancelp"
semantic_vi: "View D_MAINTORDCONFIRMATIONCANCELP hiển thị dữ liệu hủy xác nhận đơn đặt hàng bảo trì, được sử dụng khi quản lý đơn đặt hàng bảo trì đã bị hủy hoặc xác nhận."
keywords:
  - "maintenance order"
  - "đơn đặt hàng bảo trì"
  - "cancellation"
  - "hủy"
  - "confirmation"
  - "xác nhận"
  - "sap pm"
  - "pm woc"
  - "pm woc jc"
  - "plant maintenance"
semantic_en: "The D_MAINTORDCONFIRMATIONCANCELP view exposes maintenance order confirmation cancellation data, which is used when managing maintenance orders that have been cancelled or confirmed."
app_component: PM-WOC-JC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-JC
  - component:PM-WOC-JC-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDCONFIRMATIONCANCELP

**D Maintordconfirmationcancelp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-JC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderConfLongText` |  | |  | `esh_e_sr_longtext` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Cancel Confirmation'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_MaintOrdConfirmationCancelP 
{

MaintOrderConfLongText : esh_e_sr_longtext; 
}
```
