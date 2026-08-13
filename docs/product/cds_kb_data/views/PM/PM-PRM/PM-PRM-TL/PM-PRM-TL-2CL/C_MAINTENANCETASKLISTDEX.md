---
name: C_MAINTENANCETASKLISTDEX
description: "Maintenancetasklistdex"
semantic_vi: "View Maintenancetasklistdex CDS hiển thị danh sách các nhiệm vụ bảo trì được nhóm theo loại, danh sách và phiên bản, cùng với thông tin về nhà máy và khu vực kiểm soát."
keywords:
  - "maintenance task"
  - "nhiệm vụ bảo trì"
  - "plant maintenance"
  - "bảo trì nhà máy"
  - "task list"
  - "danh sách nhiệm vụ"
  - "controlling area"
  - "khu vực kiểm soát"
  - "maintenance planning"
  - "kế hoạch bảo trì"
semantic_en: "The Maintenancetasklistdex CDS view exposes a list of maintenance tasks grouped by type, list, and version, along with associated plant and controlling area information. It is used to retrieve data for maintenance planning and execution."
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  |  |  |  |
| `TaskListGroup` | ✓ | |  |  |  |  |
| `TaskListGroupCounter` | ✓ | |  |  |  |  |
| `TaskListVersionCounter` | ✓ | |  |  |  |  |
| `TaskListDesc` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `MaintenanceStrategy` |  | |  |  |  |  |
| `TaskListUsage` |  | |  |  |  |  |
| `BillOfOperationIsConfigurable` |  | |  |  |  |  |
| `TaskListStatus` |  | |  |  |  |  |
| `OperationSystemCondition` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` |  |  |
| `WorkCenterPlant` |  | | `_WorkCenter` | `Plant` |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  | `cast( FunctionalLocation as ps_s4_tplnr preserving type )` |  |  |
| `TechnicalObject` |  | |  |  |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  |  |  |
| `_WorkCenterPlant` |  | | `_WorkCenter` | `_Plant` |  |  |
| `_EquipmentData` | | ✓ | | | | |
| `_FunctionalLocationData` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_ConfigurableIndicator` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_OperationSystemCondition` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ResponsiblePlannerGroup` | | ✓ | | | | |
| `_TaskListStatus` | | ✓ | | | | |
| `_TaskListType` | | ✓ | | | | |
| `_TaskListGroup` | | ✓ | | | | |
| `_TaskListGroupCounter` | | ✓ | | | | |
| `_TaskListUsage` | | ✓ | | | | |
| `_TechnicalObject` | | ✓ | | | | |

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
