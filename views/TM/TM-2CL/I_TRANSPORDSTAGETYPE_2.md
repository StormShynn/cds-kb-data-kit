---
name: I_TRANSPORDSTAGETYPE_2
description: Transpordstagetype 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSTAGETYPE_2

**Transpordstagetype 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStageType` | ✓ | |  | `stage_type` |  |  |
| `TranspOrdStageCategory` |  | |  | `stage_cat` |  |  |
| `_TranspOrdStageCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdStageCategory` | `I_TranspOrdStageCategory_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Stage Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TranspOrdStageType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TransportationOrderStageType'
define root view entity I_TranspOrdStageType_2
  as select from /scmtms/c_stgty
  composition [0..*] of I_TranspOrdStageTypeText_2 as _Text
  association [0..1] to I_TranspOrdStageCategory_2 as _TranspOrdStageCategory on $projection.TranspOrdStageCategory = _TranspOrdStageCategory.TranspOrdStageCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key stage_type as TranspOrdStageType,
      @ObjectModel.foreignKey.association: '_TranspOrdStageCategory'
      stage_cat  as TranspOrdStageCategory,

      /* Associations */
      _Text,
      _TranspOrdStageCategory
}
```
