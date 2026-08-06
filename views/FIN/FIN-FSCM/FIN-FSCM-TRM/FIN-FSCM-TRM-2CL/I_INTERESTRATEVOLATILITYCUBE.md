---
name: I_INTERESTRATEVOLATILITYCUBE
description: This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?
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
# I_INTERESTRATEVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `VolatilityType` | `CHAR(3)` | Volatility Type |
| `ReferenceInterestRate` | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | `INT4(10)` |  |
| `InterestRateVolatilityValue` | `DEC(11)` | Interest Rate Volatility |
