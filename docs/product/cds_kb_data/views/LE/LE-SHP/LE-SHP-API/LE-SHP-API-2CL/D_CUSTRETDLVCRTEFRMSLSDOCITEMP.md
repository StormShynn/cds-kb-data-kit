---
name: D_CUSTRETDLVCRTEFRMSLSDOCITEMP
description: "D Custretdlvcrtefrmslsdocitemp"
semantic_vi: "View này hiển thị danh sách các mục của tài liệu liên quan đến tài liệu trả hàng trong Logistics Execution của SAP. Nó được sử dụng để lấy dữ liệu chi tiết về các mục của tài liệu trả hàng."
keywords:
  - "return delivery document"
  - "tài liệu trả hàng"
  - "logistics execution"
  - "sap"
  - "document item"
  - "mục tài liệu"
  - "item-level data"
  - "dữ liệu chi tiết về mục"
  - "ekko"
  - "lob:logistics execution"
  - "component:le-shp-api-2cl"
semantic_en: "This view exposes a list of document items related to a return delivery document in SAP Logistics Execution. It is used to retrieve item-level data for return delivery documents."
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_CUSTRETDLVCRTEFRMSLSDOCITEMP

**D Custretdlvcrtefrmslsdocitemp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocument` |  | |  | `vbeln` |  |  |
| `ReferenceSDDocumentItem` |  | |  | `posnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crte Frm Sls Doc Item P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetDlvCrteFrmSlsDocItemP {
    ReferenceSDDocument : vbeln;
    ReferenceSDDocumentItem : posnr;
}
```
