---
name: I_CUSTSETTLMTPLAINLONGTEXT
description: "Plain Long Text for Customer Settlement Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Customer Settlement Document"
semantic_vi: "I_CUSTSETTLMTPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "custsettlmtplainlongtext"
  - "cust"
  - "settlmt"
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
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTPLAINLONGTEXT

**Plain Long Text for Customer Settlement Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_cu preserving type )` | `CHAR(10)` | Customer Settlement |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_CustSettlmt` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustSettlmt` | `I_CustSettlmt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Customer Settlement Doc'
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
@Analytics.technicalName: 'IWLFCUSTSMTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_CustSettlmtPlainLongText 
  as select from R_SetlMgmtDocPlainLongText
      
    association[1..1] to I_CustSettlmt  as _CustSettlmt  on  $projection.CustSettlmt  = _CustSettlmt.CustSettlmt

{
      @ObjectModel.foreignKey.association: '_CustSettlmt'                                                                                                   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_cu preserving type )    as CustSettlmt,  
  key TextObjectType                          as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                as Language,
      @Semantics.text:true
      PlainLongText                           as PlainLongText,
    
      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmt,
      _Language
}

where SettlmtMgmtDocCat = 'G'
```
