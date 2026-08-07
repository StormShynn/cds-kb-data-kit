---
name: I_AGREEMENTSPECIALARRANGEMENT
description: "Agreement Special Arrangement Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value
semantic_en: "Agreement Special Arrangement Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTSPECIALARRANGEMENT

**Agreement Special Arrangement Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtSpecialArrangementUUID` |  | |  |  | `RAW(16)` | Primary key for CMS_CAG_SA |
| `AgrmtSpecialArrangementRefUUID` |  | |  |  | `RAW(16)` | Link Key for CMS_CAG_SA |
| `AgreementSpecialArrgmtType` |  | |  |  | `CHAR(6)` | Special Arrangement Type |
| `AgreementSpecialArrangementID` |  | |  |  | `CHAR(40)` | Special Arrangement ID |
| `AgrmtSpclArrgmtProcgStatus` |  | |  |  | `CHAR(2)` | Processing Status of Special Arrangement |
| `AgrmtSpclArrgmtLegalStatus` |  | |  |  | `CHAR(2)` | Special Arrangement Legal Status |
| `AgrmtSpclArrgmtValidFromDate` |  | |  |  | `DATS(8)` | Date from which Special Arrangement Stands Valid |
| `AgrmtSpclArrgmtValidToDate` |  | |  |  | `DATS(8)` | Date from which Special Arrangement Stands Valid |
| `AgrmtSpclArrgmtNominalAmount` |  | |  |  | `CURR(17)` | Special Arrangement Nominal Value |
| `AgrmtSpclArrgmtNominalCurrency` |  | |  |  | `CUKY(5)` | Currency of Special Arrangement: Nominal Value |
| `AgrmtSpclArrgmtAssessmentAmt` |  | |  |  | `CURR(17)` | Special Arrangement Assessment Amount |
| `AgrmtSpclArrgmtAssessmentCrcy` |  | |  |  | `CUKY(5)` | Currency of Special Arrangement: Assessment Amount |
| `AgrmtSpclArrgmtBankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `AgrmtSpclArrgmtBankKey` |  | |  |  | `CHAR(15)` | Bank Keys |
| `AgrmtSpclArrgmtBankAcctNmbr` |  | |  |  | `CHAR(35)` | Bank account number |
| `AgrmtSpclArrgmtPurchaseID` |  | |  |  | `CHAR(40)` | Pruchase Agreement ID of a Special Arrangement |
| `AgrmtSpclArrgmtPurchaseDate` |  | |  |  | `DATS(8)` | Purchase Agreement Date of Special Arrangement |
| `AgrmtSpclArrgmtDescription` |  | |  |  | `CHAR(30)` | Description for Special Arrangement |
