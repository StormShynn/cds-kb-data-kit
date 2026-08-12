---
name: I_SETTLMTDATEUSAGE
description: "This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value
semantic_en: "This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update"
semantic_vi: "Settlement Date Usage — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "date"
  - "usage"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_SETTLMTDATEUSAGE

**This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateUsage` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_settl_date_usage )` | `CHAR(1)` | Settlement Date Usage |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value)*

```abap
@EndUserText.label: 'Settlement Date Usage'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrSettlementDateUsage',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDateUsage',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER,
                          #EXTRACTION_DATA_SOURCE],
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
@Consumption.ranked: true
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ISETTLMTDTUSG'
}
@Metadata: {
  allowExtensions: false,
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDateUsage
  as select from dd07l

  composition [0..*] of I_SettlmtDateUsageText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_settl_date_usage ) as SettlmtDateUsage,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                 as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTL_DATE_USAGE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000';
```
