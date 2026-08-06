---
name: I_MFGBILLOFOPERATIONSCHGST
description: Mfgbillofoperationschgst
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MFGBILLOFOPERATIONSCHGST

**Mfgbillofoperationschgst**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfOperationsType` | `plko.BillOfOperationsType` |
| key `BillOfOperationsGroup` | `plko.BillOfOperationsGroup` |
| key `BillOfOperationsVariant` | `plko.BillOfOperationsVariant` |
| key `BOOInternalVersionCounter` | `plko.BOOInternalVersionCounter` |
| `CreationDate` | `plko.CreationDate` |
| `CreatedByUser` | `plko.CreatedByUser` |
| `LastChangeDate` | `plko.LastChangeDate` |
| `LastChangedByUser` | `plko.LastChangedByUser` |
| `ChangedDateTime` | `plko.ChangedDateTime` |
| `ChangeNumber` | `plko.ChangeNumber` |
| `ValidityStartDate` | `plko.ValidityStartDate` |
| `ValidityEndDate` | `plko.ValidityEndDate` |
| `LastReorganizationDate` | `plko.LastReorganizationDate` |
| `LastUsageDate` | `plko.LastUsageDate` |
| `NumberOfUsages` | `plko.NumberOfUsages` |
| `BillOfOperationsDateTime` | `plko.BillOfOperationsDateTime` |
| `IsDeleted` | `plko.IsDeleted` |
| `IsImplicitlyDeleted` | `plko.IsImplicitlyDeleted` |
| `IsMarkedForDeletion` | `plko.IsMarkedForDeletion` |
| `ReplacedBillOfOperations` | `plko.ReplacedBillOfOperations` |
| `BillOfOperationsDesc` | `plko.BillOfOperationsDesc` |
| `LongTextLanguageCode` | `plko.LongTextLanguageCode` |
| `WorkCenterTypeCode` | `plko.WorkCenterTypeCode` |
| `WorkCenterInternalID` | `plko.WorkCenterInternalID` |
| `Plant` | `plko.Plant` |
| `BillOfOperationsUsage` | `plko.BillOfOperationsUsage` |
| `BillOfOperationsStatus` | `plko.BillOfOperationsStatus` |
| `BillOfOperationsProfile` | `plko.BillOfOperationsProfile` |
| `ResponsiblePlannerGroup` | `plko.ResponsiblePlannerGroup` |
| `LineHierarchyInternalID` | `plko.LineHierarchyInternalID` |
| `InspSubsetFieldCombination` | `plko.InspSubsetFieldCombination` |
| `InspectionPartialLot` | `plko.InspectionPartialLot` |
| `SmplDrawingProcedure` | `plko.SmplDrawingProcedure` |
| `SmplDrawingProcedureVersion` | `plko.SmplDrawingProcedureVersion` |
| `InspectionLotDynamicLevel` | `plko.InspectionLotDynamicLevel` |
| `InspLotDynamicRule` | `plko.InspLotDynamicRule` |
| `InspExternalNumberingOfValues` | `plko.InspExternalNumberingOfValues` |
| `BillOfOperationsUnit` | `plko.BillOfOperationsUnit` |
| `MinimumLotSizeQuantity` | `plko.MinimumLotSizeQuantity` |
| `MaximumLotSizeQuantity` | `plko.MaximumLotSizeQuantity` |
| `OperationReferenceQuantity` | `plko.OperationReferenceQuantity` |
| `OperationUnit` | `plko.OperationUnit` |
| `OpQtyToBaseQtyNmrtr` | `plko.OpQtyToBaseQtyNmrtr` |
| `OpQtyToBaseQtyDnmntr` | `plko.OpQtyToBaseQtyDnmntr` |
| `_BillOfOperations` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_BillOfOperationsStatus` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsUnit` | *Association* |
| `_BillOfOperationsUsage` | *Association* |
| `_ChangeMaster` | *Association* |
| `_CreatedByUser` | *Association* |
| `_InspExtNumbering` | *Association* |
| `_InspLotDynamicRule` | *Association* |
| `_InspPartialLotAssignment` | *Association* |
| `_InspSubsetFieldCombination` | *Association* |
| `_InspectionLotDynamicLevel` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_LineHierarchy` | *Association* |
| `_LongTextLanguage` | *Association* |
| `_Plant` | *Association* |
| `_ResponsiblePlannerGroup` | *Association* |
| `_SampleDrawingProcedure` | *Association* |
| `_SmplDrwgProcedureVersion` | *Association* |
| `_WorkCenter` | *Association* |
| `_WorkCenterType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBILLOFOPERCS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] 
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOInternalVersionCounter'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Bill of Operations Change State'
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingChangeState'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MfgBillOfOperationsChgSt
  as select from I_BillOfOperationsChangeState as plko

  -- to root, to parent
  association [1..1] to I_MfgBillOfOperations as _BillOfOperations   on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plko.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plko.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plko.BillOfOperationsVariant,
      @ObjectModel.text.element: 'BillOfOperationsDesc'
  key plko.BOOInternalVersionCounter,

      // Administration 
      -- Administrative Data
      @Semantics.systemDate.createdAt: true
      plko.CreationDate,
      @Semantics.user.createdBy: true
      plko.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      plko.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      plko.LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true      
      plko.ChangedDateTime,
      -- Validity
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      plko.ChangeNumber,
      @Semantics.businessDate.from: true
      plko.ValidityStartDate,
      @Semantics.businessDate.to: true
      plko.ValidityEndDate,
      -- Additional Data
      plko.LastReorganizationDate,
      plko.LastUsageDate,
      plko.NumberOfUsages,
      plko.BillOfOperationsDateTime,

      // Attributes
      plko.IsDeleted,
      plko.IsImplicitlyDeleted,
      plko.IsMarkedForDeletion,
      plko.ReplacedBillOfOperations,

      //  Header data
      @Semantics.text: true
      plko.BillOfOperationsDesc,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      plko.LongTextLanguageCode,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      plko.WorkCenterTypeCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      plko.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_Plant'
      plko.Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsUsage'
      plko.BillOfOperationsUsage,
      @ObjectModel.foreignKey.association: '_BillOfOperationsStatus'
      plko.BillOfOperationsStatus,
      plko.BillOfOperationsProfile,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      plko.ResponsiblePlannerGroup,
      @ObjectModel.foreignKey.association: '_LineHierarchy'
      plko.LineHierarchyInternalID,

      // Quality Management
      @ObjectModel.foreignKey.association: '_InspSubsetFieldCombination'
      plko.InspSubsetFieldCombination,
      @ObjectModel.foreignKey.association: '_InspPartialLotAssignment'
      plko.InspectionPartialLot,
      @ObjectModel.foreignKey.association: '_SampleDrawingProcedure'
      plko.SmplDrawingProcedure,
      @ObjectModel.foreignKey.association: '_SmplDrwgProcedureVersion'
      plko.SmplDrawingProcedureVersion,
      @ObjectModel.foreignKey.association: '_InspectionLotDynamicLevel'
      plko.InspectionLotDynamicLevel,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspLotDynamicRuleStdVH', element: 'InspLotDynamicRule' } } ]
      @ObjectModel.foreignKey.association: '_InspLotDynamicRule'
      plko.InspLotDynamicRule,
      @ObjectModel.foreignKey.association: '_InspExtNumbering'
      plko.InspExternalNumberingOfValues,

      // Quantities and UoM
      @Semantics.unitOfMeasure: true
      plko.BillOfOperationsUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      @DefaultAggregation: #MIN
      plko.MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      @DefaultAggregation: #MAX
      plko.MaximumLotSizeQuantity,

      // Default values of Activity
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      plko.OperationReferenceQuantity,
      @Semantics.unitOfMeasure: true
      plko.OperationUnit,
      plko.OpQtyToBaseQtyNmrtr,
      plko.OpQtyToBaseQtyDnmntr,

      // Associations
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsStatus,
      _BillOfOperationsType,
      _BillOfOperationsUnit,
      _BillOfOperationsUsage,
      _ChangeMaster,
      _CreatedByUser,
      _InspExtNumbering,
      _InspLotDynamicRule,
      _InspPartialLotAssignment,
      _InspSubsetFieldCombination,
      _InspectionLotDynamicLevel,
      _LastChangedByUser,
      _LineHierarchy,
      _LongTextLanguage,
      _Plant,
      _ResponsiblePlannerGroup,
      _SampleDrawingProcedure,
      _SmplDrwgProcedureVersion,
      _WorkCenter,
      @Consumption.hidden: true
      _WorkCenterType
}
where plko.BillOfOperationsType = '2'  // Recipe
   or plko.BillOfOperationsType = 'N'  // Standard routing
   or plko.BillOfOperationsType = 'S'; // Reference operation set
```
