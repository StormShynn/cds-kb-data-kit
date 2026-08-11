---
name: I_SETTLMTACTIVITYREASONCODE
description: "This CDS view is used to select the settlement activity reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONCODE')/$value
semantic_en: "This CDS view is used to select the settlement activity reason code."
semantic_vi: "Settlement Activity Reason — CDS view cơ bản dựa trên tmlfg."
keywords:
  - "settlement"
  - "activity"
  - "reason"
  - "settlmt"
tags:
  - LO
  - bo:salesorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTACTIVITYREASONCODE

**This CDS view is used to select the settlement activity reason code.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtActivityReason` | ✓ | |  | `cast( lfgru as wlf_activity_reason preserving type )` | `CHAR(3)` | Activity Reason |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTACTIVITYREASONCODE')/$value)*

```abap
@EndUserText.label: 'Settlement Activity Reason'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog.entityBuffer.definitionAllowed: true
@ObjectModel: {
  representativeKey: 'SettlmtActivityReason',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #ANALYTICAL_DIMENSION,
    #SEARCHABLE_ENTITY
  ],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS
}
@VDM: {
 viewType: #BASIC,
 lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
  dataCategory: #DIMENSION,
  technicalName: 'IWLFSMTACTRS',
  dataExtraction.enabled: false,
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define root view entity I_SettlmtActivityReasonCode
  as select from tmlfg

  composition [0..*] of I_SettlmtActivityReasonText as _Text
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast( lfgru as wlf_activity_reason preserving type ) as SettlmtActivityReason,

      /* Associations */
      _Text
}
```
