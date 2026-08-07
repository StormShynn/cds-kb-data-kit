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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceItem` | ✓ | |  |  |
| `MaintenanceItemDescription` |  | |  |  |
| `MaintenanceStrategy` |  | |  |  |
| `MaintenancePlanCategory` |  | |  |  |
| `MaintenancePlanCallObject` |  | |  |  |
| `MaintItemCausesAreDisplayed` |  | |  |  |
| `MaintItemReasonsAreDisplayed` |  | |  |  |
| `MaintenancePlan` |  | |  |  |
| `MaintenancePlanItemPosition` |  | |  |  |
| `MaintenancePlanType` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `FunctionalLocationLabelName` |  | |  |  |
| `Equipment` |  | |  |  |
| `Assembly` |  | |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  |
| `TechnicalObject` |  | |  |  |
| `TechnicalObjectLabel` |  | |  |  |
| `TechnicalObjectDescription` |  | |  |  |
| `MaintItemHasObjectList` |  | |  |  |
| `MaintenanceItemObjectList` |  | |  |  |
| `TaskListType` |  | |  |  |
| `TaskListGroup` |  | |  |  |
| `TaskListGroupCounter` |  | |  |  |
| `OperationSystemCondition` |  | |  |  |
| `NumberOfTaskListExecutions` |  | |  |  |
| `TaskListKeyDate` |  | |  |  |
| `TaskList` |  | |  |  |
| `MaintenancePlannerGroup` |  | |  |  |
| `MaintenancePlanningPlant` |  | |  |  |
| `MaintenanceOrderType` |  | |  |  |
| `MaintenanceActivityType` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
| `MainWorkCenterInternalID` |  | |  |  |
| `MainWorkCenter` |  | |  |  |
| `MainWorkCenterPlant` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ObjectInternalID` |  | |  |  |
| `MaintPriority` |  | |  |  |
| `AdditionalDeviceData` |  | |  |  |
| `MaintPriorityType` |  | |  |  |
| `NotificationType` |  | |  |  |
| `ImmediateReleaseIsBlocked` |  | |  |  |
| `MaintenanceItemHasLongText` |  | |  |  |
| `SettlementRuleIsMaintained` |  | |  |  |
| `MaintNotifTskIsAutomlyDtmnd` |  | |  |  |
| `Material` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `ServiceDocumentType` |  | |  |  |
| `ServiceContract` |  | |  |  |
| `ServiceContractItem` |  | |  |  |
| `ServiceOrderTemplate` |  | |  |  |
| `ServiceDocumentPriority` |  | |  |  |
| `Product` |  | |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |
| `MaintenancePlant` |  | |  |  |
| `AssetLocation` |  | |  |  |
| `AssetRoom` |  | |  |  |
| `PlantSection` |  | |  |  |
| `PlantSectionDesc` |  | |  |  |
| `WorkCenter` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `LocAcctAssgmtWorkCtrTypeCode` |  | |  |  |
| `ABCIndicator` |  | |  |  |
| `MaintObjectFreeDefinedAttrib` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `MasterFixedAsset` |  | |  |  |
| `FixedAsset` |  | |  |  |
| `LocAcctAssgmtBusinessArea` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `WBSElement` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `StandingOrderNumber` |  | |  |  |
| `SettlementOrder` |  | |  |  |
| `CycleSetSequence` |  | |  |  |
| `OrderCategoryScreenTypeCode` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_FunctionalLocation` | | ✓ | | |
| `_Equipment` | | ✓ | | |
| `_ServiceContract` | | ✓ | | |
| `_MaintItemObjectListItem` | | ✓ | | |
| `_MaintenanceItemReason` | | ✓ | | |
| `_MaintenanceItemCause` | | ✓ | | |
| `_LongText` | | ✓ | | |

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
