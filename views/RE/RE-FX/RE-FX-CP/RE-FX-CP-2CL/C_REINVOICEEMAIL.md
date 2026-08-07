---
name: C_REINVOICEEMAIL
description: "Invoice Email Template"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value
semantic_en: "Invoice Email Template"
tags:
  - RE
  - bo:billingdocument
  - component:RE-FX-CP-2CL
  - consumption-view
  - invoice
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
  - metadata-only
---
# C_REINVOICEEMAIL

**Invoice Email Template**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InvoiceNumber` |  | |  |  | `CHAR(50)` | Issued Invoice ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
