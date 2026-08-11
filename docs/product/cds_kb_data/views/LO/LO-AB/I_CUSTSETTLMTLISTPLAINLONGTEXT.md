---
name: I_CUSTSETTLMTLISTPLAINLONGTEXT
description: "Plain Long Text for Customer Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Customer Settlement List"
semantic_vi: "I_CUSTSETTLMTLISTPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "custsettlmtlistplainlongtext"
  - "cust"
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
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTPLAINLONGTEXT

**Plain Long Text for Customer Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_rb preserving type )` | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_CustSettlmtList` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustSettlmtList` | `I_CustSettlmtList` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Customer Settlmt List'
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
@Analytics.technicalName: 'IWLFCUSTSTLSTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_CustSettlmtListPlainLongText
  as select from R_SetlMgmtDocPlainLongText

  association [1..1] to I_CustSettlmtList as _CustSettlmtList on $projection.CustSettlmtList = _CustSettlmtList.CustSettlmtList

{
      @ObjectModel.foreignKey.association: '_CustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_rb preserving type ) as CustSettlmtList,
  key TextObjectType                                     as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                           as Language,
      @Semantics.text:true
      PlainLongText                                      as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmtList,
      _Language
}
where
  SettlmtMgmtDocCat = 'C'
```
