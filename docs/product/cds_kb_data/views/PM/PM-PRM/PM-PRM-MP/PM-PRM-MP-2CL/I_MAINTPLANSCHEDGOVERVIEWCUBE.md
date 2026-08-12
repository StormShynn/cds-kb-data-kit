---
name: I_MAINTPLANSCHEDGOVERVIEWCUBE
description: "Maintenance Plan Scheduling Overview - Cube"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value
semantic_en: "Maintenance Plan Scheduling Overview - Cube"
semantic_vi: "Maint Plan Scheduling Overview - Cube — CDS view giao diện dựa trên P_MaintPlanSchedulingOverview."
keywords:
  - "maint"
  - "plan"
  - "scheduling"
  - "overview"
  - "cube"
  - "maintenance"
  - "call"
  - "number"
  - "item"
  - "order"
  - "notification"
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - interface-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# I_MAINTPLANSCHEDGOVERVIEWCUBE

**Maintenance Plan Scheduling Overview - Cube**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | ✓ | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` | ✓ | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Basic start date |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `ReleasedByUserName` |  | |  |  | `CHAR(1)` | Scheduling determined by user |
| `ServiceOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `CompletionDate` |  | |  |  | `DATS(8)` | Completion Date for Call Object |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Completion Time for Call Object |
| `RevisionNumber` |  | |  |  | `NUMC(3)` | Revision Number |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenanceCallNextPlannedDate` |  | |  |  | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` |  | |  |  | `DATS(8)` | Call date |
| `MaintPlanLastScheduledDate` |  | |  |  | `DATS(8)` | Date of the call |
| `MaintenancePlanCallStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Call Status |
| `MaintenancePlanSortField` |  | |  |  | `CHAR(20)` | Sort field for maintenance plans |
| `MaintenancePlanCycle` |  | |  |  | `NUMC(2)` | Counter in Control Tables |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanActiveSystemStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Status |
| `MaintenanceItemDescription` |  | |  |  | `CHAR(40)` | Maintenance Item Description |
| `MaintenancePlanType` |  | |  |  | `CHAR(10)` | Maintenance Plan Type |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationObjectType` |  | |  |  | `CHAR(10)` | Object Type of Functional Location |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `EquipmentObjectType` |  | |  |  | `CHAR(10)` | Object Type of Equipment |
| `Class` |  | |  |  | `CHAR(18)` | Class number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `MaintItemHasObjectList` |  | |  |  | `CHAR(1)` | Indicator if an Object List is linked to the Maint Item |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Purchase order item number |
| `ServiceEntrySheet` |  | |  |  | `CHAR(10)` | Entry Sheet Number |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `AssetRoom` |  | |  |  | `CHAR(8)` | Room |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `MaintObjectFreeDefinedAttrib` |  | |  |  | `CHAR(30)` | Sort Field |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `StandingOrderNumber` |  | |  |  | `CHAR(12)` | Standing order number |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `NumberOfMaintenancePlanCalls` |  | |  | `cast( 1 as eam_num_mplan_calls )` | `DEC(9)` | Number of Maintenance Plan Calls |
| `NrOfMrkdForDeltnMaintPlans` |  | |  | `cast ( case when MaintPlanActiveSystemStatus = 'DELFLAG' then 1 else 0 end as eam_num_mplan_markdfordeletion )` | `DEC(9)` | Number of Maintenance Plans Marked for Deletion |
| `NrOfInactiveMaintenancePlans` |  | |  | `cast ( case when MaintPlanActiveSystemStatus = 'INACTIVE' then 1 else 0 end as eam_num_mplan_inactive )` | `DEC(9)` | Number of  inactive Maintenance Plans |
| `NrOfScheduledMaintenancePlans` |  | |  | `cast ( case when MaintPlanActiveSystemStatus = 'SCHEDULED' then 1 else 0 end as eam_num_mplan_scheduled )` | `DEC(9)` | Number of scheduled Maintenance Plans |
| `NrOfCreatedMaintenancePlans` |  | |  | `cast ( case when MaintPlanActiveSystemStatus = 'CREATED' then 1 else 0 end as eam_num_mplan_created )` | `DEC(9)` | Number of created Maintenance Plans |
| `NrOfFixedMaintenancePlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'FIXED' then 1 else 0 end as eam_num_mplan_fixed )` | `DEC(9)` | Number of fixed Maintenance Plan calls |
| `NrOfSkippedMaintPlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'SKIPPED' then 1 else 0 end as eam_num_mplan_skipped )` | `DEC(9)` | Number of skipped Maintenance Plan calls |
| `NrOfMnllyCalledMaintPlnCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'MANUALCL' then 1 else 0 end as eam_num_mplan_cldmanually )` | `DEC(9)` | Number of manually called Maintenance Plan calls |
| `NrOfCalledMaintenancePlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'CALLED' then 1 else 0 end as eam_num_mplan_called )` | `DEC(9)` | Number of called Maintenance Plan calls |
| `NrOfCompletedMaintPlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'COMPLETED' then 1 else 0 end as eam_num_mplan_completed )` | `DEC(9)` | Number of completed Maintenance Plan calls |
| `NrOfOnHoldMaintenancePlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'HOLD' then 1 else 0 end as eam_num_mplan_hold )` | `DEC(9)` | Number of on hold Maintenance Plan calls |
| `NrOfInactiveMaintPlanCalls` |  | |  | `cast ( case when MaintenancePlanCallStatus = 'INACTIVE' then 1 else 0 end as eam_num_mplan_schd_inactive)` | `DEC(9)` | Number of inactive Maintenance Plan calls |
| `_MaintenancePlan` | | ✓ | | | | |
| `_MaintenanceItem` | | ✓ | | | | |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_MaintPlanCallHistory` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_TaskListGroup_2` | | ✓ | | | | |
| `_TaskListGroupCounter_2` | | ✓ | | | | |
| `_MaintenancePlanCatParam` | | ✓ | | | | |
| `_MaintenancePlanType` | | ✓ | | | | |
| `_MaintenancePlanCallStatus` | | ✓ | | | | |
| `_MaintPlanActiveSystemStatus` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMPSCHEDGOVWC'
@EndUserText.label: 'Maint Plan Scheduling Overview - Cube'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey:  'MaintenancePlanCallNumber'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('REQUIRED')
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true


define view I_MaintPlanSchedgOverviewCube
  as select from P_MaintPlanSchedulingOverview
{
      @ObjectModel.foreignKey.association: '_MaintenancePlan'
  key MaintenancePlan,
  key MaintenancePlanCallNumber,
      @ObjectModel.foreignKey.association: '_MaintenanceItem'
  key MaintenanceItem,
    //  @ObjectModel.foreignKey.association: '_MaintenanceOrder'
      MaintenanceOrder,
      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
      MaintenanceNotification,
      MaintCallHorizonIsNotReached,
      PlannedStartDate,
      LatestAcceptableCompletionDate,
      ReleasedByUserName,
      ServiceOrder,
      CompletionDate,
      CompletionTime,
      RevisionNumber,
      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
      MaintenancePlanCategory,
      MaintenanceStrategy,
      MaintenanceCallNextPlannedDate,
      MaintenanceCallDate,
      MaintPlanLastScheduledDate,
      //    @ObjectModel.text.association: '_MaintenancePlanCallStatusText'
      MaintenancePlanCallStatus,
      MaintenancePlanSortField,
      MaintenancePlanCycle,
      MeasuringPoint, 
      //    _MaintenancePlan._StatusObjectActiveStatus.StatusCode,
      //   @ObjectModel.text.association: '_MaintPlanActvSystStatusText'
      MaintPlanActiveSystemStatus,
      MaintenanceItemDescription,
      //    @ObjectModel.text.association: '_MaintenancePlanType._Text'
      MaintenancePlanType,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      FunctionalLocation,
      FunctionalLocationObjectType,
      ConstructionMaterial,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      EquipmentObjectType,
      Class,
      Assembly,
      Material,
      SerialNumber,
      @EndUserText.label:'Maint Item has Object List'
      MaintItemHasObjectList,
      MaintenancePlannerGroup,
      MaintenancePlanningPlant,
      BusinessArea,
      MaintenanceOrderType,
      NotificationType,
      MaintenanceActivityType,
      MainWorkCenterInternalID,
      MainWorkCenter,
      TaskListType,
      //@ObjectModel.foreignKey.association: '_TaskListGroup_2'
      TaskListGroup,
      //@ObjectModel.foreignKey.association: '_TaskListGroupCounter_2'
      TaskListGroupCounter,
      PurchaseOrder,
      PurchaseOrderItem,
      ServiceEntrySheet,
      MaintenancePlant,
      AssetLocation,
      AssetRoom,
      PlantSection,
      WorkCenter,
      ABCIndicator,
      MaintObjectFreeDefinedAttrib,
      CompanyCode,
      MasterFixedAsset,
      FixedAsset,
      ControllingArea,
      CostCenter,
      WBSElementExternalID,
      StandingOrderNumber,
      SalesDocument,
      SalesDocumentItem,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      AuthorizationGroup,

      @Aggregation.default: #SUM
      cast( 1 as eam_num_mplan_calls )                                                                                as NumberOfMaintenancePlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintPlanActiveSystemStatus =  'DELFLAG' then 1 else 0 end as eam_num_mplan_markdfordeletion ) as NrOfMrkdForDeltnMaintPlans,
      @Aggregation.default: #SUM
      cast ( case when MaintPlanActiveSystemStatus =  'INACTIVE' then 1  else 0 end as eam_num_mplan_inactive )       as NrOfInactiveMaintenancePlans,
      @Aggregation.default: #SUM
      cast ( case when MaintPlanActiveSystemStatus =  'SCHEDULED' then 1 else 0 end as eam_num_mplan_scheduled )      as NrOfScheduledMaintenancePlans,
      @Aggregation.default: #SUM
      cast ( case when MaintPlanActiveSystemStatus =  'CREATED' then 1 else 0 end as eam_num_mplan_created )          as NrOfCreatedMaintenancePlans,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'FIXED' then 1  else 0 end as eam_num_mplan_fixed )             as NrOfFixedMaintenancePlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'SKIPPED' then 1 else 0 end as eam_num_mplan_skipped )          as NrOfSkippedMaintPlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'MANUALCL' then 1 else 0 end as eam_num_mplan_cldmanually )     as NrOfMnllyCalledMaintPlnCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'CALLED' then 1 else 0 end as eam_num_mplan_called )            as NrOfCalledMaintenancePlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'COMPLETED' then 1 else 0 end as eam_num_mplan_completed )      as NrOfCompletedMaintPlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'HOLD' then 1 else 0 end as eam_num_mplan_hold )                as NrOfOnHoldMaintenancePlanCalls,
      @Aggregation.default: #SUM
      cast ( case when MaintenancePlanCallStatus   =  'INACTIVE' then 1 else 0 end as eam_num_mplan_schd_inactive)    as NrOfInactiveMaintPlanCalls,
      //      _ServiceOrder,
      _MaintenancePlan,
      _MaintenanceItem,
   //   _MaintenanceOrder,
      _MaintenanceNotification,
      _MaintPlanCallHistory,
      _Equipment,
      _FunctionalLocation,
      _TaskListGroup_2,
      _TaskListGroupCounter_2,
      _MaintenancePlanCatParam,
      _MaintenancePlanType,
      _MaintenancePlanCallStatus,
      _MaintPlanActiveSystemStatus
      


}
```
