---
name: I_CASEPRIORITY
description: "Case Priority"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITY')/$value
semantic_en: "Case Priority"
semantic_vi: "Case Priority — CDS view giao diện dựa trên scmgattr_prio."
keywords:
  - "case"
  - "priority"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEPRIORITY

**Case Priority**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CasePriority` | ✓ | |  | `priority` | `NUMC(1)` | Priority |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CasePriorityText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEPRIORITY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Priority'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CasePriority'
define view I_CasePriority
  as select from scmgattr_prio

  association [0..*] to I_CasePriorityText as _Text on $projection.CasePriority = _Text.CasePriority

{
      @ObjectModel.text.association: '_Text'
  key scmgattr_prio.priority as CasePriority,

      _Text

}
```
