---
name: C_LIQUIDITYPOSITIONQUERY
description: This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-2CL
  - lob:finance
  - metadata-only
---
# C_LIQUIDITYPOSITIONQUERY

**This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionDate` |  | |  |  | `DATS(8)` | Key Date |
| `FinancialPositionDataSource` |  | |  |  | `CHAR(10)` | Data Source of Liquidity Position |
| `BankAccount` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `Bank` |  | |  |  | `CHAR(15)` |  |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `LiquidityItem` |  | |  |  | `CHAR(16)` | Liquidity Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` |  |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
