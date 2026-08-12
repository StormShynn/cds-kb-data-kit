---
name: I_CITREPORTINGLINE
description: "CIT Reporting Line"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: yes
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
