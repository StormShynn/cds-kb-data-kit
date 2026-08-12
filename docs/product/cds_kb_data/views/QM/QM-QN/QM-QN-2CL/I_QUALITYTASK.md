---
name: I_QUALITYTASK
description: "Qualitytask"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYTASK

**Qualitytask**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityTaskInternalId` | ✓ | |  | `cast( qmsm.qmnum as qtaskinternalid preserving type )` |  |  |
| `QualityTask` |  | |  | `cast( substring(qmsm.qmnum,2,11) as qtaskid preserving type )` |  |  |
| `QualityTaskOrigin` |  | |  | `taskorigin` |  |  |
| `QualityTaskType` |  | |  | `tasktype` |  |  |
| `QualityTaskText` |  | |  | `cast( qmsm.matxt as vdm_qtaskdesc preserving type )` |  |  |
| `IsDeleted` |  | |  | `kzloesch` |  |  |
| `QualityTaskProcessor` |  | |  | `processor` |  |  |
| `MasterLanguage` |  | |  | `kzmla` |  |  |
| `QualityTaskCodeCatalog` |  | |  | `mnkat` |  |  |
| `QualityTaskCodeGroup` |  | |  | `cast( qmsm.mngrp as vdm_qtaskcodegrp preserving type )` |  |  |
| `QualityTaskCode` |  | |  | `mncod` |  |  |
| `NotifTaskTimeZone` |  | |  | `tzonsm` |  |  |
| `NotifTaskPlannedEndDate` |  | |  | `cast( qmsm.peter as vdm_qtaskplannedenddate preserving type )` |  |  |
| `NotifTaskPlannedEndTime` |  | |  | `cast( qmsm.petur as vdm_qtaskplannedendtime preserving type )` |  |  |
| `NotifTaskCompletionDate` |  | |  | `cast( qmsm.erldat as vdm_qtaskcompletiondate preserving type )` |  |  |
| `NotifTaskCompletionTime` |  | |  | `cast( qmsm.erlzeit as vdm_qtaskcompletiontime preserving type )` |  |  |
| `NotifTaskResubmissionDate` |  | |  | `wdvdat` |  |  |
| `NotifTaskResubmissionTime` |  | |  | `wdvzeit` |  |  |
| `NotifTaskCompletedByUser` |  | |  | `cast( qmsm.erlnam as vdm_qtaskcompletedby preserving type )` |  |  |
| `DefectInternalID` |  | |  | `defectinternalid` |  |  |
| `ProbSolvingProc` |  | |  | `probsolvingprocess` |  |  |
| `ProbSolvingProcStp` |  | |  | `probsolvingprocessstep` |  |  |
| `ProbSolvingProcCause` |  | |  | `prbobsolvproccause` |  |  |
| `PredecessorQltyTaskIntNumber` |  | |  | `prdcssrqtaskinternalid` |  |  |
| `QltyTaskFollowUpAction` |  | |  | `folgeact` |  |  |
| `QualityTaskLifecycleStatus` |  | |  | `statlcycle` |  |  |
| `QualityTaskArchivingStatus` |  | |  | `statacycle` |  |  |
| `QltyTaskFllwUpActionSts` |  | |  | `statfoa` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `cast( qmsm.erzeit as vdm_qerstezeit preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `changeddatetime` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeTime` |  | |  | `cast( qmsm.aezeit as vdm_qaendezeit preserving type )` |  |  |
| `QltyTskProcgIsCtrldByTskOrigin` |  | |  | `taskiscontrolledbyorigin` |  |  |
| `QltyTaskTimeBasedEffort` |  | |  | `timebasedeffort` |  |  |
| `QltyTaskTimeBasedEffortUoM` |  | |  | `timebasedeffortuom` |  |  |
| `_QltyTaskFllwUpActionParam` | | ✓ | | | | |
| `_Defect` | | ✓ | | | | |
| `_QualityTaskOrigin` | | ✓ | | | | |
| `_QualityTaskProcessor` | | ✓ | | | | |
| `_QualityTaskCodeCatalog` | | ✓ | | | | |
| `_QltyTskCodeGroup` | | ✓ | | | | |
| `_QltyTskCode` | | ✓ | | | | |
| `_QltyTaskFollowUpAction` | | ✓ | | | | |
| `_QualityTaskType` | | ✓ | | | | |
| `_PredecessorQualityTask` | | ✓ | | | | |
| `_ProbSolvingProc` | | ✓ | | | | |
| `_ProbSolvingProcStp` | | ✓ | | | | |
| `_ProbSolvingProcCause` | | ✓ | | | | |
| `_CreatedByUserContactCard` | | ✓ | | | | |
| `_CompletedByUserContactCard` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |
| `_QualityTaskStatus` | | ✓ | | | | |
| `_QltyTaskArchivingStatus` | | ✓ | | | | |
| `_QltyTaskFllwUpActionSts` | | ✓ | | | | |
| `_QltyTskProcTimeUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyTaskFllwUpActionParam` | `I_QltyTaskFllwUpActionParam` | [0..*] |
| `_Defect` | `I_Defect` | [0..1] |
| `_QualityTaskOrigin` | `I_QltyTaskOrigin` | [1..1] |
| `_QualityTaskProcessor` | `I_QltyBPWithUser` | [0..1] |
| `_QualityTaskCodeCatalog` | `I_Inspectioncatalog` | [0..1] |
| `_QltyTskCodeGroup` | `I_QltyTskCodeGroup` | [0..1] |
| `_QltyTskCode` | `I_QltyTskCode` | [0..1] |
| `_QltyTaskFollowUpAction` | `I_QltyTaskFollowUpAction` | [0..1] |
| `_QualityTaskType` | `I_QualityTaskType` | [1..1] |
| `_PredecessorQualityTask` | `I_QualityTask` | [1..1] |
| `_ProbSolvingProc` | `I_ProbSolvingProc` | [0..1] |
| `_ProbSolvingProcStp` | `I_ProbSolvingProcStp` | [0..1] |
| `_ProbSolvingProcCause` | `I_ProbSolvingProcCause` | [0..1] |
| `_CreatedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_CompletedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_QualityTaskStatus` | `I_QualityTaskStatus` | [1..1] |
| `_QltyTaskArchivingStatus` | `I_QltyTaskArchivingStatus` | [1..1] |
| `_QltyTaskFllwUpActionSts` | `I_QltyTaskFllwUpActionSts` | [0..1] |
| `_QltyTskProcTimeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_NotificationTask` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Quality Task'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IQLTYTSK'

@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    semanticKey:  [ 'QualityTask' ],
    representativeKey: 'QualityTaskInternalId',
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A }
} 
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_QualityTask as select from qmsm
//=== BO Aggregations
    association [0..*] to I_QltyTaskFllwUpActionParam as _QltyTaskFllwUpActionParam on $projection.QualityTaskInternalId = _QltyTaskFllwUpActionParam.QualityTaskInternalId

//=== Assocation to QM specific views 
    association [0..1] to I_Defect            as _Defect                        on $projection.DefectInternalID = _Defect.DefectInternalID
    association [1..1] to I_QltyTaskOrigin    as _QualityTaskOrigin             on $projection.QualityTaskOrigin = _QualityTaskOrigin.QualityTaskOrigin     
    association [0..1] to I_QltyBPWithUser    as _QualityTaskProcessor          on $projection.QualityTaskProcessor = _QualityTaskProcessor.BusinessPartner
    association [0..1] to I_Inspectioncatalog as _QualityTaskCodeCatalog        on $projection.QualityTaskCodeCatalog = _QualityTaskCodeCatalog.InspectionCatalog
    association [0..1] to I_QltyTskCodeGroup  as _QltyTskCodeGroup              on $projection.QualityTaskCodeGroup = _QltyTskCodeGroup.QualityTaskCodeGroup
    association [0..1] to I_QltyTskCode       as _QltyTskCode                   on $projection.QualityTaskCodeGroup    = _QltyTskCode.QualityTaskCodeGroup and
                                                                                   $projection.QualityTaskCode         = _QltyTskCode.QualityTaskCode
    association [0..1] to I_QltyTaskFollowUpAction as _QltyTaskFollowUpAction   on $projection.QltyTaskFollowUpAction = _QltyTaskFollowUpAction.QltyTaskFollowUpAction
    association [1..1] to I_QualityTaskType   as _QualityTaskType               on $projection.QualityTaskType = _QualityTaskType.QualityTaskType

    association [1..1] to I_QualityTask       as _PredecessorQualityTask        on $projection.PredecessorQltyTaskIntNumber = _PredecessorQualityTask.QualityTaskInternalId

//=== Problem Solving Process
    association [0..1] to I_ProbSolvingProc      as _ProbSolvingProc            on $projection.ProbSolvingProc      = _ProbSolvingProc.ProbSolvingProc
    association [0..1] to I_ProbSolvingProcStp   as _ProbSolvingProcStp         on $projection.ProbSolvingProc      = _ProbSolvingProcStp.ProbSolvingProc and
                                                                                   $projection.ProbSolvingProcStp   = _ProbSolvingProcStp.ProbSolvingProcStp
    association [0..1] to I_ProbSolvingProcCause as _ProbSolvingProcCause       on $projection.ProbSolvingProc      = _ProbSolvingProcCause.ProbSolvingProc and
                                                                                   $projection.ProbSolvingProcCause = _ProbSolvingProcCause.ProbSolvingProcCause

//=== Contact Card   
    association [0..1] to I_UserContactCard   as _CreatedByUserContactCard      on $projection.CreatedByUser = _CreatedByUserContactCard.ContactCardID
    association [0..1] to I_UserContactCard   as _CompletedByUserContactCard    on $projection.NotifTaskCompletedByUser = _CompletedByUserContactCard.ContactCardID
    association [0..1] to I_UserContactCard   as _LastChangedByUserContactCard  on $projection.LastChangedByUser = _LastChangedByUserContactCard.ContactCardID

//=== Status
    association [1..1] to I_QualityTaskStatus       as _QualityTaskStatus       on $projection.QualityTaskLifecycleStatus = _QualityTaskStatus.QualityTaskLifecycleStatus 
    association [1..1] to I_QltyTaskArchivingStatus as _QltyTaskArchivingStatus on $projection.QualityTaskArchivingStatus = _QltyTaskArchivingStatus.QualityTaskArchivingStatus
    association [0..1] to I_QltyTaskFllwUpActionSts as _QltyTaskFllwUpActionSts on $projection.QltyTaskFllwUpActionSts = _QltyTaskFllwUpActionSts.QltyTaskFllwUpActionSts

////=== Unit
    association [0..1] to I_UnitOfMeasure           as _QltyTskProcTimeUnit     on $projection.QltyTaskTimeBasedEffortUoM      = _QltyTskProcTimeUnit.UnitOfMeasure and
                                                                                   _QltyTskProcTimeUnit.UnitOfMeasureDimension = 'TIME'

//=== Time Zone
    /*association [0..1] to I_TimeZone          as _QaulityTaskTimeZone              on $projection.NotifTaskTimeZone = _QaulityTaskTimeZone.TimeZoneID*/
    
//=== Extension
    association [1..1] to E_NotificationTask       as _Extension               on  $projection.QualityTaskInternalId = _Extension.Notification
                                                                               and _Extension.NotificationTask = '0000'
{
//=== Key Fields
    key cast( qmsm.qmnum as qtaskinternalid preserving type )            as QualityTaskInternalId,
        
        @ObjectModel:{ text.element:  [ 'QualityTaskText' ] }
        cast( substring(qmsm.qmnum,2,11) as qtaskid preserving type )    as QualityTask,
       
//=== Common Fields
        @ObjectModel.foreignKey.association: '_QualityTaskOrigin'
        qmsm.taskorigin             as QualityTaskOrigin,
        @ObjectModel.foreignKey.association: '_QualityTaskType'
        qmsm.tasktype               as QualityTaskType,
        @Semantics.text: true
        cast( qmsm.matxt as vdm_qtaskdesc preserving type )       as QualityTaskText,
        @Semantics.booleanIndicator: true
        qmsm.kzloesch               as IsDeleted,
        @ObjectModel.foreignKey.association: '_QualityTaskProcessor'
        qmsm.processor              as QualityTaskProcessor,
        qmsm.kzmla                  as MasterLanguage,
        
//=== Code
        @ObjectModel.foreignKey.association: '_QualityTaskCodeCatalog'
        qmsm.mnkat                  as QualityTaskCodeCatalog,
        @ObjectModel.foreignKey.association: '_QltyTskCodeGroup'
        cast( qmsm.mngrp as vdm_qtaskcodegrp preserving type )   as QualityTaskCodeGroup,
        @ObjectModel.foreignKey.association: '_QltyTskCode'
        qmsm.mncod                  as QualityTaskCode,       

//== Dates & Times
        //@ObjectModel.foreignKey.association: '_QaulityTaskTimeZone'
        qmsm.tzonsm                                                     as NotifTaskTimeZone,
        cast( qmsm.peter   as vdm_qtaskplannedenddate preserving type ) as NotifTaskPlannedEndDate,
        cast( qmsm.petur   as vdm_qtaskplannedendtime preserving type ) as NotifTaskPlannedEndTime,
        cast( qmsm.erldat  as vdm_qtaskcompletiondate preserving type ) as NotifTaskCompletionDate,
        cast( qmsm.erlzeit as vdm_qtaskcompletiontime preserving type ) as NotifTaskCompletionTime,
        qmsm.wdvdat                                                     as NotifTaskResubmissionDate,
        qmsm.wdvzeit                                                    as NotifTaskResubmissionTime,

        @ObjectModel.foreignKey.association: '_CompletedByUserContactCard'
        cast( qmsm.erlnam as vdm_qtaskcompletedby preserving type ) as NotifTaskCompletedByUser,


//=== Reference Object Fields
        @ObjectModel.foreignKey.association: '_Defect'
        qmsm.defectinternalid       as DefectInternalID,

        @ObjectModel.foreignKey.association: '_ProbSolvingProc'
        qmsm.probsolvingprocess     as ProbSolvingProc,
        @ObjectModel.foreignKey.association: '_ProbSolvingProcStp'
        qmsm.probsolvingprocessstep as ProbSolvingProcStp,
        @ObjectModel.foreignKey.association: '_ProbSolvingProcCause'        
        qmsm.prbobsolvproccause     as ProbSolvingProcCause,

        @ObjectModel.foreignKey.association: '_PredecessorQualityTask'
        qmsm.prdcssrqtaskinternalid as PredecessorQltyTaskIntNumber,
        
//=== Follow-Up Action
        @ObjectModel.foreignKey.association: '_QltyTaskFollowUpAction'
        qmsm.folgeact               as QltyTaskFollowUpAction,

//=== Status fields
        @ObjectModel.foreignKey.association: '_QualityTaskStatus'
        qmsm.statlcycle             as QualityTaskLifecycleStatus,
        @ObjectModel.foreignKey.association: '_QltyTaskArchivingStatus'
        qmsm.statacycle             as QualityTaskArchivingStatus,
        @ObjectModel.foreignKey.association: '_QltyTaskFllwUpActionSts'
        qmsm.statfoa                as QltyTaskFllwUpActionSts,

//=== Administrative Data
        @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
        qmsm.ernam                  as CreatedByUser,
        @Semantics.systemDate.createdAt: true
        qmsm.erdat                  as CreationDate,
        cast( qmsm.erzeit as vdm_qerstezeit preserving type ) as CreationTime,
        qmsm.changeddatetime        as ChangedDateTime,      
        @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
        qmsm.aenam                  as LastChangedByUser,
        @Semantics.systemDate.lastChangedAt: true
        qmsm.aedat                  as LastChangeDate,
        cast( qmsm.aezeit as vdm_qaendezeit preserving type ) as LastChangeTime,
        qmsm.taskiscontrolledbyorigin as QltyTskProcgIsCtrldByTskOrigin,

//====Time Recording for Task
        @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
        qmsm.timebasedeffort as QltyTaskTimeBasedEffort,
        @ObjectModel.foreignKey.association: '_QltyTskProcTimeUnit'
        qmsm.timebasedeffortuom as QltyTaskTimeBasedEffortUoM,
 
//=== Expose Associations
        _QltyTaskFllwUpActionParam,
        _QualityTaskType,
        _Defect,
        _QualityTaskOrigin,
        _CreatedByUserContactCard,
        _CompletedByUserContactCard,
        _LastChangedByUserContactCard,
        _QualityTaskProcessor,
        _QualityTaskStatus,
        _QltyTaskArchivingStatus,
        /*_QaulityTaskTimeZone*/
        _QltyTaskFollowUpAction,
        _QltyTaskFllwUpActionSts,
        _QualityTaskCodeCatalog,
        _QltyTskCodeGroup,
        _QltyTskCode,
        
        _ProbSolvingProc,
        _ProbSolvingProcStp,
        _ProbSolvingProcCause,
        
        _PredecessorQualityTask,

        _QltyTskProcTimeUnit

} where qmsm.qmnum like '$%'  // ABAP syntax: CP "$*"
    and qmsm.manum = '0000'
```
