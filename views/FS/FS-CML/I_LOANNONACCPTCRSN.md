---
name: I_LOANNONACCPTCRSN
description: Loan Non Acceptance Reason
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value
semantic_en: Loan Non Acceptance Reason
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANNONACCPTCRSN

**Loan Non Acceptance Reason**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LoanProductType` | `CHAR(3)` | Product Type |
| `LoanNonAccptcRsn` | `NUMC(2)` | Reason for Non-Acceptance |
| `LoanLifeCycleStatus` | `NUMC(2)` | Status which can be reached as target status |
