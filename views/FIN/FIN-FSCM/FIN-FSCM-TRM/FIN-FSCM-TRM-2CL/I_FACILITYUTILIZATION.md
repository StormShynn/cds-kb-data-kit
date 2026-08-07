---
name: I_FACILITYUTILIZATION
description: This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value
semantic_en: This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?
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
# I_FACILITYUTILIZATION

**This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` |  | |  |  | `DATS(8)` | Key Date |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DrawingCompanyCode` |  | |  |  | `CHAR(4)` | Drawing Company Code |
| `DrawingFinancialTransaction` |  | |  |  | `CHAR(13)` | Drawing Financial Transaction |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `UtilizedAmountInTransCrcy` |  | |  |  | `CURR(17)` |  |
| `TotalAmountInTransactionCrcy` |  | |  |  | `CURR(17)` | Credit Line in Transaction Currency |
