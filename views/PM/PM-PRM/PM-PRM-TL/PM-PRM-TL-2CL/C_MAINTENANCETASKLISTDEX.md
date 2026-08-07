---
name: C_MAINTENANCETASKLISTDEX
description: Maintenancetasklistdex
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - consumption-view
  - data-extraction
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# C_MAINTENANCETASKLISTDEX

**Maintenancetasklistdex**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TaskListType` | ✓ | |  |  |
| `TaskListGroup` | ✓ | |  |  |
| `TaskListGroupCounter` | ✓ | |  |  |
| `TaskListVersionCounter` | ✓ | |  |  |
| `TaskListDesc` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `MaintenancePlanningPlant` |  | |  |  |
| `Plant` |  | |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |
| `Assembly` |  | |  |  |
| `MaintenanceStrategy` |  | |  |  |
| `TaskListUsage` |  | |  |  |
| `BillOfOperationIsConfigurable` |  | |  |  |
| `TaskListStatus` |  | |  |  |
| `OperationSystemCondition` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` |
| `WorkCenterPlant` |  | | `_WorkCenter` | `Plant` |
| `Equipment` |  | |  |  |
| `FunctionalLocation` |  | |  | `cast( FunctionalLocation as ps_s4_tplnr preserving type )` |
| `TechnicalObject` |  | |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  |
| `_WorkCenterPlant` |  | | `_WorkCenter` | `_Plant` |
| `_EquipmentData` | | ✓ | | |
| `_FunctionalLocationData` | | ✓ | | |
| `_Assembly` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_Equipment` | | ✓ | | |
| `_FunctionalLocation` | | ✓ | | |
| `_ConfigurableIndicator` | | ✓ | | |
| `_MaintenancePlanningPlant` | | ✓ | | |
| `_MaintenanceStrategy` | | ✓ | | |
| `_OperationSystemCondition` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_ResponsiblePlannerGroup` | | ✓ | | |
| `_TaskListStatus` | | ✓ | | |
| `_TaskListType` | | ✓ | | |
| `_TaskListGroup` | | ✓ | | |
| `_TaskListGroupCounter` | | ✓ | | |
| `_TaskListUsage` | | ✓ | | |
| `_TechnicalObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EquipmentData` | `C_EquipmentDataDEX` | [0..1] |
| `_FunctionalLocationData` | `C_FunctionalLocationDEX` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Task List Data for DEX'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.viewEnhancementCategory: [#NONE]

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions }

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED }

@Analytics: {
  internalName:#LOCAL,
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
           mapping:[
                {
                    table: 'plko', role: #MAIN,
                    viewElement:  ['TaskListType', 'TaskListGroup', 'TaskListGroupCounter', 'TaskListVersionCounter'],
                    tableElement: ['plnty', 'plnnr', 'plnal', 'zaehl'],
                    filter: [{ operator: #EQ, tableElement: 'plnty', value: 'A'},
                             { operator: #EQ, tableElement: 'plnty', value: 'E'},
                             { operator: #EQ, tableElement: 'plnty', value: 'T'}]
                },
                {
                    table: 'plkz', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement:  ['TaskListType', 'TaskListGroup', 'TaskListGroupCounter'],
                    tableElement: ['plnty', 'plnnr', 'plnal'],
                    filter: [{ operator: #EQ, tableElement: 'plnty', value: 'A'},
                             { operator: #EQ, tableElement: 'plnty', value: 'E'},
                             { operator: #EQ, tableElement: 'plnty', value: 'T'}]
                }
                
                ]
                             }
                  }
}

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  modelingPattern: #ANALYTICAL_FACT,
  sapObjectNodeType.name: 'MaintenanceTaskList',
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #EXTERNAL_DATA_PROVIDER ]
}

define view entity C_MaintenanceTaskListDEX
  as select from I_MaintenanceTaskList
  association [0..1] to C_EquipmentDataDEX          as _EquipmentData          on  _EquipmentData.Equipment                      = $projection.Equipment
                                                                               and _EquipmentData.ValidityEndDate                = '99991231'
                                                                                and _EquipmentData.EquipUsagePeriodSequenceNumber = '001'
  association [0..1] to C_FunctionalLocationDEX as _FunctionalLocationData on  _FunctionalLocationData.FunctionalLocation = $projection.FunctionalLocation
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TaskListType'
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListVersionCounter,
      TaskListDesc,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
      MaintenancePlanningPlant,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      ResponsiblePlannerGroup,
      @ObjectModel.foreignKey.association: '_Assembly'
      Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
      MaintenanceStrategy,
      @ObjectModel.foreignKey.association: '_TaskListUsage'
      TaskListUsage,
      @ObjectModel.foreignKey.association: '_ConfigurableIndicator'
      BillOfOperationIsConfigurable,
      @ObjectModel.foreignKey.association: '_TaskListStatus'
      TaskListStatus,
      @ObjectModel.foreignKey.association: '_OperationSystemCondition'
      OperationSystemCondition,
      IsDeleted,
      IsMarkedForDeletion,

      ValidityStartDate,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_WorkCenter'
      _WorkCenter.WorkCenter,
      @ObjectModel.foreignKey.association: '_WorkCenterPlant'
      @EndUserText.label: 'Plant of Work Center'
      _WorkCenter.Plant  as WorkCenterPlant,
      Equipment,
      cast( FunctionalLocation as ps_s4_tplnr preserving type )                           as FunctionalLocation,
      TechnicalObject,
      TechObjIsEquipOrFuncnlLoc,
      /* end suppress warning shlporigin_not_inherited */

      _Assembly,
      _ControllingArea,
      _Equipment,
      _EquipmentData,
      _FunctionalLocation,
      _FunctionalLocationData,
      _ConfigurableIndicator,
      _MaintenancePlanningPlant,
      _MaintenanceStrategy,
      _OperationSystemCondition,
      _Plant,
      _ResponsiblePlannerGroup,
      _TaskListStatus,
      _TaskListType,
      _TaskListGroup,
      _TaskListGroupCounter,
      _TaskListUsage,
      _WorkCenter._WorkCenter,
      _WorkCenter._Plant                                                 as _WorkCenterPlant,
      _TechnicalObject
}
```
