---
name: I_AVAILABLECAPACITYINTERVAL
description: "Availablecapacityinterval"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_AVAILABLECAPACITYINTERVAL

**Availablecapacityinterval**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  | `kapid` |  |  |
| `AvailableCapacityType` | ✓ | |  | `versn` |  |  |
| `ValidityEndDate` | ✓ | |  | `datub` |  |  |
| `CapacityNumberOfCapacities` |  | |  | `anzhl` |  |  |
| `CapacityNumberOfShifts` |  | |  | `anzsh` |  |  |
| `WorkDayRule` |  | |  | `cast(kazy.fabtg as workdayrule preserving type)` |  |  |
| `ShiftSequence` |  | |  | `sprog` |  |  |
| `AvailableCapacityIntervalDurn` |  | |  | `cast(kazy.anztg as availablecapacityintervaldurn preserving type)` |  |  |
| `CapacityPlanUtilizationPercent` |  | |  | `ngrad` |  |  |
| `StdAvailableCapacityIsValid` |  | |  | `kkopf` |  |  |
| `_Capacity` | | ✓ | | | | |
| `_AvailableCapacityType` | | ✓ | | | | |
| `_EndDate` | | ✓ | | | | |
| `_WorkDayRule` | | ✓ | | | | |
| `_ShiftSequence` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Capacity` | `I_Capacity` | [1..1] |
| `_AvailableCapacityType` | `I_AvailableCapacityType` | [1..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |
| `_WorkDayRule` | `I_WorkDayRule` | [0..1] |
| `_ShiftSequence` | `I_ShiftSequence` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPAVAILCAPINTRV'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'ValidityEndDate'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Available Capacity Interval'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_AvailableCapacityInterval
  as select from kazy as kazy

  association [1..1] to I_Capacity              as _Capacity              on $projection.CapacityInternalID = _Capacity.CapacityInternalID
  association [1..1] to I_AvailableCapacityType as _AvailableCapacityType on $projection.AvailableCapacityType = _AvailableCapacityType.AvailableCapacityType
  association [1..1] to I_CalendarDate          as _EndDate               on $projection.ValidityEndDate = _EndDate.CalendarDate
  association [0..1] to I_WorkDayRule           as _WorkDayRule           on $projection.WorkDayRule = _WorkDayRule.WorkDayRule 
  association [0..*] to I_ShiftSequence         as _ShiftSequence         on $projection.ShiftSequence = _ShiftSequence.ShiftSequence 
{
      @ObjectModel.foreignKey.association: '_Capacity'
  key kazy.kapid as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_AvailableCapacityType'
  key kazy.versn as AvailableCapacityType,
      -- representative key
  key kazy.datub as ValidityEndDate,

      // Attributes
      kazy.anzhl as CapacityNumberOfCapacities,
      kazy.anzsh as CapacityNumberOfShifts, 
      @ObjectModel.foreignKey.association: '_WorkDayRule'
      cast(kazy.fabtg as workdayrule preserving type) as WorkDayRule,
      kazy.sprog as ShiftSequence,
      cast(kazy.anztg as availablecapacityintervaldurn preserving type) as AvailableCapacityIntervalDurn,
      kazy.ngrad as CapacityPlanUtilizationPercent,
      kazy.kkopf as StdAvailableCapacityIsValid,

      // Associations
      _Capacity,
      _AvailableCapacityType,
      _EndDate,
      _WorkDayRule,
      _ShiftSequence
};
```
