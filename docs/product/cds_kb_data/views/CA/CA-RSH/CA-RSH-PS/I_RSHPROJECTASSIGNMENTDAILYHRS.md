---
name: I_RSHPROJECTASSIGNMENTDAILYHRS
description: "This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?"
app_component: CA-RSH-PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?"
semantic_vi: "Resource Assignments per Day — CDS view giao diện dựa trên I_RSHProjectAssignmentPerDay."
keywords:
  - "resource"
  - "assignments"
  - "per"
  - "day"
  - "proj"
  - "assignment"
  - "date"
  - "duration"
  - "unit"
tags:
  - CA
  - bo:plant
  - CA-RSH
  - CA-RSH-PS
  - component:CA-RSH-PS
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_RSHPROJECTASSIGNMENTDAILYHRS

**This CDS view provides the prerequisites for answering the following business question: How many hours per day is a resource assigned to a project for a given assignment?**

| Property | Value |
|---|---|
| App Component | `CA-RSH-PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjAssignmentPerDayUUID` | ✓ | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ProjAssignmentUUID` |  | |  |  | `RAW(16)` | UUID in X form (binary) |
| `ProjAssignmentDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `ProjAssignmentDuration` |  | |  |  | `QUAN(15)` | Assignment Duration |
| `ProjAssignmentDurationUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ProjAssignmentDurationInHours` |  | |  |  | `DEC(15)` | Project Assignment Duration in Hours |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RSHPROJECTASSIGNMENTDAILYHRS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRSHPRJASGPDH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Resource Assignments per Day'


/*
CONTRACT**********************************************************************************************************************

Name:                       RELEASED CDS VIEW for Project Assignment DAILY Assignments
Specification:              Read Only CDS View for Customer use in View Builder to read Daily Assginment Data
Requires:                   NA
Ensures:                    NA
Owners:                     TR
Contributors:               NA
Unit Test required Y/N:     N
Additional comments         None

END OF CONTRACT***************************************************************************************************************
*/


define view I_RSHProjectAssignmentDailyHrs 
  
  as select from I_RSHProjectAssignmentPerDay  

  {

  key ProjAssignmentPerDayUUID,
      ProjAssignmentUUID,  
      ProjAssignmentDate, 
      ProjAssignmentDuration, 
      ProjAssignmentDurationUnit,
      ProjAssignmentDurationInHours

}
```
