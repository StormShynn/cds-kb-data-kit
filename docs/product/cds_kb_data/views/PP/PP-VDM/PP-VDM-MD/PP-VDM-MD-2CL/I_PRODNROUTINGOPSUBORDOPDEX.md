---
name: I_PRODNROUTINGOPSUBORDOPDEX
description: "Prodn Rtg Op Subordinate Operation"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGOPSUBORDOPDEX')/$value
semantic_en: "Prodn Rtg Op Subordinate Operation"
semantic_vi: "Prodn Rtg Op Subordinate Operation — CDS view giao diện dựa trên P_ProdnRoutingOpSubordOpDEX."
keywords:
  - "prodn"
  - "rtg"
  - "subordinate"
  - "operation"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "routing"
  - "group"
  - "version"
  - "work"
  - "center"
  - "internal"
tags:
  - PP
  - bo:project
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNROUTINGOPSUBORDOPDEX

**Prodn Rtg Op Subordinate Operation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGOPSUBORDOPDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRoutingOpIntID` | ✓ | |  |  | `NUMC(8)` | Number of the Task List Node |
| `ProductionRoutingOpIntVersion` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `OperationExternalID` |  | |  |  | `CHAR(8)` | External Operation ID |
| `Operation` |  | |  |  | `CHAR(4)` | Operation or Phase Number |
| `SuperiorOperationInternalID` |  | |  |  | `NUMC(8)` | Node Number of the Superior Operation |
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
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `InspSbstCompletionConfirmation` |  | |  |  | `CHAR(1)` | Flow Variants for Inspection Point Completion |
| `InspSbstHasNoTimeOrQuantity` |  | |  |  | `CHAR(1)` | Interval Without Reference to Time or Quantity |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `_ProductionRouting` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGOPSUBORDOPDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGOPSUBORDOPDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductionRoutingOpIntVersion'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic: true
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingOpSubordOp'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@EndUserText.label: 'Prodn Rtg Op Subordinate Operation'

define view entity I_ProdnRoutingOpSubordOpDEX
  as select from P_ProdnRoutingOpSubordOpDEX
  association [1..*] to I_ProductionRoutingDEX       as _ProductionRouting       on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                 and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader          on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                 and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate      <= _ProdnRtgHeader.ValidityEndDate
//
//  association [1..*] to I_ProdnRtgSqncOpAssgmtDEX    as _ProdnRtgSqncOpAssgmt    on  $projection.BillOfOperationsType     =  _ProdnRtgSqncOpAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgSqncOpAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgSqncOpAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgSqncOpAssgmt.ValidityEndDate
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgSqncOpAssgmt.ValidityStartDate
//
//  association [0..*] to I_ProdnRoutingCompAllocDEX   as _ProdnRoutingCompAlloc   on  $projection.BillOfOperationsType     =  _ProdnRoutingCompAlloc.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRoutingCompAlloc.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRoutingCompAlloc.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRoutingCompAlloc.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRoutingCompAlloc.ValidityEndDate
//
//  association [0..*] to I_ProdnRtgMiscPRTAssgmtDEX   as _ProdnRtgMiscPRTAssgmt   on  $projection.BillOfOperationsType     =  _ProdnRtgMiscPRTAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgMiscPRTAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgMiscPRTAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgMiscPRTAssgmt.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgMiscPRTAssgmt.ValidityEndDate
//
//  //Doc PRT Assignment
//  association [0..*] to I_ProdnRtgDocPRTAssgmtDEX    as _ProdnRtgDocPRTAssgmt    on  $projection.BillOfOperationsType     =  _ProdnRtgDocPRTAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgDocPRTAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgDocPRTAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgDocPRTAssgmt.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgDocPRTAssgmt.ValidityEndDate
//
//  //Matl PRT Assignment
//  association [0..*] to I_ProdnRtgMatlPRTAssgmtDEX   as _ProdnRtgMatlPRTAssgmt   on  $projection.BillOfOperationsType     =  _ProdnRtgMatlPRTAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgMatlPRTAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgMatlPRTAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgMatlPRTAssgmt.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgMatlPRTAssgmt.ValidityEndDate
//
//  //Equip PRT Assignment
//  association [0..*] to I_ProdnRtgEquipPRTAssgmtDEX  as _ProdnRtgEquipPRTAssgmt  on  $projection.BillOfOperationsType     =  _ProdnRtgEquipPRTAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgEquipPRTAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgEquipPRTAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgEquipPRTAssgmt.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgEquipPRTAssgmt.ValidityEndDate
//
//  -- Inspection Characteristics
//  association [0..*] to I_ProdnRtgInspCharcAssgmtDEX as _ProdnRtgInspCharcAssgmt on  $projection.BillOfOperationsType     =  _ProdnRtgInspCharcAssgmt.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup   =  _ProdnRtgInspCharcAssgmt.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRoutingOpIntID =  _ProdnRtgInspCharcAssgmt.ProductionRoutingOpIntID
//                                                                                 and $projection.ValidityEndDate          >= _ProdnRtgInspCharcAssgmt.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate        <= _ProdnRtgInspCharcAssgmt.ValidityEndDate

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key ProductionRoutingOpIntID,
  key ProductionRoutingOpIntVersion,

      WorkCenterInternalID,
      WorkCenterTypeCode,
      IsDeleted,
      IsImplicitlyDeleted,

      OperationExternalID,
      Operation,
      SuperiorOperationInternalID,
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
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsBreakDurnUnit'
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
      @Semantics.booleanIndicator: true
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
      FactoryCalendar,
      InspSbstCompletionConfirmation,
      @Semantics.booleanIndicator: true
      InspSbstHasNoTimeOrQuantity,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      /* Associations */
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOOperationInternalID,
      _ProductionRouting
//      _ProdnRtgHeader,
//      _ProdnRtgSqncOpAssgmt,
//      _ProdnRoutingCompAlloc,
//      _ProdnRtgMiscPRTAssgmt,
//      _ProdnRtgDocPRTAssgmt,
//      _ProdnRtgMatlPRTAssgmt,
//      _ProdnRtgEquipPRTAssgmt,
//      _ProdnRtgInspCharcAssgmt
}
```
