---
name: I_EHSOVRDTSKTRNDCUBE
description: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value
semantic_en: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Overdue Task Instance Trend - Cube — CDS view giao diện dựa trên I_YearMonth."
keywords:
  - "ehs"
  - "overdue"
  - "task"
  - "instance"
  - "trend"
  - "cube"
  - "planned"
  - "location"
  - "calendar"
  - "year"
  - "month"
  - "date"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
  - bo:salesorder
---
# I_EHSOVRDTSKTRNDCUBE

**This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` | ✓ | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `CalendarYear` |  | | `_EHSYearMonth` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | | `_EHSYearMonth` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskPriority` |  | | `_EHSTaskDefinition` | `EHSTaskPriority` | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  | `cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskPriority.EHSTaskPriorityName as ehfnd_task_def_priority_name preserving type )` | `CHAR(60)` | Task Definition Priority Description |
| `EHSSemanticObjectName` |  | |  | `cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass._SemanticObjectText[1:Language = $session.system_language].EHSSemanticObjectName as ehfnd_task_origin preserving type )` | `CHAR(60)` | Task Origin |
| `EHSLocationUUID` |  | | `_EHSTaskDefinition` | `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskHostObjectInstanceUUID` |  | | `_EHSTaskDefinition` | `EHSTaskHostObjectInstanceUUID` | `RAW(16)` | Task Host Object Instance Identifier |
| `EHSTaskHostObjectInstance` |  | | `_EHSTaskDefinition` | `EHSTaskHostObjectInstance` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `IncdntTskRefAccessRestriction` |  | |  | `IncidentHasAccessRestriction` | `CHAR(1)` | Restricted Access to Person Information |
| `NumberOfRecords` |  | |  | `cast ( 0 as ehfnd_number_of_records )` | `INT4(10)` | Number of Records |
| `_EHSLocationFilter` | | ✓ | | | | |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationRoot` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationFilter` | `I_EHSLocation` | [0..*] |
| `_EHSLocation` | `I_EHSLocationRevision` | [1..*] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'EHS Overdue Task Instance Trend - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #XL,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_EHSOvrdTskTrndCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu
  as select from           I_YearMonth              as _EHSYearMonth
    left outer to one join I_EHSTaskPlannedInstance as EHSTaskPlannedInstance on  (
        EHSTaskPlannedInstance.EHSTaskDueDate                                                                                          < EHSTaskPlannedInstance.EHSTaskInstceCompletionDate
        or EHSTaskPlannedInstance.EHSTaskInstceCompletionDate                                                                          is initial
      ) //check if due date is Less than Compleation date or its not completed
                                                                              and EHSTaskPlannedInstance.EHSTaskDueDate                > _EHSYearMonth.FirstDayOfMonthDate
                                                                              and EHSTaskPlannedInstance.EHSTaskDueDate                < _EHSYearMonth.LastDayOfMonthDate //Get Month Range that contains only Due Dates
                                                                              and (
                                                                                 EHSTaskPlannedInstance.EHSTaskInstceCompletionDate    > _EHSYearMonth.FirstDayOfMonthDate
                                                                                 or EHSTaskPlannedInstance.EHSTaskInstceCompletionDate is initial
                                                                               )
                                                                              and EHSTaskPlannedInstance.EHSTaskDueDate                < $session.system_date // Remove all records which have future due date.
                                                                              and EHSTaskPlannedInstance.EHSTaskDueDate                is not initial // Remove if we dont have Due date

    left outer to one join I_EHSTaskDefinition      as _EHSTaskDefinition           on EHSTaskPlannedInstance.EHSTaskDefinitionUUID = _EHSTaskDefinition.EHSTaskDefinitionUUID
    left outer to one join I_EHSTaskFollowUp        as _EHSTaskFollowUp             on EHSTaskPlannedInstance.EHSPlannedTaskUUID = _EHSTaskFollowUp.EHSPlannedTaskUUID
    left outer to one join I_EHSTaskDefReference    as _EHSTaskDefReference         on EHSTaskPlannedInstance.EHSTaskDefinitionUUID = _EHSTaskDefReference.EHSTaskDefinitionUUID
    association [0..*] to I_EHSLocation             as _EHSLocationFilter           on $projection.EHSLocationUUID = _EHSLocationFilter.EHSLocationUUID
    association [1..*] to I_EHSLocationRevision     as _EHSLocation                 on _EHSTaskDefinition.EHSLocationUUID = _EHSLocation.EHSLocationUUID
    association [1..1] to I_EHSLocationRoot         as _EHSLocationRoot             on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
{
  key EHSTaskPlannedInstance.EHSPlannedTaskUUID,
      _EHSLocationRoot.EHSLocationID,
      _EHSYearMonth.CalendarYear,
      _EHSYearMonth.CalendarMonth,
      EHSTaskPlannedInstance.EHSTaskDueDate,
      EHSTaskPlannedInstance.EHSTaskStartDate,
      EHSTaskPlannedInstance.EHSTaskInstceCompletionDate,
      _EHSTaskDefinition.EHSTaskPriority,
      cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskPriority.EHSTaskPriorityName as ehfnd_task_def_priority_name preserving type )                                                       as EHSTaskPriorityName,
      cast( EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass._SemanticObjectText[1:Language = $session.system_language].EHSSemanticObjectName as ehfnd_task_origin preserving type ) as EHSSemanticObjectName,
      @ObjectModel.foreignKey.association: '_EHSLocationFilter'
      _EHSTaskDefinition.EHSLocationUUID                                                                                                                                                           as EHSLocationUUID,
      _EHSLocationFilter,
      _EHSLocation,
      _EHSLocationRoot,
      EHSTaskPlannedInstance._EHSTaskDefinition._EHSTaskAdapterClass.EHSSemanticObject,
      @Consumption.hidden: true
      _EHSTaskDefinition.EHSTaskHostObjectInstanceUUID,
      @Consumption.hidden: true
      _EHSTaskDefinition.EHSTaskHostObjectInstance,
      @Consumption.hidden: true
      EHSTaskPlannedInstance._EHSTaskDefinition._IncidentTaskRefAccRestricted.IncidentHasAccessRestriction                                                                                         as IncdntTskRefAccessRestriction,

      @Aggregation.default: #COUNT_DISTINCT
      @Aggregation.referenceElement: ['EHSPlannedTaskUUID']

      cast ( 0  as ehfnd_number_of_records )                                                                                                                                                       as NumberOfRecords,
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
