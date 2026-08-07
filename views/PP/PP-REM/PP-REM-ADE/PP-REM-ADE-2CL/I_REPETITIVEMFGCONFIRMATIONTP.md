---
name: I_REPETITIVEMFGCONFIRMATIONTP
description: "Repetitivemfgconfirmationtp"
app_component: PP-REM-ADE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-REM
  - PP-REM-ADE
  - interface-view
  - transactional-processing
  - component:PP-REM-ADE-2CL
  - lob:Manufacturing
---
# I_REPETITIVEMFGCONFIRMATIONTP

**Repetitivemfgconfirmationtp**

| Property | Value |
|---|---|
| App Component | `PP-REM-ADE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RepetitiveMfgConfirmation` | ✓ | |  |  |  |  |
| `RepetitiveMfgConfirmationItem` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `EnteredByUser` |  | |  |  |  |  |
| `RepetitiveMfgConfirmationText` |  | |  |  |  |  |
| `RepetitiveMfgConfScenario` |  | |  |  |  |  |
| `RptvMfgConfProcessingType` |  | |  |  |  |  |
| `RptvMfgConfReversedCode` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `BOMExplosionDate` |  | |  |  |  |  |
| `PostingDateYear` |  | |  |  |  |  |
| `ConfHasRefToPlannedOrder` |  | |  |  |  |  |
| `ReportingPointOperation` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `ReceivingStorageLocation` |  | |  |  |  |  |
| `ReceivingBatch` |  | |  |  |  |  |
| `ProductionLine` |  | |  |  |  |  |
| `RepetitiveMfgPlanningGroup` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `ProductionLot` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `KanbanControlCycle` |  | |  |  |  |  |
| `KanbanControlCycleItem` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `PlantDataCollectionID` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `ConfirmationUnit` |  | |  |  |  |  |
| `ConfirmationUnitISOCode` |  | |  |  |  |  |
| `ConfirmationUnitSAPCode` |  | |  |  |  |  |
| `ConfirmationEntryQuantity` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `QuantityIsRelevantForRework` |  | |  |  |  |  |
| `ConfFailureCostsReason` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `DestinationStorageBin` |  | |  |  |  |  |
| `_RptvMfgConfMatlDocItemTP` | | ✓ | | | | |
| `_RptvMfgConfMatlDocHndlgUntTP` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Repetitive Mfg Confirmation - TP'

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'RepetitiveMfgConfirmation'

define root view entity I_RepetitiveMfgConfirmationTP
  provider contract transactional_interface
  as projection on R_RepetitiveMfgConfirmationTP
{
  @ObjectModel.sapObjectNodeTypeReference: 'RepetitiveMfgConfirmation'
  key RepetitiveMfgConfirmation,

      // is always 0001, needed for CDC extraction
      RepetitiveMfgConfirmationItem,

      // Admin
      CreationDate,
      CreationTime,
      EnteredByUser,

      // Text
      RepetitiveMfgConfirmationText,

      // Attributes
      RepetitiveMfgConfScenario,
      @ObjectModel.sapObjectNodeTypeReference: 'RptvMfgConfProcessingType'
      RptvMfgConfProcessingType,
      @ObjectModel.sapObjectNodeTypeReference: 'RptvMfgConfReversalType'
      RptvMfgConfReversedCode,
      PostingDate,
      DocumentDate,
      BOMExplosionDate,
      PostingDateYear,
      ConfHasRefToPlannedOrder,

      // Assignments
      ReportingPointOperation,
      Product,
      ProductionPlant,
      ProductionVersion,
      ReceivingStorageLocation,
      ReceivingBatch,
      ProductionLine,
      @ObjectModel.sapObjectNodeTypeReference: 'ProductionVersionGroup'
      RepetitiveMfgPlanningGroup,
      @ObjectModel.sapObjectNodeTypeReference: 'PlannedOrder'
      PlannedOrder,
      @ObjectModel.sapObjectNodeTypeReference: 'SalesOrder'
      SalesOrder,
      SalesOrderItem,
      ProductionLot,
      @ObjectModel.sapObjectNodeTypeReference: 'ReservationDocument'
      Reservation,
      PlanningPlant,
      @ObjectModel.sapObjectNodeTypeReference: 'KanbanControlCycle'
      KanbanControlCycle,
      KanbanControlCycleItem,
      @ObjectModel.sapObjectNodeTypeReference: 'MaterialDocument'
      MaterialDocument,
      MaterialDocumentYear,
      MaterialRevisionLevel,
      PlantDataCollectionID,

      // HR data
      Personnel,
      EmployeeWageType,
      EmployeeWageGroup,

      // Quantities and UoM
      ConfirmationUnit,
      ConfirmationUnitISOCode,
      ConfirmationUnitSAPCode,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      ConfirmationEntryQuantity,
      VarianceReasonCode,

      // Failure costs
      QuantityIsRelevantForRework,
      ConfFailureCostsReason,
      CostCenter,

      // EWM DATA
      EWMWarehouse,
      DestinationStorageBin,

      /* Compositions */
      _RptvMfgConfMatlDocItemTP : redirected to composition child I_RptvMfgConfMatlDocItemTP,
      _RptvMfgConfMatlDocHndlgUntTP : redirected to composition child I_RptvMfgConfMatlDocHndlgUntTP,
      //_RptvMfgConfGRBatchCharcTP : redirected to composition child I_RptvMfgConfGRBatchCharcTP,

      /* Associations */
      _EntryUnit
}
```
