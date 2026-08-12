---
name: I_SETTLMTDOCPLAINLONGTEXT
description: "This CDS view provides the descriptive long texts for settlement document."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value
semantic_en: "This CDS view provides the descriptive long texts for settlement document."
semantic_vi: "I_SETTLMTDOCPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "settlmtdocplainlongtext"
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
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCPLAINLONGTEXT

**This CDS view provides the descriptive long texts for settlement document.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_zr preserving type )` | `CHAR(10)` | Settlement Document Number |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SettlmtDoc` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value)*

```abap
@EndUserText: { 
   label: 'Plain Long Text for Settlement Document'
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
@Analytics.technicalName: 'IWLFSMTDOCPLTXT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SettlmtDocPlainLongText 
  as select from R_SetlMgmtDocPlainLongText
      
  association [1..1] to I_SettlmtDoc as _SettlmtDoc              on  $projection.SettlmtDoc         = _SettlmtDoc.SettlmtDoc

{
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_zr preserving type )               as SettlmtDoc            ,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                                         as Language,
      @Semantics.text:true
      PlainLongText                                                    as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SettlmtDoc,
      _Language
}
 where SettlmtMgmtDocCat = 'B' 
   and SettlmtPartnerCat <> '4'
   and SettlmtBusProcCat <> '60'
   and SettlmtBusProcCat <> '61'
   and SettlmtBusProcCat <> '30'
   and SettlmtBusProcCat <> '31'
```
