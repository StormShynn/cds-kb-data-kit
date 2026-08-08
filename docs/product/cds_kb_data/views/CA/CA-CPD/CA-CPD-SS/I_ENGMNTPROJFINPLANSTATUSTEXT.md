---
name: I_ENGMNTPROJFINPLANSTATUSTEXT
description: "This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value
semantic_en: "This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGMNTPROJFINPLANSTATUSTEXT

**This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectReviewStatus` |  | |  |  | `CHAR(4)` | Status ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EngagementProjReviewStatusText` |  | |  |  | `CHAR(40)` | Status Description |
