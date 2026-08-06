---
name: I_DISTRSTATUSBYDECTRLZDWRHST
description: Distrstatusbydectrlzdwrhst
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DISTRSTATUSBYDECTRLZDWRHST

**Distrstatusbydectrlzdwrhst**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DistrStatusByDecentralizedWrhs` | `cast(left(dd07t.domvalue_l, 1) as vlstk preserving type )` |
| key `Language` | `ddlanguage` |
| `DistrStatusByDectrlzdWrhsDesc` | `ddtext` |
| `_DistrStatusByDectrlzdWrhs` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DistrStatusByDectrlzdWrhs` | `I_DistrStatusByDectrlzdWrhs` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'DistrStatusByDecentralizedWrhs'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Distr Sts by Decentralized Wrhs - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDSTSTSDCTRWHT'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_DistrStatusByDectrlzdWrhsT
  as select from dd07t

  association [0..1] to I_DistrStatusByDectrlzdWrhs as _DistrStatusByDectrlzdWrhs on $projection.DistrStatusByDecentralizedWrhs = _DistrStatusByDectrlzdWrhs.DistrStatusByDecentralizedWrhs
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_DistrStatusByDectrlzdWrhs'
      @ObjectModel.text.element: ['DistrStatusByDectrlzdWrhsDesc']
  key cast(left(dd07t.domvalue_l, 1) as vlstk preserving type ) as DistrStatusByDecentralizedWrhs,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                    as DistrStatusByDectrlzdWrhsDesc,

      _DistrStatusByDectrlzdWrhs,
      _Language

}
where
      domname  = 'VLSTK'
  and as4local = 'A'
```
