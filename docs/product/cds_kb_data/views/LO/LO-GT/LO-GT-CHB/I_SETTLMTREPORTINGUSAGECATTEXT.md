---
name: I_SETTLMTREPORTINGUSAGECATTEXT
description: "Reporting Usage of a Settl Doc - Text"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECATTEXT')/$value
semantic_en: "Reporting Usage of a Settl Doc - Text"
semantic_vi: "Reporting Usage of a Settl Doc - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "reporting"
  - "usage"
  - "settl"
  - "doc"
  - "text"
  - "language"
  - "settlmt"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_SETTLMTREPORTINGUSAGECATTEXT

**Reporting Usage of a Settl Doc - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `SettlmtReportingUsageCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_lfart_reporting_usage )` | `CHAR(1)` | Reporting Usage of Settlement Document Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtReportingUsageCatName` |  | |  | `cast( dd07t.ddtext as wb2_lfart_reporting_usage_text preserving type )` | `CHAR(60)` | Text of Reporting Usage |
| `_Language` | | ✓ | | | | |
| `_SettlmtReportingUsageCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECATTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Reporting Usage of a Settl Doc - Text'
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtReportingUsageCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  technicalName: 'ISMREPUSGCATT',
  dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtReportingUsageCatText
  as select from dd07t

  association        to parent I_SettlmtReportingUsageCat as _SettlmtReportingUsageCat on $projection.SettlmtReportingUsageCat = _SettlmtReportingUsageCat.SettlmtReportingUsageCat

  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,

      @ObjectModel.foreignKey.association: '_SettlmtReportingUsageCat'
      @ObjectModel.text.element: ['SettlmtReportingUsageCatName']
  key cast( dd07t.domvalue_l as wb2_lfart_reporting_usage )                  as SettlmtReportingUsageCat,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_lfart_reporting_usage_text preserving type ) as SettlmtReportingUsageCatName,

      _SettlmtReportingUsageCat,
      _Language
}
where
      dd07t.domname  = 'WB2_LFART_REPORTING_USAGE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
