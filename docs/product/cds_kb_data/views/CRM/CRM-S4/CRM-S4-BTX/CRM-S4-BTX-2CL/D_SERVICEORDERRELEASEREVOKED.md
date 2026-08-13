---
name: D_SERVICEORDERRELEASEREVOKED
description: "D Service OrderRELEASEREVOKED"
semantic_vi: "View D_SERVICEORDERRELEASEREVOKED hiển thị dữ liệu về việc hủy bỏ việc phát hành đơn đặt hàng dịch vụ, có liên quan khi quản lý đơn đặt hàng dịch vụ đã bị hủy bỏ sau khi được phát hành."
keywords:
  - "service order"
  - "đơn đặt hàng dịch vụ"
  - "release"
  - "hủy bỏ"
  - "crm"
  - "service"
  - "sap"
  - "c4c"
  - "crm-s4-btx-2cl"
semantic_en: "The D_SERVICEORDERRELEASEREVOKED CDS view exposes service order release revoked data, which is relevant when managing service orders that have been revoked after being released."
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - service-order
  - lease
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICEORDERRELEASEREVOKED

**D Service OrderRELEASEREVOKED**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` |  | |  | `crmt_subobject_category_db` |  |  |
| `ServiceOrderUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceOrderDescription` |  | |  | `crmt_process_description` |  |  |
| `ServiceOrderType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Order Release Revoked'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderReleaseRevoked
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;

}
```
