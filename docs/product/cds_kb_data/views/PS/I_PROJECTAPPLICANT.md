---
name: I_PROJECTAPPLICANT
description: "Project Applicant"
app_component: PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value
semantic_en: "Project Applicant"
semantic_vi: "Project Applicant — CDS view giao diện dựa trên tcj05."
keywords:
  - "project"
  - "applicant"
  - "code"
  - "name"
  - "blocked"
tags:
  - PS
  - bo:project
  - component:PS
  - interface-view
  - project
---
# I_PROJECTAPPLICANT

**Project Applicant**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ApplicantCode` | ✓ | |  | `astnr` | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  | `astna` | `CHAR(25)` | Applicant |
| `ProjectApplicantIsBlocked` |  | |  | `blocked` | `CHAR(1)` | Blocked |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTAPPLICANT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROJAPPLICANT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Project Applicant'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_ProjectApplicant
  as select from tcj05
{
      @ObjectModel.text.element: 'ApplicantCode'
  key astnr       as ApplicantCode,
      @Semantics.text: true
      astna       as ApplicantName,
      blocked     as ProjectApplicantIsBlocked
}
```
