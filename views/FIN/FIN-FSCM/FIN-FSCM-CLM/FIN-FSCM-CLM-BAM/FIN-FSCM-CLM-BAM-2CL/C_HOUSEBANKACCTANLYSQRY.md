---
name: C_HOUSEBANKACCTANLYSQRY
description: This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value
semantic_en: This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_HOUSEBANKACCTANLYSQRY

**This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankInBankGroup` |  | |  |  | `CHAR(10)` | Bank In Bank Group |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank ID |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `NumberOfCompanyCodes` |  | |  |  | `INT4(10)` | Number of Company Codes |
