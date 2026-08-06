---
name: I_FRTUNTMAINBPADDRADDLRPRSTNTP
description: Frtuntmainbpaddraddlrprstntp
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
# I_FRTUNTMAINBPADDRADDLRPRSTNTP

**Frtuntmainbpaddraddlrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderUUID` | `TransportationOrderUUID` |
| key `TranspOrdBizPartnerFunction` | `TranspOrdBizPartnerFunction` |
| key `AddressRepresentationCode` | `AddressRepresentationCode` |
| `AddressID` | `AddressID` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `I_FrtUntMainBPAddrDfltRprstnTP` | `_TrOrdMainBPAddrDfltRprstn as _FrtUnitMainBPAddrDfltRprstn : redirected to parent I_FrtUntMainBPAddrDfltRprstnTP` |
| `I_FreightUnitTP` | `_TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |
| `_AddressRepresentationCode` | *Association* |
| `_PartnerFunction` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Frt Unit Main BP Addr Addl Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtUnitMainBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUntMainBPAddrAddlRprstnTP
  as projection on R_TrOrdMainBPAddrAddlRprstnTP as FrtUnitMainBPAddrAddlRprstn
{
  key TransportationOrderUUID,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key TranspOrdBizPartnerFunction,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key AddressRepresentationCode,

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
      _PartnerFunction,

      /* Redirections */
      _TrOrdMainBPAddrDfltRprstn as _FrtUnitMainBPAddrDfltRprstn : redirected to parent I_FrtUntMainBPAddrDfltRprstnTP,
      _TransportationOrder       as _FreightUnit                 : redirected to I_FreightUnitTP
}
where
  TransportationOrderCategory = 'FU'
```
