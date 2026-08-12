---
name: C_PRAACCTGDOCUMENTHDRQRY
description: "PRA Accounting Document Header Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAACCTGDOCUMENTHDRQRY')/$value
semantic_en: "PRA Accounting Document Header Query"
semantic_vi: "PRA Accounting Document Header Query — CDS view tiêu dùng dựa trên I_PRAAccountingDocumentHeader."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "header"
  - "query"
  - "company"
  - "code"
  - "fiscal"
  - "period"
  - "description"
  - "origin"
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - consumption-view
  - document
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRAACCTGDOCUMENTHDRQRY

**PRA Accounting Document Header Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAACCTGDOCUMENTHDRQRY')/$value) |

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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAACCTGDOCUMENTHDRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAACCTGDOCUMENTHDRQRY')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Header Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVACCTGDOCHDRQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRAAcctgDocumentHdrQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAAccountingDocumentHeader
{
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  CompanyCode,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #ROWS
  FiscalPeriod,
  AccountingDocument,
  DocumentDescription,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT
  Origin,
  AccountingDocumentType,
  OriginReferenceDocument,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT
  AccountingDocumentStatus,
  AccountingDocumentIsReversed,
  AccountingDocumentCrossCoRef,
  PostingDate,
  DocumentDate,
  CreatedByUser,
  CreationDateTime,
  LastChangedByUser,
  ChangedDateTime,
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfItems,
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfRejectedItems,
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfDocuments
  ///* Associations */
  //_AccountingDocumentStatus,
  //_AccountingDocumentType,
  //_CompanyCode,
  //_Origin
}
```
