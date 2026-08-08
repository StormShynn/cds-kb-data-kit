---
name: I_PROJECTDATA_2
description: "Application interface for Project details"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value
semantic_en: "Application interface for Project details"
keywords:
  - "Appl Interface Project Details"
tags:
  - PPM
  - bo:project
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - metadata-only
---
# I_PROJECTDATA_2

**Application interface for Project details**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project definition |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectObject` |  | |  |  | `CHAR(22)` | Object Number |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Project planned start date |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Project planned finish date |
| `WorkCenterLocation` |  | |  |  | `CHAR(10)` | Location |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `BasicDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (basic dates) |
| `FcstdDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (forecast) |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Appointments: Calendar |
| `SchedulingDurationUnit` |  | |  |  | `UNIT(3)` | Time Unit for Execution Duration |
| `ForecastedStartDate` |  | |  |  | `DATS(8)` | Forecast Start Date |
| `ForecastedEndDate` |  | |  |  | `DATS(8)` | Forecast Finish Date |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Currency` |  | |  |  | `CUKY(5)` | WBS currency (project definition) |
| `BudgetProfile` |  | |  |  | `CHAR(6)` | Budget Profile |
| `PlanningProfile` |  | |  |  | `CHAR(6)` | Planning Profile |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `ProjInterestCalcProfile` |  | |  |  | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `PartnerDeterminationProcedure` |  | |  |  | `CHAR(4)` | Partner Determination Procedure |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `NetworkProfile` |  | |  |  | `CHAR(7)` | Network Profile |
| `WBSSchedulingProfile` |  | |  |  | `CHAR(12)` | Profile for WBS scheduling |
| `PlanningMethForProjBasicDate` |  | |  |  | `NUMC(1)` | Planning method for project basic dates |
| `PlanningMethForProjFcstdDate` |  | |  |  | `NUMC(1)` | Planning method for project forecast dates |
| `NetworkAssignmentType` |  | |  |  | `NUMC(1)` | Network assignment |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `WBSIsMarkedForIntegratedPlng` |  | |  |  | `CHAR(1)` | Indicator for Integrated Planning |
| `ProjectHasOwnStock` |  | |  |  | `CHAR(1)` | Project Stock |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Valuation of Special Stock |
| `WBSIsMarkedForAutomReqmtGrpg` |  | |  |  | `CHAR(1)` | Indicator: Automatic requirements grouping |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `WBSElementMaskID` |  | |  |  | `CHAR(24)` | Selection mask for WBS element short IDs |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DynItemProcessorPrfl` |  | |  |  | `CHAR(8)` | Dynamic Item Processor Profile |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Status profile for project definition |
| `WBSStatusProfile` |  | |  |  | `CHAR(8)` | Status profile for WBS element |
| `SimulationProfile` |  | |  |  | `CHAR(7)` | Simulation profile |
| `SchedulingScenario` |  | |  |  | `CHAR(1)` | Scheduling scenario |
| `DistributionProfile` |  | |  |  | `CHAR(6)` | Distribution profile |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `FreeDefinedTableFieldSemantic` |  | |  |  | `CHAR(7)` | Key word ID for user-defined fields |
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
| `StatusCombinationCode` |  | |  |  | `INT1(3)` | Status Combination |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
