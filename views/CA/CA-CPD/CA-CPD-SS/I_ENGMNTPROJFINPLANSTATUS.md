---
name: I_ENGMNTPROJFINPLANSTATUS
description: This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value
semantic_en: This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?
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
# I_ENGMNTPROJFINPLANSTATUS

**This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProjectReviewStatus` | `CHAR(4)` | Status ID |
| `EngmntProjReviewStsIsInitial` | `CHAR(1)` | Initial Status |
| `EngmntProjReviewStsIsPerdStart` | `CHAR(1)` | Initial Status |
| `EngmntProjReviewStsIsPerdEnd` | `CHAR(1)` | Reverse Completion |
