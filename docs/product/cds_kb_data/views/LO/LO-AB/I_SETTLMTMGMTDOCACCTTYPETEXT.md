---
name: I_SETTLMTMGMTDOCACCTTYPETEXT
description: "This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPETEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer"
semantic_vi: "Settlement Management Doc Acct Type - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "management"
  - "doc"
  - "acct"
  - "type"
  - "text"
  - "settlmt"
  - "mgmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTMGMTDOCACCTTYPETEXT

**This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocAcctType` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_koart )` | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocAcctTypeName` |  | |  | `cast( dd07t.ddtext as wlf_koart_txt preserving type )` | `CHAR(60)` | Description of Account Type for which Bank Data was Entered |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocAcctType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Management Doc Acct Type - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocAcctType',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTDOCACCTPT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocAcctTypeText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocAcctType as _SettlmtMgmtDocAcctType on $projection.SettlmtMgmtDocAcctType = _SettlmtMgmtDocAcctType.SettlmtMgmtDocAcctType
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocAcctType'
      @ObjectModel.text.element: ['SettlmtMgmtDocAcctTypeName']
  key cast( dd07t.domvalue_l  as wlf_koart )                                   as SettlmtMgmtDocAcctType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_koart_txt preserving type )                    as SettlmtMgmtDocAcctTypeName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                         as DomainValue,

      /* Associations */
      _SettlmtMgmtDocAcctType,
      _Language
}

where
      dd07t.domname  = 'WLF_KOART'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
