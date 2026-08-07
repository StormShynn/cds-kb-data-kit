---
name: I_SETTLMTPROCESSTYPETEXT
description: "Settlmtprocesstypetext"
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
# I_SETTLMTPROCESSTYPETEXT

**Settlmtprocesstypetext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtProcessType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SettlmtProcessTypeDesc` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Process Type - Text'
@AccessControl: { 
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SettlmtProcessType',
    modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities : [ #LANGUAGE_DEPENDENT_TEXT,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE,
                              #CDS_MODELING_ASSOCIATION_TARGET,
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

define view entity I_SettlmtProcessTypeText
  as select from R_SettlmtProcessTypeText
  
  association to parent I_SettlmtProcessType as _SettlmtProcessType on $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType  
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtProcessType'
      @ObjectModel.text.element: ['SettlmtProcessTypeDesc']
  key SettlmtProcessType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SettlmtProcessTypeDesc,

      /* Associations */
      _SettlmtProcessType,
      _Language
}
```
