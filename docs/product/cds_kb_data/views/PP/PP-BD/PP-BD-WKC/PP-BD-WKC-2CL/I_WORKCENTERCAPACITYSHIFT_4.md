---
name: I_WORKCENTERCAPACITYSHIFT_4
description: "Work Center Capacity Shift Details"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value
semantic_en: "Work Center Capacity Shift Details"
semantic_vi: "Work Center Capacity Shift Details — CDS view giao diện dựa trên I_WorkCenterCapacityShift_3."
keywords:
  - "work"
  - "center"
  - "capacity"
  - "shift"
  - "details"
  - "internal"
  - "type"
  - "code"
  - "category"
  - "allocation"
  - "active"
  - "version"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
---
# I_WORKCENTERCAPACITYSHIFT_4

**Work Center Capacity Shift Details**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | ✓ | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | ✓ | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` | ✓ | |  |  | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `WeekDay` | ✓ | |  |  | `NUMC(1)` | Week Day |
| `AvailableCapacityShift` | ✓ | |  |  | `NUMC(1)` | Shift Number of an Available Capacity |
| `IntervalStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `WorkDayRule` |  | |  |  | `CHAR(1)` | Workday Rule Code |
| `ShiftDefinition` |  | |  |  | `CHAR(4)` | Shift Definition |
| `ShiftStartTime` |  | |  |  | `TIMS(6)` | Start Time |
| `ShiftEndTime` |  | |  |  | `TIMS(6)` | End Time |
| `ShiftDefValidityStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `ShiftDefValidityEndDate` |  | |  |  | `DATS(8)` | End Date |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityBreakDuration` |  | |  |  | `INT4(10)` | Cumulative Break Duration in Seconds (internal) |
| `OperatingDurationInSeconds` |  | |  |  | `INT4(10)` | Operating Duration in Seconds |
| `TotOperatingDurationInSeconds` |  | |  |  | `INT4(10)` | Total Operating Duration In Seconds |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYSHIFT_4')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Work Center Capacity Shift Details'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'AvailableCapacityShift'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCapacityIntervalShft'

define view entity I_WorkCenterCapacityShift_4 
       as select from I_WorkCenterCapacityShift_3 as Shift
       inner join I_WorkCenterCapIntvl_4 as Interval on Interval.CapacityInternalID = Shift.CapacityInternalID
                                                             and Interval.CapacityActiveVersion = Shift.CapacityActiveVersion
                                                             and Interval.IntervalEndDate = Shift.IntervalEndDate
                                                             
{
    //I_WorkCenterCapacityShift_2
        @ObjectModel.foreignKey.association: '_WorkCenter'
    key Interval.WorkCenterInternalID       as WorkCenterInternalID,
        @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
    key Interval.WorkCenterTypeCode         as WorkCenterTypeCode,
        @ObjectModel.foreignKey.association: '_WorkCenterCapMap'
    key Interval.CapacityCategoryAllocation as CapacityCategoryAllocation,
        @ObjectModel.foreignKey.association: '_Capacity'
    key Shift.CapacityInternalID            as CapacityInternalID,
        @ObjectModel.foreignKey.association: '_AvailableCapacityType'
    key Shift.CapacityActiveVersion         as CapacityActiveVersion,
        @ObjectModel.foreignKey.association: '_EndDate'
    key Shift.IntervalEndDate               as IntervalEndDate,
        @ObjectModel.foreignKey.association: '_WeekDay'
    key Shift.WeekDay,
    key Shift.AvailableCapacityShift,
    Shift.IntervalStartDate,
    Shift.WorkDayRule,
    Shift.ShiftDefinition,
    Shift.ShiftStartTime,
    Shift.ShiftEndTime,
    Shift.ShiftDefValidityStartDate,
    Shift.ShiftDefValidityEndDate,
    Shift.CapacityNumberOfCapacities,
    Shift.CapacityPlanUtilizationPercent,
    Shift.CapacityBreakDuration,
    Shift.OperatingDurationInSeconds,
    Shift.TotOperatingDurationInSeconds,
    Shift.CapacityLastChangeDateTime,
    /* Associations */
    //I_WorkCenterCapacityShift_2
    Shift._AvailableCapacityType,
    Shift._Capacity,
    Shift._EndDate, 
    Shift._WeekDay,
    Interval._WorkCenter,
    Interval._WorkCenterTypeCode,
    Interval._WorkCenterCapMap
}
```
