---
name: I_SETTLMTDATECATTEXT
description: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value
semantic_en: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
semantic_vi: "Settlement Date Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "date"
  - "category"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDATECATTEXT

**This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_settlement_date_type )` | `CHAR(1)` | Rebates: Settlement Date Type |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `SettlmtDateCatName` |  | |  | `cast( ddtext as wb2_settlement_date_type_desc preserving type )` | `CHAR(60)` | Rebates: Settlement Date Type Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtDateCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Date Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDateCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
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
  technicalName: 'IWLFSMTDATECATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDateCatText
  as select from dd07t

  association        to parent I_SettlmtDateCat as _SettlmtDateCat on $projection.SettlmtDateCat = _SettlmtDateCat.SettlmtDateCat
  association [0..1] to I_Language              as _Language       on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDateCat'
      @ObjectModel.text.element: ['SettlmtDateCatName']
  key cast( dd07t.domvalue_l as wb2_settlement_date_type )            as SettlmtDateCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as wb2_settlement_date_type_desc preserving type ) as SettlmtDateCatName,

      @Consumption.hidden: true
      dd07t.domvalue_l                                                as DomainValue,

      /* Associations */
      _SettlmtDateCat,
      _Language
}

where
      dd07t.domname  = 'WB2_SETTLEMENT_DATE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
