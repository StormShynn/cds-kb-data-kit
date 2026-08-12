---
name: I_CAPACITYSHIFT
description: "Ent Resource Capacity Interval Shift"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYSHIFT')/$value
semantic_en: "Ent Resource Capacity Interval Shift"
semantic_vi: "Ent Resource Capacity Interval Shift — CDS view giao diện dựa trên I_WorkCenterCapacityShift_2."
keywords:
  - "ent"
  - "resource"
  - "capacity"
  - "interval"
  - "shift"
  - "internal"
  - "active"
  - "version"
  - "date"
  - "week"
  - "available"
tags:
  - PP
  - bo:salesorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_CAPACITYSHIFT

**Ent Resource Capacity Interval Shift**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYSHIFT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` | ✓ | |  |  | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `WeekDay` | ✓ | |  |  | `NUMC(1)` | Week Day |
| `AvailableCapacityShift` | ✓ | |  | `cast(coalesce(Shift.AvailableCapacityShift,'0')as schichtnr preserving type )` | `NUMC(1)` | Shift Number of an Available Capacity |
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
| `_EntRsceCapacity` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntRsceCapacity` | `I_CapacityBasic` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYSHIFT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYSHIFT')/$value)*

```abap
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Ent Resource Capacity Interval Shift'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'AvailableCapacityShift'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'EntRsceCapacityIntervalShift'
define view entity I_CapacityShift
  as select from I_WorkCenterCapacityShift_2 as Shift
    inner join   I_CapacityBasic  as PooledCapHeader on Shift.CapacityInternalID = PooledCapHeader.CapacityInternalID
    association [1..1] to I_CapacityBasic   as _EntRsceCapacity   on $projection.CapacityInternalID = _EntRsceCapacity.CapacityInternalID
{     @ObjectModel.foreignKey.association: '_Capacity'
  key Shift.CapacityInternalID,
      @ObjectModel.foreignKey.association: '_AvailableCapacityType'
  key Shift.CapacityActiveVersion,
      @ObjectModel.foreignKey.association: '_EndDate'
  key Shift.IntervalEndDate,
      @ObjectModel.foreignKey.association: '_WeekDay'
  key Shift.WeekDay,
  key cast(coalesce(Shift.AvailableCapacityShift,'0')as schichtnr preserving type ) as AvailableCapacityShift,
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
      Shift._Capacity,
      _EntRsceCapacity,
      Shift._AvailableCapacityType,
      Shift._EndDate,
      Shift._WeekDay
}
```
