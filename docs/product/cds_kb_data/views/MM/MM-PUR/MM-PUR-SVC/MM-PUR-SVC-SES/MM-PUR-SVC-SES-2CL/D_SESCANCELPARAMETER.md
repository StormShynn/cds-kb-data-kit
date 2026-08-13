---
name: D_SESCANCELPARAMETER
description: "D Sescancelparameter"
semantic_vi: "View D_SESCANCELPARAMETER cung cấp truy cập vào các tham số cho việc hủy bỏ một bản ghi dịch vụ trong thành phần MM-PUR-SVC-SES-2CL. Nó được sử dụng để truy xuất và phân tích dữ liệu liên quan đến các tham số hủy bỏ bản ghi dịch vụ."
keywords:
  - "service entry sheet"
  - "bản ghi dịch vụ"
  - "cancellation parameter"
  - "tham số hủy bỏ"
  - "mm-pur-svc-ses-2cl"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
semantic_en: "The D_SESCANCELPARAMETER CDS view provides access to parameters for cancelling a service entry sheet in the MM-PUR-SVC-SES-2CL component. It is used to retrieve and analyze data related to service entry sheet cancellation parameters."
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# D_SESCANCELPARAMETER

**D Sescancelparameter**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `mmpur_ses_posting_date` |  |  |

## Source Code

```abap
@EndUserText.label: 'SES Cancel Paramters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SESCancelParameter {
  
  PostingDate : mmpur_ses_posting_date ;
    
}
```
