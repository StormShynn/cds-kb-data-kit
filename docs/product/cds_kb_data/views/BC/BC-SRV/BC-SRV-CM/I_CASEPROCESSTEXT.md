---
name: I_CASEPROCESSTEXT
description: "Case Process Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESSTEXT')/$value
semantic_en: "Case Process Text"
semantic_vi: "Case Process Text — CDS view giao diện dựa trên scmgproct."
keywords:
  - "case"
  - "process"
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
# I_CASEPROCESSTEXT

**Case Process Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseProcess` | ✓ | |  | `process` | `CHAR(4)` | Permitted Process for Case Type |
| `CaseProcessName` |  | |  | `description` | `CHAR(40)` | Case: Process Short Text |
| `_Language` | | ✓ | | | | |
| `_CaseProcess` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseProcess` | `I_CaseProcess` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEPROCESSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Process Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseProcess'
define view I_CaseProcessText
  as select from scmgproct

  association [0..1] to I_Language as _Language    on $projection.Language = _Language.Language
  association [0..1] to I_CaseProcess   as _CaseProcess on $projection.CaseProcess = _CaseProcess.CaseProcess
{
         @ObjectModel.foreignKey.association: '_Language'
         @Semantics.language: true
  key    scmgproct.langu        as Language,
         @ObjectModel.foreignKey.association: '_CaseProcess'
  key    scmgproct.process      as CaseProcess,
         scmgproct.description  as CaseProcessName,
        _Language,
         _CaseProcess
}
```
