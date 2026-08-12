---
name: I_SETTLMTDATAXTRCTNCATTXT
description: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value
semantic_en: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
semantic_vi: "Settlement Data Extraction Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "data"
  - "extraction"
  - "cat"
  - "text"
  - "settlmt"
  - "xtrctn"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDATAXTRCTNCATTXT

**This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: " " Inactive X Active**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDataXtrctnCat` | ✓ | |  | `cast( dd07t.domvalue_l as bw_4hana )` | `CHAR(1)` | Settlement Document Type is Relevant for BW/4HANA Extraction |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtDataXtrctnCatName` |  | |  | `cast( dd07t.ddtext as bw_4hana_text preserving type )` | `CHAR(60)` | Text of Settlement Data Extraction |
| `_Language` | | ✓ | | | | |
| `_SettlmtDataXtrctnCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value)*

```abap
@EndUserText.label: 'Settlement Data Extraction Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDataXtrctnCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
  supportedCapabilities:   [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
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
  technicalName: 'ISETDATEXTRCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDataXtrctnCatTxt
  as select from dd07t

  association        to parent I_SettlmtDataXtrctnCat as _SettlmtDataXtrctnCat on $projection.SettlmtDataXtrctnCat = _SettlmtDataXtrctnCat.SettlmtDataXtrctnCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDataXtrctnCat'
      @ObjectModel.text.element: ['SettlmtDataXtrctnCatName']
  key cast( dd07t.domvalue_l as bw_4hana )                                  as SettlmtDataXtrctnCat,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as bw_4hana_text preserving type )                 as SettlmtDataXtrctnCatName,

      /* Associations */
      _SettlmtDataXtrctnCat,
      _Language
}
where
      dd07t.domname  = 'BW_4HANA_FLAG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
