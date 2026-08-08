---
name: I_CNSLDTNSUBITEMCATEGORYVH_2
description: "Cnsldtnsubitemcategoryvh 2"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMCATEGORYVH_2

**Cnsldtnsubitemcategoryvh 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSubitemCategory` | ✓ | | `_Source` | `CnsldtnSubitemCategory` |  |  |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnSubitemCategory',
  semanticKey: ['CnsldtnSubitemCategory'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Subitem Category'

define view entity I_CnsldtnSubitemCategoryVH_2
  as select from I_CnsldtnSubitemCategory_2 as _Source

{
      @ObjectModel.text.element:  [ 'CnsldtnSubitemCategoryText' ]
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key _Source.CnsldtnSubitemCategory,

      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #LOW
      }
      _Source._Text[1: Language=$session.system_language].CnsldtnSubitemCategoryText
}
```
