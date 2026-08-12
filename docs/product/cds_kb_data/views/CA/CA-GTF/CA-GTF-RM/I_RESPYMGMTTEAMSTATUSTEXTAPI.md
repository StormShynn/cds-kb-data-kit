---
name: I_RESPYMGMTTEAMSTATUSTEXTAPI
description: "This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value
semantic_en: "This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Status — CDS view giao diện dựa trên I_RespyMgmtTeamStatusText."
keywords:
  - "team"
  - "status"
  - "respy"
  - "mgmt"
  - "language"
  - "text"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
---
# I_RESPYMGMTTEAMSTATUSTEXTAPI

**This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtTeamStatus` | ✓ | |  | `cast( RespyMgmtTeamStatus as rsm_de_team_status )` | `CHAR(2)` | Team Status |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `RespyMgmtTeamStatusText` |  | |  | `RespyMgmtTeamStatusDescription` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTMSTATUSAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.semanticKey:  [ 'RespyMgmtTeamStatus' ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Team Status'
define view I_RespyMgmtTeamStatusTextAPI as select from I_RespyMgmtTeamStatusText
{
  key cast( RespyMgmtTeamStatus as rsm_de_team_status ) as RespyMgmtTeamStatus,
      @Semantics.language:true
  key Language,
      @Semantics.text:true
      RespyMgmtTeamStatusDescription as RespyMgmtTeamStatusText
} where RespyMgmtTeamStatus <> '99';
```
