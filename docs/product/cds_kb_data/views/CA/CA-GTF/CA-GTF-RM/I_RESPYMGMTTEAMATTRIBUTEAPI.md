---
name: I_RESPYMGMTTEAMATTRIBUTEAPI
description: "This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value
semantic_en: "This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Team Attribute Details — CDS view giao diện dựa trên R_RespyMgmtTeamAttributeAPI."
keywords:
  - "team"
  - "attribute"
  - "details"
  - "respy"
  - "mgmt"
  - "global"
  - "name"
  - "sign"
  - "option"
  - "value"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - plan
---
# I_RESPYMGMTTEAMATTRIBUTEAPI

**This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` | ✓ | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtAttributeName` | ✓ | |  | `RespyMgmtReferenceAttribName` | `CHAR(30)` | Responsibility Definition Name |
| `RespyMgmtAttributeSign` | ✓ | |  |  | `CHAR(1)` | Type of SIGN component in row type of a Ranges type |
| `RespyMgmtAttributeOption` | ✓ | |  |  | `CHAR(2)` | Type of OPTION component in row type of a Ranges type |
| `RespyMgmtAttributeLowValue` | ✓ | |  |  | `CHAR(50)` | Start Value of Selection Criteria |
| `RespyMgmtAttributeHighValue` | ✓ | |  |  | `CHAR(50)` | End Value of Selection Criteria |
| `_TeamHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TeamHeader` | `I_RespyMgmtTeamHeaderAPI` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSMTEAMATTRAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #MANDATORY

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE , 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE  
@ObjectModel.semanticKey:  [ 'RespyMgmtAttributeName' ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@EndUserText.label: 'Team Attribute Details'
define view I_RespyMgmtTeamAttributeAPI
  as select from R_RespyMgmtTeamAttributeAPI
  association to I_RespyMgmtTeamHeaderAPI as _TeamHeader on $projection.RespyMgmtGlobalTeamID = _TeamHeader.RespyMgmtGlobalTeamID
{
  key RespyMgmtGlobalTeamID,
  key RespyMgmtReferenceAttribName as RespyMgmtAttributeName,
  key RespyMgmtAttributeSign,
  key RespyMgmtAttributeOption,
  key RespyMgmtAttributeLowValue,
  key RespyMgmtAttributeHighValue,
      _TeamHeader
}
```
