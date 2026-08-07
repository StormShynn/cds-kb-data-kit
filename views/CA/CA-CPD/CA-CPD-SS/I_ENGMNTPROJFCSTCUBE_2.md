---
name: I_ENGMNTPROJFCSTCUBE_2
description: This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?
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
# I_ENGMNTPROJFCSTCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `EngagementProjectReviewStatus` |  | |  |  | `CHAR(10)` | Forecast Status ID |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Work Package |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `WorkPackageStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Role / Expense |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  |  | `CURR(17)` | Planned Cost |
| `ActlCostAmt` |  | |  |  | `CURR(23)` | Actual Cost |
| `SupplyEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `WorkPackageUnitUoM` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `AddlResourcePlannedQuantity` |  | |  |  | `QUAN(15)` |  |
| `PlanUnitQuantity` |  | |  |  | `QUAN(15)` | Planned Effort |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` | Actual Effort |
| `AddlResourceActualQuantity` |  | |  |  | `QUAN(23)` |  |
| `ActualUnitQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` |  | |  |  | `CURR(17)` |  |
| `ActualPlanDeviationEffort` |  | |  |  | `QUAN(15)` |  |
| `EngmntProjectDeliveryOrg` |  | |  |  | `CHAR(5)` |  |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `UnitCompltnRateInPercent` |  | |  |  | `DEC(30)` | Completion Rate Percent |
| `ResourceIsOfUnitWorkPackage` |  | |  |  | `QUAN(15)` | Planned Effort |
| `RsceIsServiceBasedWorkPackage` |  | |  |  | `INT1(3)` |  |
| `WorkPackageType` |  | |  |  | `CHAR(1)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectForecastYear` |  | |  |  | `CHAR(4)` |  |
| `EngagementProjectForecastMonth` |  | |  |  | `CHAR(2)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(15)` | Net Value of the Document Item in Document Currency |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
