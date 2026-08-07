---
name: I_ENTERPRISEPROJECT
description: Enterpriseproject
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECT

**Enterpriseproject**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  | `guid` |  |  |
| `ProjectInternalID` |  | |  | `cast ( project.pspnr as ps_s4_proj_pspnr preserving type )` |  |  |
| `CustomerUUID` |  | |  | `customer` |  |  |
| `EnterpriseProjectServiceOrg` |  | |  | `org_id` |  |  |
| `EntProjectIsConfidential` |  | |  | `confidential` |  |  |
| `RestrictedTimePosting` |  | |  | `restrict_time_posting` |  |  |
| `ProjectCategory` |  | |  | `pro_category` |  |  |
| `ProjectSummaryTaskUUID` |  | |  | `guid` |  |  |
| `Project` |  | |  | `cast ( task.external_id as /s4ppm/project_id preserving type )` |  |  |
| `ProjectDescription` |  | |  | `name` |  |  |
| `ProcessingStatus` |  | |  | `proc_status_own` |  |  |
| `PlannedStartDate` |  | |  | `{ quickInfo : 'Earliest Planned Start', label : 'Earliest Planned Start', heading : 'Earliest Planned Start' } task.planstart_date` |  |  |
| `PlannedEndDate` |  | |  | `{ quickInfo : 'Earliest Planned Finish', label : 'Earliest Planned Finish', heading : 'Earliest Planned Finish' } task.planfinish_date` |  |  |
| `ActualStartDate` |  | |  | `actualstart_date` |  |  |
| `ActualFinishDate` |  | |  | `actualfinish_date` |  |  |
| `PriorityCode` |  | |  | `priority` |  |  |
| `EntProjIsMultiSlsOrdItmsEnbld` |  | |  | `multi_soi_enabled` |  |  |
| `ProjectStartDate` |  | |  | `{ quickInfo : 'Latest Planned Start', label : 'Latest Planned Start', heading : 'Latest Planned Start' } task.latest_start_date` |  |  |
| `ProjectEndDate` |  | |  | `{ quickInfo : 'Latest Planned Finish', label : 'Latest Planned Finish', heading : 'Latest Planned Finish' } task.latest_finish_date` |  |  |
| `WBSElementInternalID` |  | |  | `cast ( prps.pspnr as ps_s4_pspnr preserving type )` |  |  |
| `ProjectProfileCode` |  | |  | `profl` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `CompanyCode` |  | |  | `vbukr` |  |  |
| `ControllingArea` |  | |  | `vkokr` |  |  |
| `FunctionalArea` |  | |  | `func_area` |  |  |
| `Location` |  | |  | `stort` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Currency` |  | |  | `cast ( proj.cpcurr as /s4ppm/tv_project_currency preserving type )` |  |  |
| `AvailabilityControlProfile` |  | |  | `avc_profile` |  |  |
| `AvailabilityControlIsActive` |  | |  | `avc_active` |  |  |
| `InvestmentProfile` |  | |  | `imprf` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `EnterpriseProjectType` |  | |  | `prart` |  |  |
| `ResponsibleCostCenter` |  | |  | `fkstl` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `IsBillingRelevant` |  | |  | `fakkz` |  |  |
| `ResultAnalysisInternalID` |  | |  | `abgsl` |  |  |
| `LeadingSalesOrder` |  | |  | `vbeln_prps` |  |  |
| `LeadingSalesOrderItem` |  | |  | `posnr_prps` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `ProjectLastChangedByUser` |  | |  | `last_changed_by` |  |  |
| `ProjectLastChangedDateTime` |  | |  | `cast ( project.last_changed_on as /s4ppm/tv_proj_changed_on preserving type )` |  |  |
| `EntProjHasProjectStockEnabled` |  | |  | `entprojhasprojectstockenabled` |  |  |
| `EntProjectSettlementType` |  | |  | `entprojectsettlementtype` |  |  |
| `EntProjectSettlementElement` |  | |  | `entprojectsettlementelement` |  |  |
| `InventorySpecialStockValnType` |  | |  | `inventoryspecialstockvalntype` |  |  |
| `_ProjectElement` | | ✓ | | | | |
| `_ProjectRole` | | ✓ | | | | |
| `_ProjectTeamMember` | | ✓ | | | | |
| `_AuthUser` | | ✓ | | | | |
| `_AuthSubst` | | ✓ | | | | |
| `_AuthRole` | | ✓ | | | | |
| `_AuthGroup` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |
| `_EntProjProjectRespPersn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectElement` | `I_EnterpriseProjectElement` | [1..*] |
| `_ProjectRole` | `I_EnterpriseProjectRole` | [0..*] |
| `_ProjectTeamMember` | `I_EnterpriseProjectTeamMember` | [0..*] |
| `_ProjectExtension` | `E_PPM_Project` | [1..1] |
| `_EngagementProjectExtension` | `E_PPM_EngagementProject` | [1..1] |
| `_AuthUser` | `I_PPM_AuthznByUsrH` | [0..*] |
| `_AuthSubst` | `I_PPM_AuthznBySubstitH` | [0..*] |
| `_AuthRole` | `I_PPM_AuthznByUserRoleH` | [0..*] |
| `_AuthGroup` | `I_PPM_AuthznByUsrGrpH` | [0..*] |
| `_EnterpriseProjectForUser` | `I_EnterpriseProjectForUser` | [0..1] |
| `_EntProjProjectRespPersn` | `I_EntProjProjectRespPersn` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@EndUserText.label: 'Enterprise Project'

@AbapCatalog: {
    sqlViewName: 'IIENTERPROJ',
    compiler.compareFilter: true,
    preserveKey: true,
    dataMaintenance: #RESTRICTED
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
   semanticKey:       [ 'Project' ],
   representativeKey: 'ProjectUUID',
   alternativeKey: [{ id: 'ProjectInternalID', element: ['ProjectInternalID'], uniqueness: #UNIQUE },
                    { id: 'Project',           element: ['Project'],           uniqueness: #UNIQUE }],
   sapObjectNodeType.name: 'EnterpriseProject',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MASTER,
     sizeCategory:    #L
   }
}

@UI.headerInfo: {
  typeName:       'Project',
  typeNamePlural: 'Projects'
}

@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {

            mapping:[
                {
                    table: '/s4ppm/project', role: #MAIN,
                    viewElement: ['ProjectUUID'],
                    tableElement: ['guid']
                },
                {
                    table: '/s4ppm/task', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ProjectSummaryTaskUUID'],
                    tableElement: ['guid']},
                {
                    table: 'proj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ProjectInternalID'],
                    tableElement: ['pspnr']},
                {
                    table: 'prps', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['WBSElementInternalID'],
                    tableElement: ['pspnr']
                }


            ]
        }
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

define view I_EnterpriseProject
  as select from /s4ppm/project as project
    inner join   /s4ppm/task    as task on  task.project_guid = project.guid
                                        and object_type       = 'DPO'
    inner join   proj           as proj on proj.pspnr = project.pspnr
    inner join   prps           as prps on prps.pspnr = task.pspnr

  -- child assocciations
  association [1..*] to I_EnterpriseProjectElement    as _ProjectElement             on  $projection.ProjectUUID = _ProjectElement.ProjectUUID

  association [0..*] to I_EnterpriseProjectRole       as _ProjectRole                on  $projection.ProjectUUID = _ProjectRole.ProjectUUID

  association [0..*] to I_EnterpriseProjectTeamMember as _ProjectTeamMember          on  $projection.ProjectUUID = _ProjectTeamMember.ProjectUUID
 
  ---Extension Association
  association [1..1] to E_PPM_Project                 as _ProjectExtension           on  $projection.ProjectUUID = _ProjectExtension.ProjectUUID
  association [1..1] to E_PPM_EngagementProject       as _EngagementProjectExtension on  $projection.ProjectUUID = _EngagementProjectExtension.ProjectUUID

  // associations to authorization views
  association [0..*] to I_PPM_AuthznByUsrH            as _AuthUser                   on  _AuthUser.ReferencedObjectUUID = $projection.ProjectSummaryTaskUUID
                                                                                     and _AuthUser.UserID               = $session.user
                                                                                     and (
                                                                                        _AuthUser.Activity              = 'Admin'
                                                                                        or _AuthUser.Activity           = 'Write'
                                                                                        or _AuthUser.Activity           = 'Read'
                                                                                      )
  association [0..*] to I_PPM_AuthznBySubstitH        as _AuthSubst                  on  _AuthSubst.ReferencedObjectUUID = $projection.ProjectSummaryTaskUUID
                                                                                     and _AuthSubst.UserID               = $session.user
                                                                                     and (
                                                                                        _AuthSubst.Activity              = 'Admin'
                                                                                        or _AuthSubst.Activity           = 'Write'
                                                                                        or _AuthSubst.Activity           = 'Read'
                                                                                      )

  association [0..*] to I_PPM_AuthznByUserRoleH       as _AuthRole                   on  _AuthRole.ReferencedObjectUUID = $projection.ProjectSummaryTaskUUID
                                                                                     and _AuthRole.UserID               = $session.user
                                                                                     and (
                                                                                        _AuthRole.Activity              = 'Admin'
                                                                                        or _AuthRole.Activity           = 'Write'
                                                                                        or _AuthRole.Activity           = 'Read'
                                                                                      )
  association [0..*] to I_PPM_AuthznByUsrGrpH         as _AuthGroup                  on  _AuthGroup.ReferencedObjectUUID = $projection.ProjectSummaryTaskUUID
                                                                                     and _AuthGroup.UserID               = $session.user
                                                                                     and (
                                                                                        _AuthGroup.Activity              = 'Admin'
                                                                                        or _AuthGroup.Activity           = 'Write'
                                                                                        or _AuthGroup.Activity           = 'Read'
                                                                                      )
//For Cat 7 Authorization                                                                                      
association [0..1] to I_EnterpriseProjectForUser     as _EnterpriseProjectForUser on _EnterpriseProjectForUser.ProjectUUID = $projection.ProjectUUID

association [0..1] to I_EntProjProjectRespPersn     as _EntProjProjectRespPersn   on $projection.ProjectInternalID = _EntProjProjectRespPersn.ProjectInternalID
                                                                                 and $projection.ProjectUUID = _EntProjProjectRespPersn.ProjectUUID
{
      @ObjectModel.text.element: ['ProjectDescription']
  key project.guid                                                                  as ProjectUUID,
      cast ( project.pspnr as ps_s4_proj_pspnr preserving type )                    as ProjectInternalID,
      //2008 C4P Harmonization Start
      project.customer                                                              as CustomerUUID,
      project.org_id                                                                as EnterpriseProjectServiceOrg,
      project.confidential                                                          as EntProjectIsConfidential,
      project.restrict_time_posting                                                 as RestrictedTimePosting,
      @Consumption.hidden: true
      project.pro_category                                                          as ProjectCategory,
      //2008 C4P Harmonization End
      task.guid                                                                     as ProjectSummaryTaskUUID,
      cast ( task.external_id as /s4ppm/project_id preserving type )                as Project,
      @Semantics.text: true
      task.name                                                                     as ProjectDescription,
      task.proc_status_own                                                          as ProcessingStatus,
      @EndUserText:
         { quickInfo : 'Earliest Planned Start',
           label     : 'Earliest Planned Start',
           heading   : 'Earliest Planned Start' }
      task.planstart_date                                                           as PlannedStartDate,
      @EndUserText:
         { quickInfo : 'Earliest Planned Finish',
           label     : 'Earliest Planned Finish',
           heading   : 'Earliest Planned Finish' }
      task.planfinish_date                                                          as PlannedEndDate,
      task.actualstart_date                                                         as ActualStartDate,
      task.actualfinish_date                                                        as ActualFinishDate,
      task.priority                                                                 as PriorityCode,
      //2102 SD eppm N:1 indicator
      task.multi_soi_enabled                                                        as EntProjIsMultiSlsOrdItmsEnbld,
      //2008 C4P Harmonization Start
      @EndUserText:
         { quickInfo : 'Latest Planned Start',
           label     : 'Latest Planned Start',
           heading   : 'Latest Planned Start' }
      task.latest_start_date                                                        as ProjectStartDate,
      @EndUserText:
         { quickInfo : 'Latest Planned Finish',
           label     : 'Latest Planned Finish',
           heading   : 'Latest Planned Finish' }
      task.latest_finish_date                                                       as ProjectEndDate,
      //2105 EPPM-BW integration
      cast ( prps.pspnr as ps_s4_pspnr preserving type )                            as WBSElementInternalID,
      // prps.pspnr                                                                  as ProjectObjectReferenceElement,
      //2008 C4P Harmonization End
      proj.profl                                                                    as ProjectProfileCode,
      proj.prctr                                                                    as ProfitCenter,
      proj.vbukr                                                                    as CompanyCode,
      proj.vkokr                                                                    as ControllingArea,
      proj.func_area                                                                as FunctionalArea,
      proj.stort                                                                    as Location,
      proj.werks                                                                    as Plant,
      cast ( proj.cpcurr as /s4ppm/tv_project_currency preserving type )            as Currency,
      //2008 C4P Harmonization Start
      proj.avc_profile                                                              as AvailabilityControlProfile,
      proj.avc_active                                                               as AvailabilityControlIsActive,
      proj.imprf                                                                    as InvestmentProfile,
      proj.txjcd                                                                    as TaxJurisdiction,
      //2008 C4P Harmonization End
      prps.prart                                                                    as EnterpriseProjectType,
      prps.fkstl                                                                    as ResponsibleCostCenter,
      prps.tplnr                                                                    as FunctionalLocation,
      prps.fakkz                                                                    as IsBillingRelevant,
      //SO Integration
      prps.abgsl                                                                    as ResultAnalysisInternalID,
      prps.vbeln_prps                                                               as LeadingSalesOrder,
      prps.posnr_prps                                                               as LeadingSalesOrderItem,
      @Semantics.user.createdBy: true
      task.created_by                                                               as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      task.created_on                                                               as CreationDateTime,
      @Semantics.user.localInstanceLastChangedBy: true
      task.changed_by                                                               as LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      task.changed_on                                                               as LastChangeDateTime,
      project.last_changed_by                                                       as ProjectLastChangedByUser,
      cast ( project.last_changed_on as /s4ppm/tv_proj_changed_on preserving type ) as ProjectLastChangedDateTime,
      
      project.entprojhasprojectstockenabled                                         as EntProjHasProjectStockEnabled,
      project.entprojectsettlementtype                                              as EntProjectSettlementType,
      project.entprojectsettlementelement                                           as EntProjectSettlementElement,
      project.inventoryspecialstockvalntype                                         as InventorySpecialStockValnType,
   

      _ProjectElement,
      _ProjectRole,
      _ProjectTeamMember,
      _EnterpriseProjectForUser,

      // Authorization Association, do not expose externally
      @Consumption.hidden: true
      _AuthUser,
      @Consumption.hidden: true
      _AuthSubst,
      @Consumption.hidden: true
      _AuthRole,
      @Consumption.hidden: true
      _AuthGroup,
      _EntProjProjectRespPersn

}
```
