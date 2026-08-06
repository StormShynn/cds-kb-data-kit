---
name: I_ENGMNTPROJSTAFFINGANLYSCUBE
description: This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role.
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# I_ENGMNTPROJSTAFFINGANLYSCUBE

**This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProject` | `CHAR(40)` | Engagement Project ID |
| `FiscalYearPeriod` | `CHAR(7)` |  |
| `EngagementProjectResource` | `CHAR(40)` | Resource ID |
| `BillingControlCategory` | `CHAR(8)` |  |
| `FiscalPeriod` | `NUMC(3)` | Period |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ControllingArea` | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` | `CHAR(4)` | Company code for the project |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(20)` | Organization Unit Key |
| `Customer` | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` | `CHAR(12)` |  |
| `ProjectManagerExternalID` | `CHAR(60)` |  |
| `ProjectManagerName` | `CHAR(80)` |  |
| `ProjectManagerWorkAgreement` | `NUMC(8)` |  |
| `EngagementProjectResourceType` | `CHAR(4)` | Resource Type ID |
| `BillingControlCategoryText` | `CHAR(60)` | Short Text for Fixed Values |
| `IsMyProject` | `CHAR(1)` |  |
| `UnitOfMeasure` | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` | `QUAN(15)` | Total Quantity |
| `PlndEffortUpToCurPerd` | `QUAN(15)` | Total Quantity |
| `EngmntProjStaffedEffort` | `QUAN(15)` | Total Quantity |
| `StaffedEffortUpToCurPerdQty` | `QUAN(15)` | Total Quantity |
| `ActlEffortQty` | `QUAN(15)` |  |
| `TotalRecordedHours` | `QUAN(15)` |  |
| `TotalApprovedHours` | `QUAN(15)` |  |
| `TotRecHrsSentForApproval` | `QUAN(15)` |  |
