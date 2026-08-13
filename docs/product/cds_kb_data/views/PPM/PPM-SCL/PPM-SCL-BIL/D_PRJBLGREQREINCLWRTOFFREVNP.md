---
name: D_PRJBLGREQREINCLWRTOFFREVNP
description: "D Prjblgreqreinclwrtoffrevnp"
semantic_vi: "View này hiển thị các mục yêu cầu thanh toán dự án với các công việc cần thực hiện và các vật tư không phải là tài sản không thu phí tương ứng. Nó được sử dụng khi quản lý yêu cầu thanh toán dự án trong thành phần PPM-SCL-BIL."
keywords:
  - "project billing request"
  - "yêu cầu thanh toán dự án"
  - "project billing request item"
  - "mục yêu cầu thanh toán dự án"
  - "included work"
  - "công việc cần thực hiện"
  - "off-revenue non-plant item"
  - "vật tư không phải là tài sản không thu phí"
  - "ppm-scl-bil"
  - "thành phần ppm-scl-bil"
semantic_en: "This view exposes project billing request items with included work to be done and their corresponding off-revenue non-plant items. It is used when managing project billing requests in the PPM-SCL-BIL component."
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
# D_PRJBLGREQREINCLWRTOFFREVNP

**D Prjblgreqreinclwrtoffrevnp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgElmntEntrItmUUID` |  | |  | `pbee_uuid` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Reinclude Writtenoff Items Abstract Enty'

define abstract entity D_PrjBlgReqReinclWrtOffRevnP
{
  ProjBillgElmntEntrItmUUID : pbee_uuid;
}
```
