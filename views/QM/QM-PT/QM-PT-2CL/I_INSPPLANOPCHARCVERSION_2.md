---
name: I_INSPPLANOPCHARCVERSION_2
description: Inspplanopcharcversion 2
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANOPCHARCVERSION_2

**Inspplanopcharcversion 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | | `_BOOCharacteristicVersion` | `BillOfOperationsGroup` |  |  |
| `BOOOperationInternalID` | ✓ | | `_BOOCharacteristicVersion` | `BOOOperationInternalID` |  |  |
| `BOOCharacteristic` | ✓ | | `_BOOCharacteristicVersion` | `BOOCharacteristic` |  |  |
| `BOOCharacteristicVersion` | ✓ | | `_BOOCharacteristicVersion` | `BOOCharacteristicVersion` |  |  |
| `InspectionPlan` | ✓ | | `_InspPlanOpAssgmt` | `InspectionPlan` |  |  |
| `BillOfOperationsType` | ✓ | | `_BOOCharacteristicVersion` | `BillOfOperationsType` |  |  |
| `ValidityStartDate` |  | | `_BOOCharacteristicVersion` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_BOOCharacteristicVersion` | `ValidityEndDate` |  |  |
| `ChangeNumber` |  | | `_BOOCharacteristicVersion` | `ChangeNumber` |  |  |
| `IsDeleted` |  | | `_BOOCharacteristicVersion` | `IsDeleted` |  |  |
| `BOOOperationPRTInternalID` |  | | `_BOOCharacteristicVersion` | `BOOOperationPRTInternalID` |  |  |
| `InspectionMethod` |  | | `_BOOCharacteristicVersion` | `InspectionMethod` |  |  |
| `InspectionMethodVersion` |  | | `_BOOCharacteristicVersion` | `InspectionMethodVersion` |  |  |
| `InspectionMethodPlant` |  | | `_BOOCharacteristicVersion` | `InspectionMethodPlant` |  |  |
| `InspSpecImportanceCode` |  | | `_BOOCharacteristicVersion` | `InspSpecImportanceCode` |  |  |
| `InspectorQualification` |  | | `_BOOCharacteristicVersion` | `InspectorQualification` |  |  |
| `InspectionSpecification` |  | | `_BOOCharacteristicVersion` | `InspectionSpecification` |  |  |
| `InspectionSpecificationVersion` |  | | `_BOOCharacteristicVersion` | `InspectionSpecificationVersion` |  |  |
| `InspectionSpecificationPlant` |  | | `_BOOCharacteristicVersion` | `InspectionSpecificationPlant` |  |  |
| `BOOCharcHasInspSpecReference` |  | | `_BOOCharacteristicVersion` | `BOOCharcHasInspSpecReference` |  |  |
| `InspSpecControlIndicators` |  | | `_BOOCharacteristicVersion` | `InspSpecControlIndicators` |  |  |
| `InspSpecIsQuantitative` |  | | `_BOOCharacteristicVersion` | `InspSpecIsQuantitative` |  |  |
| `InspSpecCharacteristicType` |  | | `_BOOCharacteristicVersion` | `InspSpecCharacteristicType` |  |  |
| `InspSpecIsMeasuredValueRqd` |  | | `_BOOCharacteristicVersion` | `InspSpecIsMeasuredValueRqd` |  |  |
| `InspSpecIsSelectedSetRequired` |  | | `_BOOCharacteristicVersion` | `InspSpecIsSelectedSetRequired` |  |  |
| `InspSpecIsUpperLimitRequired` |  | | `_BOOCharacteristicVersion` | `InspSpecIsUpperLimitRequired` |  |  |
| `InspSpecIsLowerLimitRequired` |  | | `_BOOCharacteristicVersion` | `InspSpecIsLowerLimitRequired` |  |  |
| `InspSpecIsTargetValueInLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecIsTargetValueInLimit` |  |  |
| `InspectionScope` |  | | `_BOOCharacteristicVersion` | `InspectionScope` |  |  |
| `InspSpecIsLongTermInspection` |  | | `_BOOCharacteristicVersion` | `InspSpecIsLongTermInspection` |  |  |
| `InspSpecRecordingType` |  | | `_BOOCharacteristicVersion` | `InspSpecRecordingType` |  |  |
| `InspResultIsDocumentationRqd` |  | | `_BOOCharacteristicVersion` | `InspResultIsDocumentationRqd` |  |  |
| `InspSpecCharcCategory` |  | | `_BOOCharacteristicVersion` | `InspSpecCharcCategory` |  |  |
| `InspSpecIsSampleQtyAdditive` |  | | `_BOOCharacteristicVersion` | `InspSpecIsSampleQtyAdditive` |  |  |
| `InspSpecIsDestructive` |  | | `_BOOCharacteristicVersion` | `InspSpecIsDestructive` |  |  |
| `InspSpecResultCalculation` |  | | `_BOOCharacteristicVersion` | `InspSpecResultCalculation` |  |  |
| `InspSpecIsSamplingProcedRqd` |  | | `_BOOCharacteristicVersion` | `InspSpecIsSamplingProcedRqd` |  |  |
| `InspSpecIsScrapRelevant` |  | | `_BOOCharacteristicVersion` | `InspSpecIsScrapRelevant` |  |  |
| `InspSpecHasFixedCtrlIndicators` |  | | `_BOOCharacteristicVersion` | `InspSpecHasFixedCtrlIndicators` |  |  |
| `InspSpecIsDefectRecordingRqd` |  | | `_BOOCharacteristicVersion` | `InspSpecIsDefectRecordingRqd` |  |  |
| `InspSpecIsTestEquipmentRqd` |  | | `_BOOCharacteristicVersion` | `InspSpecIsTestEquipmentRqd` |  |  |
| `InspSpecIsDefectsRecgAutomatic` |  | | `_BOOCharacteristicVersion` | `InspSpecIsDefectsRecgAutomatic` |  |  |
| `InspSpecIsChgDocRequired` |  | | `_BOOCharacteristicVersion` | `InspSpecIsChgDocRequired` |  |  |
| `InspSpecIsControlChartUsed` |  | | `_BOOCharacteristicVersion` | `InspSpecIsControlChartUsed` |  |  |
| `InspSpecPrintControl` |  | | `_BOOCharacteristicVersion` | `InspSpecPrintControl` |  |  |
| `InspToleranceSpecification` |  | | `_BOOCharacteristicVersion` | `InspToleranceSpecification` |  |  |
| `InspSpecDecimalPlaces` |  | | `_BOOCharacteristicVersion` | `InspSpecDecimalPlaces` |  |  |
| `InspectionSpecificationUnit` |  | | `_BOOCharacteristicVersion` | `InspectionSpecificationUnit` |  |  |
| `InspSpecTargetValue` |  | | `_BOOCharacteristicVersion` | `InspSpecTargetValue` |  |  |
| `InspSpecHasTargetValue` |  | | `_BOOCharacteristicVersion` | `InspSpecHasTargetValue` |  |  |
| `InspSpecUpperLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecUpperLimit` |  |  |
| `InspSpecLowerLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecLowerLimit` |  |  |
| `InspSpecHasLowerLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasLowerLimit` |  |  |
| `InspSpecHasUpperLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasUpperLimit` |  |  |
| `InspSpecInputProcedure` |  | | `_BOOCharacteristicVersion` | `InspSpecInputProcedure` |  |  |
| `InspSpecHasFormula` |  | | `_BOOCharacteristicVersion` | `InspSpecHasFormula` |  |  |
| `InspSpecFormula1` |  | | `_BOOCharacteristicVersion` | `InspSpecFormula1` |  |  |
| `InspSpecFormula2` |  | | `_BOOCharacteristicVersion` | `InspSpecFormula2` |  |  |
| `InspSpecNumberOfClasses` |  | | `_BOOCharacteristicVersion` | `InspSpecNumberOfClasses` |  |  |
| `InspSpecClassWidthQty` |  | | `_BOOCharacteristicVersion` | `InspSpecClassWidthQty` |  |  |
| `InspSpecHasClassWidth` |  | | `_BOOCharacteristicVersion` | `InspSpecHasClassWidth` |  |  |
| `InspSpecClassMidpointQty` |  | | `_BOOCharacteristicVersion` | `InspSpecClassMidpointQty` |  |  |
| `InspSpecHasClassMidpoint` |  | | `_BOOCharacteristicVersion` | `InspSpecHasClassMidpoint` |  |  |
| `InspSpecFirstUpperSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecFirstUpperSpecLimit` |  |  |
| `InspSpecHasFirstUpperSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasFirstUpperSpecLimit` |  |  |
| `InspSpecFirstLowerSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecFirstLowerSpecLimit` |  |  |
| `InspSpecHasFirstLowerSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasFirstLowerSpecLimit` |  |  |
| `InspSpecSecondUpperSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecSecondUpperSpecLimit` |  |  |
| `InspSpecHasSecondUprSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasSecondUprSpecLimit` |  |  |
| `InspSpecSecondLowerSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecSecondLowerSpecLimit` |  |  |
| `InspSpecHasSecondLowrSpecLimit` |  | | `_BOOCharacteristicVersion` | `InspSpecHasSecondLowrSpecLimit` |  |  |
| `InspSpecDefectCodeGrpRejection` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeGrpRejection` |  |  |
| `InspSpecDefectCodeRejection` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeRejection` |  |  |
| `InspSpecDefectCodeGrpRjcnUpper` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeGrpRjcnUpper` |  |  |
| `InspSpecDefectCodeRjcnUpper` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeRjcnUpper` |  |  |
| `InspSpecDefectCodeGrpRjcnLower` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeGrpRjcnLower` |  |  |
| `InspSpecDefectCodeRjcnLower` |  | | `_BOOCharacteristicVersion` | `InspSpecDefectCodeRjcnLower` |  |  |
| `SelectedCodeSet` |  | | `_BOOCharacteristicVersion` | `SelectedCodeSet` |  |  |
| `SelectedCodeSetPlant` |  | | `_BOOCharacteristicVersion` | `SelectedCodeSetPlant` |  |  |
| `InspSpecAdditionalCatalog2` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCatalog2` |  |  |
| `InspSpecAdditionalSelectedSet2` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalSelectedSet2` |  |  |
| `InspSpecAdditionalCodeGroup2` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCodeGroup2` |  |  |
| `InspSpecAddlSeldCodeSetPlant2` |  | | `_BOOCharacteristicVersion` | `InspSpecAddlSeldCodeSetPlant2` |  |  |
| `InspSpecAdditionalCatalog3` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCatalog3` |  |  |
| `InspSpecAdditionalSelectedSet3` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalSelectedSet3` |  |  |
| `InspSpecAdditionalCodeGroup3` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCodeGroup3` |  |  |
| `InspSpecAddlSeldCodeSetPlant3` |  | | `_BOOCharacteristicVersion` | `InspSpecAddlSeldCodeSetPlant3` |  |  |
| `InspSpecAdditionalCatalog4` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCatalog4` |  |  |
| `InspSpecAdditionalSelectedSet4` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalSelectedSet4` |  |  |
| `InspSpecAdditionalCodeGroup4` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCodeGroup4` |  |  |
| `InspSpecAddlSeldCodeSetPlant4` |  | | `_BOOCharacteristicVersion` | `InspSpecAddlSeldCodeSetPlant4` |  |  |
| `InspSpecAdditionalCatalog5` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCatalog5` |  |  |
| `InspSpecAdditionalSelectedSet5` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalSelectedSet5` |  |  |
| `InspSpecAdditionalCodeGroup5` |  | | `_BOOCharacteristicVersion` | `InspSpecAdditionalCodeGroup5` |  |  |
| `InspSpecAddlSeldCodeSetPlant5` |  | | `_BOOCharacteristicVersion` | `InspSpecAddlSeldCodeSetPlant5` |  |  |
| `SamplingProcedure` |  | | `_BOOCharacteristicVersion` | `SamplingProcedure` |  |  |
| `InspCharacteristicSampleUnit` |  | | `_BOOCharacteristicVersion` | `InspCharacteristicSampleUnit` |  |  |
| `BOOCharcSampleQuantity` |  | | `_BOOCharacteristicVersion` | `BOOCharcSampleQuantity` |  |  |
| `QltyCtrlChartAggrgnCriterion` |  | | `_BOOCharacteristicVersion` | `QltyCtrlChartAggrgnCriterion` |  |  |
| `InspSpecInformationField1` |  | | `_BOOCharacteristicVersion` | `InspSpecInformationField1` |  |  |
| `InspSpecInformationField2` |  | | `_BOOCharacteristicVersion` | `InspSpecInformationField2` |  |  |
| `InspSpecInformationField3` |  | | `_BOOCharacteristicVersion` | `InspSpecInformationField3` |  |  |
| `InspectionSpecificationText` |  | | `_BOOCharacteristicVersion` | `InspectionSpecificationText` |  |  |
| `InspLotDynamicRule` |  | | `_BOOCharacteristicVersion` | `InspLotDynamicRule` |  |  |
| `InspCharcDynModifRef` |  | | `_BOOCharacteristicVersion` | `InspCharcDynModifRef` |  |  |
| `MatlIsConsideredForDynModif` |  | | `_BOOCharacteristicVersion` | `MatlIsConsideredForDynModif` |  |  |
| `SuplrIsConsideredForDynModif` |  | | `_BOOCharacteristicVersion` | `SuplrIsConsideredForDynModif` |  |  |
| `MfrIsConsideredForDynModif` |  | | `_BOOCharacteristicVersion` | `MfrIsConsideredForDynModif` |  |  |
| `CustIsConsideredForDynModif` |  | | `_BOOCharacteristicVersion` | `CustIsConsideredForDynModif` |  |  |
| `CreatedByUser` |  | | `_BOOCharacteristicVersion` | `CreatedByUser` |  |  |
| `CreationDate` |  | | `_BOOCharacteristicVersion` | `CreationDate` |  |  |
| `LastChangedByUser` |  | | `_BOOCharacteristicVersion` | `LastChangedByUser` |  |  |
| `LastChangeDate` |  | | `_BOOCharacteristicVersion` | `LastChangeDate` |  |  |
| `BillOfOperationsVersion` |  | | `_BOOCharacteristicVersion` | `BillOfOperationsVersion` |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_InspPlanOperationVersion` | | ✓ | | | | |
| `_InspPlanVersion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_InspPlanOperationVersion` | `I_InspPlanOperationVersion_2` | [1..1] |
| `_InspPlanVersion` | `I_InspectionPlanVersion` | [1..1] |
| `_Extension` | `E_BOOCharacteristic` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Version of Insp Plan Characteristic'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

// This CDS is similar to I_InspPlanOpCharcVersion but C1 released
define view entity I_InspPlanOpCharcVersion_2

  as select from I_BOOCharacteristicVersion as _BOOCharacteristicVersion
    inner join   I_InspPlanOpAssgmt         as _InspPlanOpAssgmt on  _BOOCharacteristicVersion.BillOfOperationsGroup  = _InspPlanOpAssgmt.InspectionPlanGroup
                                                                 and _BOOCharacteristicVersion.BOOOperationInternalID = _InspPlanOpAssgmt.BOOOperationInternalID
                                                                 and _BOOCharacteristicVersion.BillOfOperationsType   = _InspPlanOpAssgmt.BillOfOperationsType

  association [1..1] to I_BillOfOperationsType       as _BillOfOperationsType     on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup      as _BillOfOperationsGroup    on  $projection.BillOfOperationsType = _BillOfOperationsGroup.BillOfOperationsType
                                                                                  and $projection.InspectionPlanGroup  = _BillOfOperationsGroup.BillOfOperationsGroup

  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspPlanOperationVersion_2 as _InspPlanOperationVersion on  $projection.InspectionPlanGroup    =  _InspPlanOperationVersion.InspectionPlanGroup
                                                                                  and $projection.BOOOperationInternalID =  _InspPlanOperationVersion.BOOOperationInternalID
                                                                                  and $projection.BillOfOperationsType   =  _InspPlanOperationVersion.BillOfOperationsType
                                                                                  and $projection.ValidityStartDate      >= _InspPlanOperationVersion.ValidityStartDate
                                                                                  and $projection.ValidityStartDate      <= _InspPlanOperationVersion.ValidityEndDate
  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspectionPlanVersion      as _InspPlanVersion          on  $projection.InspectionPlanGroup  =  _InspPlanVersion.InspectionPlanGroup
                                                                                  and $projection.InspectionPlan       =  _InspPlanVersion.InspectionPlan
                                                                                  and $projection.BillOfOperationsType =  _InspPlanVersion.BillOfOperationsType
                                                                                  and $projection.ValidityStartDate    >= _InspPlanVersion.ValidityStartDate
                                                                                  and $projection.ValidityStartDate    <= _InspPlanVersion.ValidityEndDate

  association [1..1] to E_BOOCharacteristic          as _Extension                on  $projection.BillOfOperationsType     = _Extension.BillOfOperationsType
                                                                                  and $projection.InspectionPlanGroup      = _Extension.BillOfOperationsGroup
                                                                                  and $projection.BOOOperationInternalID   = _Extension.BOOOperationInternalID
                                                                                  and $projection.BOOCharacteristic        = _Extension.BOOCharacteristic
                                                                                  and $projection.BOOCharacteristicVersion = _Extension.BOOCharacteristicVersion

{
               @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key          _BOOCharacteristicVersion.BillOfOperationsGroup as InspectionPlanGroup,
  key          _BOOCharacteristicVersion.BOOOperationInternalID,
  key          _BOOCharacteristicVersion.BOOCharacteristic,
  key          _BOOCharacteristicVersion.BOOCharacteristicVersion, // MIC vs Char
  key          _InspPlanOpAssgmt.InspectionPlan,
               @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key          _BOOCharacteristicVersion.BillOfOperationsType,
               // Validity
               _BOOCharacteristicVersion.ValidityStartDate,
               _BOOCharacteristicVersion.ValidityEndDate,
               // General Data
               _BOOCharacteristicVersion.ChangeNumber,
               _BOOCharacteristicVersion.IsDeleted,
               _BOOCharacteristicVersion.BOOOperationPRTInternalID,
               _BOOCharacteristicVersion.InspectionMethod,
               _BOOCharacteristicVersion.InspectionMethodVersion,
               _BOOCharacteristicVersion.InspectionMethodPlant,
               _BOOCharacteristicVersion.InspSpecImportanceCode,
               _BOOCharacteristicVersion.InspectorQualification,
               //    Reference to Inspection Specification Version (Inspection Characteristic Master, table QPMK)
               _BOOCharacteristicVersion.InspectionSpecification,
               _BOOCharacteristicVersion.InspectionSpecificationVersion,
               _BOOCharacteristicVersion.InspectionSpecificationPlant,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.BOOCharcHasInspSpecReference,
               // Control indicators
               _BOOCharacteristicVersion.InspSpecControlIndicators,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsQuantitative,
               _BOOCharacteristicVersion.InspSpecCharacteristicType,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsMeasuredValueRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSelectedSetRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsUpperLimitRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsLowerLimitRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsTargetValueInLimit,
               _BOOCharacteristicVersion.InspectionScope,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsLongTermInspection,
               _BOOCharacteristicVersion.InspSpecRecordingType,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspResultIsDocumentationRqd,
               _BOOCharacteristicVersion.InspSpecCharcCategory,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSampleQtyAdditive,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDestructive,
               _BOOCharacteristicVersion.InspSpecResultCalculation,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSamplingProcedRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsScrapRelevant,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFixedCtrlIndicators,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDefectRecordingRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsTestEquipmentRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDefectsRecgAutomatic,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsChgDocRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsControlChartUsed,
               _BOOCharacteristicVersion.InspSpecPrintControl,
               // Quantitative Data/ Tolerances
               _BOOCharacteristicVersion.InspToleranceSpecification,
               _BOOCharacteristicVersion.InspSpecDecimalPlaces,
               _BOOCharacteristicVersion.InspectionSpecificationUnit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecTargetValue,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasTargetValue,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecUpperLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecLowerLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasLowerLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasUpperLimit,
               _BOOCharacteristicVersion.InspSpecInputProcedure,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFormula,
               _BOOCharacteristicVersion.InspSpecFormula1,
               _BOOCharacteristicVersion.InspSpecFormula2,
               _BOOCharacteristicVersion.InspSpecNumberOfClasses,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecClassWidthQty,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasClassWidth,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecClassMidpointQty,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasClassMidpoint,

               // Additional pair of Limits
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecFirstUpperSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFirstUpperSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecFirstLowerSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFirstLowerSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecSecondUpperSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasSecondUprSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecSecondLowerSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasSecondLowrSpecLimit,
               //  Catalogs
               // Defect codes for rejection
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRejection,
               _BOOCharacteristicVersion.InspSpecDefectCodeRejection,
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnUpper,
               _BOOCharacteristicVersion.InspSpecDefectCodeRjcnUpper,
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnLower,
               _BOOCharacteristicVersion.InspSpecDefectCodeRjcnLower,
               // In case of referencing a master inspection characteristic these fields
               // are stored in table QPMZ (I_AssgmtInspMethInspSpec)
               _BOOCharacteristicVersion.SelectedCodeSet,
               _BOOCharacteristicVersion.SelectedCodeSetPlant,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog2,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet2,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup2,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant2,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog3,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet3,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup3,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant3,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog4,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet4,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup4,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant4,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog5,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet5,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup5,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant5,
               // Sample Data
               _BOOCharacteristicVersion.SamplingProcedure,
               _BOOCharacteristicVersion.InspCharacteristicSampleUnit,
               @Semantics.quantity.unitOfMeasure: 'InspCharacteristicSampleUnit'
               _BOOCharacteristicVersion.BOOCharcSampleQuantity,
               _BOOCharacteristicVersion.QltyCtrlChartAggrgnCriterion,
               // Additional Data
               _BOOCharacteristicVersion.InspSpecInformationField1,
               _BOOCharacteristicVersion.InspSpecInformationField2,
               _BOOCharacteristicVersion.InspSpecInformationField3,
               // Texts
               _BOOCharacteristicVersion.InspectionSpecificationText,
               _BOOCharacteristicVersion.InspLotDynamicRule,
               _BOOCharacteristicVersion.InspCharcDynModifRef,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.MatlIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.SuplrIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.MfrIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.CustIsConsideredForDynModif,
               // Administrative Data
               _BOOCharacteristicVersion.CreatedByUser,
               _BOOCharacteristicVersion.CreationDate,
               _BOOCharacteristicVersion.LastChangedByUser,
               _BOOCharacteristicVersion.LastChangeDate,
               // Routing Version
               _BOOCharacteristicVersion.BillOfOperationsVersion,

               // --------------------------------------------------------------------------------------------------------
               // Associations
               // --------------------------------------------------------------------------------------------------------
               _BillOfOperationsType,
               _BillOfOperationsGroup,
               _InspPlanVersion,
               _InspPlanOperationVersion
}
where
  _BOOCharacteristicVersion.BillOfOperationsType = 'Q'
```
