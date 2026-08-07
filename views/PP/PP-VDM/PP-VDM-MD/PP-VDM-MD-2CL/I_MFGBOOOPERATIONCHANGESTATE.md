---
name: I_MFGBOOOPERATIONCHANGESTATE
description: "Mfgboooperationchangestate"
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
# I_MFGBOOOPERATIONCHANGESTATE

**Mfgboooperationchangestate**

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
| `OperationExternalID` |  | |  |  |  |  |
| `Operation` |  | |  |  |  |  |
| `Operation_2` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `LongTextLanguageCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `OperationStandardTextCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `OperationCostingRelevancyType` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `BillOfOperationsRefType` |  | |  |  |  |  |
| `BillOfOperationsRefGroup` |  | |  |  |  |  |
| `BillOfOperationsRefVariant` |  | |  |  |  |  |
| `LineSegmentTakt` |  | |  |  |  |  |
| `OperationStdWorkQtyGrpgCat` |  | |  |  |  |  |
| `OrderHasNoSubOperations` |  | |  |  |  |  |
| `OperationSetupType` |  | |  |  |  |  |
| `OperationSetupGroupCategory` |  | |  |  |  |  |
| `OperationSetupGroup` |  | |  |  |  |  |
| `BOOOperationIsPhase` |  | |  |  |  |  |
| `BOOPhaseSuperiorOpInternalID` |  | |  |  |  |  |
| `ControlRecipeDestination` |  | |  |  |  |  |
| `OpIsExtlyProcdWithSubcontrg` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingInfoRecdAddlGrpgName` |  | |  | `case when PurchasingInfoRecord is not initial then _PurchasingInfoRec.PurgInfoRecNonStockItmSortTerm else PurchasingInfoRecdAddlGrpgName end` |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  | `case when PurchasingInfoRecord is not initial then case when OpIsExtlyProcdWithSubcontrg is not initial then coalesce( _SubCtrct_with_plant.PurchasingGroup, _SubCtrct_without_plant.PurchasingGroup ) else coalesce( _Std_with_plant.PurchasingGroup, _Std_without_plant.PurchasingGroup ) end else PurchasingGroup end` |  |  |
| `Supplier` |  | |  | `case when PurchasingInfoRecord is not initial then _PurchasingInfoRec.Supplier else Supplier end` |  |  |
| `PlannedDeliveryDuration` |  | |  | `case when PurchasingInfoRecord is not initial then case when OpIsExtlyProcdWithSubcontrg is not initial then coalesce( _SubCtrct_with_plant.MaterialPlannedDeliveryDurn, _SubCtrct_without_plant.MaterialPlannedDeliveryDurn ) else coalesce( _Std_with_plant.MaterialPlannedDeliveryDurn, _Std_without_plant.MaterialPlannedDeliveryDurn ) end else PlannedDeliveryDuration end` |  |  |
| `NumberOfOperationPriceUnits` |  | |  | `case when PurchasingInfoRecord is not initial then case when OpIsExtlyProcdWithSubcontrg is not initial then coalesce( _SubCtrct_with_plant.MaterialPriceUnitQty, _SubCtrct_without_plant.MaterialPriceUnitQty ) else coalesce( _Std_with_plant.MaterialPriceUnitQty, _Std_without_plant.MaterialPriceUnitQty ) end else NumberOfOperationPriceUnits end` |  |  |
| `OpExternalProcessingCurrency` |  | |  | `case when PurchasingInfoRecord is not initial then case when OpIsExtlyProcdWithSubcontrg is not initial then coalesce( _SubCtrct_with_plant.Currency, _SubCtrct_without_plant.Currency ) else coalesce( _Std_with_plant.Currency, _Std_without_plant.Currency ) end else OpExternalProcessingCurrency end` |  |  |
| `OpExternalProcessingPrice` |  | |  | `case when PurchasingInfoRecord is not initial then case when OpIsExtlyProcdWithSubcontrg is not initial then coalesce( _SubCtrct_with_plant.NetPriceAmount, _SubCtrct_without_plant.NetPriceAmount ) else coalesce( _Std_with_plant.NetPriceAmount, _Std_without_plant.NetPriceAmount ) end else OpExternalProcessingPrice end` |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `InspResultRecordingView` |  | |  |  |  |  |
| `InspSbstCompletionConfirmation` |  | |  |  |  |  |
| `InspSbstHasNoTimeOrQuantity` |  | |  |  |  |  |
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
| `LeadTimeReductionStrategy` |  | |  |  |  |  |
| `TeardownAndWaitIsParallel` |  | |  |  |  |  |
| `BillOfOperationsBreakDuration` |  | |  |  |  |  |
| `BreakDurationUnit` |  | |  | `BillOfOperationsBreakDurnUnit` |  |  |
| `MaximumWaitDuration` |  | |  |  |  |  |
| `MaximumWaitDurationUnit` |  | |  |  |  |  |
| `MinimumWaitDuration` |  | |  |  |  |  |
| `MinimumWaitDurationUnit` |  | |  |  |  |  |
| `StandardQueueDuration` |  | |  |  |  |  |
| `StandardQueueDurationUnit` |  | |  |  |  |  |
| `MinimumQueueDuration` |  | |  |  |  |  |
| `MinimumQueueDurationUnit` |  | |  |  |  |  |
| `StandardMoveDuration` |  | |  |  |  |  |
| `StandardMoveDurationUnit` |  | |  |  |  |  |
| `MinimumMoveDuration` |  | |  |  |  |  |
| `MinimumMoveDurationUnit` |  | |  |  |  |  |
| `OperationSplitIsRequired` |  | |  |  |  |  |
| `MaximumNumberOfSplits` |  | |  |  |  |  |
| `MinProcessingDurationPerSplit` |  | |  |  |  |  |
| `MinProcessingDurnPerSplitUnit` |  | |  |  |  |  |
| `OperationOverlappingIsRequired` |  | |  |  |  |  |
| `OperationOverlappingIsPossible` |  | |  |  |  |  |
| `OperationsIsAlwaysOverlapping` |  | |  |  |  |  |
| `OperationHasNoOverlapping` |  | |  | `case when OperationOverlappingIsRequired <> 'X' then case when OperationOverlappingIsPossible <> 'X' then case when OperationsIsAlwaysOverlapping <> 'X' then cast( 'X' as uenicht preserving type ) else cast( '' as uenicht preserving type ) end else cast( '' as uenicht preserving type ) end else cast( '' as uenicht preserving type ) end` |  |  |
| `OverlapMinimumDuration` |  | |  |  |  |  |
| `OverlapMinimumDurationUnit` |  | |  |  |  |  |
| `OverlapMinimumTransferQty` |  | |  |  |  |  |
| `OverlapMinimumTransferQtyUnit` |  | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BOOSqncOperationAssgmtChgSt` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_OpExternalProcessingCurrency` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_BillOfOperationsBreakDurnUnit` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ControlRecipeDestination` | | ✓ | | | | |
| `_EmployeeSuitability` | | ✓ | | | | |
| `_EmployeeWageGroup` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_InspResultRecordingView` | | ✓ | | | | |
| `_InspectionLotType` | | ✓ | | | | |
| `_LeadTimeReductionStrategy` | | ✓ | | | | |
| `_LongTextLanguage` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_MaximumWaitDurationUnit` | | ✓ | | | | |
| `_MinProcessingDurnPerSplitUnit` | | ✓ | | | | |
| `_MinimumMoveDurationUnit` | | ✓ | | | | |
| `_MinimumQueueDurationUnit` | | ✓ | | | | |
| `_MinimumWaitDurationUnit` | | ✓ | | | | |
| `_OperationControlProfile` | | ✓ | | | | |
| `_OperationSetupGroup` | | ✓ | | | | |
| `_OperationSetupGroupCategory` | | ✓ | | | | |
| `_OperationSetupType` | | ✓ | | | | |
| `_OperationStandardText` | | ✓ | | | | |
| `_OperationStdWorkQtyGrpgCat` | | ✓ | | | | |
| `_OperationUnit` | | ✓ | | | | |
| `_OverlapMinimumDurationUnit` | | ✓ | | | | |
| `_OverlapMinimumTransferQtyUnit` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio1` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio2` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio3` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio4` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio5` | | ✓ | | | | |
| `_PerformanceEfficiencyRatio6` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_StandardMoveDurationUnit` | | ✓ | | | | |
| `_StandardQueueDurationUnit` | | ✓ | | | | |
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
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..1] |
| `_BOOSqncOperationAssgmtChgSt` | `I_MfgBOOSequenceOpAssgmtChgSt` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PurchasingInfoRec` | `I_PurchasingInfoRecord` | [0..1] |
| `_Std_with_plant` | `I_PurgInfoRecdOrgPlntDataApi01` | [0..1] |
| `_SubCtrct_with_plant` | `I_PurgInfoRecdOrgPlntDataApi01` | [0..1] |
| `_Std_without_plant` | `I_PurgInfoRecdOrgPlntDataApi01` | [0..1] |
| `_SubCtrct_without_plant` | `I_PurgInfoRecdOrgPlntDataApi01` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_OpExternalProcessingCurrency` | `I_Currency` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOOPERCHST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOOpInternalVersionCounter'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Bill of Operations Operation Change State'
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingOperation'
define view I_MfgBOOOperationChangeState
  as select from I_BOOOperationChangeState

  -- to root
  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations             on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to parent sequence
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence     on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  -- to parent operation
  association [1..1] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation    on  $projection.BillOfOperationsType     = _BillOfOperationsOperation.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsOperation.BillOfOperationsSequence
                                                                                        and $projection.BOOOperationInternalID   = _BillOfOperationsOperation.BOOOperationInternalID
  association [1..1] to I_MfgBOOSequenceOpAssgmtChgSt  as _BOOSqncOperationAssgmtChgSt  on  $projection.BillOfOperationsType          = _BOOSqncOperationAssgmtChgSt.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup         = _BOOSqncOperationAssgmtChgSt.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant       = _BOOSqncOperationAssgmtChgSt.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence      = _BOOSqncOperationAssgmtChgSt.BillOfOperationsSequence
                                                                                        and $projection.BOOOperationInternalID        = _BOOSqncOperationAssgmtChgSt.BOOOperationInternalID
                                                                                        and $projection.BOOSqncOpAssgmtIntVersionCntr = _BOOSqncOperationAssgmtChgSt.BOOSqncOpAssgmtIntVersionCntr
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_PurchasingInfoRecord         as _PurchasingInfoRec            on  _PurchasingInfoRec.PurchasingInfoRecord = $projection.PurchasingInfoRecord

  association [0..1] to I_PurgInfoRecdOrgPlntDataApi01 as _Std_with_plant               on  _Std_with_plant.PurchasingInfoRecord         = $projection.PurchasingInfoRecord
                                                                                        and _Std_with_plant.PurchasingOrganization       = $projection.PurchasingOrganization
                                                                                        and _Std_with_plant.PurchasingInfoRecordCategory = '0'
                                                                                        and _Std_with_plant.Plant                        = $projection.Plant


  association [0..1] to I_PurgInfoRecdOrgPlntDataApi01 as _SubCtrct_with_plant          on  _SubCtrct_with_plant.PurchasingInfoRecord         = $projection.PurchasingInfoRecord
                                                                                        and _SubCtrct_with_plant.PurchasingOrganization       = $projection.PurchasingOrganization
                                                                                        and _SubCtrct_with_plant.PurchasingInfoRecordCategory = '3'
                                                                                        and _SubCtrct_with_plant.Plant                        = $projection.Plant

  association [0..1] to I_PurgInfoRecdOrgPlntDataApi01 as _Std_without_plant            on  _Std_without_plant.PurchasingInfoRecord         = $projection.PurchasingInfoRecord
                                                                                        and _Std_without_plant.PurchasingOrganization       = $projection.PurchasingOrganization
                                                                                        and _Std_without_plant.PurchasingInfoRecordCategory = '0'
                                                                                        and (
                                                                                           _Std_without_plant.Plant                         = ''
                                                                                           or _Std_without_plant.Plant                      is initial
                                                                                         )

  association [0..1] to I_PurgInfoRecdOrgPlntDataApi01 as _SubCtrct_without_plant       on  _SubCtrct_without_plant.PurchasingInfoRecord         = $projection.PurchasingInfoRecord
                                                                                        and _SubCtrct_without_plant.PurchasingOrganization       = $projection.PurchasingOrganization
                                                                                        and _SubCtrct_without_plant.PurchasingInfoRecordCategory = '3'
                                                                                        and (
                                                                                           _SubCtrct_without_plant.Plant                         = ''
                                                                                           or _SubCtrct_without_plant.Plant                      is initial
                                                                                         )

  association [0..1] to I_PurchasingGroup              as _PurchasingGroup              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_Supplier                     as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Currency                     as _OpExternalProcessingCurrency on  $projection.OpExternalProcessingCurrency = _OpExternalProcessingCurrency.Currency
  -- for DPP part of DCLS
  association [0..1] to I_SupplierCompany              as _SupplierCompany              on  $projection.Supplier    = _SupplierCompany.Supplier
                                                                                        and $projection.CompanyCode = _SupplierCompany.CompanyCode
  association [0..1] to I_SupplierCompanyByPlant       as _SupplierCompanyByPlant       on  $projection.Plant    = _SupplierCompanyByPlant.Plant
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
      @ObjectModel.text.element: ['OperationText']
  key BOOOpInternalVersionCounter,

      // **** Operation Semantic Header ****
      OperationExternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Operation_2'
      @ObjectModel.text.element: ['OperationText']
      Operation,
      @ObjectModel.text.element: ['OperationText']
      Operation_2,

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

      // **** Text ****
      @Semantics.text: true
      OperationText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      LongTextLanguageCode,

      // **** Assignments ****
      -- General
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
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
      --    @ObjectModel.foreignKey.association: '_CostElement'  --> too much DB accesses to derive controlling area for CoEl
      CostElement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      OperationCostingRelevancyType,

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

      -- Production Line
      LineSegmentTakt,

      -- Transfer to Orders     (-> Suboperations)
      OperationStdWorkQtyGrpgCat,
      OrderHasNoSubOperations,

      -- Setup
      @ObjectModel.foreignKey.association: '_OperationSetupType'
      OperationSetupType,
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'
      OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_OperationSetupGroup'
      OperationSetupGroup,

      // **** Process Control Data ****
      BOOOperationIsPhase,
      BOOPhaseSuperiorOpInternalID,
      @ObjectModel.foreignKey.association: '_ControlRecipeDestination'
      ControlRecipeDestination,

      // **** External Processing ****
      OpIsExtlyProcdWithSubcontrg,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingInfoRecordStdVH', element: 'PurchasingInfoRecord' } } ]
      --    @ObjectModel.foreignKey.association: '_PurchasingInfoRecord'
      PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseContractStdVH', element: 'PurchaseContract' } } ]
      --    @ObjectModel.foreignKey.association: '_PurchaseContract'
      PurchaseContract,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseContractItemStdVH', element: 'PurchaseContractItem' } } ]
      --    @ObjectModel.foreignKey.association: '_PurchaseContractItem'
      PurchaseContractItem,
      @Semantics.text: true
      case
      when PurchasingInfoRecord is not initial
      then _PurchasingInfoRec.PurgInfoRecNonStockItmSortTerm
      else PurchasingInfoRecdAddlGrpgName
      end                                                          as PurchasingInfoRecdAddlGrpgName,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      case
      when PurchasingInfoRecord is not initial
      then case
           when OpIsExtlyProcdWithSubcontrg is not initial
           then coalesce( _SubCtrct_with_plant.PurchasingGroup, _SubCtrct_without_plant.PurchasingGroup )
           else coalesce(  _Std_with_plant.PurchasingGroup, _Std_without_plant.PurchasingGroup  )
           end
      else PurchasingGroup
      end                                                          as PurchasingGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      case
      when PurchasingInfoRecord is not initial
      then _PurchasingInfoRec.Supplier
      else Supplier
      end                                                          as Supplier,

      case
      when PurchasingInfoRecord is not initial
      then  case
            when OpIsExtlyProcdWithSubcontrg is not initial
            then coalesce( _SubCtrct_with_plant.MaterialPlannedDeliveryDurn, _SubCtrct_without_plant.MaterialPlannedDeliveryDurn )
            else coalesce( _Std_with_plant.MaterialPlannedDeliveryDurn, _Std_without_plant.MaterialPlannedDeliveryDurn )
            end
      else PlannedDeliveryDuration
      end                                                          as PlannedDeliveryDuration,


      case
      when PurchasingInfoRecord is not initial
      then case
           when OpIsExtlyProcdWithSubcontrg is not initial
           then coalesce( _SubCtrct_with_plant.MaterialPriceUnitQty, _SubCtrct_without_plant.MaterialPriceUnitQty )
           else coalesce( _Std_with_plant.MaterialPriceUnitQty, _Std_without_plant.MaterialPriceUnitQty )
           end
      else NumberOfOperationPriceUnits
      end                                                          as NumberOfOperationPriceUnits,

      @Semantics.currencyCode: true
      case
      when PurchasingInfoRecord is not initial
      then case
           when OpIsExtlyProcdWithSubcontrg is not initial
           then coalesce( _SubCtrct_with_plant.Currency, _SubCtrct_without_plant.Currency )
           else coalesce( _Std_with_plant.Currency, _Std_without_plant.Currency )
           end
      else OpExternalProcessingCurrency
      end                                                          as OpExternalProcessingCurrency,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      case
      when PurchasingInfoRecord is not initial
      then case
          when OpIsExtlyProcdWithSubcontrg is not initial
          then coalesce( _SubCtrct_with_plant.NetPriceAmount, _SubCtrct_without_plant.NetPriceAmount )
          else coalesce( _Std_with_plant.NetPriceAmount, _Std_without_plant.NetPriceAmount )
          end
      else OpExternalProcessingPrice
      end                                                          as OpExternalProcessingPrice,

      // **** Quality Management ****
      -- Quality management: general
      @ObjectModel.foreignKey.association: '_InspectionLotType'
      InspectionLotType,
      @ObjectModel.foreignKey.association: '_InspResultRecordingView'
      InspResultRecordingView,

      -- Quality management: inspection points
      InspSbstCompletionConfirmation,
      InspSbstHasNoTimeOrQuantity,

      // **** Quantities / Work Quantities ****
      -- Quantity
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      OperationReferenceQuantity,
      @Semantics.unitOfMeasure: true
      OperationUnit,
      OperationScrapPercent,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,

      -- Standard Values
      cast(StandardWorkFormulaParam1 as pph_par01 preserving type) as StandardWorkFormulaParam1,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity1     as vdm_vgw01 preserving type) as StandardWorkQuantity1,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit1 as pph_vge01 preserving type) as StandardWorkQuantityUnit1,
      cast(CostCtrActivityType1      as vdm_lar01 preserving type) as CostCtrActivityType1,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio1'
      PerfEfficiencyRatioCode1,

      cast(StandardWorkFormulaParam2 as pph_par02 preserving type) as StandardWorkFormulaParam2,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity2     as vdm_vgw02 preserving type) as StandardWorkQuantity2,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit2 as pph_vge02 preserving type) as StandardWorkQuantityUnit2,
      cast(CostCtrActivityType2      as vdm_lar02 preserving type) as CostCtrActivityType2,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio2'
      PerfEfficiencyRatioCode2,

      cast(StandardWorkFormulaParam3 as pph_par03 preserving type) as StandardWorkFormulaParam3,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity3     as vdm_vgw03 preserving type) as StandardWorkQuantity3,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit3 as pph_vge03 preserving type) as StandardWorkQuantityUnit3,
      cast(CostCtrActivityType3      as vdm_lar03 preserving type) as CostCtrActivityType3,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio3'
      PerfEfficiencyRatioCode3,

      cast(StandardWorkFormulaParam4 as pph_par04 preserving type) as StandardWorkFormulaParam4,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity4     as vdm_vgw04 preserving type) as StandardWorkQuantity4,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit4 as pph_vge04 preserving type) as StandardWorkQuantityUnit4,
      cast(CostCtrActivityType4      as vdm_lar04 preserving type) as CostCtrActivityType4,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio4'
      PerfEfficiencyRatioCode4,

      cast(StandardWorkFormulaParam5 as pph_par05 preserving type) as StandardWorkFormulaParam5,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity5     as vdm_vgw05 preserving type) as StandardWorkQuantity5,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit5 as pph_vge05 preserving type) as StandardWorkQuantityUnit5,
      cast(CostCtrActivityType5      as vdm_lar05 preserving type) as CostCtrActivityType5,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio5'
      PerfEfficiencyRatioCode5,

      cast(StandardWorkFormulaParam6 as pph_par06 preserving type) as StandardWorkFormulaParam6,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      @Aggregation.default: #SUM
      cast(StandardWorkQuantity6     as vdm_vgw06 preserving type) as StandardWorkQuantity6,
      @Semantics.unitOfMeasure: true
      cast(StandardWorkQuantityUnit6 as pph_vge06 preserving type) as StandardWorkQuantityUnit6,
      cast(CostCtrActivityType6      as vdm_lar06 preserving type) as CostCtrActivityType6,
      @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio6'
      PerfEfficiencyRatioCode6,

      -- Business Process
      --    @ObjectModel.foreignKey.association: '_BusinessProcess' --> too much DB accesses to derive controlling area for BusPr
      BusinessProcess,

      // **** Interoperation Times ****
      @ObjectModel.foreignKey.association: '_LeadTimeReductionStrategy'
      LeadTimeReductionStrategy,
      TeardownAndWaitIsParallel,

      BillOfOperationsBreakDuration,
      @Semantics.unitOfMeasure: true
      BillOfOperationsBreakDurnUnit                                as BreakDurationUnit,

      MaximumWaitDuration,
      @Semantics.unitOfMeasure: true
      MaximumWaitDurationUnit,

      MinimumWaitDuration,
      @Semantics.unitOfMeasure: true
      MinimumWaitDurationUnit,

      StandardQueueDuration,
      @Semantics.unitOfMeasure: true
      StandardQueueDurationUnit,

      MinimumQueueDuration,
      @Semantics.unitOfMeasure: true
      MinimumQueueDurationUnit,

      StandardMoveDuration,
      @Semantics.unitOfMeasure: true
      StandardMoveDurationUnit,

      MinimumMoveDuration,
      @Semantics.unitOfMeasure: true
      MinimumMoveDurationUnit,

      // **** Control Data ****
      --- Splitting
      OperationSplitIsRequired,
      MaximumNumberOfSplits,

      MinProcessingDurationPerSplit,
      @Semantics.unitOfMeasure: true
      MinProcessingDurnPerSplitUnit,

      --- Overlapping
      OperationOverlappingIsRequired,
      OperationOverlappingIsPossible,
      OperationsIsAlwaysOverlapping,
      case
      when OperationOverlappingIsRequired <> 'X'
      then case
           when OperationOverlappingIsPossible <> 'X'
           then case
                when OperationsIsAlwaysOverlapping <> 'X'
                then cast( 'X' as uenicht preserving type ) else cast( '' as uenicht preserving type ) end
           else cast( '' as uenicht preserving type ) end
      else cast( '' as uenicht preserving type ) end               as OperationHasNoOverlapping,

      OverlapMinimumDuration,
      @Semantics.unitOfMeasure: true
      OverlapMinimumDurationUnit,

      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumTransferQtyUnit'
      @Aggregation.default: #SUM
      OverlapMinimumTransferQty,
      @Semantics.unitOfMeasure: true
      OverlapMinimumTransferQtyUnit,

      // **** Associations ****
      @Consumption.hidden: true
      _BOOOperationInternalID,
      _BOOSqncOperationAssgmtChgSt,
      _BillOfOperations,
      _BillOfOperationsBreakDurnUnit,
      _BillOfOperationsGroup,
      _BillOfOperationsOperation,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _CapacityCategory,
      _ChangeMaster,
      _ControlRecipeDestination,
      _EmployeeSuitability,
      _EmployeeWageGroup,
      _FactoryCalendar,
      _InspResultRecordingView,
      _InspectionLotType,
      _LeadTimeReductionStrategy,
      _LongTextLanguage,
      _MaterialGroup,
      _MaximumWaitDurationUnit,
      _MinProcessingDurnPerSplitUnit,
      _MinimumMoveDurationUnit,
      _MinimumQueueDurationUnit,
      _MinimumWaitDurationUnit,
      _OpExternalProcessingCurrency,
      _OperationControlProfile,
      _OperationSetupGroup,
      _OperationSetupGroupCategory,
      _OperationSetupType,
      _OperationStandardText,
      _OperationStdWorkQtyGrpgCat,
      _OperationUnit,
      _OverlapMinimumDurationUnit,
      _OverlapMinimumTransferQtyUnit,
      _PerformanceEfficiencyRatio1,
      _PerformanceEfficiencyRatio2,
      _PerformanceEfficiencyRatio3,
      _PerformanceEfficiencyRatio4,
      _PerformanceEfficiencyRatio5,
      _PerformanceEfficiencyRatio6,
      _Plant,
      _CompanyCode,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchasingGroup,
      _PurchasingInfoRecord,
      _PurchasingOrganization,
      _StandardMoveDurationUnit,
      _StandardQueueDurationUnit,
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
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompany,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _WorkCenter,
      @Consumption.hidden: true
      _WorkCenterType
}
where
     BillOfOperationsType = '2'  // Recipe
  or BillOfOperationsType = 'N'  // Standard routing
  or BillOfOperationsType = 'S'; // Reference operation set
```
