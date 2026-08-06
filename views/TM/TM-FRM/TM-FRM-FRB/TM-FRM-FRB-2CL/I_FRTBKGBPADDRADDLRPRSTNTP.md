---
name: I_FRTBKGBPADDRADDLRPRSTNTP
description: Frtbkgbpaddraddlrprstntp
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
# I_FRTBKGBPADDRADDLRPRSTNTP

**Frtbkgbpaddraddlrprstntp**

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
| `I_FrtBkgBPAddrDfltRprstnTP` | `_TranspOrdBPAddrDfltRprstn as _FrtBkgBPAddrDfltRprstn : redirected to parent I_FrtBkgBPAddrDfltRprstnTP` |
| `_AddressRepresentationCode` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg BP Addr Addl Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtBkgBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgBPAddrAddlRprstnTP
  as projection on R_TranspOrdBPAddrAddlRprstnTP as FrtBkgBPAddrAddlRprstn
{
  key TransportationOrderBusPartUUID,
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
      _TransportationOrder        as _FreightBooking         : redirected to I_FreightBookingTP,
      _TranspOrdBPAddrDfltRprstn  as _FrtBkgBPAddrDfltRprstn : redirected to parent I_FrtBkgBPAddrDfltRprstnTP
}
where
  TransportationOrderCategory = 'BO'
```
