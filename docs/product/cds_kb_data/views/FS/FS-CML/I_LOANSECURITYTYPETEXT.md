---
name: I_LOANSECURITYTYPETEXT
description: "Loan Security Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value
semantic_en: "Loan Security Type - Text"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANSECURITYTYPETEXT

**Loan Security Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSECURITYTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LoanSecurityType` |  | |  |  | `NUMC(2)` | Borrower's Note Loan Security Type |
| `LoanSecurityTypeShortText` |  | |  |  | `CHAR(15)` | Short Name |
| `LoanSecurityTypeText` |  | |  |  | `CHAR(30)` | Normal name (30 characters) |
| `LoanSecurityTypeLongText` |  | |  |  | `CHAR(50)` | Name |
