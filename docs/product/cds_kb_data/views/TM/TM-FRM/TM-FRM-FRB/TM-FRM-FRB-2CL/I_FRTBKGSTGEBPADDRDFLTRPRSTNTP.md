---
name: I_FRTBKGSTGEBPADDRDFLTRPRSTNTP
description: "Frtbkgstgebpaddrdfltrprstntp"
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_FRTBKGSTGEBPADDRDFLTRPRSTNTP

**Frtbkgstgebpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStageUUID` | ✓ | |  |  |  |  |
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
| `I_FreightBookingStageTP` |  | |  | `_TransportationOrderStage as _FreightBookingStage : redirected to parent I_FreightBookingStageTP` |  |  |
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |
| `I_FrtBkgStgeBPAddrAddlRprstnTP` |  | |  | `_TrOrdStgeBPAddrAddlRprstn as _FrtBkgStageBPAddrAddlRprstn : redirected to composition child I_FrtBkgStgeBPAddrAddlRprstnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stage BP Addr Dflt Rpn - TP'
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
   representativeKey: 'TransportationOrderStageUUID',
   sapObjectNodeType.name: 'FrtBkgStageBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStgeBPAddrDfltRprstnTP
  as projection on R_TrOrdStgeBPAddrDfltRprstnTP as FrtBkgStageBPAddrDfltRprstn
{
  key TransportationOrderStageUUID,
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
      _TransportationOrderStage  as _FreightBookingStage        : redirected to parent I_FreightBookingStageTP,
      _TransportationOrder       as _FreightBooking             : redirected to I_FreightBookingTP,
      _TrOrdStgeBPAddrAddlRprstn as _FrtBkgStageBPAddrAddlRprstn : redirected to composition child I_FrtBkgStgeBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'BO'
```
