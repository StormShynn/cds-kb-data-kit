---
name: I_TRDGDOCRELEASESTATUSTEXT
description: "Release Status of Trading Document - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value
semantic_en: "Release Status of Trading Document - Text"
semantic_vi: "Release Status of Trading Document - Text — CDS view cơ bản dựa trên R_TrdgDocReleaseStatusText."
keywords:
  - "release"
  - "status"
  - "trading"
  - "document"
  - "text"
  - "language"
  - "trdg"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCRELEASESTATUSTEXT

**Release Status of Trading Document - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocReleaseStatus` | ✓ | |  |  | `CHAR(1)` | Release Status for Follow-On Document Generation |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TrdgDocReleaseStatusName` |  | |  |  | `CHAR(60)` | Desc. of Release Status of TC for Follow-On Doc. Generation |
| `_Language` | | ✓ | | | | |
| `_TrdgDocReleaseStatus` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'TrdgDocReleaseStatus',
   dataCategory: #TEXT,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}

@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Release Status of Trading Document - Text'


define view entity I_TrdgDocReleaseStatusText
  as select from R_TrdgDocReleaseStatusText

  association to parent I_TrdgDocReleaseStatus as _TrdgDocReleaseStatus on $projection.TrdgDocReleaseStatus = _TrdgDocReleaseStatus.TrdgDocReleaseStatus

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocReleaseStatus'
      @ObjectModel.text.element: ['TrdgDocReleaseStatusName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TrdgDocReleaseStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocReleaseStatusName,
      /* Associations */
      _Language,
      _TrdgDocReleaseStatus
}
```
