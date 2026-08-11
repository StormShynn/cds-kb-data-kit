---
name: I_RESOURCEREQUEST
description: "This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?"
semantic_vi: "Resource Request — CDS view giao diện dựa trên Resource Request."
keywords:
  - "resource"
  - "request"
  - "engagement"
  - "project"
  - "work"
  - "package"
  - "status"
  - "start"
  - "date"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - bo:salesorder
---
# I_RESOURCEREQUEST

**This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResourceRequestUUID` | ✓ | |  | `demand_key` | `RAW(16)` | Demand Key |
| `EngagementProject` |  | |  | `mp_id` | `CHAR(40)` | Commercial Project ID |
| `WorkPackage` |  | |  | `wp_id` | `CHAR(50)` | Plan Item |
| `ResourceRequestStatus` |  | |  | `status` | `CHAR(1)` | Assignment Status for a Resource Demand |
| `StartDate` |  | |  | `start_date` | `DATS(8)` | Field of type DATS |
| `EndDate` |  | |  | `end_date` | `DATS(8)` | Field of type DATS |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( created_on as /cpd/cpm_createdon )` | `DEC(15)` | Created On |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Changed By |
| `LastChangeDateTime` |  | |  | `cast( changed_on as /cpd/cpm_changedon )` | `DEC(15)` | Commercial Project Last Changed On |
| `_EngagementProject` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_ResourceRequestSkillTag` | | ✓ | | | | |
| `_ResourceRequestPlanItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_ResourceRequestSkillTag` | `I_ResourceRequestSkillTag` | [0..1] |
| `_ResourceRequestPlanItem` | `I_ResourceRequestPlanItem` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSRCEREQUEST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ResourceRequestUUID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.viewType: #BASIC
@EndUserText.label: 'Resource Request'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE

define view I_ResourceRequest
  as select from /cpd/demand_hdr

  association [0..1] to I_EngagementProject       as _EngagementProject       on $projection.EngagementProject = _EngagementProject.EngagementProject

  association [0..1] to I_WorkPackage             as _WorkPackage             on $projection.WorkPackage = _WorkPackage.WorkPackage

  association [0..1] to I_ResourceRequestSkillTag as _ResourceRequestSkillTag on $projection.ResourceRequestUUID = _ResourceRequestSkillTag.ResourceRequestUUID

  association [0..*] to I_ResourceRequestPlanItem as _ResourceRequestPlanItem on $projection.ResourceRequestUUID = _ResourceRequestPlanItem.ResourceRequestUUID
{
      //Demand
  key demand_key                                as ResourceRequestUUID,
      mp_id                                     as EngagementProject,
      wp_id                                     as WorkPackage,
      status                                    as ResourceRequestStatus,
      start_date                                as StartDate,
      end_date                                  as EndDate,
      created_by                                as CreatedByUser,
      @Semantics.dateTime:true
      @Semantics.systemDateTime.createdAt:true
      cast( created_on as /cpd/cpm_createdon )  as CreationDateTime,
      changed_by                                as LastChangedByUser,
      @Semantics.dateTime:true
      @Semantics.systemDateTime.lastChangedAt:true
      cast( changed_on as /cpd/cpm_changedon )  as LastChangeDateTime,
      _EngagementProject,
      _WorkPackage,
      _ResourceRequestSkillTag,
      _ResourceRequestPlanItem
}
```
