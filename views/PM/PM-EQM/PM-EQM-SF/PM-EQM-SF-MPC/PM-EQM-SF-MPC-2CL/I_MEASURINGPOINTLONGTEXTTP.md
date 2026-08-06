---
name: I_MEASURINGPOINTLONGTEXTTP
description: Measuringpointlongtexttp
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
  - text
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINTLONGTEXTTP

**Measuringpointlongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MeasuringPoint` | `MeasuringPoint` |
| `Language` | `Language` |
| `MeasuringPointLongText` | `MeasuringPointLongText` |
| `_MeasuringPoint` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Measuring Point Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MIXED
   },
   semanticKey: ['MeasuringPoint']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MeasuringPointLongTextTP
  as projection on R_MeasuringPointLongTextTP
{
  key MeasuringPoint,

      @Semantics.language: true
      @Consumption.hidden: true
      Language,

      MeasuringPointLongText,

      _MeasuringPoint : redirected to parent I_MeasuringPointTP_2

}
```
