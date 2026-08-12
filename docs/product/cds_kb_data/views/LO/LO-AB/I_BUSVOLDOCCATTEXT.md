---
name: I_BUSVOLDOCCATTEXT
description: "Business Volume Document Category - Text"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCATTEXT')/$value
semantic_en: "Business Volume Document Category - Text"
semantic_vi: "Business Volume Document Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "business"
  - "volume"
  - "document"
  - "category"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_BUSVOLDOCCATTEXT

**Business Volume Document Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_doc_type_busvol )` | `CHAR(2)` | Document Type of Business Volume Source Document |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusVolDocCatName` |  | |  | `cast( dd07t.ddtext as wb2_doc_type_busvol_name preserving type )` | `CHAR(60)` | Document Type Description of Business Volume Source Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_BusVolDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Business Volume Document Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'BusVolDocCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFDOCCATTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusVolDocCatText
  as select from dd07t

  association        to parent I_BusVolDocCat as _BusVolDocCat on $projection.BusVolDocCat = _BusVolDocCat.BusVolDocCat
  association [0..1] to I_Language            as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BusVolDocCat'
      @ObjectModel.text.element: ['BusVolDocCatName']
  key cast( dd07t.domvalue_l as wb2_doc_type_busvol )                                  as BusVolDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_doc_type_busvol_name preserving type )                 as BusVolDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,

      /* Associations */
      _BusVolDocCat,
      _Language
}

where
      dd07t.domname  = 'WB2_DOC_TYPE_BUSVOL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
