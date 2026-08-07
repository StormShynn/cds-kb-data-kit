---
name: I_CASEESCALATIONREASONTEXT
description: Case Escalation Reason Text
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value
semantic_en: Case Escalation Reason Text
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:salesorder
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_CASEESCALATIONREASONTEXT

**Case Escalation Reason Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEESCALATIONREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseEscalationReasonName` |  | |  |  | `CHAR(60)` | Text Field of Length 60 |
