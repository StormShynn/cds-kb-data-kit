---
name: I_PERSSETTLMTBUSPROCCATTEXT
description: Perssettlmtbusproccattext
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - text-view
  - text
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTBUSPROCCATTEXT

**Perssettlmtbusproccattext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersSettlmtBusProcCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_use_case_type )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PersSettlmtBusProcCatName` |  | |  | `cast( ddtext as wlf_use_case_type_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PersSettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Personnel Settlement Business Process Category - Text' 
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'PersSettlmtBusProcCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities :  [#CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE ],
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics.dataExtraction.enabled: false
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PersSettlmtBusProcCatText
  as select from dd07t

  association        to parent I_PersSettlmtBusProcCat as _PersSettlmtBusProcCat on $projection.PersSettlmtBusProcCat = _PersSettlmtBusProcCat.PersSettlmtBusProcCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PersSettlmtBusProcCat'
      @ObjectModel.text.element: ['PersSettlmtBusProcCatName']
  key cast( dd07t.domvalue_l as wlf_use_case_type )                                  as PersSettlmtBusProcCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                              as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as wlf_use_case_type_desc preserving type )                       as PersSettlmtBusProcCatName,

      /* Associations */
      _PersSettlmtBusProcCat,
      _Language
}
where
  (
        dd07t.domvalue_l = ''
    or  dd07t.domvalue_l = '20'
    or  dd07t.domvalue_l = '21'
    or  dd07t.domvalue_l = '22'
    or  dd07t.domvalue_l = '23'
    or  dd07t.domvalue_l = '24'
    or  dd07t.domvalue_l = '25'
    or  dd07t.domvalue_l = '26'
    or  dd07t.domvalue_l = '27'
  )
  and(
        dd07t.domname    = 'WLF_USE_CASE_TYPE'
    and dd07t.as4local   = 'A'
    and dd07t.as4vers    = '0000'
  )
```
