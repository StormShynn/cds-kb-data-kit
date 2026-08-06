---
name: I_MAINTENANCEITEM
description: Maintenanceitem
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
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEITEM

**Maintenanceitem**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceItem` | `MaintenanceItem` |
| `MaintObjectLocAcctAssgmtNmbr` | `MaintObjectLocAcctAssgmtNmbr` |
| `MaintObjLocAcctAssgmtIsIndiv` | `MaintObjLocAcctAssgmtIsIndiv` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `BusinessArea` | `BusinessArea` |
| `SettlementRuleIsMaintained` | `SettlementRuleIsMaintained` |
| `MaintenanceItemHasLongText` | `MaintenanceItemHasLongText` |
| `MainWorkCenterInternalID` | `MainWorkCenterInternalID` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `TaskListType` | `TaskListType` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `Equipment` | `Equipment` |
| `FunctionalLocation` | `_LocationAccountAssignment.FunctionalLocation` |
| `Assembly` | `Assembly` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `MaintenanceItemDescription` | `MaintenanceItemDescription` |
| `MaintenancePlan` | `MaintenancePlan` |
| `MaintenancePlanItemPosition` | `MaintenancePlanItemPosition` |
| `MaintenanceStrategy` | `MaintenanceStrategy` |
| `MaintenancePlanCategory` | `MaintenancePlanCategory` |
| `MaintenancePlanCallObject` | `MaintenancePlanCallObject` |
| `MaintItemCausesAreDisplayed` | `MaintItemCausesAreDisplayed` |
| `MaintItemReasonsAreDisplayed` | `MaintItemReasonsAreDisplayed` |
| `AdditionalDeviceData` | `AdditionalDeviceData` |
| `NotificationType` | `NotificationType` |
| `MaintenanceNotification` | `MaintenanceNotification` |
| `MaintPriorityType` | `case _MaintenancePlanCatParam.MaintenancePlanCallObject when '' then _MaintOrderTypeControlParam.MaintPriorityType when '2' then _PMNotificationType.MaintPriorityType end` |
| `MaintPriority` | `MaintPriority` |
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceActivityType` | `MaintenanceActivityType` |
| `MaintenanceOrderType` | `MaintenanceOrderType` |
| `SerialNumber` | `SerialNumber` |
| `Material` | `Material` |
| `MaintenanceItemObjectList` | `MaintenanceItemObjectList` |
| `OperationSystemCondition` | `OperationSystemCondition` |
| `NumberOfTaskListExecutions` | `NumberOfTaskListExecutions` |
| `MaintenanceItemIsInactive` | `MaintenanceItemIsInactive` |
| `ObjectInternalID` | `ObjectInternalID` |
| `MaintObjectCategory` | `MaintObjectCategory` |
| `SalesDocument` | `SalesDocument` |
| `PurchaseOrder` | `PurchaseOrder` |
| `PurchaseOrderItem` | `PurchaseOrderItem` |
| `SettlementOrder` | `SettlementOrder` |
| `MaintNotifTskIsAutomlyDtmnd` | `MaintNotifTskIsAutomlyDtmnd` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `MaintPlanLastChangeDateTime` | `MaintPlanLastChangeDateTime` |
| `ImmediateReleaseIsBlocked` | `ImmediateReleaseIsBlocked` |
| `CycleSetSequence` | `CycleSetSequence` |
| `ReferenceElement` | `ReferenceElement` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceContract` | `ServiceContract` |
| `ServiceContractItem` | `ServiceContractItem` |
| `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| `Product` | `Product` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `MaintCmplncCalculationMethod` | `MaintCmplncCalculationMethod` |
| `MaintCmplncStrtDteOffsetInDays` | `MaintCmplncStrtDteOffsetInDays` |
| `MaintCmplncEndDateOffsetInDays` | `MaintCmplncEndDateOffsetInDays` |
| `_PMNotificationPriority` | *Association* |
| `_PMNotificationPriorityType` | *Association* |
| `_LocationAccountAssignment` | *Association* |
| `_MaintenancePlannerGroup` | *Association* |
| `_MaintenancePlanningPlant` | *Association* |
| `_MaintenancePlan` | *Association* |
| `_MaintenancePlanCatParam` | *Association* |
| `_MaintenanceStrategy` | *Association* |
| `_Equipment` | *Association* |
| `_MaintenanceNotification` | *Association* |
| `_MaintenanceOrder` | *Association* |
| `_MaintenanceTaskList` | *Association* |
| `_TaskListType` | *Association* |
| `_TaskListGroup` | *Association* |
| `_TaskListGroup_2` | *Association* |
| `_TaskListGroupCounter` | *Association* |
| `_TaskListGroupCounter_2` | *Association* |
| `_MaintenanceActivityType` | *Association* |
| `_MaintenanceOrderType` | *Association* |
| `_MainWorkCenter` | *Association* |
| `_WorkCenterType` | *Association* |
| `_Assembly` | *Association* |
| `_PMNotificationType` | *Association* |
| `_Material` | *Association* |
| `_SalesDocument` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_SettlementOrder` | *Association* |
| `_MaintOperationSystCondition` | *Association* |
| `_MaintenanceItemObject` | *Association* |
| `_PMReferenceElement` | *Association* |
| `_MaintOrderTypeControlParam` | *Association* |
| `_BusinessArea` | *Association* |
| `_ImmediateReleaseIsBlocked` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_Product` | *Association* |
| `_ServiceContract` | *Association* |
| `_ServiceContractItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_MaintenanceItemExtension` | `E_MaintenanceItemBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMAINTITEM'
@VDM.viewType: #COMPOSITE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:['_LocationAccountAssignment']
@EndUserText.label: 'Maintenance Item'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
   usageType.serviceQuality: #C,
   usageType.sizeCategory: #L,
   usageType.dataClass: #MASTER
}

@ObjectModel.representativeKey: [ 'MaintenanceItem' ]
@ObjectModel.semanticKey:  [ 'MaintenanceItem']
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:             #CDS_MODELING_DATA_SOURCE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE ]

define view I_MaintenanceItem
  as select from I_MaintenanceItemBasic
  association [0..1] to I_PMNotificationPriority     as _PMNotificationPriority     on  $projection.MaintPriorityType = _PMNotificationPriority.MaintPriorityType
                                                                                    and $projection.MaintPriority     = _PMNotificationPriority.MaintPriority
  association [0..1] to I_PMNotificationPriorityType as _PMNotificationPriorityType on  $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType

  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceItemBasic       as _MaintenanceItemExtension   on  $projection.MaintenanceItem = _MaintenanceItemExtension.MaintenanceItem

{
  key MaintenanceItem,
      MaintObjectLocAcctAssgmtNmbr,
      MaintObjLocAcctAssgmtIsIndiv,
      MaintenancePlannerGroup,
      MaintenancePlanningPlant,
      BusinessArea,
      @Semantics.booleanIndicator
      SettlementRuleIsMaintained,
      MaintenanceItemHasLongText,
      MainWorkCenterInternalID,
      WorkCenterTypeCode,
      TaskListType,
      TaskListGroup,
      TaskListGroupCounter,
      Equipment,
      _LocationAccountAssignment.FunctionalLocation,
      Assembly,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      MaintenanceItemDescription,
      MaintenancePlan,
      MaintenancePlanItemPosition,
      MaintenanceStrategy,
      MaintenancePlanCategory,
      MaintenancePlanCallObject,
      MaintItemCausesAreDisplayed,
      MaintItemReasonsAreDisplayed,
      AdditionalDeviceData,
      NotificationType,
      MaintenanceNotification,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      case _MaintenancePlanCatParam.MaintenancePlanCallObject
        when '' then
          _MaintOrderTypeControlParam.MaintPriorityType
        when '2' then
          _PMNotificationType.MaintPriorityType
      end as MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      //--[ GENERATED:012:GFBfhxvv7kY4nH9{xKJeWG
      MaintenanceOrder,
      MaintenanceActivityType,
      MaintenanceOrderType,
      SerialNumber,
      Material,
      MaintenanceItemObjectList,
      OperationSystemCondition,
      NumberOfTaskListExecutions,
      MaintenanceItemIsInactive,
      ObjectInternalID,
      MaintObjectCategory,
      SalesDocument,
      PurchaseOrder,
      PurchaseOrderItem,
      SettlementOrder,
      @Semantics.booleanIndicator
      MaintNotifTskIsAutomlyDtmnd,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaintPlanLastChangeDateTime'
      LastChangeDateTime,
      MaintPlanLastChangeDateTime,
      ImmediateReleaseIsBlocked,
      CycleSetSequence,
      ReferenceElement,
      ServiceDocumentType,
      ServiceContract,
      ServiceContractItem,
      ServiceOrderTemplate,
      Product,
      ServiceDocumentPriority,
      MaintCmplncCalculationMethod,
      MaintCmplncStrtDteOffsetInDays,
      MaintCmplncEndDateOffsetInDays,

      // Make association public
      _LocationAccountAssignment,
      _MaintenancePlannerGroup,
      _MaintenancePlanningPlant,
      _MaintenancePlan,
      _MaintenancePlanCatParam,
      _MaintenanceStrategy,
      _PMNotificationPriority,
      _PMNotificationPriorityType,
      _Equipment,
      _LocationAccountAssignment._FunctionalLocation,
      _MaintenanceNotification,
      _MaintenanceOrder,
      _MaintenanceTaskList,
      _TaskListType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_TaskListGroup_2'
      _TaskListGroup,
      _TaskListGroup_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_TaskListGroupCounter_2'
      _TaskListGroupCounter,
      _TaskListGroupCounter_2,
      _MaintenanceActivityType,
      _MaintenanceOrderType,
      _MainWorkCenter,
      _WorkCenterType,
      _Assembly,
      _PMNotificationType,
      _Material,
      _SalesDocument,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _SettlementOrder,
      _MaintOperationSystCondition,
      _MaintenanceItemObject,
      _PMReferenceElement,
      _MaintOrderTypeControlParam,
      _BusinessArea,
      _ImmediateReleaseIsBlocked,

      _ServiceDocumentType,
      _Product,
      _ServiceContract,
      _ServiceContractItem

}
```
