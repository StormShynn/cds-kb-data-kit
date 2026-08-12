---
name: I_CNSLDTNCOUNTRYTEXTTP
description: "Cnsldtncountrytexttp"
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCOUNTRYTEXTTP

**Cnsldtncountrytexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |  |  |
| `Country` | ✓ | | `_Text` | `Country` |  |  |
| `CountryName` |  | | `_Text` | `CountryName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCountryTP` |  | |  | `_Country as _Country : redirected to parent I_CnsldtnCountryTP` |  |  |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  sapObjectNodeType:{
//    name: 'CnsldtnCountryText'
//  },
  semanticKey: [
    'Language',
    'Country'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Country/Region - Text TP'
define view entity I_CnsldtnCountryTextTP
  as projection on R_CnsldtnCountryTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Country,

      @Semantics.text
      _Text.CountryName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Country as _Country : redirected to parent I_CnsldtnCountryTP

}
```
