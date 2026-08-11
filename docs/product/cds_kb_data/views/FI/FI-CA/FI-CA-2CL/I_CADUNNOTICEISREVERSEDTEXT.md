---
name: I_CADUNNOTICEISREVERSEDTEXT
description: "Dunning Notice Is Reversed - Text"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNOTICEISREVERSEDTEXT')/$value
semantic_en: "Dunning Notice Is Reversed - Text"
semantic_vi: "Dunning Notice Is Reversed - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "dunning"
  - "notice"
  - "reversed"
  - "text"
  - "language"
tags:
  - FI
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADUNNOTICEISREVERSEDTEXT

**Dunning Notice Is Reversed - Text**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNOTICEISREVERSEDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADunningNoticeIsReversed` | ✓ | |  | `cast( left( domvalue_l, 1 ) as xmsto_kk preserving type )` | `CHAR(1)` | Dunning Notice Reversed |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CADunningNoticeIsReversedText` |  | |  | `cast( ddtext as xmsto_text_kk preserving type )` | `CHAR(60)` | Dunning Description Reversed |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNOTICEISREVERSEDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNOTICEISREVERSEDTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Notice Is Reversed - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADunningNoticeIsReversed',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunNoticeIsReversedText 
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( domvalue_l, 1 ) as xmsto_kk preserving type ) as CADunningNoticeIsReversed,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                     as Language,

      @Semantics.text
      cast( ddtext as xmsto_text_kk preserving type )                 as CADunningNoticeIsReversedText,

      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A'
```
