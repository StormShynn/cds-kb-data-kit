---
name: I_SETTLMTACTIVITYREASONCODE
description: "This CDS view is used to select the settlement activity reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
