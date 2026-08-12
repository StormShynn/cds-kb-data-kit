---
name: I_INTRASTATDECLNGDSFLWCATTEXT
description: "Intrastat Decl Goods Flw Cat - Text"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCATTEXT')/$value
semantic_en: "Intrastat Decl Goods Flw Cat - Text"
semantic_vi: "Intrastat Decl Goods Flw Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "intrastat"
  - "decl"
  - "goods"
  - "flw"
  - "cat"
  - "text"
  - "decln"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_INTRASTATDECLNGDSFLWCATTEXT

**Intrastat Decl Goods Flw Cat - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IntrastatDeclnGdsFlwCat` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_intrastat_flow_doc )` | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IntrastatDeclnGdsFlwCatName` |  | |  | `cast( dd07t.ddtext as wlf_intrastat_flow_doc_name preserving type )` | `CHAR(60)` | Type Description of Goods Flow for Intrastat Declarations |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_IntrastatDeclnGdsFlwCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCATTEXT')/$value)*

```abap
@EndUserText.label: 'Intrastat Decl Goods Flw Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'IntrastatDeclnGdsFlwCat',
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
  technicalName: 'IWLFINTSTDGFCT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_IntrastatDeclnGdsFlwCatText
  as select from dd07t

  association        to parent I_IntrastatDeclnGdsFlwCat as _IntrastatDeclnGdsFlwCat on $projection.IntrastatDeclnGdsFlwCat = _IntrastatDeclnGdsFlwCat.IntrastatDeclnGdsFlwCat
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_IntrastatDeclnGdsFlwCat'
      @ObjectModel.text.element: ['IntrastatDeclnGdsFlwCatName']
  key cast(dd07t.domvalue_l as wlf_intrastat_flow_doc )                                  as IntrastatDeclnGdsFlwCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_intrastat_flow_doc_name preserving type )                as IntrastatDeclnGdsFlwCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _IntrastatDeclnGdsFlwCat,
      _Language
}

where
      dd07t.domname  = 'WLF_INTRASTAT_FLOW_DOC'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
