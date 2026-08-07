---
name: C_MAINTENANCEPLANCYCLEDEX
description: Data Extraction for Maint Plan Cycle
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value
semantic_en: Data Extraction for Maint Plan Cycle
semantic_vi: Data Extraction for Maint Plan Cycle — CDS view tiêu dùng dựa trên I_MaintenancePlanCycle.
keywords:
  - data
  - extraction
  - for
  - maint
  - plan
  - cycle
  - maintenance
  - comparison
  - operator
  - rcrrc
  - interval
  - unit
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTENANCEPLANCYCLEDEX

**Data Extraction for Maint Plan Cycle**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCycle` | ✓ | |  |  | `NUMC(2)` | Counter in Control Tables |
| `ComparisonOperator` |  | |  |  | `CHAR(2)` | Comparison operator for maint. package cycle duration |
| `MaintPlanCycRcrrcIntervalQty` |  | |  |  | `FLTP(16)` | Maintenance package cycle/offset |
| `MaintPlanCycRcrrcIntervalUnit` |  | |  |  | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintPlanCycleDesc` |  | |  |  | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `Language` |  | |  |  | `LANG(1)` | Primary language for object texts |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanCycleStartOffsetValue` |  | |  |  | `FLTP(16)` | Start offset of a time-based maintenance package |
| `MaintCycleNextPlndCntrRdng` |  | |  |  | `FLTP(16)` | Next planned counter reading |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `CycleSetSequenceRepeatFactor` |  | |  |  | `NUMC(2)` | Repeat Factor for Cycle Set Sequence |
| `_Language` | | ✓ | | | | |
| `_MaintenancePlan` | | ✓ | | | | |
| `_MeasuringPoint` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for Maint Plan Cycle'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic:true } 
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'CMAINTCYCLEDEX'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlanCycle'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@VDM.viewType: #CONSUMPTION

define view entity C_MaintenancePlanCycleDEX
  as select from I_MaintenancePlanCycle
{
  key MaintenancePlan,
  key MaintenancePlanCycle,
      ComparisonOperator,
      @Semantics.quantity.unitOfMeasure: 'MaintPlanCycRcrrcIntervalUnit'
      MaintPlanCycRcrrcIntervalQty,
      MaintPlanCycRcrrcIntervalUnit,
      MaintPlanCycleDesc,
      @ObjectModel.foreignKey.association: '_Language'
      Language,
      @ObjectModel.foreignKey.association: '_MeasuringPoint'
      MeasuringPoint,
      MaintPlanCycleStartOffsetValue,
      @Semantics.quantity.unitOfMeasure: 'MaintPlanCycRcrrcIntervalUnit'
      MaintCycleNextPlndCntrRdng,
      CycleSetSequence,
      CycleSetSequenceRepeatFactor,

      /* Associations */
      _Language,
      _MaintenancePlan,
      _MeasuringPoint,
      _UnitOfMeasure
}
```
