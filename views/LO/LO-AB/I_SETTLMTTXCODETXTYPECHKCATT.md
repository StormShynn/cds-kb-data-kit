---
name: I_SETTLMTTXCODETXTYPECHKCATT
description: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value
semantic_en: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SETTLMTTXCODETXTYPECHKCATT

**This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeTxTypeChkCat` |  | |  |  | `CHAR(1)` | Control of Tax Type Check for Tax Codes |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtTxCodeTxTypeChkCatName` |  | |  |  | `CHAR(60)` | Text of Tax Type Check Control for Tax Codes |
