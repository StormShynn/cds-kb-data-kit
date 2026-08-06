---
name: I_FRTBKGBPADDRDFLTRPRSTNTP
description: Frtbkgbpaddrdfltrprstntp
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
# I_FRTBKGBPADDRDFLTRPRSTNTP

**Frtbkgbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderBusPartUUID` | `TransportationOrderBusPartUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `AddressID` | `AddressID` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `EmailAddress` | `EmailAddress` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `InternationalMobilePhoneNumber` | `InternationalMobilePhoneNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |
| `I_FreightBookingBPTP` | `_TransportationOrderBP as _FreightBookingBusinessPartner : redirected to parent I_FreightBookingBPTP` |
| `I_FrtBkgBPAddrAddlRprstnTP` | `_TranspOrdBPAddrAddlRprstn as _FrtBkgBPAddrAddlRprstn : redirected to composition child I_FrtBkgBPAddrAddlRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg BP Addr Dflt Rprstn - TP'
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
   representativeKey: 'TransportationOrderBusPartUUID',
   sapObjectNodeType.name: 'FrtBkgBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgBPAddrDfltRprstnTP
  as projection on R_TranspOrdBPAddrDfltRprstnTP as FrtBkgBPAddrDfltRprstn
{
  key TransportationOrderBusPartUUID,
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

      // Communication data
      EmailAddress,
      InternationalPhoneNumber,
      InternationalMobilePhoneNumber,
      InternationalFaxNumber,

      /* Redirections */
      _TransportationOrder        as _FreightBooking                : redirected to I_FreightBookingTP,
      _TransportationOrderBP      as _FreightBookingBusinessPartner : redirected to parent I_FreightBookingBPTP,
      _TranspOrdBPAddrAddlRprstn  as _FrtBkgBPAddrAddlRprstn        : redirected to composition child I_FrtBkgBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'BO'
```
