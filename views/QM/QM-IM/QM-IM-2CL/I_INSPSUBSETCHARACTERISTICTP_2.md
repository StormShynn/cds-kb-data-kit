---
name: I_INSPSUBSETCHARACTERISTICTP_2
description: Inspsubsetcharacteristictp 2
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSUBSETCHARACTERISTICTP_2

**Inspsubsetcharacteristictp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |
| `InspPlanOperationInternalID` | ✓ | |  |  |
| `InspectionSubsetInternalID` | ✓ | |  |  |
| `InspectionCharacteristic` | ✓ | |  |  |
| `InspectionCharacteristicStatus` |  | |  |  |
| `QualityControlChart` |  | |  |  |
| `InspSampleAcceptanceNumber` |  | |  |  |
| `InspSampleRejectionNumber` |  | |  |  |
| `InspSampleValuationRule` |  | |  |  |
| `InspectionSampleSize` |  | |  |  |
| `InspCharacteristicSampleUnit` |  | |  |  |
| `InspSpecSampleQuantityFactor` |  | |  |  |
| `InspLotDynRuleStage` |  | |  |  |
| `InspectionSeverity` |  | |  |  |
| `InspSubsetCharcCreationDate` |  | |  |  |
| `_InspectionSubset` | | ✓ | | |
| `_InspectionLot` | | ✓ | | |
| `_InspectionOperation` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Point Characteristic - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
  }
}
define view entity I_InspSubsetCharacteristicTP_2
  as projection on R_InspSubsetCharacteristicTP as InspSubsetCharacteristic
{
  key InspectionLot,
  key InspPlanOperationInternalID,
  key InspectionSubsetInternalID,
  key InspectionCharacteristic,
      InspectionCharacteristicStatus,
      QualityControlChart,
      InspSampleAcceptanceNumber,
      InspSampleRejectionNumber,
      InspSampleValuationRule,
      InspectionSampleSize,
      InspCharacteristicSampleUnit,
      InspSpecSampleQuantityFactor,
      InspLotDynRuleStage,
      InspectionSeverity,
      InspSubsetCharcCreationDate,

      _InspectionSubset    : redirected to parent I_InspectionSubsetTP_21,
      _InspectionLot       : redirected to I_InspectionLotTP_2,
      _InspectionOperation : redirected to I_InspectionOperationTP_2
}
```
