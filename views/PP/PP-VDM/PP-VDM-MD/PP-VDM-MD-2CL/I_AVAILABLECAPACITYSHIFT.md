---
name: I_AVAILABLECAPACITYSHIFT
description: Availablecapacityshift
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_AVAILABLECAPACITYSHIFT

**Availablecapacityshift**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  | `kapid` |
| `AvailableCapacityType` | ✓ | |  | `versn` |
| `ValidityEndDate` | ✓ | |  | `datub` |
| `WeekDay` | ✓ | |  | `cast(substring (kapa.tagnr, 3, 1) as vdm_weekday)` |
| `AvailableCapacityShift` | ✓ | |  | `schnr` |
| `CapacityNumberOfCapacities` |  | |  | `anzhl` |
| `WorkDayRule` |  | |  | `cast(kapa.fabtg as workdayrule preserving type)` |
| `ShiftDefinition` |  | |  | `tprog` |
| `CapacityPlanUtilizationPercent` |  | |  | `ngrad` |
| `CapacityStartTimeID` |  | |  | `begzt` |
| `CapacityEndTimeID` |  | |  | `endzt` |
| `OperatingDurationInSeconds` |  | |  | `einzt` |
| `BreakDurationInSeconds` |  | |  | `pause` |
| `TotOperatingDurationInSeconds` |  | |  | `kapaz` |
| `_Capacity` | | ✓ | | |
| `_AvailableCapacityType` | | ✓ | | |
| `_EndDate` | | ✓ | | |
| `_WeekDay` | | ✓ | | |
| `_WorkDayRule` | | ✓ | | |
| `_ShiftDefinition` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Capacity` | `I_Capacity` | [1..1] |
| `_AvailableCapacityType` | `I_AvailableCapacityType` | [1..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |
| `_WeekDay` | `I_WeekDay` | [1..1] |
| `_WorkDayRule` | `I_WorkDayRule` | [0..1] |
| `_ShiftDefinition` | `I_ShiftDefinition` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPAVAILCAPSHIFT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'AvailableCapacityShift'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Available Capacity Shift'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_AvailableCapacityShift
  as select from kapa as kapa

  association [1..1] to I_Capacity              as _Capacity              on $projection.CapacityInternalID = _Capacity.CapacityInternalID
  association [1..1] to I_AvailableCapacityType as _AvailableCapacityType on $projection.AvailableCapacityType = _AvailableCapacityType.AvailableCapacityType
  association [1..1] to I_CalendarDate          as _EndDate               on $projection.ValidityEndDate = _EndDate.CalendarDate
  association [1..1] to I_WeekDay               as _WeekDay               on $projection.WeekDay = _WeekDay.WeekDay
  association [0..1] to I_WorkDayRule           as _WorkDayRule           on $projection.WorkDayRule = _WorkDayRule.WorkDayRule
  association [0..*] to I_ShiftDefinition       as _ShiftDefinition       on $projection.ShiftDefinition  = _ShiftDefinition.ShiftDefinition 
{
      @ObjectModel.foreignKey.association: '_Capacity'  
   key kapa.kapid as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_AvailableCapacityType'
  key kapa.versn as AvailableCapacityType,
      @ObjectModel.foreignKey.association: '_EndDate'
  key kapa.datub as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_WeekDay'
  key cast(substring (kapa.tagnr, 3, 1) as vdm_weekday) as WeekDay,
      -- representative key
  key kapa.schnr as AvailableCapacityShift,

      // Attributes
      kapa.anzhl as CapacityNumberOfCapacities,
      @ObjectModel.foreignKey.association: '_WorkDayRule'
      cast(kapa.fabtg as workdayrule preserving type) as WorkDayRule,
      kapa.tprog as ShiftDefinition,  

      // Times and Durations
      kapa.ngrad as CapacityPlanUtilizationPercent,
      kapa.begzt as CapacityStartTimeID,
      kapa.endzt as CapacityEndTimeID,
      kapa.einzt as OperatingDurationInSeconds,
      kapa.pause as BreakDurationInSeconds,
      kapa.kapaz as TotOperatingDurationInSeconds,

      // Associations
      _Capacity,
      _AvailableCapacityType,
      _EndDate,
      _WeekDay,
      _WorkDayRule,
      _ShiftDefinition
};
```
