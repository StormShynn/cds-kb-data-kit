---
name: D_PRJBLGREQPOSTPONEBYDATEP
description: D Prjblgreqpostponebydatep
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServicesRenderedDate` |  | |  | `fbuda` |
| `ProjectBillingRequestUUID` |  | |  | `pbr_uuid` |
| `BillingPlanUsageCategory` |  | |  | `sdbp_bpcat` |

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
