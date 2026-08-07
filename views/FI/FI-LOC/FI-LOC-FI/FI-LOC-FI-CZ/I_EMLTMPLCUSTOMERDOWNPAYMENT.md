---
name: I_EMLTMPLCUSTOMERDOWNPAYMENT
description: Email Template Customer Down Payment
app_component: FI-LOC-FI-CZ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value
semantic_en: Email Template Customer Down Payment
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-FI-CZ
  - customer
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-CZ
  - interface-view
  - lob:finance
  - lob:logistics general
  - payment
  - metadata-only
---
# I_EMLTMPLCUSTOMERDOWNPAYMENT

**Email Template Customer Down Payment**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CZ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `OfficialDocumentNumber` |  | |  |  | `CHAR(200)` | Official Document Number Value |
