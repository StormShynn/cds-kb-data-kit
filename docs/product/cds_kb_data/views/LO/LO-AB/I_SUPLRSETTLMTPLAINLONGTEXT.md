---
name: I_SUPLRSETTLMTPLAINLONGTEXT
description: "Plain Long Text for Supplier Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Supplier Settlement"
semantic_vi: "I_SUPLRSETTLMTPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "suplrsettlmtplainlongtext"
  - "suplr"
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
  - supplier
---
# I_SUPLRSETTLMTPLAINLONGTEXT

**Plain Long Text for Supplier Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_zr preserving type )` | `CHAR(10)` | Settlement Document Number |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SuplrSettlmt` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrSettlmt` | `I_SuplrSettlmt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Supplier Settlement'
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
@Analytics.technicalName: 'IWLFSPLRSTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SuplrSettlmtPlainLongText 
  as select from R_SetlMgmtDocPlainLongText
      
    association[1..1] to I_SuplrSettlmt  as _SuplrSettlmt  on  $projection.SuplrSettlmt  = _SuplrSettlmt.SuplrSettlmt

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmt'                                                                                                   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtStdVH', element: 'SuplrSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_zr preserving type )               as SuplrSettlmt,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                as Language,
      @Semantics.text:true
      PlainLongText           as PlainLongText,
    
      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmt,
      _Language
}

 where SettlmtMgmtDocCat = 'L'
```
