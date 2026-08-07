---
name: I_PROJECTAPPLICANT
description: "Project Applicant"
app_component: PS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value
semantic_en: "Project Applicant"
tags:
  - PS
  - bo:project
  - component:PS
  - interface-view
  - project
  - metadata-only
---
# I_PROJECTAPPLICANT

**Project Applicant**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `ProjectApplicantIsBlocked` |  | |  |  | `CHAR(1)` | Blocked |
