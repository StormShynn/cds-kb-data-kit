---
name: I_CNSLDTNBUSINESSAREATEXTTP
description: Cnsldtnbusinessareatexttp
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
# I_CNSLDTNBUSINESSAREATEXTTP

**Cnsldtnbusinessareatexttp**

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
| key `BusinessArea` | `_Text.BusinessArea` |
| `BusinessAreaName` | `_Text.BusinessAreaName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnBusinessAreaTP` | `_BusinessArea as _BusinessArea : redirected to parent I_CnsldtnBusinessAreaTP` |

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
//    name: 'CnsldtnBusinessAreaText'
//  },
  semanticKey: [
    'Language',
    'BusinessArea'
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
@EndUserText.label: 'Consolidation Business Area - Text TP'
define view entity I_CnsldtnBusinessAreaTextTP
  as projection on R_CnsldtnBusinessAreaTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.BusinessArea,

      @Semantics.text
      _Text.BusinessAreaName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _BusinessArea as _BusinessArea : redirected to parent I_CnsldtnBusinessAreaTP

}
```
