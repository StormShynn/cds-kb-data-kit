---
name: I_RESPYMGMTTEAMMEMBERFUNCAPI
description: "This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value
semantic_en: "This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Member Function Details — CDS view giao diện dựa trên R_RespyMgmtTeamMemberFuncAPI."
keywords:
  - "team"
  - "member"
  - "function"
  - "details"
  - "respy"
  - "mgmt"
  - "global"
  - "responsibility"
  - "type"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - task
---
# I_RESPYMGMTTEAMMEMBERFUNCAPI

**This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `ResponsibilityTeamMember` | ✓ | |  | `cast(RespyMgmtTeamMemberID as bu_partner)` | `CHAR(10)` | Business Partner Number |
| `RespyMgmtTeamMemberType` | ✓ | |  |  | `CHAR(2)` | Team Member Type |
| `RespyMgmtFunction` | ✓ | |  |  | `CHAR(10)` | Function |
| `_TeamMember` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamMember` | `I_RespyMgmtTeamMemberAPI` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTMMRFUNAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #MANDATORY

@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Team Member Function Details'
define view I_RespyMgmtTeamMemberFuncAPI
  as select from R_RespyMgmtTeamMemberFuncAPI
  association [1..1] to I_RespyMgmtTeamMemberAPI as _TeamMember on  $projection.RespyMgmtGlobalTeamID    = _TeamMember.RespyMgmtGlobalTeamID
                                                                and $projection.ResponsibilityTeamMember = _TeamMember.ResponsibilityTeamMember
                                                                and $projection.RespyMgmtTeamMemberType  = _TeamMember.RespyMgmtTeamMemberType

{
  key RespyMgmtGlobalTeamID,
  key cast(RespyMgmtTeamMemberID as bu_partner) as ResponsibilityTeamMember,
  key RespyMgmtTeamMemberType,
  key RespyMgmtFunction                         as RespyMgmtFunction,

      // Association to parent
      _TeamMember
}
```
