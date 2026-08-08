---
name: I_PLNDINDEPRQMTITEMHISTORY
description: "Plndindeprqmtitemhistory"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTITEMHISTORY

**Plndindeprqmtitemhistory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlndIndepRqmtInternalID` | ✓ | |  |  |  |  |
| `ForecastYearMonth` | ✓ | |  | `YearMonth` |  |  |
| `OrderEndDate` | ✓ | |  |  |  |  |
| `LastChangeDate` | ✓ | |  |  |  |  |
| `LastChangeTime` | ✓ | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ForecastPeriodType` |  | |  |  |  |  |
| `DeliveryDate` |  | |  | `cast(coalesce(hist.OrderEndDate,'00000000') as lfdat_v preserving type)` |  |  |
| `ForecastPeriodStartDate` |  | |  | `cast((case when hist.ForecastPeriodType = '1' then coalesce(hist.OrderEndDate,'00000000') when hist.ForecastPeriodType = '2' then coalesce(hist._OrderEndDate.FirstDayOfWeekDate,'00000000') else coalesce(hist._OrderEndDate.FirstDayOfMonthDate,'00000000') end ) as pph_per_sdat)` |  |  |
| `ForecastYearQuarter` |  | |  | `YearQuarter` |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlannedQuantity` |  | |  | `cast(coalesce(hist.PlannedQuantity, 0) as pph_plan_qty preserving type)` |  |  |
| `WithdrawalQuantity` |  | |  | `cast(coalesce(hist.WithdrawalQuantity, 0) as entmg preserving type)` |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `PlndIndepRqmtType` |  | |  |  |  |  |
| `RequirementPlan` |  | |  |  |  |  |
| `ExternalRequirementPlan` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `PlndIndepRqmtConsumptionStrgy` |  | |  |  |  |  |
| `PlndIndepRqmtIsActive` |  | |  |  |  |  |
| `PlndIndepRqmtConsumptionAssgmt` |  | |  |  |  |  |
| `PlndIndepRqmtUsage` |  | |  |  |  |  |
| `PlndIndepRqmtIsToBeDeleted` |  | |  |  |  |  |
| `PlannedIndepRqmtDeletionCode` |  | |  |  |  |  |
| `PlndIndepRqmtLastChgdDateTime` |  | |  |  |  |  |
| `_PlndIndepRqmt` | | ✓ | | | | |
| `_PlndIndepRqmtItem` | | ✓ | | | | |
| `_DeliveryDate` | | ✓ | | | | |
| `_PeriodStartDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlndIndepRqmt` | `I_PlndIndepRqmtByIntKey` | [1..1] |
| `_PlndIndepRqmtItem` | `I_PlndIndepRqmtItemByIntKey` | [1..1] |
| `_DeliveryDate` | `I_CalendarDate` | [0..1] |
| `_PeriodStartDate` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPIRHIST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'History of Planned Independent Requirement Items'

define view I_PlndIndepRqmtItemHistory
  as select from           I_PlndIndepRqmtByIntKey       as head
    left outer to one join I_PlndIndepRqmtItemHistoryBsc as hist on hist.PlndIndepRqmtInternalID = head.PlndIndepRqmtInternalID

  association [1..1] to I_PlndIndepRqmtByIntKey     as _PlndIndepRqmt      on  $projection.PlndIndepRqmtInternalID = _PlndIndepRqmt.PlndIndepRqmtInternalID
  association [1..1] to I_PlndIndepRqmtItemByIntKey as _PlndIndepRqmtItem  on  $projection.PlndIndepRqmtInternalID = _PlndIndepRqmtItem.PlndIndepRqmtInternalID
                                                                           and $projection.OrderEndDate            = _PlndIndepRqmtItem.WorkingDayDate
  association [0..1] to I_CalendarDate              as _DeliveryDate       on  $projection.DeliveryDate = _DeliveryDate.CalendarDate
  association [0..1] to I_CalendarDate              as _PeriodStartDate    on  $projection.ForecastPeriodStartDate = _PeriodStartDate.CalendarDate
{
      @ObjectModel.foreignKey.association: '_PlndIndepRqmt'
  key head.PlndIndepRqmtInternalID,
      @Semantics.calendar.yearMonth: true
  key hist._OrderEndDate.YearMonth                  as ForecastYearMonth,
      @Semantics.businessDate.at: true
  key hist.OrderEndDate,
      @Semantics.systemDate.lastChangedAt: true
  key hist.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
  key hist.LastChangeTime,

      @Semantics.user.lastChangedBy: true
      hist.LastChangedByUser,
      @ObjectModel.foreignKey.association: '_ForecastPeriodType'
      hist.ForecastPeriodType,

      @ObjectModel.foreignKey.association: '_DeliveryDate'
      cast(coalesce(hist.OrderEndDate,'00000000') as lfdat_v preserving type) as DeliveryDate,
      @ObjectModel.foreignKey.association: '_PeriodStartDate'
      cast((case
        when hist.ForecastPeriodType = '1' 
          then coalesce(hist.OrderEndDate,'00000000')
        when hist.ForecastPeriodType = '2' 
          then coalesce(hist._OrderEndDate.FirstDayOfWeekDate,'00000000')
        else coalesce(hist._OrderEndDate.FirstDayOfMonthDate,'00000000')
      end ) as pph_per_sdat)                                                  as ForecastPeriodStartDate,
      
      @Semantics.calendar.yearQuarter: true
      hist._OrderEndDate.YearQuarter                                          as ForecastYearQuarter,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      hist.BaseUnit,     
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      cast(coalesce(hist.PlannedQuantity, 0) as pph_plan_qty preserving type) as PlannedQuantity,  //ForecastQuantity,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      cast(coalesce(hist.WithdrawalQuantity, 0) as entmg preserving type)     as WithdrawalQuantity,

      //further Header data:
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'      
      head.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'      
      head.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      head.MRPArea,
      @ObjectModel.foreignKey.association: '_PlndIndepRqmtType'
      head.PlndIndepRqmtType,
      head.RequirementPlan,
      head.ExternalRequirementPlan,
      head.RequirementSegment,
      head.PlndIndepRqmtConsumptionStrgy,
      head.PlndIndepRqmtIsActive,
      head.PlndIndepRqmtConsumptionAssgmt,
      head.PlndIndepRqmtUsage,
      head.PlndIndepRqmtIsToBeDeleted,
      head.PlannedIndepRqmtDeletionCode,
      @Semantics.systemDateTime.lastChangedAt: true
      head.PlndIndepRqmtLastChgdDateTime,

      // Associations
      _PlndIndepRqmt,
      _PlndIndepRqmtItem,
      _DeliveryDate,
      _PeriodStartDate,
      hist._ForecastPeriodType,
      hist._UnitOfMeasure,
      head._Plant,
      head._Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      head._ProductPlant,
      head._ProductPlant2,
      head._MRPArea,
      head._PlndIndepRqmtType
};
```
