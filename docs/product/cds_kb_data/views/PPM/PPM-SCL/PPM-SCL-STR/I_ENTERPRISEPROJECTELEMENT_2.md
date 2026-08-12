---
name: I_ENTERPRISEPROJECTELEMENT_2
description: "Enterpriseprojectelement 2"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTELEMENT_2

**Enterpriseprojectelement 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` | ✓ | |  | `guid` |  |  |
| `ProjectElement` |  | |  | `cast ( task.external_id as /s4ppm/project_ele_id preserving type )` |  |  |
| `ProjectUUID` |  | |  | `project_guid` |  |  |
| `ProjectElementDescription` |  | |  | `name` |  |  |
| `ProcessingStatus` |  | |  | `proc_status_own` |  |  |
| `PlannedStartDate` |  | |  | `{ quickInfo : 'Latest Planned Start', label : 'Latest Planned Start', heading : 'Latest Planned Start' } task.latest_start_date` |  |  |
| `PlannedEndDate` |  | |  | `{ quickInfo : 'Latest Planned Finish', label : 'Latest Planned Finish', heading : 'Latest Planned Finish' } task.latest_finish_date` |  |  |
| `ActualStartDate` |  | |  | `actualstart_date` |  |  |
| `ActualFinishDate` |  | |  | `actualfinish_date` |  |  |
| `SortingNumber` |  | |  | `sort_number` |  |  |
| `EntProjectElementType` |  | |  | `task_type` |  |  |
| `IsProjectMilestone` |  | |  | `milestone` |  |  |
| `ForecastedEndDate` |  | |  | `forecast_finish_date` |  |  |
| `MilestoneApprovalStatus` |  | |  | `mlstn_apprvl_status` |  |  |
| `IsMainMilestone` |  | | `_tasktype` | `IsEssentialMilestone` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `WBSElementIsBillingElement` |  | |  | `fakkz` |  |  |
| `WBSElementInternalID` |  | |  | `cast ( task.pspnr as ps_s4_pspnr preserving type )` |  |  |
| `ProjectInternalID` |  | |  | `cast ( prps.psphi as ps_s4_proj_pspnr preserving type )` |  |  |
| `ParentObjectUUID` |  | |  | `cast ( hiera.up as /s4ppm/tv_parent_entity_guid preserving type )` |  |  |
| `ProjectElementOrdinalNumber` |  | |  | `cast (hiera.sort_number as /s4ppm/tv_sort_number preserving type )` |  |  |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` |  |  |
| `CompanyCode` |  | |  | `pbukr` |  |  |
| `ControllingArea` |  | |  | `pkokr` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `CostingSheet` |  | |  | `kalsm` |  |  |
| `FactoryCalendar` |  | |  | `fabkl` |  |  |
| `FunctionalArea` |  | |  | `func_area` |  |  |
| `InvestmentProfile` |  | |  | `imprf` |  |  |
| `Location` |  | |  | `stort` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `ResponsibleCostCenter` |  | |  | `fkstl` |  |  |
| `ResultAnalysisInternalID` |  | |  | `abgsl` |  |  |
| `LeadingSalesOrder` |  | |  | `vbeln_prps` |  |  |
| `LeadingSalesOrderItem` |  | |  | `posnr_prps` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `HierarchyNodeUUID` |  | |  | `guid` |  |  |
| `_Project` | | ✓ | | | | |
| `_EntProjElmntDlvbrl` | | ✓ | | | | |
| `_AuthUser` | | ✓ | | | | |
| `_AuthSubst` | | ✓ | | | | |
| `_AuthRole` | | ✓ | | | | |
| `_AuthGroup` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_EnterpriseProject` | [1..1] |
| `_EntProjElmntDlvbrl` | `I_EntProjElmntDlvbrl` | [1..*] |
| `_tasktype` | `I_PPM_Tasktype` | [0..1] |
| `_ProjectElementExtension` | `E_PPM_Task` | [1..1] |
| `_EngagementProjElmtExtension` | `E_PPM_EngagementProjElmnt` | [1..1] |
| `_AuthUser` | `I_PPM_AuthznByUsrH` | [0..*] |
| `_AuthSubst` | `I_PPM_AuthznBySubstitH` | [0..*] |
| `_AuthRole` | `I_PPM_AuthznByUserRoleH` | [0..*] |
| `_AuthGroup` | `I_PPM_AuthznByUsrGrpH` | [0..*] |
| `_EnterpriseProjectForUser` | `I_EnterpriseProjectForUser` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Element'

@AbapCatalog: {
    sqlViewName: 'IENTERPROJELE2',
    compiler.compareFilter: true,
    preserveKey: true,
    dataMaintenance: #RESTRICTED
}

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
   semanticKey:       [ 'ProjectElement' ],
   representativeKey: 'ProjectElementUUID',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION  ],
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MASTER,
     sizeCategory:    #XL
   }
}

@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: '/s4ppm/task', role: #MAIN,
                    viewElement: ['ProjectElementUUID'],
                    tableElement: ['guid']
                },
                {
                    table: 'prps', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WBSElementInternalID'],
                    tableElement: ['pspnr']
                },
                {
                    table: '/s4ppm/hierarchy', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['HierarchyNodeUUID'],
                    tableElement: ['guid']
                }
            ]
        }
}
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL 
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'EnterpriseProjectElement'

define view I_EnterpriseProjectElement_2
  as select from           /s4ppm/task      as task
  //Left Outer Join To get also Milestones
    left outer to one join prps             as prps  on prps.pspnr = task.pspnr


  // to make sure parent is empty in case of parent being PST
    left outer to one join /s4ppm/hierarchy as hiera on  hiera.object_guid    =  task.guid
                                                     and hiera.hierarchy_type =  'T'
                                                     and task.object_type     <> 'DPO'

  association [1..1] to I_EnterpriseProject       as _Project                     on  _Project.ProjectUUID = $projection.ProjectUUID
  association [1..*] to I_EntProjElmntDlvbrl      as _EntProjElmntDlvbrl          on  _EntProjElmntDlvbrl.ProjectElementUUID = $projection.ProjectElementUUID
  association [0..1] to I_PPM_Tasktype          as _tasktype                on  $projection.EntProjectElementType = _tasktype.TaskType

  // ---Extension Association
  association [1..1] to E_PPM_Task                as _ProjectElementExtension     on  $projection.ProjectElementUUID = _ProjectElementExtension.TaskUUID
  association [1..1] to E_PPM_EngagementProjElmnt as _EngagementProjElmtExtension on  $projection.ProjectElementUUID = _EngagementProjElmtExtension.TaskUUID

  // associations to authorization views
  association [0..*] to I_PPM_AuthznByUsrH        as _AuthUser                    on  _AuthUser.ReferencedObjectUUID = $projection.ProjectElementUUID
                                                                                  and _AuthUser.UserID               = $session.user
                                                                                  and (
                                                                                     _AuthUser.Activity              = 'Admin'
                                                                                     or _AuthUser.Activity           = 'Write'
                                                                                     or _AuthUser.Activity           = 'Read'
                                                                                   )
  association [0..*] to I_PPM_AuthznBySubstitH    as _AuthSubst                   on  _AuthSubst.ReferencedObjectUUID = $projection.ProjectElementUUID
                                                                                  and _AuthSubst.UserID               = $session.user
                                                                                  and (
                                                                                     _AuthSubst.Activity              = 'Admin'
                                                                                     or _AuthSubst.Activity           = 'Write'
                                                                                     or _AuthSubst.Activity           = 'Read'
                                                                                   )
  association [0..*] to I_PPM_AuthznByUserRoleH   as _AuthRole                    on  _AuthRole.ReferencedObjectUUID = $projection.ProjectElementUUID
                                                                                  and _AuthRole.UserID               = $session.user
                                                                                  and (
                                                                                     _AuthRole.Activity              = 'Admin'
                                                                                     or _AuthRole.Activity           = 'Write'
                                                                                     or _AuthRole.Activity           = 'Read'
                                                                                   )
  association [0..*] to I_PPM_AuthznByUsrGrpH     as _AuthGroup                   on  _AuthGroup.ReferencedObjectUUID = $projection.ProjectElementUUID
                                                                                  and _AuthGroup.UserID               = $session.user
                                                                                  and (
                                                                                     _AuthGroup.Activity              = 'Admin'
                                                                                     or _AuthGroup.Activity           = 'Write'
                                                                                     or _AuthGroup.Activity           = 'Read'
                                                                                   )
//For Cat 7 Authorization                                                                                      
association [0..1] to I_EnterpriseProjectForUser     as _EnterpriseProjectForUser on _EnterpriseProjectForUser.ProjectUUID = $projection.ProjectUUID

{
      @ObjectModel.text.element: ['ProjectElementDescription']
  key task.guid                                                          as ProjectElementUUID,
      cast ( task.external_id as /s4ppm/project_ele_id preserving type ) as ProjectElement,
      @ObjectModel.foreignKey.association: '_Project'
      task.project_guid                                                  as ProjectUUID,
      @Semantics.text: true
      task.name                                                          as ProjectElementDescription,
      task.proc_status_own                                               as ProcessingStatus,

      @EndUserText:
         { quickInfo : 'Latest Planned Start',
           label     : 'Latest Planned Start',
           heading   : 'Latest Planned Start'  }
      task.latest_start_date                                             as PlannedStartDate,
      @EndUserText:
         { quickInfo : 'Latest Planned Finish',
           label     : 'Latest Planned Finish',
           heading   : 'Latest Planned Finish' }
      task.latest_finish_date                                            as PlannedEndDate,
      task.actualstart_date                                              as ActualStartDate,
      task.actualfinish_date                                             as ActualFinishDate,
      task.sort_number                                                   as SortingNumber,
      //2008 EPPM Harmonization Start
      task.task_type                                                     as EntProjectElementType,
      @Semantics.booleanIndicator: true
      task.milestone                                                     as IsProjectMilestone,
      //milestone
      task.forecast_finish_date                                          as ForecastedEndDate,            
      task.mlstn_apprvl_status                                           as MilestoneApprovalStatus,
      _tasktype.IsEssentialMilestone                                     as IsMainMilestone,

      prps.txjcd                                                         as TaxJurisdiction,
      prps.tplnr                                                         as FunctionalLocation,
      prps.fakkz                                                         as WBSElementIsBillingElement,
      //2008 EPPM Harmonization End
      cast ( task.pspnr as ps_s4_pspnr preserving type )                 as WBSElementInternalID,
      // 2105 Adding Project internal ID as part of BW integration.
      cast ( prps.psphi as ps_s4_proj_pspnr preserving type )            as ProjectInternalID,

      cast ( hiera.up as /s4ppm/tv_parent_entity_guid preserving type )  as ParentObjectUUID,
      cast (hiera.sort_number as /s4ppm/tv_sort_number preserving type ) as ProjectElementOrdinalNumber,

      prps.xstat                                                         as WBSIsStatisticalWBSElement,
      prps.pbukr                                                         as CompanyCode,
      prps.pkokr                                                         as ControllingArea,
      prps.kostl                                                         as CostCenter,
      prps.kalsm                                                         as CostingSheet,
      prps.fabkl                                                         as FactoryCalendar,
      prps.func_area                                                     as FunctionalArea,
      prps.imprf                                                         as InvestmentProfile,
      prps.stort                                                         as Location,
      prps.werks                                                         as Plant,
      prps.prctr                                                         as ProfitCenter,
      prps.fkstl                                                         as ResponsibleCostCenter,
      //SO Integration
      prps.abgsl                                                         as ResultAnalysisInternalID,
      prps.vbeln_prps                                                    as LeadingSalesOrder,
      prps.posnr_prps                                                    as LeadingSalesOrderItem,
      @Semantics.user.createdBy: true
      task.created_by                                                    as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      task.created_on                                                    as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      task.changed_by                                                    as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      task.changed_on                                                    as LastChangeDateTime,

      hiera.guid                                                         as HierarchyNodeUUID,


      //_CostCenter._Text[1:Language = $session.system_language].CostCenterName ,
      _Project,
      _EntProjElmntDlvbrl,
      // Authorization Association, do not expose externally
      @Consumption.hidden: true
      _AuthUser,
      @Consumption.hidden: true
      _AuthSubst,
      @Consumption.hidden: true
      _AuthRole,
      @Consumption.hidden: true
      _AuthGroup,
      //     _CostCenter
      _EnterpriseProjectForUser
}
```
