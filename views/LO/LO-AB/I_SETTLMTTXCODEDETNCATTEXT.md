---
name: I_SETTLMTTXCODEDETNCATTEXT
description: This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: " Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value
semantic_en: This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: " Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - pricing
  - supplier
  - metadata-only
---
# I_SETTLMTTXCODEDETNCATTEXT

**This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: " Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeDetnCat` |  | |  |  | `CHAR(1)` | Tax Code Determination |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtTxCodeDetnCatName` |  | |  |  | `CHAR(60)` | Text of Tax Code Determination |
