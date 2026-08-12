---
name: I_FACTORYCALENDARTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?"
semantic_vi: "Factory Calendar - Text — CDS view giao diện dựa trên tfact."
keywords:
  - "factory"
  - "calendar"
  - "text"
  - "language"
  - "name"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_FACTORYCALENDARTEXT

**This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` | ✓ | |  | `cast(txt.ident as cr_wfcid preserving type)` | `CHAR(2)` | Factory Calendar ID |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` | `LANG(1)` | Language Key |
| `FactoryCalendarName` |  | |  | `cast(txt.ltext as pph_fktext preserving type)` | `CHAR(60)` | Factory Calendar Text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPFACTORYCALTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'FactoryCalendar'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #ORGANIZATIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Factory Calendar - Text'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.type: #INHERITED
@AbapCatalog.buffering.type: #FULL
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]


define view I_FactoryCalendarText
  as select from tfact as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'FactoryCalendarName'
  key cast(txt.ident as cr_wfcid preserving type)   as FactoryCalendar,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)      as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ltext as pph_fktext preserving type) as FactoryCalendarName,

      // Associations
      _Language
};
```
