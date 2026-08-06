---
name: I_GRANTEEMGMTBUDGETSTATUSTEXT
description: Grantee Management Budget Status - Text
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value
semantic_en: Grantee Management Budget Status - Text
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANTEEMGMTBUDGETSTATUSTEXT

**Grantee Management Budget Status - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBUDGETSTATUSTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Language` | `LANG(1)` | Language Key |
| `GranteeMgmtBudgetStatus` | `CHAR(1)` | Budget Status: Unreleased/Released |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `GranteeMgmtBudgetStatusName` | `CHAR(45)` | Budget Status Name |
| `DomainValueName` | `CHAR(60)` | Short Text for Fixed Values |
