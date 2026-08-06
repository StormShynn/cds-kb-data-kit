---
name: I_ENGMNTPROJECTROLEASSGMT
description: This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Role in Engagement Project. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value
semantic_en: This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Role in Engagement Project. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?
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
# I_ENGMNTPROJECTROLEASSGMT

**This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Role in Engagement Project. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProject` | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectTeamRole` | `CHAR(15)` | Role Type |
| `CreationDateTime` | `DEC(15)` | Timestamp of Object Creation |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `ObjectName` | `CHAR(40)` | Name of Role Type |
| `EngagementProjectUUID` | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectTeamRoleUUID` | `RAW(16)` | Team Role UUID |
| `EngmtProjTeamMemberUUID` | `RAW(16)` | Team Member UUID |
| `EngagementProjectMemberUUID` | `RAW(16)` | Project Member UUID |
| `BusinessPartnerUUID` | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerFullName` | `CHAR(80)` | Full Name |
| `BusinessPartnerType` | `CHAR(4)` | Business Partner Type |
| `BusinessUser` | `CHAR(12)` | User ID |
| `PersonExternalID` | `CHAR(60)` | Identification Number |
