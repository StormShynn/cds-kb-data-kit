---
name: I_TRDGDOCTYPETEXT
description: "Trading Document Type - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPETEXT')/$value
semantic_en: "Trading Document Type - Text"
semantic_vi: "Trading Document Type - Text — CDS view cơ bản dựa trên R_TrdgDocTypeText."
keywords:
  - "trading"
  - "document"
  - "type"
  - "text"
  - "language"
  - "trdg"
  - "name"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCTYPETEXT

**Trading Document Type - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TradingDocumentType` | ✓ | |  |  | `CHAR(4)` | Reference Document Type |
| `TrdgDocTypeName` |  | |  |  | `CHAR(40)` | Trading Contract Type Description |
| `_Language` | | ✓ | | | | |
| `_TrdgDocType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Trading Document Type - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey: 'TradingDocumentType',
   dataCategory: #TEXT,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #SEARCHABLE_ENTITY,
                           #SQL_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TrdgDocTypeText
  as select from R_TrdgDocTypeText

  association to parent I_TrdgDocType as _TrdgDocType on $projection.TradingDocumentType = _TrdgDocType.TradingDocumentType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocType'
      @ObjectModel.text.element: ['TrdgDocTypeName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TradingDocumentType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocTypeName,
      
      /* Associations */
      _Language,
      _TrdgDocType
}
```
