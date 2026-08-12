---
name: I_PPM_MILESTONEAPPROVALSTSTEXT
description: "Ppm Milestoneapprovalststext"
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
  - text-view
  - text
  - approval
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PPM_MILESTONEAPPROVALSTSTEXT

**Ppm Milestoneapprovalststext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `MilestoneApprovalStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 5 ) as /s4ppm/tv_mlstn_apprvl_status )` |  |  |
| `MilestoneApprovalStatusText` |  | |  | `cast ( ddtext as /s4ppm/tv_mlstn_apprvl_sts_txt )` |  |  |
| `_Language` | | ✓ | | | | |
| `_MilestoneApprovalStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Milestone Approval Status - Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPPMMSTNARVLSTST'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED
//    privilegedAssociations: ['_MILESTONEAPPROVALSTATUS']
}

@Analytics.dataExtraction.enabled: true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'MilestoneApprovalStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@Metadata.ignorePropagatedAnnotations:true

//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API

define view I_PPM_MilestoneApprovalStsText
  as select from dd07t
  association        to parent I_PPM_MilestoneApprovalStatus as _MilestoneApprovalStatus on $projection.MilestoneApprovalStatus = _MilestoneApprovalStatus.MilestoneApprovalStatus
  association [0..1] to I_Language                           as _Language                on $projection.Language = _Language.Language

{
      @Semantics.language: true
  key cast( ddlanguage as spras )                                             as Language,

      @ObjectModel.text.element:['MilestoneApprovalStatusText']
  key cast ( substring( domvalue_l, 1, 5 ) as /s4ppm/tv_mlstn_apprvl_status ) as MilestoneApprovalStatus,

      // inhibit the field to be shown in the field list of a view. If you need the filed to be displayed, include it in your view and use UI.hidden:false
      // better, use text arranagement
      @Semantics.text: true
      @EndUserText.label: 'Milestone Approval Status'
      cast ( ddtext as /s4ppm/tv_mlstn_apprvl_sts_txt )                       as MilestoneApprovalStatusText,

      _MilestoneApprovalStatus,
      _Language
}
where
      domname  = '/S4PPM/MLSTN_APPRVL_STATUS'
  and as4local = 'A'
```
