---
name: C_MAINTPLANSCHEDGOVWQUERY
description: "This CDS view allows you to generate a report of maintenance orders and maintenance notifications for a set of equipment, functional locations, or assemblies. With this CDS view, you can: View maintenance orders or maintenance notifications that are planned for the future through preventive maintenance plans. View maintenance calls that are planned for the future and for which call objects are yet to be generated through maintenance plans. Retrieve information to help you prepare for execution of planned maintenance orders. Analyze the details against a fixed set of measures against the call object status such as scheduled calls, calls on hold, calls that are locked, released, or completed. Use filters to retrieve specific information (for example, filter by maintenance plans that are defined for a specific set of equipment or functional locations). Use dimensions and measures to display information in your reports. Define variants for your reports. Export variants as tiles on the SAP Fiori Launchpad. Define custom fields and use them in the analytical query. For example, you can define a fixed set of codes as a code list (relevant for compliance or criticality) and generate a report of maintenance items and maintenance plans that are defined with these custom attributes. This CDS view provides the data to answer the following business questions: Where can you see a list of maintenance calls generated or to be generated for a given period? Where can you see a list of maintenance calls which are scheduled along with their call status? Where can you see the list of calls generated from a maintenance plan with their corresponding call objects which may be a maintenance order or a maintenance notification? How can you find the number of calls that are expected to be generated in future based on the scheduling period that you have maintained? Is there a way to find the variance between the planned date and the completion date for a list of maintenance plans? Can you find the total count of maintenance calls based upon their status (on hold, skipped, fixed, and so on)? How many maintenance calls have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDGOVWQUERY')/$value
semantic_en: "This CDS view allows you to generate a report of maintenance orders and maintenance notifications for a set of equipment, functional locations, or assemblies. With this CDS view, you can: View maintenance orders or maintenance notifications that are planned for the future through preventive maintenance plans. View maintenance calls that are planned for the future and for which call objects are yet to be generated through maintenance plans. Retrieve information to help you prepare for execution of planned maintenance orders. Analyze the details against a fixed set of measures against the call object status such as scheduled calls, calls on hold, calls that are locked, released, or completed. Use filters to retrieve specific information (for example, filter by maintenance plans that are defined for a specific set of equipment or functional locations). Use dimensions and measures to display information in your reports. Define variants for your reports. Export variants as tiles on the SAP Fiori Launchpad. Define custom fields and use them in the analytical query. For example, you can define a fixed set of codes as a code list (relevant for compliance or criticality) and generate a report of maintenance items and maintenance plans that are defined with these custom attributes. This CDS view provides the data to answer the following business questions: Where can you see a list of maintenance calls generated or to be generated for a given period? Where can you see a list of maintenance calls which are scheduled along with their call status? Where can you see the list of calls generated from a maintenance plan with their corresponding call objects which may be a maintenance order or a maintenance notification? How can you find the number of calls that are expected to be generated in future based on the scheduling period that you have maintained? Is there a way to find the variance between the planned date and the completion date for a list of maintenance plans? Can you find the total count of maintenance calls based upon their status (on hold, skipped, fixed, and so on)? How many maintenance calls have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maint Plan Scheduling Overview - Qry — CDS view tiêu dùng dựa trên I_MaintPlanSchedgOverviewCube."
keywords:
  - "maint"
  - "plan"
  - "scheduling"
  - "overview"
  - "qry"
  - "maintenance"
  - "call"
  - "number"
  - "item"
  - "calls"
  - "mrkd"
  - "deltn"
  - "plans"
tags:
  - PM
  - bo:companycode
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - notification
  - order
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTPLANSCHEDGOVWQUERY

**This CDS view allows you to generate a report of maintenance orders and maintenance notifications for a set of equipment, functional locations, or assemblies. With this CDS view, you can: View maintenance orders or maintenance notifications that are planned for the future through preventive maintenance plans. View maintenance calls that are planned for the future and for which call objects are yet to be generated through maintenance plans. Retrieve information to help you prepare for execution of planned maintenance orders. Analyze the details against a fixed set of measures against the call object status such as scheduled calls, calls on hold, calls that are locked, released, or completed. Use filters to retrieve specific information (for example, filter by maintenance plans that are defined for a specific set of equipment or functional locations). Use dimensions and measures to display information in your reports. Define variants for your reports. Export variants as tiles on the SAP Fiori Launchpad. Define custom fields and use them in the analytical query. For example, you can define a fixed set of codes as a code list (relevant for compliance or criticality) and generate a report of maintenance items and maintenance plans that are defined with these custom attributes. This CDS view provides the data to answer the following business questions: Where can you see a list of maintenance calls generated or to be generated for a given period? Where can you see a list of maintenance calls which are scheduled along with their call status? Where can you see the list of calls generated from a maintenance plan with their corresponding call objects which may be a maintenance order or a maintenance notification? How can you find the number of calls that are expected to be generated in future based on the scheduling period that you have maintained? Is there a way to find the variance between the planned date and the completion date for a list of maintenance plans? Can you find the total count of maintenance calls based upon their status (on hold, skipped, fixed, and so on)? How many maintenance calls have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDGOVWQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | ✓ | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` | ✓ | |  |  | `CHAR(16)` | Maintenance Item |
| `NumberOfMaintenancePlanCalls` |  | |  |  | `DEC(9)` | Number of Maintenance Plan Calls |
| `NrOfMrkdForDeltnMaintPlans` |  | |  |  | `DEC(9)` | Number of Maintenance Plans Marked for Deletion |
| `NrOfInactiveMaintenancePlans` |  | |  |  | `DEC(9)` | Number of  inactive Maintenance Plans |
| `NrOfScheduledMaintenancePlans` |  | |  |  | `DEC(9)` | Number of scheduled Maintenance Plans |
| `NrOfCreatedMaintenancePlans` |  | |  |  | `DEC(9)` | Number of created Maintenance Plans |
| `NrOfFixedMaintenancePlanCalls` |  | |  |  | `DEC(9)` | Number of fixed Maintenance Plan calls |
| `NrOfSkippedMaintPlanCalls` |  | |  |  | `DEC(9)` | Number of skipped Maintenance Plan calls |
| `NrOfMnllyCalledMaintPlnCalls` |  | |  |  | `DEC(9)` | Number of manually called Maintenance Plan calls |
| `NrOfCalledMaintenancePlanCalls` |  | |  |  | `DEC(9)` | Number of called Maintenance Plan calls |
| `NrOfCompletedMaintPlanCalls` |  | |  |  | `DEC(9)` | Number of completed Maintenance Plan calls |
| `NrOfOnHoldMaintenancePlanCalls` |  | |  |  | `DEC(9)` | Number of on hold Maintenance Plan calls |
| `NrOfInactiveMaintPlanCalls` |  | |  |  | `DEC(9)` | Number of inactive Maintenance Plan calls |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `MaintenancePlanType` |  | |  |  | `CHAR(10)` | Maintenance Plan Type |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePlanSortField` |  | |  |  | `CHAR(20)` | Sort field for maintenance plans |
| `MaintenancePlanCycle` |  | |  |  | `NUMC(2)` | Counter in Control Tables |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanActiveSystemStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Status |
| `MaintenanceCallNextPlannedDate` |  | |  |  | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` |  | |  |  | `DATS(8)` | Call date |
| `MaintPlanLastScheduledDate` |  | |  |  | `DATS(8)` | Date of the call |
| `MaintenanceItemDescription` |  | |  |  | `CHAR(40)` | Maintenance Item Description |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationObjectType` |  | |  |  | `CHAR(10)` | Object Type of Functional Location |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `EquipmentObjectType` |  | |  |  | `CHAR(10)` | Object Type of Equipment |
| `Class` |  | |  |  | `CHAR(18)` | Class number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `MaintItemHasObjectList` |  | |  |  | `CHAR(1)` | Indicator if an Object List is linked to the Maint Item |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `ServiceEntrySheet` |  | |  |  | `CHAR(10)` | Entry Sheet Number |
| `RevisionNumber` |  | |  |  | `NUMC(3)` | Revision Number |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Basic start date |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `CompletionDate` |  | |  |  | `DATS(8)` | Completion Date for Call Object |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Completion Time for Call Object |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintenancePlanCallStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Call Status |
| `ReleasedByUserName` |  | |  |  | `CHAR(1)` | Scheduling determined by user |
| `ServiceOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Purchase order item number |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `AssetRoom` |  | |  |  | `CHAR(8)` | Room |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `MaintObjectFreeDefinedAttrib` |  | |  |  | `CHAR(30)` | Sort Field |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `StandingOrderNumber` |  | |  |  | `CHAR(12)` | Standing order number |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDGOVWQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDGOVWQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMPSCHDOVWQRY'
@EndUserText.label: 'Maint Plan Scheduling Overview - Qry'
@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@OData.publish: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.internalName:#LOCAL

define view C_MaintPlanSchedgOvwQuery
  as select from I_MaintPlanSchedgOverviewCube
{
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
  key MaintenancePlan,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      @EndUserText.label: 'Maintenance Plan Call No.'  
  key MaintenancePlanCallNumber,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
  key MaintenanceItem,
      @Aggregation.default: #SUM
      NumberOfMaintenancePlanCalls,
      @Aggregation.default: #SUM
      NrOfMrkdForDeltnMaintPlans,
      @Aggregation.default: #SUM
      NrOfInactiveMaintenancePlans,
      @Aggregation.default: #SUM
      NrOfScheduledMaintenancePlans,
      @Aggregation.default: #SUM
      NrOfCreatedMaintenancePlans,
      @Aggregation.default: #SUM
      NrOfFixedMaintenancePlanCalls,
      @Aggregation.default: #SUM
      NrOfSkippedMaintPlanCalls,
      @Aggregation.default: #SUM
      NrOfMnllyCalledMaintPlnCalls,
      @Aggregation.default: #SUM
      NrOfCalledMaintenancePlanCalls,
      @Aggregation.default: #SUM
      NrOfCompletedMaintPlanCalls,
      @Aggregation.default: #SUM
      NrOfOnHoldMaintenancePlanCalls,
      @Aggregation.default: #SUM
      NrOfInactiveMaintPlanCalls,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      @EndUserText.label: 'Plan Category'  
      MaintenancePlanCategory,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      @EndUserText.label: 'Plan Type'
      //  @ObjectModel.text.association: '_MaintenancePlanType._Text'
      MaintenancePlanType,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenanceStrategy,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      @EndUserText.label: 'Maintenance Plan Sort Field'
      MaintenancePlanSortField,
      @EndUserText.label: 'Cycle Internal Counter'
      MaintenancePlanCycle,
      @EndUserText.label: 'Counter'
      MeasuringPoint,
      //StatusCode,
      // @ObjectModel.text.association: '_MaintPlanActiveSystemStatus._Text'
      MaintPlanActiveSystemStatus,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      MaintenanceCallNextPlannedDate,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      @EndUserText.label: 'Call Date'
      MaintenanceCallDate,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      @EndUserText.label: 'Last Call On'
      MaintPlanLastScheduledDate,
      MaintenanceItemDescription,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      FunctionalLocation,
      FunctionalLocationObjectType,
      ConstructionMaterial,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      Equipment,
      EquipmentObjectType,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      Class,
      Assembly,
      Material,
      SerialNumber,
      //MaintenanceItemHasObjectList,
      MaintItemHasObjectList,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenanceOrder,
      MaintenanceNotification,
      ServiceEntrySheet,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      RevisionNumber,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      @EndUserText.label: 'Start Date'
      PlannedStartDate,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      LatestAcceptableCompletionDate,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true }
      @Consumption.valueHelpDefinition: [{ entity: { name:'C_GregorianCalDateFuncVH', element:'DateFunction'}}]
      CompletionDate,
      CompletionTime,
      MaintCallHorizonIsNotReached,
      //SchedulingStatus,
      // _MaintenancePlanCallStatus._Text.MaintenancePlanCallStatusText,
      //@ObjectModel.text.association: '_MaintenancePlanCallStatus._Text'
      MaintenancePlanCallStatus,
      ReleasedByUserName,
      ServiceOrder,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenancePlannerGroup,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenancePlanningPlant,
      BusinessArea,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenanceOrderType,
      NotificationType,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      @EndUserText.label: 'Maintenance Activity Type'
//       @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_MaintActyTypeStdVH',
//                     element: 'MaintenanceActivityType' }
//        }]
      MaintenanceActivityType,
      @EndUserText.label: 'Work Center Internal ID'
      MainWorkCenterInternalID,
      @EndUserText.label: 'Main Work Center'
      MainWorkCenter,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      TaskListType,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      TaskListGroup,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      TaskListGroupCounter,
      PurchaseOrder,
      PurchaseOrderItem,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      MaintenancePlant,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      AssetLocation,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      AssetRoom,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      PlantSection,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      WorkCenter,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      ABCIndicator,
      @EndUserText.label: 'Location Sort Field'
      MaintObjectFreeDefinedAttrib,
      CompanyCode,
      MasterFixedAsset,
      FixedAsset,
      ControllingArea,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections : true }
      CostCenter,
      //WBSElementInternalID,
      WBSElementExternalID,
      StandingOrderNumber,
      SalesDocument,
      SalesDocumentItem,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      AuthorizationGroup
}
```
