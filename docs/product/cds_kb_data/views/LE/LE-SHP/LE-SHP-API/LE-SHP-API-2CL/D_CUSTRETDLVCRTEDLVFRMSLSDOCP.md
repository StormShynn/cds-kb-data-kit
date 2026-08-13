---
name: D_CUSTRETDLVCRTEDLVFRMSLSDOCP
description: "D Custretdlvcrtedlvfrmslsdocp"
semantic_vi: "View này hiển thị thông tin điểm giao hàng và tài liệu giao hàng cho một ngày chọn giao và loại tài liệu cụ thể, có ích cho việc thực hiện logistics và ứng dụng API giao hàng."
keywords:
  - "shipping point"
  - "điểm giao hàng"
  - "delivery document"
  - "tài liệu giao hàng"
  - "logistics execution"
  - "thực hiện logistics"
  - "shipping api"
  - "api giao hàng"
  - "sap cds"
  - "cds view"
  - "delivery selection date"
  - "ngày chọn giao"
semantic_en: "This view exposes shipping point and delivery document information for a specific delivery selection date and document type, useful for logistics execution and shipping API applications."
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
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_CUSTRETDLVCRTEDLVFRMSLSDOCP

**D Custretdlvcrtedlvfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `DeliverySelectionDate` |  | |  | `lfdat_a` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crte Deliv Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetDlvCrteDlvFrmSlsDocP {
  ShippingPoint             : vstel;
  DeliverySelectionDate     : lfdat_a;
  DeliveryDocumentType      : lfart;
  _ReferenceSDDocumentItem  : association [1..*] to D_CustRetDlvCrteFrmSlsDocItemP on 1 = 0;
}
```
