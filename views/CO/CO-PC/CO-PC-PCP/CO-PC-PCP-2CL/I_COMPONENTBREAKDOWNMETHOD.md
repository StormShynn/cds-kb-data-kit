---
name: I_COMPONENTBREAKDOWNMETHOD
description: Componentbreakdownmethod
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
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COMPONENTBREAKDOWNMETHOD

**Componentbreakdownmethod**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ComponentBreakdownMethod` | `ComponentBreakdownMethod` |
| `ComponentBreakdownMethodType` | `ComponentBreakdownMethodType` |
| `CostBreakdownStructure` | `CostBreakdownStructure` |
| `QuantityBreakdownStructure` | `QuantityBreakdownStructure` |
| `_CostBreakdownStructure` | *Association* |
| `_QtyComponentStructure` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostBreakdownStructure` | `I_CostBreakdownStructure` | [0..1] |
| `_QtyComponentStructure` | `I_QtyBreakdownStructure` | [0..1] |
| `_Text` | `I_ComponentBreakdownMethodText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Component Breakdown Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #NONE,
    representativeKey: 'ComponentBreakdownMethod',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [
        #ANALYTICAL_DIMENSION,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #CDS_MODELING_DATA_SOURCE,
        #SQL_DATA_SOURCE ]
}

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_ComponentBreakdownMethod
  as select from P_FUCBC_METHOD

  association [0..1] to I_CostBreakdownStructure       as _CostBreakdownStructure on $projection.CostBreakdownStructure = _CostBreakdownStructure.CostBreakdownStructure
  association [0..1] to I_QtyBreakdownStructure        as _QtyComponentStructure  on $projection.QuantityBreakdownStructure = _QtyComponentStructure.QuantityBreakdownStructure
  association [0..*] to I_ComponentBreakdownMethodText as _Text                   on $projection.ComponentBreakdownMethod = _Text.ComponentBreakdownMethod

{
       @ObjectModel.text.association: '_Text'
       @Search.defaultSearchElement: true
       @Search.ranking:#HIGH
  key  ComponentBreakdownMethod,

       ComponentBreakdownMethodType,
       @ObjectModel.foreignKey.association: '_CostBreakdownStructure'
       CostBreakdownStructure,
       @ObjectModel.foreignKey.association: '_QtyComponentStructure'
       QuantityBreakdownStructure,

       _CostBreakdownStructure,
       _QtyComponentStructure,
       _Text
}
```
