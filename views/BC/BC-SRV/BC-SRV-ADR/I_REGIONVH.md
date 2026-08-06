---
name: I_REGIONVH
description: Regionvh
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - value-help
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_REGIONVH

**Regionvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Country` | `Country` |
| key `Region` | `Region` |
| `_RegionText` | *Association* |
| `_Country` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true 
@EndUserText.label: 'Region'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_RegionVH
  as select from I_Region
{
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true      
  key Country,
      @ObjectModel.text.association: '_RegionText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key Region,
      _RegionText,
      _Country
}
```
