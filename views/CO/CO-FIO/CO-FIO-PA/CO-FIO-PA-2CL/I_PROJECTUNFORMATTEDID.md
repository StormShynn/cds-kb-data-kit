---
name: I_PROJECTUNFORMATTEDID
description: Project by unformatted external ID
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value
semantic_en: Project by unformatted external ID
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - project
  - metadata-only
---
# I_PROJECTUNFORMATTEDID

**Project by unformatted external ID**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProjectExternalID` | `CHAR(24)` | Project (external ID) |
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
