---
name: I_SETTLMTDATEUSAGETEXT
description: "This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGETEXT')/$value
semantic_en: "This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update"
semantic_vi: "Settlmt Date Usage - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "date"
  - "usage"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_SETTLMTDATEUSAGETEXT

**This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateUsage` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_settl_date_usage )` | `CHAR(1)` | Settlement Date Usage |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtDateUsageName` |  | |  | `cast( ddtext as wb2_settl_date_usage_desc preserving type )` | `CHAR(60)` | Settlement Date Usage Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtDateUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGETEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Date Usage - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDateUsage',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY,
                          #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ISETTLMTDTUSGT'
}
@Metadata: {
  allowExtensions: false,
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDateUsageText
  as select from dd07t

  association        to parent I_SettlmtDateUsage as _SettlmtDateUsage on $projection.SettlmtDateUsage = _SettlmtDateUsage.SettlmtDateUsage
  association [0..1] to I_Language                as _Language         on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDateUsage'
      @ObjectModel.text.element: ['SettlmtDateUsageName']
  key cast( dd07t.domvalue_l as wb2_settl_date_usage )            as SettlmtDateUsage,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as wb2_settl_date_usage_desc preserving type ) as SettlmtDateUsageName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                            as DomainValue,

      /* Associations */
      _SettlmtDateUsage,
      _Language
}

where
      dd07t.domname  = 'WB2_SETTL_DATE_USAGE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
