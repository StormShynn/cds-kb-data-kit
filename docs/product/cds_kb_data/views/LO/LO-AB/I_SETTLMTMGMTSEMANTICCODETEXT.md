---
name: I_SETTLMTMGMTSEMANTICCODETEXT
description: "Settlmtmgmtsemanticcodetext"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
