---
name: I_CITREPORTINGLINE
description: "CIT Reporting Line"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINE')/$value
semantic_en: "CIT Reporting Line"
semantic_vi: "CIT Reporting Line — CDS view giao diện dựa trên ficitc_rptgline."
keywords:
  - "CIT Reporting Line"
  - "cit"
  - "reporting"
  - "line"
  - "report"
  - "version"
  - "ledger"
  - "corporate"
  - "income"
  - "hierarchy"
  - "classification"
  - "code"
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
# I_CITREPORTINGLINE

**CIT Reporting Line**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITReportVersion` | ✓ | |  | `reportversionid` | `CHAR(30)` | CIT Report Version |
| `CITReportingLine` | ✓ | |  | `reportinglineid` | `CHAR(30)` | CIT Report Line |
| `Ledger` |  | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CorporateIncomeTaxHierarchy` |  | |  | `hierarchy` | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  | `classificationcode` | `CHAR(40)` | CIT Classification Code |
| `BRFApplication` |  | |  | `brfapplicationname` | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  | `settlementcode` | `CHAR(30)` | CIT Settlement Code |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CITReportingLine` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITRPTGLINE'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CIT Reporting Line'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.sapObjectNodeType.name: 'CITReportingLine'
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITReportingLine
  as select from ficitc_rptgline
  
  association [1..1] to E_CITReportingLine as _Extension //do not expose this association in the projection list of the view
  on $projection.CITReportVersion = _Extension.CITReportVersion 
 and $projection.CITReportingLine = _Extension.CITReportingLine
  
{
  key reportversionid    as CITReportVersion,
  key reportinglineid    as CITReportingLine,
      ledger             as Ledger,
      hierarchy          as CorporateIncomeTaxHierarchy,
      classificationcode as CITClassificationCode,
      brfapplicationname as BRFApplication,
      settlementcode     as CITSettlementCode
      
}
```
