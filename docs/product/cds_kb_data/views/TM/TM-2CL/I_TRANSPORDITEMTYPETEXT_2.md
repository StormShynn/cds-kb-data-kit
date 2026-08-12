---
name: I_TRANSPORDITEMTYPETEXT_2
description: "Transporditemtypetext 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
