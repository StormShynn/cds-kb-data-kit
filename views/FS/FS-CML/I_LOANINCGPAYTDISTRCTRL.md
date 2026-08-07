---
name: I_LOANINCGPAYTDISTRCTRL
description: "Loan Incoming Payment Distribution Control"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value
semantic_en: "Loan Incoming Payment Distribution Control"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - payment
  - metadata-only
---
# I_LOANINCGPAYTDISTRCTRL

**Loan Incoming Payment Distribution Control**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanIncgPaytDistrCtrl` |  | |  |  | `NUMC(2)` | Indicator for Control of Incoming Payment Distribution |
| `LoanPaymentSmmrznLevel` |  | |  |  | `NUMC(2)` | Payment summarization level |
| `LoanOverPaymentPrelimFltr` |  | |  |  | `NUMC(2)` | Advance payments / overpayments preliminary filter |
| `LoanOpenItemGroupLevel` |  | |  |  | `NUMC(2)` | Grouping level open items/incoming payment distribution |
| `LoanOpenItemPrelimFilter` |  | |  |  | `NUMC(2)` | Open items/incoming pmnt distribution pre-filter |
