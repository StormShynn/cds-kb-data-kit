---
name: I_IN_OUTGINVCADDLFSCLDTA
description: Additional Fiscal Data Outgoing Invoices
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value
semantic_en: Additional Fiscal Data Outgoing Invoices
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_IN_OUTGINVCADDLFSCLDTA

**Additional Fiscal Data Outgoing Invoices**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AFDFUniqueKeyUUID` | `RAW(16)` | Globally Unique Identifier |
| `AFDFDocumentKey1` | `CHAR(32)` | AFD Dynamic 1 |
| `AFDFDocumentType` | `CHAR(3)` | AFD Document Type |
| `AFDFRecordType` | `CHAR(20)` | AFD Record Type |
| `IN_ShippingBillDate` | `DATS(8)` | Shipping Bill Date : Export India |
| `IN_ShippingBillNumber` | `CHAR(10)` | Shipping Bill Number : Export India |
| `IN_ShippingBillPortNumber` | `CHAR(10)` | Shipping Bill Port Number : Export India |
