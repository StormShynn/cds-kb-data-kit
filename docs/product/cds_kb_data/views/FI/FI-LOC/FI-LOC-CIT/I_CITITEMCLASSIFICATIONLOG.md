---
name: I_CITITEMCLASSIFICATIONLOG
description: "CIT Clsf Item Reporting Log"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value
semantic_en: "CIT Clsf Item Reporting Log"
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
# I_CITITEMCLASSIFICATIONLOG

**CIT Clsf Item Reporting Log**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` |  | |  |  | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` |  | |  |  | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` |  | |  |  | `NUMC(8)` | Report Run ID |
| `CITClassificationUUID` |  | |  |  | `RAW(16)` | Global Unique ID for table |
| `CITReportingLine` |  | |  |  | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` |  | |  |  | `CHAR(10)` | CIT Report Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | Six-Character General Ledger Line Item |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  |  | `CHAR(40)` | CIT Classification Code |
| `CITItemAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | CIT Amount |
| `Currency` |  | |  |  | `CUKY(5)` | CIT Currency |
| `CITReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CITReportVersion` |  | |  |  | `CHAR(30)` | CIT Report Version |
| `ItemSignIsReversed` |  | |  |  | `CHAR(1)` | Change Item Sign in Reporting |
