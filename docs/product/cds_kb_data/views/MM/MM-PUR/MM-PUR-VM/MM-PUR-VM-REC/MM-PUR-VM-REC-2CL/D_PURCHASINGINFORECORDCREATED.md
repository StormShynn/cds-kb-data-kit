---
name: D_PURCHASINGINFORECORDCREATED
description: "D Purchasinginforecordcreated"
semantic_vi: "View D_PURCHASINGINFORECORDCREATED hiển thị các bản ghi thông tin mua hàng được tạo trong hệ thống SAP, có thể được sử dụng để theo dõi và phân tích dữ liệu mua hàng."
keywords:
  - "purchasing information"
  - "purchasing data"
  - "sourcing and procurement"
  - "sourcing"
  - "procurement"
  - "purchasing record"
  - "purchasing data analysis"
  - "sourcing and procurement data"
  - "mm-pur-vm-rec-2cl"
  - "mm-pur-vm"
  - "mm-pur"
  - "mm"
semantic_en: "The D_PURCHASINGINFORECORDCREATED view exposes purchasing information records created in the SAP system, which can be used to track and analyze purchasing data."
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
# D_PURCHASINGINFORECORDCREATED

**D Purchasinginforecordcreated**

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
@EndUserText.label: 'Purchasing Info Record Created'
define abstract entity D_PurchasingInfoRecordCreated
{

  Supplier                     : elifn;
  Material                     : matnr;
  MaterialGroup                : matkl;

}
```
