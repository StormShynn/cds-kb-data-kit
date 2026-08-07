---
name: I_MAINTENANCEORDERTP
description: Maintenance OrderTP
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERTP

**Maintenance OrderTP**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |
| `MaintOrderRoutingNumber` |  | |  |  |
| `MaintenanceOrderType` |  | |  |  |
| `MaintenanceOrderDesc` |  | |  |  |
| `MaintOrdBasicStartDateTime` |  | |  |  |
| `MaintOrdBasicEndDateTime` |  | |  |  |
| `MaintOrdBasicStartDate` |  | |  |  |
| `MaintOrdBasicStartTime` |  | |  |  |
| `MaintOrdBasicEndDate` |  | |  |  |
| `MaintOrdBasicEndTime` |  | |  |  |
| `MaintOrdSchedldBscStrtDateTime` |  | |  |  |
| `MaintOrdSchedldBscEndDateTime` |  | |  |  |
| `ScheduledBasicStartDate` |  | |  |  |
| `ScheduledBasicStartTime` |  | |  |  |
| `ScheduledBasicEndDate` |  | |  |  |
| `ScheduledBasicEndTime` |  | |  |  |
| `MaintOrderReferenceDateTime` |  | |  |  |
| `MaintOrderReferenceDate` |  | |  |  |
| `MaintOrderReferenceTime` |  | |  |  |
| `MainWorkCompletedDateTime` |  | |  |  |
| `MaintenanceNotification` |  | |  |  |
| `OrdIsNotSchedldAutomatically` |  | |  |  |
| `MainWorkCenterInternalID` |  | |  |  |
| `MainWorkCenterTypeCode` |  | |  |  |
| `MainWorkCenter` |  | |  |  |
| `MainWorkCenterPlant` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
| `WorkCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `LocAcctAssgmtWBSElmntIntID` |  | |  |  |
| `ControllingSettlementProfile` |  | |  |  |
| `LocAcctAssgmtBusinessArea` |  | |  |  |
| `LocAcctAssgmtControllingArea` |  | |  |  |
| `LocAcctAssgmtCompanyCode` |  | |  |  |
| `MaintenancePlanningPlant` |  | |  |  |
| `MaintenancePlant` |  | |  |  |
| `Assembly` |  | |  |  |
| `MaintOrdProcessPhaseCode` |  | |  |  |
| `MaintOrdProcessSubPhaseCode` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ReferenceElement` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `AdditionalDeviceData` |  | |  |  |
| `Equipment` |  | |  |  |
| `MaintenanceOrderPlanningCode` |  | |  |  |
| `MaintenancePlannerGroup` |  | |  |  |
| `MaintenanceActivityType` |  | |  |  |
| `MaintPriority` |  | |  |  |
| `MaintPriorityType` |  | |  |  |
| `OrderProcessingGroup` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `ResponsibleCostCenter` |  | |  |  |
| `CostCenter` |  | |  |  |
| `CostingSheet` |  | |  |  |
| `Currency` |  | |  |  |
| `MaintenanceRevision` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `Product` |  | |  |  |
| `SuperiorProjectNetwork` |  | |  |  |
| `OperationSystemCondition` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `ProjectInternalID` |  | |  |  |
| `ControllingObjectClass` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `AssetLocation` |  | |  |  |
| `AssetRoom` |  | |  |  |
| `PlantSection` |  | |  |  |
| `ABCIndicator` |  | |  |  |
| `MaintObjectFreeDefinedAttrib` |  | |  |  |
| `MaintenanceOrderInternalID` |  | |  |  |
| `MaintenanceItemObjectList` |  | |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |
| `BasicSchedulingType` |  | |  |  |
| `LatestAcceptableCompletionDate` |  | |  |  |
| `MaintOrdPersonResponsible` |  | |  |  |
| `LastChangeByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `MaintOrderCreationDateTime` |  | |  |  |
| `OrderHasLongText` |  | |  |  |
| `MaintOrderProcessingContext` |  | |  |  |
| `MaintenanceOrderOverheadCode` |  | |  |  |
| `PlannedCostsCostingVariant` |  | |  |  |
| `ActualCostsCostingVariant` |  | |  |  |
| `MaintenancePlan` |  | |  |  |
| `MaintenanceCall` |  | |  |  |
| `MaintenanceItem` |  | |  |  |
| `LeadingOrder` |  | |  |  |
| `TaskListType` |  | |  |  |
| `TaskListGroup` |  | |  |  |
| `TaskListGroupCounter` |  | |  |  |
| `_Equipment` | | ✓ | | |
| `_LocationAccountAssignment` | | ✓ | | |
| `_MaintenanceOrderOperation` | | ✓ | | |
| `_MaintenanceOrderLongText` | | ✓ | | |
| `_MaintenanceOrderPartner` | | ✓ | | |
| `_MaintenanceOrderPhaseControl` | | ✓ | | |
| `_MaintOrderSettlmtDistrRule_2` | | ✓ | | |
| `_MaintOrderObjectListItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Projection - TP'
@AccessControl: { authorizationCheck: #CHECK, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
//@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE - incompatible change
@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrder'
//@ObjectModel.semanticKey: ['MaintenanceOrder'] - incompatible change
//@ObjectModel.representativeKey: 'MaintenanceOrder' - incompatible change
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'ORI',
  dataSources: ['_MaintenanceOrderTP'],
  quota: {
    maximumFields: 250,
    maximumBytes: 5000
  }
}
define root view entity I_MaintenanceOrderTP
  provider contract transactional_interface
  as projection on R_MaintenanceOrderTP as _MaintenanceOrderTP

{
  key MaintenanceOrder,
      MaintOrderRoutingNumber,
      MaintenanceOrderType,
      MaintenanceOrderDesc,

      MaintOrdBasicStartDateTime,
      MaintOrdBasicEndDateTime,
      MaintOrdBasicStartDate,
      MaintOrdBasicStartTime,
      MaintOrdBasicEndDate,
      MaintOrdBasicEndTime,
      MaintOrdSchedldBscStrtDateTime,
      MaintOrdSchedldBscEndDateTime,
      ScheduledBasicStartDate,
      ScheduledBasicStartTime,
      ScheduledBasicEndDate,
      ScheduledBasicEndTime,
      MaintOrderReferenceDateTime,
      MaintOrderReferenceDate,
      MaintOrderReferenceTime,
      MainWorkCompletedDateTime,
      MaintenanceNotification,
      @Semantics.booleanIndicator: true
      OrdIsNotSchedldAutomatically,
      MainWorkCenterInternalID,
      MainWorkCenterTypeCode,
      MainWorkCenter,
      MainWorkCenterPlant,
      WorkCenterInternalID,
      WorkCenterTypeCode,
      WorkCenter,

      ControllingArea,
      LocAcctAssgmtWBSElmntIntID,
      ControllingSettlementProfile,
      LocAcctAssgmtBusinessArea,
      LocAcctAssgmtControllingArea,
      LocAcctAssgmtCompanyCode,
      MaintenancePlanningPlant,
      MaintenancePlant,
      Assembly,
      MaintOrdProcessPhaseCode,
      MaintOrdProcessSubPhaseCode,
      CompanyCode,
      BusinessArea,
      ReferenceElement,
      FunctionalArea,
      AdditionalDeviceData,
      Equipment,
      MaintenanceOrderPlanningCode,
      MaintenancePlannerGroup,
      MaintenanceActivityType,
      MaintPriority,
      MaintPriorityType,
      OrderProcessingGroup,
      ProfitCenter,
      ResponsibleCostCenter,
      CostCenter,
      CostingSheet,
      Currency,
      MaintenanceRevision,
      SerialNumber,
      Product,

      SuperiorProjectNetwork,
      OperationSystemCondition,
      WBSElementInternalID,
      ProjectInternalID,
      ControllingObjectClass,
      FunctionalLocation,
      AssetLocation,
      AssetRoom,
      PlantSection,
      ABCIndicator,
      MaintObjectFreeDefinedAttrib,
      MaintenanceOrderInternalID,
      MaintenanceItemObjectList,
      MaintObjectLocAcctAssgmtNmbr,

      BasicSchedulingType,
      LatestAcceptableCompletionDate,
      MaintOrdPersonResponsible,
      LastChangeByUser,
      LastChangeDateTime,
      CreatedByUser,
      MaintOrderCreationDateTime,
      OrderHasLongText,
      MaintOrderProcessingContext,
      MaintenanceOrderOverheadCode,
      PlannedCostsCostingVariant,
      ActualCostsCostingVariant,
      MaintenancePlan,
      MaintenanceCall,
      MaintenanceItem,
      LeadingOrder,
      TaskListType,
      TaskListGroup,
      TaskListGroupCounter,      
      _Equipment,
      _LocationAccountAssignment,
      _MaintenanceOrderOperation    : redirected to composition child I_MaintenanceOrderOperationTP,
      @Semantics.valueRange.maximum: '1' //RAP CC for Longtext cardinality [0..*]  issue
      _MaintenanceOrderLongText     : redirected to composition child I_MaintenanceOrderLongTextTP,
      _MaintenanceOrderPartner      : redirected to composition child I_MaintenanceOrderPartnerTP,
      _MaintenanceOrderPhaseControl : redirected to composition child I_MaintOrderPhaseControlTP,
      _MaintOrderSettlmtDistrRule_2 : redirected to composition child I_MaintOrderSettlmtDistrRuleTP,
      _MaintOrderObjectListItem     : redirected to composition child I_MaintOrderObjectListItemTP
}
```
