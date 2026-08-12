---
name: I_LOGISTICSDATAENTRYCAT
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCAT')/$value
semantic_en: "This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?"
semantic_vi: "Logistics Data Entry Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "logistics"
  - "data"
  - "entry"
  - "category"
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
# I_LOGISTICSDATAENTRYCAT

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogisticsDataEntryCat` | ✓ | |  | `cast( dd07l.domvalue_l as wrtyp )` | `CHAR(1)` | Entry Category for Logistics Data |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCAT')/$value)*

```abap
@EndUserText.label: 'Logistics Data Entry Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtLogisticsDataEntryCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'LogisticsDataEntryCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFLOGDENTRCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_LogisticsDataEntryCat
  as select from dd07l

  composition [0..*] of I_LogisticsDataEntryCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wrtyp )              as LogisticsDataEntryCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WRTYP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
