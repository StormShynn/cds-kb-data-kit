---
name: I_STANDARDPROJECT_2
description: "Standard Project Details"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value
semantic_en: "Standard Project Details"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - project
  - PS-ST
  - metadata-only
---
# I_STANDARDPROJECT_2

**Standard Project Details**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StandardProjectInternalID` |  | |  |  | `NUMC(8)` | Current number for standard project |
| `StdProject` |  | |  |  | `CHAR(24)` | Project Account Assignment (PS_PSP_PNR Batch Input Field) |
| `StandardProjectWithCodingMask` |  | |  |  | `CHAR(24)` | Standard Project Number (Extern) Edited |
| `StandardProjectDescription` |  | |  |  | `CHAR(40)` | Name of cProjects Project (Language-Dependent) |
| `StandardProjectObject` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on which object was last changed |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business area for the project |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Currency` |  | |  |  | `CUKY(5)` | WBS currency (project definition) |
| `NetworkAssignmentType` |  | |  |  | `NUMC(1)` | Network assignment |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Appointments: Calendar |
| `NetworkProfile` |  | |  |  | `CHAR(7)` | Network Profile |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `BudgetProfile` |  | |  |  | `CHAR(6)` | Budget Profile |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ProjectHasOwnStock` |  | |  |  | `CHAR(1)` | Project Stock |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction Code in BV Document |
| `ProjInterestCalcProfile` |  | |  |  | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `PlanningProfile` |  | |  |  | `CHAR(6)` | Planning Profile |
| `WBSIsMarkedForIntegratedPlng` |  | |  |  | `CHAR(1)` | Indicator for Integrated Planning |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Valuation of Special Stock |
| `WBSIsMarkedForAutomReqmtGrpg` |  | |  |  | `CHAR(1)` | Indicator: Automatic requirements grouping |
| `WorkCenterLocation` |  | |  |  | `CHAR(10)` | Location |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DynItemProcessorPrfl` |  | |  |  | `CHAR(8)` | Dynamic Item Processor Profile |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `WBSElementMaskID` |  | |  |  | `CHAR(24)` | Selection mask for WBS element short IDs |
| `WBSHasAutomValueTransferToProj` |  | |  |  | `CHAR(1)` | Automatic value transfer from WBS element to project def. |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Status profile for project definition |
| `WBSStatusProfile` |  | |  |  | `CHAR(8)` | Status profile for WBS element |
| `PlanningMethForProjBasicDate` |  | |  |  | `NUMC(1)` | Planning method for project basic dates |
| `PlanningMethForProjFcstdDate` |  | |  |  | `NUMC(1)` | Planning method for project forecast dates |
| `SchedulingDurationUnit` |  | |  |  | `UNIT(3)` | Time Unit for Execution Duration |
| `WBSSchedulingProfile` |  | |  |  | `CHAR(12)` | Profile for WBS scheduling |
| `SimulationProfile` |  | |  |  | `CHAR(7)` | Simulation profile |
| `WBSIsMarkedForCalcWithActDates` |  | |  |  | `CHAR(1)` | Indicator: Bottom-up calculation with activity dates |
| `ProjHasWBSForSalesOrderItem` |  | |  |  | `CHAR(1)` | Indicator: New structure for each sales order item |
| `PartnerDeterminationProcedure` |  | |  |  | `CHAR(4)` | Partner Determination Procedure |
| `SchedulingScenario` |  | |  |  | `CHAR(1)` | Scheduling scenario |
| `FreeDefinedTableFieldSemantic` |  | |  |  | `CHAR(7)` | Key word ID for user-defined fields |
| `FreeDefinedAttribute01` |  | |  |  | `CHAR(20)` | 1st user field for 20 characters - Project |
| `FreeDefinedAttribute02` |  | |  |  | `CHAR(20)` | 2nd user field 20 digits - Project |
| `FreeDefinedAttribute03` |  | |  |  | `CHAR(10)` | 3rd user-defined field 10 digits - Project |
| `FreeDefinedAttribute04` |  | |  |  | `CHAR(10)` | 4th user-defined field 10 digits - Project |
| `FreeDefinedQuantity1` |  | |  |  | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) - Project |
| `FreeDefinedQuantity1Unit` |  | |  |  | `UNIT(3)` | 1st user defined field for quantity field unit - Project |
| `FreeDefinedQuantity2` |  | |  |  | `QUAN(13)` | 2nd use field for quantity (length 10,3) - Project |
| `FreeDefinedQuantity2Unit` |  | |  |  | `UNIT(3)` | 2nd user defined field for quantity field unit - Project |
| `FreeDefinedAmount1` |  | |  |  | `CURR(13)` | 1st user field for values (length 10,3) - Project |
| `FreeDefinedAmount1Currency` |  | |  |  | `CUKY(5)` | 1st user defined field for value field unit - Project |
| `FreeDefinedAmount2` |  | |  |  | `CURR(13)` | 2nd user field for values (length 10,3) - Project |
| `FreeDefinedAmount2Currency` |  | |  |  | `CUKY(5)` | 2nd user defined field for value field unit - Project |
| `FreeDefinedDate1` |  | |  |  | `DATS(8)` | 1st user field for date - Project |
| `FreeDefinedDate2` |  | |  |  | `DATS(8)` | 2nd user field for date - Project |
| `FreeDefinedIndicator1` |  | |  |  | `CHAR(1)` | 1st user field for 'Indicator for evaluations' - Project |
| `FreeDefinedIndicator2` |  | |  |  | `CHAR(1)` | 2nd user field for 'Indicator for evaluations' - Project |
| `StatusCode` |  | |  |  | `CHAR(5)` | Object status |
| `StandardProjectIsCreated` |  | |  |  | `CHAR(1)` | Standard Project Created |
| `StandardProjectIsReleased` |  | |  |  | `CHAR(1)` | Standard Project Released |
| `StandardProjectIsClosed` |  | |  |  | `CHAR(1)` | Standard Project Closed |
