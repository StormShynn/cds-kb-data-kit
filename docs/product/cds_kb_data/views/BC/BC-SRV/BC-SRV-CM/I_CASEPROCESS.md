---
name: I_CASEPROCESS
description: "Case Process"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESS')/$value
semantic_en: "Case Process"
semantic_vi: "Case Process — CDS view giao diện dựa trên scmgproc."
keywords:
  - "case"
  - "process"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEPROCESS

**Case Process**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseProcess` | ✓ | |  | `process` | `CHAR(4)` | Permitted Process for Case Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseProcessText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPROCESS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEPROCESS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Process'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseProcess'
define view I_CaseProcess
  as select from scmgproc


  association [0..*] to I_CaseProcessText as _Text on $projection.CaseProcess = _Text.CaseProcess
{
        
        @ObjectModel.text.association: '_Text'
  key   scmgproc.process as CaseProcess,

         _Text
}
```
