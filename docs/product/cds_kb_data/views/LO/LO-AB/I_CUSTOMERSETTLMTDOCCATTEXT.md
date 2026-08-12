---
name: I_CUSTOMERSETTLMTDOCCATTEXT
description: "This CDS view exposes fixed values of the field Settlement Document Type – Customer."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Type – Customer."
semantic_vi: "Customer Settlement Document Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "customer"
  - "settlement"
  - "document"
  - "cat"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTOMERSETTLMTDOCCATTEXT

**This CDS view exposes fixed values of the field Settlement Document Type – Customer.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerSettlmtDocCat` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_settlement_doctype_c )` | `CHAR(1)` | Settlement Document Type - Customer |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CustomerSettlmtDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_doctype_c_desc preserving type )` | `CHAR(60)` | Settlement Document Type - Customer Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CustomerSettlmtDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Customer Settlement Document Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CustomerSettlmtDocCat',
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
  technicalName: 'IWLFCSMTDOCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustomerSettlmtDocCatText
  as select from dd07t

  association        to parent I_CustomerSettlmtDocCat as _CustomerSettlmtDocCat on $projection.CustomerSettlmtDocCat = _CustomerSettlmtDocCat.CustomerSettlmtDocCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CustomerSettlmtDocCat'
      @ObjectModel.text.element: ['CustomerSettlmtDocCatName']
  key cast(dd07t.domvalue_l as wlf_settlement_doctype_c )                                  as CustomerSettlmtDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_doctype_c_desc preserving type )                as CustomerSettlmtDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _CustomerSettlmtDocCat,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_DOCTYPE_C'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
