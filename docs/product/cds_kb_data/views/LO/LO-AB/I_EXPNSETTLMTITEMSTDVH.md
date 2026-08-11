---
name: I_EXPNSETTLMTITEMSTDVH
description: "Expense Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value
semantic_en: "Expense Settlement Item"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMTITEMSTDVH

**Expense Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` |  | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` |  | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
