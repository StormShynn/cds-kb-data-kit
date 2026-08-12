---
name: I_TRDGDOCAPPLICATIONSTATUSTEXT
description: "Application Status of Trading Doc - Text"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
