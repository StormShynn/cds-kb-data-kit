---
name: I_RESPYMDIRECTSUPERTEAMAPI
description: "This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value
semantic_en: "This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Direct super team — CDS view giao diện dựa trên R_RespyMgmtDirectSuperTeam."
keywords:
  - "direct"
  - "super"
  - "team"
  - "respy"
  - "mgmt"
  - "global"
  - "parent"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
---
# I_RESPYMDIRECTSUPERTEAMAPI

**This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtParentGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `_TeamHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamHeader` | `I_RespyMgmtTeamHeaderAPI` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMSUPRTMAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE  
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Direct super team'
define view I_RespyMDirectSuperTeamAPI   as select from R_RespyMgmtDirectSuperTeam as SuperTeam
  association to I_RespyMgmtTeamHeaderAPI as _TeamHeader on $projection.RespyMgmtGlobalTeamID = _TeamHeader.RespyMgmtGlobalTeamID
{
   key  SuperTeam.RespyMgmtGlobalTeamID as RespyMgmtGlobalTeamID,
        SuperTeam.RespyMgmtParentGlobalTeamID as RespyMgmtParentGlobalTeamID,
    _TeamHeader
}
```
