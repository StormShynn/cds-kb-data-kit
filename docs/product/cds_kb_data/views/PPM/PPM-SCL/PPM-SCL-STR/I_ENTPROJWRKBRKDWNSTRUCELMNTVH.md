---
name: I_ENTPROJWRKBRKDWNSTRUCELMNTVH
description: "Entprojwrkbrkdwnstrucelmntvh"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
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
  - value-help
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJWRKBRKDWNSTRUCELMNTVH

**Entprojwrkbrkdwnstrucelmntvh**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElement` | ✓ | |  |  |  |  |
| `ProjectElementUUID` |  | |  |  |  |  |
| `ProjectElementDescription` |  | |  |  |  |  |
| `Project` |  | | `_Project` | `Project` |  |  |
| `ProjectDescription` |  | | `_Project` | `ProjectDescription` |  |  |
| `ProcessingStatus` |  | |  |  |  |  |
| `ProcessingStatusText` |  | | `_ProcessingStatusText` | `ProcessingStatusText` |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ParentObjectUUID` |  | |  |  |  |  |
| `IsProjectMilestone` |  | |  |  |  |  |
| `_EnterpriseProject` |  | |  | `_Project` |  |  |
| `_ProcessingStatusText` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcessingStatusText` | `I_PPM_ProcessingStatusText` | [0..1] |
| `_ProjectElementExtension` | `E_PPM_Task` | [1..1] |
| `_EngagementProjElmtExtension` | `E_PPM_EngagementProjElmnt` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IWBSELMNT_VH'
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'WBS Element'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@ObjectModel.representativeKey: 'ProjectElement'
@Analytics.technicalName: 'IWrkBrkdwnStrucElmnt_VH'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
define view entity I_EntProjWrkBrkdwnStrucElmntVH
as select from I_EnterpriseProjectElement
association [0..1] to I_PPM_ProcessingStatusText  as _ProcessingStatusText    on  $projection.ProcessingStatus = _ProcessingStatusText.ProcessingStatus
                                                                              and _ProcessingStatusText.Language = $session.system_language
---Extension Association
association [1..1] to E_PPM_Task                     as _ProjectElementExtension         on  $projection.ProjectElementUUID = _ProjectElementExtension.TaskUUID
association [1..1] to E_PPM_EngagementProjElmnt      as _EngagementProjElmtExtension     on  $projection.ProjectElementUUID = _EngagementProjElmtExtension.TaskUUID
{
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  @EndUserText.label: 'WBS Element'
  key ProjectElement,
  @Consumption.hidden: true
  ProjectElementUUID,  
  @Semantics.text: true
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  @Consumption.valueHelpDefinition: [ {label: 'Project Element Description' } ]
  @EndUserText.label: 'WBS Element Description'
  ProjectElementDescription,
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  _Project.Project,
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  @EndUserText.label: 'Project Description'
  _Project.ProjectDescription,
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  @EndUserText.label: 'Processing Status'
  @ObjectModel.text.element: [ 'ProcessingStatusText' ]
//  @ObjectModel.text.association: '_ProcessingStatusText'
  @UI.textArrangement: #TEXT_ONLY
  @Consumption.valueHelpDefinition: [{ entity : {name: 'I_EntProjProcessingStatus', element: 'ProcessingStatus'  } }]
  ProcessingStatus,
  @Consumption.filter.hidden: true
  @EndUserText.label: 'Processing Status Text'
  @Semantics.text:true
  _ProcessingStatusText.ProcessingStatusText,
  
  @Consumption.hidden: true
  WBSElementInternalID,
  @Consumption.hidden: true
  ResponsibleCostCenter,
  @Consumption.hidden: true
  ProfitCenter,
  @Consumption.hidden: true
  CompanyCode,
  @Consumption.hidden: true
  ControllingArea,
  @Consumption.hidden: true
  ProjectUUID,
  @Consumption.hidden: true
  FunctionalArea,
  @Consumption.hidden: true
  Plant,
  @Consumption.hidden: true
  ParentObjectUUID,
  @Consumption.hidden: true
  @Semantics.booleanIndicator:true
  IsProjectMilestone,
  _Project as _EnterpriseProject,
  _EnterpriseProjectForUser,
//  _ParentElement,
  _ProcessingStatusText
}
where IsProjectMilestone <> 'X'
```
