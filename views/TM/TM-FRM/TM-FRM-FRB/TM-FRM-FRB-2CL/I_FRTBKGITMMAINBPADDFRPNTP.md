---
name: I_FRTBKGITMMAINBPADDFRPNTP
description: Frtbkgitmmainbpaddfrpntp
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
# I_FRTBKGITMMAINBPADDFRPNTP

**Frtbkgitmmainbpaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderItemUUID` | ✓ | |  |  |  |  |
| `TranspOrdBizPartnerFunction` | ✓ | |  |  |  |  |
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
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |
| `I_FreightBookingItemTP` |  | |  | `_TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP` |  |  |
| `I_FrtBkgItmMainBPAdAdRpnTP` |  | |  | `_TrOrdItmMnBPAddrAddlRprstn as _FrtBkgItmMainBPAddrAddlRprstn : redirected to composition child I_FrtBkgItmMainBPAdAdRpnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Itm Main BP Addr Df Rpn - TP'
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
   representativeKey: 'TransportationOrderItemUUID',
   sapObjectNodeType.name: 'FrtBkgItmMainBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgItmMainBPAdDfRpnTP
  as projection on R_TrOrdItmMnBPAddrDfltRprstnTP as FrtBkgItmMainBPAddrDfltRprstn
{
  key TransportationOrderItemUUID,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key TranspOrdBizPartnerFunction,
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
      
      _PartnerFunction,

      /* Redirections */
      _TransportationOrder           as _FreightBooking                : redirected to I_FreightBookingTP,
      _TransportationOrderItem       as _FreightBookingItem            : redirected to parent I_FreightBookingItemTP,
      _TrOrdItmMnBPAddrAddlRprstn    as _FrtBkgItmMainBPAddrAddlRprstn : redirected to composition child I_FrtBkgItmMainBPAdAdRpnTP
}
where
  TransportationOrderCategory = 'BO'
```
