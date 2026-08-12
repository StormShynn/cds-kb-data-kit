---
name: I_SUBSCRIPTIONBILLINGCYCLETEXT
description: "Subscription Billing Cycle - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value
semantic_en: "Subscription Billing Cycle - Text"
semantic_vi: "Subscription Billing Cycle - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscription"
  - "billing"
  - "cycle"
  - "text"
  - "language"
  - "domain"
  - "value"
tags:
  - CRM
  - billing
  - bo:billingdocument
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
---
# I_SUBSCRIPTIONBILLINGCYCLETEXT

**Subscription Billing Cycle - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionBillingCycle` | ✓ | |  | `cast(domvalue_l as crms4_subscrpn_billg_cycle)` | `CHAR(4)` | Billing Cycle |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SubscriptionBillingCycleText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscriptionBillingCycle` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscriptionBillingCycle` | `I_SubscriptionBillingCycle` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Subscription Billing Cycle - Text'
@Analytics.technicalName:'ISubsBillgCycTxt'
@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SubscriptionBillingCycle'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

define view entity I_SubscriptionBillingCycleText
  as select from dd07t
  association [1..1] to I_SubscriptionBillingCycle as _SubscriptionBillingCycle on $projection.SubscriptionBillingCycle = _SubscriptionBillingCycle.SubscriptionBillingCycle
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SubscriptionBillingCycle'
  key cast(domvalue_l as crms4_subscrpn_billg_cycle) as SubscriptionBillingCycle,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                     as Language,

      @Semantics.text: true
      ddtext                                         as SubscriptionBillingCycleText,

//      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                  as DomainValue,
      
      _SubscriptionBillingCycle,
      _Language
}
where
      domname  = 'CRMS4_SUBSCRPN_BILLG_CYCLE'
  and as4local = 'A';
```
