---
name: I_WORKCENTERCAPINTVL_4
description: "Work Center Capacity Intervals"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value
semantic_en: "Work Center Capacity Intervals"
semantic_vi: "Work Center Capacity Intervals — CDS view giao diện dựa trên I_WorkCenterCapacityInterval_3."
keywords:
  - "work"
  - "center"
  - "capacity"
  - "intervals"
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
# I_WORKCENTERCAPINTVL_4

**Work Center Capacity Intervals**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | ✓ | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | ✓ | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `CapacityActiveVersion` | ✓ | |  |  | `NUMC(2)` | Available capacity version |
| `IntervalEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `IntervalStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `StdAvailableCapacityIsValid` |  | |  |  | `CHAR(1)` | Ind.: Standard Available Capacity is Valid for this Interval |
| `AvailableCapacityIntervalDurn` |  | |  |  | `NUMC(2)` | Duration of an Available Capacity Interval |
| `ShiftSequence` |  | |  |  | `CHAR(4)` | Key for the Shift Sequence |
| `WorkDayRule` |  | |  |  | `CHAR(1)` | Workday Rule Code |
| `CapacityNumberOfShifts` |  | |  |  | `NUMC(1)` | Number of Shifts in a Day |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
| `_Cap` | | ✓ | | | | |
| `_AvailableCapacityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Cap` | `I_Capacity` | [1..1] |
| `_AvailableCapacityType` | `I_AvailableCapacityType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPINTVL_4')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Work Center Capacity Intervals'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'IntervalEndDate'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCapacityInterval'

define view entity I_WorkCenterCapIntvl_4
  as select from I_WorkCenterCapacityInterval_3 as Interval
    inner join   I_WorkCenterCapacity_3         as Capacity on Interval.CapacityInternalID = Capacity.CapacityInternalID
    association [1..1] to I_Capacity            as _Cap             on $projection.CapacityInternalID = _Cap.CapacityInternalID
    association [1..1] to I_AvailableCapacityType as _AvailableCapacityType on $projection.CapacityActiveVersion = _AvailableCapacityType.AvailableCapacityType
  {
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key Capacity.WorkCenterInternalID           as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key Capacity.WorkCenterTypeCode             as WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_WorkCenterCapMap'
  key Capacity.CapacityCategoryAllocation     as CapacityCategoryAllocation,
      @ObjectModel.foreignKey.association: '_Cap'
  key Interval.CapacityInternalID             as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_AvailableCapacityType'
  key Interval.CapacityActiveVersion          as CapacityActiveVersion,
  key Interval.IntervalEndDate,
      Interval.IntervalStartDate,
      Interval.StdAvailableCapacityIsValid,
      Interval.AvailableCapacityIntervalDurn,
      Interval.ShiftSequence,
      Interval.WorkDayRule,
      Interval.CapacityNumberOfShifts,
      Interval.CapacityNumberOfCapacities     as CapacityNumberOfCapacities,
      Interval.CapacityPlanUtilizationPercent as CapacityPlanUtilizationPercent, 
      Interval.CapacityLastChangeDateTime     as CapacityLastChangeDateTime,
      
      //Associations
      Capacity._WorkCenter,
      Capacity._WorkCenterTypeCode,
      Capacity._WorkCenterCapMap,
      _Cap,
      _AvailableCapacityType
}
```
