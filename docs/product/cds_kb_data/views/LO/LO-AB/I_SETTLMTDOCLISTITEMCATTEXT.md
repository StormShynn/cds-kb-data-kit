---
name: I_SETTLMTDOCLISTITEMCATTEXT
description: "This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document"
semantic_vi: "Settlmt Doc List Item Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "doc"
  - "list"
  - "item"
  - "category"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - account
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
# I_SETTLMTDOCLISTITEMCATTEXT

**This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' " Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocListItemCat` | ✓ | |  | `cast( dd07t.domvalue_l as doctype_li )` | `CHAR(1)` | Category of List Document Item |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtDocListItemCatName` |  | |  | `cast( dd07t.ddtext as wlf_doctype_li_txt preserving type )` | `CHAR(60)` | Text Document Category List Items |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtDocListItemCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Doc List Item Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDocListItemCat',
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
  technicalName: 'IWLFSMTDLSITCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDocListItemCatText
  as select from dd07t

  association        to parent I_SettlmtDocListItemCat as _SettlmtDocListItemCat on $projection.SettlmtDocListItemCat = _SettlmtDocListItemCat.SettlmtDocListItemCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDocListItemCat'
      @ObjectModel.text.element: ['SettlmtDocListItemCatName']
  key cast( dd07t.domvalue_l as doctype_li )                                   as SettlmtDocListItemCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_doctype_li_txt preserving type )               as SettlmtDocListItemCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                         as DomainValue,

      /* Associations */
      _SettlmtDocListItemCat,
      _Language
}

where
      dd07t.domname  = 'DOCTYPE_LI'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
