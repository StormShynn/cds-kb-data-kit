---
name: I_MAINTENANCEPLANBASIC
description: Maintenance PlanBASIC
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANBASIC

**Maintenance PlanBASIC**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenancePlan` | `mpla.warpl` |
| `MaintenancePlanDesc` | `mpla.wptxt` |
| `CreationDate` | `mpla.ersdt` |
| `CreatedByUser` | `mpla.ernam` |
| `LastChangeDate` | `mpla.aedat` |
| `LastChangedByUser` | `mpla.aenam` |
| `MaintenanceStrategy` | `mpla.strat` |
| `SchedulingDuration` | `mpla.abrho` |
| `Equipment` | `mpla.equnr` |
| `FunctionalLocation` | `mpla.tplnr` |
| `Customer` | `mpla.kunum` |
| `NumberOfMaintenanceItems` | `mpla.anzps` |
| `Language` | `mpla.langu` |
| `CycleModificationRatio` | `mpla.sfakt` |
| `MaintPlanSchedgIndicator` | `mpla.stich` |
| `CallHorizonPercent` | `mpla.horiz` |
| `CallHorizonInDays` | `mpla.horiz_days` |
| `AuthorizationGroup` | `mpla.begru` |
| `MaintenancePlanInternalID` | `mpla.objnr` |
| `MaintenanceCall` | `mpla.abnum` |
| `MaintenancePlanCategory` | `mpla.mptyp` |
| `SchedulingDurationUnit` | `mpla.hunit` |
| `BasicStartDate` | `mpla.stadt` |
| `MaintPlanFreeDefinedAttrib` | `mpla.plan_sort` |
| `FactoryCalendar` | `mpla.fabkl` |
| `MaintPlanIsLockedAgainstCalls` | `mpla.lvorm` |
| `LastChangeDateTime` | `mpla.changeddatetime` |
| `LateCompletionShiftInPercent` | `mpla.vspos` |
| `EarlyCompletionShiftInPercent` | `mpla.vsneg` |
| `LateCompletionTolerancePercent` | `mpla.topos` |
| `EarlyCompletionTolerancePct` | `mpla.toneg` |
| `MaintenanceCallHorizonCalcType` | `cast (mpla.horiz_qualifier as eam_cc_callhorizon_calc_type preserving type)` |
| `MaintPlanLogicalOperatorCode` | `mpla.andor` |
| `MultipleCounterPlanShiftFactor` | `mpla.mcp_sf` |
| `MaintPlanStartCntrReadingValue` | `mpla.szaeh` |
| `SchedulingStartDate` | `mpla.start_date` |
| `SchedulingStartTime` | `mpla.start_time` |
| `MaintPlanEndCntrReadingValue` | `mpla.end_counter` |
| `SchedulingEndDate` | `mpla.enddt_for_sched` |
| `MaintenanceLeadFloatInDays` | `mpla.puffp` |
| `MaintPlnStrtBufDurationInDays` | `mpla.tgoon` |
| `MaintPlanStartBufferUnit` | `cast('TAG' as hunit)` |
| `PrdcssrCallObjCompltnIsRqd` | `mpla.call_confirm` |
| `MaintenancePlanHasLongText` | `mpla.ltknz` |
| `MaintenancePlanCallObject` | `_MaintenancePlanCatParam.MaintenancePlanCallObject` |
| `_StatusObjectActiveStatus` | *Association* |
| `_MaintenanceItem` | *Association* |
| `_MaintenancePlanCatParam` | *Association* |
| `_Customer` | *Association* |
| `_Equipment` | *Association* |
| `_FunctionalLocationLabel` | *Association* |
| `_MaintenanceCall` | *Association* |
| `_MaintPlanCallHistory` | *Association* |
| `_MaintenanceStrategy` | *Association* |
| `_FactoryCalendar` | *Association* |
| `_MaintenanceCycle` | *Association* |
| `_MaintenancePlanCycle` | *Association* |
| `_SchedulingIndicator` | *Association* |
| `_SchedulingDurationUnit` | *Association* |
| `_LogicalOperator` | *Association* |
| `_AuthorizationGroup` | *Association* |
| `_MaintCallConfIsRequired` | *Association* |
| `_MaintenancePlanSortField` | *Association* |
| `_MaintPlanStartBufferUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatusObjectActiveStatus` | `I_StatusObjectActiveStatus` | [0..*] |
| `_MaintenanceItem` | `I_MaintenanceItem` | [0..*] |
| `_MaintenancePlanCatParam` | `I_MaintenancePlanCatParam` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocationLabel` | `I_FunctionalLocationLabel` | [0..1] |
| `_MaintenanceCall` | `I_MaintenanceCall` | [0..*] |
| `_MaintPlanCallHistory` | `I_MaintPlanCallHistory` | [0..*] |
| `_MaintenanceStrategy` | `I_MaintenanceStrategy` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_MaintenanceCycle` | `I_MaintenanceCycle` | [0..*] |
| `_MaintenancePlanCycle` | `I_MaintenancePlanCycle` | [1..*] |
| `_SchedulingIndicator` | `I_MaintPlanSchedgInd` | [0..1] |
| `_SchedulingDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_LogicalOperator` | `I_MaintPlanLgclOptr` | [0..1] |
| `_AuthorizationGroup` | `I_TechObjAuthznGrp` | [0..1] |
| `_MaintCallConfIsRequired` | `I_Indicator` | [0..1] |
| `_MaintenancePlanSortField` | `I_MaintenancePlanSortField` | [0..1] |
| `_MaintPlanStartBufferUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MaintenancePlanExtension` | `E_MaintenancePlan` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMAINTPLANBASIC'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Plan'
@ObjectModel: {
    representativeKey: 'MaintenancePlan',
    semanticKey:  'MaintenancePlan',
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #L
    }
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:             #CDS_MODELING_DATA_SOURCE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE ]

@AbapCatalog.preserveKey:true

define view I_MaintenancePlanBasic
  as select from mpla
  association [0..*] to I_StatusObjectActiveStatus as _StatusObjectActiveStatus on  _StatusObjectActiveStatus.StatusObject = $projection.MaintenancePlanInternalID
  association [0..*] to I_MaintenanceItem          as _MaintenanceItem          on  _MaintenanceItem.MaintenancePlan = $projection.MaintenancePlan
  association [0..1] to I_MaintenancePlanCatParam  as _MaintenancePlanCatParam  on  _MaintenancePlanCatParam.MaintenancePlanCategory = $projection.MaintenancePlanCategory
  association [0..1] to I_Customer                 as _Customer                 on  _Customer.Customer = $projection.Customer
  association [0..1] to I_Equipment                as _Equipment                on  _Equipment.Equipment = $projection.Equipment
  association [0..1] to I_FunctionalLocationLabel  as _FunctionalLocationLabel  on  _FunctionalLocationLabel.FunctionalLocation = $projection.FunctionalLocation
  association [0..*] to I_MaintenanceCall          as _MaintenanceCall          on  _MaintenanceCall.MaintenancePlan = $projection.MaintenancePlan
                                                                                and _MaintenanceCall.MaintenanceCall = $projection.MaintenanceCall
  association [0..*] to I_MaintPlanCallHistory     as _MaintPlanCallHistory     on  _MaintPlanCallHistory.MaintenancePlan = $projection.MaintenancePlan
  association [0..1] to I_MaintenanceStrategy      as _MaintenanceStrategy      on  _MaintenanceStrategy.MaintenanceStrategy = $projection.MaintenanceStrategy

  association [0..1] to I_FactoryCalendar          as _FactoryCalendar          on  _FactoryCalendar.FactoryCalendar = $projection.FactoryCalendar
  association [0..*] to I_MaintenanceCycle         as _MaintenanceCycle         on  _MaintenanceCycle.MaintenancePlan = $projection.MaintenancePlan
  association [1..*] to I_MaintenancePlanCycle     as _MaintenancePlanCycle     on  _MaintenancePlanCycle.MaintenancePlan = $projection.MaintenancePlan
  association [0..1] to I_MaintPlanSchedgInd       as _SchedulingIndicator      on  _SchedulingIndicator.MaintPlanSchedgIndicator = $projection.MaintPlanSchedgIndicator
  association [0..1] to I_UnitOfMeasure            as _SchedulingDurationUnit   on  _SchedulingDurationUnit.UnitOfMeasure = $projection.SchedulingDurationUnit
  association [0..1] to I_MaintPlanLgclOptr        as _LogicalOperator          on  _LogicalOperator.LogicalOperator = $projection.MaintPlanLogicalOperatorCode
  association [0..1] to I_TechObjAuthznGrp         as _AuthorizationGroup       on  _AuthorizationGroup.TechObjAuthorizationGroup = $projection.AuthorizationGroup
  association [0..1] to I_Indicator                as _MaintCallConfIsRequired  on  _MaintCallConfIsRequired.IndicatorValue = $projection.PrdcssrCallObjCompltnIsRqd
  association [0..1] to I_MaintenancePlanSortField as _MaintenancePlanSortField on  _MaintenancePlanSortField.MaintenancePlanSortField = $projection.MaintPlanFreeDefinedAttrib
  association [0..1] to I_UnitOfMeasure            as _MaintPlanStartBufferUnit on  _MaintPlanStartBufferUnit.UnitOfMeasure = $projection.MaintPlanStartBufferUnit
   -- Extensions, do not expose as association:
  association [0..1] to E_MaintenancePlan          as _MaintenancePlanExtension on $projection.MaintenancePlan = _MaintenancePlanExtension.MaintenancePlan
 // association [1..1] to ZI_MaintPlanCallHorizonTypeTex as _CallHorizonUnit  on _CallHorizonUnit.MaintenanceCallHorizonCalcType     = $projection.MaintenanceCallHorizonCalcType
{
      // Key
      @ObjectModel.text.element: 'MaintenancePlanDesc'
  key mpla.warpl                                                                  as MaintenancePlan,
      // Text
      @Semantics.text: true
      mpla.wptxt                                                                  as MaintenancePlanDesc,

      @Semantics.businessDate.createdAt: true
      mpla.ersdt                                                                  as CreationDate,

      @Semantics.user.createdBy: true
      mpla.ernam                                                                  as CreatedByUser,

      @Semantics.businessDate.lastChangedAt: true
      mpla.aedat                                                                  as LastChangeDate,

      @Semantics.user.lastChangedBy: true
      mpla.aenam                                                                  as LastChangedByUser,

//      @Consumption.valueHelpDefinition: [{
//        entity: {
//            name: 'I_MaintenanceStrategyStdVH',
//            element: 'MaintenanceStrategy'
//        }
//      }]
//      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
      mpla.strat                                                                  as MaintenanceStrategy,

      @Semantics.quantity.unitOfMeasure: 'SchedulingDurationUnit'
      mpla.abrho                                                                  as SchedulingDuration,

//      @Consumption.valueHelpDefinition: [{
//        entity: {
//            name:    'I_EquipmentStdVH',
//            element: 'Equipment'
//        },
//        additionalBinding: [{
//            localElement: 'Customer',
//            element: 'Customer'
//        }]
//      }]
      @ObjectModel.foreignKey.association: '_Equipment'
      mpla.equnr                                                                  as Equipment,

      @ObjectModel.foreignKey.association: '_FunctionalLocationLabel'
//      @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_FunctionalLocationStdVH',
//                     element: 'Equipment' }
//        }]
      mpla.tplnr                                                                  as FunctionalLocation,

      @Consumption.valueHelpDefinition: [{
        entity: {
            name: 'I_Customer_VH',
            element: 'Customer'
        }
      }]
      @ObjectModel.foreignKey.association: '_Customer'
      mpla.kunum                                                                  as Customer,

      mpla.anzps                                                                  as NumberOfMaintenanceItems,

      @Semantics.language: true
      mpla.langu                                                                  as Language,

      mpla.sfakt                                                                  as CycleModificationRatio,

      @ObjectModel.foreignKey.association: '_SchedulingIndicator'
      mpla.stich                                                                  as MaintPlanSchedgIndicator,

      mpla.horiz                                                                  as CallHorizonPercent,
      //The MaintenanceCallHorizonCalcType field has a CHAR1 type. However, the unitofmeasure annotation is expected UNIT specific type
      //@Semantics.quantity.unitOfMeasure: 'MaintenanceCallHorizonCalcType'  
      mpla.horiz_days                                                             as CallHorizonInDays,

      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      mpla.begru                                                                  as AuthorizationGroup,

      mpla.objnr                                                                  as MaintenancePlanInternalID,

      mpla.abnum                                                                  as MaintenanceCall,

      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
      mpla.mptyp                                                                  as MaintenancePlanCategory,

      @ObjectModel.foreignKey.association: '_SchedulingDurationUnit'
      @Semantics.unitOfMeasure: true
      mpla.hunit                                                                  as SchedulingDurationUnit,

      mpla.stadt                                                                  as BasicStartDate,

      @ObjectModel.foreignKey.association: '_MaintenancePlanSortField'
      mpla.plan_sort                                                              as MaintPlanFreeDefinedAttrib,

      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      mpla.fabkl                                                                  as FactoryCalendar,

      mpla.lvorm                                                                  as MaintPlanIsLockedAgainstCalls,

      mpla.changeddatetime                                                        as LastChangeDateTime,

      mpla.vspos                                                                  as LateCompletionShiftInPercent,

      mpla.vsneg                                                                  as EarlyCompletionShiftInPercent,
 
      mpla.topos                                                                  as LateCompletionTolerancePercent,

      mpla.toneg                                                                  as EarlyCompletionTolerancePct,

      cast (mpla.horiz_qualifier as eam_cc_callhorizon_calc_type preserving type) as MaintenanceCallHorizonCalcType,

      @ObjectModel.foreignKey.association: '_LogicalOperator'
      mpla.andor                                                                  as MaintPlanLogicalOperatorCode,
  
      mpla.mcp_sf                                                                 as MultipleCounterPlanShiftFactor,

      mpla.szaeh                                                                  as MaintPlanStartCntrReadingValue,

      mpla.start_date                                                             as SchedulingStartDate,

      mpla.start_time                                                             as SchedulingStartTime,

//      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      mpla.end_counter                                                            as MaintPlanEndCntrReadingValue,
 
      mpla.enddt_for_sched                                                        as SchedulingEndDate,

      mpla.puffp                                                                  as MaintenanceLeadFloatInDays,

      mpla.tgoon                                                                  as MaintPlnStrtBufDurationInDays,

      @ObjectModel.foreignKey.association: '_MaintPlanStartBufferUnit'
      cast('TAG' as hunit)                                                        as MaintPlanStartBufferUnit,

      @Semantics.booleanIndicator: true   
      @ObjectModel.foreignKey.association: '_MaintCallConfIsRequired'
      mpla.call_confirm                                                           as PrdcssrCallObjCompltnIsRqd,
      
       mpla.ltknz                                                                 as MaintenancePlanHasLongText,  
       
       _MaintenancePlanCatParam.MaintenancePlanCallObject                         as MaintenancePlanCallObject,
      
      /* Associations */
      _StatusObjectActiveStatus,
      _Customer,
      _Equipment,
      _FunctionalLocationLabel,
      _MaintenanceItem,
      _MaintenancePlanCatParam,
      _MaintenanceCall,
      _MaintPlanCallHistory,
      _MaintenanceStrategy,
      _FactoryCalendar,
      _MaintenanceCycle,
      _SchedulingIndicator,
      _SchedulingDurationUnit,
      _LogicalOperator,
      _AuthorizationGroup,
      _MaintCallConfIsRequired,
      _MaintenancePlanSortField,
      _MaintPlanStartBufferUnit,
      _MaintenancePlanCycle
      //_CallHorizonUnit
}
where
  _MaintenancePlanCatParam.OrderCategoryScreenTypeCode <> 'O190' // stability study is not PM but QM relevant
```
