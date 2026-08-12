---
name: I_CASEESCALATIONREASON
description: "Case Escalation Reason"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASON')/$value
semantic_en: "Case Escalation Reason"
semantic_vi: "Case Escalation Reason — CDS view giao diện dựa trên scmgattr_sescal."
keywords:
  - "case"
  - "escalation"
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
# I_CASEESCALATIONREASON

**Case Escalation Reason**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseEscalationReason` | ✓ | |  | `escal_reason` | `CHAR(2)` | Reason for Escalation |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseEscalationReasonText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEESCALATION'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Escalation Reason'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
//Begin of change by MISHRADH
//@ObjectModel.representativeKey:'CaseEscalationReasonName'
@ObjectModel.representativeKey:'CaseEscalationReasonName'
//End of change by MISHRADH
define view I_CaseEscalationReason
  as select from scmgattr_sescal

  association [0..*] to I_CaseEscalationReasonText as _Text on $projection.CaseEscalationReason = _Text.CaseEscalationReason

{
       @ObjectModel.text.association: '_Text'
  key  scmgattr_sescal.escal_reason as CaseEscalationReason,

       _Text
}
```
