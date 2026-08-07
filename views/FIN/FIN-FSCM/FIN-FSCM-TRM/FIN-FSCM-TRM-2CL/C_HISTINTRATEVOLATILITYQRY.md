---
name: C_HISTINTRATEVOLATILITYQRY
description: This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?
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
# C_HISTINTRATEVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` |  | |  |  | `CHAR(3)` | Volatility Type |
| `ReferenceInterestRate` |  | |  |  | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` |  | |  |  | `INT4(10)` |  |
| `InterestRateVolatilityValue` |  | |  |  | `DEC(11)` | Interest Rate Volatility |
