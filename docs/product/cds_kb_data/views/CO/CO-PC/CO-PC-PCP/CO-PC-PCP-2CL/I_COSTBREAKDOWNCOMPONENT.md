---
name: I_COSTBREAKDOWNCOMPONENT
description: "Costbreakdowncomponent"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_COSTBREAKDOWNCOMPONENT

**Costbreakdowncomponent**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostBreakdownStructure` | ✓ | |  |  |  |  |
| `CostBreakdownComponent` | ✓ | |  |  |  |  |
| `CostBreakdownComponentSequence` |  | |  |  |  |  |
| `IncludeInInventory` |  | |  |  |  |  |
| `IncludeInCOGS` |  | |  |  |  |  |
| `_Structure` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostBreakdownStructureText` | | ✓ | | | | |
| `_CostComponentHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Structure` | `I_CostBreakdownStructure` | [1..1] |
| `_Text` | `I_CostBreakdownComponentText` | [0..*] |
| `_CostBreakdownStructureText` | `I_CostBreakdownStructureText` | [0..*] |
| `_CostComponentHierarchyNode` | `I_CostComponentHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Breakdown Component'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownComponent',
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

@VDM.viewType: #BASIC

define view entity I_CostBreakdownComponent
  as select from P_FUCBC_COST_COMP

  association [1..1] to I_CostBreakdownStructure     as _Structure                  on  $projection.CostBreakdownStructure = _Structure.CostBreakdownStructure
  association [0..*] to I_CostBreakdownComponentText as _Text                       on  $projection.CostBreakdownStructure = _Text.CostBreakdownStructure
                                                                                    and $projection.CostBreakdownComponent = _Text.CostBreakdownComponent
  association [0..*] to I_CostBreakdownStructureText as _CostBreakdownStructureText on  $projection.CostBreakdownStructure = _CostBreakdownStructureText.CostBreakdownStructure
  association [0..*] to I_CostComponentHierarchyNode as _CostComponentHierarchyNode on  $projection.CostBreakdownStructure = _CostComponentHierarchyNode.CostBreakdownStructure
                                                                                    and $projection.CostBreakdownComponent = _CostComponentHierarchyNode.CostBreakdownComponent

{
      @ObjectModel.foreignKey.association: '_Structure'
      @ObjectModel.text.association: '_CostBreakdownStructureText'
  key CostBreakdownStructure,
      @ObjectModel.hierarchy.association: '_CostComponentHierarchyNode'
      @ObjectModel.text.association: '_Text'
  key CostBreakdownComponent,

      CostBreakdownComponentSequence,

      IncludeInInventory,
      IncludeInCOGS,

      _Structure,
      _Text,
      _CostBreakdownStructureText,
      _CostComponentHierarchyNode
}
```
