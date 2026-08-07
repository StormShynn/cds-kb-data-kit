---
name: I_COSTBREAKDOWNSTRUCTURETEXT
description: Costbreakdownstructuretext
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTBREAKDOWNSTRUCTURETEXT

**Costbreakdownstructuretext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `CostBreakdownStructure` | ✓ | |  | `cost_comp_struc` |  |  |
| `CostBreakdownStructureName` |  | |  | `name` |  |  |
| `_CostBreakdownStructure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostBreakdownStructure` | `I_CostBreakdownStructure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Breakdown Structure - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownStructure',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [
        #CDS_MODELING_ASSOCIATION_TARGET,
        #LANGUAGE_DEPENDENT_TEXT ]
}

@Search.searchable: true
    
@VDM.viewType: #BASIC

define view entity I_CostBreakdownStructureText
  as select from fucbc_cc_struct
  
  association [0..1] to I_CostBreakdownStructure as _CostBreakdownStructure on $projection.CostBreakdownStructure = _CostBreakdownStructure.CostBreakdownStructure
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu           as Language,
      @ObjectModel.foreignKey.association: '_CostBreakdownStructure'
      @ObjectModel.text.element:['CostBreakdownStructureName']
      @Search.ranking:#LOW
  key cost_comp_struc as CostBreakdownStructure,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#HIGH
      @Semantics.text: true
      name            as CostBreakdownStructureName,

      _CostBreakdownStructure,
      _Language
}
```
