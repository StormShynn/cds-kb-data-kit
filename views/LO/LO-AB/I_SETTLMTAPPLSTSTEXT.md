---
name: I_SETTLMTAPPLSTSTEXT
description: Settlmtapplststext
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
# I_SETTLMTAPPLSTSTEXT

**Settlmtapplststext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtApplSts` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SettlmtApplStsDesc` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Application Status - Text' 
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtApplSts',
    dataCategory: #TEXT,
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE,
                              #SEARCHABLE_ENTITY ],
    usageType: {
      dataClass:      #CUSTOMIZING,
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
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtApplStsText
  as select from R_SettlmtApplStsText

  association to parent I_SettlmtApplSts as _SettlmtApplSts on $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts  
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      @ObjectModel.text.element: ['SettlmtApplStsDesc']
  key SettlmtApplSts,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SettlmtApplStsDesc,

      /* Associations */
      _SettlmtApplSts,
      _Language
}
```
