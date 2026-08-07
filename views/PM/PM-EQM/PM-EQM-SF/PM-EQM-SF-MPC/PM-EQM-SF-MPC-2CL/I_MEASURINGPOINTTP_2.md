---
name: I_MEASURINGPOINTTP_2
description: Measuringpointtp 2
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - transactional-processing
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINTTP_2

**Measuringpointtp 2**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MeasuringPoint` | ✓ | |  |  |
| `MeasuringPointDescription` |  | |  |  |
| `MeasuringPointObjectIdentifier` |  | |  |  |
| `TechnicalObjectType` |  | |  |  |
| `MeasuringPointPositionNumber` |  | |  |  |
| `MeasuringPointCategory` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `MeasuringPointIsCounter` |  | |  |  |
| `MsrgPtInternalCharacteristic` |  | |  |  |
| `CharcValueUnit` |  | |  |  |
| `MeasuringPointDecimalPlaces` |  | |  |  |
| `MeasuringPointExponent` |  | |  |  |
| `MeasuringPointCodeGroup` |  | |  |  |
| `ValuationCodeIsSufficient` |  | |  |  |
| `Assembly` |  | |  |  |
| `MeasuringPointIsInactive` |  | |  |  |
| `MeasuringPointShortText` |  | |  |  |
| `MeasurementRangeUnit` |  | |  |  |
| `MsmtRdngSourceMeasuringPoint` |  | |  |  |
| `MeasuringPointTargetValue` |  | |  |  |
| `MeasuringPointMaximumThreshold` |  | |  |  |
| `MeasuringPointMinimumThreshold` |  | |  |  |
| `MeasuringPointAnnualEstimate` |  | |  |  |
| `CounterOverflowRdngThreshold` |  | |  |  |
| `MsrgPtIsCountingBackwards` |  | |  |  |
| `MeasurementTransferIsSupported` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `Equipment` |  | |  |  |
| `MsmtRdngTransferMode` |  | |  |  |
| `_LongText` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Measuring Point'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['MeasuringPoint']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'MeasuringPoint'
define root view entity I_MeasuringPointTP_2
provider contract transactional_interface
  as projection on R_MeasuringPointTP as MeasuringPointTP
{

  key MeasuringPoint,

      MeasuringPointDescription,

      MeasuringPointObjectIdentifier,

      TechnicalObjectType,

      MeasuringPointPositionNumber,

      MeasuringPointCategory,

      CreationDate,

      LastChangeDate,

      @Consumption.hidden: true
      AuthorizationGroup,

      MeasuringPointIsCounter,

      MsrgPtInternalCharacteristic,

      CharcValueUnit,

      MeasuringPointDecimalPlaces,

      MeasuringPointExponent,

      MeasuringPointCodeGroup,

      ValuationCodeIsSufficient,

      Assembly,

      MeasuringPointIsInactive,

      MeasuringPointShortText,

      MeasurementRangeUnit,

      MsmtRdngSourceMeasuringPoint,

      MeasuringPointTargetValue,

      MeasuringPointMaximumThreshold,

      MeasuringPointMinimumThreshold,

      MeasuringPointAnnualEstimate,

      CounterOverflowRdngThreshold,

      MsrgPtIsCountingBackwards,

      MeasurementTransferIsSupported,

      FunctionalLocation,

      Equipment,

      MsmtRdngTransferMode,
      
      _LongText : redirected to composition child I_MeasuringPointLongTextTP


}
```
