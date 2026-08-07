---
name: I_FREIGHTORDERBPTP
description: Freightorderbptp
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
  - freight
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERBPTP

**Freightorderbptp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `BusinessPartnerUUID` |  | |  |  |
| `BusinessPartner` |  | |  |  |
| `TranspOrdBizPartnerFunction` |  | |  |  |
| `TranspOrdBizPartnerAddressID` |  | |  |  |
| `I_FreightOrderTP` |  | |  | `FreightOrderBusinessPartner._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |
| `I_FrtOrdBPAddrDfltRprstnTP` |  | |  | `FreightOrderBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtOrdBPAddrDfltRprstn : redirected to composition child I_FrtOrdBPAddrDfltRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Business Partner - TP'
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
   semanticKey: ['BusinessPartner'],
   representativeKey: 'TransportationOrderBusPartUUID',
   sapObjectNodeType.name: 'FreightOrderBusinessPartner'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderBPTP
  as projection on R_TransportationOrderBPTP as FreightOrderBusinessPartner
{
      /* Attributes */
  key TransportationOrderBusPartUUID,
      TransportationOrderUUID,
      BusinessPartnerUUID,
      BusinessPartner,
      TranspOrdBizPartnerFunction,
      TranspOrdBizPartnerAddressID,

      /* Redirections */
      FreightOrderBusinessPartner._TransportationOrder       as _FreightOrder           : redirected to parent I_FreightOrderTP,
      FreightOrderBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtOrdBPAddrDfltRprstn : redirected to composition child I_FrtOrdBPAddrDfltRprstnTP
}
where
  FreightOrderBusinessPartner.TransportationOrderCategory = 'TO'
```
