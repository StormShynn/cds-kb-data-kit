---
name: I_FINTRANSCONTRACTACTIVITY
description: This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value
semantic_en: This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - contract
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FINTRANSCONTRACTACTIVITY

**This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinTransActyConclusionDate` | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `FinTransActyConclusionTime` | `TIMS(6)` | Time of Contract Conclusion |
| `FinTransActyConclusionTimeZone` | `CHAR(6)` | Time Zone of Contract Date and Time |
| `ExchangeRate` | `DEC(13)` | Rate of Foreign Exchange Transaction |
