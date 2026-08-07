---
name: I_FRTBKGSTGEBPADDRADDLRPRSTNTP
description: Frtbkgstgebpaddraddlrprstntp
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
# I_FRTBKGSTGEBPADDRADDLRPRSTNTP

**Frtbkgstgebpaddraddlrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderStageUUID` | ✓ | |  |  |
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
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |
| `I_FrtBkgStgeBPAddrDfltRprstnTP` |  | |  | `_TrOrdStgeBPAddrDfltRprstn as _FrtBkgStageBPAddrDfltRprstn : redirected to parent I_FrtBkgStgeBPAddrDfltRprstnTP` |
| `_AddressRepresentationCode` | | ✓ | | |
| `_PartnerFunction` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stage BP Addr Addl Rpn - TP'
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
   sapObjectNodeType.name: 'FrtBkgStageBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStgeBPAddrAddlRprstnTP
  as projection on R_TrOrdStgeBPAddrAddlRprstnTP as FrtBkgStageBPAddrAddlRprstn
{

  key TransportationOrderStageUUID,
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
      _TransportationOrder       as _FreightBooking              : redirected to I_FreightBookingTP,
      _TrOrdStgeBPAddrDfltRprstn as _FrtBkgStageBPAddrDfltRprstn : redirected to parent I_FrtBkgStgeBPAddrDfltRprstnTP
}
where
  TransportationOrderCategory = 'BO'
```
