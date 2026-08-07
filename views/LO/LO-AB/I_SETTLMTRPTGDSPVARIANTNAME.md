---
name: I_SETTLMTRPTGDSPVARIANTNAME
description: "Reporting Display Variant - Text"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value
semantic_en: "Reporting Display Variant - Text"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTRPTGDSPVARIANTNAME

**Reporting Display Variant - Text**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTRPTGDSPVARIANTNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtRptgDisplayVariant` |  | |  |  | `CHAR(1)` | Invert Sign for Amount/Quantity Fields in Reporting |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtRptgDisplayVariantName` |  | |  |  | `CHAR(60)` | Settlement Reporting Display Variant |
