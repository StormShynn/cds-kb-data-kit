---
name: I_CNSLDTNSUBITEMVH_2
description: "Cnsldtnsubitemvh 2"
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
# I_CNSLDTNSUBITEMVH_2

**Cnsldtnsubitemvh 2**

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
| `CnsldtnSubitem` | ✓ | | `_Source` | `CnsldtnSubitem` |  |  |

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
  representativeKey: 'CnsldtnSubitem',
  semanticKey: ['CnsldtnSubitem'],
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

@EndUserText.label: 'Consolidation Subitem'
define view entity I_CnsldtnSubitemVH_2
  as select from I_CnsldtnSubitem_2 as _Source

{

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemCategoryVH_2',
          element: 'CnsldtnSubitemCategory' }
      }]
  key _Source.CnsldtnSubitemCategory,

      @ObjectModel.text.element:  [ 'CnsldtnSubitemText' ]
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key _Source.CnsldtnSubitem,

      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #LOW
      }
      _Source._Text[1: Language=$session.system_language].CnsldtnSubitemText,

      @Semantics.text: true
      _Source._Text[1: Language=$session.system_language].CnsldtnSubitemMediumText

}
```
