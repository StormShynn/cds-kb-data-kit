---
name: I_CNSLDTNFUNCTIONALAREATEXTTP
description: "Cnsldtnfunctionalareatexttp"
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFUNCTIONALAREATEXTTP

**Cnsldtnfunctionalareatexttp**

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
| `FunctionalArea` | ✓ | | `_Text` | `FunctionalArea` |  |  |
| `FunctionalAreaName` |  | | `_Text` | `FunctionalAreaName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnFunctionalAreaTP` |  | |  | `_FunctionalArea as _FunctionalArea : redirected to parent I_CnsldtnFunctionalAreaTP` |  |  |

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
//    name: 'CnsldtnFunctionalAreaText'
//  },
  semanticKey: [
    'Language',
    'FunctionalArea'
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
@EndUserText.label: 'Consolidation Functional Area - Text TP'
define view entity I_CnsldtnFunctionalAreaTextTP
  as projection on R_CnsldtnFunctionalAreaTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FunctionalArea,

      @Semantics.text
      _Text.FunctionalAreaName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FunctionalArea as _FunctionalArea : redirected to parent I_CnsldtnFunctionalAreaTP

}
```
