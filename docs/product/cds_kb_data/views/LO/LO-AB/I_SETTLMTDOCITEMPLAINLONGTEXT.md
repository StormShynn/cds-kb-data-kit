---
name: I_SETTLMTDOCITEMPLAINLONGTEXT
description: "This CDS view provides the descriptive long texts for settlement document items."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMPLAINLONGTEXT')/$value
semantic_en: "This CDS view provides the descriptive long texts for settlement document items."
semantic_vi: "I_SETTLMTDOCITEMPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocItmPlainLongText."
keywords:
  - "settlmtdocitemplainlongtext"
  - "settlmt"
  - "item"
  - "text"
  - "object"
  - "type"
  - "language"
  - "plain"
  - "long"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCITEMPLAINLONGTEXT

**This CDS view provides the descriptive long texts for settlement document items.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_zr preserving type )` | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` | ✓ | |  | `SettlmtMgmtDocItem` | `NUMC(6)` | Document Item |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [1..1] |
| `_SettlmtDocItem` | `I_SettlmtDocItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Settlement Doc Item'
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics: {
    internalName: #LOCAL
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #L
   }, 
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType'
}
@Analytics.technicalName: 'IWLFSMTDOCITPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SettlmtDocItemPlainLongText
  as select from R_SetlMgmtDocItmPlainLongText

  association [1..1] to I_SettlmtDoc     as _SettlmtDoc     on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [1..1] to I_SettlmtDocItem as _SettlmtDocItem on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                            and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem

{
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_zr preserving type ) as SettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocItemStdVH', element: 'SettlmtDocItem' } }]
      }
  key SettlmtMgmtDocItem                                 as SettlmtDocItem,
  key TextObjectType                                     as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                           as Language,
      @Semantics.text:true
      PlainLongText                                      as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SettlmtDoc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SettlmtDocItem,
      _Language
}
where
      SettlmtMgmtDocCat =  'B'
  and SettlmtPartnerCat <> '4'
  and SettlmtBusProcCat <> '60'
  and SettlmtBusProcCat <> '61'
  and SettlmtBusProcCat <> '30'
  and SettlmtBusProcCat <> '31'
```
