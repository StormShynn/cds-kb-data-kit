---
name: I_TRANSPORDITEMTYPETEXT_2
description: "Transporditemtypetext 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text
  - item-level
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDITEMTYPETEXT_2

**Transporditemtypetext 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemType` | ✓ | |  | `item_type` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `TranspOrdItemTypeDesc` |  | |  | `cast (description_s as /scmtms/vdm_tor_itm_type_descr preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdItemType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transportation Order Item Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdItemType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TranspOrdItemTypeText_2
  as select from /scmtms/c_toritt
  association        to parent I_TranspOrdItemType_2 as _TranspOrdItemType on $projection.TranspOrdItemType = _TranspOrdItemType.TranspOrdItemType
  association [0..1] to I_Language                   as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdItemType'
  key item_type                                                              as TranspOrdItemType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                  as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (description_s as /scmtms/vdm_tor_itm_type_descr preserving type) as TranspOrdItemTypeDesc,

      /* Associations */
      _TranspOrdItemType,
      _Language
}
```
