---
name: I_EXPNSETTLMTITEMPLAINLONGTEXT
description: "Plain Long Text for Expense Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Expense Settlement Item"
semantic_vi: "I_EXPNSETTLMTITEMPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocItmPlainLongText."
keywords:
  - "expnsettlmtitemplainlongtext"
  - "expn"
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
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_EXPNSETTLMTITEMPLAINLONGTEXT

**Plain Long Text for Expense Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_expns preserving type )` | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` | ✓ | |  | `cast( SettlmtMgmtDocItem as wposnr_lf preserving type )` | `NUMC(6)` | Document Item |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_ExpnSettlmt` | | ✓ | | | | |
| `_ExpnSettlmtItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExpnSettlmt` | `I_ExpnSettlmt` | [1..1] |
| `_ExpnSettlmtItem` | `I_ExpnSettlmtItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Expense Settlmt Item'
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
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType'
}
@Analytics.technicalName: 'IWLFEXPNSMTITPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_ExpnSettlmtItemPlainLongText 
  as select from R_SetlMgmtDocItmPlainLongText
      
  association [1..1] to I_ExpnSettlmt              as _ExpnSettlmt     on  $projection.ExpnSettlmt      = _ExpnSettlmt.ExpnSettlmt
  association [1..1] to I_ExpnSettlmtItem          as _ExpnSettlmtItem on  $projection.ExpnSettlmt      = _ExpnSettlmtItem.ExpnSettlmt
                                                                       and $projection.ExpnSettlmtItem  = _ExpnSettlmtItem.ExpnSettlmtItem

{
      @ObjectModel.foreignKey.association: '_ExpnSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_expns preserving type )           as ExpnSettlmt,
      @ObjectModel.foreignKey.association: '_ExpnSettlmtItem'   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtItemStdVH', element: 'ExpnSettlmtItem' } }]
      }
  key cast( SettlmtMgmtDocItem as wposnr_lf preserving type )          as ExpnSettlmtItem,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                                         as Language,
      @Semantics.text:true
      PlainLongText                                                    as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _ExpnSettlmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _ExpnSettlmtItem,
      _Language
}
 where SettlmtMgmtDocCat = 'H'
```
