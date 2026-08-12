---
name: I_FRTORDSTOPLOCADDFRPNTP
description: "Frtordstoplocaddfrpntp"
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FRTORDSTOPLOCADDFRPNTP

**Frtordstoplocaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStopUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `I_FrtOrdStopLocAdAdRpnTP` |  | |  | `_TrOrdStopLocAddrAddlRprstn as _FrtOrdStopLocAddrAddlRprstn : redirected to composition child I_FrtOrdStopLocAdAdRpnTP` |  |  |
| `I_FreightOrderStopTP` |  | |  | `_TransportationOrderStop as _FreightOrderStop : redirected to parent I_FreightOrderStopTP` |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Frt Ord Stop Loc Addr Dflt Rpn - TP'
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
   semanticKey: ['AddressID'],
   representativeKey: 'TransportationOrderStopUUID',
   sapObjectNodeType.name: 'FrtOrdStopLocAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdStopLocAdDfRpnTP
  as projection on R_TrOrdStopLocAddrDfltRprstnTP as FrtOrdStopLocAddrDfltRprstn
{
  key TransportationOrderStopUUID,
      TransportationOrderUUID,

      // Identification for Address
      AddressID,

      // Postal Address
      AddresseeFullName,
      CityName,
      PostalCode,
      StreetName,
      HouseNumber,
      Country,
      Region,

      /* Redirections */
      _TrOrdStopLocAddrAddlRprstn  as _FrtOrdStopLocAddrAddlRprstn : redirected to composition child I_FrtOrdStopLocAdAdRpnTP,
      _TransportationOrderStop     as _FreightOrderStop            : redirected to parent I_FreightOrderStopTP,
      _TransportationOrder         as _FreightOrder                : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
