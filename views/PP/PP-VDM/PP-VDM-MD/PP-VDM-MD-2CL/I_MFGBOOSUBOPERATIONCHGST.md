---
name: I_MFGBOOSUBOPERATIONCHGST
description: Mfgboosuboperationchgst
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
# I_MFGBOOSUBOPERATIONCHGST

**Mfgboosuboperationchgst**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |  |  |
| `BillOfOperationsVariant` | ✓ | |  |  |  |  |
| `BillOfOperationsSequence` | ✓ | |  |  |  |  |
| `BOOOperationInternalID` | ✓ | |  |  |  |  |
| `BOOSqncOpAssgmtIntVersionCntr` | ✓ | |  |  |  |  |
| `BOOOpInternalVersionCounter` | ✓ | |  |  |  |  |
| `SubOperation` |  | |  |  |  |  |
| `SubOperation_2` |  | |  |  |  |  |
| `SuperiorOperationInternalID` |  | |  |  |  |  |
| `SubOperationText` |  | |  |  |  |  |
| `LongTextLanguageCode` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `OperationStandardTextCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `OperationStdWorkQtyGrpgCat` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `BillOfOperationsRefType` |  | |  |  |  |  |
| `BillOfOperationsRefGroup` |  | |  |  |  |  |
| `BillOfOperationsRefVariant` |  | |  |  |  |  |
| `OperationSetupType` |  | |  |  |  |  |
| `OperationSetupGroupCategory` |  | |  |  |  |  |
| `OperationSetupGroup` |  | |  |  |  |  |
| `ControlRecipeDestination` |  | |  |  |  |  |
| `OpIsExtlyProcdWithSubcontrg` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingInfoRecdAddlGrpgName` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PlannedDeliveryDuration` |  | |  |  |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `OperationCostingRelevancyType` |  | |  |  |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `OperationReferenceQuantity` |  | |  |  |  |  |
| `OperationUnit` |  | |  |  |  |  |
| `OperationScrapPercent` |  | |  |  |  |  |
| `OpQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OpQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `StandardWorkFormulaParam1` |  | |  | `cast(StandardWorkFormulaParam1 as pph_par01 preserving type)` |  |  |
| `StandardWorkQuantity1` |  | |  | `cast(StandardWorkQuantity1 as vdm_vgw01 preserving type)` |  |  |
| `StandardWorkQuantityUnit1` |  | |  | `cast(StandardWorkQuantityUnit1 as pph_vge01 preserving type)` |  |  |
| `CostCtrActivityType1` |  | |  | `cast(CostCtrActivityType1 as vdm_lar01 preserving type)` |  |  |
| `PerfEfficiencyRatioCode1` |  | |  |  |  |  |
| `StandardWorkFormulaParam2` |  | |  | `cast(StandardWorkFormulaParam2 as pph_par02 preserving type)` |  |  |
| `StandardWorkQuantity2` |  | |  | `cast(StandardWorkQuantity2 as vdm_vgw02 preserving type)` |  |  |
| `StandardWorkQuantityUnit2` |  | |  | `cast(StandardWorkQuantityUnit2 as pph_vge02 preserving type)` |  |  |
| `CostCtrActivityType2` |  | |  | `cast(CostCtrActivityType2 as vdm_lar02 preserving type)` |  |  |
| `PerfEfficiencyRatioCode2` |  | |  |  |  |  |
| `StandardWorkFormulaParam3` |  | |  | `cast(StandardWorkFormulaParam3 as pph_par03 preserving type)` |  |  |
| `StandardWorkQuantity3` |  | |  | `cast(StandardWorkQuantity3 as vdm_vgw03 preserving type)` |  |  |
| `StandardWorkQuantityUnit3` |  | |  | `cast(StandardWorkQuantityUnit3 as pph_vge03 preserving type)` |  |  |
| `CostCtrActivityType3` |  | |  | `cast(CostCtrActivityType3 as vdm_lar03 preserving type)` |  |  |
| `PerfEfficiencyRatioCode3` |  | |  |  |  |  |
| `StandardWorkFormulaParam4` |  | |  | `cast(StandardWorkFormulaParam4 as pph_par04 preserving type)` |  |  |
| `StandardWorkQuantity4` |  | |  | `cast(StandardWorkQuantity4 as vdm_vgw04 preserving type)` |  |  |
| `StandardWorkQuantityUnit4` |  | |  | `cast(StandardWorkQuantityUnit4 as pph_vge04 preserving type)` |  |  |
| `CostCtrActivityType4` |  | |  | `cast(CostCtrActivityType4 as vdm_lar04 preserving type)` |  |  |
| `PerfEfficiencyRatioCode4` |  | |  |  |  |  |
| `StandardWorkFormulaParam5` |  | |  | `cast(StandardWorkFormulaParam5 as pph_par05 preserving type)` |  |  |
| `StandardWorkQuantity5` |  | |  | `cast(StandardWorkQuantity5 as vdm_vgw05 preserving type)` |  |  |
| `StandardWorkQuantityUnit5` |  | |  | `cast(StandardWorkQuantityUnit5 as pph_vge05 preserving type)` |  |  |
| `CostCtrActivityType5` |  | |  | `cast(CostCtrActivityType5 as vdm_lar05 preserving type)` |  |  |
| `PerfEfficiencyRatioCode5` |  | |  |  |  |  |
| `StandardWorkFormulaParam6` |  | |  | `cast(StandardWorkFormulaParam6 as pph_par06 preserving type)` |  |  |
| `StandardWorkQuantity6` |  | |  | `cast(StandardWorkQuantity6 as vdm_vgw06 preserving type)` |  |  |
| `StandardWorkQuantityUnit6` |  | |  | `cast(StandardWorkQuantityUnit6 as pph_vge06 preserving type)` |  |  |
| `CostCtrActivityType6` |  | |  | `cast(CostCtrActivityType6 as vdm_lar06 preserving type)` |  |  |
| `PerfEfficiencyRatioCode6` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |  |  |
| `StartDateOffsetDuration` |  | |  |  |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |  |  |
| `EndDateOffsetDuration` |  | |  |  |  |  |
| `LeadTimeReductionStrategy` |  | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BOOSqncOperationAssgmtChgSt` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ControlRecipeDestination` | | ✓ | | | | |
| `_EmployeeSuitability` | | ✓ | | | | |
| `_EmployeeWageGroup` | | ✓ | | | | |
| `_EndDateOffsetDurnUnit` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_InspectionLotType` | | ✓ | | | | |
| `_LeadTimeReductionStrategy` | | ✓ | | | | |
| `_LongTextLanguage` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_OperationControlProfile` | | ✓ | | | | |
| `_OperationSetupGroup` | | ✓ | | | | |
| `_OperationSetupGroupCategory` | | ✓ | | | | |
| `_OperationSetupType` | | ✓ | | | | |
| `_OperationStandardText` | | ✓ | | | | |
| `_OperationStdWorkQtyGrpgCat` | | ✓ | | | | |
| `_OperationUnit` | | ✓ | | | | |
| `_OpExternalProcessingCurrency` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio1` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio2` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio3` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio4` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio5` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio6` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_StandardWorkFormulaParameter1` | | ✓ | | | | |
| `_StandardWorkFormulaParameter2` | | ✓ | | | | |
| `_StandardWorkFormulaParameter3` | | ✓ | | | | |
| `_StandardWorkFormulaParameter4` | | ✓ | | | | |
| `_StandardWorkFormulaParameter5` | | ✓ | | | | |
| `_StandardWorkFormulaParameter6` | | ✓ | | | | |
| `_StandardWorkQuantityUnit1` | | ✓ | | | | |
| `_StandardWorkQuantityUnit2` | | ✓ | | | | |
| `_StandardWorkQuantityUnit3` | | ✓ | | | | |
| `_StandardWorkQuantityUnit4` | | ✓ | | | | |
| `_StandardWorkQuantityUnit5` | | ✓ | | | | |
| `_StandardWorkQuantityUnit6` | | ✓ | | | | |
| `_StartDateOffsetDurnUnit` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..1] |
| `_BOOSqncOperationAssgmtChgSt` | `I_MfgBOOSequenceOpAssgmtChgSt` | [1..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOSUBOPCHST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOOpInternalVersionCounter'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing Bill of Operations Sub Operation Change State'

define view I_MfgBOOSubOperationChgSt
  as select from I_BOOSubOperationChangeState

  -- to root
  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations          on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to parent sequence
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence  on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  -- to parent operation
  association [1..1] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation on  $projection.BillOfOperationsType        = _BillOfOperationsOperation.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup       = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant     = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence    = _BillOfOperationsOperation.BillOfOperationsSequence
                                                                                     and $projection.SuperiorOperationInternalID = _BillOfOperationsOperation.BOOOperationInternalID
  -- to sequence / operation assignment
  association [1..1] to I_MfgBOOSequenceOpAssgmtChgSt as _BOOSqncOperationAssgmtChgSt on $projection.BillOfOperationsType          = _BOOSqncOperationAssgmtChgSt.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup         = _BOOSqncOperationAssgmtChgSt.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant       = _BOOSqncOperationAssgmtChgSt.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence      = _BOOSqncOperationAssgmtChgSt.BillOfOperationsSequence
                                                                                     and $projection.BOOOperationInternalID        = _BOOSqncOperationAssgmtChgSt.BOOOperationInternalID
                                                                                     and $projection.BOOSqncOpAssgmtIntVersionCntr = _BOOSqncOperationAssgmtChgSt.BOOSqncOpAssgmtIntVersionCntr
 -- for DPP part of DCLS
  association [0..1] to I_SupplierCompanyByPlant       as _SupplierCompanyByPlant    on  $projection.Plant    = _SupplierCompanyByPlant.Plant
                                                                                     and $projection.Supplier = _SupplierCompanyByPlant.Supplier
{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key BillOfOperationsSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key BOOOperationInternalID,
      @ObjectModel.foreignKey.association: '_BOOSqncOperationAssgmtChgSt'
  key BOOSqncOpAssgmtIntVersionCntr,
      @ObjectModel.text.element: 'SubOperationText'
  key BOOOpInternalVersionCounter,

      // **** Operation Semantic Header ****
--    SubOperationExternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SubOperation_2'
      @ObjectModel.text.element: 'SubOperationText'
      SubOperation,
      @ObjectModel.text.element: 'SubOperationText'
      SubOperation_2,      
      
      SuperiorOperationInternalID,

      // **** Text ****
      @Semantics.text: true
      SubOperationText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      LongTextLanguageCode,

      // **** Administration ****
      -- Administrative Data
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      -- Validity
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      ChangeNumber,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,

      // **** Attributes ****
      IsDeleted,
      IsImplicitlyDeleted,

      // **** Assignments ****
      -- General
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      OperationControlProfile,
      @ObjectModel.foreignKey.association: '_OperationStandardText'
      OperationStandardTextCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_FactoryCalendar'   
      FactoryCalendar,
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      CapacityCategoryCode,
      @ObjectModel.foreignKey.association: '_OperationStdWorkQtyGrpgCat'
      OperationStdWorkQtyGrpgCat,
      
      -- Employment
      NumberOfTimeTickets,
      NumberOfConfirmationSlips,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      EmployeeWageGroup,
      EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      EmployeeSuitability,
      NumberOfEmployees,

      -- Origin
      BillOfOperationsRefType,
      BillOfOperationsRefGroup,
      BillOfOperationsRefVariant,

      -- Setup
      @ObjectModel.foreignKey.association: '_OperationSetupType'
      OperationSetupType,
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'
      OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_OperationSetupGroup'
      OperationSetupGroup,

      // **** Process Control Data ****
      @ObjectModel.foreignKey.association: '_ControlRecipeDestination'
      ControlRecipeDestination,

      // **** External Processing ****
      OpIsExtlyProcdWithSubcontrg,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingInfoRecordStdVH', element: 'PurchasingInfoRecord' } } ]
      PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseContractStdVH', element: 'PurchaseContract' } } ]
      PurchaseContract,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseContractItemStdVH', element: 'PurchaseContractItem' } } ]
      PurchaseContractItem,
      @Semantics.text: true
      PurchasingInfoRecdAddlGrpgName,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      PlannedDeliveryDuration,
      NumberOfOperationPriceUnits,
      @Semantics.currencyCode: true
      OpExternalProcessingCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
--    @ObjectModel.foreignKey.association: '_CostElement' --> too much DB accesses to derive controlling area for CostEl
      CostElement,
--    @ObjectModel.foreignKey.association: '_OperationCostingRelevancyType'
      OperationCostingRelevancyType,
      @ObjectModel.foreignKey.association: '_InspectionLotType'
      InspectionLotType,

      // **** Quantities / Work Quantities ****
      -- Quantity
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @DefaultAggregation: #SUM
      OperationReferenceQuantity,
      @Semantics.unitOfMeasure: true
      OperationUnit,
      OperationScrapPercent,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,
      
      -- Standard Values
      cast(StandardWorkFormulaParam1 as pph_par01 preserving type) as StandardWorkFormulaParam1,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity1     as vdm_vgw01 preserving type) as StandardWorkQuantity1,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit1 as pph_vge01 preserving type) as StandardWorkQuantityUnit1,
      cast(CostCtrActivityType1      as vdm_lar01 preserving type) as CostCtrActivityType1,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio1'
      PerfEfficiencyRatioCode1,

      cast(StandardWorkFormulaParam2 as pph_par02 preserving type) as StandardWorkFormulaParam2,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity2     as vdm_vgw02 preserving type) as StandardWorkQuantity2,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit2 as pph_vge02 preserving type) as StandardWorkQuantityUnit2,
      cast(CostCtrActivityType2      as vdm_lar02 preserving type) as CostCtrActivityType2,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio2'
      PerfEfficiencyRatioCode2,

      cast(StandardWorkFormulaParam3 as pph_par03 preserving type) as StandardWorkFormulaParam3,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity3     as vdm_vgw03 preserving type) as StandardWorkQuantity3,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit3 as pph_vge03 preserving type) as StandardWorkQuantityUnit3,
      cast(CostCtrActivityType3      as vdm_lar03 preserving type) as CostCtrActivityType3,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio3'
      PerfEfficiencyRatioCode3,

      cast(StandardWorkFormulaParam4 as pph_par04 preserving type) as StandardWorkFormulaParam4,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity4     as vdm_vgw04 preserving type) as StandardWorkQuantity4,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit4 as pph_vge04 preserving type) as StandardWorkQuantityUnit4,
      cast(CostCtrActivityType4      as vdm_lar04 preserving type) as CostCtrActivityType4,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio4'
      PerfEfficiencyRatioCode4,

      cast(StandardWorkFormulaParam5 as pph_par05 preserving type) as StandardWorkFormulaParam5,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity5     as vdm_vgw05 preserving type) as StandardWorkQuantity5,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit5 as pph_vge05 preserving type) as StandardWorkQuantityUnit5,
      cast(CostCtrActivityType5      as vdm_lar05 preserving type) as CostCtrActivityType5,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio5'
      PerfEfficiencyRatioCode5,

      cast(StandardWorkFormulaParam6 as pph_par06 preserving type) as StandardWorkFormulaParam6,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      @DefaultAggregation: #SUM
      cast(StandardWorkQuantity6     as vdm_vgw06 preserving type) as StandardWorkQuantity6,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit6 as pph_vge06 preserving type) as StandardWorkQuantityUnit6,
      cast(CostCtrActivityType6      as vdm_lar06 preserving type) as CostCtrActivityType6,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio6'
      PerfEfficiencyRatioCode6,

      -- Business Process
--    @ObjectModel.foreignKey.association: '_BusinessProcess' --> too much DB accesses to derive controlling area for BusPr
      BusinessProcess,

      // **** Offset ****
      @Semantics.unitOfMeasure: true
      StartDateOffsetDurationUnit,
      StartDateOffsetDuration,
      @Semantics.unitOfMeasure: true
      EndDateOffsetDurationUnit,
      EndDateOffsetDuration,

      // **** Lead Time Reduction ****
      @ObjectModel.foreignKey.association: '_LeadTimeReductionStrategy'
      LeadTimeReductionStrategy,

      // **** Associations ****
      @Consumption.hidden: true
      _BOOOperationInternalID,
      _BOOSqncOperationAssgmtChgSt,
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsOperation,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _CapacityCategory,
      _ChangeMaster,
      _ControlRecipeDestination,
      _EmployeeSuitability,
      _EmployeeWageGroup,
      _EndDateOffsetDurnUnit,
      _FactoryCalendar,
      _InspectionLotType,
      _LeadTimeReductionStrategy,
      _LongTextLanguage,
      _MaterialGroup,
      _OperationControlProfile,
      _OperationSetupGroup,
      _OperationSetupGroupCategory,
      _OperationSetupType,
      _OperationStandardText,
      _OperationStdWorkQtyGrpgCat,
      _OperationUnit,
      _OpExternalProcessingCurrency,
      _PerformanceEfficiencyRatio1,
      _PerformanceEfficiencyRatio2,
      _PerformanceEfficiencyRatio3,
      _PerformanceEfficiencyRatio4,
      _PerformanceEfficiencyRatio5,
      _PerformanceEfficiencyRatio6,
      _Plant,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchasingGroup,
      _PurchasingInfoRecord,
      _PurchasingOrganization,
      _StandardWorkFormulaParameter1,
      _StandardWorkFormulaParameter2,
      _StandardWorkFormulaParameter3,
      _StandardWorkFormulaParameter4,
      _StandardWorkFormulaParameter5,
      _StandardWorkFormulaParameter6,
      _StandardWorkQuantityUnit1,
      _StandardWorkQuantityUnit2,
      _StandardWorkQuantityUnit3,
      _StandardWorkQuantityUnit4,
      _StandardWorkQuantityUnit5,
      _StandardWorkQuantityUnit6,
      _StartDateOffsetDurnUnit,
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _WorkCenter,
      @Consumption.hidden: true
      _WorkCenterType
}
where BillOfOperationsType = '2'  // Master recipe
   or BillOfOperationsType = 'N'  // Standard routing
   or BillOfOperationsType = 'S'; // Reference operation set
```
