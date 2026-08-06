---
name: I_CNSLDTNINDUSTRYTEXTTP
description: Cnsldtnindustrytexttp
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNINDUSTRYTEXTTP

**Cnsldtnindustrytexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_Text.Language` |
| key `Industry` | `_Text.Industry` |
| `IndustryName` | `_Text.IndustryName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnIndustryTP` | `_Industry as _Industry : redirected to parent I_CnsldtnIndustryTP` |

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
//    name: 'CnsldtnIndustryText'
//  },
  semanticKey: [
    'Language',
    'Industry'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Industry - Text TP'
define view entity I_CnsldtnIndustryTextTP
  as projection on R_CnsldtnIndustryTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Industry,

      @Semantics.text
      _Text.IndustryName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Industry as _Industry : redirected to parent I_CnsldtnIndustryTP

}
```
