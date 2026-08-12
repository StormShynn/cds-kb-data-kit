---
name: C_MAINTENANCEORDERDEX
description: "Maintenance Order Data Extractor"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEORDERDEX')/$value
semantic_en: "Maintenance Order Data Extractor"
semantic_vi: "Maintenance Order Data Extractor — CDS view tiêu dùng dựa trên I_MaintenanceOrder."
keywords:
  - "maintenance"
  - "order"
  - "data"
  - "extractor"
  - "maint"
  - "routing"
  - "number"
  - "type"
  - "desc"
  - "basic"
  - "start"
  - "date"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTENANCEORDERDEX

**Maintenance Order Data Extractor**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEORDERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `MaintOrderRoutingNumber` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `MaintenanceOrderDesc` |  | |  |  | `CHAR(40)` | Description |
| `MaintOrdBasicStartDate` |  | |  |  | `DATS(8)` | Basic Start Date |
| `MaintOrdBasicStartTime` |  | |  |  | `TIMS(6)` | Basic Start (Time) |
| `MaintOrdBasicEndDate` |  | |  |  | `DATS(8)` | Basic Finish Date |
| `MaintOrdBasicEndTime` |  | |  |  | `TIMS(6)` | Basic Finish (Time) |
| `ScheduledBasicStartDate` |  | |  |  | `DATS(8)` | Scheduled start |
| `ScheduledBasicStartTime` |  | |  |  | `TIMS(6)` | Scheduled Start (Time) |
| `ScheduledBasicEndDate` |  | |  |  | `DATS(8)` | Scheduled finish |
| `ScheduledBasicEndTime` |  | |  |  | `TIMS(6)` | Scheduled finish time |
| `MaintOrderReferenceDate` |  | |  |  | `DATS(8)` | PM Order: Reference Date |
| `MaintOrderReferenceTime` |  | |  |  | `TIMS(6)` | Time of Reference Date |
| `MainWorkCompletedDateTime` |  | |  |  | `DEC(15)` | Main Work Completed Date and Time |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `OrdIsNotSchedldAutomatically` |  | |  |  | `CHAR(1)` | Indicator: Do not schedule automatically |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `MainWorkCenterInternalID` |  | |  | `WorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenterTypeCode` |  | |  | `WorkCenterTypeCode` | `CHAR(2)` | Object Type of CIM Resources for Work Center |
| `MainWorkCenter` |  | |  |  | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant associated with main work center |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Location Plant |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintOrdProcessPhaseCode` |  | |  |  | `CHAR(2)` | Process Phase |
| `MaintOrdProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `ReferenceElement` |  | |  |  | `CHAR(40)` | Reference Element PM/PS |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AdditionalDeviceData` |  | |  |  | `CHAR(40)` | Additional Device Data |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance Activity Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `OrderProcessingGroup` |  | |  |  | `NUMC(2)` | Processing Group |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Currency` |  | |  |  | `CUKY(5)` | Order Currency |
| `MaintenanceRevision` |  | |  |  | `CHAR(8)` | Revision for Plant Maintenance and Customer Service |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Product` |  | |  | `Material` | `CHAR(40)` | Material Number |
| `SuperiorProjectNetwork` |  | |  |  | `CHAR(12)` | Number of superior network |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work breakdown structure element (WBS element) |
| `ProjectInternalID` |  | |  | `cast( ProjectInternalID as ps_s4_proj_pspnr )` | `NUMC(8)` | Project (internal) |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `MaintenanceOrderInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceObjectList` |  | |  | `MaintenanceItemObjectList` | `INT8(19)` | Object list number |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `BasicSchedulingType` |  | |  |  | `CHAR(1)` | Scheduling type |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `MaintOrdPersonResponsible` |  | |  |  | `CHAR(12)` | Person Responsible ID |
| `LastChangeByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeDateTime` |  | |  | `cast( LastChangeDateTime as rslastchangedat preserving type )` | `DEC(15)` | Changed On Timestamp with Date and Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `OrderHasLongText` |  | |  |  | `CHAR(1)` | Order Has Long Text |
| `MaintenanceOrderOverheadCode` |  | |  |  | `CHAR(6)` | Overhead key |
| `PlannedCostsCostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant for Planned Costs |
| `ActualCostsCostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant For Actual Costs |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenanceCall` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `LeadingOrder` |  | |  |  | `CHAR(12)` | Order number |
| `TaskListType` |  | |  |  | `CHAR(1)` | Bill of Operations Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Bill of Operations ID |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Bill of Operations Variant |
| `MaintOrderProcessingContext` |  | |  |  | `CHAR(2)` | Additional Processing Context for Maintenance Order |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEORDERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEORDERDEX')/$value)*

```abap
@EndUserText.label: 'Maintenance Order Data Extractor'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
 authorizationCheck: #MANDATORY,
 personalData.blocking: #REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrder'
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
                      {
                        table: 'AFIH', role: #MAIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      },
                      {
                        table: 'AUFK', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      },
                      {
                        table: 'AFKO', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      }
                    ]
                 }
              }
}

define view entity C_MaintenanceOrderDEX
  as select from I_MaintenanceOrder as MaintenanceOrder
{
       /* start suppress warning shlporigin_not_inherited */
  key  MaintenanceOrder,
       MaintOrderRoutingNumber,
       MaintenanceOrderType,
       MaintenanceOrderDesc,
       MaintOrdBasicStartDate,
       MaintOrdBasicStartTime,
       MaintOrdBasicEndDate,
       MaintOrdBasicEndTime,
       ScheduledBasicStartDate,
       ScheduledBasicStartTime,
       ScheduledBasicEndDate,
       ScheduledBasicEndTime,
       MaintOrderReferenceDate,
       MaintOrderReferenceTime,
       MainWorkCompletedDateTime,
       MaintenanceNotification,
       @Semantics.booleanIndicator: true
       OrdIsNotSchedldAutomatically,
       ControllingArea,
       WorkCenterInternalID                                                                    as MainWorkCenterInternalID,
       WorkCenterTypeCode                                                                      as MainWorkCenterTypeCode,
       MainWorkCenter,
       MainWorkCenterPlant,
       MaintenancePlanningPlant,
       MaintenancePlant,
       Assembly,
       MaintOrdProcessPhaseCode,
       MaintOrdProcessSubPhaseCode,
       BusinessArea,
       CompanyCode,
       CostingSheet,
       ReferenceElement,
       FunctionalArea,
       AdditionalDeviceData,
       Equipment,
       MaintenanceOrderPlanningCode,
       MaintenancePlannerGroup,
       MaintenanceActivityType,
       MaintPriority,
       MaintPriorityType,
       OrderProcessingGroup,
       ProfitCenter,
       ResponsibleCostCenter,
       Currency,
       MaintenanceRevision,
       SerialNumber,
       Material                                                                                as Product,
       SuperiorProjectNetwork,
       OperationSystemCondition,
       WBSElementInternalID,
       cast( ProjectInternalID as ps_s4_proj_pspnr )                                           as ProjectInternalID,
       ControllingObjectClass,
       MaintenanceOrderInternalID,
       MaintenanceItemObjectList                                                               as MaintenanceObjectList,
       MaintObjectLocAcctAssgmtNmbr,
       BasicSchedulingType,
       LatestAcceptableCompletionDate,
       MaintOrdPersonResponsible,
       LastChangeByUser,
       @Semantics.systemDateTime.lastChangedAt: true
       cast( LastChangeDateTime as rslastchangedat preserving type )                           as LastChangeDateTime,
       CreatedByUser,
       OrderHasLongText,
       MaintenanceOrderOverheadCode,
       PlannedCostsCostingVariant,
       ActualCostsCostingVariant,
       MaintenancePlan,
       MaintenanceCall,
       MaintenanceItem,
       LeadingOrder,
       TaskListType,
       TaskListGroup,
       TaskListGroupCounter,
       MaintOrderProcessingContext
//       The below fields belong to private cloud, the fields can be exposed
//       with featur parity
//       MaintenanceOrderCreationMode,
//       MaintOrdCostDetnStatus,
       /* end suppress warning shlporigin_not_inherited */
}
```
