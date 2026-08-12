---
name: I_CITSETTLEMENTLOG
description: "CIT Settlements Reporting Log"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
