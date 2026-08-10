---
name: I_ENGMNTPROJSALESMARGINCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?"
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
# I_ENGMNTPROJSALESMARGINCUBE

**This CDS view provides the prerequisites for answering the following business questions: How many hours of work have been planned? How many hours have been recorded for projects? How many hours have been billed? What is the total planned cost of a project? What is the total planned revenue for a project? What is the total actual cost of a project? What is the total actual revenue of a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSALESMARGINCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `EngmtProjEmployeeIsStaffed` |  | |  |  | `CHAR(1)` | Confirmation of staffed Employee |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Controlling Area Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocumentStatus` |  | |  |  | `CHAR(2)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` |  |
| `BilledEffort` |  | |  |  | `QUAN(31)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PlndCostInCoCodeCrcy` |  | |  |  | `CURR(17)` |  |
| `PlndRevnInCoCodeCrcy` |  | |  |  | `CURR(17)` |  |
| `ActlRevnInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `ActlCostInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `PlndCostAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(17)` |  |
| `PlndRevenueAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(17)` |  |
| `ActlRevenueAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevnAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
