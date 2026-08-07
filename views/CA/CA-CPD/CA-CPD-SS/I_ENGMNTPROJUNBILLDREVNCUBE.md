---
name: I_ENGMNTPROJUNBILLDREVNCUBE
description: This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGMNTPROJUNBILLDREVNCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)? Which are the customer projects where billing is overdue?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJUNBILLDREVNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProjectManager` |  | |  |  | `CHAR(60)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `Material` |  | |  |  | `CHAR(40)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `UnbilldRevnAmountInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
