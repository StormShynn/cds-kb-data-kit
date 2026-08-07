---
name: I_COSTBREAKDOWNCOMPONENTTEXT
description: Costbreakdowncomponenttext
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
# I_COSTBREAKDOWNCOMPONENTTEXT

**Costbreakdowncomponenttext**

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
| `CostBreakdownComponent` | ✓ | |  | `cost_component` |  |  |
| `CostBreakdownComponentName` |  | |  | `name` |  |  |
| `_Structure` | | ✓ | | | | |
| `_Component` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Structure` | `I_CostBreakdownStructure` | [1..1] |
| `_Component` | `I_CostBreakdownComponent` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Breakdown Component - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownComponent',
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

define view entity I_CostBreakdownComponentText
  as select from fucbc_cost_compt

  association [1..1] to I_CostBreakdownStructure as _Structure on  $projection.CostBreakdownStructure = _Structure.CostBreakdownStructure
  association [1..1] to I_CostBreakdownComponent as _Component on  $projection.CostBreakdownStructure = _Component.CostBreakdownStructure
                                                               and $projection.CostBreakdownComponent = _Component.CostBreakdownComponent
  association [0..1] to I_Language               as _Language  on  $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu           as Language,
      @ObjectModel.foreignKey.association: '_Structure'
  key cost_comp_struc as CostBreakdownStructure,
      @ObjectModel.foreignKey.association: '_Component'
      @ObjectModel.text.element:['CostBreakdownComponentName']
      @Search.defaultSearchElement: true
      @Search.ranking:#LOW
  key cost_component  as CostBreakdownComponent,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#HIGH
      @Semantics.text: true
      name            as CostBreakdownComponentName,

      _Structure,
      _Component,
      _Language
}
```
