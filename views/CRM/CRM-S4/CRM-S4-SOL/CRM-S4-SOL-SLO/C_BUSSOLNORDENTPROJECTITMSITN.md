---
name: C_BUSSOLNORDENTPROJECTITMSITN
description: Soln Ord Customer Project Item Situation Anchor and Trigger
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value
semantic_en: Soln Ord Customer Project Item Situation Anchor and Trigger
tags:
  - CRM
  - bo:businesspartner
  - component:CRM-S4-SOL-SLO
  - consumption-view
  - CRM-S4
  - CRM-S4-SOL
  - CRM-S4-SOL-SLO
  - customer
  - project
  - metadata-only
---
# C_BUSSOLNORDENTPROJECTITMSITN

**Soln Ord Customer Project Item Situation Anchor and Trigger**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDENTPROJECTITMSITN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` |  |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` |  |
| `BusSolnOrderItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ResponsibleEmployeeUserID` |  | |  |  | `CHAR(12)` | User ID |
| `SuccessorProject` |  | |  |  | `CHAR(24)` | Project ID |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
