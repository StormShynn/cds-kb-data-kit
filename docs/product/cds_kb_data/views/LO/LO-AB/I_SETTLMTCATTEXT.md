---
name: I_SETTLMTCATTEXT
description: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value
semantic_en: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
semantic_vi: "Settlement Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "category"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - material
---
# I_SETTLMTCATTEXT

**This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtCat` | ✓ | |  | `cast(dd07t.domvalue_l as nafkt )` | `CHAR(1)` | Settlement Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtCatName` |  | |  | `cast( dd07t.ddtext as wlf_nafkt_name preserving type )` | `CHAR(60)` | Settlement Category Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtCatText
  as select from dd07t

  association        to parent I_SettlmtCat as _SettlmtCat on $projection.SettlmtCat = _SettlmtCat.SettlmtCat
  association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtCat'
  key cast(dd07t.domvalue_l as nafkt )                                  as SettlmtCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_nafkt_name preserving type )            as SettlmtCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                  as DomainValue,

      /* Associations */
      _SettlmtCat,
      _Language
}

where
      dd07t.domname  = 'NAFKT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
