---
name: I_TRANSPORDERCATEGORYT_2
description: "Transpordercategoryt 2"
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
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDERCATEGORYT_2

**Transpordercategoryt 2**

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
| `TransportationOrderCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_tor_category preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TransportationOrderCatDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tor_cat_desc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TransportationOrderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transportation Order Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TransportationOrderCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspOrderCategoryT_2
  as select from dd07t
  association        to parent I_TranspOrderCategory_2 as _TransportationOrderCategory on $projection.TransportationOrderCategory = _TransportationOrderCategory.TransportationOrderCategory
  association [0..1] to I_Language                     as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationOrderCategory'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_tor_category preserving type) as TransportationOrderCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tor_cat_desc preserving type )                     as TransportationOrderCatDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                              as DomainValue,

      /* Associations */
      _TransportationOrderCategory,
      _Language
}
where
      domname                     =  '/SCMTMS/TOR_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> 'TC' //Freight Order Copy for Tendering
  and substring(domvalue_l, 1, 2) <> 'SO' //Service Order
```
