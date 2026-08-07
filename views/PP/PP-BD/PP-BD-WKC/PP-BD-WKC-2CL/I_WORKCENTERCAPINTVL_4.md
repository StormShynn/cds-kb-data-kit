---
name: I_WORKCENTERCAPINTVL_4
description: Work Center Capacity Intervals
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value
semantic_en: Work Center Capacity Intervals
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
  - metadata-only
---
# I_WORKCENTERCAPINTVL_4

**Work Center Capacity Intervals**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` |  | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` |  | |  |  | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `IntervalStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `StdAvailableCapacityIsValid` |  | |  |  | `CHAR(1)` | Ind.: Standard Available Capacity is Valid for this Interval |
| `AvailableCapacityIntervalDurn` |  | |  |  | `NUMC(2)` | Duration of an Available Capacity Interval |
| `ShiftSequence` |  | |  |  | `CHAR(4)` | Key for the Shift Sequence |
| `WorkDayRule` |  | |  |  | `CHAR(1)` | Workday Rule Code |
| `CapacityNumberOfShifts` |  | |  |  | `NUMC(1)` | Number of Shifts in a Day |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
