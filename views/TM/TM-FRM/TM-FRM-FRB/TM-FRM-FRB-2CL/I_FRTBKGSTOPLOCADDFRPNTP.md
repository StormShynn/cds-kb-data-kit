---
name: I_FRTBKGSTOPLOCADDFRPNTP
description: Frtbkgstoplocaddfrpntp
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
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FRTBKGSTOPLOCADDFRPNTP

**Frtbkgstoplocaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
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
| `I_FrtBkgStopLocAdAdRpnTP` |  | |  | `_TrOrdStopLocAddrAddlRprstn as _FrtBkgStopLocAddrAddlRprstn : redirected to composition child I_FrtBkgStopLocAdAdRpnTP` |  |  |
| `I_FreightBookingStopTP` |  | |  | `_TransportationOrderStop as _FreightBookingStop : redirected to parent I_FreightBookingStopTP` |  |  |
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stop Loc Addr Dflt Rpn - TP'
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
   sapObjectNodeType.name: 'FrtBkgStopLocAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStopLocAdDfRpnTP
  as projection on R_TrOrdStopLocAddrDfltRprstnTP as FrtBkgStopLocAddrDfltRprstn
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
      _TrOrdStopLocAddrAddlRprstn  as _FrtBkgStopLocAddrAddlRprstn : redirected to composition child I_FrtBkgStopLocAdAdRpnTP,
      _TransportationOrderStop     as _FreightBookingStop          : redirected to parent I_FreightBookingStopTP,
      _TransportationOrder         as _FreightBooking              : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
