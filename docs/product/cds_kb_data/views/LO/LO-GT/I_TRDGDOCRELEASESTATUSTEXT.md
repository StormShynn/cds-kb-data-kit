---
name: I_TRDGDOCRELEASESTATUSTEXT
description: "Release Status of Trading Document - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
