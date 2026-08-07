---
name: I_FRTUNITBPADDRADDLRPRSTNTP
description: "Frtunitbpaddraddlrprstntp"
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
# I_FRTUNITBPADDRADDLRPRSTNTP

**Frtunitbpaddraddlrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  |  |  |  |
| `AddressRepresentationCode` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `I_FreightUnitTP` |  | |  | `_TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |  |  |
| `I_FrtUnitBPAddrDfltRprstnTP` |  | |  | `_TranspOrdBPAddrDfltRprstn as _FrtUnitBPAddrDfltRprstn : redirected to parent I_FrtUnitBPAddrDfltRprstnTP` |  |  |
| `_AddressRepresentationCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Unit BP Addr Addl Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtUnitBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtUnitBPAddrAddlRprstnTP
  as projection on R_TranspOrdBPAddrAddlRprstnTP as FrtUnitBPAddrAddlRprstn
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
      _TransportationOrder        as _FreightUnit             : redirected to I_FreightUnitTP,
      _TranspOrdBPAddrDfltRprstn  as _FrtUnitBPAddrDfltRprstn : redirected to parent I_FrtUnitBPAddrDfltRprstnTP
}
where
  TransportationOrderCategory = 'FU'
```
