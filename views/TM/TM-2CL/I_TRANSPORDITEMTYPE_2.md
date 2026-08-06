---
name: I_TRANSPORDITEMTYPE_2
description: Transporditemtype 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - item-level
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDITEMTYPE_2

**Transporditemtype 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemType` | `item_type` |
| `TranspOrdItemCategory` | `item_cat` |
| `_TranspOrdItemCategory` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdItemCategory` | `I_TranspOrdItemCategory_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Item Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TranspOrdItemType'
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
@ObjectModel.sapObjectNodeType.name: 'TransportationOrderItemType'
define root view entity I_TranspOrdItemType_2
  as select from /scmtms/c_tority
  composition [0..1] of I_TranspOrdItemTypeText_2 as _Text
  association [0..1] to I_TranspOrdItemCategory_2 as _TranspOrdItemCategory on $projection.TranspOrdItemCategory = _TranspOrdItemCategory.TranspOrdItemCategory
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key item_type as TranspOrdItemType,
      @ObjectModel.foreignKey.association: '_TranspOrdItemCategory'
      item_cat  as TranspOrdItemCategory,

      /* Associations */
      _Text,
      _TranspOrdItemCategory
}
```
