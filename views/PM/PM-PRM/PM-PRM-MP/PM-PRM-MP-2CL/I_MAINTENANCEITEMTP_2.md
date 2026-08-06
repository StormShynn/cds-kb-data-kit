---
name: I_MAINTENANCEITEMTP_2
description: Maintenanceitemtp 2
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
  - transactional-processing
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEITEMTP_2

**Maintenanceitemtp 2**

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
| `MaintenanceItemDescription` | `MaintenanceItemDescription` |
| `MaintenanceStrategy` | `MaintenanceStrategy` |
| `MaintenancePlanCategory` | `MaintenancePlanCategory` |
| `MaintenancePlanCallObject` | `MaintenancePlanCallObject` |
| `MaintItemCausesAreDisplayed` | `MaintItemCausesAreDisplayed` |
| `MaintItemReasonsAreDisplayed` | `MaintItemReasonsAreDisplayed` |
| `MaintenancePlan` | `MaintenancePlan` |
| `MaintenancePlanItemPosition` | `MaintenancePlanItemPosition` |
| `MaintenancePlanType` | `MaintenancePlanType` |
| `FunctionalLocation` | `FunctionalLocation` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `Equipment` | `Equipment` |
| `Assembly` | `Assembly` |
| `TechObjIsEquipOrFuncnlLoc` | `TechObjIsEquipOrFuncnlLoc` |
| `TechnicalObject` | `TechnicalObject` |
| `TechnicalObjectLabel` | `TechnicalObjectLabel` |
| `TechnicalObjectDescription` | `TechnicalObjectDescription` |
| `MaintItemHasObjectList` | `MaintItemHasObjectList` |
| `MaintenanceItemObjectList` | `MaintenanceItemObjectList` |
| `TaskListType` | `TaskListType` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `OperationSystemCondition` | `OperationSystemCondition` |
| `NumberOfTaskListExecutions` | `NumberOfTaskListExecutions` |
| `TaskListKeyDate` | `TaskListKeyDate` |
| `TaskList` | `TaskList` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `MaintenanceOrderType` | `MaintenanceOrderType` |
| `MaintenanceActivityType` | `MaintenanceActivityType` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `MainWorkCenterInternalID` | `MainWorkCenterInternalID` |
| `MainWorkCenter` | `MainWorkCenter` |
| `MainWorkCenterPlant` | `MainWorkCenterPlant` |
| `BusinessArea` | `BusinessArea` |
| `ObjectInternalID` | `ObjectInternalID` |
| `MaintPriority` | `MaintPriority` |
| `AdditionalDeviceData` | `AdditionalDeviceData` |
| `MaintPriorityType` | `MaintPriorityType` |
| `NotificationType` | `NotificationType` |
| `ImmediateReleaseIsBlocked` | `ImmediateReleaseIsBlocked` |
| `MaintenanceItemHasLongText` | `MaintenanceItemHasLongText` |
| `SettlementRuleIsMaintained` | `SettlementRuleIsMaintained` |
| `MaintNotifTskIsAutomlyDtmnd` | `MaintNotifTskIsAutomlyDtmnd` |
| `Material` | `Material` |
| `SerialNumber` | `SerialNumber` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceContract` | `ServiceContract` |
| `ServiceContractItem` | `ServiceContractItem` |
| `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `Product` | `Product` |
| `MaintObjectLocAcctAssgmtNmbr` | `MaintObjectLocAcctAssgmtNmbr` |
| `MaintenancePlant` | `MaintenancePlant` |
| `AssetLocation` | `AssetLocation` |
| `AssetRoom` | `AssetRoom` |
| `PlantSection` | `PlantSection` |
| `PlantSectionDesc` | `PlantSectionDesc` |
| `WorkCenter` | `WorkCenter` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `LocAcctAssgmtWorkCtrTypeCode` | `LocAcctAssgmtWorkCtrTypeCode` |
| `ABCIndicator` | `ABCIndicator` |
| `MaintObjectFreeDefinedAttrib` | `MaintObjectFreeDefinedAttrib` |
| `CompanyCode` | `CompanyCode` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `FixedAsset` | `FixedAsset` |
| `LocAcctAssgmtBusinessArea` | `LocAcctAssgmtBusinessArea` |
| `CostCenter` | `CostCenter` |
| `ControllingArea` | `ControllingArea` |
| `WBSElement` | `WBSElement` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `StandingOrderNumber` | `StandingOrderNumber` |
| `SettlementOrder` | `SettlementOrder` |
| `CycleSetSequence` | `CycleSetSequence` |
| `OrderCategoryScreenTypeCode` | `OrderCategoryScreenTypeCode` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_FunctionalLocation` | *Association* |
| `_Equipment` | *Association* |
| `_ServiceContract` | *Association* |
| `_MaintItemObjectListItem` | *Association* |
| `_MaintenanceItemReason` | *Association* |
| `_MaintenanceItemCause` | *Association* |
| `_LongText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenancePlan']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'MaintenanceItem'

define root view entity I_MaintenanceItemTP_2
provider contract transactional_interface
  as projection on R_MaintenanceItemTP as MaintenanceItem {
  key MaintenanceItem,
      MaintenanceItemDescription,
      MaintenanceStrategy,
      MaintenancePlanCategory,
      MaintenancePlanCallObject,
      MaintItemCausesAreDisplayed,
      MaintItemReasonsAreDisplayed,
      -- Maintenance Plan
      MaintenancePlan,
      MaintenancePlanItemPosition,
      MaintenancePlanType,
      -- Reference Object
      FunctionalLocation,
      FunctionalLocationLabelName,
      Equipment,
      Assembly,
      -- Tech Object
      TechObjIsEquipOrFuncnlLoc,
      TechnicalObject,
      TechnicalObjectLabel,
      TechnicalObjectDescription,
      -- Maintenance Item Object List
      @Semantics.booleanIndicator: true
      MaintItemHasObjectList,
      MaintenanceItemObjectList,
      -- Task List
      TaskListType,
      TaskListGroup,
      TaskListGroupCounter,
      OperationSystemCondition,
      NumberOfTaskListExecutions,
      TaskListKeyDate,
      TaskList,
      -- Planning Data
      MaintenancePlannerGroup,
      MaintenancePlanningPlant,
      MaintenanceOrderType,
      MaintenanceActivityType,
      WorkCenterTypeCode,
      MainWorkCenterInternalID,
      MainWorkCenter,
      MainWorkCenterPlant,
      BusinessArea,
      ObjectInternalID,
      MaintPriority,

      AdditionalDeviceData,
      MaintPriorityType,
      NotificationType,
      ImmediateReleaseIsBlocked,

      @Semantics.booleanIndicator: true
      MaintenanceItemHasLongText,
      @Semantics.booleanIndicator: true
      SettlementRuleIsMaintained,
      @Semantics.booleanIndicator: true
      MaintNotifTskIsAutomlyDtmnd,

      Material,
      SerialNumber,


      -- Service Document
      ServiceDocumentType,
      ServiceContract,
      ServiceContractItem,
      ServiceOrderTemplate,
      ServiceDocumentPriority,
      Product,

      -- Location
      MaintObjectLocAcctAssgmtNmbr,
      MaintenancePlant,
      AssetLocation,
      AssetRoom,
      PlantSection,
      @Semantics.text: true
      PlantSectionDesc,
      WorkCenter,
      WorkCenterInternalID,
      LocAcctAssgmtWorkCtrTypeCode,
      ABCIndicator,
      MaintObjectFreeDefinedAttrib,

      -- Account Assignment
      CompanyCode,
      MasterFixedAsset,
      FixedAsset,
      LocAcctAssgmtBusinessArea,
      CostCenter,
      ControllingArea,
      WBSElement,
      WBSElementInternalID,
      StandingOrderNumber,
      SettlementOrder,

      -- Others
      CycleSetSequence,
      OrderCategoryScreenTypeCode,

      -- Admin Data
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      /* Association */
      _FunctionalLocation,
      _Equipment,
      @Consumption.hidden: true
      _ServiceContract,
      
      /* Composition */
      _MaintItemObjectListItem  : redirected to composition child I_MaintItemObjectListItemTP,
      _MaintenanceItemReason    : redirected to composition child I_MaintenanceItemReasonTP,
      _MaintenanceItemCause     : redirected to composition child I_MaintenanceItemCauseTP,
      @Semantics.valueRange.maximum: '1'
      _LongText                 : redirected to composition child I_MaintenanceItemTextTP

}
```
