---
name: I_STANDARDWBSELEMENT_2
description: Standard Work Breakdown Structure Element Details
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value
semantic_en: Standard Work Breakdown Structure Element Details
tags:
  - PS
  - bo:wbs
  - component:PS-ST
  - interface-view
  - PS-ST
  - metadata-only
---
# I_STANDARDWBSELEMENT_2

**Standard Work Breakdown Structure Element Details**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `StandardWBSElementInternalID` | `NUMC(8)` | WBS Element |
| `StdWBSElement` | `CHAR(24)` | WBS Element |
| `StandardProjectInternalID` | `NUMC(8)` | Current number for standard project |
| `StdWBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `StandardWBSElementObject` | `CHAR(22)` | Object Number |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` | `DATS(8)` | Date on which object was last changed |
| `ResponsiblePerson` | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` | `NUMC(8)` | Applicant number |
| `ApplicantName` | `CHAR(25)` | Applicant |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProjectType` | `CHAR(2)` | Project type |
| `WBSElementIsPlanningElement` | `CHAR(1)` | Indicator: Planning element |
| `WBSIsAccountAssignmentElement` | `CHAR(1)` | Indicator: Account assignment element |
| `WBSElementIsBillingElement` | `CHAR(1)` | Indicator: Billing element |
| `CostingSheet` | `CHAR(6)` | Costing Sheet |
| `RequestingCostCenter` | `CHAR(10)` | Requesting cost center |
| `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `FactoryCalendar` | `CHAR(2)` | Calendar |
| `PriorityCode` | `CHAR(1)` | Priority |
| `Currency` | `CUKY(5)` | WBS element currency |
| `Plant` | `CHAR(4)` | Plant |
| `FreeDefinedTableFieldSemantic` | `CHAR(7)` | Key word ID for user-defined fields |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `WBSIsMarkedForIntegratedPlng` | `CHAR(1)` | Indicator 'Integrated Planning' for Cost Object Category |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Location` | `CHAR(20)` | Location |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `ProjectObjectChangeNumber` | `CHAR(12)` | Change Number |
| `ReferenceElement` | `CHAR(40)` | Reference Element PM/PS |
| `ProjInterestCalcProfile` | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` | `CHAR(6)` | Investment Measure Profile |
| `WBSElementHierarchyLevel` | `INT1(3)` | Level in Project Hierarchy |
| `OverheadCode` | `CHAR(6)` | Overhead Key |
| `ResultAnalysisInternalID` | `CHAR(6)` | Results Analysis Key |
| `ProgressAnlysAggregationWeight` | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `WBSElementShortID` | `CHAR(16)` | WBS element short identification |
| `ReqgCostCenterControllingArea` | `CHAR(4)` | Controlling area of requesting cost center |
| `RespCostCenterControllingArea` | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `Language` | `LANG(1)` | Language Key |
| `CostCenter` | `CHAR(10)` | Cost center to which costs are actually posted |
| `WBSElementIsUsedInProjSmmry` | `CHAR(1)` | Indicator: WBS element used in project summarization |
| `WBSElementIsGroupingWBSElement` | `CHAR(1)` | Indicator: Grouping WBS element |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` | `CHAR(5)` | JIB/JIBE Subclass A |
| `ControllingObjectClass` | `CHAR(2)` | Object Class |
| `StdWBSElementWithCodingMask` | `CHAR(24)` | Standard Work Breakdown Structure (S WBS Element) Edited |
| `FreeDefinedAttribute01` | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedQuantity1` | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) WBS element |
| `FreeDefinedQuantity1Unit` | `UNIT(3)` | 1st user defined field for quantity field unit - WBS element |
| `FreeDefinedQuantity2` | `QUAN(13)` | 2nd use field for quantity (length 10,3) WBS element |
| `FreeDefinedQuantity2Unit` | `UNIT(3)` | 2nd user defined field for quantity field unit - WBS element |
| `FreeDefinedAmount1` | `CURR(13)` | 1st user field for values (length 10,3) WBS element |
| `FreeDefinedAmount1Currency` | `CUKY(5)` | 1st user defined field for value field unit - WBS element |
| `FreeDefinedAmount2` | `CURR(13)` | 2nd user field for values (length 10,3) -WBS element |
| `FreeDefinedAmount2Currency` | `CUKY(5)` | 2nd user defined field for value field unit - WBS element |
| `FreeDefinedDate1` | `DATS(8)` | 1st user field for date -WBS element |
| `FreeDefinedDate2` | `DATS(8)` | 2nd user field for date -WBS element |
| `FreeDefinedIndicator1` | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `SubProject` | `CHAR(12)` | Sub-project in work breakdown structure |
