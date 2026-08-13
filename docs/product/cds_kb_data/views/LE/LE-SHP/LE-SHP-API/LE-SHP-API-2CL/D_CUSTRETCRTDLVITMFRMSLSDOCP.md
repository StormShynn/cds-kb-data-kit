---
name: D_CUSTRETCRTDLVITMFRMSLSDOCP
description: "D Custretcrtdlvitmfrmslsdocp"
semantic_vi: "View này hiển thị dữ liệu chủ của hàng hóa trong đơn đặt hàng bán hàng, đặc biệt liên quan đến các đơn hàng trả lại khách hàng, và có thể được sử dụng để truy xuất hoặc cập nhật dữ liệu này trong các kịch bản thực hiện logistics."
keywords:
  - "delivery item"
  - "sales document"
  - "customer return"
  - "logistics execution"
  - "sap cds view"
  - "view d_custretcrtdlvitmfrmslsdocp"
  - "đơn hàng bán hàng"
  - "đơn hàng trả lại khách hàng"
  - "thực hiện logistics"
semantic_en: "This view exposes delivery item master data for sales documents, specifically related to customer returns, and can be used to retrieve or update this data in logistics execution scenarios."
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
# D_CUSTRETCRTDLVITMFRMSLSDOCP

**D Custretcrtdlvitmfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliverySelectionDate` |  | |  | `lfdat_a` |  |  |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crt Dlv Itm Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetCrtDlvItmFrmSlsDocP{
  DeliverySelectionDate    : lfdat_a;
  _ReferenceSDDocumentItem : association [1..*] to D_CustRetDlvCrteFrmSlsDocItemP on 1 = 0;
}
```
