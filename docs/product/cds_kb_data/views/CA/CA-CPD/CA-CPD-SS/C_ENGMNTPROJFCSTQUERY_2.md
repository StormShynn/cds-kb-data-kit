---
name: C_ENGMNTPROJFCSTQUERY_2
description: "This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value
semantic_en: "This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?"
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
# C_ENGMNTPROJFCSTQUERY_2

**This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngmtProjectServiceOrgName` |  | |  |  | `CHAR(40)` | Description of Organization Unit ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Work Package |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `WorkPackageType` |  | |  |  | `CHAR(1)` |  |
| `WorkPackageStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  |  | `DATS(8)` | End Date |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Role / Expense |
| `EngagementProjResourceText` |  | |  |  | `CHAR(40)` | Resource Description |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item |
| `WorkItemName` |  | |  |  | `CHAR(40)` | Work Item Name |
| `EngmntProjectDeliveryOrg` |  | |  |  | `CHAR(5)` |  |
| `EngagementProjDeliveryOrgName` |  | |  |  | `CHAR(40)` | Description of Organization Unit ID |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `WorkPackageUnitUoM` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `EngagementProjectForecastYear` |  | |  |  | `CHAR(4)` |  |
| `EngagementProjectForecastMonth` |  | |  |  | `CHAR(2)` |  |
| `EngagementProjectReviewStatus` |  | |  |  | `CHAR(10)` | Forecast Status ID |
| `EngagementProjReviewStatusText` |  | |  |  | `CHAR(40)` | Status Description |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `PlndCostAmt` |  | |  |  | `CURR(17)` | Planned Cost |
| `PlannedEffortCostAmt` |  | |  |  | `CURR(17)` | Planned Cost |
| `AddlResourcePlannedCostAmount` |  | |  |  | `CURR(17)` | Planned Cost |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `AddlResourcePlannedQuantity` |  | |  |  | `QUAN(15)` | Planned Effort |
| `PlanUnitQuantity` |  | |  |  | `QUAN(15)` | Planned Effort |
| `SupplyEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` |  | |  |  | `CURR(17)` | Cost Deviation |
| `ActualPlanDeviationEffort` |  | |  |  | `QUAN(15)` | Effort Deviation |
| `AddlRsceActlPlanDeviationQty` |  | |  |  | `QUAN(15)` | Effort Deviation |
| `ActualCostUpToFsclYrPerd` |  | |  |  | `CURR(23)` | Actual Cost |
| `ActualEffortUpToFsclYrPerd` |  | |  |  | `QUAN(23)` | Actual Effort |
| `AddlResourceActualQuantity` |  | |  |  | `QUAN(23)` | Actual Effort |
| `ActualUnitQty` |  | |  |  | `QUAN(23)` | Actual Effort |
| `PlannedExpenseCost` |  | |  |  | `CURR(18)` |  |
| `ActlExpenseCostUpToFsclYrPerd` |  | |  |  | `CURR(23)` | Actual Cost |
| `ActualPlanDeviationExpnCost` |  | |  |  | `CURR(17)` |  |
| `PlannedCostRate` |  | |  |  | `INT1(3)` |  |
| `AddlResourcePlannedCostRate` |  | |  |  | `INT1(3)` |  |
| `CostVariance` |  | |  |  | `INT1(3)` |  |
| `EffortVariance` |  | |  |  | `INT1(3)` |  |
| `AddlRsceVarcOfQty` |  | |  |  | `INT1(3)` |  |
| `CalculatedAdjustedRmngCost` |  | |  |  | `INT1(3)` |  |
| `CalculatedAdjustedRmngEffort` |  | |  |  | `INT1(3)` |  |
| `AddlRsceCalcdEstToCmpltQty` |  | |  |  | `INT1(3)` |  |
| `CalcdAdjustedRmngExpnCost` |  | |  |  | `INT1(3)` |  |
| `EstimateToCompleteExpenseCost` |  | |  |  | `INT1(3)` |  |
| `EstimateToCompleteEffort` |  | |  |  | `INT1(3)` |  |
| `AddlRsceEstToCmpltQty` |  | |  |  | `INT1(3)` |  |
| `EstimateToCompleteEffortCost` |  | |  |  | `INT1(3)` |  |
| `AddlRsceEstToCmpltCostAmount` |  | |  |  | `INT1(3)` |  |
| `EstimateToCompleteCostAmount` |  | |  |  | `INT1(3)` |  |
| `EstimateAtCompletionEffort` |  | |  |  | `INT1(3)` |  |
| `AddlRsceEstAtCompltnQty` |  | |  |  | `INT1(3)` |  |
| `EstimateAtCompletionCost` |  | |  |  | `INT1(3)` |  |
| `PercentageOfCompletionEffort` |  | |  |  | `INT1(3)` |  |
| `UnitCompltnRateInPercent` |  | |  |  | `INT1(3)` |  |
| `DerivedEstAtCompltnCost` |  | |  |  | `INT1(3)` |  |
| `PercentageOfCompletionCost` |  | |  |  | `INT1(3)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(15)` | Net Value of the Document Item in Document Currency |
