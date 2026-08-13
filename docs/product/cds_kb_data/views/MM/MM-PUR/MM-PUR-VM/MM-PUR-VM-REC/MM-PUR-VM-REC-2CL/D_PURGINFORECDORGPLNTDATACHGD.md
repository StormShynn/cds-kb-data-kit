---
name: D_PURGINFORECDORGPLNTDATACHGD
description: "D Purginforecdorgplntdatachgd"
semantic_vi: "View D_PURGINFORECDORGPLNTDATACHGD hiển thị dữ liệu thay đổi về hồ sơ mua hàng nhóm tài liệu ghi nhận, có thể sử dụng để phân tích các thay đổi được thực hiện trên hồ sơ mua hàng cho các nhà cung cấp, vật liệu và nhóm vật liệu cụ thể."
keywords:
  - "purchase document"
  - "đơn mua hàng"
  - "hồ sơ mua hàng"
  - "group plant data"
  - "thay đổi dữ liệu"
  - "sourcing & procurement"
  - "mm-pur-vm"
  - "mm-pur"
  - "mm"
  - "sap mm"
semantic_en: "The D_PURGINFORECDORGPLNTDATACHGD view exposes purchase document record group plant data changes, which can be used to analyze changes made to purchase document records for specific suppliers, materials, and material groups."
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# D_PURGINFORECDORGPLNTDATACHGD

**D Purginforecdorgplntdatachgd**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  | `elifn` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchasing Info Record Organization Plant Data Changed'
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PurgInfoRecdOrgPlntDataChgd
{
  Supplier      : elifn;
  Material      : matnr;
  MaterialGroup : matkl;

}
```
