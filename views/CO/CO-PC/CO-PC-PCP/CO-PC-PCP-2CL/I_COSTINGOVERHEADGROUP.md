---
name: I_COSTINGOVERHEADGROUP
description: Costingoverheadgroup
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
# I_COSTINGOVERHEADGROUP

**Costingoverheadgroup**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ValuationArea` | ✓ | |  | `bwkey` |
| `CostingOverheadGroup` | ✓ | |  | `kosgr` |
| `OverheadCode` |  | |  | `zschl` |
| `_ValuationArea` | | ✓ | | |
| `_CostingOverheadGroupText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationArea` | `I_ValuationArea` | [0..1] |
| `_CostingOverheadGroupText` | `I_CostingOverheadGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@EndUserText.label: 'Costing Overhead Group'

@AccessControl.authorizationCheck: #MANDATORY

@VDM:{
  viewType: #BASIC ,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
     }

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL }

@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    dataCategory: #VALUE_HELP,
    representativeKey: 'CostingOverheadGroup',
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  modelingPattern: #ANALYTICAL_DIMENSION
}

@Search.searchable: true

define view entity I_CostingOverheadGroup
  as select from tck14
  association [0..1] to I_ValuationArea            as _ValuationArea            on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..*] to I_CostingOverheadGroupText as _CostingOverheadGroupText on  $projection.ValuationArea        = _CostingOverheadGroupText.ValuationArea
                                                                                and $projection.CostingOverheadGroup = _CostingOverheadGroupText.CostingOverheadGroup

{
      @ObjectModel.foreignKey.association: '_ValuationArea'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductValuationAreaVH' , element: 'ValuationArea' }, useAsTemplate: true }]
  key bwkey as ValuationArea,
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_CostingOverheadGroupText'
  key kosgr as CostingOverheadGroup,
      zschl as OverheadCode,
      _CostingOverheadGroupText,
      _ValuationArea
}
```
