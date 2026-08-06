---
name: I_SETTLMTPROCESSCATTEXT
description: Settlmtprocesscattext
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
# I_SETTLMTPROCESSCATTEXT

**Settlmtprocesscattext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SettlmtProcessCat` | `cast(dd07t.domvalue_l as wlf_settlmt_process_cat )` |
| key `Language` | `dd07t.ddlanguage` |
| `SettlmtProcessCatName` | `cast( dd07t.ddtext as wlf_wbtyp_name preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_SettlmtProcessCat` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Process Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtProcessCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTPROCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtProcessCatText
  as select from dd07t

  association        to parent I_SettlmtProcessCat as _SettlmtProcessCat on $projection.SettlmtProcessCat = _SettlmtProcessCat.SettlmtProcessCat
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtProcessCat'
      @ObjectModel.text.element: ['SettlmtProcessCatName']
  key cast(dd07t.domvalue_l  as wlf_settlmt_process_cat )                                  as SettlmtProcessCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_wbtyp_name preserving type )                               as SettlmtProcessCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _SettlmtProcessCat,
      _Language
}

where
      dd07t.domname  = 'WBTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
