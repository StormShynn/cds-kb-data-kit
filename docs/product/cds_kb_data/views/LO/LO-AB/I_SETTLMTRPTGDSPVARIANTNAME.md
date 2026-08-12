---
name: I_SETTLMTRPTGDSPVARIANTNAME
description: "Reporting Display Variant - Text"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value
semantic_en: "Reporting Display Variant - Text"
semantic_vi: "Reporting Display Variant - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "reporting"
  - "display"
  - "variant"
  - "text"
  - "language"
  - "settlmt"
  - "rptg"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTRPTGDSPVARIANTNAME

**Reporting Display Variant - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `SettlmtRptgDisplayVariant` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_reporting_display_variant )` | `CHAR(1)` | Invert Sign for Amount/Quantity Fields in Reporting |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtRptgDisplayVariantName` |  | |  | `cast( dd07t.ddtext as wlf_reporting_disp_variant_txt preserving type )` | `CHAR(60)` | Settlement Reporting Display Variant |
| `_Language` | | ✓ | | | | |
| `_SettlmtRptgDisplayVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value)*

```abap
@EndUserText.label: 'Reporting Display Variant - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtRptgDisplayVariant',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #EXTRACTION_DATA_SOURCE,
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
  dataExtraction.enabled: true, 
  technicalName: 'ISETRPTGDSPVARNM'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtRptgDspVariantName
  as select from dd07t

  association        to parent I_SettlmtRptgDisplayVariant as _SettlmtRptgDisplayVariant on $projection.SettlmtRptgDisplayVariant = _SettlmtRptgDisplayVariant.SettlmtRptgDisplayVariant
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                          as Language,
      @ObjectModel.foreignKey.association: '_SettlmtRptgDisplayVariant'
      @ObjectModel.text.element: ['SettlmtRptgDisplayVariantName']
  key cast( dd07t.domvalue_l as wlf_reporting_display_variant )                                  as SettlmtRptgDisplayVariant,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                           as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_reporting_disp_variant_txt  preserving type )                    as SettlmtRptgDisplayVariantName,

      /* Associations */
      _SettlmtRptgDisplayVariant,
      _Language
}

where
      dd07t.domname  = 'WLF_REPORTING_DISPLAY_VARIANT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
