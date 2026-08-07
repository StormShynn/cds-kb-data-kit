---
name: I_FREIGHTUNITSTOPTP
description: "Freightunitstoptp"
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
# I_FREIGHTUNITSTOPTP

**Freightunitstoptp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStopUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TransportationOrderStop` |  | |  |  |  |  |
| `TranspOrdStopCategory` |  | |  |  |  |  |
| `TranspOrdStopRole` |  | |  |  |  |  |
| `LocationAdditionalUUID` |  | |  |  |  |  |
| `LocationId` |  | |  |  |  |  |
| `LocationUNCode` |  | |  |  |  |  |
| `LocationIATACode` |  | |  |  |  |  |
| `TranspOrdStopAccptblStrtDteTme` |  | |  |  |  |  |
| `TranspOrdStopReqStartDteTme` |  | |  |  |  |  |
| `TranspOrdStopReqEndDteTme` |  | |  |  |  |  |
| `TranspOrdStopAccptblEndDteTme` |  | |  |  |  |  |
| `TranspOrdStopDteTme` |  | |  |  |  |  |
| `TranspOrdStopSequencePosition` |  | |  |  |  |  |
| `TranspOrdCapacityStopUUID` |  | |  |  |  |  |
| `TranspOrdStopCapacityItemUUID` |  | |  |  |  |  |
| `TranspOrdStopExecIsBlocked` |  | |  |  |  |  |
| `I_FreightUnitTP` |  | |  | `FreightUnitStop._TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP` |  |  |
| `I_FreightUnitStageTP` |  | |  | `FreightUnitStop._TranspOrderStage as _FreightUnitStage : redirected to composition child I_FreightUnitStageTP` |  |  |
| `I_FrtUnitStopLocAdDfRpnTP` |  | |  | `FreightUnitStop._TrOrdStopLocAddrDfltRprstn as _FrtUnitStopLocAddrDfltRprstn : redirected to composition child I_FrtUnitStopLocAdDfRpnTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Stop - TP'
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
    semanticKey: ['TransportationOrderStop'],
    representativeKey: 'TransportationOrderStopUUID',
   sapObjectNodeType.name: 'FreightUnitStop'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitStopTP
  as projection on R_TransportationOrderStopTP as FreightUnitStop
{
      // Identification
  key TransportationOrderStopUUID,
      TransportationOrderUUID,
      TransportationOrderStop,

      // Key Characteristics
      TranspOrdStopCategory,
      TranspOrdStopRole,

      // Location
      LocationAdditionalUUID, // This is the RAW16 UUID of the Location; LocationUUID is the CHAR22 GUID
      LocationId,
      LocationUNCode,
      LocationIATACode,

      // Dates and Times
      TranspOrdStopAccptblStrtDteTme,
      TranspOrdStopReqStartDteTme,
      TranspOrdStopReqEndDteTme,
      TranspOrdStopAccptblEndDteTme,

      TranspOrdStopDteTme,

      // Further Attributes
      TranspOrdStopSequencePosition,

      // References to Freight Order
      TranspOrdCapacityStopUUID,
      TranspOrdStopCapacityItemUUID,

      // Status
      @Semantics.booleanIndicator
      TranspOrdStopExecIsBlocked,

      FreightUnitStop._TransportationOrder        as _FreightUnit                  : redirected to parent I_FreightUnitTP,
      @Semantics.valueRange.maximum: '1'
      FreightUnitStop._TranspOrderStage           as _FreightUnitStage             : redirected to composition child I_FreightUnitStageTP,
      FreightUnitStop._TrOrdStopLocAddrDfltRprstn as _FrtUnitStopLocAddrDfltRprstn : redirected to composition child I_FrtUnitStopLocAdDfRpnTP
}
where
  FreightUnitStop.TransportationOrderCategory = 'FU'
```
