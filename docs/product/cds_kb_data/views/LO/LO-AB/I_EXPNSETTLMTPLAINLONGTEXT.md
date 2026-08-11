---
name: I_EXPNSETTLMTPLAINLONGTEXT
description: "Plain Long Text for Expense Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Expense Settlement"
semantic_vi: "I_EXPNSETTLMTPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "expnsettlmtplainlongtext"
  - "expn"
  - "settlmt"
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
# I_EXPNSETTLMTPLAINLONGTEXT

**Plain Long Text for Expense Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_expns preserving type )` | `CHAR(10)` | Document Number of Expense Settlement |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_ExpnSettlmt` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExpnSettlmt` | `I_ExpnSettlmt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Expense Settlement'
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
@Analytics.technicalName: 'IWLFEXPNSMTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_ExpnSettlmtPlainLongText 
  as select from R_SetlMgmtDocPlainLongText
      
  association [1..1] to I_ExpnSettlmt as _ExpnSettlmt              on  $projection.ExpnSettlmt         = _ExpnSettlmt.ExpnSettlmt

{
      @ObjectModel.foreignKey.association: '_ExpnSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_expns preserving type )               as ExpnSettlmt,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                                         as Language,
      @Semantics.text:true
      PlainLongText                                                    as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ExpnSettlmt,
      _Language
}
 where SettlmtMgmtDocCat = 'H'
```
