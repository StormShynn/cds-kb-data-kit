---
name: I_PRAACCOUNTINGDOCUMENTHEADER
description: Production Revenue Accounting Accounting Document Header
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value
semantic_en: Production Revenue Accounting Accounting Document Header
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRAACCOUNTINGDOCUMENTHEADER

**Production Revenue Accounting Accounting Document Header**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Revenue Accounting Document Number |
| `DocumentDescription` |  | |  |  | `CHAR(60)` | Document Description |
| `Origin` |  | |  |  | `CHAR(2)` | Application |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Source Reference Document (VL,CI,SS,FT) |
| `AccountingDocumentStatus` |  | |  |  | `CHAR(2)` | Accounting Document Status |
| `AccountingDocumentIsReversed` |  | |  |  | `CHAR(1)` | Accounting Reverse Flag |
| `AccountingDocumentCrossCoRef` |  | |  |  | `CHAR(20)` | Cross Company key for Accounting Document Header |
| `PostingDate` |  | |  |  | `DATS(8)` | Accounting Document Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
| `NumberOfRejectedItems` |  | |  |  | `INT4(10)` | Number of Rejected Items |
| `NumberOfDocuments` |  | |  |  | `INT4(10)` | Number of Documents |
