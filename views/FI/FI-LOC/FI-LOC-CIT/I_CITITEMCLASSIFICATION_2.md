---
name: I_CITITEMCLASSIFICATION_2
description: "CIT Item Classification"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value
semantic_en: "CIT Item Classification"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_CITITEMCLASSIFICATION_2

**CIT Item Classification**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassificationUUID` |  | |  |  | `RAW(16)` | Global Unique ID for table |
| `CITClassificationUUID` |  | |  |  | `RAW(16)` | Global Unique ID for table |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | Six-Character General Ledger Line Item |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | Six-Character General Ledger Line Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CITReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CITReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  |  | `CHAR(40)` | CIT Classification Code |
| `CITClassificationCode` |  | |  |  | `CHAR(40)` | CIT Classification Code |
| `CITItemAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | CIT Amount |
| `CITItemAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | CIT Amount |
| `Currency` |  | |  |  | `CUKY(5)` | CIT Currency |
| `Currency` |  | |  |  | `CUKY(5)` | CIT Currency |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `BalanceCarryforwardStatus` |  | |  |  | `CHAR(1)` | Corporate Incom Tax Balance Carry Forward Item |
| `BalanceCarryforwardStatus` |  | |  |  | `CHAR(1)` | Corporate Incom Tax Balance Carry Forward Item |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Date and Time of Creation |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Date and Time of Creation |
| `CreatedByUserName` |  | |  |  | `CHAR(12)` | Created By |
| `CreatedByUserName` |  | |  |  | `CHAR(12)` | Created By |
| `ChangedDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
| `ChangedDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
| `LastChangedByUserName` |  | |  |  | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangedByUserName` |  | |  |  | `CHAR(12)` | User Who Last Changed the Business Document |
