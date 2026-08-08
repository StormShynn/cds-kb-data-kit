---
name: I_GRANTEEMGMTBILLINGRULE
description: "Grantee Management Billing Rule"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value
semantic_en: "Grantee Management Billing Rule"
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
# I_GRANTEEMGMTBILLINGRULE

**Grantee Management Billing Rule**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBillingRule` |  | |  |  | `NUMC(4)` | Rule Used as a Basis for Billing |
| `GteeMManualBillingIsAllowed` |  | |  |  | `CHAR(1)` | Allow Manual Billing Indicator |
