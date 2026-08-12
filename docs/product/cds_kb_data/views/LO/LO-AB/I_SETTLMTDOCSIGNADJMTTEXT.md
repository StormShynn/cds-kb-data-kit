---
name: I_SETTLMTDOCSIGNADJMTTEXT
description: "This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type"
semantic_vi: "Settlmt Doc Sign Adjustment - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "doc"
  - "sign"
  - "adjustment"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCSIGNADJMTTEXT

**This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocSignAdjustment` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_adjust_sign_hdr )` | `CHAR(1)` | Adjust Plus/Minus Sign |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtDocSignAdjustmentName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtDocSignAdjustment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMTTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Doc Sign Adjustment - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDocSignAdjustment',
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
  internalName: #LOCAL,
  technicalName: 'IWLFSDCADJSIGNT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDocSignAdjmtText
  as select from dd07t

  association        to parent I_SettlmtDocSignAdjmt as _SettlmtDocSignAdjustment on $projection.SettlmtDocSignAdjustment = _SettlmtDocSignAdjustment.SettlmtDocSignAdjustment
  association [0..1] to I_Language                   as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDocSignAdjustment'
      @ObjectModel.text.element: ['SettlmtDocSignAdjustmentName']
  key cast(dd07t.domvalue_l as wlf_adjust_sign_hdr )                 as SettlmtDocSignAdjustment,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                                                    as SettlmtDocSignAdjustmentName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                as DomainValue,

      /* Associations */
      _SettlmtDocSignAdjustment,
      _Language
}

where
      dd07t.domname  = 'WLF_ADJUST_SIGN_HDR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
