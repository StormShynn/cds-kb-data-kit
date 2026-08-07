---
name: C_BANKGUARANTEEOVERVIEWQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?"
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
# C_BANKGUARANTEEOVERVIEWQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinInstrConditionLogicGroup` |  | |  |  | `NUMC(4)` | Condition Logic Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `InterestCalculationType` |  | |  |  | `INT1(3)` | Interest Calculation Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Nominal Currency |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(26)` |  |
| `FeeAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Financial Position Amount In Transaction Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `NominalAmountInDisplayCurrency` |  | |  |  | `CURR(21)` | Nominal Amount in Display Currency |
| `FeeAmountInDisplayCurrency` |  | |  |  | `CURR(21)` | Fee Amount in Display Currency |
| `EstimatedFeeAmtInDisplayCrcy` |  | |  |  | `CURR(21)` | Estimated Fee Amount in Display Currency |
| `NmbrOfFinancialTransactions` |  | |  |  | `INT4(10)` | Number of Financial Transactions |
| `VolumeIsCounted` |  | |  |  | `CHAR(1)` | Indicator whether transaction has valid condition |
| `ConditionIsValid` |  | |  |  | `CHAR(1)` | Indicator whether transaction has valid condition |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` |  |
