---
name: D_MSRGPTCANCELMSMTRDNGP
description: "D Msrgptcancelmsmtrdngp"
semantic_vi: "Chứa thông tin về khoảng thời gian đo lường đã bị hủy bỏ, bao gồm ngày và giờ kết thúc hủy bỏ. View này được sử dụng để lấy dữ liệu về việc đo lường bị hủy bỏ trong bảo trì nhà máy."
keywords:
  - "plant maintenance"
  - "measurement reading"
  - "cancelled interval"
  - "msmt rdng interval end date"
  - "msmt rdng interval end time"
  - "pm-eqm-sf-mpc-2cl"
  - "pm-eqm"
  - "pm"
  - "lob:plant maintenance"
semantic_en: "Exposes measurement reading intervals that have been cancelled, including the end date and time of the cancellation. This view is used to retrieve data on cancelled measurement readings in plant maintenance."
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# D_MSRGPTCANCELMSMTRDNGP

**D Msrgptcancelmsmtrdngp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MsmtRdngIntervalEndDate` |  | |  | `imrc_idate` |  |  |
| `MsmtRdngIntervalEndTime` |  | |  | `imrc_itime` |  |  |

## Source Code

```abap
@EndUserText.label: 'Stop Measurement Reading Transfer'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_MsrgPtCancelMsmtRdngP
 {
   MsmtRdngIntervalEndDate   : imrc_idate;
   MsmtRdngIntervalEndTime   : imrc_itime;  
}
```
