---
name: I_FRTUNITSTOPLOCADADRPNTP
description: Frtunitstoplocadadrpntp
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
# I_FRTUNITSTOPLOCADADRPNTP

**Frtunitstoplocadadrpntp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderStopUUID` | `TransportationOrderStopUUID` |
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
| `I_FreightUnitTP` | `_TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |
| `I_FrtUnitStopLocAdDfRpnTP` | `_TrOrdStopLocAddrDfltRprstn as _FrtUnitStopLocAddrDfltRprstn : redirected to parent I_FrtUnitStopLocAdDfRpnTP` |
| `_AddressRepresentationCode` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Frt Unit Stop Loc Addr Addl Rpn - TP'
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
   representativeKey: 'TransportationOrderStopUUID',
   sapObjectNodeType.name: 'FrtUnitStopLocAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUnitStopLocAdAdRpnTP
  as projection on R_TrOrdStopLocAddrAddlRprstnTP as FrtUnitStopLocAddrAddlRprstn
{
  key TransportationOrderStopUUID,
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
      _TransportationOrder         as _FreightUnit                  : redirected to I_FreightUnitTP,
      _TrOrdStopLocAddrDfltRprstn  as _FrtUnitStopLocAddrDfltRprstn : redirected to parent I_FrtUnitStopLocAdDfRpnTP
}
where
  TransportationOrderCategory = 'FU'
```
