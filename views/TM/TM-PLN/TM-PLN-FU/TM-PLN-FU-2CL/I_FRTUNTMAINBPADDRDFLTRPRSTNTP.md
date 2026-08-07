---
name: I_FRTUNTMAINBPADDRDFLTRPRSTNTP
description: Frtuntmainbpaddrdfltrprstntp
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
# I_FRTUNTMAINBPADDRDFLTRPRSTNTP

**Frtuntmainbpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
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
| `I_FreightUnitTP` |  | |  | `_TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP` |  |  |
| `I_FrtUntMainBPAddrAddlRprstnTP` |  | |  | `_TrOrdMainBPAddrAddlRprstn as _FrtUnitMainBPAddrAddlRprstn : redirected to composition child I_FrtUntMainBPAddrAddlRprstnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Unit Main BP Addr Dflt Rprstn - TP'
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
   representativeKey: 'TransportationOrderUUID',
   sapObjectNodeType.name: 'FrtUnitMainBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUntMainBPAddrDfltRprstnTP
  as projection on R_TrOrdMainBPAddrDfltRprstnTP as FrtUnitMainBPAddrDfltRprstn
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
      _TransportationOrder       as _FreightUnit                 : redirected to parent I_FreightUnitTP,
      _TrOrdMainBPAddrAddlRprstn as _FrtUnitMainBPAddrAddlRprstn : redirected to composition child I_FrtUntMainBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'FU'
```
