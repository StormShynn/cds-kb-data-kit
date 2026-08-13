---
name: D_PRJBLGELMCRTEPROJBILLGREQR
description: "D Prjblgelmcrteprojbillgreqr"
semantic_vi: "View D_PRJBLGELMCRTEPROJBILLGREQR hiển thị dữ liệu yêu cầu hóa đơn dự án, được sử dụng để quản lý và theo dõi yêu cầu hóa đơn cho các dự án."
keywords:
  - "project billing request"
  - "yêu cầu hóa đơn dự án"
  - "project billing"
  - "dự án hóa đơn"
  - "ppm"
  - "ppm-scl"
  - "ppm-scl-bil"
  - "project management"
  - "quản lý dự án"
  - "billing request"
  - "yêu cầu hóa đơn"
semantic_en: "The D_PRJBLGELMCRTEPROJBILLGREQR view exposes project billing request data, which is used to manage and track billing requests for projects."
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
# D_PRJBLGELMCRTEPROJBILLGREQR

**D Prjblgelmcrteprojbillgreqr**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingRequestUUID` |  | |  | `pbr_uuid` |  |  |
| `ProjectBillingRequest` |  | |  | `pbr_extid` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Project Billing Request Abstract Entity'

define abstract entity D_PrjBlgElmCrteProjBillgReqR
{
  ProjectBillingRequestUUID : pbr_uuid;
  ProjectBillingRequest     : pbr_extid;
}
```
