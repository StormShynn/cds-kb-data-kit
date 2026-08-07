---
name: I_CNSLDTNSALESDISTRICTTEXTTP
description: Cnsldtnsalesdistricttexttp
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
# I_CNSLDTNSALESDISTRICTTEXTTP

**Cnsldtnsalesdistricttexttp**

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
| `SalesDistrict` | ✓ | | `_Text` | `SalesDistrict` |  |  |
| `SalesDistrictName` |  | | `_Text` | `SalesDistrictName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSalesDistrictTP` |  | |  | `_SalesDistrict as _SalesDistrict : redirected to parent I_CnsldtnSalesDistrictTP` |  |  |

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
//    name: 'CnsldtnSalesDistrictText'
//  },
  semanticKey: [
    'Language',
    'SalesDistrict'
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
@EndUserText.label: 'Consolidation Sales District - Text TP'
define view entity I_CnsldtnSalesDistrictTextTP
  as projection on R_CnsldtnSalesDistrictTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.SalesDistrict,

      @Semantics.text
      _Text.SalesDistrictName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _SalesDistrict as _SalesDistrict : redirected to parent I_CnsldtnSalesDistrictTP

}
```
