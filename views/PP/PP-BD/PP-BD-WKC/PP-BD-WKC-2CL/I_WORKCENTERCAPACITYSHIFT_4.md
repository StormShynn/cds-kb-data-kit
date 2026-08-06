---
name: I_WORKCENTERCAPACITYSHIFT_4
description: Work Center Capacity Shift Details
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value
semantic_en: Work Center Capacity Shift Details
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
# I_WORKCENTERCAPACITYSHIFT_4

**Work Center Capacity Shift Details**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` | `DATS(8)` | Valid-to date |
| `WeekDay` | `NUMC(1)` | Week Day |
| `AvailableCapacityShift` | `NUMC(1)` | Shift Number of an Available Capacity |
| `IntervalStartDate` | `DATS(8)` | Valid-From Date |
| `WorkDayRule` | `CHAR(1)` | Workday Rule Code |
| `ShiftDefinition` | `CHAR(4)` | Shift Definition |
| `ShiftStartTime` | `TIMS(6)` | Start Time |
| `ShiftEndTime` | `TIMS(6)` | End Time |
| `ShiftDefValidityStartDate` | `DATS(8)` | Start Date |
| `ShiftDefValidityEndDate` | `DATS(8)` | End Date |
| `CapacityNumberOfCapacities` | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityBreakDuration` | `INT4(10)` | Cumulative Break Duration in Seconds (internal) |
| `OperatingDurationInSeconds` | `INT4(10)` | Operating Duration in Seconds |
| `TotOperatingDurationInSeconds` | `INT4(10)` | Total Operating Duration In Seconds |
| `CapacityLastChangeDateTime` | `DEC(21)` | Capacity Last Change Date Time |
