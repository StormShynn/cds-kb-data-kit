---
name: I_ENGAGEMENTPROJECTSTAGETEXT
description: This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value
semantic_en: This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?
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
# I_ENGAGEMENTPROJECTSTAGETEXT

**This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `Language` | `LANG(1)` | Language Key |
| `EngagementProjectStageText` | `CHAR(40)` | Master Project: Stage Description |
