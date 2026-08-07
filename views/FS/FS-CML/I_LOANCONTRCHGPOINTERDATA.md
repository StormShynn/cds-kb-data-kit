---
name: I_LOANCONTRCHGPOINTERDATA
description: Change Pointer for Loan Contract
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value
semantic_en: Change Pointer for Loan Contract
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANCONTRCHGPOINTERDATA

**Change Pointer for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCHGPOINTERDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChangePointerUUID` |  | |  |  | `CHAR(32)` | GUID in 'CHAR' Format in Uppercase |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LoanArchivingCategory` |  | |  |  | `CHAR(1)` | Archiving Category Indicator |
| `LoanContractID` |  | |  |  | `CHAR(13)` | Contract Number |
| `LoanChgPointerLastChgDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LoanChgPointerChangeCat` |  | |  |  | `CHAR(4)` | Change Category |
| `LoanChgPointerChgSubCat` |  | |  |  | `CHAR(4)` | Change Sub-Category |
| `LoanChgPointerEnteredDate` |  | |  |  | `DATS(8)` | First Entered On |
| `LoanChgPointerEnteredTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `LoanChgPointerEnteredBy` |  | |  |  | `CHAR(12)` | Entered By |
| `LoanChgPointerEnteredSource` |  | |  |  | `CHAR(10)` | Source of Initial Entry |
| `LoanChgPointerProcgSts` |  | |  |  | `CHAR(1)` | Status of Change Pointer Regarding ALE Processing |
| `LoanChgPointerProcgGrp` |  | |  |  | `NUMC(2)` | ALE Processing Group |
