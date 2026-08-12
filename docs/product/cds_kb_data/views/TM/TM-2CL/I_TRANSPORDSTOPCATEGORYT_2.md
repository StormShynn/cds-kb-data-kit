---
name: I_TRANSPORDSTOPCATEGORYT_2
description: "Transpordstopcategoryt 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_TRANSPORDSTOPCATEGORYT_2

**Transpordstopcategoryt 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdStopCategoryDesc` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdStopCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Stop Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdStopCategory'
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
define view entity I_TranspOrdStopCategoryT_2
  as select from dd07t
  association        to parent I_TranspOrdStopCategory_2 as _TranspOrdStopCategory on $projection.TranspOrdStopCategory = _TranspOrdStopCategory.TranspOrdStopCategory
  association [0..1] to I_Language                       as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStopCategory'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/stop_category preserving type) as TranspOrdStopCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                                     as TranspOrdStopCategoryDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                           as DomainValue,

      /* Associations */
      _TranspOrdStopCategory,
      _Language
}
where
      domname                     =  '/SCMTMS/STOP_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 1) <> 'S' //Stop Without Change of Main Resource
  and substring(domvalue_l, 1, 1) <> 'E' //Stop for Service Execution
```
