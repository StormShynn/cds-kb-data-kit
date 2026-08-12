---
name: I_SETTLMTBUSPROCCATTEXT
description: "Settlmtbusproccattext"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SETTLMTBUSPROCCATTEXT

**Settlmtbusproccattext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBusProcCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_use_case_type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SettlmtBusProcCatName` |  | |  | `cast( dd07t.ddtext as wlf_use_case_type_desc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlmt Business Process Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtBusProcCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFSMTBUSPRCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtBusProcCatText
  as select from dd07t

  association        to parent I_SettlmtBusProcCat as _SettlmtBusProcCat on $projection.SettlmtBusProcCat = _SettlmtBusProcCat.SettlmtBusProcCat
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtBusProcCat'
      @ObjectModel.text.element: ['SettlmtBusProcCatName']
  key cast( dd07t.domvalue_l as wlf_use_case_type )                                  as SettlmtBusProcCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_use_case_type_desc preserving type )                 as SettlmtBusProcCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,

      /* Associations */
      _SettlmtBusProcCat,
      _Language
}

where
      dd07t.domname  = 'WLF_USE_CASE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
