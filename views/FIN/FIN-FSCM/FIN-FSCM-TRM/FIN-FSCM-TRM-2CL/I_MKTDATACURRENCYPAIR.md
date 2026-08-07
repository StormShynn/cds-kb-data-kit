---
name: I_MKTDATACURRENCYPAIR
description: This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?
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
# I_MKTDATACURRENCYPAIR

**This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyPair` |  | |  |  | `CHAR(20)` | Currency Pair |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To Currency |
