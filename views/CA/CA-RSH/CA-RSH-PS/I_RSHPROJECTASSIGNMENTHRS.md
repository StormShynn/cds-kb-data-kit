---
name: I_RSHPROJECTASSIGNMENTHRS
description: This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?
app_component: CA-RSH-PS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?
tags:
  - CA
  - bo:plant
  - CA-RSH
  - CA-RSH-PS
  - component:CA-RSH-PS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_RSHPROJECTASSIGNMENTHRS

**This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?**

| Property | Value |
|---|---|
| App Component | `CA-RSH-PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjAssignmentUUID` |  | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ResourceDemandUUID` |  | |  |  | `RAW(16)` | Demand Key |
| `EmploymentInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `ProjAssignmentStartDate` |  | |  |  | `DATS(8)` |  |
| `ProjAssignmentEndDate` |  | |  |  | `DATS(8)` |  |
| `ProjAssignmentTotalHours` |  | |  |  | `DEC(15)` | Total duration of assignment in seconds |
| `SourceOfSupply` |  | |  |  | `CHAR(5)` | Source of Supply |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `ServiceOrganization` |  | |  |  | `CHAR(5)` | Service Organization ID |
| `EmployeeRequestHdrSrvOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EmployeeRequestDelivOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectVisibility` |  | |  |  | `CHAR(2)` | Public Project |
| `IsBusPrpsCmpltdCustomer` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `CustomerAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusPrpsCmpltdProjectManager` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `ProjectManagerAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ExternalStaffingIsActive` |  | |  |  | `CHAR(1)` | Enable External Staffing |
