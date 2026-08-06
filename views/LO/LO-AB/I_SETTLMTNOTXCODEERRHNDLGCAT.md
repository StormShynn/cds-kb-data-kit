---
name: I_SETTLMTNOTXCODEERRHNDLGCAT
description: This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value
semantic_en: This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - pricing
  - metadata-only
---
# I_SETTLMTNOTXCODEERRHNDLGCAT

**This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtNoTxCodeErrHndlgCat` | `CHAR(1)` | Handling of Missing Tax Code |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
