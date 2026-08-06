---
name: I_FREIGHTORDERSTOPTP
description: Freightorderstoptp
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERSTOPTP

**Freightorderstoptp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderStopUUID` | `TransportationOrderStopUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TransportationOrderStop` | `TransportationOrderStop` |
| `TranspOrdStopCategory` | `TranspOrdStopCategory` |
| `TranspOrdStopRole` | `TranspOrdStopRole` |
| `LocationAdditionalUUID` | `LocationAdditionalUUID` |
| `LocationId` | `LocationId` |
| `LocationUNCode` | `LocationUNCode` |
| `LocationIATACode` | `LocationIATACode` |
| `TranspOrdStopPlanTranspDteTme` | `TranspOrdStopPlanTranspDteTme` |
| `TranspOrdStopDteTme` | `TranspOrdStopDteTme` |
| `TranspOrdStopApptStrtDteTme` | `TranspOrdStopApptStrtDteTme` |
| `TranspOrdStopApptEndDteTme` | `TranspOrdStopApptEndDteTme` |
| `TranspStopCarrConfStrtDteTme` | `TranspStopCarrConfStrtDteTme` |
| `TranspStopCarrConfEndDteTme` | `TranspStopCarrConfEndDteTme` |
| `TranspOrdStopSequencePosition` | `TranspOrdStopSequencePosition` |
| `TranspOrdStopHndlgExecStatus` | `TranspOrdStopHndlgExecStatus` |
| `TranspOrdStopExecIsBlocked` | `TranspOrdStopExecIsBlocked` |
| `I_FreightOrderTP` | `FreightOrderStop._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |
| `I_FreightOrderStageTP` | `FreightOrderStop._TranspOrderStage as _FreightOrderStage : redirected to composition child I_FreightOrderStageTP` |
| `I_FrtOrdStopLocAdDfRpnTP` | `FreightOrderStop._TrOrdStopLocAddrDfltRprstn as _FrtOrdStopLocAddrDfltRprstn : redirected to composition child I_FrtOrdStopLocAdDfRpnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Stop - TP'
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
    sapObjectNodeType.name: 'FreightOrderStop'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderStopTP
  as projection on R_TransportationOrderStopTP as FreightOrderStop
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

      // Further Attributes
      TranspOrdStopSequencePosition,

      // Status
      TranspOrdStopHndlgExecStatus,
      @Semantics.booleanIndicator
      TranspOrdStopExecIsBlocked,

      FreightOrderStop._TransportationOrder        as _FreightOrder                : redirected to parent I_FreightOrderTP,
      @Semantics.valueRange.maximum: '1'
      FreightOrderStop._TranspOrderStage           as _FreightOrderStage           : redirected to composition child I_FreightOrderStageTP,
      FreightOrderStop._TrOrdStopLocAddrDfltRprstn as _FrtOrdStopLocAddrDfltRprstn : redirected to composition child I_FrtOrdStopLocAdDfRpnTP
}
where
  FreightOrderStop.TransportationOrderCategory = 'TO'
```
