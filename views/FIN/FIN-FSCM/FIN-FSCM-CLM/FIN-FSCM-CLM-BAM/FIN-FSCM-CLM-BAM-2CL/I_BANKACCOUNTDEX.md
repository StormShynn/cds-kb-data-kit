---
name: I_BANKACCOUNTDEX
description: Bank Accounts
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value
semantic_en: Bank Accounts
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
# I_BANKACCOUNTDEX

**Bank Accounts**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `BankInternalID` | `CHAR(15)` | Bank Key |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `BankAccountNumber` | `CHAR(40)` | Bank Account Number |
| `BankAccountCurrency` | `CUKY(5)` | Currency Key |
| `BankControlKey` | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` | `CHAR(2)` | Bank Account Contract Type |
| `BankNumber` | `CHAR(15)` | Bank Number |
| `SWIFTCode` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BankAccountInternalType` | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountStatus` | `CHAR(2)` | Bank Account Status |
| `ValidityStartDate` | `DATS(8)` | Bank Account Opening Date |
| `ValidityEndDate` | `DATS(8)` | Bank Account Closing Date |
