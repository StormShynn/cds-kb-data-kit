---
name: I_PROJECTBASICDATA
description: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?"
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
# I_PROJECTBASICDATA

**This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectObject` |  | |  |  | `CHAR(22)` | Object Number |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Project planned start date |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Project planned finish date |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control: Profile |
| `AvailabilityControlIsActive` |  | |  |  | `CHAR(1)` | Availability control indicator(AVC) |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `Location` |  | |  |  | `CHAR(10)` | Location |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Custom Project Currency |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `EntProjectSettlementType` |  | |  |  | `CHAR(2)` | Enterprise Project Settlement Type |
| `EntProjHasProjectStockEnabled` |  | |  |  | `CHAR(1)` | Project stock |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
