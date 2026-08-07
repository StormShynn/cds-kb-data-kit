---
name: I_INSPECTIONRESULTVALUETP_2
description: "Inspectionresultvaluetp 2"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
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
# I_INSPECTIONRESULTVALUETP_2

**Inspectionresultvaluetp 2**

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
| `InspResultValueInternalID` | ✓ | |  |  |  |  |
| `InspectionResultAttribute` |  | |  |  |  |  |
| `InspResultItemInternalID` |  | |  |  |  |  |
| `InspectionSubsetInternalID` |  | |  |  |  |  |
| `InspectionResultMeasuredValue` |  | |  |  |  |  |
| `InspResultHasMeasuredValue` |  | |  |  |  |  |
| `InspectionResultOriginalValue` |  | |  |  |  |  |
| `InspectionResultText` |  | |  |  |  |  |
| `InspectionResultHasLongText` |  | |  |  |  |  |
| `InspectionResultItem` |  | |  |  |  |  |
| `InspRsltFreeDefinedTestEquip` |  | |  |  |  |  |
| `InspectionValuationResult` |  | |  |  |  |  |
| `CharacteristicAttributeCodeGrp` |  | |  |  |  |  |
| `InspectionResultCodeGroup2` |  | |  |  |  |  |
| `InspectionResultCodeGroup3` |  | |  |  |  |  |
| `InspectionResultCodeGroup4` |  | |  |  |  |  |
| `InspectionResultCodeGroup5` |  | |  |  |  |  |
| `CharacteristicAttributeCode` |  | |  |  |  |  |
| `InspectionResultCode2` |  | |  |  |  |  |
| `InspectionResultCode3` |  | |  |  |  |  |
| `InspectionResultCode4` |  | |  |  |  |  |
| `InspectionResultCode5` |  | |  |  |  |  |
| `CharcAttributeCodeVers` |  | |  |  |  |  |
| `InspectionResultCode2Vers` |  | |  |  |  |  |
| `InspectionResultCode3Vers` |  | |  |  |  |  |
| `InspectionResultCode4Vers` |  | |  |  |  |  |
| `InspectionResultCode5Vers` |  | |  |  |  |  |
| `CharacteristicAttributeCatalog` |  | |  |  |  |  |
| `InspectionResultCatalog2` |  | |  |  |  |  |
| `InspectionResultCatalog3` |  | |  |  |  |  |
| `InspectionResultCatalog4` |  | |  |  |  |  |
| `InspectionResultCatalog5` |  | |  |  |  |  |
| `Inspector` |  | |  |  |  |  |
| `InspectionStartDate` |  | |  |  |  |  |
| `InspectionStartTime` |  | |  |  |  |  |
| `InspectionEndDate` |  | |  |  |  |  |
| `InspectionEndTime` |  | |  |  |  |  |
| `InspectionNumberOfDefects` |  | |  |  |  |  |
| `DefectClass` |  | |  |  |  |  |
| `InspResultNrOfAddlDcmlsPlaces` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `ChangedTime` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionResult` | | ✓ | | | | |
| `_InspectionCharacteristic` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Single Inspection Result - TP'
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  }
}
define view entity I_InspectionResultValueTP_2
  as projection on R_InspectionResultValueTP
{
  key InspectionLot,
  key InspPlanOperationInternalID,
  key InspectionCharacteristic,
  key InspResultValueInternalID,
      InspectionResultAttribute,
      InspResultItemInternalID,
      InspectionSubsetInternalID,
      InspectionResultMeasuredValue,
      @Semantics.booleanIndicator: true
      InspResultHasMeasuredValue,
      InspectionResultOriginalValue,
      InspectionResultText,
      @Semantics.booleanIndicator: true
      InspectionResultHasLongText,
      InspectionResultItem,
      InspRsltFreeDefinedTestEquip,
      InspectionValuationResult,
      CharacteristicAttributeCodeGrp,
      InspectionResultCodeGroup2,
      InspectionResultCodeGroup3,
      InspectionResultCodeGroup4,
      InspectionResultCodeGroup5,
      CharacteristicAttributeCode,
      InspectionResultCode2,
      InspectionResultCode3,
      InspectionResultCode4,
      InspectionResultCode5,
      CharcAttributeCodeVers,
      InspectionResultCode2Vers,
      InspectionResultCode3Vers,
      InspectionResultCode4Vers,
      InspectionResultCode5Vers,
      CharacteristicAttributeCatalog,
      InspectionResultCatalog2,
      InspectionResultCatalog3,
      InspectionResultCatalog4,
      InspectionResultCatalog5,
      Inspector,
      InspectionStartDate,
      InspectionStartTime,
      InspectionEndDate,
      InspectionEndTime,
      InspectionNumberOfDefects,
      DefectClass,
      InspResultNrOfAddlDcmlsPlaces,
      CreatedByUser,
      CreationDate,
      LastChangedByUser,
      LastChangeDate,
      ChangedTime,
      CreationTime,

      /* Associations */
      _InspectionLot    : redirected to I_InspectionLotTP_2,
      _InspectionResult : redirected to parent I_InspectionResultTP_2,
      _InspectionCharacteristic: redirected to I_InspCharacteristicTP_2,
      _InspectionOperation

}
```
