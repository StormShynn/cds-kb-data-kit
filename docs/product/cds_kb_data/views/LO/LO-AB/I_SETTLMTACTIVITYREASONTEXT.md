---
name: I_SETTLMTACTIVITYREASONTEXT
description: "This CDS view is used to select the settlement activity reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONTEXT')/$value
semantic_en: "This CDS view is used to select the settlement activity reason code."
semantic_vi: "Settlement Activity Reason - Text — CDS view cơ bản dựa trên tmlfgt."
keywords:
  - "settlement"
  - "activity"
  - "reason"
  - "text"
  - "settlmt"
  - "language"
  - "desc"
tags:
  - LO
  - bo:salesorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTACTIVITYREASONTEXT

**This CDS view is used to select the settlement activity reason code.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtActivityReason` | ✓ | |  | `cast( lfgru as wlf_activity_reason preserving type )` | `CHAR(3)` | Activity Reason |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtActivityReasonDesc` |  | |  | `bezei` | `CHAR(100)` | Activity Reason Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtActivityReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Activity Reason - Text'
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'SettlmtActivityReason',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  usageType: {
    dataClass:      #CUSTOMIZING,
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
  technicalName: 'IWLFSMTACTRST',
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity I_SettlmtActivityReasonText
  as select from tmlfgt

  association        to parent I_SettlmtActivityReasonCode as _SettlmtActivityReason on $projection.SettlmtActivityReason = _SettlmtActivityReason.SettlmtActivityReason
  association [0..1] to I_Language                         as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SettlmtActivityReason'
      @ObjectModel.text.element: ['SettlmtActivityReasonDesc']
  key cast( lfgru as wlf_activity_reason preserving type ) as SettlmtActivityReason,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as SettlmtActivityReasonDesc,

      /* Associations */
      _SettlmtActivityReason,
      _Language
}
```
