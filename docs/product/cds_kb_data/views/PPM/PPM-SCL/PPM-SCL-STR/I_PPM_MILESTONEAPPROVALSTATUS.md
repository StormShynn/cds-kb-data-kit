---
name: I_PPM_MILESTONEAPPROVALSTATUS
description: "Ppm Milestoneapprovalstatus"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
