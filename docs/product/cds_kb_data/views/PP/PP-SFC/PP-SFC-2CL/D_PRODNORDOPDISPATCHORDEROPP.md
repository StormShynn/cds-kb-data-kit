---
name: D_PRODNORDOPDISPATCHORDEROPP
description: "D Prodnordopdispatchorderopp"
semantic_vi: "View D_PRODNORDOPDISPATCHORDEROPP hiển thị dữ liệu hoạt động phân phối sản xuất, có thể được sử dụng để phân tích và quản lý lịch trình sản xuất và phân phối."
keywords:
  - "production dispatch order"
  - "đơn phân phối sản xuất"
  - "scheduling"
  - "dispatching"
  - "production planning"
  - "lịch trình sản xuất"
  - "phân phối"
  - "pp-sfc"
  - "sap manufacturing"
semantic_en: "The D_PRODNORDOPDISPATCHORDEROPP view exposes production dispatch order operations data, which can be used to analyze and manage production scheduling and dispatching."
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDOPDISPATCHORDEROPP

**D Prodnordopdispatchorderopp**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingType` |  | |  | `ppopdispatchschedulingtype` |  |  |
| `OperationDispatchDate` |  | |  | `dats` |  |  |
| `OperationDispatchTime` |  | |  | `tims` |  |  |

## Source Code

```abap
@EndUserText.label: 'DispatchOrderOperation Prodn Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProdnOrdOpDispatchOrderOpP
{
  SchedulingType        : ppopdispatchschedulingtype;
  OperationDispatchDate : abap.dats;
  OperationDispatchTime : abap.tims;
}
```
