---
name: C_HISEXCHRATEVOLATILITYQRY
description: "This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - metadata-only
---
# C_HISEXCHRATEVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` |  | |  |  | `CHAR(3)` | Volatility Type |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To Currency |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` |  | |  |  | `NUMC(10)` | Term in Days |
| `ExchangeRateVolatilityValue` |  | |  |  | `DEC(11)` | Exchange Rate Volatility |
