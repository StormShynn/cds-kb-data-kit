---
name: C_MKTDATAFXRATEQUERY
description: This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?
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
# C_MKTDATAFXRATEQUERY

**This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CurrencyPair` |  | |  |  | `CHAR(20)` | Currency Pair |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From-Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To-Currency |
| `NumberOfSourceCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "to" currency units |
| `ExchangeRate` |  | |  |  | `DEC(16)` | Exchange Rate |
