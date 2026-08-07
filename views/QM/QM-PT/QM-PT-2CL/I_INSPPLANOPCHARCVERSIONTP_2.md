---
name: I_INSPPLANOPCHARCVERSIONTP_2
description: Inspplanopcharcversiontp 2
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
  - transactional-processing
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANOPCHARCVERSIONTP_2

**Inspplanopcharcversiontp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionPlanGroup` | ✓ | |  |  |  |  |
| `BOOOperationInternalID` | ✓ | |  |  |  |  |
| `BOOCharacteristic` | ✓ | |  |  |  |  |
| `BOOCharacteristicVersion` | ✓ | |  |  |  |  |
| `InspectionPlan` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `BOOOperationPRTInternalID` |  | |  |  |  |  |
| `InspectionMethod` |  | |  |  |  |  |
| `InspectionMethodVersion` |  | |  |  |  |  |
| `InspectionMethodPlant` |  | |  |  |  |  |
| `InspSpecImportanceCode` |  | |  |  |  |  |
| `InspectorQualification` |  | |  |  |  |  |
| `InspectionSpecification` |  | |  |  |  |  |
| `InspectionSpecificationVersion` |  | |  |  |  |  |
| `InspectionSpecificationPlant` |  | |  |  |  |  |
| `BOOCharcHasInspSpecReference` |  | |  |  |  |  |
| `InspSpecControlIndicators` |  | |  |  |  |  |
| `InspSpecIsQuantitative` |  | |  | `cast ( InspSpecIsQuantitative as qkzqunmk preserving type )` |  |  |
| `InspSpecIsMeasuredValueRqd` |  | |  |  |  |  |
| `InspSpecIsSelectedSetRequired` |  | |  |  |  |  |
| `InspSpecIsUpperLimitRequired` |  | |  |  |  |  |
| `InspSpecIsLowerLimitRequired` |  | |  |  |  |  |
| `InspSpecIsTargetValueInLimit` |  | |  |  |  |  |
| `InspectionScope` |  | |  |  |  |  |
| `InspSpecIsLongTermInspection` |  | |  |  |  |  |
| `InspSpecRecordingType` |  | |  |  |  |  |
| `InspResultIsDocumentationRqd` |  | |  |  |  |  |
| `InspSpecCharcCategory` |  | |  |  |  |  |
| `InspSpecIsSampleQtyAdditive` |  | |  |  |  |  |
| `InspSpecIsDestructive` |  | |  |  |  |  |
| `InspSpecResultCalculation` |  | |  |  |  |  |
| `InspSpecIsSamplingProcedRqd` |  | |  |  |  |  |
| `InspSpecIsScrapRelevant` |  | |  |  |  |  |
| `InspSpecHasFixedCtrlIndicators` |  | |  |  |  |  |
| `InspSpecIsTestEquipmentRqd` |  | |  |  |  |  |
| `InspSpecIsDefectRecordingRqd` |  | |  |  |  |  |
| `InspSpecIsDefectsRecgAutomatic` |  | |  |  |  |  |
| `InspSpecIsChgDocRequired` |  | |  |  |  |  |
| `InspSpecIsControlChartUsed` |  | |  |  |  |  |
| `InspSpecPrintControl` |  | |  |  |  |  |
| `InspSpecFirstUpperSpecLimit` |  | |  |  |  |  |
| `InspSpecHasFirstUpperSpecLimit` |  | |  |  |  |  |
| `InspSpecFirstLowerSpecLimit` |  | |  |  |  |  |
| `InspSpecHasFirstLowerSpecLimit` |  | |  |  |  |  |
| `InspSpecSecondUpperSpecLimit` |  | |  |  |  |  |
| `InspSpecHasSecondUprSpecLimit` |  | |  |  |  |  |
| `InspSpecSecondLowerSpecLimit` |  | |  |  |  |  |
| `InspSpecHasSecondLowrSpecLimit` |  | |  |  |  |  |
| `InspSpecInputProcedure` |  | |  |  |  |  |
| `InspSpecHasFormula` |  | |  |  |  |  |
| `InspSpecFormula1` |  | |  |  |  |  |
| `InspSpecFormula2` |  | |  |  |  |  |
| `InspSpecNumberOfClasses` |  | |  |  |  |  |
| `InspSpecClassWidthQty` |  | |  |  |  |  |
| `InspSpecHasClassWidth` |  | |  |  |  |  |
| `InspSpecClassMidpointQty` |  | |  |  |  |  |
| `InspSpecHasClassMidpoint` |  | |  |  |  |  |
| `InspToleranceSpecification` |  | |  |  |  |  |
| `InspSpecDecimalPlaces` |  | |  |  |  |  |
| `InspectionSpecificationUnit` |  | |  |  |  |  |
| `InspSpecTargetValue` |  | |  |  |  |  |
| `InspSpecHasTargetValue` |  | |  |  |  |  |
| `InspSpecUpperLimit` |  | |  |  |  |  |
| `InspSpecLowerLimit` |  | |  |  |  |  |
| `InspSpecHasLowerLimit` |  | |  |  |  |  |
| `InspSpecHasUpperLimit` |  | |  |  |  |  |
| `InspSpecDefectCodeGrpRejection` |  | |  |  |  |  |
| `InspSpecDefectCodeRejection` |  | |  |  |  |  |
| `InspSpecDefectCodeGrpRjcnUpper` |  | |  |  |  |  |
| `InspSpecDefectCodeRjcnUpper` |  | |  |  |  |  |
| `InspSpecDefectCodeGrpRjcnLower` |  | |  |  |  |  |
| `InspSpecDefectCodeRjcnLower` |  | |  |  |  |  |
| `SelectedCodeSet` |  | |  |  |  |  |
| `SelectedCodeSetPlant` |  | |  |  |  |  |
| `InspSpecAdditionalCatalog2` |  | |  |  |  |  |
| `InspSpecAdditionalSelectedSet2` |  | |  |  |  |  |
| `InspSpecAdditionalCodeGroup2` |  | |  |  |  |  |
| `InspSpecAddlSeldCodeSetPlant2` |  | |  |  |  |  |
| `InspSpecAdditionalCatalog3` |  | |  |  |  |  |
| `InspSpecAdditionalSelectedSet3` |  | |  |  |  |  |
| `InspSpecAdditionalCodeGroup3` |  | |  |  |  |  |
| `InspSpecAddlSeldCodeSetPlant3` |  | |  |  |  |  |
| `InspSpecAdditionalCatalog4` |  | |  |  |  |  |
| `InspSpecAdditionalSelectedSet4` |  | |  |  |  |  |
| `InspSpecAdditionalCodeGroup4` |  | |  |  |  |  |
| `InspSpecAddlSeldCodeSetPlant4` |  | |  |  |  |  |
| `InspSpecAdditionalCatalog5` |  | |  |  |  |  |
| `InspSpecAdditionalSelectedSet5` |  | |  |  |  |  |
| `InspSpecAdditionalCodeGroup5` |  | |  |  |  |  |
| `InspSpecAddlSeldCodeSetPlant5` |  | |  |  |  |  |
| `SamplingProcedure` |  | |  |  |  |  |
| `InspCharacteristicSampleUnit` |  | |  |  |  |  |
| `BOOCharcSampleQuantity` |  | |  |  |  |  |
| `InspSpecInformationField1` |  | |  |  |  |  |
| `InspSpecInformationField2` |  | |  |  |  |  |
| `InspSpecInformationField3` |  | |  |  |  |  |
| `InspectionSpecificationText` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `BillOfOperationsVersion` |  | |  |  |  |  |
| `_InspectionPlanVersion` | | ✓ | | | | |
| `_InspPlanOpVersion` | | ✓ | | | | |
| `_InspPlanDepdntCharVers` | | ✓ | | | | |
| `_InspPlanOperation` | | ✓ | | | | |
| `_InspPlan` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Operation Characteristics - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType: { name: 'InspectionPlanCharacteristic' }
define view entity I_InspPlanOpCharcVersionTP_2 as projection on R_InspPlanOpCharcVersionTP
{
  key     InspectionPlanGroup,
  key     BOOOperationInternalID,
  key     BOOCharacteristic,
  key     BOOCharacteristicVersion,
  key     InspectionPlan,
  
  ValidityStartDate,
  ValidityEndDate,
  ChangeNumber,
  IsDeleted,
  BOOOperationPRTInternalID,
  InspectionMethod,
  InspectionMethodVersion,
  InspectionMethodPlant,
  InspSpecImportanceCode,
  InspectorQualification,
  InspectionSpecification,
  InspectionSpecificationVersion,
  InspectionSpecificationPlant,
  @Semantics.booleanIndicator: true
  BOOCharcHasInspSpecReference,
          
  //          cast( BOOCharcHasInspSpecReference as boolean preserving type) as BOOCharcHasInspSpecReference,
  InspSpecControlIndicators,
  //     ------CONTROL INDICATORS--------
   @Semantics.booleanIndicator: true
   cast ( InspSpecIsQuantitative as qkzqunmk preserving type ) as InspSpecIsQuantitative,
  // Both IsQuantitive and below mean the same
  //  InspSpecCharacteristicType,
  @Semantics.booleanIndicator: true
  InspSpecIsMeasuredValueRqd,
  @Semantics.booleanIndicator: true
  InspSpecIsSelectedSetRequired,
  @Semantics.booleanIndicator: true
  InspSpecIsUpperLimitRequired,
  @Semantics.booleanIndicator: true
  InspSpecIsLowerLimitRequired,
  @Semantics.booleanIndicator: true
  InspSpecIsTargetValueInLimit,
  InspectionScope,
  @Semantics.booleanIndicator: true
  InspSpecIsLongTermInspection,
  InspSpecRecordingType,
  @Semantics.booleanIndicator: true
  InspResultIsDocumentationRqd,
  InspSpecCharcCategory,
  @Semantics.booleanIndicator: true
  InspSpecIsSampleQtyAdditive,
  @Semantics.booleanIndicator: true
  InspSpecIsDestructive,
  InspSpecResultCalculation,
  @Semantics.booleanIndicator: true
  InspSpecIsSamplingProcedRqd,
  @Semantics.booleanIndicator: true
  InspSpecIsScrapRelevant,
  @Semantics.booleanIndicator: true
  InspSpecHasFixedCtrlIndicators,
  @Semantics.booleanIndicator: true
  InspSpecIsTestEquipmentRqd,
  @Semantics.booleanIndicator: true
  InspSpecIsDefectRecordingRqd,
  @Semantics.booleanIndicator: true
  InspSpecIsDefectsRecgAutomatic,
  @Semantics.booleanIndicator: true
  InspSpecIsChgDocRequired,
  @Semantics.booleanIndicator: true
  InspSpecIsControlChartUsed,
  InspSpecPrintControl,
  // Additional pair of Limits
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecFirstUpperSpecLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasFirstUpperSpecLimit,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecFirstLowerSpecLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasFirstLowerSpecLimit,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecSecondUpperSpecLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasSecondUprSpecLimit,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecSecondLowerSpecLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasSecondLowrSpecLimit,
          
  //     ------  END CONTROL INDICATORS--------
  InspSpecInputProcedure,
  @Semantics.booleanIndicator: true
  InspSpecHasFormula,
  InspSpecFormula1,
  InspSpecFormula2,
  InspSpecNumberOfClasses,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecClassWidthQty,
  @Semantics.booleanIndicator: true
  InspSpecHasClassWidth,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecClassMidpointQty,
  @Semantics.booleanIndicator: true
  InspSpecHasClassMidpoint,
  InspToleranceSpecification,
  InspSpecDecimalPlaces,
  InspectionSpecificationUnit,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecTargetValue,
  @Semantics.booleanIndicator: true
  InspSpecHasTargetValue,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecUpperLimit,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecLowerLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasLowerLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasUpperLimit,
  InspSpecDefectCodeGrpRejection,
  InspSpecDefectCodeRejection,
  InspSpecDefectCodeGrpRjcnUpper,
  InspSpecDefectCodeRjcnUpper,
  InspSpecDefectCodeGrpRjcnLower,
  InspSpecDefectCodeRjcnLower,
  SelectedCodeSet,
  SelectedCodeSetPlant,
  InspSpecAdditionalCatalog2,
  InspSpecAdditionalSelectedSet2,
  InspSpecAdditionalCodeGroup2,
  InspSpecAddlSeldCodeSetPlant2,
  InspSpecAdditionalCatalog3,
  InspSpecAdditionalSelectedSet3,
  InspSpecAdditionalCodeGroup3,
  InspSpecAddlSeldCodeSetPlant3,
  InspSpecAdditionalCatalog4,
  InspSpecAdditionalSelectedSet4,
  InspSpecAdditionalCodeGroup4,
  InspSpecAddlSeldCodeSetPlant4,
  InspSpecAdditionalCatalog5,
  InspSpecAdditionalSelectedSet5,
  InspSpecAdditionalCodeGroup5,
  InspSpecAddlSeldCodeSetPlant5,
  
  SamplingProcedure,
  InspCharacteristicSampleUnit,
  @Semantics.quantity.unitOfMeasure: 'InspCharacteristicSampleUnit'
  BOOCharcSampleQuantity,
  InspSpecInformationField1,
  InspSpecInformationField2,
  InspSpecInformationField3,
  InspectionSpecificationText,
  ChangedDateTime,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  LastChangeDate,
  BillOfOperationsVersion,
  
  _InspectionPlanVersion : redirected to I_InspectionPlanVersionTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanOpVersion : redirected to I_InspPlanOperationVersTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanDepdntCharVers : redirected to I_InspPlanDepdntCharcVersTP_2,
  _InspPlanOperation : redirected to parent I_InspPlanOperationTP_2,
  _InspPlan : redirected to I_InspectionPlanTP_2
}
```
