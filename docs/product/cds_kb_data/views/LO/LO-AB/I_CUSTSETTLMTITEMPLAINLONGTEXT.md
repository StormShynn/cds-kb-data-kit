---
name: I_CUSTSETTLMTITEMPLAINLONGTEXT
description: "Plain Long Text for Customer Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Customer Settlement Item"
semantic_vi: "I_CUSTSETTLMTITEMPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocItmPlainLongText."
keywords:
  - "custsettlmtitemplainlongtext"
  - "cust"
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
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTITEMPLAINLONGTEXT

**Plain Long Text for Customer Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_cu preserving type )` | `CHAR(10)` | Customer Settlement |
| `CustSettlmtItem` | ✓ | |  | `cast( SettlmtMgmtDocItem as wposnr_lf preserving type )` | `NUMC(6)` | Document Item |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_CustSettlmt` | | ✓ | | | | |
| `_CustSettlmtItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustSettlmt` | `I_CustSettlmt` | [1..1] |
| `_CustSettlmtItem` | `I_CustSettlmtItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Customer Settlmt Item'
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
@Analytics.technicalName: 'IWLFCUSTSMTITPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_CustSettlmtItemPlainLongText 
  as select from R_SetlMgmtDocItmPlainLongText
      
  association [1..1] to I_CustSettlmt          as _CustSettlmt     on  $projection.CustSettlmt = _CustSettlmt.CustSettlmt
  association [1..1] to I_CustSettlmtItem      as _CustSettlmtItem on  $projection.CustSettlmt     = _CustSettlmtItem.CustSettlmt
                                                                       and $projection.CustSettlmtItem = _CustSettlmtItem.CustSettlmtItem

{
      @ObjectModel.foreignKey.association: '_CustSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_cu preserving type )               as CustSettlmt,
      @ObjectModel.foreignKey.association: '_CustSettlmtItem'   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtItemStdVH', element: 'CustSettlmtItem' } }]
      }
  key cast( SettlmtMgmtDocItem as wposnr_lf preserving type )          as CustSettlmtItem,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                                         as Language,
      @Semantics.text:true
      PlainLongText                                                    as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _CustSettlmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _CustSettlmtItem,
      _Language
}
 where SettlmtMgmtDocCat = 'G'
```
