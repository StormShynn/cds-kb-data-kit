---
name: I_COSTBREAKDOWNSTRUCTURE
description: Costbreakdownstructure
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
# I_COSTBREAKDOWNSTRUCTURE

**Costbreakdownstructure**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostBreakdownStructure` | `CostBreakdownStructure` |
| `CostBreakdownType` | `CostBreakdownType` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostBreakdownStructureText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Cost Breakdown Structure'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownStructure',
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

define view entity I_CostBreakdownStructure
  as select from P_FUCBC_CC_STRUC

  association [0..*] to I_CostBreakdownStructureText as _Text on $projection.CostBreakdownStructure = _Text.CostBreakdownStructure
{
      @ObjectModel.text.association: '_Text'
  key CostBreakdownStructure,
  
      CostBreakdownType,

      _Text
}
```
