---
name: I_CNSLDTNUNITPOSTINGRULEVH
description: Cnsldtnunitpostingrulevh
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPOSTINGRULEVH

**Cnsldtnunitpostingrulevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitPostingRule` | ✓ | | `_CnsldtnUnitPostingRule` | `ConsolidationUnitPostingRule` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUPOSTRULEVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'ConsolidationUnitPostingRule',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cons Unit Posting Rule Selection'

define view I_CnsldtnUnitPostingRuleVH
  as select from I_CnsldtnUnitPostingRule as _CnsldtnUnitPostingRule

{

      @ObjectModel.text.element: 'CnsldtnUnitPostingRuleText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnUnitPostingRule.ConsolidationUnitPostingRule,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnUnitPostingRule._Text[1: Language=$session.system_language].CnsldtnUnitPostingRuleText,

      @Semantics.text
      _CnsldtnUnitPostingRule._Text[1: Language=$session.system_language].CnsldtnUnitPostingRuleLongText

}
```
