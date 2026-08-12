---
name: I_SETTLMTSUBSQNTDOCCATTEXT
description: "This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries"
semantic_vi: "Settlmt Subsequent Doc Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "subsequent"
  - "doc"
  - "category"
  - "text"
  - "subsqnt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTSUBSQNTDOCCATTEXT

**This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtSubsqntDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wftypn )` | `CHAR(2)` | Document Category of Subsequent Document |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtSubsqntDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_wftypn_txt preserving type )` | `CHAR(60)` | Description of Subsequent Document Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtSubsqntDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Subsequent Doc Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtSubsqntDocCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SEARCHABLE_ENTITY],
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
  technicalName: 'IWLFSMTSSUBDCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtSubsqntDocCatText
  as select from dd07t

  association        to parent I_SettlmtSubsqntDocCat as _SettlmtSubsqntDocCat on $projection.SettlmtSubsqntDocCat = _SettlmtSubsqntDocCat.SettlmtSubsqntDocCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtSubsqntDocCat'
      @ObjectModel.text.element: ['SettlmtSubsqntDocCatName']
  key cast( dd07t.domvalue_l as wftypn )                                 as SettlmtSubsqntDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_wftypn_txt preserving type )             as SettlmtSubsqntDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,

      /* Associations */
      _SettlmtSubsqntDocCat,
      _Language
}

where
      dd07t.domname  = 'WFTYPN'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
