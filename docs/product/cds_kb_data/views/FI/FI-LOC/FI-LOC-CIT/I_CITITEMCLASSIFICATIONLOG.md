---
name: I_CITITEMCLASSIFICATIONLOG
description: "CIT Clsf Item Reporting Log"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value
semantic_en: "CIT Clsf Item Reporting Log"
semantic_vi: "CIT Clsf Item Reporting Log — CDS view giao diện dựa trên ficitd_itmclfnlg."
keywords:
  - "cit"
  - "clsf"
  - "item"
  - "reporting"
  - "log"
  - "statry"
  - "rptg"
  - "entity"
  - "category"
  - "classification"
  - "line"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_CITITEMCLASSIFICATIONLOG

**CIT Clsf Item Reporting Log**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` | ✓ | |  | `statryrptgentity` | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` | ✓ | |  | `statryrptcategory` | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` | ✓ | |  | `statryrptrunid` | `NUMC(8)` | Report Run ID |
| `CITClassificationUUID` | ✓ | |  | `citclassificationuuid` | `RAW(16)` | Global Unique ID for table |
| `CITReportingLine` | ✓ | |  | `citreportingline` | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` | ✓ | |  | `citreportingitem` | `CHAR(10)` | CIT Report Item |
| `AccountingDocument` |  | |  | `accountingdocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  | `fiscalyear` | `NUMC(4)` | Fiscal Year |
| `CompanyCode` |  | |  | `companycode` | `CHAR(4)` | Company Code |
| `LedgerGLLineItem` |  | |  | `ledgergllineitem` | `CHAR(6)` | Six-Character General Ledger Line Item |
| `SourceLedger` |  | |  | `sourceledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `Ledger` |  | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CorporateIncomeTaxHierarchy` |  | |  | `corporateincometaxhierarchy` | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  | `citclassificationcode` | `CHAR(40)` | CIT Classification Code |
| `CITItemAmountInDisplayCurrency` |  | |  | `cititemamountindisplaycurrency` | `CURR(23)` | CIT Amount |
| `Currency` |  | |  | `currency` | `CUKY(5)` | CIT Currency |
| `CITReportingDate` |  | |  | `citreportingdate` | `DATS(8)` | Reporting Date |
| `CITReportVersion` |  | |  | `citreportversion` | `CHAR(30)` | CIT Report Version |
| `ItemSignIsReversed` |  | |  | `itemsignisreversed` | `CHAR(1)` | Change Item Sign in Reporting |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONLOG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITITEMCLFNLG'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'CITItemClassificationLog'
@EndUserText.label: 'CIT Clsf Item Reporting Log'

define view I_CITItemClassificationLog
  as select from ficitd_itmclfnlg

{

  key statryrptgentity               as StatryRptgEntity,
  key statryrptcategory              as StatryRptCategory,
  key statryrptrunid                 as StatryRptRunID,
  key citclassificationuuid          as CITClassificationUUID,
  key citreportingline               as CITReportingLine,
  key citreportingitem               as CITReportingItem,
      accountingdocument             as AccountingDocument,
      fiscalyear                     as FiscalYear,
      companycode                    as CompanyCode,
      ledgergllineitem               as LedgerGLLineItem,
      sourceledger                   as SourceLedger,
      ledger                         as Ledger,
      corporateincometaxhierarchy    as CorporateIncomeTaxHierarchy,
      citclassificationcode          as CITClassificationCode,
      cititemamountindisplaycurrency as CITItemAmountInDisplayCurrency,
      currency                       as Currency,
      citreportingdate               as CITReportingDate,
      citreportversion               as CITReportVersion,
      itemsignisreversed             as ItemSignIsReversed
}
```
