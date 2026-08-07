---
name: I_FINTRANSNOMINAL
description: "This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value
semantic_en: "This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FINTRANSNOMINAL

**This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialTransactionDirection` |  | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinTransFlowNomAmt` |  | |  |  | `CURR(18)` |  |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
