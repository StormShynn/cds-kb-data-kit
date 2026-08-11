---
name: I_RESPYMGMTTEAMHEADERAPI
description: "This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPI')/$value
semantic_en: "This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Header Details — CDS view giao diện dựa trên I_RespyMgmtTeamHeaderBasic."
keywords:
  - "team"
  - "header"
  - "details"
  - "respy"
  - "mgmt"
  - "global"
  - "name"
  - "status"
  - "type"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
---
# I_RESPYMGMTTEAMHEADERAPI

**This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtTeamName` |  | |  |  | `CHAR(40)` | Name |
| `RespyMgmtTeamStatus` |  | |  |  | `CHAR(2)` | Team Status |
| `RespyMgmtTeamType` |  | |  |  | `CHAR(30)` | Team Type |
| `_TeamOwners` | | ✓ | | | | |
| `_TeamAttributes` | | ✓ | | | | |
| `_TeamMembers` | | ✓ | | | | |
| `_TeamType` | | ✓ | | | | |
| `_DirectSuperTeam` | | ✓ | | | | |
| `_TeamStatusTexts` | | ✓ | | | | |
| `_TeamHeaderTexts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamOwners` | `I_RespyMgmtTeamOwnerAPI` | [1..*] |
| `_TeamAttributes` | `I_RespyMgmtTeamAttributeAPI` | [1..*] |
| `_TeamMembers` | `I_RespyMgmtTeamMemberAPI` | [1..*] |
| `_TeamType` | `I_RespyMgmtTeamTypeAPI` | [1..1] |
| `_DirectSuperTeam` | `I_RespyMDirectSuperTeamAPI` | [0..1] |
| `_TeamStatusTexts` | `I_RespyMgmtTeamStatusTextAPI` | [0..*] |
| `_TeamHeaderTexts` | `I_RespyMgmtTeamHeaderAPIText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTEAMHEADAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'ResponsibilityManagementTeam'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE                                    
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Team Header Details'
define view I_RespyMgmtTeamHeaderAPI as select from I_RespyMgmtTeamHeaderBasic as _TeamHeader
  association [1..*] to I_RespyMgmtTeamOwnerAPI as _TeamOwners on $projection.RespyMgmtGlobalTeamID = _TeamOwners.RespyMgmtGlobalTeamID
  association [1..*] to I_RespyMgmtTeamAttributeAPI  as _TeamAttributes on $projection.RespyMgmtGlobalTeamID = _TeamAttributes.RespyMgmtGlobalTeamID
  association [1..*] to I_RespyMgmtTeamMemberAPI     as _TeamMembers on $projection.RespyMgmtGlobalTeamID = _TeamMembers.RespyMgmtGlobalTeamID
  association [1..1] to I_RespyMgmtTeamTypeAPI       as _TeamType        on $projection.RespyMgmtTeamType = _TeamType.RespyMgmtTeamType
  association [0..1] to I_RespyMDirectSuperTeamAPI   as _DirectSuperTeam on $projection.RespyMgmtGlobalTeamID = _DirectSuperTeam.RespyMgmtGlobalTeamID
  association [0..*] to I_RespyMgmtTeamStatusTextAPI as _TeamStatusTexts on $projection.RespyMgmtTeamStatus = _TeamStatusTexts.RespyMgmtTeamStatus
  association [0..*] to I_RespyMgmtTeamHeaderAPIText as _TeamHeaderTexts  on $projection.RespyMgmtGlobalTeamID = _TeamHeaderTexts.RespyMgmtGlobalTeamID
{
  key RespyMgmtGlobalTeamID,
      RespyMgmtTeamName,
      RespyMgmtTeamStatus,
      RespyMgmtTeamType,
      
      _TeamOwners,
      _TeamAttributes,
      _TeamMembers,
      _DirectSuperTeam,
      _TeamType,
      _TeamStatusTexts,
      _TeamHeaderTexts
}
where
  RespyMgmtGlobalTeamID <> ''
  and RespyMgmtTeamStatus <> '99';
```
