---
name: I_CAPACITYINTERVAL
description: "Enterprise Resource Capacity Interval"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value
semantic_en: "Enterprise Resource Capacity Interval"
semantic_vi: "Enterprise Resource Capacity Interval — CDS view giao diện dựa trên I_WorkCenterCapacityInterval_2."
keywords:
  - "enterprise"
  - "resource"
  - "capacity"
  - "interval"
  - "internal"
  - "active"
  - "version"
  - "date"
  - "start"
  - "available"
  - "valid"
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
# I_CAPACITYINTERVAL

**Enterprise Resource Capacity Interval**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | | `_Interval` | `CapacityInternalID` | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` | ✓ | | `_Interval` | `CapacityActiveVersion` | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` | ✓ | | `_Interval` | `IntervalEndDate` | `DATS(8)` | Valid-to date |
| `IntervalStartDate` |  | | `_Interval` | `IntervalStartDate` | `DATS(8)` | Valid-From Date |
| `StdAvailableCapacityIsValid` |  | | `_Interval` | `StdAvailableCapacityIsValid` | `CHAR(1)` | Ind.: Standard Available Capacity is Valid for this Interval |
| `ShiftSequence` |  | | `_Interval` | `ShiftSequence` | `CHAR(4)` | Key for the Shift Sequence |
| `WorkDayRule` |  | | `_Interval` | `WorkDayRule` | `CHAR(1)` | Workday Rule Code |
| `CapacityNumberOfShifts` |  | | `_Interval` | `CapacityNumberOfShifts` | `NUMC(1)` | Number of Shifts in a Day |
| `AvailableCapacityIntervalDurn` |  | | `_Interval` | `AvailableCapacityIntervalDurn` | `NUMC(2)` | Duration of an Available Capacity Interval |
| `CapacityNumberOfCapacities` |  | | `_Interval` | `CapacityNumberOfCapacities` | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` |  | | `_Interval` | `CapacityPlanUtilizationPercent` | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityLastChangeDateTime` |  | | `_Interval` | `CapacityLastChangeDateTime` | `DEC(21)` | Capacity Last Change Date Time |
| `_EntRsceCapacity` | | ✓ | | | | |
| `_AvailableCapacityType` | | ✓ | | | | |
| `_Cap` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntRsceCapacity` | `I_CapacityBasic` | [1..1] |
| `_AvailableCapacityType` | `I_AvailableCapacityType` | [1..1] |
| `_Cap` | `I_Capacity` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYINTERVAL')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Enterprise Resource Capacity Interval'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'IntervalEndDate'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'EntResourceCapacityInterval'

define view entity I_CapacityInterval
  as select from I_WorkCenterCapacityInterval_2 as _Interval
    inner join   I_CapacityBasic     as _PooledCapHeader on _Interval.CapacityInternalID = _PooledCapHeader.CapacityInternalID
    association [1..1] to I_CapacityBasic            as _EntRsceCapacity             on $projection.CapacityInternalID = _EntRsceCapacity.CapacityInternalID
    association [1..1] to I_AvailableCapacityType as _AvailableCapacityType on $projection.CapacityActiveVersion = _AvailableCapacityType.AvailableCapacityType
    association [1..1] to I_Capacity            as _Cap             on $projection.CapacityInternalID = _Cap.CapacityInternalID
{
      @ObjectModel.foreignKey.association: '_Cap'
  key _Interval.CapacityInternalID,
      @ObjectModel.foreignKey.association: '_AvailableCapacityType'
  key _Interval.CapacityActiveVersion,
  key _Interval.IntervalEndDate,
      _Interval.IntervalStartDate,
      _Interval.StdAvailableCapacityIsValid,
      _Interval.ShiftSequence,
      _Interval.WorkDayRule,
      _Interval.CapacityNumberOfShifts,
      _Interval.AvailableCapacityIntervalDurn,
      _Interval.CapacityNumberOfCapacities,
      _Interval.CapacityPlanUtilizationPercent,
      _Interval.CapacityLastChangeDateTime,
      /* Associations */
      _EntRsceCapacity,
      _AvailableCapacityType,
      _Cap
//      _Header,
//      _Shift
}
```
