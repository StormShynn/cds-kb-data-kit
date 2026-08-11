---
name: I_ENGMNTPROJWITHUSERINVLMNT
description: "This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
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
