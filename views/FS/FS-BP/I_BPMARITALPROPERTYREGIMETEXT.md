---
name: I_BPMARITALPROPERTYREGIMETEXT
description: Bpmaritalpropertyregimetext
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPMARITALPROPERTYREGIMETEXT

**Bpmaritalpropertyregimetext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(tp04t.langu as langu preserving type)` |
| `BPMaritalPropertyRegime` | ✓ | |  | `cast(tp04t.proprty_st as bp_proprty_old preserving type)` |
| `BPMaritalPropertyRegimeDesc` |  | |  | `proprty_t` |
| `_BPMaritalPropertyRegime` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPMaritalPropertyRegime` | `I_BPMaritalPropertyRegime` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Marital Property Regime - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPMaritalPropertyRegime',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BPMaritalPropertyRegimeText
  as select from tp04t
  association [0..1] to I_BPMaritalPropertyRegime as _BPMaritalPropertyRegime on $projection.BPMaritalPropertyRegime = _BPMaritalPropertyRegime.BPMaritalPropertyRegime
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp04t.langu as langu preserving type)               as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPMaritalPropertyRegime'
  key cast(tp04t.proprty_st as bp_proprty_old preserving type) as BPMaritalPropertyRegime,

      @Semantics.text: true
      tp04t.proprty_t                                        as BPMaritalPropertyRegimeDesc,

      _BPMaritalPropertyRegime,
      _Language
}
```
