---
name: D_SERVICECONTRACTITEMDELETED
description: "D Servicecontractitemdeleted"
semantic_vi: "View D_SERVICECONTRACTITEMDELETED hiển thị các mục hợp đồng dịch vụ đã bị xóa trong CRM, có thể được sử dụng để theo dõi dữ liệu lịch sử hoặc kiểm tra các thay đổi đối với hợp đồng dịch vụ."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "deleted item"
  - "đã bị xóa"
  - "crm"
  - "service contract item"
  - "mục hợp đồng dịch vụ"
  - "historical data"
  - "dữ liệu lịch sử"
  - "audit changes"
  - "kiểm tra các thay đổi"
semantic_en: "The D_SERVICECONTRACTITEMDELETED view exposes deleted service contract items in CRM, which can be used to track historical data or audit changes to service contracts."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - contract
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SERVICECONTRACTITEMDELETED

**D Servicecontractitemdeleted**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContractItemUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceContractItemCategory` |  | |  | `crmt_item_type_db` |  |  |
| `ServiceContractItemDescription` |  | |  | `crmt_prshtextx_db` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractItemDeleted
{
  ServiceContractItemUUID : crmt_object_guid;
  ServiceContractItemCategory : crmt_item_type_db;
  ServiceContractItemDescription : crmt_prshtextx_db;
}
```
