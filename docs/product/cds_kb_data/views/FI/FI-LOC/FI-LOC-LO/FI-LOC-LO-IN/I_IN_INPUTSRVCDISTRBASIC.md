---
name: I_IN_INPUTSRVCDISTRBASIC
description: "This CDS view provides the complete list of ISD invoices and it's credit note distribution data. What are the ISD invoices distributed under the company code? What are the input service distribution business places where input tax credit is distributed for an ISD invoice? What are the taxes applied for ISD invoices? When is the ISD invoice posted in system? For which ISD invoice a credit note is created and distributed?"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value
semantic_en: "This CDS view provides the complete list of ISD invoices and it's credit note distribution data. What are the ISD invoices distributed under the company code? What are the input service distribution business places where input tax credit is distributed for an ISD invoice? What are the taxes applied for ISD invoices? When is the ISD invoice posted in system? For which ISD invoice a credit note is created and distributed?"
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
# I_IN_INPUTSRVCDISTRBASIC

**This CDS view provides the complete list of ISD invoices and it's credit note distribution data. What are the ISD invoices distributed under the company code? What are the input service distribution business places where input tax credit is distributed for an ISD invoice? What are the taxes applied for ISD invoices? When is the ISD invoice posted in system? For which ISD invoice a credit note is created and distributed?**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InputServiceDistrBusPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `ReceivingBusPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `CntrlGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `StateGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `UnionTerritoryGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `IntegratedGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `InputServiceDistrTaxCESS` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceCentralGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceStateGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceUnionGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceIntegratedGST` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceCESS` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ReceivingAccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `IN_HSNOrSACCode` |  | |  |  | `CHAR(16)` | HSN or SAC Code |
| `TaxIsNotDeductible` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `IN_InptSrvcDistrDocType` |  | |  |  | `NUMC(2)` | GST IN: Type of Document (Invoice/Credit Memo) |
| `IN_InptSrvcDistrInvc` |  | |  |  | `CHAR(10)` | ISD Invoice Document Number |
| `IN_InptSrvcDistrInvcFsclYr` |  | |  |  | `NUMC(4)` | ISD Invoice Fiscal Year |
