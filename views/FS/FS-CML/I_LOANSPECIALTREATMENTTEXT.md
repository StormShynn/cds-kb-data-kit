---
name: I_LOANSPECIALTREATMENTTEXT
description: "Loan Special Treatment - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value
semantic_en: "Loan Special Treatment - Text"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANSPECIALTREATMENTTEXT

**Loan Special Treatment - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSPECIALTREATMENTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LoanSpecialTreatment` |  | |  |  | `NUMC(2)` | Special treatment of loan |
| `LoanSpecialTreatmentShortText` |  | |  |  | `CHAR(15)` | Text (15 characters) |
| `LoanSpecialTreatmentText` |  | |  |  | `CHAR(40)` | Text, 40 Characters Long |
