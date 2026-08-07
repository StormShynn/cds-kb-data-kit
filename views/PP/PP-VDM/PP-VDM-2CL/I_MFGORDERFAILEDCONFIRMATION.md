---
name: I_MFGORDERFAILEDCONFIRMATION
description: Mfgorderfailedconfirmation
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERFAILEDCONFIRMATION

**Mfgorderfailedconfirmation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfirmationApplicationOrigin` | ✓ | |  |  |  |  |
| `FailedOrderConfirmationGroup` | ✓ | |  |  |  |  |
| `FailedOrderConfirmation` | ✓ | |  |  |  |  |
| `FailedOrderConfirmationText` |  | |  |  |  |  |
| `ConfirmationEntryDate` |  | |  |  |  |  |
| `ConfirmationEntryTime` |  | |  |  |  |  |
| `ConfirmationExternalEntryDate` |  | |  |  |  |  |
| `ConfirmationExternalEntryTime` |  | |  |  |  |  |
| `EnteredByExternalUser` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `IsFinalConfirmation` |  | |  |  |  |  |
| `FinalConfirmationType` |  | |  |  |  |  |
| `OrderConfirmationRecordType` |  | |  |  |  |  |
| `SequentialPlantDataCollection` |  | |  |  |  |  |
| `ConfirmationGroup` |  | |  |  |  |  |
| `ConfirmationCount` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  | `OrderCategory` |  |  |
| `ManufacturingOrder` |  | |  | `OrderID` |  |  |
| `ManufacturingOrderSequence` |  | |  | `Sequence` |  |  |
| `ManufacturingOrderOperation` |  | |  | `Operation` |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `CapacityCategory` |  | |  |  |  |  |
| `CapacityRequirementSplit` |  | |  |  |  |  |
| `TimeSheetAccountingDocument` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `TimeRecording` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PostingDateYear` |  | |  |  |  |  |
| `ConfirmedExecutionStartDate` |  | |  |  |  |  |
| `ConfirmedExecutionStartTime` |  | |  |  |  |  |
| `ConfirmedSetupEndDate` |  | |  |  |  |  |
| `ConfirmedSetupEndTime` |  | |  |  |  |  |
| `ConfirmedProcessingStartDate` |  | |  |  |  |  |
| `ConfirmedProcessingStartTime` |  | |  |  |  |  |
| `ConfirmedProcessingEndDate` |  | |  |  |  |  |
| `ConfirmedProcessingEndTime` |  | |  |  |  |  |
| `ConfirmedTeardownStartDate` |  | |  |  |  |  |
| `ConfirmedTeardownStartTime` |  | |  |  |  |  |
| `ConfirmedExecutionEndDate` |  | |  |  |  |  |
| `ConfirmedExecutionEndTime` |  | |  |  |  |  |
| `ActualForecastEndDate` |  | |  |  |  |  |
| `ActualForecastEndTime` |  | |  |  |  |  |
| `ConfirmationUnit` |  | |  |  |  |  |
| `ConfirmationYieldQuantity` |  | |  |  |  |  |
| `ConfirmationScrapQuantity` |  | |  |  |  |  |
| `ConfirmationReworkQuantity` |  | |  |  |  |  |
| `ConfirmationTotalQuantity` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `OpWorkQuantityUnit1` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity1` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity1IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit2` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity2` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity2IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit3` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity3` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity3IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit4` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity4` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity4IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit5` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity5` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity5IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit6` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity6` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity6IsExpd` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `BusinessProcessEntryUnit` |  | |  |  |  |  |
| `BusinessProcessConfirmedQty` |  | |  |  |  |  |
| `NoFurtherBusinessProcQtyIsExpd` |  | |  |  |  |  |
| `BusinessProcRemainingQtyUnit` |  | |  |  |  |  |
| `BusinessProcessRemainingQty` |  | |  |  |  |  |
| `ActualDurationUnit` |  | |  |  |  |  |
| `ActualDuration` |  | |  |  |  |  |
| `BreakDurationUnit` |  | |  |  |  |  |
| `ConfirmedBreakDuration` |  | |  |  |  |  |
| `_ManufacturingOrderCategory` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_ManufacturingOrderSequence` | | ✓ | | | | |
| `_ManufacturingOrderOperation` | | ✓ | | | | |
| `_FailedConfirmationLog` | | ✓ | | | | |
| `_FailedOrderConfirmationGroup` | | ✓ | | | | |
| `_ConfirmationApplOrigin` | | ✓ | | | | |
| `_ConfirmationRecordType` | | ✓ | | | | |
| `_FinalConfirmationType` | | ✓ | | | | |
| `_ConfirmationGroup` | | ✓ | | | | |
| `_ConfirmationCount` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_BusinessProcessUnit` | | ✓ | | | | |
| `_ConfirmationUnit` | | ✓ | | | | |
| `_WorkQuantityUnit1` | | ✓ | | | | |
| `_WorkQuantityUnit2` | | ✓ | | | | |
| `_WorkQuantityUnit3` | | ✓ | | | | |
| `_WorkQuantityUnit4` | | ✓ | | | | |
| `_WorkQuantityUnit5` | | ✓ | | | | |
| `_WorkQuantityUnit6` | | ✓ | | | | |
| `_ActualDurationUnit` | | ✓ | | | | |
| `_BreakDurationUnit` | | ✓ | | | | |
| `_VarianceReason` | | ✓ | | | | |
| `_EmployeeWageGroup` | | ✓ | | | | |
| `_EmployeeSuitability` | | ✓ | | | | |
| `_Employee` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PostingDate` | | ✓ | | | | |
| `_PostingDateYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrderCategory` | `I_MfgOrderCategory` | [0..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ManufacturingOrderSequence` | `I_ManufacturingOrderSequence` | [1..1] |
| `_ManufacturingOrderOperation` | `I_MfgOrderOperationBySemKey` | [1..1] |
| `_FailedConfirmationLog` | `I_MfgOrderFailedConfLog` | [0..1] |
| `_FailedOrderConfirmationGroup` | `I_MfgOrderFailedConfGroup` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMFGORDFAILCONF'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'FailedOrderConfirmation'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.semanticKey: ['ConfirmationApplicationOrigin', 'FailedOrderConfirmationGroup', 'FailedOrderConfirmation']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Failed Confirmation'

define view entity I_MfgOrderFailedConfirmation
  as select from I_FailedOrderConfirmation as afrv

  association [0..1] to I_MfgOrderCategory           as _ManufacturingOrderCategory   on  $projection.ManufacturingOrderCategory = _ManufacturingOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_ManufacturingOrder         as _ManufacturingOrder           on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
  association [1..1] to I_ManufacturingOrderSequence as _ManufacturingOrderSequence   on  $projection.ManufacturingOrder         = _ManufacturingOrderSequence.ManufacturingOrder
                                                                                      and $projection.ManufacturingOrderSequence = _ManufacturingOrderSequence.ManufacturingOrderSequence
  association [1..1] to I_MfgOrderOperationBySemKey  as _ManufacturingOrderOperation  on  $projection.ManufacturingOrder          = _ManufacturingOrderOperation.ManufacturingOrder
                                                                                      and $projection.ManufacturingOrderSequence  = _ManufacturingOrderOperation.ManufacturingOrderSequence
                                                                                      and $projection.ManufacturingOrderOperation = _ManufacturingOrderOperation.ManufacturingOrderOperation
  association [0..1] to I_MfgOrderFailedConfLog      as _FailedConfirmationLog        on  $projection.SequentialPlantDataCollection = _FailedConfirmationLog.SequentialPlantDataCollection
--  to parent/root:
  association [1..1] to I_MfgOrderFailedConfGroup    as _FailedOrderConfirmationGroup on  $projection.ConfirmationApplicationOrigin = _FailedOrderConfirmationGroup.ConfirmationApplicationOrigin
                                                                                      and $projection.FailedOrderConfirmationGroup  = _FailedOrderConfirmationGroup.FailedOrderConfirmationGroup
{
      // Key
      @ObjectModel.foreignKey.association: '_ConfirmationApplOrigin'
  key afrv.ConfirmationApplicationOrigin,
      @ObjectModel.foreignKey.association: '_FailedOrderConfirmationGroup'
  key afrv.FailedOrderConfirmationGroup,
      @ObjectModel.text.element: ['FailedOrderConfirmationText']
  key afrv.FailedOrderConfirmation,

      // Text
      @Semantics.text: true
      afrv.FailedOrderConfirmationText,
 
       // Additionla admin data
      afrv.ConfirmationEntryDate,
      afrv.ConfirmationEntryTime,
      afrv.ConfirmationExternalEntryDate,
      afrv.ConfirmationExternalEntryTime,
      afrv.EnteredByExternalUser,
 
      // Attributes
      afrv.OpenReservationsIsCleared,
      afrv.IsFinalConfirmation,
      @ObjectModel.foreignKey.association: '_FinalConfirmationType'
      afrv.FinalConfirmationType,
      @ObjectModel.foreignKey.association: '_ConfirmationRecordType'
      afrv.OrderConfirmationRecordType,

      // Assignments
      afrv.SequentialPlantDataCollection,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      afrv.ConfirmationGroup,
      @ObjectModel.foreignKey.association: '_ConfirmationCount'
      afrv.ConfirmationCount,
      @ObjectModel.foreignKey.association: '_ManufacturingOrderCategory'
      afrv.OrderCategory as ManufacturingOrderCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      afrv.OrderID       as ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrderSequence'
      afrv.Sequence      as ManufacturingOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrderOperation'      
      afrv.Operation     as ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      afrv.Plant,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      afrv.WorkCenter,
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      afrv.CapacityCategory,
      afrv.CapacityRequirementSplit,
--    @ObjectModel.foreignKey.association: '_TimeSheetAccountingDocument'
      afrv.TimeSheetAccountingDocument,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      afrv.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      afrv.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      afrv.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]  
--    @ObjectModel.foreignKey.association: '_CostCenter'
      afrv.CostCenter,
--    @ObjectModel.foreignKey.association: '_CostObject'
      afrv.CostObject,
--    @ObjectModel.foreignKey.association: '_FundsCenter'
      afrv.FundsCenter,
--    @ObjectModel.foreignKey.association: '_Fund'
      afrv.Fund,

      // Assignments HR
      @ObjectModel.foreignKey.association: '_PersonWorkAgreement'
      afrv.Personnel,
      afrv.TimeRecording,
      afrv.EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      afrv.EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'      
      afrv.EmployeeSuitability,
      afrv.NumberOfEmployees,

      // Dates
      @Semantics.businessDate.at: true
      afrv.PostingDate,
      @Semantics.calendar.year: true
      afrv.PostingDateYear,

      // Time Events
      afrv.ConfirmedExecutionStartDate,
      afrv.ConfirmedExecutionStartTime,
      afrv.ConfirmedSetupEndDate,
      afrv.ConfirmedSetupEndTime,
      afrv.ConfirmedProcessingStartDate,
      afrv.ConfirmedProcessingStartTime,
      afrv.ConfirmedProcessingEndDate,
      afrv.ConfirmedProcessingEndTime,
      afrv.ConfirmedTeardownStartDate,
      afrv.ConfirmedTeardownStartTime,
      afrv.ConfirmedExecutionEndDate,
      afrv.ConfirmedExecutionEndTime,
      afrv.ActualForecastEndDate,
      afrv.ActualForecastEndTime,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmationUnit'
      afrv.ConfirmationUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      afrv.ConfirmationYieldQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      afrv.ConfirmationScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      afrv.ConfirmationReworkQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      afrv.ConfirmationTotalQuantity,
      @ObjectModel.foreignKey.association: '_VarianceReason'
      afrv.VarianceReasonCode,

      // Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit1'
      afrv.OpWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity1,
      afrv.NoFurtherOpWorkQuantity1IsExpd,
      
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit2'
      afrv.OpWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity2,
      afrv.NoFurtherOpWorkQuantity2IsExpd,
      
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit3'
      afrv.OpWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity3,
      afrv.NoFurtherOpWorkQuantity3IsExpd,
      
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit4'
      afrv.OpWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity4,
      afrv.NoFurtherOpWorkQuantity4IsExpd,
      
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit5'
      afrv.OpWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity5,
      afrv.NoFurtherOpWorkQuantity5IsExpd,
      
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit6'
      afrv.OpWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'
      @Aggregation.default: #SUM
      afrv.OpConfirmedWorkQuantity6,
      afrv.NoFurtherOpWorkQuantity6IsExpd,

      // Business Process
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      afrv.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessProcessUnit'
      afrv.BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      @Aggregation.default: #SUM 
      afrv.BusinessProcessConfirmedQty,
      afrv.NoFurtherBusinessProcQtyIsExpd,
      afrv.BusinessProcRemainingQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcRemainingQtyUnit'
      @Aggregation.default: #SUM
      afrv.BusinessProcessRemainingQty,

      // Durations
      @ObjectModel.foreignKey.association: '_ActualDurationUnit'
      afrv.ActualDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'BREAKDURATIONUNIT' 
      afrv.ActualDuration,
      @ObjectModel.foreignKey.association: '_BreakDurationUnit'
      afrv.BreakDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'BREAKDURATIONUNIT' 
      afrv.ConfirmedBreakDuration,
 
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _FailedOrderConfirmationGroup,
      _ConfirmationApplOrigin,
      _ConfirmationRecordType,
      _FinalConfirmationType,
      _ConfirmationGroup,
      _ConfirmationCount,
      _ManufacturingOrderCategory,
      _ManufacturingOrder,
      _ManufacturingOrderSequence,
      _ManufacturingOrderOperation,
      _Plant,
      _WorkCenter,
      _CapacityCategory,
      _FailedConfirmationLog,
      _BusinessArea,
      _CompanyCode,
      _ControllingArea,
      _CostCenter,
      _FundsCenter,
      _Fund,
      _BusinessProcess,
      _BusinessProcessUnit,
      _ConfirmationUnit,
      _WorkQuantityUnit1,
      _WorkQuantityUnit2,
      _WorkQuantityUnit3,
      _WorkQuantityUnit4,
      _WorkQuantityUnit5,
      _WorkQuantityUnit6,
      _ActualDurationUnit,
      _BreakDurationUnit,
      _VarianceReason,
      _EmployeeWageGroup,
      _EmployeeSuitability,
      _Employee,
      _PersonWorkAgreement,
      _PostingDate,
      _PostingDateYear
}
where ( ConfirmationApplicationOrigin = '2' or
        ConfirmationApplicationOrigin = '6' or //Manufacturing orders only
        ConfirmationApplicationOrigin = '8' ); //including results recording
```
