---
name: I_COSTINGTYPESTDVH
description: Costingtypestdvh
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
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGTYPESTDVH

**Costingtypestdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostingType` | `CostingType` |
| `CostingTypeName` | `_CostingTypeText.CostingTypeName` |
| `_CostingTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingTypeText` | `I_CostingTypeText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostingType',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  },
  resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Costing Type'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_CostingTypeStdVH
  as select from I_CostingType
  association [0..1] to I_CostingTypeText as _CostingTypeText on  _CostingTypeText.CostingType = $projection.CostingType
                                                              and _CostingTypeText.Language    = $session.system_language
{
      @ObjectModel.text.element: [ 'CostingTypeName' ]
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostingType,
      @Search.defaultSearchElement: true
      _CostingTypeText.CostingTypeName,

      _CostingTypeText      
}
```
