---
name: I_PROJECTBYINTERNALKEY
description: "Project Definition Details By Internal ID"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value
semantic_en: "Project Definition Details By Internal ID"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - metadata-only
---
# I_PROJECTBYINTERNALKEY

**Project Definition Details By Internal ID**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ProjectWithCodingMask` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Definition Name |
| `ProjectObject` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Currency` |  | |  |  | `CUKY(5)` | WBS currency (project definition) |
| `NetworkAssignmentType` |  | |  |  | `NUMC(1)` | Network assignment |
| `WBSElmntDatesIsDetailed` |  | |  |  | `CHAR(1)` | Indicator: WBS dates detailed by activity dates |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Start Date of Overdraft Control |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Finish Date for Scheduling |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Appointments: Calendar |
| `NetworkHdrIsVisibleToUser` |  | |  |  | `CHAR(1)` | Indicator: Network header visible to end user |
| `NetworkProfile` |  | |  |  | `CHAR(7)` | Network Profile |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `BudgetProfile` |  | |  |  | `CHAR(6)` | Budget Profile |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BasicDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (basic dates) |
| `FcstdDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (forecast) |
| `ProjectHasOwnStock` |  | |  |  | `CHAR(1)` | Project Stock |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction Code in BV Document |
| `ProjInterestCalcProfile` |  | |  |  | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `PaymentPlanProfile` |  | |  |  | `CHAR(6)` | Payment plan profile |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `PlanningProfile` |  | |  |  | `CHAR(6)` | Planning Profile |
| `WBSIsMarkedForIntegratedPlng` |  | |  |  | `CHAR(1)` | Indicator for Integrated Planning |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
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
| `ForecastedStartDate` |  | |  |  | `DATS(8)` | Forecast Start Date |
| `ForecastedEndDate` |  | |  |  | `DATS(8)` | Forecast Finish Date |
| `ProjectLangBsdDescription` |  | |  |  | `CHAR(40)` | Language-Dependent Short Text |
