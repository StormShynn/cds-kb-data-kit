---
name: I_FRTORDBPADDRDFLTRPRSTNTP
description: "Frtordbpaddrdfltrprstntp"
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
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FRTORDBPADDRDFLTRPRSTNTP

**Frtordbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderBPTP` |  | |  | `_TransportationOrderBP as _FreightOrderBusinessPartner : redirected to parent I_FreightOrderBPTP` |  |  |
| `I_FrtOrdBPAddrAddlRprstnTP` |  | |  | `_TranspOrdBPAddrAddlRprstn as _FrtOrdBPAddrAddlRprstn : redirected to composition child I_FrtOrdBPAddrAddlRprstnTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Frt Ord BP Addr Dflt Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtOrdBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdBPAddrDfltRprstnTP
  as projection on R_TranspOrdBPAddrDfltRprstnTP as FrtOrdBPAddrDfltRprstn
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
      _TransportationOrder        as _FreightOrder                : redirected to I_FreightOrderTP,
      _TransportationOrderBP      as _FreightOrderBusinessPartner : redirected to parent I_FreightOrderBPTP,
      _TranspOrdBPAddrAddlRprstn  as _FrtOrdBPAddrAddlRprstn      : redirected to composition child I_FrtOrdBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'TO'
```
