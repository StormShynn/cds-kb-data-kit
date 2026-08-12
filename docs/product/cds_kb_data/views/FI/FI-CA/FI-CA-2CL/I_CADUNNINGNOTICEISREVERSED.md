---
name: I_CADUNNINGNOTICEISREVERSED
description: "Dunning Notice Is Reversed"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGNOTICEISREVERSED')/$value
semantic_en: "Dunning Notice Is Reversed"
semantic_vi: "Dunning Notice Is Reversed — CDS view giao diện dựa trên dd07l."
keywords:
  - "dunning"
  - "notice"
  - "reversed"
tags:
  - FI
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADUNNINGNOTICEISREVERSED

**Dunning Notice Is Reversed**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGNOTICEISREVERSED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADunningNoticeIsReversed` | ✓ | |  | `cast( left( domvalue_l, 1 ) as xmsto_kk preserving type )` | `CHAR(1)` | Dunning Notice Reversed |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunNoticeIsReversedText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGNOTICEISREVERSED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGNOTICEISREVERSED')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Notice Is Reversed'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunningNoticeIsReversed',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningNoticeIsReversed
  as select from dd07l

  association [1..*] to I_CADunNoticeIsReversedText as _Text on $projection.CADunningNoticeIsReversed = _Text.CADunningNoticeIsReversed

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as xmsto_kk preserving type ) as CADunningNoticeIsReversed,

      _Text
}
where
      domname  = 'XFELD'
  and as4local = 'A'
```
