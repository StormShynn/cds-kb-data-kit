---
name: I_CREDITLINEUTILCUBE
description: This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?
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
# I_CREDITLINEUTILCUBE

**This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `CalendarDate` | `DATS(8)` | Calendar Date |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | `CHAR(10)` | Syndicated Counterparty |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` | `CHAR(3)` | Financial Instrument Transaction Type |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `ExchangeRateType` | `CHAR(4)` |  |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `UtilizedAmountInTransCrcy` | `CURR(17)` |  |
| `TotalAmountInTransactionCrcy` | `CURR(17)` | Credit Line in Transaction Currency |
| `FreeCreditLineAmtInTransCrcy` | `CURR(18)` |  |
| `TotalAmountInDisplayCrcy` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` | `CURR(17)` | Utilized Amount in Display Currency |
| `FreeCreditLineAmtInDspCrcy` | `CURR(17)` | Available Amount in Display Currency |
| `TotalAmtInDspCrcyOfStrtDay` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmtInDspCrcyOfStrtDay` | `CURR(17)` | Utilized Amount in Display Currency of Start Day |
