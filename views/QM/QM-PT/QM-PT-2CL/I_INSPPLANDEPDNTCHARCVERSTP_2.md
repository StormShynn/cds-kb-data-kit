---
name: I_INSPPLANDEPDNTCHARCVERSTP_2
description: Inspplandepdntcharcverstp 2
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
# I_INSPPLANDEPDNTCHARCVERSTP_2

**Inspplandepdntcharcverstp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionPlanGroup` | `InspectionPlanGroup` |
| key `InspectionPlan` | `InspectionPlan` |
| key `BOOOperationInternalID` | `BOOOperationInternalID` |
| key `BOOCharacteristic` | `BOOCharacteristic` |
| key `BOODpndantCharcSpec` | `BOODpndantCharcSpec` |
| key `BOODpndantCharcSpecVers` | `BOODpndantCharcSpecVers` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ChangeNumber` | `ChangeNumber` |
| `IsDeleted` | `IsDeleted` |
| `BOOOperationPRTInternalID` | `BOOOperationPRTInternalID` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `BillOfOperationsVariant` | `BillOfOperationsVariant` |
| `BOOToMaterialInternalID` | `BOOToMaterialInternalID` |
| `InspSpecDecimalPlaces` | `InspSpecDecimalPlaces` |
| `InspectionSpecificationUnit` | `InspectionSpecificationUnit` |
| `InspSpecTargetValue` | `InspSpecTargetValue` |
| `InspSpecHasTargetValue` | `InspSpecHasTargetValue` |
| `InspSpecUpperLimit` | `InspSpecUpperLimit` |
| `InspSpecLowerLimit` | `InspSpecLowerLimit` |
| `InspSpecHasUpperLimit` | `InspSpecHasUpperLimit` |
| `InspSpecHasLowerLimit` | `InspSpecHasLowerLimit` |
| `InspSpecNumberOfClasses` | `InspSpecNumberOfClasses` |
| `InspSpecClassWidthQty` | `InspSpecClassWidthQty` |
| `InspSpecHasClassWidth` | `InspSpecHasClassWidth` |
| `InspSpecClassMidpointQty` | `InspSpecClassMidpointQty` |
| `InspSpecHasClassMidpoint` | `InspSpecHasClassMidpoint` |
| `SelectedCodeSet` | `SelectedCodeSet` |
| `SelectedCodeSetPlant` | `SelectedCodeSetPlant` |
| `InspSpecAdditionalCatalog2` | `InspSpecAdditionalCatalog2` |
| `InspSpecAdditionalSelectedSet2` | `InspSpecAdditionalSelectedSet2` |
| `InspSpecAdditionalCodeGroup2` | `InspSpecAdditionalCodeGroup2` |
| `InspSpecAddlSeldCodeSetPlant2` | `InspSpecAddlSeldCodeSetPlant2` |
| `InspSpecAdditionalCatalog3` | `InspSpecAdditionalCatalog3` |
| `InspSpecAdditionalSelectedSet3` | `InspSpecAdditionalSelectedSet3` |
| `InspSpecAdditionalCodeGroup3` | `InspSpecAdditionalCodeGroup3` |
| `InspSpecAddlSeldCodeSetPlant3` | `InspSpecAddlSeldCodeSetPlant3` |
| `InspSpecAdditionalCatalog4` | `InspSpecAdditionalCatalog4` |
| `InspSpecAdditionalSelectedSet4` | `InspSpecAdditionalSelectedSet4` |
| `InspSpecAdditionalCodeGroup4` | `InspSpecAdditionalCodeGroup4` |
| `InspSpecAddlSeldCodeSetPlant4` | `InspSpecAddlSeldCodeSetPlant4` |
| `InspSpecAdditionalCatalog5` | `InspSpecAdditionalCatalog5` |
| `InspSpecAdditionalSelectedSet5` | `InspSpecAdditionalSelectedSet5` |
| `InspSpecAdditionalCodeGroup5` | `InspSpecAdditionalCodeGroup5` |
| `InspSpecAddlSeldCodeSetPlant5` | `InspSpecAddlSeldCodeSetPlant5` |
| `ChangedDateTime` | `ChangedDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `BillOfOperationsVersion` | `BillOfOperationsVersion` |
| `_InspPlanOperation` | *Association* |
| `_InspPlanOpCharcVers` | *Association* |
| `_InspPlanVersion` | *Association* |
| `_InspPlan` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Dependent Characteristics Version - TP'
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
@ObjectModel.sapObjectNodeType: { name: 'InspPlnDependentCharacteristic' }
define view entity I_InspPlanDepdntCharcVersTP_2 as projection on R_InspPlanDepdntCharcVersTP
{
  key InspectionPlanGroup,
  key InspectionPlan,
  key BOOOperationInternalID,
  key BOOCharacteristic,
  key BOODpndantCharcSpec,
  key BOODpndantCharcSpecVers,
  
  ValidityStartDate,
  ValidityEndDate,
  ChangeNumber,  
  
  IsDeleted,
  BOOOperationPRTInternalID,
  Material,
  Plant,
  BillOfOperationsVariant,
  BOOToMaterialInternalID,
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
  InspSpecHasUpperLimit,
  @Semantics.booleanIndicator: true
  InspSpecHasLowerLimit,
  InspSpecNumberOfClasses,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecClassWidthQty,
  @Semantics.booleanIndicator: true
  InspSpecHasClassWidth,
  @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
  InspSpecClassMidpointQty,
  @Semantics.booleanIndicator: true
  InspSpecHasClassMidpoint,
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
  ChangedDateTime,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  LastChangeDate,
  BillOfOperationsVersion,


//ToDo: Check if the below fields are needed. They are used in A_InspPlanDepdntCharc
//         _InspPlanCharc.InspSpecIsQuantitative,
//         _InspPlanCharc.InspSpecIsDefectsRecgAutomatic,
//         _InspPlanCharc.InspSpecIsSelectedSetRequired,
//         _InspPlanCharc.InspectionSpecificationText,
//         _InspPlanCharc.InspSpecIsDefectRecordingRqd,

//         Supplier,
//         Customer,
//         BOOSearchText,
//         MultipleSpecificationObject,
//         MultipleSpecificationObjType,


  
  //_InspPlan.ChangedDateTime
  _InspPlanOperation : redirected to parent I_InspPlanOperationTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspPlanOpCharcVers : redirected to I_InspPlanOpCharcVersionTP_2,
  _InspPlanVersion : redirected to I_InspectionPlanVersionTP_2,
  _InspPlan : redirected to I_InspectionPlanTP_2
}
```
