---
name: I_PRODUCTIONVERSIONTP
description: Productionversiontp
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
  - transactional-processing
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONVERSIONTP

**Productionversiontp**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `Plant` | `Plant` |
| key `ProductionVersion` | `ProductionVersion` |
| `ProductionVersionText` | `ProductionVersionText` |
| `ChangeHistoryCount` | `ChangeHistoryCount` |
| `ChangeNumber` | `ChangeNumber` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `BillOfOperationsType` | `BillOfOperationsType` |
| `BillOfOperationsGroup` | `BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `BillOfOperationsVariant` |
| `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| `ProductionLine` | `ProductionLine` |
| `ProductionSupplyArea` | `ProductionSupplyArea` |
| `ProductionVersionGroup` | `ProductionVersionGroup` |
| `MainProduct` | `MainProduct` |
| `MaterialCostApportionmentStruc` | `MaterialCostApportionmentStruc` |
| `IssuingStorageLocation` | `IssuingStorageLocation` |
| `ReceivingStorageLocation` | `ReceivingStorageLocation` |
| `OriginalBatchReferenceMaterial` | `OriginalBatchReferenceMaterial` |
| `QuantityDistributionKey` | `QuantityDistributionKey` |
| `ProductionVersionStatus` | `ProductionVersionStatus` |
| `ProductionVersionLastCheckDate` | `ProductionVersionLastCheckDate` |
| `RateBasedPlanningStatus` | `RateBasedPlanningStatus` |
| `PreliminaryPlanningStatus` | `PreliminaryPlanningStatus` |
| `BOMCheckStatus` | `BOMCheckStatus` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ProductionVersionLock` | `ProductionVersionLock` |
| `ProdnVersIsAllowedForRptvMfg` | `ProdnVersIsAllowedForRptvMfg` |
| `HasVersionCtrldBOMAndRouting` | `HasVersionCtrldBOMAndRouting` |
| `PlanningAndExecutionBOMIsDiff` | `PlanningAndExecutionBOMIsDiff` |
| `ExecBillOfMaterialVariantUsage` | `ExecBillOfMaterialVariantUsage` |
| `ExecBillOfMaterialVariant` | `ExecBillOfMaterialVariant` |
| `ExecBillOfOperationsType` | `ExecBillOfOperationsType` |
| `ExecBillOfOperationsGroup` | `ExecBillOfOperationsGroup` |
| `ExecBillOfOperationsVariant` | `ExecBillOfOperationsVariant` |
| `EWMWarehouse` | `EWMWarehouse` |
| `DestinationStorageBin` | `DestinationStorageBin` |
| `ProcurementType` | `ProcurementType` |
| `MaterialProcurementProfile` | `MaterialProcurementProfile` |
| `UsgeProbltyWthVersCtrlInPct` | `UsgeProbltyWthVersCtrlInPct` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `MaterialMinLotSizeQuantity` | `MaterialMinLotSizeQuantity` |
| `MaterialMaxLotSizeQuantity` | `MaterialMaxLotSizeQuantity` |
| `CostingLotSize` | `CostingLotSize` |
| `TargetProductionSupplyArea` | `TargetProductionSupplyArea` |
| `MRPController` | `MRPController` |
| `MaterialName` | `MaterialName` |
| `PlantName` | `PlantName` |
| `MRPResponsible` | `MRPResponsible` |
| `RoutingCheckStatusText` | `RoutingCheckStatusText` |
| `ProductionVersionLockText` | `ProductionVersionLockText` |
| `BillOfOperationsTypeName` | `BillOfOperationsTypeName` |
| `OvrlProdnVersChkSts` | `OvrlProdnVersChkSts` |

## Source Code

```abap
@EndUserText.label: 'Interface for BO Production Version - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProductionVersion'
define root view entity I_ProductionVersionTP
  provider contract transactional_interface
  as projection on R_ProductionVersionTP
{
  key Material,
  key Plant,
  key ProductionVersion,
      ProductionVersionText,
      ChangeHistoryCount,
      ChangeNumber,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      BillOfOperationsType,
      BillOfOperationsGroup,
      BillOfOperationsVariant,
      BillOfMaterialVariantUsage,
      BillOfMaterialVariant,
      ProductionLine,
      ProductionSupplyArea,
      ProductionVersionGroup,
      MainProduct,
      MaterialCostApportionmentStruc,
      IssuingStorageLocation,
      ReceivingStorageLocation,
      OriginalBatchReferenceMaterial,
      QuantityDistributionKey,
      ProductionVersionStatus,
      ProductionVersionLastCheckDate,
      RateBasedPlanningStatus,
      PreliminaryPlanningStatus,
      BOMCheckStatus,
      ValidityStartDate,
      ValidityEndDate,
      ProductionVersionLock,
      ProdnVersIsAllowedForRptvMfg,
      HasVersionCtrldBOMAndRouting,
      PlanningAndExecutionBOMIsDiff,
      ExecBillOfMaterialVariantUsage,
      ExecBillOfMaterialVariant,
      ExecBillOfOperationsType,
      ExecBillOfOperationsGroup,
      ExecBillOfOperationsVariant,
      EWMWarehouse,
      DestinationStorageBin,
      ProcurementType,
      MaterialProcurementProfile,
      UsgeProbltyWthVersCtrlInPct,
      MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MaterialMinLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MaterialMaxLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      CostingLotSize,
      TargetProductionSupplyArea,
      MRPController,
      MaterialName,
      PlantName,
      MRPResponsible,
      RoutingCheckStatusText,
      ProductionVersionLockText,
      BillOfOperationsTypeName,
      @EndUserText.label: 'Overall Production Version Check Status'
      OvrlProdnVersChkSts

}
```
