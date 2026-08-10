---
name: I_EMLTMPLCUSTOMERDOWNPAYMENT
description: "This CDS view retrieves the official document number for the customer down payment."
app_component: FI-LOC-FI-CZ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value
semantic_en: "This CDS view retrieves the official document number for the customer down payment."
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-FI-CZ
  - customer
  - document
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

**This CDS view retrieves the official document number for the customer down payment.**

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
| `OfficialDocumentNumber` |  | |  |  | `CHAR(200)` | DEPRECATED: ODN Value (200 Characters) |
| `OfficialDocumentNumber_2` |  | |  |  | `CHAR(255)` | Official Document Number Value |
