---
name: I_RSHPROJECTASSIGNMENTDAILYHRS
description: "This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?"
app_component: CA-RSH-PS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?"
tags:
  - CA
  - bo:plant
  - CA-RSH
  - CA-RSH-PS
  - component:CA-RSH-PS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_RSHPROJECTASSIGNMENTDAILYHRS

**This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?**

| Property | Value |
|---|---|
| App Component | `CA-RSH-PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjAssignmentPerDayUUID` |  | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ProjAssignmentUUID` |  | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ProjAssignmentDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `ProjAssignmentDuration` |  | |  |  | `QUAN(15)` | Assignment Duration |
| `ProjAssignmentDurationUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ProjAssignmentDurationInHours` |  | |  |  | `DEC(15)` | Project Assignment Duration in Hours |
