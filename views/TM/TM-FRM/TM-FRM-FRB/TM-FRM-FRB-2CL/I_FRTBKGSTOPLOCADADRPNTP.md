---
name: I_FRTBKGSTOPLOCADADRPNTP
description: Frtbkgstoplocadadrpntp
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
# I_FRTBKGSTOPLOCADADRPNTP

**Frtbkgstoplocadadrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderStopUUID` | `TransportationOrderStopUUID` |
| key `AddressRepresentationCode` | `AddressRepresentationCode` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `AddressID` | `AddressID` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |
| `I_FrtBkgStopLocAdDfRpnTP` | `_TrOrdStopLocAddrDfltRprstn as _FrtBkgStopLocAddrDfltRprstn : redirected to parent I_FrtBkgStopLocAdDfRpnTP` |
| `_AddressRepresentationCode` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stop Loc Addr Addl Rpn - TP'
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
   sapObjectNodeType.name: 'FrtBkgStopLocAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStopLocAdAdRpnTP
  as projection on R_TrOrdStopLocAddrAddlRprstnTP as FrtBkgStopLocAddrAddlRprstn
{
  key TransportationOrderStopUUID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key AddressRepresentationCode,
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

      _AddressRepresentationCode,

      /* Redirections */
      _TransportationOrder         as _FreightBooking              : redirected to I_FreightBookingTP,
      _TrOrdStopLocAddrDfltRprstn  as _FrtBkgStopLocAddrDfltRprstn : redirected to parent I_FrtBkgStopLocAdDfRpnTP
}
where
  TransportationOrderCategory = 'BO'
```
