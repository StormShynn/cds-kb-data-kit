---
name: I_SUPPLIERSETTLMTDOCCATTEXT
description: "This CDS view exposes fixed values of the field Settlement Document Type - Supplier."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Type - Supplier."
semantic_vi: "Supplier Settlement Document Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "supplier"
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
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPPLIERSETTLMTDOCCATTEXT

**This CDS view exposes fixed values of the field Settlement Document Type - Supplier.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierSettlmtDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_settlement_doctype_v )` | `CHAR(1)` | Settlement Document Type - Supplier |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SupplierSettlmtDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_doctype_v_desc preserving type )` | `CHAR(60)` | Settlement Document Type - Supplier Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SupplierSettlmtDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Document Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SupplierSettlmtDocCat',
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
  technicalName: 'IWLFSSMTDOCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SupplierSettlmtDocCatText
  as select from dd07t

  association        to parent I_SupplierSettlmtDocCat as _SupplierSettlmtDocCat on $projection.SupplierSettlmtDocCat = _SupplierSettlmtDocCat.SupplierSettlmtDocCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SupplierSettlmtDocCat'
      @ObjectModel.text.element: ['SupplierSettlmtDocCatName']
  key cast( dd07t.domvalue_l as wlf_settlement_doctype_v )                                 as SupplierSettlmtDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_doctype_v_desc preserving type )                as SupplierSettlmtDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _SupplierSettlmtDocCat,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_DOCTYPE_V'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
