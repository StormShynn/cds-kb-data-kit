---
name: I_SETTLMTMGMTDOCCATTEXT
description: "This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: \" \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: \" \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List"
semantic_vi: "Settlement Management Doc Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "management"
  - "doc"
  - "cat"
  - "text"
  - "settlmt"
  - "mgmt"
  - "language"
  - "name"
  - "domain"
  - "value"
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
# I_SETTLMTMGMTDOCCATTEXT

**This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: " " Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocCat` | ✓ | |  | `cast(dd07t.domvalue_l as doctype )` | `CHAR(1)` | Settlement Management Document Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_doctype_txt preserving type )` | `CHAR(60)` | Document Category Text |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Management Doc Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocCat',
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
  technicalName: 'IWLFSMTMGDOCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocCatText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocCat as _SettlmtMgmtDocCat on $projection.SettlmtMgmtDocCat = _SettlmtMgmtDocCat.SettlmtMgmtDocCat
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocCat'
      @ObjectModel.text.element: ['SettlmtMgmtDocCatName']
  key cast(dd07t.domvalue_l as doctype )                                  as SettlmtMgmtDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_doctype_txt preserving type )             as SettlmtMgmtDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,

      /* Associations */
      _SettlmtMgmtDocCat,
      _Language
}

where
      dd07t.domname  = 'DOCTYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
