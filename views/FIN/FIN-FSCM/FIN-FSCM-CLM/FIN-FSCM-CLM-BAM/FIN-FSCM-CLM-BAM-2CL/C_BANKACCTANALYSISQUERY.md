---
name: C_BANKACCTANALYSISQUERY
description: This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value
semantic_en: This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?
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
# C_BANKACCTANALYSISQUERY

**This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `Bank` | `CHAR(15)` | Bank Key |
| `CreditRating` | `CHAR(3)` | Rating |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BankInBankGroup` | `CHAR(10)` | Bank In Bank Group |
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `NumberOfBankAccounts` | `INT4(10)` | Number of Bank Accounts |
| `NrOfBanksRated` | `INT4(10)` | Number of Banks |
