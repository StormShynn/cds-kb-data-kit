---
name: I_FREIGHTORDERSTAGETP
description: Freightorderstagetp
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
# I_FREIGHTORDERSTAGETP

**Freightorderstagetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderStageUUID` | `TransportationOrderStageUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TransportationOrderStage` | `TransportationOrderStage` |
| `TranspOrdStageType` | `TranspOrdStageType` |
| `TranspOrdStageCategory` | `TranspOrdStageCategory` |
| `TransportationMode` | `TransportationMode` |
| `TransportationModeCategory` | `TransportationModeCategory` |
| `TranspOrdStgeInvcgCarrLvl` | `TranspOrdStgeInvcgCarrLvl` |
| `CarrierUUID` | `CarrierUUID` |
| `Carrier` | `Carrier` |
| `TranspOrdStageSCACCode` | `TranspOrdStageSCACCode` |
| `TranspOrdStgeInvcgCarrUUID` | `TranspOrdStgeInvcgCarrUUID` |
| `TranspOrdStageInvoicingCarrier` | `TranspOrdStageInvoicingCarrier` |
| `TranspOrdStgeInvcgSCACCode` | `TranspOrdStgeInvcgSCACCode` |
| `TranspOrdStageDistance` | `TranspOrdStageDistance` |
| `TranspOrdStageDistanceUnit` | `TranspOrdStageDistanceUnit` |
| `TranspOrdStageNetDuration` | `TranspOrdStageNetDuration` |
| `TranspOrdStageSrceStopUUID` | `TranspOrdStageSrceStopUUID` |
| `TranspOrdStageDestStopUUID` | `TranspOrdStageDestStopUUID` |
| `I_FreightOrderStopTP` | `FreightOrderStage._TranspOrderStop as _FreightOrderStop : redirected to parent I_FreightOrderStopTP` |
| `I_FreightOrderTP` | `FreightOrderStage._TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |
| `I_FrtOrdStgeBPAddrDfltRprstnTP` | `FreightOrderStage._TrOrdStgeBPAddrDfltRprstn as _FrtOrdStageBPAddrDfltRprstn : redirected to composition child I_FrtOrdStgeBPAddrDfltRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Stage - TP'
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
   sapObjectNodeType.name: 'FreightOrderStage'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderStageTP
  as projection on R_TransportationOrderStageTP as FreightOrderStage
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

      FreightOrderStage._TranspOrderStop             as _FreightOrderStop            : redirected to parent I_FreightOrderStopTP,
      FreightOrderStage._TransportationOrder         as _FreightOrder                : redirected to I_FreightOrderTP,
      FreightOrderStage._TrOrdStgeBPAddrDfltRprstn   as _FrtOrdStageBPAddrDfltRprstn : redirected to composition child I_FrtOrdStgeBPAddrDfltRprstnTP,
      FreightOrderStage._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn : redirected to I_FrtOrdStgeBPAddrDfltRprstnTP,
      FreightOrderStage._InvcgCarrierAddrDfltRprstn  as _InvcgCarrierAddrDfltRprstn  : redirected to I_FrtOrdStgeBPAddrDfltRprstnTP
}
where
  FreightOrderStage.TransportationOrderCategory = 'TO'
```
