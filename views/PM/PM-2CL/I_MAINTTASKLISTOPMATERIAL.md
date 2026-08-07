---
name: I_MAINTTASKLISTOPMATERIAL
description: Maintenance Task ListOPMATERIAL
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - material
  - component:PM-2CL
  - lob:Plant Maintenance
  - bo:Material
---
# I_MAINTTASKLISTOPMATERIAL

**Maintenance Task ListOPMATERIAL**

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
| `TaskListSequence` | ✓ | |  | `BillOfOperationsSequence` |  |  |
| `TaskListOperationInternalId` | ✓ | |  | `BOOOperationInternalID` |  |  |
| `TaskListOpBOMItmInternalID` | ✓ | |  | `BOOOpBOMItemInternalID` |  |  |
| `TaskListOpBOMItmIntVersCounter` | ✓ | |  | `BOOOpBOMItemIntVersCounter` |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `BillOfMaterialItemQuantity` |  | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ResvnIsMRPRlvtOrPurReqnIsCrted` |  | |  |  |  |  |
| `BillOfMaterialComponent` |  | | `_BOMItemEAM` | `BillOfMaterialComponent` |  |  |
| `BillOfMaterialItemCategory` |  | | `_BOMItemEAM` | `BillOfMaterialItemCategory` |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | | `_MaintenanceTaskList` | `TechObjIsEquipOrFuncnlLoc` |  |  |
| `Equipment` |  | | `_MaintenanceTaskList` | `Equipment` |  |  |
| `FunctionalLocation` |  | | `_MaintenanceTaskList` | `FunctionalLocation` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `_MaintenanceTaskList` | | ✓ | | | | |
| `_SafetyRelevance` | | ✓ | | | | |
| `_BOMItemEAM` | | ✓ | | | | |
| `_BillOfMaterialComponent` | | ✓ | | | | |
| `_BillOfMaterialItemCategory` | | ✓ | | | | |
| `_BOMItemCategoryText` | | ✓ | | | | |
| `_MatlsPlngRelevancy` | | ✓ | | | | |
| `_BillOfMaterialItem` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOpBOMItemInternalID` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceTaskList` | `I_MaintenanceTaskList` | [1..1] |
| `_SafetyRelevance` | `I_SafetyRelevance` | [0..1] |
| `_BOMItemEAM` | `I_BOMItemEAM` | [0..*] |
| `_BillOfMaterialComponent` | `I_Material` | [0..1] |
| `_BillOfMaterialItemCategory` | `I_EAMMaterialItemCategory` | [0..1] |
| `_BOMItemCategoryText` | `I_BomItemCategoryText` | [0..1] |
| `_MatlsPlngRelevancy` | `I_MatlsPlngRelevancyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMAINTTLOPMATL'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Task List Operation Material'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE]  

 
define view I_MaintTaskListOpMaterial
  as select from I_BOOOpBOMItemChangeState

  association [1..1] to I_MaintenanceTaskList     as _MaintenanceTaskList        on  _MaintenanceTaskList.TaskListType         = $projection.TaskListType
                                                                                 and _MaintenanceTaskList.TaskListGroup        = $projection.TaskListGroup
                                                                                 and _MaintenanceTaskList.TaskListGroupCounter = $projection.TaskListGroupCounter
  association [0..1] to I_SafetyRelevance         as _SafetyRelevance            on  _SafetyRelevance.SafetyRelevantObject     = $projection.billofmaterialcomponent
                                                                                 and _SafetyRelevance.SafetyRelevantObjectType = 'MA'

  association [0..*] to I_BOMItemEAM              as _BOMItemEAM                 on  _BOMItemEAM.BillOfMaterialCategory       = $projection.BillOfMaterialCategory
                                                                                 and _BOMItemEAM.BillOfMaterial               = $projection.BillOfMaterial
                                                                                 and _BOMItemEAM.BillOfMaterialItemNodeNumber = $projection.BillOfMaterialItemNodeNumber

  association [0..1] to I_Material                as _BillOfMaterialComponent    on  _BillOfMaterialComponent.Material = $projection.billofmaterialcomponent

  association [0..1] to I_EAMMaterialItemCategory as _BillOfMaterialItemCategory on  _BillOfMaterialItemCategory.BOMItemCategory = $projection.billofmaterialitemcategory

  association [0..1] to I_BomItemCategoryText     as _BOMItemCategoryText        on  _BOMItemCategoryText.BillOfMaterialItemCategory = $projection.billofmaterialitemcategory
                                                                                 and _BOMItemCategoryText.Language                   = $session.system_language

  association [0..1] to I_MatlsPlngRelevancyCode  as _MatlsPlngRelevancy         on  _MatlsPlngRelevancy.MatlsPlngRelevancyCode = $projection.ResvnIsMRPRlvtOrPurReqnIsCrted
{

  key BillOfOperationsType       as TaskListType,

  key BillOfOperationsGroup      as TaskListGroup,

  key BillOfOperationsVariant    as TaskListGroupCounter,

  key BillOfOperationsSequence   as TaskListSequence,

  key BOOOperationInternalID     as TaskListOperationInternalId,

  key BOOOpBOMItemInternalID     as TaskListOpBOMItmInternalID,

  key BOOOpBOMItemIntVersCounter as TaskListOpBOMItmIntVersCounter,

      BillOfMaterialCategory,
      
      BillOfMaterial,
      
      BillOfMaterialVariant,
      
      BillOfMaterialItemNodeNumber,
      
      MatlCompIsMarkedForBackflush,
      
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialItemQuantity,
      
 
      BillOfMaterialItemUnit,
      
      IsDeleted,
      
      
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_MatlsPlngRelevancy'
      ResvnIsMRPRlvtOrPurReqnIsCrted,
      
      _BOMItemEAM.BillOfMaterialComponent,
      
      _BOMItemEAM.BillOfMaterialItemCategory,
      
      _MaintenanceTaskList.TechObjIsEquipOrFuncnlLoc,
      _MaintenanceTaskList.Equipment,
      _MaintenanceTaskList.FunctionalLocation,

      ValidityStartDate,
      ValidityEndDate,
      
      /* Associations */
      _BillOfMaterialItem,
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsOperation,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BOOOpBOMItemInternalID,
      _BOOOperationInternalID,

      /* Associations - locally defined */
      _BOMItemEAM,
      _BillOfMaterialComponent,
      _BillOfMaterialItemCategory,
      _BOMItemCategoryText,
      _MatlsPlngRelevancy,
      _SafetyRelevance,      

      /* Associations - DCL */
      _MaintenanceTaskList
}
```
