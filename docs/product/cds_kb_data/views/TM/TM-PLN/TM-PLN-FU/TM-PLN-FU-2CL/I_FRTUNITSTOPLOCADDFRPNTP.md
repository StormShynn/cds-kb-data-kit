---
name: I_FRTUNITSTOPLOCADDFRPNTP
description: "Frtunitstoplocaddfrpntp"
app_component: TM-PLN-FU-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-PLN
  - TM-PLN-FU
  - interface-view
  - transactional-processing
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FRTUNITSTOPLOCADDFRPNTP

**Frtunitstoplocaddfrpntp**

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
| `AddressID` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `I_FrtUnitStopLocAdAdRpnTP` |  | |  | `_TrOrdStopLocAddrAddlRprstn as _FrtUnitStopLocAddrAddlRprstn : redirected to composition child I_FrtUnitStopLocAdAdRpnTP` |  |  |
| `I_FreightUnitStopTP` |  | |  | `_TransportationOrderStop as _FreightUnitStop : redirected to parent I_FreightUnitStopTP` |  |  |
| `I_FreightUnitTP` |  | |  | `_TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Frt Unit Stop Loc Addr Dflt Rpn - TP'
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
   semanticKey: ['AddressID'],
   representativeKey: 'TransportationOrderStopUUID',
   sapObjectNodeType.name: 'FrtUnitStopLocAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUnitStopLocAdDfRpnTP
  as projection on R_TrOrdStopLocAddrDfltRprstnTP as FrtUnitStopLocAddrDfltRprstn
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
      _TrOrdStopLocAddrAddlRprstn  as _FrtUnitStopLocAddrAddlRprstn : redirected to composition child I_FrtUnitStopLocAdAdRpnTP,
      _TransportationOrderStop     as _FreightUnitStop              : redirected to parent I_FreightUnitStopTP,
      _TransportationOrder         as _FreightUnit                  : redirected to I_FreightUnitTP
}
where
  TransportationOrderCategory = 'FU'
```
