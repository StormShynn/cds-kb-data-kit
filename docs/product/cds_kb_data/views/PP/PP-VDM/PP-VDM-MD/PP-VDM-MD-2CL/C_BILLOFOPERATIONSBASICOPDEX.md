---
name: C_BILLOFOPERATIONSBASICOPDEX
description: "Bill of Operations Operation"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLOFOPERATIONSBASICOPDEX')/$value
semantic_en: "Bill of Operations Operation"
semantic_vi: "Bill of Operations Operation — CDS view tiêu dùng dựa trên I_BillOfOperationsOpBasic."
keywords:
  - "bill"
  - "operations"
  - "operation"
  - "type"
  - "group"
  - "internal"
  - "version"
  - "counter"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - consumption-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - bo:salesorder
---
# C_BILLOFOPERATIONSBASICOPDEX

**Bill of Operations Operation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLOFOPERATIONSBASICOPDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `BOOOperationInternalID` | ✓ | |  |  | `NUMC(8)` | Number of the Task List Node |
| `BOOOpInternalVersionCounter` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `SuperiorOperationInternalID` |  | |  |  | `NUMC(8)` | Node Number of the Superior Operation |
| `BOORefOperationIncrementValue` |  | |  |  | `DEC(3)` | Increment between referenced operations |
| `OperationExternalID` |  | |  |  | `CHAR(8)` | External Operation ID |
| `Operation` |  | |  | `Operation_2` | `CHAR(4)` | Operation or Phase Number |
| `OperationText` |  | |  |  | `CHAR(40)` | Operation Short Text |
| `LongTextLanguageCode` |  | |  |  | `LANG(1)` | Language Key |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `OperationControlProfile` |  | |  |  | `CHAR(4)` | Control Key |
| `OperationStandardTextCode` |  | |  |  | `CHAR(7)` | Standard Text Key |
| `BillOfOperationsRefType` |  | |  |  | `CHAR(1)` | Type of the referenced task list |
| `BillOfOperationsRefGroup` |  | |  |  | `CHAR(8)` | Referenced Bill of Operations Group |
| `BillOfOperationsRefVariant` |  | |  |  | `CHAR(2)` | Referenced Bill of Operations Variant |
| `LineSegmentTakt` |  | |  |  | `NUMC(4)` | Takt within a Line Segment |
| `OperationStdWorkQtyGrpgCat` |  | |  |  | `CHAR(1)` | Operation: Standard Work Quantity Grouping Category |
| `OrderHasNoSubOperations` |  | |  |  | `CHAR(1)` | Suboperations Do Not Apply to Order |
| `OperationReferenceQuantity` |  | |  |  | `QUAN(13)` | Base Quantity |
| `OperationUnit` |  | |  |  | `UNIT(3)` | Unit of measure for activity |
| `OpQtyToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Converting Routing and Operation UoM |
| `OpQtyToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Converting Routing and Operation UoM |
| `BillOfOperationsBreakDuration` |  | |  |  | `QUAN(9)` | Break Time |
| `BillOfOperationsBreakDurnUnit` |  | |  |  | `UNIT(3)` | Unit for a Break Time |
| `StandardWorkQuantity1` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit1` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType1` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode1` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `StandardWorkQuantity2` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit2` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType2` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode2` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `StandardWorkQuantity3` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit3` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType3` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode3` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `StandardWorkQuantity4` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit4` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType4` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode4` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `StandardWorkQuantity5` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit5` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType5` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode5` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `StandardWorkQuantity6` |  | |  |  | `QUAN(9)` | Standard Value |
| `StandardWorkQuantityUnit6` |  | |  |  | `UNIT(3)` | Unit of Measurement of Standard Value |
| `CostCtrActivityType6` |  | |  |  | `CHAR(6)` | Activity Type |
| `PerfEfficiencyRatioCode6` |  | |  |  | `CHAR(3)` | Key for performance efficiency rate |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `LeadTimeReductionStrategy` |  | |  |  | `CHAR(2)` | Reduction Strategy per Operation |
| `TeardownAndWaitIsParallel` |  | |  |  | `CHAR(1)` | Teardown and Wait Occur in Parallel |
| `MaximumWaitDuration` |  | |  |  | `QUAN(9)` | Maximum Wait Time |
| `MaximumWaitDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the Maximum Wait Time |
| `MinimumWaitDuration` |  | |  |  | `QUAN(9)` | Minimum Wait Time |
| `MinimumWaitDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the Required Wait Time |
| `StandardQueueDuration` |  | |  |  | `QUAN(9)` | Standard Queue Time |
| `StandardQueueDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the Standard Queue Time |
| `MinimumQueueDuration` |  | |  |  | `QUAN(9)` | Minimum Queue Time |
| `MinimumQueueDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the Minimum Queue Time |
| `StandardMoveDuration` |  | |  |  | `QUAN(9)` | Standard Move Time |
| `StandardMoveDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the standard move time |
| `MinimumMoveDuration` |  | |  |  | `QUAN(9)` | Minimum Move Time |
| `MinimumMoveDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the minimum move time |
| `OperationSplitIsRequired` |  | |  |  | `CHAR(1)` | Splitting Required |
| `MaximumNumberOfSplits` |  | |  |  | `DEC(3)` | Maximum Number of Splits |
| `MinProcessingDurationPerSplit` |  | |  |  | `QUAN(9)` | Minimum Processing Time |
| `MinProcessingDurnPerSplitUnit` |  | |  |  | `UNIT(3)` | Unit for the Minimum Processing Time |
| `OperationOverlappingIsRequired` |  | |  |  | `CHAR(1)` | Operation Overlapping is Required |
| `OperationOverlappingIsPossible` |  | |  |  | `CHAR(1)` | Operation Overlapping is Allowed |
| `OperationsIsAlwaysOverlapping` |  | |  |  | `CHAR(1)` | Flow Manufacturing |
| `OverlapMinimumDuration` |  | |  |  | `QUAN(9)` | Minimum Overlap Time |
| `OverlapMinimumDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the Minimum Overlap Time |
| `OverlapMinimumTransferQty` |  | |  |  | `QUAN(13)` | Minimum Send-Ahead Quantity |
| `OverlapMinimumTransferQtyUnit` |  | |  |  | `UNIT(3)` | Unit of measure for activity |
| `StartDateOffsetDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Offset to Start |
| `StartDateOffsetDuration` |  | |  |  | `QUAN(5)` | Offset to sub-operation start |
| `EndDateOffsetDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Offset to Finish |
| `EndDateOffsetDuration` |  | |  |  | `QUAN(5)` | Offset to sub-operation finish |
| `OperationScrapPercent` |  | |  |  | `DEC(5)` | Scrap factor |
| `NumberOfTimeTickets` |  | |  |  | `DEC(3)` | Number of Time Tickets |
| `NumberOfConfirmationSlips` |  | |  |  | `NUMC(3)` | Number of Confirmation Slips |
| `EmployeeWageGroup` |  | |  |  | `CHAR(3)` | Wage Group |
| `EmployeeWageType` |  | |  |  | `CHAR(4)` | Wage type |
| `EmployeeSuitability` |  | |  |  | `CHAR(2)` | Suitability |
| `NumberOfEmployees` |  | |  |  | `DEC(5)` | Number of employees |
| `OperationSetupType` |  | |  |  | `CHAR(2)` | Setup Type Key |
| `OperationSetupGroupCategory` |  | |  |  | `CHAR(10)` | Setup group category |
| `OperationSetupGroup` |  | |  |  | `CHAR(10)` | Setup group key |
| `OperationCostingRelevancyType` |  | |  |  | `CHAR(1)` | Operation Costing Relevancy Type |
| `IsNonValueAddedOperation` |  | |  |  | `CHAR(1)` | Indicator for Non-Value-Added Operations |
| `OpIsExtlyProcdWithSubcontrg` |  | |  |  | `CHAR(1)` | Indicator: External Processing Operation with Subcontracting |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchaseContract` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `PurchasingInfoRecdAddlGrpgName` |  | |  |  | `CHAR(10)` | Sort Term for Non-Stock Info Records |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group for External Processing Activity |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PlannedDeliveryDuration` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `NumberOfOperationPriceUnits` |  | |  |  | `DEC(5)` | Price Unit |
| `OpExternalProcessingPrice` |  | |  |  | `CURR(11)` | Net Price in Purchasing Info Record |
| `InspectionLotType` |  | |  |  | `CHAR(8)` | Inspection Type |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `OpExternalProcessingCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CapacityCategoryCode` |  | |  |  | `CHAR(3)` | Capacity category |
| `BOOOperationIsPhase` |  | |  |  | `CHAR(1)` | Indicator: Phase |
| `BOOPhaseSuperiorOpInternalID` |  | |  |  | `NUMC(8)` | Number of the Task List Node |
| `ControlRecipeDestination` |  | |  |  | `CHAR(2)` | Control Recipe Destination |
| `InspResultRecordingView` |  | |  |  | `CHAR(2)` | Recording View |
| `MinimumDuration` |  | |  |  | `QUAN(5)` | Minimum activity duration |
| `MinimumDurationUnit` |  | |  |  | `UNIT(3)` | Unit for the minimum duration |
| `OperationWorkPercent` |  | |  |  | `INT1(3)` | Work percentage |
| `CapRqmtsDistributionFunction` |  | |  |  | `CHAR(2)` | Distribution function for capacity requirements |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `CapacityRequirementDistrKey` |  | |  |  | `CHAR(8)` | Distr.cap.reqmts (plant maint.,process order, network) |
| `InspSbstCompletionConfirmation` |  | |  |  | `CHAR(1)` | Flow Variants for Inspection Point Completion |
| `InspSbstHasNoTimeOrQuantity` |  | |  |  | `CHAR(1)` | Interval Without Reference to Time or Quantity |
| `OperationStandardDuration` |  | |  |  | `QUAN(5)` | Normal Duration of Activity |
| `OperationStandardDurationUnit` |  | |  |  | `UNIT(3)` | Normal Duration/Unit |
| `NumberOfCapacities` |  | |  |  | `INT1(3)` | Number of capacities required |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OperationCalculationControl` |  | |  |  | `CHAR(1)` | Key for calculation |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `PurchaseOrderQty` |  | |  |  | `QUAN(13)` | Purchase Order Quantity: Operation |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Operation order quantity unit |
| `PurchasingInfoRecordCategory` |  | |  |  | `CHAR(1)` | Purchasing info record category |
| `FunctionalLocation` |  | |  | `cast(FunctionalLocation as vdm_eam_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FreeDefinedTableFieldSemantic` |  | |  |  | `CHAR(7)` | Key word ID for user-defined fields |
| `FreeDefinedAttribute01` |  | |  |  | `CHAR(20)` | User field with 20 characters |
| `FreeDefinedAttribute02` |  | |  |  | `CHAR(20)` | User field with 20 characters |
| `FreeDefinedAttribute03` |  | |  |  | `CHAR(10)` | User field with 10 characters |
| `FreeDefinedAttribute04` |  | |  |  | `CHAR(10)` | User field with 10 characters |
| `FreeDefinedQuantity1` |  | |  |  | `QUAN(13)` | User field for quantity (length 10.3) |
| `FreeDefinedQuantity1Unit` |  | |  |  | `UNIT(3)` | User field: Unit for quantity fields |
| `FreeDefinedQuantity2` |  | |  |  | `QUAN(13)` | User field for quantity (length 10.3) |
| `FreeDefinedQuantity2Unit` |  | |  |  | `UNIT(3)` | User field: Unit for quantity fields |
| `FreeDefinedAmount1` |  | |  | `cast(FreeDefinedAmount1 as vdm_usrcurr )` | `CURR(13)` | User-defined field for values |
| `FreeDefinedAmount1Currency` |  | |  |  | `CUKY(5)` | User field: Unit for value fields |
| `FreeDefinedAmount2` |  | |  | `cast(FreeDefinedAmount2 as vdm_usrcurr )` | `CURR(13)` | User-defined field for values |
| `FreeDefinedAmount2Currency` |  | |  |  | `CUKY(5)` | User field: Unit for value fields |
| `FreeDefinedDate1` |  | |  |  | `DATS(8)` | User field for date |
| `FreeDefinedDate2` |  | |  |  | `DATS(8)` | User field for date |
| `FreeDefinedIndicator1` |  | |  |  | `CHAR(1)` | User-defined field: Indicator for reports |
| `FreeDefinedIndicator2` |  | |  |  | `CHAR(1)` | User-defined field: Indicator for reports |
| `MaintOperationExecStageCode` |  | |  |  | `CHAR(10)` | PRE MAIN POST |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `OpPlannedWorkQuantity` |  | |  |  | `QUAN(7)` | Work involved in the activity |
| `OpWorkQuantityUnit` |  | |  |  | `UNIT(3)` | Unit for Work |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLOFOPERATIONSBASICOPDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLOFOPERATIONSBASICOPDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #CONSUMPTION
@Analytics: {dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic : true
       }
     },
internalName: #LOCAL
}
@ObjectModel.representativeKey: 'BOOOpInternalVersionCounter'
@EndUserText.label: 'Bill of Operations Operation'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name:'ProductionRoutingOperation'
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity C_BillOfOperationsBasicOpDEX
  as select from I_BillOfOperationsOpBasic
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key BOOOperationInternalID,
      @ObjectModel.text.element: ['OperationText']
  key BOOOpInternalVersionCounter,
      BillOfOperationsVersion,
      WorkCenterInternalID,
      WorkCenterTypeCode,
      IsDeleted,
      IsImplicitlyDeleted,
      SuperiorOperationInternalID,
      BOORefOperationIncrementValue,
      OperationExternalID,
      Operation_2                                                as Operation,
      @Semantics.text: true
      OperationText,
      LongTextLanguageCode,
      Plant,
      OperationControlProfile,
      OperationStandardTextCode,
      BillOfOperationsRefType,
      BillOfOperationsRefGroup,
      BillOfOperationsRefVariant,
      LineSegmentTakt,
      OperationStdWorkQtyGrpgCat,
      OrderHasNoSubOperations,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationReferenceQuantity,
      OperationUnit,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,
      @Semantics.quantity.unitOfMeasure:'BillOfOperationsBreakDurnUnit'
      BillOfOperationsBreakDuration,
      BillOfOperationsBreakDurnUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      StandardWorkQuantity1,
      StandardWorkQuantityUnit1,
      CostCtrActivityType1,
      PerfEfficiencyRatioCode1,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      StandardWorkQuantity2,
      StandardWorkQuantityUnit2,
      CostCtrActivityType2,
      PerfEfficiencyRatioCode2,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      StandardWorkQuantity3,
      StandardWorkQuantityUnit3,
      CostCtrActivityType3,
      PerfEfficiencyRatioCode3,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      StandardWorkQuantity4,
      StandardWorkQuantityUnit4,
      CostCtrActivityType4,
      PerfEfficiencyRatioCode4,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      StandardWorkQuantity5,
      StandardWorkQuantityUnit5,
      CostCtrActivityType5,
      PerfEfficiencyRatioCode5,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      StandardWorkQuantity6,
      StandardWorkQuantityUnit6,
      CostCtrActivityType6,
      PerfEfficiencyRatioCode6,
      BusinessProcess,
      LeadTimeReductionStrategy,
      TeardownAndWaitIsParallel,
      @Semantics.quantity.unitOfMeasure: 'MaximumWaitDurationUnit'
      MaximumWaitDuration,
      MaximumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumWaitDurationUnit'
      MinimumWaitDuration,
      MinimumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardQueueDurationUnit'
      StandardQueueDuration,
      StandardQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumQueueDurationUnit'
      MinimumQueueDuration,
      MinimumQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardMoveDurationUnit'
      StandardMoveDuration,
      StandardMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumMoveDurationUnit'
      MinimumMoveDuration,
      MinimumMoveDurationUnit,
      OperationSplitIsRequired,
      MaximumNumberOfSplits,
      @Semantics.quantity.unitOfMeasure: 'MinProcessingDurnPerSplitUnit'
      MinProcessingDurationPerSplit,
      MinProcessingDurnPerSplitUnit,
      OperationOverlappingIsRequired,
      OperationOverlappingIsPossible,
      OperationsIsAlwaysOverlapping,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumDurationUnit'
      OverlapMinimumDuration,
      OverlapMinimumDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumTransferQtyUnit'
      OverlapMinimumTransferQty,
      OverlapMinimumTransferQtyUnit,
      StartDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
      StartDateOffsetDuration,
      EndDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
      EndDateOffsetDuration,
      OperationScrapPercent,
      NumberOfTimeTickets,
      NumberOfConfirmationSlips,
      EmployeeWageGroup,
      EmployeeWageType,
      EmployeeSuitability,
      NumberOfEmployees,
      OperationSetupType,
      OperationSetupGroupCategory,
      OperationSetupGroup,
      OperationCostingRelevancyType,
      @Semantics.booleanIndicator
      IsNonValueAddedOperation,
      @Semantics.booleanIndicator
      OpIsExtlyProcdWithSubcontrg,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchaseContract,
      PurchaseContractItem,
      PurchasingInfoRecdAddlGrpgName,
      MaterialGroup,
      PurchasingGroup,
      Supplier,
      PlannedDeliveryDuration,
      NumberOfOperationPriceUnits,
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      InspectionLotType,
      CostElement,
      OpExternalProcessingCurrency,
      CapacityCategoryCode,
      BOOOperationIsPhase,
      BOOPhaseSuperiorOpInternalID,
      ControlRecipeDestination,
      InspResultRecordingView,
      @Semantics.quantity.unitOfMeasure: 'MinimumDurationUnit'
      MinimumDuration,
      MinimumDurationUnit,
      OperationWorkPercent,
      CapRqmtsDistributionFunction,
      CompanyCode,
      FactoryCalendar,
      CapacityRequirementDistrKey,
      InspSbstCompletionConfirmation,
      @Semantics.booleanIndicator
      InspSbstHasNoTimeOrQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationStandardDurationUnit'
      OperationStandardDuration,
      OperationStandardDurationUnit,
      NumberOfCapacities,
      OperationSystemCondition,
      CostCtrActivityType,
      OperationCalculationControl,
      Assembly,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      PurchaseOrderQty,
      PurchaseOrderQuantityUnit,
      PurchasingInfoRecordCategory,
      cast(FunctionalLocation as vdm_eam_tplnr preserving type ) as FunctionalLocation,
      Equipment,
      FreeDefinedTableFieldSemantic,
      FreeDefinedAttribute01,
      FreeDefinedAttribute02,
      FreeDefinedAttribute03,
      FreeDefinedAttribute04,
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity1Unit'
      FreeDefinedQuantity1,
      FreeDefinedQuantity1Unit,
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity2Unit'
      FreeDefinedQuantity2,
      FreeDefinedQuantity2Unit,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency'
      cast(FreeDefinedAmount1 as vdm_usrcurr ) as FreeDefinedAmount1,
      FreeDefinedAmount1Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      cast(FreeDefinedAmount2 as vdm_usrcurr )  as FreeDefinedAmount2,
      FreeDefinedAmount2Currency,
      FreeDefinedDate1,
      FreeDefinedDate2,
      FreeDefinedIndicator1,
      FreeDefinedIndicator2,
      MaintOperationExecStageCode,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit'
      OpPlannedWorkQuantity,
      OpWorkQuantityUnit,
      /* Associations */

      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOOperationInternalID
}
```
