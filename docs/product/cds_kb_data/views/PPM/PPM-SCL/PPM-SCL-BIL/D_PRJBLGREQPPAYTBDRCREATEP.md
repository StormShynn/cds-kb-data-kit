---
name: D_PRJBLGREQPPAYTBDRCREATEP
description: "D Prjblgreqppaytbdrcreatep"
semantic_vi: "View D_PRJBLGREQPPAYTBDRCREATEP hiển thị dữ liệu yêu cầu thanh toán dự án, có liên quan khi tạo yêu cầu thanh toán dự án trong thành phần PPM-SCL-BIL."
keywords:
  - "project billing request"
  - "yêu cầu thanh toán dự án"
  - "ppm-scl-bil"
  - "billing request payment type"
  - "thanh toán dự án"
  - "d_prjblgreqppaytbdrcreatep"
  - "project billing"
  - "dự án"
  - "payment type"
semantic_en: "The D_PRJBLGREQPPAYTBDRCREATEP view exposes project billing request payment type data, which is relevant when creating project billing requests in the PPM-SCL-BIL component."
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
# D_PRJBLGREQPPAYTBDRCREATEP

**D Prjblgreqppaytbdrcreatep**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingWBSElementInternalID` |  | |  | `ps_s4_pspnr` |  |  |
| `PrjBlgElmPlndPpaytType` |  | |  | `pbe_prepaymenttype` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for BDR prepayment'

define abstract entity D_PrjBlgReqPpaytBDRCreateP
{
  BillingWBSElementInternalID : ps_s4_pspnr;
  PrjBlgElmPlndPpaytType      : pbe_prepaymenttype;
}
```
