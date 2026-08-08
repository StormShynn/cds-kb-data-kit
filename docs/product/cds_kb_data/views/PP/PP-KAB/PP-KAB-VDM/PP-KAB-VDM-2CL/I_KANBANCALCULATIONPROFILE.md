---
name: I_KANBANCALCULATIONPROFILE
description: "Kanbancalculationprofile"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCULATIONPROFILE

**Kanbancalculationprofile**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `KanbanContainerCalcProfile` | ✓ | |  | `kcprf` |  |  |
| `KanbanContainerCalculationType` |  | |  | `kcart` |  |  |
| `KanbanCtnCalcSafetyFactor` |  | |  | `kcsaf` |  |  |
| `KanbanCtnCalculationConstant` |  | |  | `kccon` |  |  |
| `KanbanCalcRqmtsSmoothingType` |  | |  | `kcgla` |  |  |
| `QuantityDistributionKey` |  | |  | `verti` |  |  |
| `SupplySourceShiftGrouping` |  | |  | `schgrup` |  |  |
| `SupplySourceShiftSequence` |  | |  | `sprog` |  |  |
| `SupplySourceFactoryCalendar` |  | |  | `fabkl` |  |  |
| `ReplnmtLeadTimeInWorkdays` |  | |  | `kwbzd` |  |  |
| `ReplnmtLeadTimeInHoursAndMins` |  | |  | `cast(tpkbp.kwbzm as vdm_kwbzm preserving type)` |  |  |
| `ConsumerShiftGrouping` |  | |  | `schgrupv` |  |  |
| `ConsumerShiftSequence` |  | |  | `sprogv` |  |  |
| `ConsumerFactoryCalendar` |  | |  | `fabklv` |  |  |
| `PullIntervalInWorkdays` |  | |  | `cast(tpkbp.pintvd as vdm_pintvd preserving type)` |  |  |
| `PullIntervalInHoursAndMinutes` |  | |  | `cast(tpkbp.pintvm as vdm_pintvm preserving type)` |  |  |
| `KnbnCtnCalcRqmtBufferInPercent` |  | |  | `kdmbuf` |  |  |
| `KnbnCtnCalcSupplySrceBufInPct` |  | |  | `kspbuf` |  |  |
| `RqmtFluctuationsAreConsdrd` |  | |  | `kdmvol` |  |  |
| `MRPPlanningCalendar` |  | |  | `mrppp` |  |  |
| `NonWorkingDaysAreConsdrd` |  | |  | `abftb` |  |  |
| `_Text` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanCalcProfileText` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCPRFL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Profile'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 2

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'KanbanContainerCalcProfile'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'KanbanContainerCalcProfile'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalculationProfile
  as select from tpkbp
  association [0..*] to I_KanbanCalcProfileText as _Text  on  $projection.KanbanContainerCalcProfile = _Text.KanbanContainerCalcProfile
                                                                 and $projection.Plant               = _Text.Plant
  association [0..1] to I_Plant  as _Plant on  $projection.Plant = _Plant.Plant
{
  @ObjectModel.foreignKey.association: '_Plant'
  key werks    as Plant,
  key kcprf    as KanbanContainerCalcProfile,
      kcart    as KanbanContainerCalculationType,
      kcsaf    as KanbanCtnCalcSafetyFactor,
      kccon    as KanbanCtnCalculationConstant,
      kcgla    as KanbanCalcRqmtsSmoothingType,
      verti    as QuantityDistributionKey,
      schgrup  as SupplySourceShiftGrouping,
      sprog    as SupplySourceShiftSequence,
      fabkl    as SupplySourceFactoryCalendar,
      kwbzd    as ReplnmtLeadTimeInWorkdays,
      cast(tpkbp.kwbzm as vdm_kwbzm preserving type)   as ReplnmtLeadTimeInHoursAndMins,
      schgrupv as ConsumerShiftGrouping,
      sprogv   as ConsumerShiftSequence,
      fabklv   as ConsumerFactoryCalendar,
      cast(tpkbp.pintvd as vdm_pintvd preserving type) as PullIntervalInWorkdays,
      cast(tpkbp.pintvm as vdm_pintvm preserving type) as PullIntervalInHoursAndMinutes,
      kdmbuf   as KnbnCtnCalcRqmtBufferInPercent,
      kspbuf   as KnbnCtnCalcSupplySrceBufInPct,
      kdmvol   as RqmtFluctuationsAreConsdrd,
      mrppp    as MRPPlanningCalendar,
      @Semantics.booleanIndicator
      abftb    as NonWorkingDaysAreConsdrd,
      
      _Plant,
      _Text
 
}
```
