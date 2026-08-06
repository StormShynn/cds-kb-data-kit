---
name: I_COSTORIGINGROUPSTDVH
description: Costorigingroupstdvh
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
# I_COSTORIGINGROUPSTDVH

**Costorigingroupstdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostOriginGroup` | `CostOriginGroup` |
| key `CostOriginType` | `CostOriginType` |
| key `ControllingArea` | `ControllingArea` |
| `_Text` | *Association* |
| `_ControllingArea` | *Association* |
| `_CostOriginType` | *Association* |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFICOG__VH'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Consumption.ranked: true

@EndUserText.label: 'Cost Origin Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CostOriginGroup'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }

@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view I_CostOriginGroupStdVH
  as select from I_CostOriginGroup

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key CostOriginGroup,

      @ObjectModel.foreignKey.association: '_CostOriginType'
  key CostOriginType,

      @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,

      _Text,

      @Consumption.hidden: true
      _ControllingArea,

      @Consumption.hidden: true
      _CostOriginType
}
```
