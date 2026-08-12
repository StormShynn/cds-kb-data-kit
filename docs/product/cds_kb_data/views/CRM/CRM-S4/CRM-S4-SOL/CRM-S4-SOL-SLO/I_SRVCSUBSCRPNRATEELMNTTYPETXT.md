---
name: I_SRVCSUBSCRPNRATEELMNTTYPETXT
description: "Subscription Rate Element Type - Text"
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPETXT')/$value
semantic_en: "Subscription Rate Element Type - Text"
semantic_vi: "Subscription Rate Element Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscription"
  - "rate"
  - "element"
  - "type"
  - "text"
  - "language"
  - "subscrpn"
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - interface-view
---
# I_SRVCSUBSCRPNRATEELMNTTYPETXT

**Subscription Rate Element Type - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionRateElementType` | ✓ | |  | `cast(domvalue_l as crms4_rate_element_type)` | `CHAR(1)` | Rate Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SubscrpnRateElementTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SubscrpnRateElementType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnRateElementType` | `I_SrvcSubscrpnRateElmntType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPETXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCSUBSCRPNRATEELMNTTYPETXT')/$value)*

```abap
@EndUserText.label: 'Subscription Rate Element Type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
sqlViewName: 'IBSOSUBRATETYPTX',
compiler.compareFilter: true,
preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.representativeKey: 'SubscriptionRateElementType'
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcSubscrpnRateElmntTypeTxt
  as select from dd07t
  association [1..1] to I_SrvcSubscrpnRateElmntType as _SubscrpnRateElementType on $projection.SubscriptionRateElementType = _SubscrpnRateElementType.SubscriptionRateElementType
  association [1..1] to I_Language                  as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SubscrpnRateElementType'
  key cast(domvalue_l as crms4_rate_element_type) as SubscriptionRateElementType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                  as Language,

      @Semantics.text: true
      ddtext                                      as SubscrpnRateElementTypeText,

      _SubscrpnRateElementType,
      _Language
}
where
      domname  = 'CRMS4_RATE_ELEMENT_TYPE'
  and as4local = 'A';
```
