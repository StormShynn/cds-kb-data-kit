---
name: D_PURGINFORECDORGPLNTDATACRTD
description: "D Purginforecdorgplntdatacrtd"
semantic_vi: "CDS view D_PURGINFORECDORGPLNTDATACRTD hiển thị dữ liệu nhận hàng đơn mua hàng cho nhà cung cấp, vật liệu và nhóm vật liệu cụ thể. Nó được sử dụng để lấy dữ liệu cho một tài liệu nhận hàng cụ thể được tạo cho một nhà máy."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "receipt document"
  - "nhận hàng"
  - "tài liệu nhận hàng"
  - "cds view"
  - "view"
  - "sap"
  - "mm-pur-vm"
  - "mm-pur"
  - "mm"
semantic_en: "The D_PURGINFORECDORGPLNTDATACRTD CDS view exposes purchase order receipt data for a specific supplier, material, and material group. It is used to retrieve data for a specific receipt document created for a plant."
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
# D_PURGINFORECDORGPLNTDATACRTD

**D Purginforecdorgplntdatacrtd**

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
@EndUserText.label: 'Purchasing Info Record Organization Plant Data Created'
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PurgInfoRecdOrgPlntDataCrtd
{
  Supplier      : elifn;
  Material      : matnr;
  MaterialGroup : matkl;

}
```
