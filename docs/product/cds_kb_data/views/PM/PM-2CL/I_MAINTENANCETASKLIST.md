---
name: I_MAINTENANCETASKLIST
description: "Maintenancetasklist"
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - component:PM-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCETASKLIST

**Maintenancetasklist**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  | `BillOfOperationsType` |  |  |
| `TaskListGroup` | ✓ | |  | `BillOfOperationsGroup` |  |  |
| `TaskListGroupCounter` | ✓ | |  | `BillOfOperationsVariant` |  |  |
| `TaskListDesc` |  | |  | `BillOfOperationsDesc` |  |  |
| `MaintenanceStrategy` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `TaskListStatus` |  | |  | `BillOfOperationsStatus` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `OperationSystemCondition` |  | |  |  |  |  |
| `ReferenceElement` |  | |  |  |  |  |
| `TaskListUsage` |  | |  | `BillOfOperationsUsage` |  |  |
| `InspSubsetFieldCombination` |  | |  |  |  |  |
| `InspExternalNumberingOfValues` |  | |  |  |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  | `cast( case I_BillOfOperations.BillOfOperationsType when 'E' then 'EAMS_EQUI' when 'T' then 'EAMS_FL' else '' end as eams_tec_obj_type_value )` |  |  |
| `TechnicalObject` |  | |  | `cast( case I_BillOfOperations.BillOfOperationsType when 'E' then _TaskListEquip.Equipment when 'T' then _TaskListFuncnlLoc.FunctionalLocation else '' end as eams_tec_obj )` |  |  |
| `TaskListObjectKey` |  | |  | `concat( concat( I_BillOfOperations.BillOfOperationsType, I_BillOfOperations.BillOfOperationsGroup ), I_BillOfOperations.BillOfOperationsVariant )` |  |  |
| `SafetyRelevantObject` |  | |  | `cast( concat( concat( concat( I_BillOfOperations.BillOfOperationsType, I_BillOfOperations.BillOfOperationsGroup ), I_BillOfOperations.BillOfOperationsVariant ), '00000000' ) as eamws_obj_id )` |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `BillOfOperationIsConfigurable` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `Equipment` |  | | `_TaskListEquip` | `Equipment` |  |  |
| `FunctionalLocation` |  | | `_TaskListFuncnlLoc` | `FunctionalLocation` |  |  |
| `FunctionalLocationLabelName` |  | | `_TaskListFuncnlLoc._FunctionalLocation._FunctionalLocationLabel` | `FunctionalLocationLabelName` |  |  |
| `TaskListVersionCounter` |  | |  | `BOOInternalVersionCounter` |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `BillOfOperationsUsage` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `TaskListIsHierarchical` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  | `BillOfOperationsDateTime` |  |  |
| `_TaskListStatus` |  | |  | `_BillOfOperationsStatus` |  |  |
| `_TaskListUsage` |  | |  | `_BillOfOperationsUsage` |  |  |
| `LongTextLanguageCode` |  | |  |  |  |  |
| `_TaskListType` | | ✓ | | | | |
| `_PMReferenceElement` | | ✓ | | | | |
| `_SafetyRelevance` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |
| `_TechnicalObject` | | ✓ | | | | |
| `_MaintTaskListOperation` | | ✓ | | | | |
| `_TaskListGroup` | | ✓ | | | | |
| `_TaskListGroupCounter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaskListType` | `I_MaintenanceTaskListType` | [0..1] |
| `_PMReferenceElement` | `I_PMReferenceElement` | [0..1] |
| `_SafetyRelevance` | `I_SafetyRelevance` | [0..1] |
| `_TaskListEquip` | `P_TaskListToEquipAlloc` | [0..1] |
| `_TaskListFuncnlLoc` | `P_TaskListToFuncnlLocAlloc` | [0..1] |
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |
| `_TechnicalObject` | `I_TechnicalObject` | [0..1] |
| `_MaintTaskListOperation` | `I_MaintTaskListOperation` | [0..*] |
| `_TaskListGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_TaskListGroupCounter` | `I_BillOfOperations` | [1..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMAINTTASKLIST'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Task List'
@ObjectModel.representativeKey: 'TaskListGroupCounter'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@VDM.viewType: #COMPOSITE
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE] 
@Metadata.ignorePropagatedAnnotations:true 



define view I_MaintenanceTaskList
  as select from I_BillOfOperations
    inner join   I_BillOfOperationsChangeState on  I_BillOfOperations.BillOfOperationsType    = I_BillOfOperationsChangeState.BillOfOperationsType
                                               and I_BillOfOperations.BillOfOperationsGroup   = I_BillOfOperationsChangeState.BillOfOperationsGroup
                                               and I_BillOfOperations.BillOfOperationsVariant = I_BillOfOperationsChangeState.BillOfOperationsVariant

  association [0..1] to I_MaintenanceTaskListType   as _TaskListType              on  _TaskListType.TaskListType = $projection.TaskListType

  association [0..1] to I_PMReferenceElement        as _PMReferenceElement        on  _PMReferenceElement.ReferenceElement = $projection.ReferenceElement

  association [0..1] to I_SafetyRelevance           as _SafetyRelevance           on  _SafetyRelevance.SafetyRelevantObject     = $projection.SafetyRelevantObject 
                                                                                  and _SafetyRelevance.SafetyRelevantObjectType = 'TL'

  association [0..1] to P_TaskListToEquipAlloc      as _TaskListEquip             on  _TaskListEquip.TaskListType  = $projection.TaskListType
                                                                                  and _TaskListEquip.TaskListGroup = $projection.TaskListGroup

  association [0..1] to P_TaskListToFuncnlLocAlloc  as _TaskListFuncnlLoc         on  _TaskListFuncnlLoc.TaskListType  = $projection.TaskListType
                                                                                  and _TaskListFuncnlLoc.TaskListGroup = $projection.TaskListGroup

  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc

  association [0..1] to I_TechnicalObject           as _TechnicalObject           on  _TechnicalObject.TechnicalObject           = $projection.TechnicalObject
                                                                                  and _TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc

  association [0..*] to I_MaintTaskListOperation    as _MaintTaskListOperation    on  _MaintTaskListOperation.TaskListType         = $projection.TaskListType
                                                                                  and _MaintTaskListOperation.TaskListGroup        = $projection.TaskListGroup
                                                                                  and _MaintTaskListOperation.TaskListGroupCounter = $projection.TaskListGroupCounter

  association [1..1] to I_BillOfOperationsGroup     as _TaskListGroup             on  _TaskListGroup.BillOfOperationsType   = $projection.TaskListType
                                                                                  and _TaskListGroup.BillOfOperationsGroup  = $projection.TaskListGroup
                                                                                  and (
                                                                                     _TaskListGroup.BillOfOperationsType    = 'A'
                                                                                     or _TaskListGroup.BillOfOperationsType = 'E'
                                                                                     or _TaskListGroup.BillOfOperationsType = 'T'
                                                                                   )

  association [1..1] to I_BillOfOperations          as _TaskListGroupCounter      on  _TaskListGroupCounter.BillOfOperationsType    = $projection.TaskListType
                                                                                  and _TaskListGroupCounter.BillOfOperationsGroup   = $projection.TaskListGroup
                                                                                  and _TaskListGroupCounter.BillOfOperationsVariant = $projection.TaskListGroupCounter
                                                                                  and (
                                                                                     _TaskListGroupCounter.BillOfOperationsType     = 'A'
                                                                                     or _TaskListGroupCounter.BillOfOperationsType  = 'E'
                                                                                     or _TaskListGroupCounter.BillOfOperationsType  = 'T'
                                                                                   )
{
      /* Key fields */
      @ObjectModel.foreignKey.association: '_TaskListType'
  key I_BillOfOperations.BillOfOperationsType                 as TaskListType,

      @EndUserText.label: 'Task List Group'
      @ObjectModel.foreignKey.association: '_TaskListGroup'
  key I_BillOfOperations.BillOfOperationsGroup                as TaskListGroup,

      @EndUserText.label: 'Task List Group Counter'
      @ObjectModel.foreignKey.association: '_TaskListGroupCounter'
  key I_BillOfOperations.BillOfOperationsVariant              as TaskListGroupCounter,

      /* Data fields */

      I_BillOfOperationsChangeState.BillOfOperationsDesc      as TaskListDesc,

      I_BillOfOperationsChangeState.MaintenanceStrategy,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' }
        }]
      I_BillOfOperationsChangeState.Plant,

      I_BillOfOperationsChangeState.ResponsiblePlannerGroup,

      I_BillOfOperationsChangeState.WorkCenterTypeCode,

      I_BillOfOperationsChangeState.WorkCenterInternalID,

      @ObjectModel.foreignKey.association: '_TaskListStatus'
      I_BillOfOperationsChangeState.BillOfOperationsStatus    as TaskListStatus,

      I_BillOfOperationsChangeState.ValidityStartDate,

      // run report CP_ADAPT_TASKLIST_TO_CDSVIEW if this field is empty:
      I_BillOfOperationsChangeState.ValidityEndDate,

      I_BillOfOperationsChangeState.ChangeNumber,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      I_BillOfOperationsChangeState.Assembly,

      I_BillOfOperationsChangeState.OperationSystemCondition,

      @ObjectModel.foreignKey.association: '_PMReferenceElement'
      I_BillOfOperationsChangeState.ReferenceElement,

      @ObjectModel.foreignKey.association: '_TaskListUsage'
      I_BillOfOperationsChangeState.BillOfOperationsUsage     as TaskListUsage,

      I_BillOfOperationsChangeState.InspSubsetFieldCombination,

      I_BillOfOperationsChangeState.InspExternalNumberingOfValues,

      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      cast( case I_BillOfOperations.BillOfOperationsType
        when 'E' then 'EAMS_EQUI'
        when 'T' then 'EAMS_FL'
        else ''
      end as eams_tec_obj_type_value )                        as TechObjIsEquipOrFuncnlLoc,

      //--[ GENERATED:012:GFBfhxvv7kY4nH9{xKJeWG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_TechnicalObjectStdVH',
                     element: 'TechnicalObject' },
          additionalBinding: [{ localElement: 'TechObjIsEquipOrFuncnlLoc',
                                element: 'TechObjIsEquipOrFuncnlLoc' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_TechnicalObject'
      cast( case I_BillOfOperations.BillOfOperationsType
        when 'E' then _TaskListEquip.Equipment
        when 'T' then _TaskListFuncnlLoc.FunctionalLocation
        else ''
      end as eams_tec_obj )                                   as TechnicalObject,

      /* Technical Fields */
      concat( concat( I_BillOfOperations.BillOfOperationsType,
            I_BillOfOperations.BillOfOperationsGroup ),
            I_BillOfOperations.BillOfOperationsVariant )      as TaskListObjectKey,

      @ObjectModel.foreignKey.association: '_SafetyRelevance'
     cast(
      concat( concat( concat( I_BillOfOperations.BillOfOperationsType,
                      I_BillOfOperations.BillOfOperationsGroup ),
                      I_BillOfOperations.BillOfOperationsVariant ),
                      '00000000' )                            as eamws_obj_id 
                      ) as SafetyRelevantObject    ,
      I_BillOfOperationsChangeState.ControllingArea,
      I_BillOfOperationsChangeState.BillOfOperationIsConfigurable,

      /* fields needed for ESH on CDS */
      I_BillOfOperationsChangeState.IsDeleted,
      I_BillOfOperationsChangeState.IsMarkedForDeletion,
      _TaskListEquip.Equipment,
      _TaskListFuncnlLoc.FunctionalLocation,
      _TaskListFuncnlLoc._FunctionalLocation._FunctionalLocationLabel.FunctionalLocationLabelName,
      @ObjectModel.text.element: 'TaskListDesc'
      I_BillOfOperationsChangeState.BOOInternalVersionCounter as TaskListVersionCounter,
      I_BillOfOperations.LastChangeDate,
      I_BillOfOperations.LastChangedByUser,
      I_BillOfOperationsChangeState.CreatedByUser,
      I_BillOfOperationsChangeState.CreationDate,
      I_BillOfOperationsChangeState.BillOfOperationsUsage,
      I_BillOfOperationsChangeState.MaintenancePlanningPlant,
      I_BillOfOperationsChangeState.TaskListIsHierarchical,
      @Semantics.systemDateTime.lastChangedAt: true
      I_BillOfOperationsChangeState.BillOfOperationsDateTime  as LastChangeDateTime,
      
      /* Associations */
      I_BillOfOperationsChangeState._MaintenanceStrategy,
      I_BillOfOperationsChangeState._Plant,
      I_BillOfOperationsChangeState._ResponsiblePlannerGroup,
      I_BillOfOperationsChangeState._BillOfOperationsStatus   as _TaskListStatus,
      I_BillOfOperationsChangeState._WorkCenter,
      I_BillOfOperationsChangeState._Assembly,
      I_BillOfOperationsChangeState._OperationSystemCondition,
      I_BillOfOperationsChangeState._BillOfOperationsUsage    as _TaskListUsage,
      I_BillOfOperationsChangeState._InspSubsetFieldCombination,
      I_BillOfOperationsChangeState._InspExtNumbering,
      I_BillOfOperationsChangeState._MaintenancePlanningPlant,
      I_BillOfOperationsChangeState._ControllingArea,
      I_BillOfOperationsChangeState._ConfigurableIndicator,
      I_BillOfOperationsChangeState.LongTextLanguageCode,
      /* Associations - locally defined */
      _TaskListType,
      _TaskListGroup,
      _TaskListGroupCounter,
      _PMReferenceElement,
      _SafetyRelevance,
      _TechnicalObject,
      _TechObjIsEquipOrFuncnlLoc,
      _MaintTaskListOperation,
      _TaskListEquip._Equipment,
      _TaskListFuncnlLoc._FunctionalLocation
}
// where I_BillOfOperations._BillOfOperationsType.BillOfOperationsApplication = 'I'
where
     I_BillOfOperations.BillOfOperationsType = 'A'
  or I_BillOfOperations.BillOfOperationsType = 'E'
  or I_BillOfOperations.BillOfOperationsType = 'T'
```
