---
name: I_TRDGDOCCATEGORYTEXT
description: "Trading Document Category - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
