---
name: I_FREIGHTUNITBUSINESSPARTNERTP
description: FREIGHTUNITBusiness PartnerTP
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
  - business-partner
  - freight
  - partner
  - component:TM-PLN-FU-2CL
  - lob:Other
  - bo:BusinessPartner
---
# I_FREIGHTUNITBUSINESSPARTNERTP

**FREIGHTUNITBusiness PartnerTP**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderBusPartUUID` | `TransportationOrderBusPartUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `BusinessPartnerUUID` | `BusinessPartnerUUID` |
| `BusinessPartner` | `BusinessPartner` |
| `TranspOrdBizPartnerFunction` | `TranspOrdBizPartnerFunction` |
| `TranspOrdBizPartnerAddressID` | `TranspOrdBizPartnerAddressID` |
| `I_FreightUnitTP` | `FreightUnitBusinessPartner._TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP` |
| `I_FrtUnitBPAddrDfltRprstnTP` | `FreightUnitBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtUnitBPAddrDfltRprstn : redirected to composition child I_FrtUnitBPAddrDfltRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Business Partner - TP'
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
   semanticKey: ['BusinessPartner'],
   representativeKey: 'TransportationOrderBusPartUUID',
   sapObjectNodeType.name: 'FreightUnitBusinessPartner'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitBusinessPartnerTP
  as projection on R_TransportationOrderBPTP as FreightUnitBusinessPartner
{
      /* Attributes */
  key TransportationOrderBusPartUUID,
      TransportationOrderUUID,
      BusinessPartnerUUID,
      BusinessPartner,
      TranspOrdBizPartnerFunction,
      TranspOrdBizPartnerAddressID,

      /* Redirections */
      FreightUnitBusinessPartner._TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP,
      FreightUnitBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtUnitBPAddrDfltRprstn : redirected to composition child I_FrtUnitBPAddrDfltRprstnTP
}
where FreightUnitBusinessPartner.TransportationOrderCategory = 'FU'
```
