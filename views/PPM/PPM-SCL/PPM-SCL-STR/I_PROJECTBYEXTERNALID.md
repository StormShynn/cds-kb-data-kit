---
name: I_PROJECTBYEXTERNALID
description: Project by formatted external Identifier
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value
semantic_en: Project by formatted external Identifier
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
# I_PROJECTBYEXTERNALID

**Project by formatted external Identifier**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectInternalID` | `NUMC(8)` | Project (internal) |
| `ProjectDescription` | `CHAR(40)` | Project Name |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProjectObject` | `CHAR(22)` | Object Number |
| `PlannedStartDate` | `DATS(8)` | Project planned start date |
| `PlannedEndDate` | `DATS(8)` | Project planned finish date |
| `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control: Profile |
| `AvailabilityControlIsActive` | `CHAR(1)` | Availability control indicator(AVC) |
| `JntIntrstBillgClass` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` | `CHAR(5)` | JIB/JIBE Subclass A |
| `Plant` | `CHAR(4)` | Plant |
