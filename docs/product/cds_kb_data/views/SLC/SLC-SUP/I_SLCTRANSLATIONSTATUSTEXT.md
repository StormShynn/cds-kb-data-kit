---
name: I_SLCTRANSLATIONSTATUSTEXT
description: "Slctranslationstatustext"
app_component: SLC-SUP
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
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - status
  - component:SLC-SUP
  - lob:Other
---
# I_SLCTRANSLATIONSTATUSTEXT

**Slctranslationstatustext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
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
| `SLCTranslationStatus` | ✓ | |  | `cast(substring( domvalue_l, 1, 2) as /srmsmc/translation_status)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCTranslationStatusName` |  | |  | `cast(ddtext as /srmsmc/status_descr preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCTranslationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCTranslationStatus` | `I_SLCTranslationStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Translation Status - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SLCTranslationStatus'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISLCTRANSLSTST'
@Search.searchable: true

define view I_SLCTranslationStatusText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCTranslationStatus as _SLCTranslationStatus on $projection.SLCTranslationStatus = _SLCTranslationStatus.SLCTranslationStatus
{
  key  cast(substring( domvalue_l, 1, 2) as /srmsmc/translation_status) as SLCTranslationStatus,

  @Semantics.language: true
  key ddlanguage             as Language,

  @Search.defaultSearchElement: true
  @Semantics.text: true
  cast(ddtext as /srmsmc/status_descr preserving type) as SLCTranslationStatusName, 

  _SLCTranslationStatus,
  _Language
    
}
where domname = '/SRMSMC/TRANSLATION_STATUS'
  and as4local = 'A'
```
