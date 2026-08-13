---
name: D_PRJBLGELMCRTEBILLGDOCREQR
description: "D Prjblgelmcrtebillgdocreqr"
semantic_vi: "View D_PRJBLGELMCRTEBILLGDOCREQR hiển thị dữ liệu yêu cầu tạo đơn yêu cầu thanh toán dự án, được sử dụng khi tạo hoặc cập nhật yêu cầu tạo đơn thanh toán dự án trong thành phần PPM-SCL-BIL."
keywords:
  - "project billing"
  - "dự án thanh toán"
  - "ppm-scl-bil"
  - "project billing element request"
  - "yêu cầu tạo đơn thanh toán dự án"
  - "project billing element creation"
  - "tạo đơn thanh toán dự án"
  - "project system"
  - "hệ thống dự án"
  - "project management"
  - "quản lý dự án"
semantic_en: "The D_PRJBLGELMCRTEBILLGDOCREQR view exposes project billing element creation request data, which is used when creating or updating project billing element requests in the PPM-SCL-BIL component."
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
# D_PRJBLGELMCRTEBILLGDOCREQR

**D Prjblgelmcrtebillgdocreqr**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` |  | |  | `vbeln` |  |  |
| `ProjectBillingRequest` |  | |  | `bdr_ref` |  |  |
| `ProjBillgElmntEntrItmFlowUUID` |  | |  | `pbee_uuid` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Astract entity for BDR created from PBE'

define abstract entity D_PrjBlgElmCrteBillgDocReqR
{
  BillingDocumentRequest        : vbeln;
  ProjectBillingRequest         : bdr_ref;
  ProjBillgElmntEntrItmFlowUUID : pbee_uuid;
}
```
