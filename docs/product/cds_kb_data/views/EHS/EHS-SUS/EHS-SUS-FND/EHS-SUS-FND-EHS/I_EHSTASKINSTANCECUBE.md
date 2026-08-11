---
name: I_EHSTASKINSTANCECUBE
description: "This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSTASKINSTANCECUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Task Instance - Cube — CDS view giao diện dựa trên I_EHSTaskPlannedInstance."
keywords:
  - "ehs"
  - "task"
  - "instance"
  - "cube"
  - "planned"
  - "main"
  - "location"
  - "classifier"
  - "follow"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
---
# I_EHSTASKINSTANCECUBE

**This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSTASKINSTANCECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` | ✓ | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSMainLocationID` | ✓ | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID` | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` | ✓ | | `_EHSLocClassifier._EHSClassifierRoot` | `EHSLocClassifierID` | `CHAR(40)` | BCO ID |
| `TaskFollowRefObjUUID` | ✓ | | `_EHSDeviationTriggeringTask` | `TaskFollowRefObjUUID` | `RAW(16)` | UUID of Follow-Up Object of Task |
| `EHSPlannedTaskID` |  | |  |  | `CHAR(20)` | Planned Task ID |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskOwnerBP` |  | |  |  | `CHAR(10)` | Owner |
| `EHSTaskOwnerUserName` |  | |  | `PersonFullName` | `CHAR(80)` | User Description |
| `EHSTaskDefinitionUUID` |  | | `_EHSTaskDefinition` | `EHSTaskDefinitionUUID` | `RAW(16)` | Task Identifier |
| `EHSTaskTitle` |  | | `_EHSTaskDefinition` | `EHSTaskTitle` | `CHAR(60)` | Task Title |
| `EHSTaskPriority` |  | | `_EHSTaskDefinition` | `EHSTaskPriority` | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskDefinitionStatus` |  | |  | `cast( _EHSTaskDefinition.EHSTaskDefinitionStatus as ehfnd_tdef_status_code )` | `CHAR(2)` | Task Status |
| `EHSTaskAssignedUser` |  | |  | `EHSTaskAssignedBP` | `CHAR(10)` | Assignee |
| `EHSTaskAssignedUserName` |  | |  | `PersonFullName` | `CHAR(80)` | User Description |
| `EHSTaskApprovingUser` |  | |  | `EHSTaskApprovingBP` | `CHAR(10)` | Approver |
| `EHSTaskApprovingUserName` |  | | `_EHSTaskPlannedInstance._EHSTaskApprovingUser` | `PersonFullName` | `CHAR(80)` | User Description |
| `EHSSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSLocationUUID` |  | | `_EHSTaskDefinition` | `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSTaskDefinitionType` |  | | `_EHSTaskDefinition` | `EHSTaskWorkflowEvent` | `CHAR(32)` | Task Type |
| `EHSTaskStatus` |  | |  | `cast( _EHSCombinedTaskDefAndInstce.EHSTaskStatusValueForSorting as ehfnd_task_sorting_status_nc preserving type )` | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `WorkflowTaskStatus` |  | | `_EHSCombinedTaskDefAndInstce` | `WorkflowTaskStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `EHSTaskRelatedObjInstanceUUID` |  | | `_EHSTaskDefReference` | `EHSTaskRelatedObjInstanceUUID` | `RAW(16)` | Task Host Object Instance Identifier |
| `OrganizationalUnit` |  | |  | `cast ( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].OrganizationalUnit as ehfnd_org_unit_id_nc preserving type )` | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocClassifiersText` |  | |  | `_EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers` | `CHAR(255)` | List of Classifiers (Comma Separated) - short |
| `TaskFollowCategoryCode` |  | | `_EHSTaskFollowUp` | `TaskFollowCategoryCode` | `CHAR(21)` | Follow Up Category |
| `CmplRqVersParagraphID` |  | | `_EHSCmplParagraph` | `CmplRqVersParagraphID` | `CHAR(30)` | Compliance Requirement Paragraph ID |
| `CmplRqVersParagraphName` |  | | `_EHSCmplParagraph` | `CmplRqVersParagraphName` | `CHAR(255)` | Paragraph Name |
| `DeviationUUID` |  | | `_EHSDeviationTriggeringTask` | `DeviationUUID` | `RAW(16)` | NodeID |
| `IncidentRefUUID` |  | | `_EHSDeviationTriggeringTask` | `IncidentRefUUID` | `RAW(16)` | Incident Key |
| `IncidentID` |  | | `_EHSDeviationTriggeringTask` | `IncidentID` | `CHAR(20)` | Incident ID |
| `EHSTaskHostObjectInstanceUUID` |  | | `_EHSTaskDefinition` | `EHSTaskHostObjectInstanceUUID` | `RAW(16)` | Task Host Object Instance Identifier |
| `EHSTaskHostObjectInstance` |  | | `_EHSTaskDefinition` | `EHSTaskHostObjectInstance` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `IncdntTskRefAccessRestriction` |  | | `_EHSTaskDefinition._IncidentTaskRefAccRestricted` | `IncidentHasAccessRestriction` | `CHAR(1)` | Restricted Access to Person Information |
| `EHSTaskIsRecurrent` |  | |  | `case when _EHSTaskDefinition.EHSTaskRecurrenceType = '001' then cast( '' as ehfnd_task_def_is_recurrent preserving type ) else cast( 'X' as ehfnd_task_def_is_recurrent preserving type ) end` | `CHAR(1)` | Recurrence |
| `EHSTaskHasWorkflow` |  | |  | `case when EHSTaskPlannedInstance.WorkflowTaskInternalID is initial then cast ( '' as ehfnd_task_has_workflow preserving type ) else cast ( 'X' as ehfnd_task_has_workflow preserving type ) end` | `CHAR(1)` | Workflow Exists |
| `EHSTaskHasDeviation` |  | |  | `case when _EHSDeviationTriggeringTask.IncidentID is not initial then cast ( 'X' as ehfnd_task_has_deviation preserving type ) else cast ( '' as ehfnd_task_has_deviation preserving type ) end` | `CHAR(1)` | EHS Task has deviation |
| `EHSSemanticObjectName` |  | |  | `cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass._SemanticObjectText[1:Language = $session.system_language].EHSSemanticObjectName as ehfnd_task_origin preserving type )` | `CHAR(60)` | Task Origin |
| `IsOverdue` |  | |  | `case when ( EHSTaskPlannedInstance.EHSTaskInstceCompletionDate is initial and EHSTaskPlannedInstance.EHSTaskDueDate < $session.system_date ) or ( EHSTaskPlannedInstance.EHSTaskInstceCompletionDate > $session.system_date and EHSTaskPlannedInstance.EHSTaskDueDate < $session.system_date ) then cast( 'X' as ehfnd_is_overdue preserving type ) else cast( '' as ehfnd_is_overdue preserving type ) end` | `CHAR(1)` | Overdue Task |
| `NumberOfRecords` |  | |  | `0` | `INT1(3)` |  |
| `_EHSLocationFilter` | | ✓ | | | | |
| `_EHSTaskOwnerUser` | | ✓ | | | | |
| `_EHSTaskAssigneeUser` | | ✓ | | | | |
| `_EHSTaskApprovingUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [0..1] |
| `_EHSLocationForFiltering` | `I_EHSLocationForFiltering` | [0..*] |
| `_EHSLocation` | `I_EHSLocationRevision` | [0..*] |
| `_EHSDeviationTriggeringTask` | `I_DvtnIncdntTriggeringTask` | [0..*] |
| `_EHSTaskTriggerCategoryText` | `I_EHSTaskTriggerCategoryText` | [0..*] |
| `_EHSCombinedTaskDefAndInstce` | `I_EHSCombinedTaskDefAndInstce` | [1..1] |
| `_EHSCmplReq` | `I_CmplRqVersEnhanced` | [0..*] |
| `_EHSCmplParagraph` | `I_CmplRqVersStructure` | [0..*] |
| `_EHSCmplScen` | `I_EHSCmplncScenRoot` | [0..*] |
| `_EHSLocClassifier` | `I_EHSLocClassifier` | [0..*] |
| `_EHSLocClassifiers` | `P_EHSLOCCLASSIFIERS` | [0..1] |
| `_EHSRiskControl` | `I_EHSRiskControl` | [0..1] |
| `_EHSRiskAssessment` | `I_EHSRiskAssessment` | [0..1] |
| `_EHSLocationFilter` | `I_EHSLocation` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSTASKINSTANCECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSTASKINSTANCECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSTASKINSTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'EHS Task Instance - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #XL,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_EHSTaskInstanceCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu
  as select from           I_EHSTaskPlannedInstance as EHSTaskPlannedInstance
    inner join             I_EHSTaskDefinition      as _EHSTaskDefinition   on EHSTaskPlannedInstance.EHSTaskDefinitionUUID = _EHSTaskDefinition.EHSTaskDefinitionUUID
    left outer to one join I_EHSTaskFollowUp        as _EHSTaskFollowUp     on EHSTaskPlannedInstance.EHSPlannedTaskUUID = _EHSTaskFollowUp.EHSPlannedTaskUUID
    left outer to one join I_EHSTaskDefReference    as _EHSTaskDefReference on EHSTaskPlannedInstance.EHSTaskDefinitionUUID = _EHSTaskDefReference.EHSTaskDefinitionUUID

  association [0..1] to I_EHSLocationRoot             as _EHSLocationRoot             on  _EHSTaskDefinition.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
  association [0..*] to I_EHSLocationForFiltering     as _EHSLocationForFiltering     on  _EHSTaskDefinition.EHSLocationUUID = _EHSLocationForFiltering.EHSLocationUUID
  association [0..*] to I_EHSLocationRevision         as _EHSLocation                 on  _EHSTaskDefinition.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [0..*] to I_DvtnIncdntTriggeringTask    as _EHSDeviationTriggeringTask  on  _EHSTaskFollowUp.TaskFollowRefObjUUID     = _EHSDeviationTriggeringTask.IncidentRefUUID
                                                                                      and EHSTaskPlannedInstance.EHSPlannedTaskUUID = _EHSDeviationTriggeringTask.EHSPlannedTaskUUID
  association [0..*] to I_EHSTaskTriggerCategoryText  as _EHSTaskTriggerCategoryText  on  $projection.TaskFollowCategoryCode = _EHSTaskTriggerCategoryText.TaskFollowCategoryCode
  association [1..1] to I_EHSCombinedTaskDefAndInstce as _EHSCombinedTaskDefAndInstce on  EHSTaskPlannedInstance.EHSPlannedTaskUUID = _EHSCombinedTaskDefAndInstce.EHSPlannedTaskUUID
  association [0..*] to I_CmplRqVersEnhanced          as _EHSCmplReq                  on  _EHSTaskDefinition.EHSTaskHostObjectInstanceUUID = _EHSCmplReq.CmplRqUUID
  association [0..*] to I_CmplRqVersStructure         as _EHSCmplParagraph            on  _EHSTaskDefReference.EHSTaskRelatedObjInstanceUUID = _EHSCmplParagraph.CmplRqUUID
  association [0..*] to I_EHSCmplncScenRoot           as _EHSCmplScen                 on  _EHSTaskDefinition.EHSTaskHostObjectInstanceUUID = _EHSCmplScen.EHSCmplncScenOrignRootUUID
  association [0..*] to I_EHSLocClassifier            as _EHSLocClassifier            on  _EHSTaskDefinition.EHSLocationUUID = _EHSLocClassifier.EHSLocationUUID
  association [0..1] to P_EHSLOCCLASSIFIERS           as _EHSLocClassifiers           on  $projection.EHSLocationUUID = _EHSLocClassifiers.EHSLocationUUID
  association [0..1] to I_EHSRiskControl              as _EHSRiskControl              on  $projection.EHSTaskHostObjectInstanceUUID = _EHSRiskControl.EHSControlInstanceUUID
  association [0..1] to I_EHSRiskAssessment           as _EHSRiskAssessment           on  $projection.EHSTaskHostObjectInstanceUUID = _EHSRiskAssessment.EHSRiskAssessmentUUID
  association [0..*] to I_EHSLocation                 as _EHSLocationFilter           on  $projection.EHSLocationUUID = _EHSLocationFilter.EHSLocationUUID
{

      @EndUserText.label: 'Task Instance Key'
  key EHSTaskPlannedInstance.EHSPlannedTaskUUID,
      @EndUserText.label: 'Main Location ID'
  key _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID                                                                                                                     as EHSMainLocationID,
      @EndUserText.label: 'Location Classifier ID'
  key _EHSLocClassifier._EHSClassifierRoot.EHSLocClassifierID,
      @EndUserText.label: 'Follow Up Key'
  key _EHSDeviationTriggeringTask.TaskFollowRefObjUUID,
      @EndUserText.label: 'Task Instance ID'
      EHSTaskPlannedInstance.EHSPlannedTaskID,
      @EndUserText.label: 'Due Date of Task Instance'
      EHSTaskPlannedInstance.EHSTaskDueDate,
      @EndUserText.label: 'Start Date of Task Instance'
      EHSTaskPlannedInstance.EHSTaskStartDate,
      @EndUserText.label: 'Completion Date of Task Instance'
      EHSTaskPlannedInstance.EHSTaskInstceCompletionDate,
      @EndUserText.label: 'Task Owner'
      @ObjectModel.foreignKey.association: '_EHSTaskOwnerUser'
      EHSTaskPlannedInstance.EHSTaskOwnerBP                                                                                                                                                        as EHSTaskOwnerBP,
      @EndUserText.label: 'Task Owner Name'
      EHSTaskPlannedInstance._EHSTaskOwnerUser.PersonFullName                                                                                                                                      as EHSTaskOwnerUserName,
      @EndUserText.label: 'Task Definition Key'
      _EHSTaskDefinition.EHSTaskDefinitionUUID,
      @EndUserText.label: 'Task Definition Title'
      _EHSTaskDefinition.EHSTaskTitle,
      _EHSTaskDefinition.EHSTaskPriority,
      @EndUserText.label: 'Task Definition Priority Name'
      EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskPriority.EHSTaskPriorityName,
      @EndUserText.label: 'Task Definition Status'
      cast( _EHSTaskDefinition.EHSTaskDefinitionStatus as ehfnd_tdef_status_code )                                                                                                                 as EHSTaskDefinitionStatus,
      @EndUserText.label: 'Task Assignee'
      @ObjectModel.foreignKey.association: '_EHSTaskAssigneeUser'
      EHSTaskPlannedInstance.EHSTaskAssignedBP                                                                                                                                                     as EHSTaskAssignedUser,
      @EndUserText.label: 'Task Assignee Name'
      EHSTaskPlannedInstance._EHSTaskAssigneeUser.PersonFullName                                                                                                                                   as EHSTaskAssignedUserName,
      @EndUserText.label: 'Task Approver'
      @ObjectModel.foreignKey.association: '_EHSTaskApprovingUser'
      EHSTaskPlannedInstance.EHSTaskApprovingBP                                                                                                                                                    as EHSTaskApprovingUser,
      @EndUserText.label: 'Task Approver Name'
      _EHSTaskPlannedInstance._EHSTaskApprovingUser.PersonFullName                                                                                                                                 as EHSTaskApprovingUserName,
      @EndUserText.label: 'Task Origin'
      EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass.EHSSemanticObject,
      @EndUserText.label: 'Location Key'
      @ObjectModel.foreignKey.association: '_EHSLocationFilter'
      _EHSTaskDefinition.EHSLocationUUID                                                                                                                                                           as EHSLocationUUID,
      _EHSLocationFilter,
      @EndUserText.label: 'Task Definition Type'
      _EHSTaskDefinition.EHSTaskWorkflowEvent                                                                                                                                                      as EHSTaskDefinitionType,
      EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskDefinitionType._EHSTaskDefinitionTypeText[1: Language = $parameters.P_Language].EHSTaskDefinitionTypeName,
      @EndUserText.label: 'Task Status'
      cast( _EHSCombinedTaskDefAndInstce.EHSTaskStatusValueForSorting as ehfnd_task_sorting_status_nc preserving type )                                                                            as EHSTaskStatus,
      @EndUserText.label: 'Workflow Task Status'
      _EHSCombinedTaskDefAndInstce.WorkflowTaskStatus,

      _EHSTaskDefReference.EHSTaskRelatedObjInstanceUUID,

      @EndUserText.label: 'Location Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationRevisionName[1: Language = $parameters.P_Language].EHSLocationName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationType,
      @EndUserText.label: 'Location Type Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSLocationType._Text[1: Language = $parameters.P_Language].EHSLocationTypeText,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Country,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Country._Text[1: Language = $parameters.P_Language].CountryName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Region,
      @EndUserText.label: 'Region Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Region._RegionText[1: Language = $parameters.P_Language].RegionName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].Plant,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._Plant.PlantName,
      cast ( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].OrganizationalUnit as ehfnd_org_unit_id_nc preserving type )                       as OrganizationalUnit,
      @EndUserText.label: 'Organizational Unit Name'
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._OrganizationalUnit._OrgUnitText[1: Language = $parameters.P_Language].OrganizationalUnitName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].ControllingArea,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._ControllingArea.ControllingAreaName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CostCenter,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._CostCenter[1: ValidityStartDate <= $parameters.P_Date and ValidityEndDate >= $parameters.P_Date]._Text[1: Language = $parameters.P_Language].CostCenterName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].CompanyCode,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._CompanyCode.CompanyCodeName,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationStatus,
      cast( _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )          as EHSLocationAuthorizationGroup,
      _EHSLocation[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].BusinessArea,

      _EHSLocationRoot.EHSLocationID,
      @EndUserText.label: 'Location Classifier'
      _EHSLocClassifiers(P_Langu: $parameters.P_Language).Classifiers                                                                                                                              as EHSLocClassifiersText,

      @EndUserText.label: 'Category of Triggering Task'
      _EHSTaskFollowUp.TaskFollowCategoryCode,
      @EndUserText.label: 'Category Name of Triggering Task'
      _EHSTaskTriggerCategoryText[1: Language = $parameters.P_Language].EHSTriggerCategoryDesc,

      @EndUserText.label: 'Compliance Requirement Key'
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ].CmplRqVersUUID,
      @EndUserText.label: 'Compliance Requirement ID'
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ].ComplianceRequirement,
      @EndUserText.label: 'Compliance Requirement Name'
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ]._CmplRqVersText[1: Language = $parameters.P_Language].CmplRqVersName,
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ].CmplRqUUID,
      @EndUserText.label: 'Compliance Requirement Type'
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ]._CmplncRqmtType.CmplRqType,
      @EndUserText.label: 'Compliance Requirement Type Name'
      _EHSCmplReq[1:EffectiveDate <= $parameters.P_Date and CmplRqVersValidToDate >= $parameters.P_Date ]._CmplncRqmtType._Text[1: Language = $parameters.P_Language].CmplRqTypeName,
      @EndUserText.label: 'Compliance Requirement Paragraph ID'
      _EHSCmplParagraph.CmplRqVersParagraphID,
      @EndUserText.label: 'Compliance Requirement Paragraph Name'
      _EHSCmplParagraph.CmplRqVersParagraphName,

      @EndUserText.label: 'Compliance Scenario Key'
      _EHSCmplScen[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSComplianceScenarioRootUUID,
      @EndUserText.label: 'Compliance Scenario Name'
      _EHSCmplScen[1:RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ]._EHSCmplncScenName[1: Language = $parameters.P_Language].EHSComplianceScenarioName,

      @EndUserText.label: 'Deviation Incident Key'
      _EHSDeviationTriggeringTask.DeviationUUID,
      @EndUserText.label: 'Incident Key'
      _EHSDeviationTriggeringTask.IncidentRefUUID,
      @EndUserText.label: 'Incident ID'
      _EHSDeviationTriggeringTask.IncidentID,

      @Consumption.hidden: true
      _EHSTaskDefinition.EHSTaskHostObjectInstanceUUID,
      @Consumption.hidden: true
      _EHSTaskDefinition.EHSTaskHostObjectInstance,
      @Consumption.hidden: true
      _EHSTaskDefinition._IncidentTaskRefAccRestricted.IncidentHasAccessRestriction                                                                                                                as IncdntTskRefAccessRestriction,

      @EndUserText.label: 'Task Recurrence'
      @Semantics.booleanIndicator
      case
        when _EHSTaskDefinition.EHSTaskRecurrenceType = '001'
        then cast( '' as ehfnd_task_def_is_recurrent preserving type )
        else cast( 'X' as ehfnd_task_def_is_recurrent preserving type )
      end                                                                                                                                                                                          as EHSTaskIsRecurrent,

      @EndUserText.label: 'Workflow Exists'
      @Semantics.booleanIndicator
      case
        when EHSTaskPlannedInstance.WorkflowTaskInternalID is initial
        then cast ( '' as ehfnd_task_has_workflow preserving type )
        else cast ( 'X' as ehfnd_task_has_workflow preserving type )
      end                                                                                                                                                                                          as EHSTaskHasWorkflow,

      @Semantics.booleanIndicator
      case
        when _EHSDeviationTriggeringTask.IncidentID is not initial
        then cast ( 'X' as ehfnd_task_has_deviation preserving type )
        else cast ( '' as ehfnd_task_has_deviation preserving type )
      end                                                                                                                                                                                          as EHSTaskHasDeviation,

      cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass._SemanticObjectText[1:Language = $session.system_language].EHSSemanticObjectName as ehfnd_task_origin preserving type ) as EHSSemanticObjectName,

      @Semantics.booleanIndicator
      case
        when ( EHSTaskPlannedInstance.EHSTaskInstceCompletionDate is initial
        and EHSTaskPlannedInstance.EHSTaskDueDate < $session.system_date )
        or ( EHSTaskPlannedInstance.EHSTaskInstceCompletionDate > $session.system_date
        and EHSTaskPlannedInstance.EHSTaskDueDate < $session.system_date )
        then cast( 'X' as ehfnd_is_overdue preserving type )
        else cast( '' as ehfnd_is_overdue preserving type )
      end                                                                                                                                                                                          as IsOverdue,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['EHSPlannedTaskUUID']
      @EndUserText.label: 'Number of Records'
      0                                                                                                                                                                                            as NumberOfRecords,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _EHSTaskOwnerUser,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _EHSTaskAssigneeUser,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _EHSTaskApprovingUser,
      @Consumption.hidden: true
      _EHSTaskDefinition._IncidentAuthorizationFields,
      @Consumption.hidden: true
      _EHSTaskDefinition._EHSRskAssessmentAuthznFields,
      @Consumption.hidden: true
      _EHSTaskDefinition._EHSRskAssmt2RskCtrlAuthznFld,
      @Consumption.hidden: true
      _EHSTaskDefinition._EHSCtrlImplmtnAuthznFields,
      @Consumption.hidden: true
      _EHSTaskDefinition._EHSCmplncScenAuthznFields,
      @Consumption.hidden: true
      _EHSTaskDefinition._CmplncRqmtAuthznFields
}

where
  _EHSTaskDefinition.EHSTaskDefinitionStatus <> '01'
```
