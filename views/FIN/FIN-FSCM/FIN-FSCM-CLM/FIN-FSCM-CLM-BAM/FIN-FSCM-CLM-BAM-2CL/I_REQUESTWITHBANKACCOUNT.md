---
name: I_REQUESTWITHBANKACCOUNT
description: This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value
semantic_en: This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?
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
# I_REQUESTWITHBANKACCOUNT

**This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountChangeRequest` |  | |  |  | `NUMC(12)` | Change Request ID |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountRevision` |  | |  |  | `NUMC(4)` | Revision Number |
| `BankAccount` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `AccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountHolderName` |  | |  |  | `CHAR(60)` | Bank Account Holder |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `BankAccountCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
