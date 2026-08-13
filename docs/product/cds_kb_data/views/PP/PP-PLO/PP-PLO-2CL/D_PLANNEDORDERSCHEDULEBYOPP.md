---
name: D_PLANNEDORDERSCHEDULEBYOPP
description: "D Planned OrderSCHEDULEBYOPP"
semantic_vi: "View D Planned Order SCHEDULEBYOPP hiển thị dữ liệu lập kế hoạch đặt hàng theo kế hoạch, bao gồm ngày và giờ bắt đầu và kết thúc của hoạt động, để sử dụng trong kế hoạch và lập kế hoạch sản xuất."
keywords:
  - "planned order"
  - "đặt hàng theo kế hoạch"
  - "scheduling"
  - "lập kế hoạch"
  - "manufacturing"
  - "sản xuất"
  - "operation"
  - "hoạt động"
  - "pp-plo"
  - "planned-order"
  - "schedule-line"
semantic_en: "The D Planned Order SCHEDULEBYOPP view exposes planned order scheduling data, including operation start and end dates and times, for use in manufacturing planning and scheduling."
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - planned-order
  - schedule-line
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# D_PLANNEDORDERSCHEDULEBYOPP

**D Planned OrderSCHEDULEBYOPP**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrder` |  | |  | `plnum` |  |  |
| `OperationLatestStartDate` |  | |  | `sstad` |  |  |
| `OperationLatestStartTime` |  | |  | `sstau` |  |  |
| `OperationLatestEndDate` |  | |  | `sendd` |  |  |
| `OperationLatestEndTime` |  | |  | `sendu` |  |  |
| `PlndOrdOpSchedulingDirection` |  | |  | `pph_termkz` |  |  |
| `PlndOrdOpSchedulingStatus` |  | |  | `pp_pldorder_schedstatus` |  |  |
| `PlndOrdOpSchedulingStrategy` |  | |  | `pp_pldorder_schedulingstrategy` |  |  |
| `WorkCenter` |  | |  | `arbpl` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Schedule Planned Order operation param'
define root abstract entity D_PlannedOrderScheduleByOpP
{
      PlannedOrder                 : plnum;

      OperationLatestStartDate    : sstad;
      //PlndOrdOpSchedldStartDate    : pp_pldorderop_schedldstartdate;

      OperationLatestStartTime    : sstau;
      //PlndOrdOpSchedldStartTime    : pp_pldorderop_schedldstarttime;

      OperationLatestEndDate      : sendd;
      //PlndOrdOpSchedldEndDate      : pp_pldorderop_schedldenddate;

      OperationLatestEndTime      : sendu;
      //PlndOrdOpSchedldEndTime      : pp_pldorderop_schedldendtime;

      //OpSchedulingMode         : abap.char(1);
      PlndOrdOpSchedulingDirection : pph_termkz;

      //OpSchedulingStatus       : abap.char(4);
      PlndOrdOpSchedulingStatus    : pp_pldorder_schedstatus;

      //OpSchedulingStrategy     : abap.char(1);
      PlndOrdOpSchedulingStrategy  : pp_pldorder_schedulingstrategy;

      //      LastChangeDateTime :  pstmp  ;
      
      //Change For Manual Workcenter Change
      WorkCenter : arbpl; 
      
}
```
