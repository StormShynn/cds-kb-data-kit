---
name: I_FRTORDITMMAINBPADDFRPNTP
description: Frtorditmmainbpaddfrpntp
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
# I_FRTORDITMMAINBPADDFRPNTP

**Frtorditmmainbpaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderItemTP` |  | |  | `_TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP` |  |  |
| `I_FrtOrdItmMainBPAdAdRpnTP` |  | |  | `_TrOrdItmMnBPAddrAddlRprstn as _FrtOrdItmMainBPAddrAddlRprstn : redirected to composition child I_FrtOrdItmMainBPAdAdRpnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Ord Itm Main BP Addr Df Rpn - TP'
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
   sapObjectNodeType.name: 'FrtOrdItmMainBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdItmMainBPAdDfRpnTP
  as projection on R_TrOrdItmMnBPAddrDfltRprstnTP as FrtOrdItmMainBPAddrDfltRprstn
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
      _TransportationOrder           as _FreightOrder                  : redirected to I_FreightOrderTP,
      _TransportationOrderItem       as _FreightOrderItem              : redirected to parent I_FreightOrderItemTP,
      _TrOrdItmMnBPAddrAddlRprstn    as _FrtOrdItmMainBPAddrAddlRprstn : redirected to composition child I_FrtOrdItmMainBPAdAdRpnTP
}
where
  TransportationOrderCategory = 'TO'
```
