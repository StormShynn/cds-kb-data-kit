---
name: I_ENGAGEMENTPROJECTROLES
description: This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJECTROLES

**This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProject` | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectRole` | `CHAR(4)` | Role ID |
| `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectUUID` | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `EngagementProjectTeamUUID` | `RAW(16)` | Project Team UUID |
| `EngagementProjectTeamRoleUUID` | `RAW(16)` | Team Role UUID |
| `EngmtProjTeamMemberUUID` | `RAW(16)` | Team Member UUID |
| `EngagementProjectMemberUUID` | `RAW(16)` | Project Member UUID |
| `EmploymentInternalID` | `CHAR(60)` | Member ID |
| `BusinessPartnerType` | `CHAR(10)` | BP Role |
| `BusinessPartnerMemberType` | `CHAR(10)` | BP Role |
| `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `CompanyCode` | `CHAR(4)` | Company code for the project |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
