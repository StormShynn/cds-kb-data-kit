---
name: I_CNSLDTNCOUNTRYTP
description: "Cnsldtncountrytp"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - country
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCOUNTRYTP

**Cnsldtncountrytp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | | `_CnsldtnCountry` | `Country` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnCountry` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCountryTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnCountryTextTP` |  |  |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType:{
    name: 'CnsldtnCountry'
  },
  semanticKey: [
    'Country'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Country/Region - TP'
define root view entity I_CnsldtnCountryTP
  provider contract transactional_interface
  as projection on R_CnsldtnCountryTP as _CnsldtnCountry

{

  key _CnsldtnCountry.Country,

      _CnsldtnCountry.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnCountryTextTP

}
```
