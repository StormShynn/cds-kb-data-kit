---
name: I_QUALITYLEVELTP_2
description: Qualityleveltp 2
app_component: QM-QC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QC
  - interface-view
  - transactional-processing
  - component:QM-QC-2CL
  - lob:Quality Management
---
# I_QUALITYLEVELTP_2

**Qualityleveltp 2**

| Property | Value |
|---|---|
| App Component | `QM-QC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `Plant` |
| key `Material` | `Material` |
| key `BillOfOperationsType` | `BillOfOperationsType` |
| key `BillOfOperationsGroup` | `BillOfOperationsGroup` |
| key `BillOfOperationsVariant` | `BillOfOperationsVariant` |
| key `BOOOperationInternalID` | `BOOOperationInternalID` |
| key `Sequence` | `Sequence` |
| key `QualityLevelInternalID` | `QualityLevelInternalID` |
| `Supplier` | `Supplier` |
| `Manufacturer` | `Manufacturer` |
| `Customer` | `Customer` |
| `InspectionLotType` | `InspectionLotType` |
| `InspectionOperation` | `InspectionOperation` |
| `InspectionCharacteristic` | `InspectionCharacteristic` |
| `QltyLvlIndirectlyChangedBy` | `QltyLvlIndirectlyChangedBy` |
| `QltyLvlManuallyChangedBy` | `QltyLvlManuallyChangedBy` |
| `QltyLvlIndirectlyChangedOn` | `QltyLvlIndirectlyChangedOn` |
| `QltyLvlManuallyChangedOn` | `QltyLvlManuallyChangedOn` |
| `InspectionLot` | `InspectionLot` |
| `InspLotUsageDecisionValuation` | `InspLotUsageDecisionValuation` |
| `InspLotUsgeDcsnDynValuation` | `InspLotUsgeDcsnDynValuation` |
| `SamplingProcedure` | `SamplingProcedure` |
| `InspLotDynamicRule` | `InspLotDynamicRule` |
| `QltyLevelNextDynRuleStage` | `QltyLevelNextDynRuleStage` |
| `InspLotsWithoutUsageDecision` | `InspLotsWithoutUsageDecision` |
| `InspLotsSinceStageChg` | `InspLotsSinceStageChg` |
| `RjctdInspLotsSinceStgeChg` | `RjctdInspLotsSinceStgeChg` |
| `InspResultDynModifValuation` | `InspResultDynModifValuation` |
| `InspectionValuationResult` | `InspectionValuationResult` |
| `QualityLevelLastOpenInspLot` | `QualityLevelLastOpenInspLot` |
| `QualityLevelLastInspectionOn` | `QualityLevelLastInspectionOn` |
| `QltyLevelCanceledInspections` | `QltyLevelCanceledInspections` |
| `QualityLevelDeletionOn` | `QualityLevelDeletionOn` |
| `QualityLevelResetOn` | `QualityLevelResetOn` |
| `ChangedDateTime` | `ChangedDateTime` |
| `_Plant` | *Association* |
| `_Material` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_BillOfOperations` | *Association* |
| `_BOOOperationInternalID` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_NextInspLotDynRuleStage` | *Association* |
| `_InspLotDynamicRule` | *Association* |
| `_InspectionLot` | *Association* |
| `_Manufacturer` | *Association* |
| `_QualityLevelLastOpenInspLot` | *Association* |
| `_ProductPlantQtManagement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Quality Level - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #M,
        serviceQuality: #B },

    representativeKey: 'QualityLevelInternalID',
    semanticKey:  [
      'Plant',
      'Material',
      'BillOfOperationsType',
      'BillOfOperationsGroup',
      'BillOfOperationsVariant',
      'BOOOperationInternalID',
      'Sequence',
      'QualityLevelInternalID'],
    sapObjectNodeType.name: 'QualityLevel' }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_QualityLevelTP_2
  provider contract transactional_interface
  as projection on R_QualityLevelTP as QualityLevel
{
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_Material'
  key Material,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'      
  key BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key BOOOperationInternalID,
//      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key Sequence,
  key QualityLevelInternalID,
      Supplier,
      Manufacturer,
      Customer,
      InspectionLotType,
      InspectionOperation,
      InspectionCharacteristic,
      QltyLvlIndirectlyChangedBy,
      QltyLvlManuallyChangedBy,
      QltyLvlIndirectlyChangedOn,
      QltyLvlManuallyChangedOn,
      InspectionLot,
      InspLotUsageDecisionValuation,
      InspLotUsgeDcsnDynValuation,
      SamplingProcedure,
      InspLotDynamicRule,
      QltyLevelNextDynRuleStage,
      InspLotsWithoutUsageDecision,
      InspLotsSinceStageChg,
      RjctdInspLotsSinceStgeChg,
      InspResultDynModifValuation,
      InspectionValuationResult,
      QualityLevelLastOpenInspLot,
      QualityLevelLastInspectionOn,
      QltyLevelCanceledInspections,
      QualityLevelDeletionOn,
      QualityLevelResetOn,
      ChangedDateTime,

      //Associations
      _Plant,
      _Material,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,      
      _BOOOperationInternalID,
//      _BillOfOperationsSequence,
//      _BillOfOperationsOperation,
      _Supplier,
      _Customer,
      // _BOOCharacteristic,
      _NextInspLotDynRuleStage,
      _InspLotDynamicRule,
      _InspectionLot,
      _Manufacturer,
      _QualityLevelLastOpenInspLot,
      _ProductPlantQtManagement
      // _InspectionCharacteristic

}
```
