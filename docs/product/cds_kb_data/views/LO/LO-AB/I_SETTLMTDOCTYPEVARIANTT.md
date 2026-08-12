---
name: I_SETTLMTDOCTYPEVARIANTT
description: "This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANTT')/$value
semantic_en: "This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection"
semantic_vi: "Settlement Document Type Variant - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "document"
  - "type"
  - "variant"
  - "text"
  - "settlmt"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTDOCTYPEVARIANTT

**This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANTT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocTypeVariant` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_lfart_type )` | `CHAR(1)` | Settlement Document Type Variant |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtDocTypeVariantName` |  | |  | `cast( dd07t.ddtext as wlf_lfart_type_text preserving type )` | `CHAR(60)` | Text of Settlement Document Type Variant |
| `_Language` | | ✓ | | | | |
| `_SettlmtDocTypeVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANTT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANTT')/$value)*

```abap
@EndUserText.label: 'Settlement Document Type Variant - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDocTypeVariant',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
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
  dataExtraction.enabled: false,
  technicalName: 'ISETDOCVART'
}  
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtDocTypeVariantT
  as select from dd07t

  association        to parent I_SettlmtDocTypeVariant as _SettlmtDocTypeVariant on $projection.SettlmtDocTypeVariant = _SettlmtDocTypeVariant.SettlmtDocTypeVariant
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDocTypeVariant'
      @ObjectModel.text.element: ['SettlmtDocTypeVariantName']
  key cast( dd07t.domvalue_l as wlf_lfart_type )                                  as SettlmtDocTypeVariant,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                           as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                            as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_lfart_type_text preserving type )                 as SettlmtDocTypeVariantName,

      /* Associations */
      _SettlmtDocTypeVariant,
      _Language
}

where
      dd07t.domname  = 'WLF_LFART_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
