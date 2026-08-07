---
name: C_FINTRANSAMTQRY
description: Financial Transaction Amount - Query
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value
semantic_en: Financial Transaction Amount - Query
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
# C_FINTRANSAMTQRY

**Financial Transaction Amount - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value) |

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
