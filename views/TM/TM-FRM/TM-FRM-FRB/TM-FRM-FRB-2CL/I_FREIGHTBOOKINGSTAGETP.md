---
name: I_FREIGHTBOOKINGSTAGETP
description: Freightbookingstagetp
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGSTAGETP

**Freightbookingstagetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderStageUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TransportationOrderStage` |  | |  |  |
| `TranspOrdStageType` |  | |  |  |
| `TranspOrdStageCategory` |  | |  |  |
| `TransportationMode` |  | |  |  |
| `TransportationModeCategory` |  | |  |  |
| `TransportationShippingType` |  | |  |  |
| `TranspOrdStageVoyage` |  | |  |  |
| `TranspOrdStageVessel` |  | |  |  |
| `TranspOrdStgeInvcgCarrLvl` |  | |  |  |
| `CarrierUUID` |  | |  |  |
| `Carrier` |  | |  |  |
| `TranspOrdStageSCACCode` |  | |  |  |
| `TranspOrdStgeInvcgCarrUUID` |  | |  |  |
| `TranspOrdStageInvoicingCarrier` |  | |  |  |
| `TranspOrdStgeInvcgSCACCode` |  | |  |  |
| `TranspOrdStageDistance` |  | |  |  |
| `TranspOrdStageDistanceUnit` |  | |  |  |
| `TranspOrdStageNetDuration` |  | |  |  |
| `TranspOrdStageSrceStopUUID` |  | |  |  |
| `TranspOrdStageDestStopUUID` |  | |  |  |
| `I_FreightBookingStopTP` |  | |  | `FreightBookingStage._TranspOrderStop as _FreightBookingStop : redirected to parent I_FreightBookingStopTP` |
| `I_FrtBkgStgeBPAddrDfltRprstnTP` |  | |  | `FreightBookingStage._TrOrdStgeBPAddrDfltRprstn as _FrtBkgStageBPAddrDfltRprstn : redirected to composition child I_FrtBkgStgeBPAddrDfltRprstnTP` |
| `I_FreightBookingTP` |  | |  | `FreightBookingStage._TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Stage - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TransportationOrderStage'],
   representativeKey: 'TransportationOrderStageUUID',
   sapObjectNodeType.name: 'FreightBookingStage'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingStageTP
  as projection on R_TransportationOrderStageTP as FreightBookingStage
{
      // Identification
  key TransportationOrderStageUUID,
      TransportationOrderUUID,
      TransportationOrderStage,

      // Key Characteristics
      TranspOrdStageType,
      TranspOrdStageCategory,
      TransportationMode,
      TransportationModeCategory,
      TransportationShippingType,
      TranspOrdStageVoyage,
      TranspOrdStageVessel,

      // Parties
      TranspOrdStgeInvcgCarrLvl,

      CarrierUUID,
      Carrier,
      TranspOrdStageSCACCode,

      TranspOrdStgeInvcgCarrUUID,
      TranspOrdStageInvoicingCarrier,
      TranspOrdStgeInvcgSCACCode,

      // Distance and Duration
      @Semantics.quantity.unitOfMeasure: 'TranspOrdStageDistanceUnit'
      TranspOrdStageDistance,
      TranspOrdStageDistanceUnit,
      TranspOrdStageNetDuration,

      TranspOrdStageSrceStopUUID,
      TranspOrdStageDestStopUUID,

      /* Redirections */
      FreightBookingStage._TranspOrderStop             as _FreightBookingStop          : redirected to parent I_FreightBookingStopTP,
      FreightBookingStage._TrOrdStgeBPAddrDfltRprstn   as _FrtBkgStageBPAddrDfltRprstn : redirected to composition child I_FrtBkgStgeBPAddrDfltRprstnTP,
      FreightBookingStage._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn : redirected to I_FrtBkgStgeBPAddrDfltRprstnTP,
      FreightBookingStage._InvcgCarrierAddrDfltRprstn  as _InvcgCarrierAddrDfltRprstn  : redirected to I_FrtBkgStgeBPAddrDfltRprstnTP,
      FreightBookingStage._TransportationOrder         as _FreightBooking              : redirected to I_FreightBookingTP
}
where
  FreightBookingStage.TransportationOrderCategory = 'BO'
```
