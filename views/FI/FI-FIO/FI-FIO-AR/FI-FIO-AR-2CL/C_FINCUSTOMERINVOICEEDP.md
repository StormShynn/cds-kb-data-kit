---
name: C_FINCUSTOMERINVOICEEDP
description: FI Customer Invoice Email Data Provider
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value
semantic_en: FI Customer Invoice Email Data Provider
tags:
  - FI
  - bo:billingdocument
  - component:FI-FIO-AR-2CL
  - consumption-view
  - customer
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - invoice
  - lob:finance
  - metadata-only
---
# C_FINCUSTOMERINVOICEEDP

**FI Customer Invoice Email Data Provider**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `UserDescription` | `CHAR(80)` | User Description |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
