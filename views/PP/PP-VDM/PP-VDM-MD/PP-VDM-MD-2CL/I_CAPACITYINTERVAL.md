---
name: I_CAPACITYINTERVAL
description: "Enterprise Resource Capacity Interval"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value
semantic_en: "Enterprise Resource Capacity Interval"
tags:
  - PP
  - bo:salesorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_CAPACITYINTERVAL

**Enterprise Resource Capacity Interval**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` |  | |  |  | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `IntervalStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `StdAvailableCapacityIsValid` |  | |  |  | `CHAR(1)` | Ind.: Standard Available Capacity is Valid for this Interval |
| `ShiftSequence` |  | |  |  | `CHAR(4)` | Key for the Shift Sequence |
| `WorkDayRule` |  | |  |  | `CHAR(1)` | Workday Rule Code |
| `CapacityNumberOfShifts` |  | |  |  | `NUMC(1)` | Number of Shifts in a Day |
| `AvailableCapacityIntervalDurn` |  | |  |  | `NUMC(2)` | Duration of an Available Capacity Interval |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
