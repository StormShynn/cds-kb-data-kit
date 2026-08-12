---
name: I_FRTORDMAINBPADDRDFLTRPRSTNTP
description: "Frtordmainbpaddrdfltrprstntp"
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_FRTORDMAINBPADDRDFLTRPRSTNTP

**Frtordmainbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderUUID` | ✓ | |  |  |  |  |
| `TranspOrdBizPartnerFunction` | ✓ | |  |  |  |  |
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
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |  |  |
| `I_FrtOrdMainBPAddrAddlRprstnTP` |  | |  | `_TrOrdMainBPAddrAddlRprstn as _FrtOrdMainBPAddrAddlRprstn : redirected to composition child I_FrtOrdMainBPAddrAddlRprstnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Ord Main BP Addr Dflt Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtOrdMainBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdMainBPAddrDfltRprstnTP
  as projection on R_TrOrdMainBPAddrDfltRprstnTP as FrtOrdMainBPAddrDfltRprstn
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
      _TransportationOrder       as _FreightOrder               : redirected to parent I_FreightOrderTP,
      _TrOrdMainBPAddrAddlRprstn as _FrtOrdMainBPAddrAddlRprstn : redirected to composition child I_FrtOrdMainBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'TO'
```
