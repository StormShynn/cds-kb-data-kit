---
name: I_INSPECTIONRESULTTP_2
description: "Inspectionresulttp 2"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - transactional-processing
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTTP_2

**Inspectionresulttp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `InspPlanOperationInternalID` | ✓ | |  |  |  |  |
| `InspectionCharacteristic` | ✓ | |  |  |  |  |
| `Inspector` |  | |  |  |  |  |
| `InspectionResultStatus` |  | |  |  |  |  |
| `InspResultIsCompletionForced` |  | |  |  |  |  |
| `InspectionResultAttribute` |  | |  |  |  |  |
| `InspectionResultOrigin` |  | |  |  |  |  |
| `InspectionValuationResult` |  | |  |  |  |  |
| `InspResultDynModifValuation` |  | |  |  |  |  |
| `InspectionResultMeanValue` |  | |  |  |  |  |
| `InspectionResultHasMeanValue` |  | |  |  |  |  |
| `InspectionResultMaximumValue` |  | |  |  |  |  |
| `InspResultHasMaximumValue` |  | |  |  |  |  |
| `InspectionResultMinimumValue` |  | |  |  |  |  |
| `InspResultHasMinimumValue` |  | |  |  |  |  |
| `InspectionResultOriginalValue` |  | |  |  |  |  |
| `InspResultValidValuesNumber` |  | |  |  |  |  |
| `InspResultNmbrOfRecordedRslts` |  | |  |  |  |  |
| `InspectionResultText` |  | |  |  |  |  |
| `InspectionResultHasLongText` |  | |  |  |  |  |
| `CharacteristicAttributeCodeGrp` |  | |  |  |  |  |
| `CharacteristicAttributeCode` |  | |  |  |  |  |
| `CharcAttributeCodeVers` |  | |  |  |  |  |
| `InspRsltFreeDefinedTestEquip` |  | |  |  |  |  |
| `InspRsltBelowToleranceValsNmbr` |  | |  |  |  |  |
| `InspRsltAboveToleranceValsNmbr` |  | |  |  |  |  |
| `InspRsltNonconformingValsNmbr` |  | |  |  |  |  |
| `InspectionNumberOfDefects` |  | |  |  |  |  |
| `InspRsltAboveToleranceFraction` |  | |  |  |  |  |
| `InspRsltBelowToleranceFraction` |  | |  |  |  |  |
| `InspResultVariance` |  | |  |  |  |  |
| `InspResultHasVariance` |  | |  |  |  |  |
| `CharacteristicAttributeCatalog` |  | |  |  |  |  |
| `InspectionResultCatalog2` |  | |  |  |  |  |
| `InspectionResultCatalog3` |  | |  |  |  |  |
| `InspectionResultCatalog4` |  | |  |  |  |  |
| `InspectionResultCatalog5` |  | |  |  |  |  |
| `InspectionResultCode2` |  | |  |  |  |  |
| `InspectionResultCode3` |  | |  |  |  |  |
| `InspectionResultCode4` |  | |  |  |  |  |
| `InspectionResultCode5` |  | |  |  |  |  |
| `InspectionResultCode2Vers` |  | |  |  |  |  |
| `InspectionResultCode3Vers` |  | |  |  |  |  |
| `InspectionResultCode4Vers` |  | |  |  |  |  |
| `InspectionResultCode5Vers` |  | |  |  |  |  |
| `InspectionResultCodeGroup2` |  | |  |  |  |  |
| `InspectionResultCodeGroup3` |  | |  |  |  |  |
| `InspectionResultCodeGroup4` |  | |  |  |  |  |
| `InspectionResultCodeGroup5` |  | |  |  |  |  |
| `DefectClass` |  | |  |  |  |  |
| `InspectionPartialSampleSize` |  | |  |  |  |  |
| `InspectionStartDate` |  | |  |  |  |  |
| `InspectionStartTime` |  | |  |  |  |  |
| `InspectionEndDate` |  | |  |  |  |  |
| `InspectionEndTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `ChangedTime` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `_InspectionCharacteristic` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionResultValue` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Summarized Inspection Result - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
}

define view entity I_InspectionResultTP_2 as projection on R_InspectionResultTP 

{
  key InspectionLot,
  key InspPlanOperationInternalID,
  key InspectionCharacteristic,
  Inspector,
  InspectionResultStatus,
  @Semantics.booleanIndicator: true  
  InspResultIsCompletionForced,
  InspectionResultAttribute,
  InspectionResultOrigin,
  InspectionValuationResult,
  InspResultDynModifValuation,
  InspectionResultMeanValue,
  @Semantics.booleanIndicator: true
  InspectionResultHasMeanValue,
  InspectionResultMaximumValue,
  @Semantics.booleanIndicator: true
  InspResultHasMaximumValue,
  InspectionResultMinimumValue,
  @Semantics.booleanIndicator: true
  InspResultHasMinimumValue,
  InspectionResultOriginalValue,
  InspResultValidValuesNumber,
  InspResultNmbrOfRecordedRslts,
  InspectionResultText,
  @Semantics.booleanIndicator: true
  InspectionResultHasLongText,
//  Language,
  CharacteristicAttributeCodeGrp,
  CharacteristicAttributeCode,
  CharcAttributeCodeVers,
  InspRsltFreeDefinedTestEquip,
  InspRsltBelowToleranceValsNmbr,
  InspRsltAboveToleranceValsNmbr,
  InspRsltNonconformingValsNmbr,
  InspectionNumberOfDefects,
  InspRsltAboveToleranceFraction,
  InspRsltBelowToleranceFraction,
  InspResultVariance,
  @Semantics.booleanIndicator: true
  InspResultHasVariance,
  CharacteristicAttributeCatalog,
  InspectionResultCatalog2,
  InspectionResultCatalog3,
  InspectionResultCatalog4,
  InspectionResultCatalog5,
  InspectionResultCode2,
  InspectionResultCode3,
  InspectionResultCode4,
  InspectionResultCode5,
  InspectionResultCode2Vers,
  InspectionResultCode3Vers,
  InspectionResultCode4Vers,
  InspectionResultCode5Vers,
  InspectionResultCodeGroup2,
  InspectionResultCodeGroup3,
  InspectionResultCodeGroup4,
  InspectionResultCodeGroup5,
  DefectClass,
  InspectionPartialSampleSize,
  InspectionStartDate,
  InspectionStartTime,
  InspectionEndDate,
  InspectionEndTime,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  LastChangeDate,
  ChangedDateTime,
  ChangedTime,
  CreationTime,
//  InspResultNrOfAddlDcmlsPlaces,

  /* Associations */
  _InspectionCharacteristic : redirected to parent I_InspCharacteristicTP_2,
  _InspectionLot            : redirected to I_InspectionLotTP_2,
  _InspectionResultValue    : redirected to composition child I_InspectionResultValueTP_2,
  
  _InspectionOperation
  
}
```
