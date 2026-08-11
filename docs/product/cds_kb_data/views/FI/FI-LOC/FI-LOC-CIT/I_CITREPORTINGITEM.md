---
name: I_CITREPORTINGITEM
description: "CIT Reporting Item"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value
semantic_en: "CIT Reporting Item"
semantic_vi: "CIT Reporting Item — CDS view giao diện dựa trên ficitc_rptgitem."
keywords:
  - "cit"
  - "reporting"
  - "item"
  - "report"
  - "version"
  - "line"
  - "ledger"
  - "corporate"
  - "income"
  - "hierarchy"
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
# I_CITREPORTINGITEM

**CIT Reporting Item**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITReportVersion` | ✓ | |  | `reportversionid` | `CHAR(30)` | CIT Report Version |
| `CITReportingLine` | ✓ | |  | `reportinglineid` | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` | ✓ | |  | `reportingitemid` | `CHAR(10)` | CIT Report Item |
| `Ledger` |  | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CorporateIncomeTaxHierarchy` |  | |  | `hierarchy` | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  | `classificationcode` | `CHAR(40)` | CIT Classification Code |
| `BRFApplication` |  | |  | `brfapplicationname` | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  | `settlementcode` | `CHAR(30)` | CIT Settlement Code |
| `ItemSignIsReversed` |  | |  | `itemchangesign` | `CHAR(1)` | Change Item Sign in Reporting |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CITReportingItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITRPTGITEM'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CIT Reporting Item'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.sapObjectNodeType.name: 'CITReportingItem'
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITReportingItem
  as select from ficitc_rptgitem

  association [1..1] to E_CITReportingItem as _Extension //do not expose this association in the projection list of the view
  on  $projection.CITReportVersion = _Extension.CITReportVersion
  and $projection.CITReportingLine = _Extension.CITReportingLine
  and $projection.CITReportingItem = _Extension.CITReportingItem

{
  key reportversionid    as CITReportVersion,
  key reportinglineid    as CITReportingLine,
  key reportingitemid    as CITReportingItem,
      ledger             as Ledger,
      hierarchy          as CorporateIncomeTaxHierarchy,
      classificationcode as CITClassificationCode,
      brfapplicationname as BRFApplication,
      settlementcode     as CITSettlementCode,
      itemchangesign     as ItemSignIsReversed
}
```
