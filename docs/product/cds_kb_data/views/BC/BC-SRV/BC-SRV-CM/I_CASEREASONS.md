---
name: I_CASEREASONS
description: "Case Reasons"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONS')/$value
semantic_en: "Case Reasons"
semantic_vi: "Case Reasons — CDS view giao diện dựa trên scmgattr_reason."
keywords:
  - "case"
  - "reasons"
  - "type"
  - "reason"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:salesorder
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEREASONS

**Case Reasons**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseReason` | ✓ | |  | `reason_code` | `CHAR(4)` | Reason for Case |
| `_CaseType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_Casetypes` | [0..1] |
| `_Text` | `I_CaseReasonsText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEREASONS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Reasons'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseReason'
define view I_CaseReasons
  as select from scmgattr_reason


  association [0..1] to I_Casetypes     as _CaseType on  $projection.CaseType = _CaseType.CaseType

  association [0..*] to I_CaseReasonsText as _Text     on  $projection.CaseType   = _Text.CaseType
                                                      and $projection.CaseReason = _Text.CaseReason

{
      @ObjectModel.foreignKey.association: '_CaseType'
  key scmgattr_reason.case_type    as CaseType,
      @ObjectModel.text.association: '_Text'
  key scmgattr_reason.reason_code  as CaseReason,
      _CaseType,
      _Text

}
```
