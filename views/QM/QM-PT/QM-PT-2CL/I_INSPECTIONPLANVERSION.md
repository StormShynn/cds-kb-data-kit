---
name: I_INSPECTIONPLANVERSION
description: Inspectionplanversion
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONPLANVERSION

**Inspectionplanversion**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionPlanGroup` | `BillOfOperationsGroup` |
| key `InspectionPlan` | `BillOfOperationsVariant` |
| key `InspectionPlanInternalVersion` | `BOOInternalVersionCounter` |
| `BillOfOperationsType` | `BillOfOperationsType` |
| `IsDeleted` | `IsDeleted` |
| `IsImplicitlyDeleted` | `IsImplicitlyDeleted` |
| `BillOfOperationsDesc` | `BillOfOperationsDesc` |
| `Plant` | `Plant` |
| `BillOfOperationsUsage` | `BillOfOperationsUsage` |
| `BillOfOperationsStatus` | `BillOfOperationsStatus` |
| `ResponsiblePlannerGroup` | `ResponsiblePlannerGroup` |
| `MinimumLotSizeQuantity` | `MinimumLotSizeQuantity` |
| `MaximumLotSizeQuantity` | `MaximumLotSizeQuantity` |
| `BillOfOperationsUnit` | `BillOfOperationsUnit` |
| `ReplacedBillOfOperations` | `ReplacedBillOfOperations` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `InspSubsetFieldCombination` | `InspSubsetFieldCombination` |
| `InspectionPartialLotAssignment` | `InspectionPartialLot` |
| `SmplDrawingProcedure` | `SmplDrawingProcedure` |
| `SmplDrawingProcedureVersion` | `SmplDrawingProcedureVersion` |
| `InspectionLotDynamicLevel` | `InspectionLotDynamicLevel` |
| `InspLotDynamicRule` | `InspLotDynamicRule` |
| `InspExternalNumberingOfValues` | `InspExternalNumberingOfValues` |
| `InspLotDynamicCriteria` | `InspLotDynamicCriteria` |
| `InspPlanHasMultipleSpec` | `InspPlanHasMultipleSpec` |
| `MatlIsConsideredForDynModif` | `cast( substring(InspLotDynamicCriteria,1,1) as qmatkz preserving type )` |
| `SuplrIsConsideredForDynModif` | `cast( substring(InspLotDynamicCriteria,2,1) as qlifkz preserving type )` |
| `MfrIsConsideredForDynModif` | `cast( substring(InspLotDynamicCriteria,3,1) as qherstkz preserving type )` |
| `CustIsConsideredForDynModif` | `cast( substring(InspLotDynamicCriteria,4,1) as qkundkz preserving type )` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ChangeNumber` | `ChangeNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ChangedDateTime` | `ChangedDateTime` |
| `_InspectionPlan` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_Plant` | *Association* |
| `_BillOfOperationsUsage` | *Association* |
| `_BillOfOperationsStatus` | *Association* |
| `_ResponsiblePlannerGroup` | *Association* |
| `_BillOfOperationsUnit` | *Association* |
| `_InspSubsetFieldCombination` | *Association* |
| `_SampleDrawingProcedure` | *Association* |
| `_SmplDrwgProcedureVersion` | *Association* |
| `_InspectionLotDynamicLevel` | *Association* |
| `_InspLotDynamicRule` | *Association* |
| `_InspExtNumbering` | *Association* |
| `_ChangeMaster` | *Association* |
| `_InspPartialLotAssignment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionPlan` | `I_InspectionPlan` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPPLV'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Version of Inspection Plan'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.representativeKey: 'InspectionPlanInternalVersion'
@Metadata.ignorePropagatedAnnotations: true
//@Analytics.dataCategory:#DIMENSION
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION ]


define view I_InspectionPlanVersion
  as select from I_BillOfOperationsChangeState
  association [1..1] to I_InspectionPlan        as _InspectionPlan        on  $projection.InspectionPlanGroup = _InspectionPlan.InspectionPlanGroup
                                                                          and $projection.InspectionPlan      = _InspectionPlan.InspectionPlan
  association [1..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.InspectionPlanGroup  = _BillOfOperationsGroup.BillOfOperationsGroup
                                                                          and $projection.BillOfOperationsType = _BillOfOperationsGroup.BillOfOperationsType
  //associations added for C1 release purpose
  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key BillOfOperationsGroup                                                     as InspectionPlanGroup,
      @ObjectModel.foreignKey.association: '_InspectionPlan'
  key BillOfOperationsVariant                                                   as InspectionPlan,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.text.element: 'BillOfOperationsDesc'
  key BOOInternalVersionCounter                                                 as InspectionPlanInternalVersion,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      BillOfOperationsType,
      IsDeleted,
      IsImplicitlyDeleted,

      // *************************** Header general ****************************

      -- General data
      // adding below annotation due to ignored underlying annotations
      @Semantics.text: true
      BillOfOperationsDesc,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_BillOfOperationsUsage'
      BillOfOperationsUsage,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_BillOfOperationsStatus'
      BillOfOperationsStatus,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      ResponsiblePlannerGroup,
      // adding below annotation due to ignored underlying annotations
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      @DefaultAggregation: #MIN
      MinimumLotSizeQuantity,
      // adding below annotation due to ignored underlying annotations
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      @DefaultAggregation: #MAX
      MaximumLotSizeQuantity,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_BillOfOperationsUnit'
      @Semantics.unitOfMeasure: true
      BillOfOperationsUnit,
      ReplacedBillOfOperations,
      IsMarkedForDeletion,
      -- Parameter for dynamic modification/inspection points
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_InspSubsetFieldCombination'
      InspSubsetFieldCombination,
      InspectionPartialLot                                                      as InspectionPartialLotAssignment,
      SmplDrawingProcedure,
      SmplDrawingProcedureVersion,
      InspectionLotDynamicLevel,
      InspLotDynamicRule,
      InspExternalNumberingOfValues,
      InspLotDynamicCriteria,
      @Semantics.booleanIndicator: true
      InspPlanHasMultipleSpec,
      @Semantics.booleanIndicator: true
      cast( substring(InspLotDynamicCriteria,1,1) as qmatkz preserving type )   as MatlIsConsideredForDynModif,
      @Semantics.booleanIndicator: true
      cast( substring(InspLotDynamicCriteria,2,1) as qlifkz preserving type )   as SuplrIsConsideredForDynModif,
      @Semantics.booleanIndicator: true
      cast( substring(InspLotDynamicCriteria,3,1) as qherstkz preserving type ) as MfrIsConsideredForDynModif,
      @Semantics.booleanIndicator: true
      cast( substring(InspLotDynamicCriteria,4,1) as qkundkz preserving type )  as CustIsConsideredForDynModif,

      // *************************** Administration ****************************

      -- Administrative Data
      // adding below annotation due to ignored underlying annotations
      @Semantics.systemDate.createdAt: true
      CreationDate,
      // adding below annotation due to ignored underlying annotations
      @Semantics.user.createdBy: true
      CreatedByUser,
      // adding below annotation due to ignored underlying annotations
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      // adding below annotation due to ignored underlying annotations
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      // adding below annotation due to ignored underlying annotations
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      ChangeNumber,
      // adding below annotation due to ignored underlying annotations
      @Semantics.businessDate.from: true
      ValidityStartDate,
      // adding below annotation due to ignored underlying annotations
      @Semantics.businessDate.to: true
      ValidityEndDate,
      // adding below annotation due to ignored underlying annotations
      ChangedDateTime,

      //Associations
      _InspectionPlan,
      _Plant,
      _BillOfOperationsUsage,
      _BillOfOperationsStatus,
      _ResponsiblePlannerGroup,
      _BillOfOperationsUnit,
      _InspSubsetFieldCombination,
      _SampleDrawingProcedure,
      _SmplDrwgProcedureVersion,
      _InspectionLotDynamicLevel,
      _InspLotDynamicRule,
      _InspExtNumbering,
      _ChangeMaster,
      // association added for C1 release purpose
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _InspPartialLotAssignment


}
where
     BillOfOperationsType = 'Q'
  or BillOfOperationsType = 'S'
```
