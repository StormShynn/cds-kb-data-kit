---
name: I_FREIGHTBOOKINGBPTP
description: "Freightbookingbptp"
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
  - freight
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGBPTP

**Freightbookingbptp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderBusPartUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `BusinessPartnerUUID` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `TranspOrdBizPartnerFunction` |  | |  |  |  |  |
| `TranspOrdBizPartnerAddressID` |  | |  |  |  |  |
| `I_FreightBookingTP` |  | |  | `FreightBookingBusinessPartner._TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |  |  |
| `I_FrtBkgBPAddrDfltRprstnTP` |  | |  | `FreightBookingBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtBkgBPAddrDfltRprstn : redirected to composition child I_FrtBkgBPAddrDfltRprstnTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Business Partner - TP'
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
   sapObjectNodeType.name: 'FreightBookingBusinessPartner'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingBPTP
  as projection on R_TransportationOrderBPTP as FreightBookingBusinessPartner
{
      /* Attributes */
  key TransportationOrderBusPartUUID,
      TransportationOrderUUID,
      BusinessPartnerUUID,
      BusinessPartner,
      TranspOrdBizPartnerFunction,
      TranspOrdBizPartnerAddressID,

      /* Redirections */
      FreightBookingBusinessPartner._TransportationOrder       as _FreightBooking         : redirected to parent I_FreightBookingTP,
      FreightBookingBusinessPartner._TranspOrdBPAddrDfltRprstn as _FrtBkgBPAddrDfltRprstn : redirected to composition child I_FrtBkgBPAddrDfltRprstnTP
}
where
  FreightBookingBusinessPartner.TransportationOrderCategory = 'BO'
```
