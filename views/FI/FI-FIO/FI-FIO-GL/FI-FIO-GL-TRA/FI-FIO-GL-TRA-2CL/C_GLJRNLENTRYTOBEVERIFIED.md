---
name: C_GLJRNLENTRYTOBEVERIFIED
description: This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
  - metadata-only
---
# C_GLJRNLENTRYTOBEVERIFIED

**This CDS view provides the prerequisites for answering the following business question: What is the General journal entry to be verified?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYTOBEVERIFIED')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `WorkItem` | `NUMC(12)` | Work item ID |
| `TaskProcessingStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `OriginalReferenceDocument` | `CHAR(18)` |  |
| `ObjectKey` | `CHAR(20)` | Object key |
| `AmountInCompanyCodeCurrency` | `CURR(23)` |  |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AccountingDocumentStatus` | `CHAR(1)` | Decision status |
| `AccountingDocumentStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `ReferenceDocument` | `CHAR(16)` | Document Reference ID |
| `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` | `DATS(8)` | Posting Date |
| `CreatedByUserName` | `CHAR(80)` | User Description |
| `CreatedByUser` | `CHAR(12)` | User Name |
| `ParkedByUser` | `CHAR(12)` | Name of User Who Parked This Document |
| `ParkedByUserName` | `CHAR(80)` | User Description |
| `AccountingDocumentCreationDate` | `DATS(8)` | Accounting Document Entry Date |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `ReversalReason` | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `ReversalReasonName` | `CHAR(40)` | Reversal Reason Name |
| `PlannedReversalDate` | `DATS(8)` | Planned Date for the Reverse Posting |
| `LedgerGroup` | `CHAR(4)` | Ledger Group |
