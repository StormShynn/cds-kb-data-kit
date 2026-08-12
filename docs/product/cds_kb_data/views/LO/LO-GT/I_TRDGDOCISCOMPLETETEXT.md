---
name: I_TRDGDOCISCOMPLETETEXT
description: "Document Complete - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETETEXT')/$value
semantic_en: "Document Complete - Text"
semantic_vi: "Document Complete - Text — CDS view cơ bản dựa trên R_TrdgDocIsCompleteText."
keywords:
  - "document"
  - "complete"
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
# I_TRDGDOCISCOMPLETETEXT

**Document Complete - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocIsComplete` | ✓ | |  |  | `CHAR(1)` | Document Is Complete |
| `TrdgDocCompleteName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_TrdgDocIsComplete` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETETEXT')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'TrdgDocIsComplete',
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

@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Document Complete - Text'


define view entity I_TrdgDocIsCompleteText
  as select from R_TrdgDocIsCompleteText

  association to parent I_TrdgDocIsComplete as _TrdgDocIsComplete on $projection.TrdgDocIsComplete = _TrdgDocIsComplete.TrdgDocIsComplete

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocIsComplete'
      @ObjectModel.text.element: ['TrdgDocCompleteName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TrdgDocIsComplete,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocCompleteName,
      /* Associations */
      _Language,
      _TrdgDocIsComplete
}
```
