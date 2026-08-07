---
name: I_CNSLDTNDIVISIONTEXTTP
description: Cnsldtndivisiontexttp
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
# I_CNSLDTNDIVISIONTEXTTP

**Cnsldtndivisiontexttp**

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
| `Division` | ✓ | | `_Text` | `Division` |
| `DivisionName` |  | | `_Text` | `DivisionName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnDivisionTP` |  | |  | `_Division as _Division : redirected to parent I_CnsldtnDivisionTP` |

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
//    name: 'CnsldtnDivisionText'
//  },
  semanticKey: [
    'Language',
    'Division'
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
@EndUserText.label: 'Consolidation Division - Text TP'
define view entity I_CnsldtnDivisionTextTP
  as projection on R_CnsldtnDivisionTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Division,

      @Semantics.text
      _Text.DivisionName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Division as _Division : redirected to parent I_CnsldtnDivisionTP

}
```
