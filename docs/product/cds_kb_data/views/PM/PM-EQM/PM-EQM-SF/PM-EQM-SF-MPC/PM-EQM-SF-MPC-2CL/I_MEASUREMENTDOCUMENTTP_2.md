---
name: I_MEASUREMENTDOCUMENTTP_2
description: "Measurementdocumenttp 2"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - transactional-processing
  - document
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASUREMENTDOCUMENTTP_2

**Measurementdocumenttp 2**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementDocument` | ✓ | |  |  |  |  |
| `MeasuringPoint` |  | |  |  |  |  |
| `MeasuringPointPositionNumber` |  | |  |  |  |  |
| `MsmtRdngDate` |  | |  |  |  |  |
| `MsmtRdngTime` |  | |  |  |  |  |
| `Characteristic` |  | |  |  |  |  |
| `MsmtDocumentReferredOrder` |  | |  |  |  |  |
| `RefdMaintOrderOpStatusObject` |  | |  |  |  |  |
| `MaintenanceOrderOperation` |  | |  |  |  |  |
| `MaintenanceOrderSubOperation` |  | |  |  |  |  |
| `MsmtIsDoneAfterTaskCompltn` |  | |  |  |  |  |
| `CharcValueUnit` |  | |  |  |  |  |
| `MeasurementReading` |  | |  |  |  |  |
| `MeasurementReadingInEntryUoM` |  | |  |  |  |  |
| `MeasurementReadingEntryUoM` |  | |  |  |  |  |
| `MeasurementCounterReading` |  | |  |  |  |  |
| `MsmtCounterReadingDifference` |  | |  |  |  |  |
| `TotalMsmtRdngIsSetExternally` |  | |  |  |  |  |
| `MeasuringPointTargetValue` |  | |  |  |  |  |
| `MsmtValuationCode` |  | |  |  |  |  |
| `MeasurementDocumentText` |  | |  |  |  |  |
| `MeasurementDocumentHasLongText` |  | |  |  |  |  |
| `MsmtRdngByUser` |  | |  |  |  |  |
| `MsmtRdngStatus` |  | |  |  |  |  |
| `MsmtCntrReadingDiffIsEntered` |  | |  |  |  |  |
| `MsmtRdngIsReversed` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MsmtCounterReadingIsReplaced` |  | |  |  |  |  |
| `_FailedMeasurementReading` | | ✓ | | | | |
| `_MeasurementDocumentLongText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Measurement Document - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MeasurementDocument']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'MeasurementDocument'
define root view entity I_MeasurementDocumentTP_2
provider contract transactional_interface
  as projection on R_MeasurementDocumentTP as MeasurementDocument

{
  key MeasurementDocument,

      MeasuringPoint,

      MeasuringPointPositionNumber,

      MsmtRdngDate,

      MsmtRdngTime,

      Characteristic,

      MsmtDocumentReferredOrder,

      RefdMaintOrderOpStatusObject,

      MaintenanceOrderOperation,

      MaintenanceOrderSubOperation,

      MsmtIsDoneAfterTaskCompltn,

      CharcValueUnit,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      MeasurementReading,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      MeasurementReadingInEntryUoM,

      MeasurementReadingEntryUoM,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      MeasurementCounterReading,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      MsmtCounterReadingDifference,

      TotalMsmtRdngIsSetExternally,

      MeasuringPointTargetValue,

      MsmtValuationCode,

      MeasurementDocumentText,

      MeasurementDocumentHasLongText,

      MsmtRdngByUser,

      MsmtRdngStatus,

      MsmtCntrReadingDiffIsEntered,

      MsmtRdngIsReversed,

      @Consumption.hidden: true
      AuthorizationGroup,

      MsmtCounterReadingIsReplaced,

      _FailedMeasurementReading    : redirected to composition child I_FailedMeasurementReadingTP,

      _MeasurementDocumentLongText : redirected to composition child I_MsmtDocumentLongTextTP

}
```
