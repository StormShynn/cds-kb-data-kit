---
name: I_JP_SUPLRINVCSMMRYDOCOUTPUT
description: "Supplier Invoice Summary Doc for Output"
app_component: FI-LOC-FI-JP-IVS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value
semantic_en: "Supplier Invoice Summary Doc for Output"
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-FI-JP-IVS
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - FI-LOC-FI-JP-IVS
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_JP_SUPLRINVCSMMRYDOCOUTPUT

**Supplier Invoice Summary Doc for Output**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP-IVS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SupplierInvoiceSummaryNumber` |  | |  |  | `CHAR(10)` | Supplier Invoice Summary Number |
| `SuplrInvcSmmryDocumentUUID` |  | |  |  | `RAW(16)` | Supplier Invoice Summary Header UUID |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SuplrInvcSmmryGroupingUnit` |  | |  |  | `CHAR(20)` | Grouping Unit |
| `SuplrInvoiceSummaryClosingDate` |  | |  |  | `DATS(8)` | Closing Date |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `SuplrInvcSmmryDueDate` |  | |  |  | `DATS(8)` | Due Date for Net Payment |
| `SuplrInvcSmmryNetAmount` |  | |  |  | `CURR(23)` | Invoiced Net Amount |
| `SuplrInvcSmmryTaxAmount` |  | |  |  | `CURR(23)` | Invoiced Tax Amount |
| `SuplrInvoiceSummaryIsCancelled` |  | |  |  | `CHAR(1)` | Cancelled |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Supplier Invoice Summary Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Supplier Invoice Summary Created At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Supplier Invoice Summary Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Supplier Invoice Summary Changed At |
