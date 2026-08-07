---
name: I_CNSLDTNFUNDTEXTTP
description: Cnsldtnfundtexttp
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
# I_CNSLDTNFUNDTEXTTP

**Cnsldtnfundtexttp**

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
| `FinancialManagementArea` | ✓ | | `_Text` | `FinancialManagementArea` |
| `Fund` | ✓ | | `_Text` | `Fund` |
| `FundName` |  | | `_Text` | `FundName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnFundTP` |  | |  | `_Fund as _Fund : redirected to parent I_CnsldtnFundTP` |

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
//    name: 'CnsldtnFundText'
//  },
  semanticKey: [
    'Language',
    'FinancialManagementArea',
    'Fund'
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

@EndUserText.label: 'Consolidation Fund - Text TP'

define view entity I_CnsldtnFundTextTP
  as projection on R_CnsldtnFundTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialManagementArea,

  key _Text.Fund,

      @Semantics.text
      _Text.FundName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Fund as _Fund : redirected to parent I_CnsldtnFundTP

}
```
