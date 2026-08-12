---
name: I_SUBSCRIPTIONBILLINGCYCLE
description: "Subscription Billing Cycle"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLE')/$value
semantic_en: "Subscription Billing Cycle"
semantic_vi: "Subscription Billing Cycle — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscription"
  - "billing"
  - "cycle"
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
# I_SUBSCRIPTIONBILLINGCYCLE

**Subscription Billing Cycle**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionBillingCycle` | ✓ | |  | `cast(domvalue_l as crms4_subscrpn_billg_cycle)` | `CHAR(4)` | Billing Cycle |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscriptionBillingCycleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscriptionBillingCycleText` | `I_SubscriptionBillingCycleText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Subscription Billing Cycle'

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'SubscriptionBillingCycle'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true

define view entity I_SubscriptionBillingCycle
  as select from dd07l
  association [1..*] to I_SubscriptionBillingCycleText as _SubscriptionBillingCycleText on $projection.SubscriptionBillingCycle = _SubscriptionBillingCycleText.SubscriptionBillingCycle
{
      @ObjectModel.text.association: '_SubscriptionBillingCycleText'
  key cast(domvalue_l as crms4_subscrpn_billg_cycle) as SubscriptionBillingCycle,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      _SubscriptionBillingCycleText
}
where
      domname  = 'CRMS4_SUBSCRPN_BILLG_CYCLE'
  and as4local = 'A';
```
