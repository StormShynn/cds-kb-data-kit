---
name: I_TRDCLASSFCTNNMBRSCHMTEXT
description: "Numbering Scheme - Text"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTEXT')/$value
semantic_en: "Numbering Scheme - Text"
semantic_vi: "Numbering Scheme - Text — CDS view giao diện dựa trên Numbering Scheme - Text."
keywords:
  - "numbering"
  - "scheme"
  - "text"
  - "language"
  - "classfctn"
  - "nmbr"
  - "schm"
  - "name"
tags:
  - FT
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
---
# I_TRDCLASSFCTNNMBRSCHMTEXT

**Numbering Scheme - Text**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TrdClassfctnNmbrSchm` | ✓ | |  | `stcts` | `CHAR(10)` | Trade Classification Numbering Scheme |
| `TrdClassfctnNmbrSchmName` |  | |  | `text` | `CHAR(60)` | Trade Classification Numbering Scheme Description |
| `_Language` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TrdClassfctnNmbrSchm` | `I_TrdClassfctnNmbrSchm` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTEXT')/$value)*

```abap
@EndUserText.label: 'Numbering Scheme - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.sqlViewName: 'ITRDCLSNST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchm'
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #SINGLE
@ObjectModel.usageType.sizeCategory: 'M'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT  ]
define view I_TrdClassfctnNmbrSchmText
  as select from /sapsll/tdnost
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_TrdClassfctnNmbrSchm as _TrdClassfctnNmbrSchm on $projection.TrdClassfctnNmbrSchm = _TrdClassfctnNmbrSchm.TrdClassfctnNmbrSchm
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrSchm'
  key stcts as TrdClassfctnNmbrSchm,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH 
      text  as TrdClassfctnNmbrSchmName,

      _Language,
      _TrdClassfctnNmbrSchm
}
```
