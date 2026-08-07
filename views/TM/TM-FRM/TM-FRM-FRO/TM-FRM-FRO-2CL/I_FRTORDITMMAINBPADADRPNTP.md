---
name: I_FRTORDITMMAINBPADADRPNTP
description: Frtorditmmainbpadadrpntp
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
# I_FRTORDITMMAINBPADADRPNTP

**Frtorditmmainbpadadrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderItemUUID` | ✓ | |  |  |
| `TranspOrdBizPartnerFunction` | ✓ | |  |  |
| `AddressRepresentationCode` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddresseeFullName` |  | |  |  |
| `CityName` |  | |  |  |
| `PostalCode` |  | |  |  |
| `StreetName` |  | |  |  |
| `HouseNumber` |  | |  |  |
| `Country` |  | |  |  |
| `Region` |  | |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |
| `I_FrtOrdItmMainBPAdDfRpnTP` |  | |  | `_TrOrdItmMnBPAddrDfltRprstn as _FrtOrdItmMainBPAddrDfltRprstn : redirected to parent I_FrtOrdItmMainBPAdDfRpnTP` |
| `_AddressRepresentationCode` | | ✓ | | |
| `_PartnerFunction` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Frt Ord Itm Main BP Addr Ad Rpn - TP'
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
   sapObjectNodeType.name: 'FrtOrdItmMainBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdItmMainBPAdAdRpnTP
  as projection on R_TrOrdItmMnBPAddrAddlRprstnTP as FrtOrdItmMainBPAddrAddlRprstn
{
  key TransportationOrderItemUUID,
  @ObjectModel.foreignKey.association: '_PartnerFunction'
  key TranspOrdBizPartnerFunction,
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
      _PartnerFunction,

      /* Redirections */
      _TransportationOrder           as _FreightOrder                  : redirected to I_FreightOrderTP,
      _TrOrdItmMnBPAddrDfltRprstn    as _FrtOrdItmMainBPAddrDfltRprstn : redirected to parent I_FrtOrdItmMainBPAdDfRpnTP
}
where
  TransportationOrderCategory = 'TO'
```
