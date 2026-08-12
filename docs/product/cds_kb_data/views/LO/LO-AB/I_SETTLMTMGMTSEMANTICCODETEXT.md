---
name: I_SETTLMTMGMTSEMANTICCODETEXT
description: "Settlmtmgmtsemanticcodetext"
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
# I_SETTLMTMGMTSEMANTICCODETEXT

**Settlmtmgmtsemanticcodetext**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `SettlmtMgmtSemanticCode` | ✓ | |  | `semantic_type` |  |  |
| `SettlmtMgmtSemanticCodeDesc` |  | |  | `semantic_type_name` |  |  |
| `_SettlmtMgmtSemanticCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtMgmtSemanticCode` | `I_SettlmtMgmtSemanticCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Settlement Management Semantic - Text'
@ObjectModel: {
    dataCategory:           #TEXT,
    representativeKey:      'SettlmtMgmtSemanticCode',
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ISETLMGMTSEMCODE' 
}
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_SettlmtMgmtSemanticCodeText
  as select from wlf_d_sem_type_t
  association [0..1] to I_SettlmtMgmtSemanticCode as _SettlmtMgmtSemanticCode on $projection.SettlmtMgmtSemanticCode = _SettlmtMgmtSemanticCode.SettlmtMgmtSemanticCode
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras              as Language,
      @ObjectModel.foreignKey.association: '_settlmtmgmtsemanticcode'
  key semantic_type      as SettlmtMgmtSemanticCode,
      @Semantics.text: true
      semantic_type_name as SettlmtMgmtSemanticCodeDesc,

      _SettlmtMgmtSemanticCode,
      _Language
}
```
