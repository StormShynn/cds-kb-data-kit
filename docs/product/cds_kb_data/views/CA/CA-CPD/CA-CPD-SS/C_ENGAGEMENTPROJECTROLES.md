---
name: C_ENGAGEMENTPROJECTROLES
description: "Project Roles restriction in BADI"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value
semantic_en: "Project Roles restriction in BADI"
semantic_vi: "Project Roles restriction in BADI — CDS view tiêu dùng dựa trên I_EngagementProjectRole."
keywords:
  - "project"
  - "roles"
  - "restriction"
  - "badi"
  - "engagement"
  - "team"
  - "role"
  - "business"
  - "user"
  - "category"
  - "employment"
  - "internal"
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - project
---
# C_ENGAGEMENTPROJECTROLES

**Project Roles restriction in BADI**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectTeamRole` | ✓ | |  |  | `CHAR(4)` | Role ID |
| `BusinessUser` |  | |  | `UserID` | `CHAR(12)` | User ID |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EmploymentInternalID` |  | |  |  | `CHAR(60)` | Member ID |
| `EmployeeFullName` |  | |  | `PersonFullName` | `CHAR(80)` | Full Name |
| `_EngagementProject` | | ✓ | | | | |
| `_PersonWorkAgreementDet` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_PersonWorkAgreementDet` | `I_PersnWrkAgreementDet` | [0..*] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [0..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGAGEMENTPROJECTROLES')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CENGMTPROJROLES'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Project Roles restriction in BADI'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE

//CDS View released to customers
define view C_EngagementProjectRoles
  as select from I_EngagementProjectRole as EngagementProjectRole
  association [0..1] to I_EngagementProject     as _EngagementProject      on $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..*] to I_PersnWrkAgreementDet  as _PersonWorkAgreementDet on $projection.EmploymentInternalID = _PersonWorkAgreementDet.PersonWorkAgreement
  association [0..*] to I_PersonWorkAgreement   as _PersonWorkAgreement    on $projection.EmploymentInternalID = _PersonWorkAgreement.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1 as _PersonWorkAgreement_1  on $projection.EmploymentInternalID = _PersonWorkAgreement_1.PersonWorkAgreement
  association [1]    to I_WorkforcePerson       as _WorkforcePerson        on $projection.EmployeeFullName = _WorkforcePerson.PersonFullName
{
  key EngagementProjectRole.EngagementProject                                    as EngagementProject,
  key EngagementProjectRole.EngagementProjectTeamRole                            as EngagementProjectTeamRole,
      EngagementProjectRole._PersonWorkAgreement._WorkforcePerson.UserID         as BusinessUser,
      EngagementProjectRole._EngagementProject.EngagementProjectCategory         as EngagementProjectCategory,
      EngagementProjectRole.EmploymentInternalID                                 as EmploymentInternalID,
      EngagementProjectRole._PersonWorkAgreement._WorkforcePerson.PersonFullName as EmployeeFullName,
      _EngagementProject,
      _Text,
      @Consumption.hidden: true
      _PersonWorkAgreementDet,
      @Consumption.hidden: true
      _WorkforcePerson,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PersonWorkAgreement_1'
      _PersonWorkAgreement,
      _PersonWorkAgreement_1
         
}
```
