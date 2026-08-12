---
name: I_RESPYMGMTTEAMTYPEAPI
description: "This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value
semantic_en: "This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Type Details — CDS view giao diện dựa trên R_RespyMgmtTeamTypeAPI."
keywords:
  - "team"
  - "type"
  - "details"
  - "respy"
  - "mgmt"
  - "category"
tags:
  - CA
  - bo:businesspartner
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
---
# I_RESPYMGMTTEAMTYPEAPI

**This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtTeamType` | ✓ | |  |  | `CHAR(30)` | Team Type |
| `RespyMgmtTeamCategory` |  | |  |  | `CHAR(30)` | Team Category |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTEAMTYPEAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.type: #FULL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE  
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Team Type Details'
define view I_RespyMgmtTeamTypeAPI as select from R_RespyMgmtTeamTypeAPI as TeamType
{
  key RespyMgmtTeamType,   
      RespyMgmtTeamCategory

}
```
