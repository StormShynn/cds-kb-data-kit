---
name: C_ENGMTPROJWORKANLYSQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# C_ENGMTPROJWORKANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngmtProjectServiceOrgName` |  | |  |  | `CHAR(40)` | Description of Organization Unit ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemCategoryName` |  | |  |  | `CHAR(20)` | Description |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectStageText` |  | |  |  | `CHAR(40)` | Master Project: Stage Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `SupplyEffortQty` |  | |  |  | `QUAN(15)` |  |
| `BilledEffort` |  | |  |  | `QUAN(31)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` |  |
| `UnstaffedEffort` |  | |  |  | `INT1(3)` |  |
| `PlndEffortUpToCurMnth` |  | |  |  | `QUAN(15)` |  |
