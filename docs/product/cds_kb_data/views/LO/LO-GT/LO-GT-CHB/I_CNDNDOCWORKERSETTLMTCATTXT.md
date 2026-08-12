---
name: I_CNDNDOCWORKERSETTLMTCATTXT
description: "Cndn Doc Wrkr Settlement Category - Text"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCATTXT')/$value
semantic_en: "Cndn Doc Wrkr Settlement Category - Text"
semantic_vi: "Cndn Doc Wrkr Settlement Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "doc"
  - "wrkr"
  - "settlement"
  - "category"
  - "text"
  - "worker"
  - "settlmt"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNDOCWORKERSETTLMTCATTXT

**Cndn Doc Wrkr Settlement Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnDocWorkerSettlmtCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_settlement_type_person )` | `CHAR(1)` | Settlement Type Worker |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnDocWorkerSettlmtCatName` |  | |  | `cast( dd07t.ddtext as wb2_settlement_type_person_txt preserving type )` | `CHAR(60)` | Text of Settlement Type Worker |
| `_Language` | | ✓ | | | | |
| `_CndnDocWorkerSettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCATTXT')/$value)*

```abap
@EndUserText.label: 'Cndn Doc Wrkr Settlement Category - Text'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'CndnDocWorkerSettlmtCat',
    modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                              #CDS_MODELING_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE,
                              #LANGUAGE_DEPENDENT_TEXT,
                              #SEARCHABLE_ENTITY,
                              #SQL_DATA_SOURCE ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata: {
    ignorePropagatedAnnotations: true
    }
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */    
define view entity I_CndnDocWorkerSettlmtCatTxt
  as select from dd07t

  association        to parent I_CndnDocWorkerSettlmtCat as _CndnDocWorkerSettlmtCat on $projection.CndnDocWorkerSettlmtCat = _CndnDocWorkerSettlmtCat.CndnDocWorkerSettlmtCat

  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnDocWorkerSettlmtCat'
      @ObjectModel.text.element: ['CndnDocWorkerSettlmtCatName']
  key cast( dd07t.domvalue_l as wb2_settlement_type_person )                 as CndnDocWorkerSettlmtCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_settlement_type_person_txt preserving type ) as CndnDocWorkerSettlmtCatName,

      /* Associations */
      _CndnDocWorkerSettlmtCat,
      _Language
}
where
      dd07t.domname  = 'WB2_SETTLEMENT_TYPE_PERSON'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
