---
name: I_TRANSPORDSTAGECATEGORYT_2
description: Transpordstagecategoryt 2
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
# I_TRANSPORDSTAGECATEGORYT_2

**Transpordstagecategoryt 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdStageCategory` | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_stage_category preserving type)` |
| key `Language` | `ddlanguage` |
| `TranspOrdStageCategoryDesc` | `cast(ddtext as /scmtms/vdm_stage_cat_desc preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TranspOrdStageCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Stage Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdStageCategory'
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

define view entity I_TranspOrdStageCategoryT_2
  as select from dd07t
  association        to parent I_TranspOrdStageCategory_2 as _TranspOrdStageCategory on $projection.TranspOrdStageCategory = _TranspOrdStageCategory.TranspOrdStageCategory
  association [0..1] to I_Language                        as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStageCategory'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_stage_category preserving type) as TranspOrdStageCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_stage_cat_desc preserving type)                      as TranspOrdStageCategoryDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                as DomainValue,

      /* Associations */
      _TranspOrdStageCategory,
      _Language
}
where
      domname                     =  '/SCMTMS/STAGE_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 1) <> 'S' //Customer Self-Delivery
  and substring(domvalue_l, 1, 1) <> 'C' //Customer Pick-Up
  and substring(domvalue_l, 1, 1) <> 'T' //Transfer (Delivery or Pick-Up)
```
