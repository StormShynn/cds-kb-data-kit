---
name: I_FRTUNITBPADDRDFLTRPRSTNTP
description: Frtunitbpaddrdfltrprstntp
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
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FRTUNITBPADDRDFLTRPRSTNTP

**Frtunitbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddresseeFullName` |  | |  |  |
| `CityName` |  | |  |  |
| `PostalCode` |  | |  |  |
| `StreetName` |  | |  |  |
| `HouseNumber` |  | |  |  |
| `Country` |  | |  |  |
| `Region` |  | |  |  |
| `EmailAddress` |  | |  |  |
| `InternationalPhoneNumber` |  | |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |
| `InternationalFaxNumber` |  | |  |  |
| `I_FreightUnitTP` |  | |  | `_TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |
| `I_FreightUnitBusinessPartnerTP` |  | |  | `_TransportationOrderBP as _FreightUnitBusinessPartner : redirected to parent I_FreightUnitBusinessPartnerTP` |
| `I_FrtUnitBPAddrAddlRprstnTP` |  | |  | `_TranspOrdBPAddrAddlRprstn as _FrtUnitBPAddrAddlRprstn : redirected to composition child I_FrtUnitBPAddrAddlRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Frt Unit BP Addr Dflt Rprstn - TP'
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
   representativeKey: 'TransportationOrderBusPartUUID',
   sapObjectNodeType.name: 'FrtUnitBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUnitBPAddrDfltRprstnTP
  as projection on R_TranspOrdBPAddrDfltRprstnTP as FrtUnitBPAddrDfltRprstn
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
      _TransportationOrder        as _FreightUnit                : redirected to I_FreightUnitTP,
      _TransportationOrderBP      as _FreightUnitBusinessPartner : redirected to parent I_FreightUnitBusinessPartnerTP,
      _TranspOrdBPAddrAddlRprstn  as _FrtUnitBPAddrAddlRprstn      : redirected to composition child I_FrtUnitBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'FU'
```
