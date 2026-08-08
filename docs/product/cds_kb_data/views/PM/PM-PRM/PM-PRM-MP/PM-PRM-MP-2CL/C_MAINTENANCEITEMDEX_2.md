---
name: C_MAINTENANCEITEMDEX_2
description: "Data Extraction for Maintenance Item"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX_2')/$value
semantic_en: "Data Extraction for Maintenance Item"
semantic_vi: "Data Extraction for Maintenance Item — CDS view tiêu dùng dựa trên I_MaintenanceItemBasic."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maintenance"
  - "item"
  - "maint"
  - "object"
  - "acct"
  - "assgmt"
  - "nmbr"
  - "planner"
  - "group"
  - "planning"
  - "plant"
  - "business"
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTENANCEITEMDEX_2

**Data Extraction for Maintenance Item**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceItem` | ✓ | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of creation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceItemDescription` |  | |  |  | `CHAR(40)` | Maintenance Item Description |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanItemPosition` |  | |  |  | `NUMC(4)` | Item in the maintenance plan |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order number |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `NumberOfTaskListExecutions` |  | |  |  | `DEC(3)` | Execution factor for whole task list |
| `MaintenanceItemIsInactive` |  | |  |  | `CHAR(1)` | Indicator that maintenance item is inactive |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceItemCategoryCode` |  | |  | `MaintObjectCategory` | `CHAR(2)` | Maintenance item category |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Purchase order item number |
| `SettlementOrder` |  | |  |  | `CHAR(12)` | Settlement order |
| `LastChangeDateTime` |  | |  | `MaintPlanLastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ImmediateReleaseIsBlocked` |  | |  |  | `CHAR(1)` | Do Not Release Immediately |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `_Assembly` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ImmediateReleaseIsBlocked` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderType` | | ✓ | | | | |
| `_MaintenancePlan` | | ✓ | | | | |
| `_MaintenancePlanCatParam` | | ✓ | | | | |
| `_MaintenancePlannerGroup` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_MaintenanceTaskList` | | ✓ | | | | |
| `_MaintOperationSystCondition` | | ✓ | | | | |
| `_MaintOrderTypeControlParam` | | ✓ | | | | |
| `_MainWorkCenter` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_PMNotificationType` | | ✓ | | | | |
| `_PMReferenceElement` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SettlementOrder` | | ✓ | | | | |
| `_TaskListGroup` | | ✓ | | | | |
| `_TaskListGroupCounter` | | ✓ | | | | |
| `_TaskListGroupCounter_2` | | ✓ | | | | |
| `_TaskListGroup_2` | | ✓ | | | | |
| `_TaskListType` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEITEMDEX_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for Maintenance Item'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic:true } 
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'CMAINTITMDEX'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceItem'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@VDM.viewType: #CONSUMPTION
define view entity C_MaintenanceItemDEX_2
  as select from I_MaintenanceItemBasic
{
@ObjectModel.text.element: ['MaintenanceItemDescription']
key MaintenanceItem,
/* start suppress warning shlporigin_not_inherited */
@ObjectModel.foreignKey.association: '_LocationAccountAssignment'
MaintObjectLocAcctAssgmtNmbr,
MaintenancePlannerGroup,
@ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
MaintenancePlanningPlant,
@ObjectModel.foreignKey.association: '_BusinessArea'
BusinessArea,
@ObjectModel.foreignKey.association: '_MainWorkCenter'
MainWorkCenterInternalID,
@ObjectModel.foreignKey.association: '_WorkCenterType'
WorkCenterTypeCode,
@ObjectModel.foreignKey.association: '_TaskListType'
TaskListType,
@ObjectModel.foreignKey.association: '_TaskListGroup_2'
TaskListGroup,
@ObjectModel.foreignKey.association: '_TaskListGroupCounter_2'
TaskListGroupCounter,
Equipment,
@ObjectModel.foreignKey.association: '_Assembly'
Assembly,
@Semantics.systemDate.createdAt: true
CreationDate,
@Semantics.user.createdBy: true
CreatedByUser,
@Semantics.systemDate.lastChangedAt: true
LastChangeDate,
@Semantics.user.lastChangedBy: true
LastChangedByUser,
@Semantics.text: true
MaintenanceItemDescription,
@ObjectModel.foreignKey.association: '_MaintenancePlan'
MaintenancePlan,
MaintenancePlanItemPosition,
@ObjectModel.foreignKey.association: '_MaintenanceStrategy'
MaintenanceStrategy,
@ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
MaintenancePlanCategory,
//AdditionalDeviceData,
@ObjectModel.foreignKey.association: '_PMNotificationType'
NotificationType,
@ObjectModel.foreignKey.association: '_MaintenanceNotification'
MaintenanceNotification,
MaintPriority,
@ObjectModel.foreignKey.association: '_MaintenanceOrder'
MaintenanceOrder,
@ObjectModel.foreignKey.association: '_MaintenanceActivityType'
MaintenanceActivityType,
@ObjectModel.foreignKey.association: '_MaintenanceOrderType'
MaintenanceOrderType,
SerialNumber,
@ObjectModel.foreignKey.association: '_Material'
Material,
@ObjectModel.foreignKey.association: '_MaintOperationSystCondition'
OperationSystemCondition,
NumberOfTaskListExecutions,
MaintenanceItemIsInactive,
ObjectInternalID,
MaintObjectCategory as MaintenanceItemCategoryCode,
/* end suppress warning shlporigin_not_inherited */
@ObjectModel.foreignKey.association: '_SalesDocument'
SalesDocument,
@ObjectModel.foreignKey.association: '_PurchaseOrder'
PurchaseOrder,
@ObjectModel.foreignKey.association: '_PurchaseOrderItem'
PurchaseOrderItem,
@ObjectModel.foreignKey.association: '_SettlementOrder'
SettlementOrder,
//MaintNotifTskIsAutomlyDtmnd,
@Semantics.systemDateTime.lastChangedAt: true
MaintPlanLastChangeDateTime                                                                 as LastChangeDateTime,
@ObjectModel.foreignKey.association: '_ImmediateReleaseIsBlocked'
@Semantics.booleanIndicator: true
ImmediateReleaseIsBlocked,
CycleSetSequence,
@ObjectModel.foreignKey.association: '_PMReferenceElement'
ReferenceElement,

/* Associations */
_Assembly,
_BusinessArea,
_ImmediateReleaseIsBlocked,
_LocationAccountAssignment,
_MaintenanceActivityType,
_MaintenanceNotification,
_MaintenanceOrder,
_MaintenanceOrderType,
_MaintenancePlan,
_MaintenancePlanCatParam,
_MaintenancePlannerGroup,
_MaintenancePlanningPlant,
_MaintenanceStrategy,
_MaintenanceTaskList,
_MaintOperationSystCondition,
_MaintOrderTypeControlParam,
_MainWorkCenter,
_Material,
_PMNotificationType,
_PMReferenceElement,
_PurchaseOrder,
_PurchaseOrderItem,
_SalesDocument,
_SettlementOrder,
_TaskListGroup,
_TaskListGroupCounter,
_TaskListGroupCounter_2,
_TaskListGroup_2,
_TaskListType,
_WorkCenterType,
_Equipment
}
```
