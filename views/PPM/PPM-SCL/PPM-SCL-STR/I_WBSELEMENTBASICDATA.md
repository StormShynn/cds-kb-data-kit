---
name: I_WBSELEMENTBASICDATA
description: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - metadata-only
---
# I_WBSELEMENTBASICDATA

**This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementShortID` |  | |  |  | `CHAR(16)` | WBS element short identification |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Calendar |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost center to which costs are actually posted |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Current number of the appropriate project |
| `WBSElementIsBillingElement` |  | |  |  | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  |  | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `WBSIsAccountAssignmentElement` |  | |  |  | `CHAR(1)` | Indicator: Account assignment element |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `Location` |  | |  |  | `CHAR(10)` | Location |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FundIsFixAssigned` |  | |  |  | `CHAR(1)` | Indicator for Fund with Fixed Assignment |
| `FunctionalAreaIsFixAssigned` |  | |  |  | `CHAR(1)` | Indicator for Functional Area with Fixed Assignment |
| `GrantIsFixAssigned` |  | |  |  | `CHAR(1)` | Indicator for Grant with Fixed Assignment |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on which object was last changed |
| `RespCostCenterControllingArea` |  | |  |  | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `LeadingSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `LeadingSalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `EntProjectSettlementElement` |  | |  |  | `CHAR(1)` | Enterprise Project Settlement Element |
| `EntProjIsSettlmtRuleInherited` |  | |  |  | `CHAR(1)` | Enterprise Project Settlement Rule Inherited |
| `ResultAnalysisDescription` |  | |  |  | `CHAR(60)` | Result Analysis Description |
