---
name: C_EHSTASKINSTANCEQUERY
description: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEQUERY')/$value
semantic_en: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Task Instance - Query — CDS view tiêu dùng dựa trên I_EHSTaskInstanceCube."
keywords:
  - "ehs"
  - "task"
  - "instance"
  - "query"
  - "planned"
  - "main"
  - "location"
  - "classifier"
  - "follow"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
---
# C_EHSTASKINSTANCEQUERY

**This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` | ✓ | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSMainLocationID` | ✓ | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` | ✓ | |  |  | `CHAR(40)` | BCO ID |
| `TaskFollowRefObjUUID` | ✓ | |  |  | `RAW(16)` | UUID of Follow-Up Object of Task |
| `EHSPlannedTaskID` |  | |  |  | `CHAR(20)` | Planned Task ID |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskIsRecurrent` |  | |  |  | `CHAR(1)` | Recurrence |
| `EHSTaskHasWorkflow` |  | |  |  | `CHAR(1)` | Workflow Exists |
| `EHSTaskHasDeviation` |  | |  |  | `CHAR(1)` | EHS Task has deviation |
| `EHSTaskStatus` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `WorkflowTaskStatus` |  | |  |  | `CHAR(12)` | Processing Status of a Work Item |
| `EHSTaskOwnerBP` |  | |  |  | `CHAR(10)` | Owner |
| `EHSTaskOwnerUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSTaskDefinitionUUID` |  | |  |  | `RAW(16)` | Task Identifier |
| `EHSTaskTitle` |  | |  |  | `CHAR(60)` | Task Title |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskDefinitionStatus` |  | |  |  | `CHAR(2)` | Task Status |
| `EHSTaskAssignedUser` |  | |  |  | `CHAR(10)` | Assignee |
| `EHSTaskAssignedUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSTaskApprovingUser` |  | |  |  | `CHAR(10)` | Approver |
| `EHSTaskApprovingUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskDefinitionType` |  | |  |  | `CHAR(32)` | Task Type |
| `EHSTaskDefinitionTypeName` |  | |  |  | `CHAR(132)` | Description of the Task Type |
| `TaskFollowCategoryCode` |  | |  |  | `CHAR(21)` | Follow Up Category |
| `EHSTriggerCategoryDesc` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Compliance Requirement Version Name |
| `CmplRqVersParagraphID` |  | |  |  | `CHAR(30)` | Compliance Requirement Paragraph ID |
| `CmplRqVersParagraphName` |  | |  |  | `CHAR(255)` | Paragraph Name |
| `CmplRqType` |  | |  |  | `CHAR(2)` | Compliance Requirement Type |
| `CmplRqTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSComplianceScenarioRootUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSComplianceScenarioName` |  | |  |  | `CHAR(60)` | Common Data Element for Translation |
| `DeviationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentRefUUID` |  | |  |  | `RAW(16)` | Incident Key |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `Country` |  | |  | `[{ entity: { name: 'I_CountryVH', element: 'Country' } }] Country` | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `OrganizationalUnitName` |  | |  |  | `CHAR(25)` | Short Text of Organizational Unit |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifiersText` |  | |  |  | `CHAR(255)` | List of Classifiers (Comma Separated) - short |
| `NumberOfRecords` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEQUERY')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'CEHSTSKINSTQUERY',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'EHS Task Instance - Query'

@Analytics.query: true
@VDM.viewType: #CONSUMPTION

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType:{ serviceQuality: #D,        // < 15 msec
                         sizeCategory:  #XL,         // < 10.000.000
                         dataClass: #MIXED }

@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations: true

define view C_EHSTaskInstanceQuery

  with parameters

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date     : sydatum,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu

  as select from I_EHSTaskInstanceCube
                 ( P_Date: $parameters.P_Date, P_Language: $parameters.P_Language )

{
      // Task Instance

      @AnalyticsDetails.query.axis: #FREE
  key EHSPlannedTaskUUID,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
  key EHSMainLocationID,

// lead to duplication
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  key EHSLocClassifierID,
  
      @AnalyticsDetails.query.axis: #FREE
  key TaskFollowRefObjUUID,  

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSPlannedTaskID,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      EHSTaskDueDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      EHSTaskStartDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
      EHSTaskInstceCompletionDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
      EHSTaskIsRecurrent,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
      EHSTaskHasWorkflow,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
      EHSTaskHasDeviation,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSTaskStatus,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      WorkflowTaskStatus,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSTaskOwnerUserName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.valueHelpDefinition: [{
//        entity: {
//          name: 'C_EHSTaskOwnerValueHelp',
//          element: 'BusinessPartner'
//        } }]
      EHSTaskOwnerBP,

      @Semantics.text: true
      EHSTaskOwnerUserName,

      // Task Definition

      @AnalyticsDetails.query.axis: #FREE
      EHSTaskDefinitionUUID,

      @AnalyticsDetails.query.axis: #FREE
      @Semantics.text: true
      EHSTaskTitle,

      @AnalyticsDetails.query.axis: #FREE
      @ObjectModel.text.element: ['EHSTaskPriorityName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSTaskPriority,

      @Semantics.text: true
      EHSTaskPriorityName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSTaskDefinitionStatus,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSTaskAssignedUserName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.valueHelpDefinition: [{
//        entity: {
//          name: 'C_EHSTaskAssignedUserVH',
//          element: 'BusinessPartner' } }]
      EHSTaskAssignedUser,

      @Semantics.text: true
      EHSTaskAssignedUserName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSTaskApprovingUserName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
//      @Consumption.valueHelpDefinition: [{
//        entity: {
//          name: 'C_EHSTaskApprovingUserVH',
//          element: 'BusinessPartner' } }]
      EHSTaskApprovingUser,

      @Semantics.text: true
      EHSTaskApprovingUserName,

      @Semantics.text: true
      EHSSemanticObject,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSTaskDefinitionTypeName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSTaskDefinitionType,

      @Semantics.text: true
      EHSTaskDefinitionTypeName,

      // Triggering Tasks

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSTriggerCategoryDesc']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      TaskFollowCategoryCode,

      @Semantics.text: true
      EHSTriggerCategoryDesc,
      
      // Compliance Requirement

      @AnalyticsDetails.query.axis: #FREE
      CmplRqVersUUID,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      ComplianceRequirement,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersParagraphID,

      @AnalyticsDetails.query.axis: #FREE
      @Semantics.text: true
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqVersParagraphName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CmplRqTypeName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CmplRqType,

      @Semantics.text: true
      CmplRqTypeName,
      
      // Compliance Scenario
      
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSComplianceScenarioRootUUID,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      @Semantics.text: true
      EHSComplianceScenarioName,
      
      // Incident

      @AnalyticsDetails.query.axis: #FREE
      DeviationUUID,

      @AnalyticsDetails.query.axis: #FREE
      IncidentRefUUID,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      IncidentID,

      // Location

      @Semantics.text: true
      EHSLocationName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['EHSLocationTypeText']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      EHSLocationType,

      @Semantics.text: true
      EHSLocationTypeText,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CountryName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      @Consumption.valueHelpDefinition:
      [{ entity: {
            name: 'I_CountryVH',
            element: 'Country' } }]
      Country,

      @Semantics.text: true
      CountryName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['RegionName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      Region,

      @Semantics.text: true
      RegionName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['PlantName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      Plant,

      @Semantics.text: true
      PlantName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['OrganizationalUnitName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      OrganizationalUnit,

      @Semantics.text: true
      OrganizationalUnitName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['ControllingAreaName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      ControllingArea,

      @Semantics.text: true
      ControllingAreaName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CostCenterName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CostCenter,

      @Semantics.text: true
      CostCenterName,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT_KEY
      @ObjectModel.text.element: ['CompanyCodeName']
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      CompanyCode,

      @Semantics.text: true
      CompanyCodeName,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
      @ObjectModel.text.element: ['EHSLocationName']
      EHSLocationID,
      
      @Semantics.text: true
      @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : true}
      EHSLocClassifiersText,

      @EndUserText.label: 'Number of Records'
      @AnalyticsDetails.query.axis: #COLUMNS
      NumberOfRecords

}
```
