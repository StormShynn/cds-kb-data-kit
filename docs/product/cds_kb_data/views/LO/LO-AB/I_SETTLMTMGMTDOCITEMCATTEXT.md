---
name: I_SETTLMTMGMTDOCITEMCATTEXT
description: "This CDS view exposes fixed values of the field Item Category. The following fixed values have been maintained: \" Standard Item 1 Returns Item 2 Text Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Item Category. The following fixed values have been maintained: \" Standard Item 1 Returns Item 2 Text Item"
semantic_vi: "Doc Itm Category for Settlmt Mgmt - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "doc"
  - "itm"
  - "category"
  - "for"
  - "settlmt"
  - "mgmt"
  - "text"
  - "item"
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
# I_SETTLMTMGMTDOCITEMCATTEXT

**This CDS view exposes fixed values of the field Item Category. The following fixed values have been maintained: " Standard Item 1 Returns Item 2 Text Item**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCat` | ✓ | |  | `cast( dd07t.domvalue_l as wshkzg )` | `CHAR(1)` | Item Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemCatName` |  | |  | `cast( dd07t.ddtext as wshkzg_txt preserving type )` | `CHAR(60)` | Item Category Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocItemCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCATTEXT')/$value)*

```abap
@EndUserText.label: 'Doc Itm Category for Settlmt Mgmt - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocItemCat',
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
  technicalName: 'IWLFSMDITCATTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocItemCatText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocItemCat as _SettlmtMgmtDocItemCat on $projection.SettlmtMgmtDocItemCat = _SettlmtMgmtDocItemCat.SettlmtMgmtDocItemCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemCat'
      @ObjectModel.text.element: ['SettlmtMgmtDocItemCatName']
  key cast( dd07t.domvalue_l as wshkzg )                                  as SettlmtMgmtDocItemCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wshkzg_txt preserving type )                  as SettlmtMgmtDocItemCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,

      /* Associations */
      _SettlmtMgmtDocItemCat,
      _Language
}

where
      dd07t.domname  = 'WSHKZG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
