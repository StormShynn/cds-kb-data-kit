---
name: C_MAINTENANCEITEMDEX
description: "This CDS view provides the data to answer the following business questions:"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value
semantic_en: "This CDS view provides the data to answer the following business questions:"
semantic_vi: "Maintenance Item Data Extractor — CDS view tiêu dùng dựa trên I_MaintenanceItemTechObj."
keywords:
  - "Maintenance Item Data"
  - "maintenance"
  - "item"
  - "data"
  - "extractor"
  - "maint"
  - "object"
  - "acct"
  - "assgmt"
  - "nmbr"
  - "planner"
  - "group"
  - "planning"
  - "plant"
  - "business"
  - "area"
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTENANCEITEMDEX

**This CDS view provides the data to answer the following business questions:**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceItem` | ✓ | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `MainWorkCenter` |  | |  | `cast( _MainWorkCenter.WorkCenter as gewrk preserving type )` | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` |  | | `_MainWorkCenter` | `Plant` | `CHAR(4)` | Plant |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of creation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceItemDescription` |  | |  |  | `CHAR(40)` | Maintenance Item Description |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanItemPosition` |  | |  |  | `NUMC(4)` | Item in the maintenance plan |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order number |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `NumberOfTaskListExecutions` |  | |  |  | `DEC(3)` | Execution factor for whole task list |
| `MaintenanceItemIsInactive` |  | |  |  | `CHAR(1)` | Indicator that maintenance item is inactive |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceItemCategoryCode` |  | |  | `MaintObjectCategory` | `CHAR(2)` | Maintenance item category |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Purchase order item number |
| `SettlementOrdForServiceProcmt` |  | |  | `SettlementOrder` | `CHAR(12)` | Settlement order |
| `LastChangeDateTime` |  | |  | `MaintPlanLastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ImmediateReleaseIsBlocked` |  | |  |  | `CHAR(1)` | Do Not Release Immediately |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `WorkCenterInternalID` |  | | `_LocationAccountAssignment` | `WorkCenterInternalID` | `NUMC(8)` | Object ID of PP work center |
| `WorkCenter` |  | | `_LocationAccountAssignment._WorkCenter` | `WorkCenter` | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | | `_LocationAccountAssignment._WorkCenter` | `Plant` | `CHAR(4)` | Plant |
| `ABCIndicator` |  | | `_LocationAccountAssignment` | `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `SettlementOrder` |  | | `_LocationAccountAssignment` | `SettlementOrder` | `CHAR(12)` | Settlement order |
| `PlantSection` |  | | `_LocationAccountAssignment` | `PlantSection` | `CHAR(3)` | Plant Section |
| `CompanyCode` |  | | `_LocationAccountAssignment` | `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | | `_LocationAccountAssignment` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | | `_LocationAccountAssignment` | `CostCenter` | `CHAR(10)` | Cost Center |
| `AssetRoom` |  | | `_LocationAccountAssignment` | `AssetRoom` | `CHAR(8)` | Room |
| `WBSElementInternalID` |  | |  | `cast( _LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `AssetLocation` |  | | `_LocationAccountAssignment` | `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` |  | | `_LocationAccountAssignment` | `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `FunctionalLocation` |  | |  | `cast(_LocationAccountAssignment.FunctionalLocation as functionallocation preserving type)` | `CHAR(30)` | Functional Location |
| `_TaskListGroup` |  | |  | `_TaskListGroup_2` |  |  |
| `_TaskListGroupCounter` |  | |  | `_TaskListGroupCounter_2` |  |  |
| `_SettlementOrdForServiceProcmt` |  | |  | `_SettlementOrder` |  |  |
| `_EquipmentData` | | ✓ | | | | |
| `_FunctionalLocationData` | | ✓ | | | | |
| `_WorkCenterPlant` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_MainWorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenterBySemanticKey` | | ✓ | | | | |
| `_MaintenancePlanPlant` | | ✓ | | | | |
| `_MaintenancePlannerGroup` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_MaintenancePlan` | | ✓ | | | | |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_MaintenancePlanCatParam` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceTaskList` | | ✓ | | | | |
| `_TaskListType` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintenanceOrderType` | | ✓ | | | | |
| `_MainWorkCenter` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_PMNotificationType` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_MaintOperationSystCondition` | | ✓ | | | | |
| `_PMReferenceElement` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EquipmentData` | `I_EquipmentData` | [0..*] |
| `_FunctionalLocationData` | `I_FunctionalLocationData` | [0..1] |
| `_WorkCenterPlant` | `I_Plant` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_MainWorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_MaintenanceItemExtension` | `E_MaintenanceItemBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMAINTITEMDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Item Data Extractor'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.privilegedAssociations: ['_LocationAccountAssignment','_Location' ]
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.byElement: {
      name: 'LastChangeDateTime'
    }
  }
}
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true

@ObjectModel: {
   usageType.serviceQuality: #D,
   usageType.sizeCategory: #XL,
   usageType.dataClass: #MIXED
}
@ObjectModel.representativeKey: 'MaintenanceItem'
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ObjectModel.modelingPattern:   #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:     [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceItem'

define view C_MaintenanceItemDEX
  as select from I_MaintenanceItemTechObj
  association [0..*] to I_EquipmentData           as _EquipmentData               on  $projection.Equipment = _EquipmentData.Equipment
  association [0..1] to I_FunctionalLocationData  as _FunctionalLocationData      on  $projection.FunctionalLocation = _FunctionalLocationData.FunctionalLocation
  association [0..1] to I_Plant                   as _WorkCenterPlant             on  $projection.WorkCenterPlant = _WorkCenterPlant.Plant
  association [0..1] to I_WorkCenter              as _WorkCenter                  on  $projection.workcenterinternalid = _WorkCenter.WorkCenterInternalID
                                                                                  and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_WorkCenterBySemanticKey as _MainWorkCenterBySemanticKey on  $projection.MainWorkCenter      = _MainWorkCenterBySemanticKey.WorkCenter
                                                                                  and $projection.MainWorkCenterPlant = _MainWorkCenterBySemanticKey.Plant //Item tab in SAPGUI
  association [0..1] to I_WorkCenterBySemanticKey as _WorkCenterBySemanticKey     on  $projection.workcenter      = _WorkCenterBySemanticKey.WorkCenter
                                                                                  and $projection.WorkCenterPlant = _WorkCenterBySemanticKey.Plant //Item location tab in SAPGUI
  association [0..1] to I_MaintenancePlanPlant    as _MaintenancePlanPlant        on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant
  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceItemBasic    as _MaintenanceItemExtension    on  _MaintenanceItemExtension.MaintenanceItem = $projection.MaintenanceItem
{
      @ObjectModel.text.element: ['MaintenanceItemDescription']
  key MaintenanceItem,
      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      MaintObjectLocAcctAssgmtNmbr,
      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      MaintenancePlannerGroup,
      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      MaintenancePlanningPlant, //Item tab in SAPGUI
      BusinessArea,
      @ObjectModel.foreignKey.association: '_MainWorkCenter'
      MainWorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_MainWorkCenterBySemanticKey'
      cast( _MainWorkCenter.WorkCenter as gewrk preserving type )                                 as MainWorkCenter, //Item tab in SAPGUI
      @ObjectModel.foreignKey.association: '_Plant'
      _MainWorkCenter.Plant                                                                       as MainWorkCenterPlant, //Item tab in SAPGUI
      @ObjectModel.foreignKey.association: '_TaskListType'
      TaskListType,
      @ObjectModel.foreignKey.association: '_TaskListGroup'
      TaskListGroup,
      @ObjectModel.foreignKey.association: '_TaskListGroupCounter'
      TaskListGroupCounter,
      @ObjectModel.foreignKey.association: '_EquipmentData'
      Equipment,
      Assembly,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.text: true
      MaintenanceItemDescription,
      @ObjectModel.foreignKey.association: '_MaintenancePlan'
      MaintenancePlan,
      MaintenancePlanItemPosition,
      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
      MaintenanceStrategy,
      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
      MaintenancePlanCategory,
      NotificationType,
      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
      MaintenanceNotification,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      @ObjectModel.foreignKey.association: '_MaintenanceOrder'
      MaintenanceOrder,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintenanceOrderType'
      MaintenanceOrderType,
      //cast (SerialNumber as eam_serialnumber preserving type ) as SerialNumber,
      SerialNumber,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_MaintOperationSystCondition'
      OperationSystemCondition,
      NumberOfTaskListExecutions,
      MaintenanceItemIsInactive,
      ObjectInternalID,
      MaintObjectCategory                                                                         as MaintenanceItemCategoryCode,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_PurchaseOrder'
      PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
      PurchaseOrderItem,
      @ObjectModel.foreignKey.association: '_SettlementOrdForServiceProcmt'
      SettlementOrder                                                                             as SettlementOrdForServiceProcmt,
      @Semantics.systemDateTime.lastChangedAt: true
      MaintPlanLastChangeDateTime                                                                 as LastChangeDateTime,
      //LastChangeDateTime,
      ImmediateReleaseIsBlocked,
      CycleSetSequence,
      @ObjectModel.foreignKey.association: '_PMReferenceElement'
      ReferenceElement,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      _LocationAccountAssignment.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      _LocationAccountAssignment._WorkCenter.WorkCenter, //Item location tab in SAPGUI
      @ObjectModel.foreignKey.association: '_WorkCenterPlant'
      _LocationAccountAssignment._WorkCenter.Plant                                                as WorkCenterPlant,
      @ObjectModel.foreignKey.association: '_ABCIndicator'
      _LocationAccountAssignment.ABCIndicator                                                     as ABCIndicator,
      @ObjectModel.foreignKey.association: '_SettlementOrder'
      _LocationAccountAssignment.SettlementOrder                                                  as SettlementOrder,
      @ObjectModel.foreignKey.association: '_PlantSection'
      _LocationAccountAssignment.PlantSection                                                     as PlantSection,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _LocationAccountAssignment.CompanyCode                                                      as CompanyCode,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _LocationAccountAssignment.ControllingArea                                                  as ControllingArea,
      @ObjectModel.foreignKey.association: '_CostCenter'
      _LocationAccountAssignment.CostCenter                                                       as CostCenter,
      _LocationAccountAssignment.AssetRoom                                                        as AssetRoom,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( _LocationAccountAssignment.WBSElementInternalID  as ps_s4_pspnr preserving type  )    as WBSElementInternalID,
      //cast( _LocationAccountAssignment._WBSElementBasicData.WBSElement as ps_posid preserving type ) as WBSElement,
      @ObjectModel.foreignKey.association: '_Location'
      _LocationAccountAssignment.AssetLocation                                                    as AssetLocation,
      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      _LocationAccountAssignment.MaintenancePlant                                                 as MaintenancePlant, //Item location tab in SAPGUI
      @ObjectModel.foreignKey.association: '_FunctionalLocationData'
      cast(_LocationAccountAssignment.FunctionalLocation as   functionallocation preserving type) as FunctionalLocation,

      // Make associations public
      // I_MaintenanceItemTechObj
      _MaintenancePlannerGroup,
      _MaintenancePlanningPlant,
      _MaintenancePlan, //Item location tab in SAPGUI
      _MaintenanceStrategy,
      _MaintenancePlanCatParam,
      _PMNotificationPriority,
      _Equipment,
      _EquipmentData,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _FunctionalLocationData,
      _MaintenanceNotification,
      _MaintenanceOrder,
      _MaintenanceTaskList,
      _TaskListType,
      _TaskListGroup_2                                                                            as _TaskListGroup,
      _TaskListGroupCounter_2                                                                     as _TaskListGroupCounter,
      _MaintenanceActivityType,
      _MaintenanceOrderType,
      _MainWorkCenter, //Item tab in SAPGUI
      _MainWorkCenter._Plant,
      _WorkCenterPlant,
      _MainWorkCenterBySemanticKey,
      _WorkCenterBySemanticKey,
      _WorkCenter,
      _WorkCenterType,
      _Assembly,
      _PMNotificationType,
      _Material,
      _SalesDocument,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _SettlementOrder                                                                            as _SettlementOrdForServiceProcmt,
      _MaintOperationSystCondition,
      _PMReferenceElement,
      _MaintenancePlanPlant,

      //  I_LocationAccountAssignment
      _LocationAccountAssignment,
      _LocationAccountAssignment._ABCIndicator,
      _LocationAccountAssignment._SettlementOrder,
      _LocationAccountAssignment._PlantSection,
      _LocationAccountAssignment._CompanyCode,
      _LocationAccountAssignment._ControllingArea,
      _LocationAccountAssignment._CostCenter,
      _LocationAccountAssignment._WBSElementBasicData,
      _LocationAccountAssignment._Location,
      _LocationAccountAssignment._MaintenancePlant,
      _LocationAccountAssignment._FunctionalLocation,

      _PMNotificationPriorityType
}
```
