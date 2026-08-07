---
name: C_BKPOABANKACCOUNTFDP
description: Form Data Provider for POA Bank Account
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value
semantic_en: Form Data Provider for POA Bank Account
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
# C_BKPOABANKACCOUNTFDP

**Form Data Provider for POA Bank Account**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOABankAccountUUID` |  | |  |  | `RAW(16)` | UUID of Bank Account in POA for Banking Transactions |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BkPOABkAcctAssignmentDateTime` |  | |  |  | `DEC(15)` | Bank Account Assignment Timestamp |
| `BkPOABkAcctRemovalDateTime` |  | |  |  | `DEC(15)` | Bank Account Removal Timestamp |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankAccountCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankAccountContractTypeName` |  | |  |  | `CHAR(60)` | Bank Account Contract Type Description |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountTypeText` |  | |  |  | `CHAR(60)` | Bank Account Type Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
