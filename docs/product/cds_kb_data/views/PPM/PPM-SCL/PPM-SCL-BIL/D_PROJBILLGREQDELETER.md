---
name: D_PROJBILLGREQDELETER
description: "D Projbillgreqdeleter"
semantic_vi: "View D_PROJBILLGREQDELETER hiển thị dữ liệu xóa yêu cầu hóa đơn dự án, có liên quan khi quản lý yêu cầu hóa đơn dự án trong thành phần PPM-SCL-BIL."
keywords:
  - "project billing request"
  - "yêu cầu hóa đơn dự án"
  - "ppm-scl-bil"
  - "deletion"
  - "xóa"
  - "project management"
  - "quản lý dự án"
  - "sap"
  - "ppm"
semantic_en: "The D_PROJBILLGREQDELETER view exposes project billing request deletion data, which is relevant when managing project billing requests in the PPM-SCL-BIL component."
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - component:PPM-SCL-BIL
  - lob:Other
---
# D_PROJBILLGREQDELETER

**D Projbillgreqdeleter**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Status` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Delete Project Billing Request Result'

define abstract entity D_ProjBillgReqDeleteR
{
  Status : boolean;
}
```
