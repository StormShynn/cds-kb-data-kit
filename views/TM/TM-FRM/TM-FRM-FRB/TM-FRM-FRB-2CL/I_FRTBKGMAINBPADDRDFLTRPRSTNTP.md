---
name: I_FRTBKGMAINBPADDRDFLTRPRSTNTP
description: Frtbkgmainbpaddrdfltrprstntp
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
# I_FRTBKGMAINBPADDRDFLTRPRSTNTP

**Frtbkgmainbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderUUID` | `TransportationOrderUUID` |
| key `TranspOrdBizPartnerFunction` | `TranspOrdBizPartnerFunction` |
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
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |
| `I_FrtBkgMainBPAddrAddlRprstnTP` | `_TrOrdMainBPAddrAddlRprstn as _FrtBkgMainBPAddrAddlRprstn : redirected to composition child I_FrtBkgMainBPAddrAddlRprstnTP` |
| `_PartnerFunction` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Main BP Addr Dflt Rprstn - TP'
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
   representativeKey: 'TransportationOrderUUID',
   sapObjectNodeType.name: 'FrtBkgMainBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgMainBPAddrDfltRprstnTP
  as projection on R_TrOrdMainBPAddrDfltRprstnTP as FrtBkgMainBPAddrDfltRprstn
{
  key TransportationOrderUUID,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key TranspOrdBizPartnerFunction,

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
      
      _PartnerFunction,

      /* Redirections */
      _TransportationOrder       as _FreightBooking             : redirected to parent I_FreightBookingTP,
      _TrOrdMainBPAddrAddlRprstn as _FrtBkgMainBPAddrAddlRprstn : redirected to composition child I_FrtBkgMainBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'BO'
```
