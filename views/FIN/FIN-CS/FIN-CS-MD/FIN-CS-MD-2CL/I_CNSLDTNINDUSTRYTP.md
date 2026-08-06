---
name: I_CNSLDTNINDUSTRYTP
description: Cnsldtnindustrytp
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNINDUSTRYTP

**Cnsldtnindustrytp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Industry` | `_CnsldtnIndustry.Industry` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnIndustry.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnIndustryTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnIndustryTextTP` |

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
    name: 'CnsldtnIndustry'
  },
  semanticKey: [
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
@EndUserText.label: 'Consolidation Industry - TP'
define root view entity I_CnsldtnIndustryTP
  provider contract transactional_interface
  as projection on R_CnsldtnIndustryTP as _CnsldtnIndustry

{

  key _CnsldtnIndustry.Industry,

      _CnsldtnIndustry.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnIndustryTextTP

}
```
