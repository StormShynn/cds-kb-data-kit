---
name: I_MKTDATAFXRATECUBE
description: This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_MKTDATAFXRATECUBE

**This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyPair` |  | |  |  | `CHAR(20)` | Currency Pair |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From-Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To-Currency |
| `NumberOfSourceCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "to" currency units |
| `ExchangeRate` |  | |  |  | `DEC(16)` | Exchange Rate |
