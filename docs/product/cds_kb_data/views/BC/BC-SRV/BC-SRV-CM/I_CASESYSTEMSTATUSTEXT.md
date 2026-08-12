---
name: I_CASESYSTEMSTATUSTEXT
description: "Case System Status Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESYSTEMSTATUSTEXT')/$value
semantic_en: "Case System Status Text"
semantic_vi: "Case System Status Text — CDS view giao diện dựa trên scmgstatt."
keywords:
  - "case"
  - "system"
  - "status"
  - "text"
  - "language"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASESYSTEMSTATUSTEXT

**Case System Status Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESYSTEMSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseSystemStatus` | ✓ | |  | `stat_para` | `CHAR(3)` | Case: System Status |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseSystemStatusName` |  | |  | `stat_para_descr` | `CHAR(40)` | Case: System Status Description |
| `_Language` | | ✓ | | | | |
| `_SystemStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SystemStatus` | `I_CaseSystemStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESYSTEMSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESYSTEMSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASESSTATUSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case System Status Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseSystemStatus'
define view I_CaseSystemStatusText
  as select from scmgstatt

  association [0..1] to I_Language as _Language     on $projection.Language = _Language.Language
  association [0..1] to I_CaseSystemStatus   as _SystemStatus on $projection.CaseSystemStatus = _SystemStatus.CaseSystemStatus
{
      @ObjectModel.foreignKey.association: '_SystemStatus'
  key scmgstatt.stat_para               as CaseSystemStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgstatt.langu                   as Language,

      @Semantics.text: true
      stat_para_descr                   as CaseSystemStatusName,
      _Language,
      _SystemStatus

}
```
