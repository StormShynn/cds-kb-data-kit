---
name: I_RSHPROJECTASSIGNMENTHRS
description: "This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?"
app_component: CA-RSH-PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?"
semantic_vi: "Resource Assignments — CDS view giao diện dựa trên I_RSHProjectAssignment."
keywords:
  - "resource"
  - "assignments"
  - "proj"
  - "assignment"
  - "demand"
  - "employment"
  - "internal"
  - "start"
  - "date"
tags:
  - CA
  - bo:plant
  - CA-RSH
  - CA-RSH-PS
  - component:CA-RSH-PS
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_RSHPROJECTASSIGNMENTHRS

**This CDS view provides the prerequisites for answering the following business questions: Which resource is assigned to which project? How long does the assignment last? For how many hours is the resource assigned to the project? Which resource requests are staffed? For which project is a resource staffed? What is the start and end date of an assignment?**

| Property | Value |
|---|---|
| App Component | `CA-RSH-PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjAssignmentUUID` | ✓ | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ResourceDemandUUID` |  | |  |  | `RAW(16)` | Demand Key |
| `EmploymentInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `ProjAssignmentStartDate` |  | |  |  | `DATS(8)` |  |
| `ProjAssignmentEndDate` |  | |  |  | `DATS(8)` |  |
| `ProjAssignmentTotalHours` |  | |  |  | `DEC(15)` | Total duration of assignment in seconds |
| `SourceOfSupply` |  | |  |  | `CHAR(5)` | Source of Supply |
| `CompanyCode` |  | | `_Resource` | `CompanyCode` | `CHAR(4)` | Company Code |
| `CostCenter` |  | | `_Resource` | `CostCenter` | `CHAR(10)` | Cost Center |
| `AuthorizationGroup` |  | | `_Resource` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | | `_Resource` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `ServiceOrganization` |  | | `_Request` | `ServiceOrganization` | `CHAR(5)` | Service Organization ID |
| `EmployeeRequestHdrSrvOrg` |  | | `_Request` | `EmployeeRequestHdrSrvOrg` | `CHAR(5)` | Service Organization |
| `EmployeeRequestDelivOrg` |  | | `_Request` | `EmployeeRequestDelivOrg` | `CHAR(5)` | Service Organization |
| `ProjectVisibility` |  | | `_Request` | `ProjectVisibility` | `CHAR(2)` | Public Project |
| `IsBusPrpsCmpltdCustomer` |  | | `_Request._Customer` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `CustomerAuthznGrp` |  | | `_Request._Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `IsBusPrpsCmpltdProjectManager` |  | | `_Request._ProjectManager._WorkforcePerson` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `ProjectManagerAuthznGrp` |  | | `_Request._ProjectManager._WorkforcePerson` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `ExternalStaffingIsActive` |  | | `_EngmtProjPlanConfig` | `ExternalStaffingIsActive` | `CHAR(1)` | Enable External Staffing |
| `_ProjectAssignmentPerDay` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Resource` | `P_RSHResourceTimeSlice` | [0..*] |
| `_Request` | `P_RSHStaffingRequestDetails` | [0..1] |
| `_ProjectAssignmentPerDay` | `I_RSHProjectAssignmentDailyHrs` | [0..*] |
| `_EngmtProjPlanConfig` | `I_EngmntProjPlanConfig` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTHRS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSHPRJASGPHR'
@AccessControl.privilegedAssociations:  [ '_ProjectAssignmentPerDay' ]
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted','IsBusPrpsCmpltdProjectManager','IsBusPrpsCmpltdCustomer']
@EndUserText.label: 'Resource Assignments'

/*
CONTRACT**********************************************************************************************************************

Name:                       RELEASED CDS VIEW for Project Assignment
Specification:              Read Only CDS View for Customer use in View Builder to read Assginment Data
Requires:                   NA
Ensures:                    NA
Owners:                     TR
Contributors:               NA
Unit Test required Y/N:     N
Additional comments         None

END OF CONTRACT***************************************************************************************************************
*/


define view I_RSHProjectAssignmentHrs   

  as select from I_RSHProjectAssignment as ProjectAssignment
 
  association [0..*] to P_RSHResourceTimeSlice       as _Resource                on  _Resource.EmploymentInternalID = $projection.EmploymentInternalID
                                                                                 and _Resource.StartDate            <= $projection.ProjAssignmentStartDate
                                                                                 and _Resource.EndDate              >= $projection.ProjAssignmentStartDate 


  association [0..1] to P_RSHStaffingRequestDetails     as _Request                      on  _Request.ResourceDemandUUID = $projection.ResourceDemandUUID
 
   
  association [0..*] to I_RSHProjectAssignmentDailyHrs as _ProjectAssignmentPerDay on  _ProjectAssignmentPerDay.ProjAssignmentUUID = $projection.ProjAssignmentUUID
  
  association [0..1] to I_EngmntProjPlanConfig as _EngmtProjPlanConfig on _EngmtProjPlanConfig.ProjectProfileCode = 'P001'
  
 
{
  key ProjectAssignment.ProjAssignmentUUID       as ProjAssignmentUUID,
      ProjectAssignment.ResourceDemandUUID       as ResourceDemandUUID,
      ProjectAssignment.EmploymentInternalID     as EmploymentInternalID,
      ProjectAssignment.ProjAssignmentStartDate  as ProjAssignmentStartDate,
      ProjectAssignment.ProjAssignmentEndDate    as ProjAssignmentEndDate,
      ProjectAssignment.ProjAssignmentTotalHours as ProjAssignmentTotalHours,
      ProjectAssignment.SourceOfSupply           as SourceOfSupply,
      
      // Resource Specific Data for DCL
      _Resource.CompanyCode,
      _Resource.CostCenter,
      
       @Consumption.hidden: true
      _Resource.AuthorizationGroup,
      
       @Consumption.hidden: true
      _Resource.IsBusinessPurposeCompleted,
      
      // Request Specific Data for DCL
      _Request.ServiceOrganization,
      _Request.EmployeeRequestHdrSrvOrg,
      _Request.EmployeeRequestDelivOrg,
      _Request.ProjectVisibility,
      
       @Consumption.hidden: true
      _Request._Customer.IsBusinessPurposeCompleted as IsBusPrpsCmpltdCustomer,
       @Consumption.hidden: true
      _Request._Customer.AuthorizationGroup as CustomerAuthznGrp,
      @Consumption.hidden: true
      _Request._ProjectManager._WorkforcePerson.IsBusinessPurposeCompleted   as IsBusPrpsCmpltdProjectManager,  
       @Consumption.hidden: true                                                                     
      _Request._ProjectManager._WorkforcePerson.AuthorizationGroup           as ProjectManagerAuthznGrp,
             
      // Association to Per Day Assignments
      _ProjectAssignmentPerDay,
      
      @Semantics.booleanIndicator 
      _EngmtProjPlanConfig.ExternalStaffingIsActive                          as ExternalStaffingIsActive
}
where _EngmtProjPlanConfig.ExternalStaffingIsActive = '' 
   or _EngmtProjPlanConfig.ExternalStaffingIsActive = ' '
   or _EngmtProjPlanConfig.ExternalStaffingIsActive is null
```
