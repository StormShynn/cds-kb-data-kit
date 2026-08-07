---
name: I_WBSELEMENTDATA
description: WBSElement Data
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value
semantic_en: WBSElement Data
tags:
  - PPM
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - metadata-only
---
# I_WBSELEMENTDATA

**WBSElement Data**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementShortID` |  | |  |  | `CHAR(16)` | WBS element short identification |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FreeDefinedTableFieldSemantic` |  | |  |  | `CHAR(7)` | Key word ID for user-defined fields |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Calendar |
| `PriorityCode` |  | |  |  | `CHAR(1)` | Priority |
| `Currency` |  | |  |  | `CUKY(5)` | WBS element currency |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost center to which costs are actually posted |
| `RequestingCostCenter` |  | |  |  | `CHAR(10)` | Requesting cost center |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `WBSElementIsBillingElement` |  | |  |  | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  |  | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `WBSIsAccountAssignmentElement` |  | |  |  | `CHAR(1)` | Indicator: Account assignment element |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `WBSElementIsPlanningElement` |  | |  |  | `CHAR(1)` | Indicator: Planning element |
| `WorkCenterLocation` |  | |  |  | `CHAR(10)` | Location |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional location |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on which object was last changed |
| `RespCostCenterControllingArea` |  | |  |  | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `WBSIsMarkedForIntegratedPlng` |  | |  |  | `CHAR(1)` | Indicator 'Integrated Planning' for Cost Object Category |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `ProjectObjectChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `WBSElementHierarchyLevel` |  | |  |  | `INT1(3)` | Level in Project Hierarchy |
| `OverheadCode` |  | |  |  | `CHAR(6)` | Overhead Key |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `ProjInterestCalcProfile` |  | |  |  | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `ProgressAnlysAggregationWeight` |  | |  |  | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `ReqgCostCenterControllingArea` |  | |  |  | `CHAR(4)` | Controlling area of requesting cost center |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `WBSElementIsGroupingWBSElement` |  | |  |  | `CHAR(1)` | Indicator: Grouping WBS element |
| `WBSElementIsUsedInProjSmmry` |  | |  |  | `CHAR(1)` | Indicator: WBS element used in project summarization |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `BasicStartDate` |  | |  |  | `DATS(8)` | WBS element: Basic start date |
| `ForecastedStartDate` |  | |  |  | `DATS(8)` | Forecast Start Date of WBS Element |
| `ActualStartDate` |  | |  |  | `DATS(8)` | Actual start date for the WBS element |
| `BasicEndDate` |  | |  |  | `DATS(8)` | WBS element: Basic finish date |
| `ForecastedEndDate` |  | |  |  | `DATS(8)` | Forecast Finish Date of WBS Element |
| `ActualEndDate` |  | |  |  | `DATS(8)` | Actual finish date of the WBS element |
| `BasicDuration` |  | |  |  | `QUAN(5)` | Length (duration) of the basic dates in the WBS element |
| `BasicDurationUnit` |  | |  |  | `UNIT(3)` | Unit for duration of basic WBS element dates |
| `ForecastedDuration` |  | |  |  | `QUAN(5)` | Forecasted length (duration) of the WBS element |
| `ForecastedDurationUnit` |  | |  |  | `UNIT(3)` | Unit for duration of WBS element planned dates |
| `ActualDuration` |  | |  |  | `QUAN(5)` | Actual length (duration) of the WBS element |
| `ActualDurationUnit` |  | |  |  | `UNIT(3)` | Unit for duration of actual WBS element dates |
| `SchedldBasicEarliestStartDate` |  | |  |  | `DATS(8)` | Earliest scheduled start date (Basic) |
| `ScheduledBasicLatestEndDate` |  | |  |  | `DATS(8)` | Latest scheduled finish date (basic) |
| `SchedldFcstdEarliestStartDate` |  | |  |  | `DATS(8)` | Scheduled start date (Forecast) |
| `LatestSchedldFcstdEndDate` |  | |  |  | `DATS(8)` | Latest scheduled  finish date (Forecast) |
| `TentativeActualStartDate` |  | |  |  | `DATS(8)` | Tentative actual start date for WBS element |
| `TentativeActualEndDate` |  | |  |  | `DATS(8)` | Tentative actual finish date for WBS element |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `SubProject` |  | |  |  | `CHAR(12)` | Sub-project in work breakdown structure |
| `InvestmentReason` |  | |  |  | `CHAR(2)` | Reason for Investment |
| `InvestmentScale` |  | |  |  | `CHAR(2)` | Scale of investment objects |
| `EnvironmentalInvestmentReason` |  | |  |  | `CHAR(5)` | Reason for Environmental Investment |
| `RequestingCompanyCode` |  | |  |  | `CHAR(4)` | Requesting company code |
| `NetworkAssignmentType` |  | |  |  | `NUMC(1)` | Network assignment |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `FreeDefinedAttribute01` |  | |  |  | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  |  | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  |  | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  |  | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedQuantity1` |  | |  |  | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) WBS element |
| `FreeDefinedQuantity1Unit` |  | |  |  | `UNIT(3)` | 1st user defined field for quantity field unit - WBS element |
| `FreeDefinedQuantity2` |  | |  |  | `QUAN(13)` | 2nd use field for quantity (length 10,3) WBS element |
| `FreeDefinedQuantity2Unit` |  | |  |  | `UNIT(3)` | 2nd user defined field for quantity field unit - WBS element |
| `FreeDefinedAmount1` |  | |  |  | `CURR(13)` |  |
| `FreeDefinedAmount1Currency` |  | |  |  | `CUKY(5)` | 1st user defined field for value field unit - WBS element |
| `FreeDefinedAmount2` |  | |  |  | `CURR(13)` |  |
| `FreeDefinedAmount2Currency` |  | |  |  | `CUKY(5)` | 2nd user defined field for value field unit - WBS element |
| `FreeDefinedDate1` |  | |  |  | `DATS(8)` | 1st user field for date -WBS element |
| `FreeDefinedDate2` |  | |  |  | `DATS(8)` | 2nd user field for date -WBS element |
| `FreeDefinedIndicator1` |  | |  |  | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  |  | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
