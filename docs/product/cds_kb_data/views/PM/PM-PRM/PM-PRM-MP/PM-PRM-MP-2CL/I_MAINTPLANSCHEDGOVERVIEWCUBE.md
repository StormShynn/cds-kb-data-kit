---
name: I_MAINTPLANSCHEDGOVERVIEWCUBE
description: "This CDS view is designed to provide a comprehensive overview of maintenance plan scheduling within an organization. It aggregates and summarizes data related to maintenance plans, items, orders, notifications, and associated attributes, enabling users to analyze and monitor the status and progress of maintenance activities. This CDS view provides the data to answer the following business questions: How many maintenance plans are currently active, inactive, scheduled, created, or marked for deletion? What are the planned start and completion dates for maintenance activities? What is the status of maintenance plan calls, such as fixed, skipped, manually called, called, completed, or on hold? Which maintenance plans are associated with specific equipment, functional locations, or work centers? How are maintenance plans distributed across different business areas, planning plants, and planner groups? What are the details of maintenance orders, notifications, and service orders linked to maintenance plans? How can maintenance activities be optimized based on cycle, strategy, and category parameters? What is the impact of maintenance activities on cost centers, controlling areas, and company codes? How do maintenance plans align with organizational divisions, sales documents, and authorization groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of maintenance plan scheduling within an organization. It aggregates and summarizes data related to maintenance plans, items, orders, notifications, and associated attributes, enabling users to analyze and monitor the status and progress of maintenance activities. This CDS view provides the data to answer the following business questions: How many maintenance plans are currently active, inactive, scheduled, created, or marked for deletion? What are the planned start and completion dates for maintenance activities? What is the status of maintenance plan calls, such as fixed, skipped, manually called, called, completed, or on hold? Which maintenance plans are associated with specific equipment, functional locations, or work centers? How are maintenance plans distributed across different business areas, planning plants, and planner groups? What are the details of maintenance orders, notifications, and service orders linked to maintenance plans? How can maintenance activities be optimized based on cycle, strategy, and category parameters? What is the impact of maintenance activities on cost centers, controlling areas, and company codes? How do maintenance plans align with organizational divisions, sales documents, and authorization groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-PRM-MP-2CL
  - document
  - interface-view
  - lob:plant maintenance
  - notification
  - order
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - metadata-only
---
# I_MAINTPLANSCHEDGOVERVIEWCUBE

**This CDS view is designed to provide a comprehensive overview of maintenance plan scheduling within an organization. It aggregates and summarizes data related to maintenance plans, items, orders, notifications, and associated attributes, enabling users to analyze and monitor the status and progress of maintenance activities. This CDS view provides the data to answer the following business questions: How many maintenance plans are currently active, inactive, scheduled, created, or marked for deletion? What are the planned start and completion dates for maintenance activities? What is the status of maintenance plan calls, such as fixed, skipped, manually called, called, completed, or on hold? Which maintenance plans are associated with specific equipment, functional locations, or work centers? How are maintenance plans distributed across different business areas, planning plants, and planner groups? What are the details of maintenance orders, notifications, and service orders linked to maintenance plans? How can maintenance activities be optimized based on cycle, strategy, and category parameters? What is the impact of maintenance activities on cost centers, controlling areas, and company codes? How do maintenance plans align with organizational divisions, sales documents, and authorization groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPLANSCHEDGOVERVIEWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Basic start date |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `ReleasedByUserName` |  | |  |  | `CHAR(1)` | Scheduling determined by user |
| `ServiceOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `CompletionDate` |  | |  |  | `DATS(8)` | Completion Date for Call Object |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Completion Time for Call Object |
| `RevisionNumber` |  | |  |  | `NUMC(3)` | Revision Number |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenanceCallNextPlannedDate` |  | |  |  | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` |  | |  |  | `DATS(8)` | Call date |
| `MaintPlanLastScheduledDate` |  | |  |  | `DATS(8)` | Date of the call |
| `MaintenancePlanCallStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Call Status |
| `MaintenancePlanSortField` |  | |  |  | `CHAR(20)` | Sort field for maintenance plans |
| `MaintenancePlanCycle` |  | |  |  | `NUMC(2)` | Counter in Control Tables |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanActiveSystemStatus` |  | |  |  | `CHAR(30)` | Maintenance Plan Status |
| `MaintenanceItemDescription` |  | |  |  | `CHAR(40)` | Maintenance Item Description |
| `MaintenancePlanType` |  | |  |  | `CHAR(10)` | Maintenance Plan Type |
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
| `ServiceEntrySheet` |  | |  |  | `CHAR(10)` | Entry Sheet Number |
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
