---
name: D_BILLGDOCCRTECANCLNDOCP
description: "D Billgdoccrtecanclndocp"
semantic_vi: "View D_BILLGDOCCRTECANCLNDOCP cung cấp truy cập vào các bản ghi hủy đơn đặt hàng hóa đơn, được sử dụng để theo dõi việc hủy đơn đặt hàng hóa đơn trong thành phần Sales và Distribution của SAP. View này có thể được sử dụng để truy xuất và phân tích dữ liệu hủy đơn đặt hàng hóa đơn cho mục đích báo cáo kinh doanh và phân tích dữ liệu."
keywords:
  - "billing document"
  - "đơn đặt hàng hóa đơn"
  - "cancellation record"
  - "hủy đơn đặt hàng"
  - "sales and distribution"
  - "sản xuất và phân phối"
  - "sap"
  - "ekko"
  - "billing document cancellation"
  - "hủy đơn đặt hàng hóa đơn"
semantic_en: "The D_BILLGDOCCRTECANCLNDOCP view provides access to billing document cancellation records, which are used to track the cancellation of billing documents in the Sales and Distribution component of SAP. This view can be used to retrieve and analyze billing document cancellation data for business reporting and analytics purposes."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTECANCLNDOCP

**D Billgdoccrtecanclndocp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `ReversalReason` |  | |  | `stgrd` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create Cancellation Billing Document Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BillgDocCrteCanclnDocP {

  BillingDocumentDate : fkdat;       
  ReversalReason : stgrd;  
    
}
```
