---
name: I_SUPLRSETTLMTITMPLAINLONGTEXT
description: "Plain Long Text for Supplier Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITMPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Supplier Settlement Item"
semantic_vi: "I_SUPLRSETTLMTITMPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocItmPlainLongText."
keywords:
  - "suplrsettlmtitmplainlongtext"
  - "suplr"
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
  - supplier
---
# I_SUPLRSETTLMTITMPLAINLONGTEXT

**Plain Long Text for Supplier Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITMPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_vs preserving type )` | `CHAR(10)` | Supplier Settlement |
| `SuplrSettlmtItem` | ✓ | |  | `SettlmtMgmtDocItem` | `NUMC(6)` | Document Item |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SuplrSettlmt` | | ✓ | | | | |
| `_SuplrSettlmtItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrSettlmt` | `I_SuplrSettlmt` | [1..1] |
| `_SuplrSettlmtItem` | `I_SuplrSettlmtItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITMPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITMPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Supplier Settlmt Itm'
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
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]   
}
@Analytics.technicalName: 'IWLFSPLRSTITMPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SuplrSettlmtItmPlainLongText 
  as select from R_SetlMgmtDocItmPlainLongText

      
    association[1..1] to I_SuplrSettlmt              as _SuplrSettlmt      on  $projection.SuplrSettlmt         = _SuplrSettlmt.SuplrSettlmt
    association[1..1] to I_SuplrSettlmtItem          as _SuplrSettlmtItem  on  $projection.SuplrSettlmt         = _SuplrSettlmtItem.SuplrSettlmt
                                                                           and $projection.SuplrSettlmtItem  = _SuplrSettlmtItem.SuplrSettlmtItem

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmt'                                                                                                   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtStdVH', element: 'SuplrSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_vs preserving type )               as SuplrSettlmt,
  
  
      @ObjectModel.foreignKey.association: '_SuplrSettlmtItem'   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtItemStdVH', element: 'SuplrSettlmtItem' } }]
      }
  key SettlmtMgmtDocItem      as SuplrSettlmtItem,  
  key TextObjectType          as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                as Language,
      @Semantics.text:true
      PlainLongText           as PlainLongText,

    
      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SuplrSettlmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SuplrSettlmtItem,
      _Language
}

where SettlmtMgmtDocCat = 'L'
```
