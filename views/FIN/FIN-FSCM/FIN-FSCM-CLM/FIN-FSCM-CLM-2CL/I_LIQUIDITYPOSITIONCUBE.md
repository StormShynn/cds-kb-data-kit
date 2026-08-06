---
name: I_LIQUIDITYPOSITIONCUBE
description: This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_LIQUIDITYPOSITIONCUBE

**This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialPositionDataSource` | `CHAR(10)` | Data Source of Liquidity Position |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `HouseBank` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` | `CHAR(5)` | ID for Account Details |
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `TransactionCurrency` | `CUKY(5)` | Currency |
| `LiquidityItem` | `CHAR(16)` | Liquidity Item |
| `BankAccountCurrency` | `CUKY(5)` | Currency |
| `BankAccount` | `CHAR(40)` | Bank Account Number |
| `Bank` | `CHAR(15)` |  |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `TransactionDate` | `DATS(8)` | Key Date |
| `BankAccountDescription` | `CHAR(60)` | Account Description |
| `BankName` | `CHAR(60)` |  |
| `LiquidityItemName` | `CHAR(30)` | Liquidity Item Name |
| `AmountInTransactionCurrency` | `CURR(23)` |  |
