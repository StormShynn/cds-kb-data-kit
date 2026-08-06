---
name: I_ENGAGEMENTPROJFINANCIALPLAN
description: This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJFINANCIALPLAN

**This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProjFinPlanUUID` | `RAW(16)` | Financial Plan UUID |
| `EngagementProjectUUID` | `RAW(16)` | Engagement Project UUID |
| `Currency` | `CUKY(5)` | Plan Currency |
| `UnitOfMeasure` | `UNIT(3)` | Unit of Measure for Display |
| `LastChangeDateTime` | `DEC(15)` | Commercial Project Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Changed By |
| `EngmntProjReviewYearPeriod` | `NUMC(7)` | Review Year Period |
| `EngagementProjectReviewStatus` | `CHAR(10)` | Forecast Status ID |
