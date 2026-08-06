---
name: I_FINTRANSCURRENCYPAIRVH
description: This view provides value help for the Currency Pair field. This view should be used for value help purposes only.
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value
semantic_en: This view provides value help for the Currency Pair field. This view should be used for value help purposes only.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINTRANSCURRENCYPAIRVH

**This view provides value help for the Currency Pair field. This view should be used for value help purposes only.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENCYPAIRVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CurrencyPair` | `CHAR(20)` | Currency Pair |
| `SourceCurrency` | `CUKY(5)` | Leading Currency in Exchange Rate Quotation |
| `TargetCurrency` | `CUKY(5)` | Following Currency in Exchange Rate Quotation |
