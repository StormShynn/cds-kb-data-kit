---
name: I_CASEINDIVIDUALSTATUS
description: Case Individual Status
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value
semantic_en: Case Individual Status
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_CASEINDIVIDUALSTATUS

**Case Individual Status**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseLowestStatus` |  | |  |  | `NUMC(2)` | Case: Lowest Status |
| `CaseHighestStatus` |  | |  |  | `NUMC(2)` | Case: Highest Status |
| `CaseEvent` |  | |  |  | `CHAR(32)` | Case: Event |
