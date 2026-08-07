---
name: I_WBSELEMENTBYEXTERNALID
description: "WBSElement By ExternalID"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value
semantic_en: "WBSElement By ExternalID"
tags:
  - PPM
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - metadata-only
---
# I_WBSELEMENTBYEXTERNALID

**WBSElement By ExternalID**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
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
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `WBSElementIsBillingElement` |  | |  |  | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  |  | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `JntIntrstBillgClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
