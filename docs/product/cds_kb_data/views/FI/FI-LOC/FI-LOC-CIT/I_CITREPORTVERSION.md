---
name: I_CITREPORTVERSION
description: "CIT Report Version"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTVERSION')/$value
semantic_en: "CIT Report Version"
semantic_vi: "CIT Report Version — CDS view giao diện dựa trên ficitc_rptvers."
keywords:
  - "cit"
  - "report"
  - "version"
  - "country"
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
# I_CITREPORTVERSION

**CIT Report Version**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTVERSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITReportVersion` | ✓ | |  | `reportversionid` | `CHAR(30)` | CIT Report Version |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTVERSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTVERSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITRPTVERS'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CIT Report Version'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITReportVersion as select from ficitc_rptvers {
  key reportversionid as CITReportVersion,
  country as Country
}
```
