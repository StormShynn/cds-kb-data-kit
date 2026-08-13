---
name: D_PINVPOSTPINVDIFFERENCEP
description: "D Pinvpostpinvdifferencep"
semantic_vi: "View D_PINVPOSTPINVDIFFERENCEP hiển thị sự khác biệt về tồn kho vật lý cho một ngày đăng ký và lý do cụ thể, có thể được sử dụng để phân tích sự khác biệt trong mức tồn kho."
keywords:
  - "physical inventory"
  - "sự khác biệt tồn kho vật lý"
  - "posting date"
  - "ngày đăng ký"
  - "reason for physical inventory difference"
  - "lý do khác biệt tồn kho vật lý"
  - "inventory analysis"
  - "phân tích tồn kho"
  - "sap mm"
  - "sap mm-im"
  - "sap mm-im-pi"
  - "sourcing & procurement"
semantic_en: "The D_PINVPOSTPINVDIFFERENCEP view exposes physical inventory differences for a given posting date and reason, which can be used to analyze discrepancies in inventory levels."
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVPOSTPINVDIFFERENCEP

**D Pinvpostpinvdifferencep**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `fis_budat` |  |  |
| `ReasonForPhysInvtryDifference` |  | |  | `grdif` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Parameters for post action of item'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PInvPostPInvDifferenceP {
  PostingDate : fis_budat;
  ReasonForPhysInvtryDifference : grdif;
}
```
