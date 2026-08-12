---
name: I_ENGMNTPROJWITHUSERINVLMNT
description: "This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value
semantic_en: "This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Engagement Project with User Involvement — CDS view tổng hợp (transactional data) dựa trên I_EngagementProjectBasic."
keywords:
  - "engagement"
  - "project"
  - "with"
  - "user"
  - "involvement"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGMNTPROJWITHUSERINVLMNT

**This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  | `EngagementProjectUUID` | `RAW(16)` | Engagement Project UUID |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEPUSERINVL'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData: {
  blocking: #NOT_REQUIRED
  } }
@VDM: {
  viewType: #COMPOSITE
}
@ObjectModel: {
  usageType: {
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: #CDS_MODELING_ASSOCIATION_TARGET,
    modelingPattern: #NONE
  }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Engagement Project with User Involvement'
define view I_EngmntProjWithUserInvlmnt
  as select from           I_EngagementProjectBasic    as EngagementProject
    left outer to one join P_EngmntProjWithUserInvlmnt as IsMyProject on IsMyProject.EngagementProjectUUID = EngagementProject.EngagementProjectUUID
{
  key EngagementProject.EngagementProjectUUID as ProjectUUID,
      @Semantics.booleanIndicator: true
      IsMyProject.IsMyProject
}
```
