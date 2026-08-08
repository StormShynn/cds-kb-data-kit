---
name: I_SETTLMTDOCCATTEXT
description: "Settlmtdoccattext"
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
# I_SETTLMTDOCCATTEXT

**Settlmtdoccattext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_settlmt_doc_cat )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SettlmtDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_lftyp_name preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Document Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDocCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
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
  technicalName: 'IWLFSMTDOCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDocCatText
  as select from dd07t

  association        to parent I_SettlmtDocCat as _SettlmtDocCat on $projection.SettlmtDocCat = _SettlmtDocCat.SettlmtDocCat
  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      @ObjectModel.text.element: ['SettlmtDocCatName']
  key cast( dd07t.domvalue_l as wlf_settlmt_doc_cat )                       as SettlmtDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                      as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_lftyp_name  preserving type)                as SettlmtDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,

      /* Associations */
      _SettlmtDocCat,
      _Language
}

where
      dd07t.domname  = 'WFTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
