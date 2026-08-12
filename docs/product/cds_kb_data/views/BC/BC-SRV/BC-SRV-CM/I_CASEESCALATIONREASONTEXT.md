---
name: I_CASEESCALATIONREASONTEXT
description: "Case Escalation Reason Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value
semantic_en: "Case Escalation Reason Text"
semantic_vi: "Case Escalation Reason Text — CDS view giao diện dựa trên scmgattr_sescalt."
keywords:
  - "case"
  - "escalation"
  - "reason"
  - "text"
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
# I_CASEESCALATIONREASONTEXT

**Case Escalation Reason Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseEscalationReason` | ✓ | |  | `escal_reason` | `CHAR(2)` | Reason for Escalation |
| `CaseEscalationReasonName` |  | |  | `description` | `CHAR(60)` | Text Field of Length 60 |
| `_Language` | | ✓ | | | | |
| `_CaseEscReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseEscReason` | `I_CaseEscalationReason` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IESCALATIONTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Escalation Reason Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'CaseEscalationReasonName'
define view I_CaseEscalationReasonText
  as select from scmgattr_sescalt

  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_CaseEscalationReason as _CaseEscReason
   on $projection.CaseEscalationReason = _CaseEscReason.CaseEscalationReason
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgattr_sescalt.langu           as Language,
      @ObjectModel.foreignKey.association: '_CaseEscReason'
  key scmgattr_sescalt.escal_reason    as CaseEscalationReason,
      @Semantics.text: true
      scmgattr_sescalt.description     as CaseEscalationReasonName,

      _Language,
      _CaseEscReason


}
```
