---
name: I_FRTORDBPADDRADDLRPRSTNTP
description: "Frtordbpaddraddlrprstntp"
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
# I_FRTORDBPADDRADDLRPRSTNTP

**Frtordbpaddraddlrprstntp**

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
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FrtOrdBPAddrDfltRprstnTP` |  | |  | `_TranspOrdBPAddrDfltRprstn as _FrtOrdBPAddrDfltRprstn : redirected to parent I_FrtOrdBPAddrDfltRprstnTP` |  |  |
| `_AddressRepresentationCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Ord BP Addr Addl Rprstn - TP'
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
   sapObjectNodeType.name: 'FrtOrdBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdBPAddrAddlRprstnTP
  as projection on R_TranspOrdBPAddrAddlRprstnTP as FrtOrdBPAddrAddlRprstn
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
      _TransportationOrder        as _FreightOrder           : redirected to I_FreightOrderTP,
      _TranspOrdBPAddrDfltRprstn  as _FrtOrdBPAddrDfltRprstn : redirected to parent I_FrtOrdBPAddrDfltRprstnTP
}
where
  TransportationOrderCategory = 'TO'
```
