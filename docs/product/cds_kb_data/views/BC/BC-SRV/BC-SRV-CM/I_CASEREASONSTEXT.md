---
name: I_CASEREASONSTEXT
description: "Case Reasons Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value
semantic_en: "Case Reasons Text"
semantic_vi: "Case Reasons Text — CDS view giao diện dựa trên scmgattr_reasont."
keywords:
  - "case"
  - "reasons"
  - "text"
  - "type"
  - "reason"
  - "language"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:salesorder
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEREASONSTEXT

**Case Reasons Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseReason` | ✓ | |  | `reason_code` | `CHAR(4)` | Reason for Case |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseReasonName` |  | |  | `description` | `CHAR(60)` | Text Field of Length 60 |
| `_CaseTypes` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_CaseReasons` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseTypes` | `I_Casetypes` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_CaseReasons` | `I_CaseReasons` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEREASONSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Reasons Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseReason'
define view I_CaseReasonsText
  as select from scmgattr_reasont


  association [0..1] to I_Casetypes    as _CaseTypes   on $projection.CaseType = _CaseTypes.CaseType

  association [0..1] to I_Language      as _Language    on $projection.Language = _Language.Language

  association [0..*] to I_CaseReasons as _CaseReasons on $projection.CaseReason = _CaseReasons.CaseReason
{
       @ObjectModel.foreignKey.association: '_CaseTypes'
  key  scmgattr_reasont.case_type              as CaseType,
       @ObjectModel.foreignKey.association: '_CaseReasons'
  key  scmgattr_reasont.reason_code            as CaseReason,

       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  langu                                   as Language,
       @Semantics.text: true
       description                             as CaseReasonName,

       _CaseTypes,
       _Language,
       _CaseReasons

}
```
