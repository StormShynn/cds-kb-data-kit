---
name: I_BPUNDESIRABILITYREASONTEXT
description: "Bpundesirabilityreasontext"
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
# I_BPUNDESIRABILITYREASONTEXT

**Bpundesirabilityreasontext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(tp18t.langu as langu preserving type)` |  |  |
| `UndesirabilityReason` | ✓ | |  | `cast(tp18t.unw_reason as bp_unw_reason preserving type)` |  |  |
| `UndesirabilityReasonDesc` |  | |  | `unw_text` |  |  |
| `_BPUndesirabilityReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPUndesirabilityReason` | `I_BPUndesirabilityReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Reason Undesirable Client - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'UndesirabilityReason',
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

define view entity I_BPUndesirabilityReasonText
  as select from tp18t
  association [0..1] to I_BPUndesirabilityReason as _BPUndesirabilityReason on $projection.UndesirabilityReason = _BPUndesirabilityReason.UndesirabilityReason
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp18t.langu as langu preserving type)              as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPUndesirabilityReason'
  key cast(tp18t.unw_reason as bp_unw_reason preserving type) as UndesirabilityReason,

      @Semantics.text: true
      tp18t.unw_text                                          as UndesirabilityReasonDesc,

      _BPUndesirabilityReason,
      _Language
}
```
