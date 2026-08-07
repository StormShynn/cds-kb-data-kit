---
name: C_ENGAGEMENTPROJECTROLES
description: Project Roles restriction in BADI
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value
semantic_en: Project Roles restriction in BADI
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - project
  - metadata-only
---
# C_ENGAGEMENTPROJECTROLES

**Project Roles restriction in BADI**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectTeamRole` |  | |  |  | `CHAR(4)` | Role ID |
| `BusinessUser` |  | |  |  | `CHAR(12)` | User ID |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EmploymentInternalID` |  | |  |  | `CHAR(60)` | Member ID |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
