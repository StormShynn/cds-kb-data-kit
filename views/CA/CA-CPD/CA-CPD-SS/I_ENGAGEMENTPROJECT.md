---
name: I_ENGAGEMENTPROJECT
description: This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?
keywords:
  - Engagement Project
tags:
  - CA
  - account
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJECT

**This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `EngmntProjNameUprCase` |  | |  |  | `CHAR(40)` | Short Text(Upper case) |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `TimePostingIsRestricted` |  | |  |  | `CHAR(1)` | Restrict Unstaffed Posting |
| `RestrictedTimePosting` |  | |  |  | `CHAR(1)` | Restrict Unstaffed Posting |
| `ProjectBillingIsUsed` |  | |  |  | `CHAR(1)` | Project Invoicing Solution |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
