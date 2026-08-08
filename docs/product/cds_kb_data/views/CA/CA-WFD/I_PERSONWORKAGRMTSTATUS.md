---
name: I_PERSONWORKAGRMTSTATUS
description: "This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PERSONWORKAGRMTSTATUS

**This view provides the prerequisites for answering the following business questions: When is the workagreement active or inactive?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAgreementStatus` |  | |  |  | `CHAR(1)` | Model S: Employment Status |
| `PersonWorkAgrmtAuthznGrpg` |  | |  |  | `CHAR(14)` | Organizational Key |
