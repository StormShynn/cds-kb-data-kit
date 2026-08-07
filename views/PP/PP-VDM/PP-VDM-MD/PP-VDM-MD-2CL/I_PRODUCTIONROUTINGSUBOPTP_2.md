---
name: I_PRODUCTIONROUTINGSUBOPTP_2
description: Productionroutingsuboptp 2
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
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONROUTINGSUBOPTP_2

**Productionroutingsuboptp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |
| `ProductionRouting` | ✓ | |  |  |
| `ProductionRoutingSequence` | ✓ | |  |  |
| `ProductionRoutingOpIntID` | ✓ | |  |  |
| `ProdnRtgSubOpIntVersion` | ✓ | |  |  |
| `SuperiorOperationInternalID` |  | |  |  |
| `Operation` |  | |  |  |
| `OperationText` |  | |  |  |
| `LongTextLanguageCode` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `Plant` |  | |  |  |
| `OperationControlProfile` |  | |  |  |
| `OperationStandardTextCode` |  | |  |  |
| `OperationReferenceQuantity` |  | |  |  |
| `OperationUnit` |  | |  |  |
| `OpQtyToBaseQtyNmrtr` |  | |  |  |
| `OpQtyToBaseQtyDnmntr` |  | |  |  |
| `StandardWorkQuantity1` |  | |  |  |
| `StandardWorkQuantityUnit1` |  | |  |  |
| `CostCtrActivityType1` |  | |  |  |
| `StandardWorkQuantity2` |  | |  |  |
| `StandardWorkQuantityUnit2` |  | |  |  |
| `CostCtrActivityType2` |  | |  |  |
| `StandardWorkQuantity3` |  | |  |  |
| `StandardWorkQuantityUnit3` |  | |  |  |
| `CostCtrActivityType3` |  | |  |  |
| `StandardWorkQuantity4` |  | |  |  |
| `StandardWorkQuantityUnit4` |  | |  |  |
| `CostCtrActivityType4` |  | |  |  |
| `StandardWorkQuantity5` |  | |  |  |
| `StandardWorkQuantityUnit5` |  | |  |  |
| `CostCtrActivityType5` |  | |  |  |
| `StandardWorkQuantity6` |  | |  |  |
| `StandardWorkQuantityUnit6` |  | |  |  |
| `CostCtrActivityType6` |  | |  |  |
| `NumberOfTimeTickets` |  | |  |  |
| `EmployeeWageType` |  | |  |  |
| `EmployeeWageGroup` |  | |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |
| `NumberOfEmployees` |  | |  |  |
| `OperationCostingRelevancyType` |  | |  |  |
| `BusinessProcess` |  | |  |  |
| `OpIsExtlyProcdWithSubcontrg` |  | |  |  |
| `InspectionLotType` |  | |  |  |
| `PurchasingInfoRecord` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchaseContract` |  | |  |  |
| `PurchaseContractItem` |  | |  |  |
| `PurchasingInfoRecdAddlGrpgName` |  | |  |  |
| `PlannedDeliveryDuration` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `Supplier` |  | |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |
| `CostElement` |  | |  |  |
| `OpExternalProcessingPrice` |  | |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `OperationSetupType` |  | |  |  |
| `OperationSetupGroupCategory` |  | |  |  |
| `OperationSetupGroup` |  | |  |  |
| `CapacityCategoryCode` |  | |  |  |
| `OperationScrapPercent` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `PlainLongText` |  | |  |  |
| `_NonSqncTP` | | ✓ | | |
| `_ProdnRtgTP` | | ✓ | | |
| `_Header` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Suboperation - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProductionRoutingSubopTP_2
  as projection on R_ProductionRoutingSubopTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
  key ProductionRoutingOpIntID,
  key ProdnRtgSubOpIntVersion,
      SuperiorOperationInternalID,
      /* Operation Data */
      Operation,
      @Semantics.text: true
      OperationText,
      LongTextLanguageCode,
      /* Work Center */
      WorkCenterTypeCode, // From Operation
      WorkCenterInternalID, // From Operation

      /* Standard Value */
      Plant,
      OperationControlProfile,
      OperationStandardTextCode,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationReferenceQuantity,
      OperationUnit,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      StandardWorkQuantity1,
      StandardWorkQuantityUnit1,
      CostCtrActivityType1,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      StandardWorkQuantity2,
      StandardWorkQuantityUnit2,
      CostCtrActivityType2,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      StandardWorkQuantity3,
      StandardWorkQuantityUnit3,
      CostCtrActivityType3,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      StandardWorkQuantity4,
      StandardWorkQuantityUnit4,
      CostCtrActivityType4,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      StandardWorkQuantity5,
      StandardWorkQuantityUnit5,
      CostCtrActivityType5,

      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      StandardWorkQuantity6,
      StandardWorkQuantityUnit6,
      CostCtrActivityType6,

      /* General Data */
      NumberOfTimeTickets,
      @Consumption.hidden: true // For Cloud
      EmployeeWageType,
      @Consumption.hidden: true // For Cloud
      EmployeeWageGroup,
      NumberOfConfirmationSlips,
      @Consumption.hidden: true // For Cloud
      NumberOfEmployees,
      OperationCostingRelevancyType,
      BusinessProcess,
      OpIsExtlyProcdWithSubcontrg,
      InspectionLotType,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchaseContract,
      PurchaseContractItem,
      PurchasingInfoRecdAddlGrpgName,
      PlannedDeliveryDuration,
      MaterialGroup,
      PurchasingGroup,
      Supplier,
      NumberOfOperationPriceUnits,
      CostElement,
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      OpExternalProcessingCurrency,

      /* Administrative Data */
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      ChangeNumber,
      OperationSetupType,
      OperationSetupGroupCategory,
      OperationSetupGroup,
      CapacityCategoryCode,
      OperationScrapPercent,
      ChangedDateTime,
      @Semantics.text: true
      PlainLongText,

      /* Associations */
      _NonSqncTP  : redirected to parent I_ProdnRtgNonHistoricSqncTP_2,
      _ProdnRtgTP : redirected to I_ProductionRoutingTP_2,
      _Header     : redirected to I_ProductionRoutingHeaderTP_2
}
```
