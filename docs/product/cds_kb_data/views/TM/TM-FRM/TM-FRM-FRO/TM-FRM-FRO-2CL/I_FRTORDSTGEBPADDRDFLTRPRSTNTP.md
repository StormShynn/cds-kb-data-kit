---
name: I_FRTORDSTGEBPADDRDFLTRPRSTNTP
description: "Frtordstgebpaddrdfltrprstntp"
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
# I_FRTORDSTGEBPADDRDFLTRPRSTNTP

**Frtordstgebpaddrdfltrprstntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FreightOrderStageTP` |  | |  | `_TransportationOrderStage as _FreightOrderStage : redirected to parent I_FreightOrderStageTP` |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FrtOrdStgeBPAddrAddlRprstnTP` |  | |  | `_TrOrdStgeBPAddrAddlRprstn as _FrtOrdStageBPAddrAddlRprstn : redirected to composition child I_FrtOrdStgeBPAddrAddlRprstnTP` |  |  |
| `_PartnerFunction` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Ord Stage BP Addr Dflt Rpn - TP'
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
   sapObjectNodeType.name: 'FrtOrdStageBPAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdStgeBPAddrDfltRprstnTP
  as projection on R_TrOrdStgeBPAddrDfltRprstnTP as FrtOrdStageBPAddrDfltRprstn
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
      _TransportationOrderStage  as _FreightOrderStage           : redirected to parent I_FreightOrderStageTP,
      _TransportationOrder       as _FreightOrder                : redirected to I_FreightOrderTP,
      _TrOrdStgeBPAddrAddlRprstn as _FrtOrdStageBPAddrAddlRprstn : redirected to composition child I_FrtOrdStgeBPAddrAddlRprstnTP
}
where
  TransportationOrderCategory = 'TO'
```
