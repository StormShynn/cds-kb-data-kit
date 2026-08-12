---
name: I_RESPYMGMTTEAMHEADERAPITEXT
description: "This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value
semantic_en: "This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Responsibility Team Header - Text — CDS view giao diện dựa trên R_RespyMgmtTeamHeaderAPIText."
keywords:
  - "responsibility"
  - "team"
  - "header"
  - "text"
  - "respy"
  - "mgmt"
  - "global"
  - "language"
  - "description"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - bo:purchaseorder
---
# I_RESPYMGMTTEAMHEADERAPITEXT

**This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `RespyMgmtTeamDescription` |  | |  |  | `CHAR(50)` | Team Description |
| `_TeamHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamHeader` | `I_RespyMgmtTeamHeaderAPI` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTEAMHEADAPIT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.semanticKey:  [ 'RespyMgmtGlobalTeamID' ]  
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Responsibility Team Header - Text'
define view I_RespyMgmtTeamHeaderAPIText as select from R_RespyMgmtTeamHeaderAPIText as TeamHeaderText 
  association [1..1] to I_RespyMgmtTeamHeaderAPI     as _TeamHeader         on  $projection.RespyMgmtGlobalTeamID    = _TeamHeader.RespyMgmtGlobalTeamID
{
  key RespyMgmtGlobalTeamID,
      @Semantics.language:true
  key Language,
      @Semantics.text:true
      RespyMgmtTeamDescription,
      _TeamHeader
}
where
  RespyMgmtGlobalTeamID <> ''
  //and _TeamHeader.RespyMgmtTeamStatus <> '99'
  ;
```
