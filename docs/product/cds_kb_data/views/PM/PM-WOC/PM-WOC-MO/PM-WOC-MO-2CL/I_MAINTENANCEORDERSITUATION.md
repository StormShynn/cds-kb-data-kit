---
name: I_MAINTENANCEORDERSITUATION
description: "Maintenance OrderSITUATION"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERSITUATION

**Maintenance OrderSITUATION**

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
| `MaintenanceOrderDesc` |  | |  |  |  |  |
| `MaintenanceOrderType` |  | |  |  |  |  |
| `MaintenanceOrderTypeName` |  | |  | `_Order._OrderType._Text[1:Language = $session.system_language].OrderTypeName` |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlanningPlantName` |  | | `_MaintenancePlanPlant` | `PlantName1` |  |  |
| `MaintPriority` |  | |  |  |  |  |
| `MaintenanceActivityType` |  | |  |  |  |  |
| `MaintenanceNotification` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  | `cast(_LocationAccountAssignment.FunctionalLocation as tplnr_unconverted)` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `MaintOrdBasicStartDate` |  | |  |  |  |  |
| `MaintOrdBasicStartTime` |  | |  |  |  |  |
| `MaintOrdBasicEndDate` |  | |  |  |  |  |
| `MaintOrdBasicEndTime` |  | |  |  |  |  |
| `MaintOrderProcessingContext` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdProcessingContextT` | `I_MaintOrdProcessingContextT` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Order Situation handling'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType:{ serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT]
@ObjectModel.semanticKey: [ 'MaintenanceOrder' ]
define view entity I_MaintenanceOrderSituation
  as select from I_MaintenanceOrderBasic
  association [0..*] to I_MaintOrdProcessingContextT as _MaintOrdProcessingContextT on $projection.MaintOrderProcessingContext = _MaintOrdProcessingContextT.MaintOrderProcessingContext
{
      @ObjectModel.text.element:  [ 'MaintenanceOrderDesc' ]
      @EndUserText.label: 'Maintenance Order'
  key MaintenanceOrder,
      @Semantics.text: true
      @EndUserText.label: 'Maintenance Order Description'
      MaintenanceOrderDesc,
      @ObjectModel.text.element: [ 'MaintenanceOrderTypeName' ]
      @EndUserText.label: 'Maintenance Order Type'
      MaintenanceOrderType,
      @EndUserText.label: 'Maintenance Order Type Name'
      @Semantics.text: true
      _Order._OrderType._Text[1:Language = $session.system_language].OrderTypeName as MaintenanceOrderTypeName,
      @ObjectModel.text.element: [ 'MaintenancePlanningPlantName' ]
      @EndUserText.label: 'Maintenance Planning Plant'
      MaintenancePlanningPlant,
      @Semantics.text: true
      @EndUserText.label: 'Maintenance Planning Plant Name'
      _MaintenancePlanPlant.PlantName1 as MaintenancePlanningPlantName,
      @ObjectModel.text.element: [ 'MaintPriorityDesc' ]
      @EndUserText.label: 'Maintenance Priority'
      MaintPriority,
      @Semantics.text: true
      _MaintenancePriority._Text[1:Language = $session.system_language].MaintPriorityDesc,
      @ObjectModel.text.element: [ 'MaintenanceActivityTypeName' ]
      MaintenanceActivityType,
      @EndUserText.label: 'Maintenance Activity Type Name'
      @Semantics.text: true
      _MaintenanceActivityType._Text[1:Language = $session.system_language].MaintenanceActivityTypeName,
      @EndUserText.label: 'Maintenance Notification'
      MaintenanceNotification,
      @EndUserText.label: 'Equipment'
      Equipment,
      @EndUserText.label: 'Functional Location'
      cast(_LocationAccountAssignment.FunctionalLocation as tplnr_unconverted) as FunctionalLocation,
      CreationDate,
      CreationTime,
      MaintOrdBasicStartDate,
      MaintOrdBasicStartTime,
      MaintOrdBasicEndDate,
      MaintOrdBasicEndTime,
      @ObjectModel.text.element:  [ 'MaintOrdProcessingContextText' ]
      MaintOrderProcessingContext,
      @EndUserText.label: 'Maintenance Processing Context'
      @Semantics.text: true
      _MaintOrdProcessingContextT[1:Language = $session.system_language].MaintOrdProcessingContextText,
      @EndUserText.label: 'Work Center Internal ID'
      @UI.hidden: true
      WorkCenterInternalID


}
```
