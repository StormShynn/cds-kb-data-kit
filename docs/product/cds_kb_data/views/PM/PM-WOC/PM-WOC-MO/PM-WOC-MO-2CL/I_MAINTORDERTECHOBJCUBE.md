---
name: I_MAINTORDERTECHOBJCUBE
description: "Maintordertechobjcube"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - analytical
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERTECHOBJCUBE

**Maintordertechobjcube**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `MaintenanceOrderIsHistorical` |  | |  | `cast( ' ' as eam_is_historical_order preserving type )` |  |  |
| `MaintenanceOrderType` |  | |  |  |  |  |
| `MaintenanceOrderDesc` |  | |  |  |  |  |
| `MaintPriority` |  | |  |  |  |  |
| `MaintPriorityType` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `MaintenanceNotification` |  | |  |  |  |  |
| `LeadingOrder` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintOrdPersonResponsible` |  | |  | `cast( '' as i_parnr_vera )` |  |  |
| `MaintenanceRevision` |  | |  |  |  |  |
| `MaintenancePlan` |  | |  |  |  |  |
| `MaintenanceItem` |  | |  |  |  |  |
| `TaskListType` |  | |  | `BillOfOperationsType` |  |  |
| `TaskListGroup` |  | |  | `BillOfOperations` |  |  |
| `TaskListGroupCounter` |  | |  | `BillOfOperationsVariant` |  |  |
| `MaintenanceOrderPlanningCode` |  | |  |  |  |  |
| `MaintenanceActivityType` |  | |  |  |  |  |
| `ABCIndicator` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `AssetLocation` |  | |  |  |  |  |
| `AssetRoom` |  | |  |  |  |  |
| `MaintenanceProcessingPhase` |  | |  |  |  |  |
| `OperationSystemCondition` |  | |  |  |  |  |
| `PlantSection` |  | |  |  |  |  |
| `MainWorkCenter` |  | |  | `cast( I_MaintenanceOrder._MainWorkCenter.WorkCenter as gewrk preserving type )` |  |  |
| `MainWorkCenterPlant` |  | |  | `cast( I_MaintenanceOrder._MainWorkCenter.Plant as wergw preserving type )` |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterPlant` |  | |  | `Plant` |  |  |
| `ReferenceElement` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `SuperiorProjectNetwork` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `SettlementOrder` |  | |  |  |  |  |
| `MaintenanceOrderInternalID` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `PlannedStartDate` |  | |  |  |  |  |
| `PlannedStartTime` |  | |  |  |  |  |
| `PlannedEndDate` |  | |  |  |  |  |
| `PlannedEndTime` |  | |  |  |  |  |
| `ScheduledBasicStartDate` |  | |  |  |  |  |
| `ScheduledBasicStartTime` |  | |  |  |  |  |
| `ScheduledBasicEndDate` |  | |  |  |  |  |
| `ScheduledBasicEndTime` |  | |  |  |  |  |
| `ActualStartDate` |  | |  |  |  |  |
| `ActualStartTime` |  | |  |  |  |  |
| `ConfirmedEndDate` |  | |  |  |  |  |
| `ConfirmedEndTime` |  | |  |  |  |  |
| `MaintOrderReferenceDate` |  | |  |  |  |  |
| `CreationDateTime` |  | |  | `cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.CreationDate, I_MaintenanceOrder._Order.CreationTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as creation_timestamp )` |  |  |
| `LastChangeDateTime` |  | |  | `cast( I_MaintenanceOrder.LastChangeDateTime as rslastchangedat preserving type )` |  |  |
| `ScheduledBasicEndDateTime` |  | |  | `cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.ScheduledBasicEndDate, I_MaintenanceOrder._Order.ScheduledBasicEndTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as sched_basic_end_timestamp )` |  |  |
| `ConfirmedEndDateTime` |  | |  | `cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.ConfirmedEndDate, I_MaintenanceOrder._Order.ConfirmedEndTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as conf_end_timestamp )` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `TechnicalObject` |  | |  | `case when Equipment = '' then cast( _LocationAccountAssignment.FunctionalLocation as eams_tec_obj ) else cast( Equipment as eams_tec_obj ) end` |  |  |
| `TechnicalObjectType` |  | |  | `coalesce( _Equipment.TechnicalObjectType, _LocationAccountAssignment._FunctionalLocation.TechnicalObjectType )` |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  | `cast( case when Equipment = '' and _LocationAccountAssignment.FunctionalLocation = '' then '' else case when Equipment = '' then 'EAMS_FL' else 'EAMS_EQUI' end end as eams_tec_obj_type_value )` |  |  |
| `OrderLeadTimeDuration` |  | |  | `DLZNetto` |  |  |
| `OrderRuntimeDuration` |  | |  | `DLZBrutto` |  |  |
| `OrderDurationUnit` |  | |  | `cast( 'TAG' as qeinhtag )` |  |  |
| `NumberOfCreatedMaintOrders` |  | |  | `cast( 1 as eam_num_orders_created )` |  |  |
| `NumberOfOrders` |  | |  | `cast( case when I_MaintenanceOrder._Order.IsMarkedForDeletion != 'X' then 1 else 0 end as eam_num_orders )` |  |  |
| `NumberOfCompletedMaintOrders` |  | |  | `cast( case when I_MaintenanceOrder.MaintenanceProcessingPhase = '3' or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '4' and (I_MaintenanceOrder._StatusObjectStatus[1: IsUserStatus='' and StatusIsInactive = '' and StatusCode = 'I0015' ].StatusCode is null ) ) or I_MaintenanceOrder.MaintenanceProcessingPhase = '5' or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '6' and I_MaintenanceOrder._Order.TechnicalCompletionDate != '00000000' ) then 1 else 0 end as eam_num_orders_compl )` |  |  |
| `NumberOfPlannedMaintOrders` |  | |  | `cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = '1' then 1 else 0 end as eam_num_orders_planned )` |  |  |
| `NumberOfUnplannedMaintOrders` |  | |  | `cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = ' ' then 1 else 0 end as eam_num_orders_unplanned )` |  |  |
| `NumberOfImmediateMaintOrders` |  | |  | `cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = '2' then 1 else 0 end as eam_num_orders_immediate )` |  |  |
| `NmbrOfMaintOrdsNotToBeExecuted` |  | |  | `cast( case when ( I_MaintenanceOrder.MaintenanceProcessingPhase = '4' and I_MaintenanceOrder._StatusObjectStatus[1: IsUserStatus='' and StatusIsInactive='' and StatusCode = 'I0015' ].StatusCode != '' ) or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '6' and I_MaintenanceOrder._Order.TechnicalCompletionDate = '00000000' ) then 1 else 0 end as eam_num_orders_not_to_be_exec )` |  |  |
| `NmbrOfOutstandingMaintOrders` |  | |  | `cast( case when I_MaintenanceOrder.MaintenanceProcessingPhase = '0' or I_MaintenanceOrder.MaintenanceProcessingPhase = '2' then 1 else 0 end as eam_num_orders_outstanding )` |  |  |
| `NmbrOfMaintOrdsCompletedOnTime` |  | |  | `cast( case when ( I_MaintenanceOrder._Order.ConfirmedEndDate != '00000000' and I_MaintenanceOrder._Order.ScheduledBasicEndDate != '00000000' and ( I_MaintenanceOrder._Order.ConfirmedEndDate < I_MaintenanceOrder._Order.ScheduledBasicEndDate or ( I_MaintenanceOrder._Order.ConfirmedEndDate = I_MaintenanceOrder._Order.ScheduledBasicEndDate and I_MaintenanceOrder._Order.ConfirmedEndTime <= I_MaintenanceOrder._Order.ScheduledBasicEndTime ) ) ) then 1 else 0 end as eam_num_orders_compl_on_time )` |  |  |
| `NmbrOfHistoricalOrders` |  | |  | `cast( 0 as eam_num_orders_historical)` |  |  |
| `MaintOrdProcessPhaseCode` |  | |  |  |  |  |
| `MaintOrdProcessSubPhaseCode` |  | |  |  |  |  |
| `LatestAcceptableCompletionDate` |  | |  |  |  |  |
| `PrevLtstAccptblCompletionDate` |  | |  |  |  |  |
| `MaintOrderProcessingContext` |  | |  |  |  |  |
| `MainWorkCenterInternalID` |  | |  | `WorkCenterInternalID` |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `_WorkCenterPlant` |  | |  | `_Plant` |  |  |
| `_MainWorkCenterPlant` |  | |  | `_Plant` |  |  |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_MainWorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenterBySemanticKey` | | ✓ | | | | |
| `_EquipmentData` | | ✓ | | | | |
| `_FunctionalLocationData` | | ✓ | | | | |
| `_OrderDurationUnit` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_MaintenancePlanPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |
| `_TechnicalObjectType` | `I_TechnicalObjectType` | [0..1] |
| `_MainWorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_EquipmentData` | `I_EquipmentData` | [0..*] |
| `_FunctionalLocationData` | `I_FunctionalLocationData` | [0..1] |
| `_OrderDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order With Tech Object - Cube'
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IMNTORDTOCUBE'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics: {
  dataCategory: #CUBE,
  dataExtraction: {
    enabled: true,
    delta.byElement: {
      name: 'LastChangeDateTime'
    }
  }
}

@Metadata.allowExtensions:true

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #D,
    sizeCategory: #XL
  }
}
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ObjectModel.sapObjectNodeType.name:'MaintenanceOrder'

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST,#UNION]

define view I_MaintOrderTechObjCube
  as select from           I_MaintenanceOrder                                        as I_MaintenanceOrder
    left outer to one join P_MaintOrderDurationInWorkdays(im_clnt : $session.client) as durn on durn.MaintenanceOrder = I_MaintenanceOrder.MaintenanceOrder
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc   on  $projection.TechObjIsEquipOrFuncnlLoc = _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_TechnicalObjectType       as _TechnicalObjectType         on  $projection.TechnicalObjectType = _TechnicalObjectType.TechnicalObjectType
  association [0..1] to I_WorkCenterBySemanticKey   as _MainWorkCenterBySemanticKey on  $projection.MainWorkCenter      = _MainWorkCenterBySemanticKey.WorkCenter
                                                                                    and $projection.MainWorkCenterPlant = _MainWorkCenterBySemanticKey.Plant
  association [0..1] to I_WorkCenterBySemanticKey   as _WorkCenterBySemanticKey     on  $projection.workcenter      = _WorkCenterBySemanticKey.WorkCenter
                                                                                    and $projection.WorkCenterPlant = _WorkCenterBySemanticKey.Plant
  association [0..*] to I_EquipmentData             as _EquipmentData               on  _EquipmentData.Equipment = $projection.Equipment
  association [0..1] to I_FunctionalLocationData    as _FunctionalLocationData      on  _FunctionalLocationData.FunctionalLocation = $projection.functionallocation
  association [0..1] to I_UnitOfMeasure             as _OrderDurationUnit           on  _OrderDurationUnit.UnitOfMeasure = $projection.OrderDurationUnit
  association [0..1] to I_WorkCenter                as _WorkCenter                  on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                    and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_MaintenancePlanPlant      as _MaintenancePlanPlant        on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant

  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceOrder          as _MaintenanceOrderExtension   on  $projection.MaintenanceOrder = _MaintenanceOrderExtension.MaintenanceOrder
{
      @ObjectModel.text.element:  [ 'MaintenanceOrderDesc' ]
  key I_MaintenanceOrder.MaintenanceOrder,

      cast( ' ' as eam_is_historical_order preserving type )                                                         as MaintenanceOrderIsHistorical,

      @ObjectModel.foreignKey.association: '_MaintenanceOrderType'
      I_MaintenanceOrder.MaintenanceOrderType,

      @Semantics.text: true
      I_MaintenanceOrder.MaintenanceOrderDesc,

      I_MaintenanceOrder.MaintPriority,
      I_MaintenanceOrder.MaintPriorityType,

      @ObjectModel.foreignKey.association: '_FunctionalLocationData'
      I_MaintenanceOrder._LocationAccountAssignment.FunctionalLocation,
      @Consumption.filter.businessDate.at
      @ObjectModel.foreignKey.association: '_EquipmentData'
      I_MaintenanceOrder.Equipment,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_MaintenanceOrder.Assembly,
      I_MaintenanceOrder._Equipment.Material,
      I_MaintenanceOrder.SerialNumber,

      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
      I_MaintenanceOrder.MaintenanceNotification,

      I_MaintenanceOrder._Order.LeadingOrder,

      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      I_MaintenanceOrder.MaintenancePlannerGroup,
      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      I_MaintenanceOrder.MaintenancePlanningPlant,

      cast( '' as i_parnr_vera )                                                                                     as MaintOrdPersonResponsible,
      I_MaintenanceOrder.MaintenanceRevision,

      @ObjectModel.foreignKey.association: '_MaintenancePlan'
      I_MaintenanceOrder.MaintenancePlan,
      @ObjectModel.foreignKey.association: '_MaintenanceItem'
      I_MaintenanceOrder.MaintenanceItem,

      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      I_MaintenanceOrder._Order.BillOfOperationsType                                                                 as TaskListType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      I_MaintenanceOrder._Order.BillOfOperations                                                                     as TaskListGroup,
      I_MaintenanceOrder._Order.BillOfOperationsVariant                                                              as TaskListGroupCounter,

      I_MaintenanceOrder.MaintenanceOrderPlanningCode,

      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      I_MaintenanceOrder.MaintenanceActivityType,

      @ObjectModel.foreignKey.association: '_ABCIndicator'
      I_MaintenanceOrder._LocationAccountAssignment.ABCIndicator,

      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      I_MaintenanceOrder._LocationAccountAssignment.MaintenancePlant,
      @ObjectModel.foreignKey.association: '_Location'
      I_MaintenanceOrder._LocationAccountAssignment.AssetLocation,
      I_MaintenanceOrder._LocationAccountAssignment.AssetRoom,

      I_MaintenanceOrder.MaintenanceProcessingPhase,

      I_MaintenanceOrder.OperationSystemCondition,

      @ObjectModel.foreignKey.association: '_PlantSection'
      I_MaintenanceOrder._LocationAccountAssignment.PlantSection,

      @ObjectModel.foreignKey.association: '_MainWorkCenterBySemanticKey'
      cast( I_MaintenanceOrder._MainWorkCenter.WorkCenter as gewrk preserving type )                                 as MainWorkCenter,
      @ObjectModel.foreignKey.association: '_MainWorkCenterPlant'
      cast( I_MaintenanceOrder._MainWorkCenter.Plant as wergw preserving type )                                      as MainWorkCenterPlant,
      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      I_MaintenanceOrder._LocationAccountAssignment._WorkCenter.WorkCenter,
      @ObjectModel.foreignKey.association: '_WorkCenterPlant'
      I_MaintenanceOrder._LocationAccountAssignment._WorkCenter.Plant                                                as WorkCenterPlant,

      I_MaintenanceOrder.ReferenceElement,

      @ObjectModel.foreignKey.association: '_CostCenter'
      I_MaintenanceOrder._LocationAccountAssignment.CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_MaintenanceOrder._LocationAccountAssignment.ControllingArea,
      I_MaintenanceOrder._Order.SuperiorProjectNetwork,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      I_MaintenanceOrder._LocationAccountAssignment.CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      I_MaintenanceOrder._LocationAccountAssignment.BusinessArea,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      I_MaintenanceOrder._LocationAccountAssignment.WBSElementInternalID,
      I_MaintenanceOrder._LocationAccountAssignment.MasterFixedAsset,
      I_MaintenanceOrder._LocationAccountAssignment.FixedAsset,

      I_MaintenanceOrder._LocationAccountAssignment.SettlementOrder,
      I_MaintenanceOrder.MaintenanceOrderInternalID,

      I_MaintenanceOrder._Order.IsMarkedForDeletion,

      // Dates and Times
      @Semantics.systemDate.createdAt: true
      I_MaintenanceOrder._Order.CreationDate,
      I_MaintenanceOrder._Order.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      I_MaintenanceOrder._Order.LastChangeDate,
      I_MaintenanceOrder._Order.LastChangeTime,
      --@Semantics.calendarItem.dtStart: true
      I_MaintenanceOrder._Order.PlannedStartDate,
      I_MaintenanceOrder._Order.PlannedStartTime,
      --@Semantics.calendarItem.dtEnd: true
      I_MaintenanceOrder._Order.PlannedEndDate,
      I_MaintenanceOrder._Order.PlannedEndTime,
      --@Semantics.calendarItem.dtStart: true
      I_MaintenanceOrder._Order.ScheduledBasicStartDate                                                              as ScheduledBasicStartDate,
      I_MaintenanceOrder._Order.ScheduledBasicStartTime,
      --@Semantics.calendarItem.dtEnd: true
      I_MaintenanceOrder._Order.ScheduledBasicEndDate,
      I_MaintenanceOrder._Order.ScheduledBasicEndTime,
      --@Semantics.calendarItem.dtStart: true
      I_MaintenanceOrder._Order.ActualStartDate,
      I_MaintenanceOrder._Order.ActualStartTime,
      --@Semantics.calendarItem.dtEnd: true
      I_MaintenanceOrder._Order.ConfirmedEndDate                                                                     as ConfirmedEndDate,
      I_MaintenanceOrder._Order.ConfirmedEndTime,
      @Semantics.businessDate.at: true
      I_MaintenanceOrder.MaintOrderReferenceDate,

      // Dates and Times as timestamps
      @Semantics.systemDateTime.createdAt: true
      cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.CreationDate, I_MaintenanceOrder._Order.CreationTime, abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as creation_timestamp )                                          as CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      cast( I_MaintenanceOrder.LastChangeDateTime as rslastchangedat preserving type )                               as LastChangeDateTime,
      cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.ScheduledBasicEndDate, I_MaintenanceOrder._Order.ScheduledBasicEndTime, abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as sched_basic_end_timestamp )                                   as ScheduledBasicEndDateTime,
      cast( dats_tims_to_tstmp( I_MaintenanceOrder._Order.ConfirmedEndDate, I_MaintenanceOrder._Order.ConfirmedEndTime, abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as conf_end_timestamp )                                          as ConfirmedEndDateTime,


      // Users
      @Semantics.user.createdBy: true
      I_MaintenanceOrder._Order.CreatedByUser,
      @Semantics.user.lastChangedBy: true
      I_MaintenanceOrder._Order.LastChangedByUser,

      /****************************************************************************************************
      * Technical Object
      ****************************************************************************************************/
      case when Equipment = '' then
                  cast( _LocationAccountAssignment.FunctionalLocation as eams_tec_obj )
           else cast( Equipment as eams_tec_obj ) end                                                                as TechnicalObject,

      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      coalesce( _Equipment.TechnicalObjectType, _LocationAccountAssignment._FunctionalLocation.TechnicalObjectType ) as TechnicalObjectType,

      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      cast( case when Equipment = '' and _LocationAccountAssignment.FunctionalLocation = '' then ''
            else case when Equipment = '' then 'EAMS_FL'
            else 'EAMS_EQUI' end end as eams_tec_obj_type_value )                                                    as TechObjIsEquipOrFuncnlLoc,

      /****************************************************************************************************
      * Measures
      ****************************************************************************************************/
      // Durations
      //@Semantics.calendarItem.duration: true
      @DefaultAggregation: #SUM
      //@Semantics.quantity.unitOfMeasure: 'OrderDurationUnit' -- not supported by BW for INT4 fields
      durn.DLZNetto                                                                                                  as OrderLeadTimeDuration,
      //@Semantics.calendarItem.duration: true
      @DefaultAggregation: #SUM
      //@Semantics.quantity.unitOfMeasure: 'OrderDurationUnit' -- not supported by BW for INT4 fields
      durn.DLZBrutto                                                                                                 as OrderRuntimeDuration,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderDurationUnit'
      cast( 'TAG' as qeinhtag )                                                                                      as OrderDurationUnit,

      @DefaultAggregation: #SUM
      cast( 1 as eam_num_orders_created )                                                                            as NumberOfCreatedMaintOrders,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder._Order.IsMarkedForDeletion != 'X' then 1
      else 0 end as eam_num_orders )                                                                                 as NumberOfOrders,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder.MaintenanceProcessingPhase = '3'
                     or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '4'
      and (I_MaintenanceOrder._StatusObjectStatus[1: IsUserStatus='' and StatusIsInactive = '' and StatusCode = 'I0015' ].StatusCode is null ) )
                     or I_MaintenanceOrder.MaintenanceProcessingPhase = '5'
                     or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '6' and I_MaintenanceOrder._Order.TechnicalCompletionDate != '00000000' )
                   then 1
      else 0 end as eam_num_orders_compl )                                                                           as NumberOfCompletedMaintOrders,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = '1' then 1
      else 0 end as eam_num_orders_planned )                                                                         as NumberOfPlannedMaintOrders,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = ' ' then 1
      else 0 end as eam_num_orders_unplanned )                                                                       as NumberOfUnplannedMaintOrders,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder.MaintenanceOrderPlanningCode = '2' then 1
      else 0 end as eam_num_orders_immediate )                                                                       as NumberOfImmediateMaintOrders,


      @DefaultAggregation: #SUM
      cast( case when ( I_MaintenanceOrder.MaintenanceProcessingPhase = '4'
                              and I_MaintenanceOrder._StatusObjectStatus[1: IsUserStatus='' and StatusIsInactive='' and StatusCode = 'I0015' ].StatusCode != '' )
                     or ( I_MaintenanceOrder.MaintenanceProcessingPhase = '6' and I_MaintenanceOrder._Order.TechnicalCompletionDate = '00000000' )
                   then 1
      else 0 end as eam_num_orders_not_to_be_exec )                                                                  as NmbrOfMaintOrdsNotToBeExecuted,

      @DefaultAggregation: #SUM
      cast( case when I_MaintenanceOrder.MaintenanceProcessingPhase = '0'
                    or I_MaintenanceOrder.MaintenanceProcessingPhase = '2'
                    then 1
      else 0 end as eam_num_orders_outstanding )                                                                     as NmbrOfOutstandingMaintOrders,

      @DefaultAggregation: #SUM
      cast( case when ( I_MaintenanceOrder._Order.ConfirmedEndDate != '00000000'
                        and I_MaintenanceOrder._Order.ScheduledBasicEndDate != '00000000'
                        and ( I_MaintenanceOrder._Order.ConfirmedEndDate < I_MaintenanceOrder._Order.ScheduledBasicEndDate
                             or  ( I_MaintenanceOrder._Order.ConfirmedEndDate = I_MaintenanceOrder._Order.ScheduledBasicEndDate
                                 and I_MaintenanceOrder._Order.ConfirmedEndTime <= I_MaintenanceOrder._Order.ScheduledBasicEndTime  ) ) )
                        then 1
      else 0 end as eam_num_orders_compl_on_time )                                                                   as NmbrOfMaintOrdsCompletedOnTime,

      @DefaultAggregation: #SUM
      cast( 0 as eam_num_orders_historical)                                                                          as NmbrOfHistoricalOrders,

      I_MaintenanceOrder.MaintOrdProcessPhaseCode                                                                    as MaintOrdProcessPhaseCode,
      I_MaintenanceOrder.MaintOrdProcessSubPhaseCode                                                                 as MaintOrdProcessSubPhaseCode,
      I_MaintenanceOrder.LatestAcceptableCompletionDate                                                              as LatestAcceptableCompletionDate,
      I_MaintenanceOrder.PrevLtstAccptblCompletionDate                                                               as PrevLtstAccptblCompletionDate,
      I_MaintenanceOrder.MaintOrderProcessingContext                                                                 as MaintOrderProcessingContext,

      //Technical Fields
      I_MaintenanceOrder.WorkCenterInternalID                                                                        as MainWorkCenterInternalID,
      I_MaintenanceOrder._LocationAccountAssignment.WorkCenterInternalID,
      I_MaintenanceOrder.WorkCenterTypeCode,

      //Associations
      I_MaintenanceOrder._MaintenanceOrderType,
      I_MaintenanceOrder._Equipment,
      I_MaintenanceOrder._Assembly,
      I_MaintenanceOrder._MaintenanceItem,
      I_MaintenanceOrder._MaintenanceNotification,
      I_MaintenanceOrder._MaintenancePlannerGroup,
      I_MaintenanceOrder._MaintenancePlanningPlant,
      _MaintenancePlanPlant,
      I_MaintenanceOrder._MaintenancePlan,
      I_MaintenanceOrder._Order._BillOfOperationsType,
      I_MaintenanceOrder._Order._BillOfOperationsGroup,
      I_MaintenanceOrder._MaintenanceActivityType,
      I_MaintenanceOrder._LocationAccountAssignment._ABCIndicator,
      I_MaintenanceOrder._LocationAccountAssignment._CompanyCode,
      I_MaintenanceOrder._LocationAccountAssignment._MaintenancePlant,
      I_MaintenanceOrder._LocationAccountAssignment._Location,
      I_MaintenanceOrder._LocationAccountAssignment._PlantSection,
      I_MaintenanceOrder._LocationAccountAssignment._FunctionalLocation,
      I_MaintenanceOrder._LocationAccountAssignment._WorkCenter._Plant                                               as _WorkCenterPlant,
      I_MaintenanceOrder._LocationAccountAssignment._CostCenter,
      I_MaintenanceOrder._LocationAccountAssignment._ControllingArea,
      I_MaintenanceOrder._LocationAccountAssignment._BusinessArea,
      I_MaintenanceOrder._MainWorkCenter,
      I_MaintenanceOrder._MainWorkCenter._Plant                                                                      as _MainWorkCenterPlant,
      I_MaintenanceOrder._LocationAccountAssignment._WBSElementBasicData,

      _TechnicalObjectType,
      _TechObjIsEquipOrFuncnlLoc,

      _MainWorkCenterBySemanticKey,
      _WorkCenterBySemanticKey,
      _EquipmentData,
      _FunctionalLocationData,
      _OrderDurationUnit,
      _WorkCenter
}

union all

select from I_MaintOrderHistTechObj

association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc   on  $projection.TechObjIsEquipOrFuncnlLoc = _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc
association [0..1] to I_TechnicalObjectType       as _TechnicalObjectType         on  $projection.technicalobjecttype = _TechnicalObjectType.TechnicalObjectType
association [0..1] to I_WorkCenterBySemanticKey   as _MainWorkCenterBySemanticKey on  $projection.MainWorkCenter      = _MainWorkCenterBySemanticKey.WorkCenter
                                                                                  and $projection.MainWorkCenterPlant = _MainWorkCenterBySemanticKey.Plant
association [0..1] to I_WorkCenterBySemanticKey   as _WorkCenterBySemanticKey     on  $projection.workcenter      = _WorkCenterBySemanticKey.WorkCenter
                                                                                  and $projection.WorkCenterPlant = _WorkCenterBySemanticKey.Plant
association [0..*] to I_EquipmentData             as _EquipmentData               on  _EquipmentData.Equipment = $projection.Equipment
association [0..1] to I_FunctionalLocationData    as _FunctionalLocationData      on  _FunctionalLocationData.FunctionalLocation = $projection.functionallocation
association [0..1] to I_UnitOfMeasure             as _OrderDurationUnit           on  _OrderDurationUnit.UnitOfMeasure = $projection.OrderDurationUnit
association [0..1] to I_WorkCenter                as _WorkCenter                  on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                  and _WorkCenter.WorkCenterTypeCode   = 'A'
association [0..1] to I_MaintenancePlanPlant      as _MaintenancePlanPlant        on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant

{
  key I_MaintOrderHistTechObj.MaintenanceOrder,

      cast( 'X' as eam_is_historical_order preserving type )                             as MaintenanceOrderIsHistorical,

      I_MaintOrderHistTechObj.MaintenanceOrderType,

      I_MaintOrderHistTechObj.MaintenanceOrderDesc,

      I_MaintOrderHistTechObj.MaintPriority,
      I_MaintOrderHistTechObj.MaintPriorityType,

      I_MaintOrderHistTechObj._LocationAccountAssignment.FunctionalLocation,
      I_MaintOrderHistTechObj.Equipment,
      I_MaintOrderHistTechObj.Assembly,
      I_MaintOrderHistTechObj._Equipment.Material,
      I_MaintOrderHistTechObj.SerialNumber,

      I_MaintOrderHistTechObj.MaintenanceNotification,

      I_MaintOrderHistTechObj.LeadingOrder,

      I_MaintOrderHistTechObj.MaintenancePlannerGroup,
      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      I_MaintOrderHistTechObj.MaintenancePlanningPlant,

      I_MaintOrderHistTechObj.MaintOrdPersonResponsible,
      I_MaintOrderHistTechObj.MaintenanceRevision,

      I_MaintOrderHistTechObj.MaintenancePlan,
      I_MaintOrderHistTechObj.MaintenanceItem,

      I_MaintOrderHistTechObj.BillOfOperationsType                                       as TaskListType,
      I_MaintOrderHistTechObj.BillOfOperations                                           as TaskListGroup,
      I_MaintOrderHistTechObj.BillOfOperationsVariant                                    as TaskListGroupCounter,

      I_MaintOrderHistTechObj.MaintenanceOrderPlanningCode,

      I_MaintOrderHistTechObj.MaintenanceActivityType,

      I_MaintOrderHistTechObj._LocationAccountAssignment.ABCIndicator,

      I_MaintOrderHistTechObj._LocationAccountAssignment.MaintenancePlant,
      I_MaintOrderHistTechObj._LocationAccountAssignment.AssetLocation,
      I_MaintOrderHistTechObj._LocationAccountAssignment.AssetRoom,

      I_MaintOrderHistTechObj.MaintenanceProcessingPhase,

      I_MaintOrderHistTechObj.OperationSystemCondition,

      I_MaintOrderHistTechObj._LocationAccountAssignment.PlantSection,

      I_MaintOrderHistTechObj._MainWorkCenter.WorkCenter                                 as MainWorkCenter,
      I_MaintOrderHistTechObj._MainWorkCenter.Plant                                      as MainWorkCenterPlant,
      I_MaintOrderHistTechObj._LocationAccountAssignment._WorkCenter.WorkCenter,
      I_MaintOrderHistTechObj._LocationAccountAssignment._WorkCenter.Plant               as WorkCenterPlant,

      // ADPSP is not available HIKO
      ''                                                                                 as ReferenceElement,

      I_MaintOrderHistTechObj._LocationAccountAssignment.CostCenter,
      I_MaintOrderHistTechObj._LocationAccountAssignment.ControllingArea,
      // SuperiorProjectNetwork not available because AUFNT missing in HIKO
      //@ObjectModel.foreignKey.association: '_SuperiorProjectNetwork'
      ''                                                                                 as SuperiorProjectNetwork,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      I_MaintOrderHistTechObj._LocationAccountAssignment.CompanyCode,
      I_MaintOrderHistTechObj._LocationAccountAssignment.BusinessArea,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      I_MaintOrderHistTechObj._LocationAccountAssignment.WBSElementInternalID,

      I_MaintOrderHistTechObj._LocationAccountAssignment.MasterFixedAsset,
      I_MaintOrderHistTechObj._LocationAccountAssignment.FixedAsset,

      I_MaintOrderHistTechObj._LocationAccountAssignment.SettlementOrder,

      I_MaintOrderHistTechObj.MaintenanceOrderInternalID,

      I_MaintOrderHistTechObj.IsMarkedForDeletion,

      // Dates and Times

      I_MaintOrderHistTechObj.CreationDate,
      '000000'                                                                           as CreationTime,

      I_MaintOrderHistTechObj.LastChangeDate,
      '000000'                                                                           as LastChangeTime,

      I_MaintOrderHistTechObj.MaintOrdBasicStartDate                                     as PlannedStartDate,
      '000000'                                                                           as PlannedStartTime,

      I_MaintOrderHistTechObj.MaintOrdBasicEndDate                                       as PlannedEndDate,
      '000000'                                                                           as PlannedEndTime,

      '00000000'                                                                         as ScheduledBasicStartDate,
      '000000'                                                                           as ScheduledBasicStartTime,

      '00000000'                                                                         as ScheduledBasicEndDate,
      '000000'                                                                           as ScheduledBasicEndTime,

      I_MaintOrderHistTechObj.ActualStartDate,
      '000000'                                                                           as ActualStartTime,

      I_MaintOrderHistTechObj.ConfirmedEndDate,
      '000000'                                                                           as ConfirmedEndTime,

      I_MaintOrderHistTechObj.MaintOrderReferenceDate,

      // Dates and Times as timestamps
      cast( dats_tims_to_tstmp( CreationDate, cast('000000' as abap.tims), abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as creation_timestamp )              as CreationDateTime,
      cast( dats_tims_to_tstmp( CreationDate, cast('000000' as abap.tims), abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as rslastchangedat preserving type ) as LastChangeDateTime,
      cast( dats_tims_to_tstmp( cast('00000000' as abap.dats), cast('000000' as abap.tims), abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as sched_basic_end_timestamp )       as ScheduledBasicEndDateTime,
      cast( dats_tims_to_tstmp( ConfirmedEndDate, cast('000000' as abap.tims), abap_system_timezone( $session.client,'NULL' ),
                          $session.client, 'NULL' ) as conf_end_timestamp )              as ConfirmedEndDateTime,

      // Users
      I_MaintOrderHistTechObj.CreatedByUser,
      I_MaintOrderHistTechObj.LastChangedByUser,

      /****************************************************************************************************
      * Technical Object
      ****************************************************************************************************/
      I_MaintOrderHistTechObj.TechnicalObject,

      I_MaintOrderHistTechObj._TechnicalObject.TechnicalObjectType,
      I_MaintOrderHistTechObj.TechObjIsEquipOrFuncnlLoc,

      /****************************************************************************************************
      * Measures
      ****************************************************************************************************/
      // Durations
      // no durations, because ScheduledBasicStartDate is missing
      cast (0 as eam_order_leadtime_in_workdays)                                         as OrderLeadTimeDuration,
      cast (0 as eam_order_runtime_in_cal_days)                                          as OrderRuntimeDuration,
      cast( 'TAG' as qeinhtag )                                                          as OrderDurationUnit,

      cast( 1 as eam_num_orders_created )                                                as NumberOfCreatedMaintOrders,

      cast( case when I_MaintOrderHistTechObj.IsMarkedForDeletion != 'X' then 1
      else 0 end as eam_num_orders )                                                     as NumberOfOrders,

      cast( case when I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '3'
                     or ( I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '4'
      and (I_MaintOrderHistTechObj._StatusObjectStatus[1: IsUserStatus='' and StatusIsActive='X' and StatusCode = 'I0015' ].StatusCode is null ) )
                     or I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '5'
                   then 1
      else 0 end as eam_num_orders_compl )                                               as NumberOfCompletedMaintOrders,

      cast( case when I_MaintOrderHistTechObj.MaintenanceOrderPlanningCode = '1' then 1
      else 0 end as eam_num_orders_planned )                                             as NumberOfPlannedMaintOrders,

      cast( case when I_MaintOrderHistTechObj.MaintenanceOrderPlanningCode = ' ' then 1
      else 0 end as eam_num_orders_unplanned )                                           as NumberOfUnplannedMaintOrders,

      cast( case when I_MaintOrderHistTechObj.MaintenanceOrderPlanningCode = '2' then 1
      else 0 end as eam_num_orders_immediate )                                           as NumberOfImmediateMaintOrders,

      cast( case when ( I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '4'
                              and I_MaintOrderHistTechObj._StatusObjectStatus[1: IsUserStatus='' and StatusIsActive='X' and StatusCode = 'I0015' ].StatusCode != '' )
                   then 1
      else 0 end as eam_num_orders_not_to_be_exec )                                      as NmbrOfMaintOrdsNotToBeExecuted,

      cast( case when I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '0'
                    or I_MaintOrderHistTechObj.MaintenanceProcessingPhase = '2'
                    then 1
      else 0 end as eam_num_orders_outstanding )                                         as NmbrOfOutstandingMaintOrders,

      cast( 0 as eam_num_orders_compl_on_time)                                           as NmbrOfMaintOrdsCompletedOnTime,

      cast( 1 as eam_num_orders_historical)                                              as NmbrOfHistoricalOrders,

      cast( '' as eam_ostat_phase )                                                      as MaintOrdProcessPhaseCode,
      cast( '' as eam_ostat_sphase )                                                     as MaintOrdProcessSubPhaseCode,
      cast( '' as vdm_lacd_date )                                                        as LatestAcceptableCompletionDate,
      cast( '' as lacd_old )                                                             as PrevLtstAccptblCompletionDate,
      cast( '' as maintorderprocessingcontext )                                          as MaintOrderProcessingContext,

      //Technical Fields
      I_MaintOrderHistTechObj.WorkCenterInternalID                                       as MainWorkCenterInternalID,
      I_MaintOrderHistTechObj._LocationAccountAssignment.WorkCenterInternalID,
      I_MaintOrderHistTechObj.WorkCenterTypeCode,

      //Associations
      I_MaintOrderHistTechObj._MaintenanceOrderType,
      I_MaintOrderHistTechObj._Equipment,
      I_MaintOrderHistTechObj._Assembly,
      I_MaintOrderHistTechObj._MaintenanceItem,
      I_MaintOrderHistTechObj._MaintenanceNotification,
      I_MaintOrderHistTechObj._MaintenancePlannerGroup,
      I_MaintOrderHistTechObj._MaintenancePlanningPlant,
      _MaintenancePlanPlant,
      I_MaintOrderHistTechObj._MaintenancePlan,
      I_MaintOrderHistTechObj._BillOfOperationsType,
      I_MaintOrderHistTechObj._BillOfOperationsGroup,
      I_MaintOrderHistTechObj._MaintenanceActivityType,
      I_MaintOrderHistTechObj._LocationAccountAssignment._ABCIndicator,
      I_MaintOrderHistTechObj._LocationAccountAssignment._CompanyCode,
      I_MaintOrderHistTechObj._LocationAccountAssignment._MaintenancePlant,
      I_MaintOrderHistTechObj._LocationAccountAssignment._Location,
      I_MaintOrderHistTechObj._LocationAccountAssignment._PlantSection,
      I_MaintOrderHistTechObj._LocationAccountAssignment._FunctionalLocation,
      I_MaintOrderHistTechObj._LocationAccountAssignment._WorkCenter._Plant              as _WorkCenterPlant,
      I_MaintOrderHistTechObj._LocationAccountAssignment._CostCenter,
      I_MaintOrderHistTechObj._LocationAccountAssignment._ControllingArea,
      I_MaintOrderHistTechObj._LocationAccountAssignment._BusinessArea,
      I_MaintOrderHistTechObj._MainWorkCenter,
      I_MaintOrderHistTechObj._MainWorkCenter._Plant                                     as _MainWorkCenterPlant,
      I_MaintOrderHistTechObj._LocationAccountAssignment._WBSElementBasicData,
      _TechnicalObjectType,
      _TechObjIsEquipOrFuncnlLoc,

      _MainWorkCenterBySemanticKey,
      _WorkCenterBySemanticKey,
      _EquipmentData,
      _FunctionalLocationData,
      _OrderDurationUnit,
      _WorkCenter
}
```
