---
name: C_BKCSHBALBYCSHBALDTEQUERY
description: Bank Account Balances - Query
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value
semantic_en: Bank Account Balances - Query
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKCSHBALBYCSHBALDTEQUERY

**Bank Account Balances - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKCSHBALBYCSHBALDTEQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `Bank` | `CHAR(15)` | Bank Key |
| `BankName` | `CHAR(60)` | Name of Financial Institution |
| `SWIFTCode` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankAccountType` | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountNumber` | `CHAR(40)` | Bank Account Number |
| `CashBalanceType` | `CHAR(1)` | Cash Balance Type |
| `CashBalanceDate` | `DATS(8)` | Transaction Date |
| `TransactionDate` | `DATS(8)` | Key Date |
| `CashBalanceAmount` | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` | `CUKY(5)` | Balance Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `CalculatedAmountInDspCrcy` | `CURR(19)` | Net Value in Display Currency |
| `BankAccountStatus` | `CHAR(2)` | Bank Account Status |
| `BankAccountContractType` | `CHAR(2)` | Bank Account Contract Type |
| `BankStatementShortID` | `NUMC(8)` | Bank Statement Short Key |
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountDescription` | `CHAR(60)` | Account Description |
