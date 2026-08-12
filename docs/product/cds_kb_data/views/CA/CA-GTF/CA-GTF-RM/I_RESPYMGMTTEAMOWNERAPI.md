---
name: I_RESPYMGMTTEAMOWNERAPI
description: "This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value
semantic_en: "This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Owner Details — CDS view giao diện dựa trên R_RespyMgmtTeamOwnerAPI."
keywords:
  - "team"
  - "owner"
  - "details"
  - "respy"
  - "mgmt"
  - "global"
  - "type"
  - "responsibility"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
---
# I_RESPYMGMTTEAMOWNERAPI

**This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtTeamOwnerType` | ✓ | |  |  | `CHAR(2)` | Team Owner Type |
| `ResponsibilityTeamOwner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `_TeamHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamHeader` | `I_RespyMgmtTeamHeaderAPI` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTEAMOWNERAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Team Owner Details'
define view I_RespyMgmtTeamOwnerAPI
  as select from    R_RespyMgmtTeamOwnerAPI                  
    association to I_RespyMgmtTeamHeaderAPI as _TeamHeader 
    on $projection.RespyMgmtGlobalTeamID = _TeamHeader.RespyMgmtGlobalTeamID
{    
  key RespyMgmtGlobalTeamID,
  key RespyMgmtTeamOwnerType,
  key ResponsibilityTeamOwner    as ResponsibilityTeamOwner,

      _TeamHeader
}
```
