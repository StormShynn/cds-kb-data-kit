---
name: I_CITREPORTINGLINETEXT
description: "CIT Reporting Line - Text"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINETEXT')/$value
semantic_en: "CIT Reporting Line - Text"
semantic_vi: "CIT Reporting Line - Text — CDS view giao diện dựa trên ficitc_rptglinet."
keywords:
  - "cit"
  - "reporting"
  - "line"
  - "text"
  - "report"
  - "version"
  - "language"
  - "description"
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
# I_CITREPORTINGLINETEXT

**CIT Reporting Line - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITReportVersion` | ✓ | |  | `reportversionid` | `CHAR(30)` | CIT Report Version |
| `CITReportingLine` | ✓ | |  | `reportinglineid` | `CHAR(30)` | CIT Report Line |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CITReportingLineDescription` |  | |  | `reportinglinename` | `CHAR(100)` | CIT Report Line Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGLINETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITRPTGLINET'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CIT Reporting Line - Text'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITReportingLineText
  as select from ficitc_rptglinet
{
  key reportversionid   as CITReportVersion,
  key reportinglineid   as CITReportingLine,
      @Semantics.language
  key language          as Language,
      @Semantics.text
      reportinglinename as CITReportingLineDescription
}
```
