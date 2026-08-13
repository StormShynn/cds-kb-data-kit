---
name: D_PURCHASINGINFORECORDCHANGED
description: "D Purchasinginforecordchanged"
semantic_vi: "View D_PURCHASINGINFORECORDCHANGED hiển thị các bản ghi thông tin mua hàng đã thay đổi, thường được sử dụng để theo dõi các thay đổi trong dữ liệu mua hàng như thông tin nhà cung cấp hoặc thông tin vật liệu."
keywords:
  - "purchasing information"
  - "thông tin mua hàng"
  - "changed records"
  - "bản ghi đã thay đổi"
  - "supplier"
  - "nhà cung cấp"
  - "material"
  - "vật liệu"
  - "mm-pur"
  - "mm-pur-vm"
  - "sourcing & procurement"
  - "thuê mua"
semantic_en: "The D_PURCHASINGINFORECORDCHANGED view exposes purchasing information records that have changed, typically used to track changes in purchasing data such as supplier or material information."
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
# D_PURCHASINGINFORECORDCHANGED

**D Purchasinginforecordchanged**

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
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchasing Info Record Changed'
define abstract entity D_PurchasingInfoRecordChanged
{

  Supplier                     : elifn;
  Material                     : matnr;
  MaterialGroup                : matkl;

}
```
