---
name: I_SRVCSUBSCRPNRATEELMNTTYPE
description: "Subscription Rate Element Type"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPE')/$value
semantic_en: "Subscription Rate Element Type"
semantic_vi: "Subscription Rate Element Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscription"
  - "rate"
  - "element"
  - "type"
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - interface-view
---
# I_SRVCSUBSCRPNRATEELMNTTYPE

**Subscription Rate Element Type**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionRateElementType` | ✓ | |  | `cast(domvalue_l as crms4_rate_element_type)` | `CHAR(1)` | Rate Type |
| `_SubscrpnRateElementTypeTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnRateElementTypeTxt` | `I_SrvcSubscrpnRateElmntTypeTxt` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPE')/$value)*

```abap
@EndUserText.label: 'Subscription Rate Element Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
  sqlViewName: 'IBSOSUBRATETYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'SubscriptionRateElementType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'SrvcSubscrpnRateElmntType'

define view I_SrvcSubscrpnRateElmntType
  as select from dd07l
  association [1..*] to I_SrvcSubscrpnRateElmntTypeTxt as _SubscrpnRateElementTypeTxt on  $projection.SubscriptionRateElementType = _SubscrpnRateElementTypeTxt.SubscriptionRateElementType
{
  @ObjectModel.text.association: '_SubscrpnRateElementTypeTxt'
  key cast(domvalue_l as crms4_rate_element_type) as SubscriptionRateElementType,
  
  _SubscrpnRateElementTypeTxt
}
where
      domname  = 'CRMS4_RATE_ELEMENT_TYPE'
  and as4local = 'A';
```
