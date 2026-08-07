---
name: I_CNSLDTNGRANTTEXTTP
description: Cnsldtngranttexttp
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
# I_CNSLDTNGRANTTEXTTP

**Cnsldtngranttexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |
| `GrantID` | ✓ | | `_Text` | `GrantID` |
| `GrantName` |  | | `_Text` | `GrantName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnGrantTP` |  | |  | `_Grant as _Grant : redirected to parent I_CnsldtnGrantTP` |

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
  semanticKey: [
    'Language',
    'GrantID'
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
@EndUserText.label: 'Consolidation Grant - Text TP'
define view entity I_CnsldtnGrantTextTP
  as projection on R_CnsldtnGrantTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.GrantID,

      @Semantics.text
      _Text.GrantName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Grant as _Grant : redirected to parent I_CnsldtnGrantTP

}
```
