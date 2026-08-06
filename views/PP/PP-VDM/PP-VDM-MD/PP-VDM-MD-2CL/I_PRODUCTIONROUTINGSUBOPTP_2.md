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

| Field | Data Source |
|---|---|
| key `ProductionRoutingGroup` | `ProductionRoutingGroup` |
| key `ProductionRouting` | `ProductionRouting` |
| key `ProductionRoutingSequence` | `ProductionRoutingSequence` |
| key `ProductionRoutingOpIntID` | `ProductionRoutingOpIntID` |
| key `ProdnRtgSubOpIntVersion` | `ProdnRtgSubOpIntVersion` |
| `SuperiorOperationInternalID` | `SuperiorOperationInternalID` |
| `Operation` | `Operation` |
| `OperationText` | `OperationText` |
| `LongTextLanguageCode` | `LongTextLanguageCode` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `Plant` | `Plant` |
| `OperationControlProfile` | `OperationControlProfile` |
| `OperationStandardTextCode` | `OperationStandardTextCode` |
| `OperationReferenceQuantity` | `OperationReferenceQuantity` |
| `OperationUnit` | `OperationUnit` |
| `OpQtyToBaseQtyNmrtr` | `OpQtyToBaseQtyNmrtr` |
| `OpQtyToBaseQtyDnmntr` | `OpQtyToBaseQtyDnmntr` |
| `StandardWorkQuantity1` | `StandardWorkQuantity1` |
| `StandardWorkQuantityUnit1` | `StandardWorkQuantityUnit1` |
| `CostCtrActivityType1` | `CostCtrActivityType1` |
| `StandardWorkQuantity2` | `StandardWorkQuantity2` |
| `StandardWorkQuantityUnit2` | `StandardWorkQuantityUnit2` |
| `CostCtrActivityType2` | `CostCtrActivityType2` |
| `StandardWorkQuantity3` | `StandardWorkQuantity3` |
| `StandardWorkQuantityUnit3` | `StandardWorkQuantityUnit3` |
| `CostCtrActivityType3` | `CostCtrActivityType3` |
| `StandardWorkQuantity4` | `StandardWorkQuantity4` |
| `StandardWorkQuantityUnit4` | `StandardWorkQuantityUnit4` |
| `CostCtrActivityType4` | `CostCtrActivityType4` |
| `StandardWorkQuantity5` | `StandardWorkQuantity5` |
| `StandardWorkQuantityUnit5` | `StandardWorkQuantityUnit5` |
| `CostCtrActivityType5` | `CostCtrActivityType5` |
| `StandardWorkQuantity6` | `StandardWorkQuantity6` |
| `StandardWorkQuantityUnit6` | `StandardWorkQuantityUnit6` |
| `CostCtrActivityType6` | `CostCtrActivityType6` |
| `NumberOfTimeTickets` | `NumberOfTimeTickets` |
| `EmployeeWageType` | `EmployeeWageType` |
| `EmployeeWageGroup` | `EmployeeWageGroup` |
| `NumberOfConfirmationSlips` | `NumberOfConfirmationSlips` |
| `NumberOfEmployees` | `NumberOfEmployees` |
| `OperationCostingRelevancyType` | `OperationCostingRelevancyType` |
| `BusinessProcess` | `BusinessProcess` |
| `OpIsExtlyProcdWithSubcontrg` | `OpIsExtlyProcdWithSubcontrg` |
| `InspectionLotType` | `InspectionLotType` |
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchaseContract` | `PurchaseContract` |
| `PurchaseContractItem` | `PurchaseContractItem` |
| `PurchasingInfoRecdAddlGrpgName` | `PurchasingInfoRecdAddlGrpgName` |
| `PlannedDeliveryDuration` | `PlannedDeliveryDuration` |
| `MaterialGroup` | `MaterialGroup` |
| `PurchasingGroup` | `PurchasingGroup` |
| `Supplier` | `Supplier` |
| `NumberOfOperationPriceUnits` | `NumberOfOperationPriceUnits` |
| `CostElement` | `CostElement` |
| `OpExternalProcessingPrice` | `OpExternalProcessingPrice` |
| `OpExternalProcessingCurrency` | `OpExternalProcessingCurrency` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ChangeNumber` | `ChangeNumber` |
| `OperationSetupType` | `OperationSetupType` |
| `OperationSetupGroupCategory` | `OperationSetupGroupCategory` |
| `OperationSetupGroup` | `OperationSetupGroup` |
| `CapacityCategoryCode` | `CapacityCategoryCode` |
| `OperationScrapPercent` | `OperationScrapPercent` |
| `ChangedDateTime` | `ChangedDateTime` |
| `PlainLongText` | `PlainLongText` |
| `_NonSqncTP` | *Association* |
| `_ProdnRtgTP` | *Association* |
| `_Header` | *Association* |

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
