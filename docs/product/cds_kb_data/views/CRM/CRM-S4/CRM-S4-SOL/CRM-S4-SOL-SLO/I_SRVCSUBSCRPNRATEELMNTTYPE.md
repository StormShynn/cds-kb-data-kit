---
name: I_SRVCSUBSCRPNRATEELMNTTYPE
description: "Subscription Rate Element Type"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
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
