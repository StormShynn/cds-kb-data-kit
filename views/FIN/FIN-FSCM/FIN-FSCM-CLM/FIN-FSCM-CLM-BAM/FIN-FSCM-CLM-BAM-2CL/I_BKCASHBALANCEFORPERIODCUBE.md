---
name: I_BKCASHBALANCEFORPERIODCUBE
description: Bank Account Balances for Period - Cube
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value
semantic_en: Bank Account Balances for Period - Cube
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BKCASHBALANCEFORPERIODCUBE

**Bank Account Balances for Period - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKCASHBALANCEFORPERIODCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `CashBalanceType` |  | |  |  | `CHAR(1)` | Cash Balance Type |
| `TransactionDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `CashBalanceAmount` |  | |  |  | `CURR(23)` | Balance Amount |
| `CashBalanceCurrency` |  | |  |  | `CUKY(5)` | Balance Currency |
| `CashBalanceKey` |  | |  |  | `NUMC(16)` |  |
| `CashBalanceDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `OriginDocument` |  | |  |  | `CHAR(32)` | Source Document ID |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `CashBalanceChannel` |  | |  |  | `CHAR(10)` | Bank Account Balance Update Method |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CashBalanceCreatedAtDateTime` |  | |  |  | `DEC(21)` | FQM Flow Creation Timestamp |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | FQM Flow Create User |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
