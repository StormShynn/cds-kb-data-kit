---
name: I_COSTCOMPONENTVIEWTEXT
description: "Costcomponentviewtext"
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
# I_COSTCOMPONENTVIEWTEXT

**Costcomponentviewtext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CostComponentView` | ✓ | |  | `sicht` |  |  |
| `CostComponentViewName` |  | |  | `txsic` |  |  |
| `_Language` | | ✓ | | | | |
| `_CostComponentView` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CostComponentView` | `I_CostComponentView` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CostComponentView',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING 
  },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE, 
                           #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Component View - Text'

define view entity I_CostComponentViewText
  as select from tckh9
  association [1..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_CostComponentView as _CostComponentView on $projection.CostComponentView = _CostComponentView.CostComponentView
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_CostComponentView'
  key sicht as CostComponentView,
      
      @Semantics.text: true
      txsic as CostComponentViewName,
      
      _Language,
      _CostComponentView
}
```
