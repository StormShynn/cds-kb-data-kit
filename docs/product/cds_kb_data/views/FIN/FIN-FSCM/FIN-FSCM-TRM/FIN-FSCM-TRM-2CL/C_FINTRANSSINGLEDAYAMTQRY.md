---
name: C_FINTRANSSINGLEDAYAMTQRY
description: "This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value
semantic_en: "This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
  - metadata-only
---
# C_FINTRANSSINGLEDAYAMTQRY

**This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` |  | |  |  | `DATS(8)` | Key Date |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `FinTransProductGroup` |  | |  |  | `CHAR(4)` | Product Group for Financial Transaction |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Valuation Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(18)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `FinTransAmtInDisplayCurrency` |  | |  |  | `CURR(17)` | Fin Trans Amt in Display Crcy |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` |  |
