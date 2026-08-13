---
name: D_SERVICECONTRACTITEMCHANGED
description: "D Servicecontractitemchanged"
semantic_vi: "View này hiển thị dữ liệu vật tư hợp đồng dịch vụ đã thay đổi, cho phép các nhà phát triển theo dõi các bản cập nhật của vật tư hợp đồng dịch vụ theo thời gian thực. Nó có thể được sử dụng để xây dựng các ứng dụng yêu cầu thông tin vật tư hợp đồng dịch vụ được cập nhật."
keywords:
  - "service contract item"
  - "service contract"
  - "item-level"
  - "crm"
  - "service"
  - "contract"
  - "item"
  - "changed"
  - "update"
  - "dịch vụ"
  - "hợp đồng"
  - "vật tư"
semantic_en: "This view exposes service contract item data that has changed, allowing developers to track updates to service contract items in real-time. It can be used to build applications that require up-to-date service contract item information."
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
# D_SERVICECONTRACTITEMCHANGED

**D Servicecontractitemchanged**

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
@EndUserText.label: 'Service Contract Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractItemChanged
{
  ServiceContractItemUUID : crmt_object_guid;
  ServiceContractItemCategory : crmt_item_type_db;
  ServiceContractItemDescription : crmt_prshtextx_db;
}
```
