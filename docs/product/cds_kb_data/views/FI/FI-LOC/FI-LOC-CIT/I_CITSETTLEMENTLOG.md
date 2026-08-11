---
name: I_CITSETTLEMENTLOG
description: "CIT Settlements Reporting Log"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value
semantic_en: "CIT Settlements Reporting Log"
semantic_vi: "CIT Settlements Reporting Log — CDS view giao diện dựa trên ficitd_settlmtlg."
keywords:
  - "cit"
  - "settlements"
  - "reporting"
  - "log"
  - "statry"
  - "rptg"
  - "entity"
  - "category"
  - "settlement"
  - "line"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:companycode
---
# I_CITSETTLEMENTLOG

**CIT Settlements Reporting Log**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` | ✓ | |  | `statryrptgentity` | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` | ✓ | |  | `statryrptcategory` | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` | ✓ | |  | `statryrptrunid` | `NUMC(8)` | Report Run ID |
| `CITSettlementUUID` | ✓ | |  | `uuid` | `RAW(16)` | Global Unique ID for table |
| `CITReportingLine` |  | |  | `reportinglineid` | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` |  | |  | `reportingitemid` | `CHAR(10)` | CIT Report Item |
| `CITReportVersion` |  | |  | `reportversionid` | `CHAR(30)` | CIT Report Version |
| `BRFApplication` |  | |  | `brfapplicationname` | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  | `settlementcode` | `CHAR(30)` | CIT Settlement Code |
| `CITItemAmountInDisplayCurrency` |  | |  | `amount` | `CURR(23)` | CIT Amount |
| `Currency` |  | |  | `currency` | `CUKY(5)` | CIT Currency |
| `ItemSignIsReversed` |  | |  | `itemsignisreversed` | `CHAR(1)` | Change Item Sign in Reporting |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTLOG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITSETTLMTLG'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.sapObjectNodeType.name: 'CITSettlementLog'
@EndUserText.label: 'CIT Settlements Reporting Log'

define view I_CITSettlementLog
  as select from ficitd_settlmtlg

{
  key statryrptgentity   as StatryRptgEntity,
  key statryrptcategory  as StatryRptCategory,
  key statryrptrunid     as StatryRptRunID,
  key uuid               as CITSettlementUUID,            
      reportinglineid    as CITReportingLine,
      reportingitemid    as CITReportingItem,
      reportversionid    as CITReportVersion,
      brfapplicationname as BRFApplication,
      settlementcode     as CITSettlementCode,
      amount             as CITItemAmountInDisplayCurrency,
      currency           as Currency,
      itemsignisreversed as ItemSignIsReversed
}
```
