---
name: D_SERVICECONTRACTITEMCREATED
description: "D Servicecontractitemcreated"
semantic_vi: "View D_SERVICECONTRACTITEMCREATED hiển thị dữ liệu mục hợp đồng dịch vụ được tạo trong hệ thống CRM, cho phép các nhà phát triển truy cập và thao tác dữ liệu này trong ứng dụng của họ."
keywords:
  - "service contract"
  - "dịch vụ hợp đồng"
  - "crm"
  - "service contract item"
  - "mục hợp đồng dịch vụ"
  - "sap"
  - "c4c"
  - "contract management"
semantic_en: "The D_SERVICECONTRACTITEMCREATED view exposes service contract item data created in the CRM system, allowing developers to access and manipulate this data in their applications."
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
# D_SERVICECONTRACTITEMCREATED

**D Servicecontractitemcreated**

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
@EndUserText.label: 'Service Contract Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractItemCreated
{
  ServiceContractItemUUID : crmt_object_guid;
  ServiceContractItemCategory : crmt_item_type_db;
  ServiceContractItemDescription : crmt_prshtextx_db;
}
```
