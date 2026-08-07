---
name: I_PROJECTNETWORKBASICDATA
description: Project Network Basic Data
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value
semantic_en: Project Network Basic Data
keywords:
  - Project Network Basic Data
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - project
  - PS-ST
  - metadata-only
---
# I_PROJECTNETWORKBASICDATA

**Project Network Basic Data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Order Number |
| `ProjectNetworkInternalID` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `ProdAvailyCheckPlanningType` |  | |  |  | `CHAR(1)` | Basis for scheduling |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project definition |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProjectNetworkType` |  | |  |  | `CHAR(4)` | Order Type |
| `ProjectNetworkDescription` |  | |  |  | `CHAR(40)` | Order Description |
| `SuperiorProjectNetwork` |  | |  |  | `CHAR(12)` | Number of superior network |
| `SuperiorProjectNetworkIntID` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `SuperiorNtwkActivityInternalID` |  | |  |  | `NUMC(8)` | General counter for order |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Sales Order |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ProjectNetworkObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Basic Start Date |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Basic Finish Date |
| `ScheduledBasicStartDate` |  | |  |  | `DATS(8)` | Scheduled start |
| `ScheduledBasicEndDate` |  | |  |  | `DATS(8)` | Scheduled finish |
| `ActualStartDate` |  | |  |  | `DATS(8)` | Actual start date |
| `ActualEndDate` |  | |  |  | `DATS(8)` | Confirmed Order Finish Date |
| `PriorityCode` |  | |  |  | `CHAR(1)` | Order priority |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag |
| `ForecastedStartDate` |  | |  |  | `DATS(8)` | Forecast start date |
| `ForecastedEndDate` |  | |  |  | `DATS(8)` | Finish date (forecast) |
| `ScheduledForecastedStartDate` |  | |  |  | `DATS(8)` | Scheduled forecast start |
| `ScheduledForecastedEndDate` |  | |  |  | `DATS(8)` | Scheduled forecast finish |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Change Date for Order Master |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center for Basic Settlement |
| `ScheduledReleaseDate` |  | |  |  | `DATS(8)` | Scheduled Release Date |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible cost center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MRPController` |  | |  |  | `CHAR(3)` | MRP Controller for Order |
| `NetworkProfile` |  | |  |  | `CHAR(7)` | Network Profile |
| `ScheduledFcstdReleaseDate` |  | |  |  | `DATS(8)` | Scheduled release date (forecast) |
| `ActualReleasedDate` |  | |  |  | `DATS(8)` | Actual release date |
| `BasicSchedulingType` |  | |  |  | `CHAR(1)` | Scheduling type |
| `BasicSchedulingReductionLevel` |  | |  |  | `CHAR(1)` | Reduction Indicator for Scheduling |
| `ForecastSchedulingType` |  | |  |  | `CHAR(1)` | Scheduling type (forecast) |
| `FcstSchedulingReductionLevel` |  | |  |  | `CHAR(1)` | Reduction indicator for scheduling (forecast) |
| `OrdIsNotSchedldAutomatically` |  | |  |  | `CHAR(1)` | Indicator: Do not schedule automatically |
| `CapacityRqmtHasNotToBeCreated` |  | |  |  | `CHAR(1)` | Indicator: Do not Create Capacity Requirements |
| `SchedulingIsAllowingForBreaks` |  | |  |  | `CHAR(1)` | Indicator:  Scheduling Allowing for Breaks |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `Currency` |  | |  |  | `CUKY(5)` | Order Currency |
| `ResponsiblePlannerGroup` |  | |  |  | `CHAR(3)` | Responsible Planner Group or Department |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `JointVentureOriginalCostObject` |  | |  |  | `CHAR(1)` | JV original cost object |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PlannedTotalQty` |  | |  |  | `QUAN(13)` | Total Order Quantity |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `PlannedCostsCostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant for Planned Costs |
| `ActualCostsCostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant For Actual Costs |
| `OverheadCode` |  | |  |  | `CHAR(6)` | Overhead key |
| `PlannedCostsAreNotCalculated` |  | |  |  | `CHAR(1)` | Do not calculate planned costs for order |
| `OrderIsNotCostedAutomatically` |  | |  |  | `CHAR(1)` | Indicator: Do not cost automatically |
| `OrderCostsAreUpdated` |  | |  |  | `CHAR(1)` | Costs are updated |
| `ProjNtwkIsRlvtForMatlPlng` |  | |  |  | `CHAR(1)` | Effective for Materials Planning |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Changed At |
| `NetworkIsAccountAssigned` |  | |  |  | `CHAR(1)` |  |
| `ProcurementMode` |  | |  |  | `CHAR(1)` | Procurement Mode for Order master data |
| `StatusCombinationCode` |  | |  |  | `INT1(3)` | Status Combination |
