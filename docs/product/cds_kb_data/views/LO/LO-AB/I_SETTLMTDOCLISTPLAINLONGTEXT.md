---
name: I_SETTLMTDOCLISTPLAINLONGTEXT
description: "Plain Long Text for Settlement Document List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Settlement Document List"
semantic_vi: "I_SETTLMTDOCLISTPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "settlmtdoclistplainlongtext"
  - "settlmt"
  - "list"
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
# I_SETTLMTDOCLISTPLAINLONGTEXT

**Plain Long Text for Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_rl preserving type )` | `CHAR(10)` | Document Number of Settlement Document List |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SettlmtDocList` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDocList` | `I_SettlmtDocList` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Settlmt Doc List'
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
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType',
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@Analytics.technicalName: 'IWLFSMTDOCLSTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SettlmtDocListPlainLongText
  as select from R_SetlMgmtDocPlainLongText

  association [1..1] to I_SettlmtDocList as _SettlmtDocList on $projection.SettlmtDocList = _SettlmtDocList.SettlmtDocList

{
      @ObjectModel.foreignKey.association: '_SettlmtDocList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocListStdVH', element: 'SettlmtDocList' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_rl preserving type ) as SettlmtDocList,
  key TextObjectType                                     as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                           as Language,
      @Semantics.text:true
      PlainLongText                                      as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SettlmtDocList,
      _Language
}
where
     SettlmtMgmtDocCat = 'E'
  or SettlmtMgmtDocCat = 'F'
  or SettlmtMgmtDocCat = 'K'
  or SettlmtMgmtDocCat = 'M'
  or SettlmtMgmtDocCat = 'I'
  or SettlmtMgmtDocCat = 'J'
  or SettlmtMgmtDocCat = '0'
```
