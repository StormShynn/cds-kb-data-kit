---
name: I_LOANNOTICEREASON
description: "Loan Notice Reason"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value
semantic_en: "Loan Notice Reason"
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANNOTICEREASON

**Loan Notice Reason**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanNoticeReason` |  | |  |  | `NUMC(3)` | Reason for Notice |
| `LoanNtcProcgIsAllwd` |  | |  |  | `CHAR(1)` | ID Further Editing in Internal Functions |
| `LoanNoticeIsCreditor` |  | |  |  | `CHAR(1)` | Creditor Notice Type Indicator |
