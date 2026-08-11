---
name: I_ENGMNTPROJECTROLEASSGMT
description: "This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Engagement Project Roles. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value
semantic_en: "This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Engagement Project Roles. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?"
semantic_vi: "Role Assignment in Engagement Project — CDS view tổng hợp dựa trên P_EngmntProjectRoleAssgmt."
keywords:
  - "role"
  - "assignment"
  - "engagement"
  - "project"
  - "team"
  - "creation"
  - "date"
  - "time"
  - "business"
  - "partner"
  - "object"
  - "name"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGMNTPROJECTROLEASSGMT

**This CDS view retrieves all project roles assigned to a customer or internal project, and the business partner assigned to each role. This CDS view is an enhanced alternative to Engagement Project Roles. This CDS view provides the prerequisites for answering the following business questions: What are the roles assigned to a project? Who are the business partners that manage different project responsibilities?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectTeamRole` | ✓ | |  |  | `CHAR(15)` | Role Type |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Timestamp of Object Creation |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ObjectName` |  | | `_ProjectRoleText` | `ObjectName` | `CHAR(40)` | Name of Role Type |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectTeamRoleUUID` |  | |  |  | `RAW(16)` | Team Role UUID |
| `EngmtProjTeamMemberUUID` |  | |  |  | `RAW(16)` | Team Member UUID |
| `EngagementProjectMemberUUID` |  | |  |  | `RAW(16)` | Project Member UUID |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BusinessPartnerType` |  | |  |  | `CHAR(4)` | Business Partner Type |
| `BusinessUser` |  | | `_BusinessUserBasic` | `UserID` | `CHAR(12)` | User ID |
| `PersonExternalID` |  | |  | `BPIdentificationNumber` | `CHAR(60)` | Identification Number |
| `_BusinessUserBasic` | | ✓ | | | | |
| `_BusinessUser` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_WorkplaceAddress` | | ✓ | | | | |
| `_Image` | | ✓ | | | | |
| `_ProjectRole` | | ✓ | | | | |
| `_EngagementProject` | | ✓ | | | | |
| `_ProjectRoleText` | | ✓ | | | | |
| `_UserInvlmnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [0..1] |
| `_BusinessUser` | `I_BusinessUser` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_WorkplaceAddress` | `I_WorkplaceAddress` | [0..1] |
| `_Image` | `I_WorkforcePersonImageURL` | [0..1] |
| `_ProjectRole` | `I_EnterpriseProjectRoleType` | [0..1] |
| `_EngagementProject` | `I_EngagementProject` | [1] |
| `_ProjectRoleText` | `I_PPM_ProjectRoleTypeText` | [0..1] |
| `_UserInvlmnt` | `I_EngmntProjWithUserInvlmnt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJECTROLEASSGMT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
    sqlViewName: 'IENGPRJROLASSGMT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED,
    personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
}
@ObjectModel: {
    representativeKey: 'EngagementProjectTeamRole',
    sapObjectNodeType.name: 'CommercialProject',       
    usageType.serviceQuality: #D,
    usageType.sizeCategory: #XL,
    usageType.dataClass: #MIXED,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE]
}
@EndUserText.label: 'Role Assignment in Engagement Project'

@Analytics: {
  dataExtraction.enabled: true,
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata: {
ignorePropagatedAnnotations: true,
allowExtensions:true
}

define view I_EngmntProjectRoleAssgmt
  as select from P_EngmntProjectRoleAssgmt as B
    inner join   P_WFPersonIdentification  as C on B.BusinessPartner = C.BusinessPartner
  association [0..1] to I_BusinessUserBasic         as _BusinessUserBasic on  $projection.BusinessPartner = _BusinessUserBasic.BusinessPartner
  // ***** I_BusinessUser is deprecated, It's successor view is I_BusinessUserBasic
  association [0..1] to I_BusinessUser              as _BusinessUser      on  $projection.BusinessPartner = _BusinessUser.BusinessPartner
  // ***** I_BusinessPartner has DCL check for blocked employee. Do not remove this association.
  association [0..1] to I_BusinessPartner           as _BusinessPartner   on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_WorkplaceAddress          as _WorkplaceAddress  on  $projection.BusinessPartnerUUID = _WorkplaceAddress.BusinessPartnerUUID
  association [0..1] to I_WorkforcePersonImageURL   as _Image             on  _Image.Person = B.BusinessPartner
  association [0..1] to I_EnterpriseProjectRoleType as _ProjectRole       on  $projection.EngagementProjectTeamRole = _ProjectRole.ProjectRoleType
  association [1]    to I_EngagementProject         as _EngagementProject on  $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..1] to I_PPM_ProjectRoleTypeText   as _ProjectRoleText   on  _ProjectRoleText.LanguageCode    = $session.system_language
                                                                          and _ProjectRoleText.ProjectRoleType = $projection.EngagementProjectTeamRole
  association [1..1] to I_EngmntProjWithUserInvlmnt as _UserInvlmnt       on  $projection.EngagementProjectUUID = _UserInvlmnt.ProjectUUID
{

      @ObjectModel.foreignKey.association: '_EngagementProject'
      @EndUserText.label: 'Engagement Project ID'
  key B.EngagementProject,

      @EndUserText.label: 'Project Role'
  key B.EngagementProjectTeamRole,

      @EndUserText.label: 'Created On'
      B.CreationDateTime,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      @EndUserText.label: 'Business Partner ID'
      B.BusinessPartner,

      @EndUserText.label: 'Project Role Name'
      @Semantics.name.jobTitle: true
      _ProjectRoleText.ObjectName,

      @Consumption.hidden: true
      B.EngagementProjectUUID,

      @Consumption.hidden: true
      B.EngagementProjectTeamRoleUUID,

      @Consumption.hidden: true
      B.EngmtProjTeamMemberUUID,

      @Consumption.hidden: true
      B.EngagementProjectMemberUUID,

      @Consumption.hidden: true
      B.BusinessPartnerUUID,

      @EndUserText.label: 'Business Partner Name'
      B.BusinessPartnerFullName,

      @EndUserText.label: 'Business Partner Type'
      B.BusinessPartnerType,

      @EndUserText.label: 'Business User'
      _BusinessUserBasic.UserID as BusinessUser,

      @EndUserText.label: 'User name'
      C.BPIdentificationNumber  as PersonExternalID,
      
      _BusinessUserBasic,

      @API.element: {
             successor: '_BusinessUserBasic',
             releaseState: #DEPRECATED
      }
      @VDM.lifecycle: {
             successor: '_BusinessUserBasic',
             status: #DEPRECATED
      }
      _BusinessUser,
      _Image,
      _ProjectRole,
      _ProjectRoleText,
      _EngagementProject,
      _WorkplaceAddress,
      _BusinessPartner,
      @Consumption.hidden: true
      _UserInvlmnt

}
```
