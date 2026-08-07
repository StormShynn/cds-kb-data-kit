---
name: I_SUBSCRIPTIONBILLINGCYCLETEXT
description: Subscription Billing Cycle - Text
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value
semantic_en: Subscription Billing Cycle - Text
tags:
  - CRM
  - billing
  - bo:billingdocument
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
  - metadata-only
---
# I_SUBSCRIPTIONBILLINGCYCLETEXT

**Subscription Billing Cycle - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRIPTIONBILLINGCYCLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscriptionBillingCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SubscriptionBillingCycleText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
