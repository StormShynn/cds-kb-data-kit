---
name: I_WORKCENTERBYSEMANTICKEY
description: Work CenterBYSEMANTICKEY
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERBYSEMANTICKEY

**Work CenterBYSEMANTICKEY**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  |  |
| `WorkCenter` | ✓ | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
| `WorkCenterIsToBeDeleted` |  | |  |  |
| `WorkCenterIsLocked` |  | |  |  |
| `WorkCenterIsMntndForCosting` |  | |  |  |
| `WorkCenterIsMntndForScheduling` |  | |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |
| `AdvancedPlanningIsSupported` |  | |  |  |
| `LaborTrackingIsRequired` |  | |  |  |
| `WorkCenterCategoryCode` |  | |  |  |
| `WorkCenterLocation` |  | |  |  |
| `WorkCenterLocationGroup` |  | |  |  |
| `WorkCenterUsage` |  | |  |  |
| `WorkCenterResponsible` |  | |  |  |
| `SupplyArea` |  | |  |  |
| `CapacityInternalID` |  | |  |  |
| `MachineType` |  | |  |  |
| `OperationControlProfile` |  | |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |
| `WorkCenterSetupType` |  | |  |  |
| `FreeDefinedTableFieldSemantic` |  | |  |  |
| `ObjectInternalID` |  | |  |  |
| `StandardTextInternalID` |  | |  |  |
| `EmployeeWageType` |  | |  |  |
| `EmployeeWageGroup` |  | |  |  |
| `EmployeeSuitability` |  | |  |  |
| `NumberOfTimeTickets` |  | |  |  |
| `PlanVersion` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `StandardTextIDIsReferenced` |  | |  |  |
| `EmployeeWageTypeIsReferenced` |  | |  |  |
| `NmbrOfTimeTicketsIsReferenced` |  | |  |  |
| `EmployeeWageGroupIsReferenced` |  | |  |  |
| `EmplSuitabilityIsReferenced` |  | |  |  |
| `WorkCenterSetpTypeIsReferenced` |  | |  |  |
| `OpControlProfileIsReferenced` |  | |  |  |
| `NumberOfConfSlipsIsReferenced` |  | |  |  |
| `WorkCenterStdQueueDurnUnit` |  | |  |  |
| `WorkCenterStandardQueueDurn` |  | |  |  |
| `WorkCenterMinimumQueueDurnUnit` |  | |  |  |
| `WorkCenterMinimumQueueDuration` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit1` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit2` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit3` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit4` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit5` |  | |  |  |
| `WorkCenterStandardWorkQtyUnit6` |  | |  |  |
| `StandardWorkQuantityUnit` |  | |  |  |
| `StandardWorkFormulaParamGroup` |  | |  |  |
| `WrkCtrStdValMaintRule1` |  | |  |  |
| `WrkCtrStdValMaintRule2` |  | |  |  |
| `WrkCtrStdValMaintRule3` |  | |  |  |
| `WrkCtrStdValMaintRule4` |  | |  |  |
| `WrkCtrStdValMaintRule5` |  | |  |  |
| `WrkCtrStdValMaintRule6` |  | |  |  |
| `_WorkCenterTextBySemanticKey` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_WorkCenterType` | | ✓ | | |
| `_WorkCenterResponsible` | | ✓ | | |
| `_WorkCenterCategory` | | ✓ | | |
| `_WorkCenterLocation` | | ✓ | | |
| `_WorkCenterLocationGroup` | | ✓ | | |
| `_WorkCenterUsage` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_Capacity` | | ✓ | | |
| `_MachineType` | | ✓ | | |
| `_OperationControlProfile` | | ✓ | | |
| `_SupplyArea` | | ✓ | | |
| `_WorkCenterSetupType` | | ✓ | | |
| `_StandardTextInternalID` | | ✓ | | |
| `_EmployeeWageGroup` | | ✓ | | |
| `_EmployeeSuitability` | | ✓ | | |
| `_ValidityStartDate` | | ✓ | | |
| `_ValidityEndDate` | | ✓ | | |
| `_StandardQueueDurationUnit` | | ✓ | | |
| `_MinimumQueueDurationUnit` | | ✓ | | |
| `_WorkQuantityUnit1` | | ✓ | | |
| `_WorkQuantityUnit2` | | ✓ | | |
| `_WorkQuantityUnit3` | | ✓ | | |
| `_WorkQuantityUnit4` | | ✓ | | |
| `_WorkQuantityUnit5` | | ✓ | | |
| `_WorkQuantityUnit6` | | ✓ | | |
| `_StandardWorkQuantityUnit` | | ✓ | | |
| `_StandardWorkFmlaParamGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenterTextBySemanticKey` | `I_WorkCenterTextBySemanticKey` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRBYSEMK'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_WorkCenterResponsible']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'WorkCenter'
@ObjectModel.semanticKey: ['Plant', 'WorkCenter']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center By Semantic Key'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_WorkCenterBySemanticKey
  as select from I_WorkCenter

    association [0..*] to I_WorkCenterTextBySemanticKey as _WorkCenterTextBySemanticKey
      on  $projection.WorkCenter = _WorkCenterTextBySemanticKey.WorkCenter
      and $projection.Plant      = _WorkCenterTextBySemanticKey.Plant
{
      // Semantic Key
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.text.association: '_WorkCenterTextBySemanticKey'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7}
      @ObjectModel.foreignKey.association: null
  key WorkCenter, 

      // Internal Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      WorkCenterTypeCode,

      // Attributes
      WorkCenterIsToBeDeleted,
      WorkCenterIsLocked,
      WorkCenterIsMntndForCosting,
      WorkCenterIsMntndForScheduling,
      NumberOfConfirmationSlips,
      AdvancedPlanningIsSupported,
      LaborTrackingIsRequired,

      // Assignments
      @ObjectModel.foreignKey.association: '_WorkCenterCategory'
      WorkCenterCategoryCode,
      @ObjectModel.foreignKey.association: '_WorkCenterLocation'
      WorkCenterLocation,
      @ObjectModel.foreignKey.association: '_WorkCenterLocationGroup'
      WorkCenterLocationGroup,
      @ObjectModel.foreignKey.association: '_WorkCenterUsage'
      WorkCenterUsage,
      @ObjectModel.foreignKey.association: '_WorkCenterResponsible'
      WorkCenterResponsible,
      @ObjectModel.foreignKey.association: '_SupplyArea'
      SupplyArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      CapacityInternalID,
      @ObjectModel.foreignKey.association: '_MachineType'      
      MachineType,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      OperationControlProfile,
      MatlCompIsMarkedForBackflush,
      @ObjectModel.foreignKey.association: '_WorkCenterSetupType'  
      WorkCenterSetupType,
      FreeDefinedTableFieldSemantic,
      ObjectInternalID,
      @ObjectModel.foreignKey.association: '_StandardTextInternalID'
      StandardTextInternalID,

      // Assignments HR
      EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      EmployeeSuitability,
      NumberOfTimeTickets,
      PlanVersion,

      // Dates
      @Semantics.businessDate.from
      ValidityStartDate,
      @Semantics.businessDate.to
      ValidityEndDate,

      // Reference indicators
      StandardTextIDIsReferenced,
      EmployeeWageTypeIsReferenced,
      NmbrOfTimeTicketsIsReferenced,
      EmployeeWageGroupIsReferenced,
      EmplSuitabilityIsReferenced,
      WorkCenterSetpTypeIsReferenced,
      OpControlProfileIsReferenced,
      NumberOfConfSlipsIsReferenced,

      // Durations
      @Semantics.unitOfMeasure: true
      WorkCenterStdQueueDurnUnit,
      WorkCenterStandardQueueDurn,
      @Semantics.unitOfMeasure: true
      WorkCenterMinimumQueueDurnUnit,
      WorkCenterMinimumQueueDuration,

      // Unit of Measures
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit1,
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit2,
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit3,
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit4,
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit5,
      @Semantics.unitOfMeasure: true
      WorkCenterStandardWorkQtyUnit6,
      @Semantics.unitOfMeasure: true
      StandardWorkQuantityUnit, // for PM and PS

      //Standard Value Key
      @ObjectModel.foreignKey.association: '_StandardWorkFmlaParamGroup'
      StandardWorkFormulaParamGroup,

      // Standard Value Maintenance Rules
      WrkCtrStdValMaintRule1,
      WrkCtrStdValMaintRule2,
      WrkCtrStdValMaintRule3,
      WrkCtrStdValMaintRule4,
      WrkCtrStdValMaintRule5,
      WrkCtrStdValMaintRule6,

      // Associations
      _Plant,
      _WorkCenterType,
      _WorkCenterResponsible,
      _WorkCenterCategory,
      _WorkCenterLocation,
      _WorkCenterLocationGroup,
      _WorkCenterUsage,
      _Text,
      _WorkCenterTextBySemanticKey,
      _Capacity,
      _MachineType,
      _OperationControlProfile,
      _SupplyArea,
      _WorkCenterSetupType,
      _StandardTextInternalID,
      _EmployeeWageGroup,
      _EmployeeSuitability,
      _ValidityStartDate,
      _ValidityEndDate,
      _StandardQueueDurationUnit,
      _MinimumQueueDurationUnit,
      _WorkQuantityUnit1,
      _WorkQuantityUnit2,
      _WorkQuantityUnit3,
      _WorkQuantityUnit4,
      _WorkQuantityUnit5,
      _WorkQuantityUnit6,
      _StandardWorkQuantityUnit,
      _StandardWorkFmlaParamGroup
}
where WorkCenter != '';
```
