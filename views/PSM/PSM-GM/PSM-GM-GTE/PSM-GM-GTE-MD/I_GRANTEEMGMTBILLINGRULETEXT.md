---
name: I_GRANTEEMGMTBILLINGRULETEXT
description: Grantee Management Billing Rule - Text
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value
semantic_en: Grantee Management Billing Rule - Text
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANTEEMGMTBILLINGRULETEXT

**Grantee Management Billing Rule - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBillingRule` |  | |  |  | `NUMC(4)` | Rule Used as a Basis for Billing |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `GranteeMgmtBillingRuleDesc` |  | |  |  | `CHAR(30)` | Billing Rule Description |
