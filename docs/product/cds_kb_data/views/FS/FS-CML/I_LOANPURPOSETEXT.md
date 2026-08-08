---
name: I_LOANPURPOSETEXT
description: "Loan Purpose - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value
semantic_en: "Loan Purpose - Text"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANPURPOSETEXT

**Loan Purpose - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LoanProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `LoanPurpose` |  | |  |  | `CHAR(2)` | Purpose of Loan |
| `LoanPurposeText` |  | |  |  | `CHAR(30)` | Text (30 Characters) |
| `LoanPurposeShortText` |  | |  |  | `CHAR(15)` | Short Name |
| `LoanPurposeLongText` |  | |  |  | `CHAR(50)` | Name |
