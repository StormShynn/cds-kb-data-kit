---
name: C_SUPLRINVCEMAILPARAMETER
description: Parameters for Supplier Invoice Email Template
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value
semantic_en: Parameters for Supplier Invoice Email Template
tags:
  - MM
  - bo:billingdocument
  - component:MM-IV-LIV-2CL
  - consumption-view
  - invoice
  - lob:sourcing & procurement
  - MM-IV
  - MM-IV-LIV
  - MM-IV-LIV-2CL
  - supplier
  - metadata-only
---
# C_SUPLRINVCEMAILPARAMETER

**Parameters for Supplier Invoice Email Template**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SupplierInvoice` | `CHAR(10)` | Document Number of an Invoice Document |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `DocumentDate` | `DATS(8)` | Invoice Date in Document |
| `CreationDate` | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `SupplierInvoiceIDByInvcgParty` | `CHAR(16)` | Reference Document Number |
| `InvoicingParty` | `CHAR(10)` | Different Invoicing Party |
| `BPSupplierName` | `CHAR(81)` | Supplier Name |
| `DocumentCurrency` | `CUKY(5)` | Currency Key |
| `InvoiceGrossAmount` | `CURR(13)` | Gross Invoice Amount in Document Currency |
