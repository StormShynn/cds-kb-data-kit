---
name: I_LOGISTICSDATAENTRYCATTEXT
description: "This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value
semantic_en: "This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?"
semantic_vi: "Logistics Data Entry Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "logistics"
  - "data"
  - "entry"
  - "category"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - material
  - bo:salesorganization
---
# I_LOGISTICSDATAENTRYCATTEXT

**This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogisticsDataEntryCat` | ✓ | |  | `cast( dd07t.domvalue_l as wrtyp )` | `CHAR(1)` | Entry Category for Logistics Data |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LogisticsDataEntryCatName` |  | |  | `cast( dd07t.ddtext as wlf_wrtyp_name preserving type )` | `CHAR(60)` | Description of Entry Category for Logistics Data |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value)*

```abap
@EndUserText.label: 'Logistics Data Entry Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'LogisticsDataEntryCat',
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
  technicalName: 'IWLFLOGDENTRCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_LogisticsDataEntryCatText
  as select from dd07t

  association        to parent I_LogisticsDataEntryCat as _LogisticsDataEntryCat on $projection.LogisticsDataEntryCat = _LogisticsDataEntryCat.LogisticsDataEntryCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_LogisticsDataEntryCat'
  key cast( dd07t.domvalue_l as wrtyp )                                  as LogisticsDataEntryCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_wrtyp_name preserving type )             as LogisticsDataEntryCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,

      /* Associations */
      _LogisticsDataEntryCat,
      _Language
}

where
      dd07t.domname  = 'WRTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
