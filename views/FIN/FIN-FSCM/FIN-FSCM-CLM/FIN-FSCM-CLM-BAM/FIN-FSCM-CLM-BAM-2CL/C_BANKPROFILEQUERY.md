---
name: C_BANKPROFILEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?"
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
# C_BANKPROFILEQUERY

**This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |
| `NumberOfBankAccounts` |  | |  |  | `INT4(10)` |  |
| `NumberOfCompanyCodes` |  | |  |  | `INT4(10)` |  |
| `NrOfBanksRated` |  | |  |  | `INT1(3)` |  |
