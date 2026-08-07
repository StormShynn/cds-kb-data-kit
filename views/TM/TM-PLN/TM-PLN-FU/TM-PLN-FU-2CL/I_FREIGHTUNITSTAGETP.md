---
name: I_FREIGHTUNITSTAGETP
description: Freightunitstagetp
app_component: TM-PLN-FU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-PLN
  - TM-PLN-FU
  - interface-view
  - transactional-processing
  - freight
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITSTAGETP

**Freightunitstagetp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStageUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TransportationOrderStage` |  | |  |  |  |  |
| `TranspOrdStageType` |  | |  |  |  |  |
| `TranspOrdStageCategory` |  | |  |  |  |  |
| `TranspOrdStageDistance` |  | |  |  |  |  |
| `TranspOrdStageDistanceUnit` |  | |  |  |  |  |
| `TranspOrdStageNetDuration` |  | |  |  |  |  |
| `TranspOrdStageSrceStopUUID` |  | |  |  |  |  |
| `TranspOrdStageDestStopUUID` |  | |  |  |  |  |
| `I_FreightUnitStopTP` |  | |  | `FreightUnitStage._TranspOrderStop as _FreightUnitStop : redirected to parent I_FreightUnitStopTP` |  |  |
| `I_FreightUnitTP` |  | |  | `FreightUnitStage._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Stage - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
    semanticKey: ['TransportationOrderStage'],
    representativeKey: 'TransportationOrderStageUUID',
    sapObjectNodeType.name: 'FreightUnitStage'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitStageTP
  as projection on R_TransportationOrderStageTP as FreightUnitStage
{
      // Identification
  key TransportationOrderStageUUID,
      TransportationOrderUUID,
      TransportationOrderStage,
      
      // Key Characteristics
      TranspOrdStageType,
      TranspOrdStageCategory,
      
      // Distance and Duration
      @Semantics.quantity.unitOfMeasure: 'TranspOrdStageDistanceUnit'
      TranspOrdStageDistance,
      TranspOrdStageDistanceUnit,      
      TranspOrdStageNetDuration,
      
      TranspOrdStageSrceStopUUID,
      TranspOrdStageDestStopUUID,

      FreightUnitStage._TranspOrderStop as _FreightUnitStop : redirected to parent I_FreightUnitStopTP,
      FreightUnitStage._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP

}                 
where FreightUnitStage.TransportationOrderCategory = 'FU'
```
