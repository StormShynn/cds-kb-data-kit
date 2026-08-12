---
name: I_SLCTRANSLATIONSTATUSTEXT
description: "Slctranslationstatustext"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
