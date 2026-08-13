---
name: D_PRJBLGREQPOSTPONEBYDATEP
description: "D Prjblgreqpostponebydatep"
semantic_vi: "Chứa yêu cầu thanh toán dự án có thể hoãn theo ngày, cho phép quản lý lịch trình và thời gian thanh toán dự án."
keywords:
  - "project billing"
  - "dự án thanh toán"
  - "postpone by date"
  - "hoãn theo ngày"
  - "project billing request"
  - "yêu cầu thanh toán dự án"
  - "ppm"
  - "ppm-scl"
  - "ppm-scl-bil"
semantic_en: "Exposes project billing requests that can be postponed by date, allowing for the management of project billing schedules and timelines."
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
# D_PRJBLGREQPOSTPONEBYDATEP

**D Prjblgreqpostponebydatep**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServicesRenderedDate` |  | |  | `fbuda` |  |  |
| `ProjectBillingRequestUUID` |  | |  | `pbr_uuid` |  |  |
| `BillingPlanUsageCategory` |  | |  | `sdbp_bpcat` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for restrict date'

define abstract entity D_PrjBlgReqPostponeByDateP
{
  ServicesRenderedDate      : fbuda;
  ProjectBillingRequestUUID : pbr_uuid;
  BillingPlanUsageCategory  : sdbp_bpcat;
}
```
