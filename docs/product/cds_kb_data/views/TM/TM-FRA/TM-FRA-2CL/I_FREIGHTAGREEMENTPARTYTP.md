---
name: I_FREIGHTAGREEMENTPARTYTP
description: "Freightagreementpartytp"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FREIGHTAGREEMENTPARTYTP

**Freightagreementpartytp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgrmtBusinessPartnerUUID` | ✓ | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FreightAgreementParty._FreightAgreement : redirected to parent I_FreightAgreementTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Party - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FreightAgreementParty'}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FreightAgreementParty_Type'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_FreightAgreementPartyTP
  as projection on R_FreightAgreementPartyTP as FreightAgreementParty
{
  key TranspAgrmtBusinessPartnerUUID,
      TransportationAgreementUUID,
      BusinessPartner,
      //To Parent
      FreightAgreementParty._FreightAgreement : redirected to parent I_FreightAgreementTP

}
```
