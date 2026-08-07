---
name: I_PROJECTRESPONSIBLEPERSON
description: Project Responsible Person
app_component: PS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value
semantic_en: Project Responsible Person
tags:
  - PS
  - bo:project
  - component:PS
  - interface-view
  - project
  - metadata-only
---
# I_PROJECTRESPONSIBLEPERSON

**Project Responsible Person**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ResponsiblePersonIsBlocked` |  | |  |  | `CHAR(1)` | Blocked |
