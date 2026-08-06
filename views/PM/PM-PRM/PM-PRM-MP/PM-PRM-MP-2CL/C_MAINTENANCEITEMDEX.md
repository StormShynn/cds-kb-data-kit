---
name: C_MAINTENANCEITEMDEX
description: This CDS view provides the data to answer the following business questions:
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value
semantic_en: This CDS view provides the data to answer the following business questions:
keywords:
  - Maintenance Item Data
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - metadata-only
---
# C_MAINTENANCEITEMDEX

**This CDS view provides the data to answer the following business questions:**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenanceItem` | `CHAR(16)` | Maintenance Item |
| `MaintObjectLocAcctAssgmtNmbr` | `CHAR(12)` | Location and account assignment for technical object |
| `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `MainWorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterTypeCode` | `CHAR(2)` | Object types of the CIM resource |
| `MainWorkCenter` | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` | `CHAR(4)` | Plant |
| `TaskListType` | `CHAR(1)` | Task List Type |
| `TaskListGroup` | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` | `CHAR(2)` | Group Counter |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `Assembly` | `CHAR(40)` | Assembly |
| `CreationDate` | `DATS(8)` | Date of creation |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceItemDescription` | `CHAR(40)` | Maintenance Item Description |
| `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanItemPosition` | `NUMC(4)` | Item in the maintenance plan |
| `MaintenanceStrategy` | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePlanCategory` | `CHAR(2)` | Maintenance Plan Category |
| `NotificationType` | `CHAR(2)` | Notification Type |
| `MaintenanceNotification` | `CHAR(12)` | Notification Number |
| `MaintPriorityType` | `CHAR(2)` | Priority Type |
| `MaintPriority` | `CHAR(1)` | Priority |
| `MaintenanceOrder` | `CHAR(12)` | Order number |
| `MaintenanceActivityType` | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `SerialNumber` | `CHAR(18)` | Serial Number |
| `Material` | `CHAR(40)` | Material Number |
| `OperationSystemCondition` | `CHAR(1)` | System Condition |
| `NumberOfTaskListExecutions` | `DEC(3)` | Execution factor for whole task list |
| `MaintenanceItemIsInactive` | `CHAR(1)` | Indicator that maintenance item is inactive |
| `ObjectInternalID` | `CHAR(22)` | Object Number |
| `MaintenanceItemCategoryCode` | `CHAR(2)` | Maintenance item category |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Purchase order item number |
| `SettlementOrdForServiceProcmt` | `CHAR(12)` | Settlement order |
| `LastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ImmediateReleaseIsBlocked` | `CHAR(1)` | Do Not Release Immediately |
| `CycleSetSequence` | `NUMC(2)` | Cycle Set Sequence |
| `ReferenceElement` | `CHAR(40)` | Reference Element PM/PS |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of PP work center |
| `WorkCenter` | `CHAR(8)` | Work Center |
| `WorkCenterPlant` | `CHAR(4)` | Plant |
| `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `SettlementOrder` | `CHAR(12)` | Settlement order |
| `PlantSection` | `CHAR(3)` | Plant Section |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `AssetRoom` | `CHAR(8)` | Room |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `FunctionalLocation` | `CHAR(30)` | Functional Location |
