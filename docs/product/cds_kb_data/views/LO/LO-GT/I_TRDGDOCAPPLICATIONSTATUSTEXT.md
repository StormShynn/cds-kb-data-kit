---
name: I_TRDGDOCAPPLICATIONSTATUSTEXT
description: "Application Status of Trading Doc - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUSTEXT')/$value
semantic_en: "Application Status of Trading Doc - Text"
semantic_vi: "Application Status of Trading Doc - Text — CDS view cơ bản dựa trên R_TrdgDocApplicationStatusText."
keywords:
  - "application"
  - "status"
  - "trading"
  - "doc"
  - "text"
  - "language"
  - "trdg"
  - "name"
tags:
  - LO
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCAPPLICATIONSTATUSTEXT

**Application Status of Trading Doc - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocApplicationStatus` | ✓ | |  |  | `CHAR(1)` | Application Status of Trading Contract |
| `TrdgDocApplicationStatusName` |  | |  |  | `CHAR(40)` | Trading Contract: Name of Application Status |
| `_Language` | | ✓ | | | | |
| `_TrdgDocApplicationStatus` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Application Status of Trading Doc - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocApplicationStatus',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
}
@Analytics.technicalName: 'IAPPLSTATUST'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TrdgDocApplicationStatusText
  as select from R_TrdgDocApplicationStatusText

  association to parent I_TrdgDocApplicationStatus as _TrdgDocApplicationStatus on $projection.TrdgDocApplicationStatus = _TrdgDocApplicationStatus.TrdgDocApplicationStatus

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocApplicationStatus'
      @ObjectModel.text.element: ['TrdgDocApplicationStatusName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TrdgDocApplicationStatus,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocApplicationStatusName,
      /* Associations */
      _Language,
      _TrdgDocApplicationStatus
}
```
