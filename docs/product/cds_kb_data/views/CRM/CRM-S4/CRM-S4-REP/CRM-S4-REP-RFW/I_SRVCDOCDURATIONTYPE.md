---
name: I_SRVCDOCDURATIONTYPE
description: "Service Document Duration Type"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPE')/$value
semantic_en: "Service Document Duration Type"
semantic_vi: "Service Document Duration Type — CDS view giao diện dựa trên timecudu."
keywords:
  - "service"
  - "document"
  - "duration"
  - "type"
  - "srvc"
tags:
  - CRM
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - document
  - interface-view
---
# I_SRVCDOCDURATIONTYPE

**Service Document Duration Type**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocDurationType` | ✓ | |  | `name_dura` | `CHAR(12)` | Duration Name |
| `_SrvcDocDurationTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocDurationTypeText` | `I_SrvcDocDurationTypeText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service Document Duration Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@ObjectModel.representativeKey: 'SrvcDocDurationType'
@Consumption.ranked: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
define view entity I_SrvcDocDurationType as select from timecudu
association[1..*] to  I_SrvcDocDurationTypeText as _SrvcDocDurationTypeText on $projection.SrvcDocDurationType = _SrvcDocDurationTypeText.SrvcDocDurationType 
{
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @ObjectModel.text.association: '_SrvcDocDurationTypeText'
  key name_dura as SrvcDocDurationType,
  
  _SrvcDocDurationTypeText
}
```
