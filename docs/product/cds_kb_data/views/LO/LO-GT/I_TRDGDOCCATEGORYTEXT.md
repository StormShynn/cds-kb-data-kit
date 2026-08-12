---
name: I_TRDGDOCCATEGORYTEXT
description: "Trading Document Category - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORYTEXT')/$value
semantic_en: "Trading Document Category - Text"
semantic_vi: "Trading Document Category - Text — CDS view cơ bản dựa trên R_TrdgDocCategoryText."
keywords:
  - "trading"
  - "document"
  - "category"
  - "text"
  - "language"
  - "trdg"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCCATEGORYTEXT

**Trading Document Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocCategory` | ✓ | |  |  | `CHAR(1)` | Trading Contract Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TrdgDocCategoryName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_TrdgDocCategory` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORYTEXT')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'TrdgDocCategory',
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
@EndUserText.label: 'Trading Document Category - Text'


define view entity I_TrdgDocCategoryText
  as select from R_TrdgDocCategoryText

  association to parent I_TrdgDocCategory as _TrdgDocCategory on $projection.TrdgDocCategory = _TrdgDocCategory.TrdgDocCategory

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocCategory'
      @ObjectModel.text.element: ['TrdgDocCategoryName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false

  key TrdgDocCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      DomainValue,

      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Search.defaultSearchElement: true
      @Semantics.text: true
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocCategoryName,
      /* Associations */
      _Language,
      _TrdgDocCategory
}
```
