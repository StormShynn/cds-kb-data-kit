---
name: I_ENGAGEMENTPROJECTROLES
description: "This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?"
semantic_vi: "Role in Engagement Project — CDS view tổng hợp dựa trên I_EngagementProject."
keywords:
  - "role"
  - "engagement"
  - "project"
  - "start"
  - "date"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# I_ENGAGEMENTPROJECTROLES

**This CDS view provides the prerequisites for answering the following business questions: Who are the additional stakeholders in a project? What are the roles and activities planned in a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectRole` | ✓ | |  | `EngagementProjectTeamRole` | `CHAR(4)` | Role ID |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EngagementProjectTeamUUID` |  | |  |  | `RAW(16)` | Project Team UUID |
| `EngagementProjectTeamRoleUUID` |  | |  |  | `RAW(16)` | Team Role UUID |
| `EngmtProjTeamMemberUUID` |  | |  |  | `RAW(16)` | Team Member UUID |
| `EngagementProjectMemberUUID` |  | |  |  | `RAW(16)` | Project Member UUID |
| `EmploymentInternalID` |  | |  |  | `CHAR(60)` | Member ID |
| `BusinessPartnerType` |  | |  |  | `CHAR(10)` | BP Role |
| `BusinessPartnerMemberType` |  | |  |  | `CHAR(10)` | BP Role |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CostCenter` |  | |  | `cast( A.CostCenter as fis_kostl)` | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `_PersonWorkAgreementDet` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_EngagementProject` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_UserInvlmnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersonWorkAgreementDet` | `I_PersnWrkAgreementDet` | [0..*] |
| `_Text` | `I_EngmtProjectRoleText` | [0..*] |
| `_EngagementProject` | `I_EngagementProject` | [1..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [0..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_UserInvlmnt` | `I_EngmntProjWithUserInvlmnt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTROLES')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IENGMTPROJROLES',
//  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData: {
    blockingIndicator: [ '_PersonWorkAgreementDet._BusinessPartner.IsBusinessPurposeCompleted' ],
    blocking: #REQUIRED
  }
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Role in Engagement Project'
@ObjectModel: {
  representativeKey: 'EngagementProjectRole',
  sapObjectNodeType.name: 'CommercialProject',   
  usageType: {
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #MIXED
   },
   modelingPattern: #ANALYTICAL_DIMENSION, 
   supportedCapabilities: [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE]
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM: {
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #COMPOSITE
}

define view I_EngagementProjectRoles
  as select from I_EngagementProject as A
    inner join I_EngagementProjectTeam as B on A.EngagementProjectUUID = B.EngagementProjectUUID
                                           and A.EngagementProject = B.EngagementProjectTeamName
    left outer join I_EngagementProjectTeamRole as C on B.EngagementProjectTeamUUID = C.EngagementProjectTeamUUID
    left outer join I_EngmtProjTeamMember as D on C.EngagementProjectTeamRoleUUID = D.EngagementProjectTeamRoleUUID
    left outer join I_EngagementProjectMember as E on D.EngagementProjectMemberUUID = E.EngagementProjectMemberUUID
  association [0..*] to I_PersnWrkAgreementDet as _PersonWorkAgreementDet on $projection.EmploymentInternalID = _PersonWorkAgreementDet.PersonWorkAgreement
  association [0..*] to I_EngmtProjectRoleText  as _Text                   on $projection.EngagementProjectRole = _Text.EngagementProjectRole
  association [1..1] to I_EngagementProject     as _EngagementProject      on $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..*] to I_PersonWorkAgreement   as _PersonWorkAgreement    on $projection.EmploymentInternalID = _PersonWorkAgreement.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1 as _PersonWorkAgreement_1  on $projection.EmploymentInternalID = _PersonWorkAgreement_1.PersonWorkAgreement
  association [1..1] to I_EngmntProjWithUserInvlmnt as _UserInvlmnt on $projection.EngagementProjectUUID = _UserInvlmnt.ProjectUUID
{

      @ObjectModel.foreignKey.association: '_EngagementProject'
  key A.EngagementProject,
  key C.EngagementProjectTeamRole as EngagementProjectRole,
      A.ProjectStartDate,
      A.ProjectEndDate,
      A.EngagementProjectUUID,
      A.EngagementProjectCategory,
      B.EngagementProjectTeamUUID,
      C.EngagementProjectTeamRoleUUID,
      D.EngmtProjTeamMemberUUID,
      D.EngagementProjectMemberUUID,
      E.EmploymentInternalID,
      
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'BusinessPartnerMemberType'
      E.BusinessPartnerType,
      E.BusinessPartnerMemberType,
      
      @Consumption.hidden: true
      A.EngagementProjectType,
      
      @Consumption.hidden: true
      A.EngagementProjectServiceOrg,
      
      @Consumption.hidden: true
      A.ProjectProfileCode,
      
      @Consumption.hidden: true
      A.ProjectVisibility,
      
      @Consumption.hidden: true
      A.CompanyCode,
      
      @Consumption.hidden: true
      cast( A.CostCenter as fis_kostl) as CostCenter,
      
      @Consumption.hidden: true
      A.ProfitCenter,
      
      _Text,
      _PersonWorkAgreementDet,
      _EngagementProject,
      
      @API.element: {
        successor: '_PersonWorkAgreement_1',
        releaseState: #DEPRECATED
      }
      @VDM.lifecycle: {
        successor: '_PersonWorkAgreement_1',
        status: #DEPRECATED
      }
      _PersonWorkAgreement,
      _PersonWorkAgreement_1,
      
      @Consumption.hidden: true
      _UserInvlmnt
     
     
}
```
