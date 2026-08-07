---
name: I_ENGAGEMENTPROJECTATTRIBUTE
description: This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJECTATTRIBUTE

**This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `EngmntProjNameUprCase` |  | |  |  | `CHAR(40)` | Short Text(Upper case) |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerExternalID` |  | |  |  | `CHAR(20)` | Work Agreement External ID |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
