---
name: I_ENTERPRISEPROJECTFORUSER
description: "This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value
semantic_en: "This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Enterprise Project with user involvement — CDS view giao diện (transactional data) dựa trên R_EnterpriseProjectRoot."
keywords:
  - "enterprise"
  - "project"
  - "with"
  - "user"
  - "involvement"
  - "category"
  - "service"
  - "confidential"
tags:
  - PPM
  - bo:businesspartner
  - component:PPM-SCL-STR
  - customer
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - bo:project
---
# I_ENTERPRISEPROJECTFORUSER

**This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  |  | `RAW(16)` | Entity Guid |
| `ProjectCategory` |  | |  |  | `CHAR(1)` | Project Category |
| `EnterpriseProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EntProjectIsConfidential` |  | |  |  | `CHAR(1)` | Enterprise Project Is Confidential |
| `UserID` |  | |  | `case when User.UserID is null then 'A' when User.UserID is not null then User.UserID end` | `CHAR(12)` | User ID |
| `IsMyProject` |  | |  | `case when User.UserID is not null then cast ('X' as /s4ppm/myproject preserving type ) end` | `CHAR(1)` | User Involvement in Project |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData: {
  blocking: #NOT_REQUIRED
  } }

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern:  #NONE
  }

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Enterprise Project with user involvement'
//This view is also used in DCL of Cat 7 Projects
define view entity I_EnterpriseProjectForUser
  as select from           R_EnterpriseProjectRoot    as Project
    left outer to one join P_EnterpriseProjectForUser as User on User.ProjectUUID = Project.ProjectUUID
{
  key Project.ProjectUUID     as ProjectUUID,
      Project.ProjectCategory as ProjectCategory,
      Project.EnterpriseProjectServiceOrg,
      Project.EntProjectIsConfidential,

      case
          when User.UserID is null
          then 'A'
          when User.UserID is not null
          then User.UserID
          end                 as UserID,

      @Semantics.booleanIndicator: true
      @Environment.sql.passValue: true
      case
          when User.UserID is not null
          then cast ('X' as /s4ppm/myproject preserving type )
          end                 as IsMyProject

}
//This Where condition is added to improve the performance for professional services projects in the applications
//As this view is used in DCL of R_EnterpriseProject for Cat 7 Projects this explicit filter is required here
where
  Project.ProjectCategory = '7'
```
