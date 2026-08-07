---
name: I_WORKCENTERCAPACITY_3
description: Work Center Capacity
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value
semantic_en: Work Center Capacity
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
# I_WORKCENTERCAPACITY_3

**Work Center Capacity**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` |  | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterCategoryCode` |  | |  |  | `CHAR(4)` | Work Center Category |
| `SetupCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Setup Capacity Requirements |
| `ProcgCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Processing Capacity Requirements |
| `TeardownCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Teardown Capacity Requirements |
| `OtherCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Other Capacity Requirements |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkCenterLastChangeDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
| `Capacity` |  | |  |  | `CHAR(8)` | Capacity name |
| `CapacityCategoryCode` |  | |  |  | `CHAR(3)` | Capacity Category |
| `CapacityActiveVersion` |  | |  |  | `NUMC(2)` | Active Version of Available Capacity |
| `CapacityIsFinite` |  | |  |  | `CHAR(1)` | Indicator: Capacity Relevant to Finite Scheduling |
| `CapacityIsPooled` |  | |  |  | `CHAR(1)` | Pooled Capacity Indicator |
| `CapacityHasIndivCapacities` |  | |  |  | `CHAR(1)` | Has Individual Capacities |
| `CapacityIsExcldFrmLongTermPlng` |  | |  |  | `CHAR(1)` | Indicator: Capacity Excluded From Long-Term Planning |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityResponsiblePlanner` |  | |  |  | `CHAR(3)` | Capacity Responsible Planner Group |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityBreakDuration` |  | |  |  | `INT4(10)` | Cumulative Break Duration in Seconds (internal) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar ID |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ShiftGroup` |  | |  |  | `CHAR(2)` | Grouping for Shift Definitions and Shift Sequences |
| `CapacityStartTimeID` |  | |  |  | `INT4(10)` | Start Time in Seconds (Internal) |
| `CapacityEndTimeID` |  | |  |  | `INT4(10)` | End Time in Seconds (Internal) |
| `CapIsUsedInMultiOperations` |  | |  |  | `CHAR(1)` | Indicator: Several Operations Can Use Capacity |
| `ReferencedCapacityInternalID` |  | |  |  | `NUMC(8)` | Referenced Capacity ID |
| `CapOverloadThresholdInPercent` |  | |  |  | `NUMC(3)` | Overload |
| `CapacityQuantityUnit` |  | |  |  | `UNIT(3)` | Capacity Unit of Measure |
| `CapacityBaseQtyUnit` |  | |  |  | `UNIT(3)` | Capacity Base Unit of Measure |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
