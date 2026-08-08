---
name: I_CASEREASONSTEXT
description: "Case Reasons Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value
semantic_en: "Case Reasons Text"
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
# I_CASEREASONSTEXT

**Case Reasons Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEREASONSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CaseReasonName` |  | |  |  | `CHAR(60)` | Text Field of Length 60 |
