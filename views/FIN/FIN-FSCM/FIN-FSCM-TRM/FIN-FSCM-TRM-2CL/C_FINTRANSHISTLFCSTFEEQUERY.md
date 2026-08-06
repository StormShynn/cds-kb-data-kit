---
name: C_FINTRANSHISTLFCSTFEEQUERY
description: Fin Trans Histl Fcst Fee - Query
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSHISTLFCSTFEEQUERY')/$value
semantic_en: Fin Trans Histl Fcst Fee - Query
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
# C_FINTRANSHISTLFCSTFEEQUERY

**Fin Trans Histl Fcst Fee - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSHISTLFCSTFEEQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinTransFeeDataSource` | `CHAR(10)` | Data source for FinTrans Fee |
| `FinTransFlowType` | `CHAR(4)` | Flow Type |
| `FinTransFlowCreationTime` | `TIMS(6)` | Flow Entry Time |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` | `DATS(8)` | Entered On |
| `FinTransFlowNumber` | `NUMC(4)` | Transaction Flow |
| `FinTransFlowPaymentDate` | `DATS(8)` | Flow Payment Date |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `YearMonth` | `NUMC(6)` | Year Month |
| `YearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `DisplayCurrency` | `CUKY(5)` |  |
| `FinTransFlowPaytAmtInDspCrcy` | `CURR(17)` | Fin Trans Fee Amt in Display Crcy |
| `ExchangeRateType` | `CHAR(4)` |  |
