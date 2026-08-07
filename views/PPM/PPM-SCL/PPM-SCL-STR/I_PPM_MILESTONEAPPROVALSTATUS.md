---
name: I_PPM_MILESTONEAPPROVALSTATUS
description: Ppm Milestoneapprovalstatus
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - status
  - approval
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PPM_MILESTONEAPPROVALSTATUS

**Ppm Milestoneapprovalstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'MilestoneApprovalStatus'` |  | |  | `representativeKey: 'MilestoneApprovalStatus'` |  |  |
| `]` |  | |  | `supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]` |  |  |
| `}` |  | |  | `usageType: { serviceQuality: #B, dataClass: #MASTER, sizeCategory: #S }` |  |  |
| `'EntProjMilestoneApprovalStatus'` |  | |  | `sapObjectNodeType.name: 'EntProjMilestoneApprovalStatus'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Milestone Approval Status'
@AbapCatalog.sqlViewName: 'IPPMMSTAPPRVLSTS'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED
}

@ObjectModel:
{
   resultSet.sizeCategory: #XS, //Value help in Project Brief
   representativeKey: 'MilestoneApprovalStatus',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
   usageType:
   {
      serviceQuality: #B,
      dataClass: #MASTER,
      sizeCategory:   #S
   },
   sapObjectNodeType.name: 'EntProjMilestoneApprovalStatus'
}

@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}

//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
@ObjectModel.dataCategory: #VALUE_HELP

@Metadata.ignorePropagatedAnnotations: true

define view I_PPM_MilestoneApprovalStatus
  as select from dd07l
  composition [0..*] of I_PPM_MilestoneApprovalStsText as _Text
{
      //dd07l
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 5 ) as /s4ppm/tv_mlstn_apprvl_status ) as MilestoneApprovalStatus,

      _Text
}
where
      domname  = '/S4PPM/MLSTN_APPRVL_STATUS'
  and as4local = 'A'
```
