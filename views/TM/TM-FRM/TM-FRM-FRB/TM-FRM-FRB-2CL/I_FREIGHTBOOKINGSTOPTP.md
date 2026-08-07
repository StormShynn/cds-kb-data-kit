---
name: I_FREIGHTBOOKINGSTOPTP
description: Freightbookingstoptp
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
# I_FREIGHTBOOKINGSTOPTP

**Freightbookingstoptp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderStopUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TransportationOrderStop` |  | |  |  |
| `TranspOrdStopCategory` |  | |  |  |
| `TranspOrdStopRole` |  | |  |  |
| `LocationAdditionalUUID` |  | |  |  |
| `LocationId` |  | |  |  |
| `LocationUNCode` |  | |  |  |
| `LocationIATACode` |  | |  |  |
| `TranspOrdStopPlanTranspDteTme` |  | |  |  |
| `TranspOrdStopDteTme` |  | |  |  |
| `TranspOrdStopApptStrtDteTme` |  | |  |  |
| `TranspOrdStopApptEndDteTme` |  | |  |  |
| `TranspStopCarrConfStrtDteTme` |  | |  |  |
| `TranspStopCarrConfEndDteTme` |  | |  |  |
| `TranspOrdStopDocCutOffDateTime` |  | |  |  |
| `TranspOrdStopCrgoCutOffDteTme` |  | |  |  |
| `TranspOrdStopVGMCutOffDateTime` |  | |  |  |
| `TranspOrdStopSequencePosition` |  | |  |  |
| `TranspOrdStopHndlgExecStatus` |  | |  |  |
| `TranspOrdStopExecIsBlocked` |  | |  |  |
| `I_FreightBookingTP` |  | |  | `FreightBookingStop._TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |
| `I_FreightBookingStageTP` |  | |  | `FreightBookingStop._TranspOrderStage as _FreightBookingStage : redirected to composition child I_FreightBookingStageTP` |
| `I_FrtBkgStopLocAdDfRpnTP` |  | |  | `FreightBookingStop._TrOrdStopLocAddrDfltRprstn as _FrtBkgStopLocAddrDfltRprstn : redirected to composition child I_FrtBkgStopLocAdDfRpnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Stop - TP'
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
    semanticKey: ['TransportationOrderStop'],
    representativeKey: 'TransportationOrderStopUUID',
    sapObjectNodeType.name: 'FreightBookingStop'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingStopTP
  as projection on R_TransportationOrderStopTP as FreightBookingStop
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
      TranspOrdStopPlanTranspDteTme,
      TranspOrdStopDteTme,

      TranspOrdStopApptStrtDteTme,
      TranspOrdStopApptEndDteTme,
      TranspStopCarrConfStrtDteTme,
      TranspStopCarrConfEndDteTme,

      TranspOrdStopDocCutOffDateTime,
      TranspOrdStopCrgoCutOffDteTme,
      TranspOrdStopVGMCutOffDateTime,

      // Further Attributes
      TranspOrdStopSequencePosition,

      // Status
      TranspOrdStopHndlgExecStatus,
      @Semantics.booleanIndicator
      TranspOrdStopExecIsBlocked,

      FreightBookingStop._TransportationOrder        as _FreightBooking              : redirected to parent I_FreightBookingTP,
      @Semantics.valueRange.maximum: '1' 
      FreightBookingStop._TranspOrderStage           as _FreightBookingStage         : redirected to composition child I_FreightBookingStageTP,
      FreightBookingStop._TrOrdStopLocAddrDfltRprstn as _FrtBkgStopLocAddrDfltRprstn : redirected to composition child I_FrtBkgStopLocAdDfRpnTP
}
where
  FreightBookingStop.TransportationOrderCategory = 'BO'
```
