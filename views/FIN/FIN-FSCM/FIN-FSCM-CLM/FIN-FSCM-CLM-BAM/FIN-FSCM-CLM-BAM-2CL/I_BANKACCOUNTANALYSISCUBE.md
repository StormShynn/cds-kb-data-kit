---
name: I_BANKACCOUNTANALYSISCUBE
description: This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value
semantic_en: This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?
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
# I_BANKACCOUNTANALYSISCUBE

**This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `Bank` | `CHAR(15)` | Bank Key |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `CreditRating` | `CHAR(3)` | Rating |
| `BankInBankGroup` | `CHAR(10)` | Bank In Bank Group |
| `NumberOfBankAccounts` | `INT4(10)` | Number of Bank Accounts |
