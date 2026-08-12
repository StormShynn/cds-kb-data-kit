---
name: I_CASEPRIORITYTEXT
description: "Case Priority Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITYTEXT')/$value
semantic_en: "Case Priority Text"
semantic_vi: "Case Priority Text — CDS view giao diện dựa trên scmgattr_priot."
keywords:
  - "case"
  - "priority"
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
# I_CASEPRIORITYTEXT

**Case Priority Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CasePriority` | ✓ | |  | `priority` | `NUMC(1)` | Priority |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CasePriorityName` |  | |  | `description` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_CasePriority` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CasePriority` | `I_CasePriority` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEPRIORITYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASPRIORITYTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Priority Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CasePriority'
define view I_CasePriorityText
  as select from scmgattr_priot

  association [0..1] to I_Language    as _Language     on $projection.Language = _Language.Language
  association [0..1] to I_CasePriority as _CasePriority on $projection.CasePriority = _CasePriority.CasePriority
{

      @ObjectModel.foreignKey.association: '_CasePriority'
  key scmgattr_priot.priority                as CasePriority,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgattr_priot.langu                   as Language,
      @Semantics.text: true
      scmgattr_priot.description             as CasePriorityName,
      _Language,
      _CasePriority



}
```
