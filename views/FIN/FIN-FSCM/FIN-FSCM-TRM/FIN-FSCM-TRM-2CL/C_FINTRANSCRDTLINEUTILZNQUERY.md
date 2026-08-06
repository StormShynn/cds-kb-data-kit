---
name: C_FINTRANSCRDTLINEUTILZNQUERY
description: Credit Line Analysis Query
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value
semantic_en: Credit Line Analysis Query
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
# C_FINTRANSCRDTLINEUTILZNQUERY

**Credit Line Analysis Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `KeyDate` | `DATS(8)` | Key Date |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | `CHAR(10)` | Syndicated Counterparty |
| `CreditLineReportingPeriod` | `CHAR(10)` | Reporting Period |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `FinInstrTransactionCategory` | `NUMC(3)` | Transaction Category |
| `CompanyCodeCountry` | `CHAR(3)` | Country/Region Key of Company Code |
| `Portfolio` | `CHAR(10)` | Portfolio |
| `TotalAmountInTransactionCrcy` | `CURR(17)` | Credit Line in Transaction Currency |
| `UtilizedAmountInTransCrcy` | `CURR(17)` | Utilized Amount in Transaction Currency |
| `AvailableAmountInTransCrcy` | `DEC(23)` |  |
| `FcltyOvrdrftAmtInTransCrcy` | `DEC(23)` |  |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` | `CURR(17)` | Utilized Amount in Display Currency |
| `AvailableAmountInDisplayCrcy` | `DEC(23)` |  |
| `FcltyOvrdrftAmtInDisplayCrcy` | `DEC(23)` |  |
| `CreditLineUtilizationRatio` | `DEC(10)` | Utilization Rate (%) |
| `CrdtLineUnderUtilizationRatio` | `DEC(10)` | Underutilization Rate (%) |
| `FcltyTermEndExceededIsAllowed` | `CHAR(1)` | Exceedance of End of Term |
