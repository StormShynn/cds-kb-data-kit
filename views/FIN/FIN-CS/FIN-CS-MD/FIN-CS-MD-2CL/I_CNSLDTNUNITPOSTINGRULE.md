---
name: I_CNSLDTNUNITPOSTINGRULE
description: Cnsldtnunitpostingrule
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPOSTINGRULE

**Cnsldtnunitpostingrule**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnitPostingRule` | `cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitpostingrule preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitPostingRuleText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUPOSTRULE',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
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
    representativeKey: 'ConsolidationUnitPostingRule',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitPostingRule'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cons Unit Posting Rule Selection'

define view I_CnsldtnUnitPostingRule
  as select from P_CnsldtnUnitAttributeValue(P_CnsldtnUnitAttribute : 'S-POSTING-RULE') as _UnitAttributeValue

  association [0..*] to I_CnsldtnUnitPostingRuleText as _Text on $projection.ConsolidationUnitPostingRule = _Text.ConsolidationUnitPostingRule
{
      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast( _UnitAttributeValue.CnsldtnUnitAttributeValue as fincs_unitpostingrule preserving type ) as ConsolidationUnitPostingRule,


      _Text
}
```
