---
name: I_MAINTENANCECALL
description: "Maintenancecall"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCECALL

**Maintenancecall**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  | `warpl` |  |  |
| `MaintenanceCall` | ✓ | |  | `abnum` |  |  |
| `MaintenanceItem` | ✓ | |  | `wppos` |  |  |
| `MaintenanceOrder` |  | |  | `aufnr` |  |  |
| `MaintenanceNotification` |  | |  | `qmnum` |  |  |
| `MaintCallHorizonIsNotReached` |  | |  | `tsenq` |  |  |
| `SchedulingStatus` |  | |  | `tstat` |  |  |
| `CompletionDate` |  | |  | `addat` |  |  |
| `CompletionTime` |  | |  | `adtime` |  |  |
| `PlannedStartDate` |  | |  | `gstrp` |  |  |
| `ReleasedByUserName` |  | |  | `usermod` |  |  |
| `ServiceOrder` |  | |  | `service_order` |  |  |
| `_MaintenancePlan` | | ✓ | | | | |
| `_MaintenanceItem` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_ServiceOrder` | | ✓ | | | | |
| `_MaintPlanCallHistory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePlan` | `I_MaintenancePlan` | [0..1] |
| `_MaintenanceItem` | `I_MaintenanceItem` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceNotification` | `I_MaintenanceNotification` | [0..1] |
| `_ServiceOrder` | `I_ServiceOrderEnhcd` | [0..1] |
| `_MaintPlanCallHistory` | `I_MaintPlanCallHistory` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Call'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'MaintenanceCall'
@Analytics.technicalName: 'IMAINTENANCECALL'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE] 

define view entity I_MaintenanceCall
  as select from mhio

  association [0..1] to I_MaintenancePlan         as _MaintenancePlan         on  _MaintenancePlan.MaintenancePlan = $projection.MaintenancePlan
  association [0..1] to I_MaintenanceItem         as _MaintenanceItem         on  _MaintenanceItem.MaintenanceItem = $projection.MaintenanceItem
  association [0..1] to I_MaintenanceOrder        as _MaintenanceOrder        on  _MaintenanceOrder.MaintenanceOrder = $projection.MaintenanceOrder
  association [0..1] to I_MaintenanceNotification as _MaintenanceNotification on  _MaintenanceNotification.MaintenanceNotification = $projection.MaintenanceNotification
  association [0..1] to I_ServiceOrderEnhcd       as _ServiceOrder            on  _ServiceOrder.ServiceOrder = $projection.ServiceOrder
  association [0..*] to I_MaintPlanCallHistory    as _MaintPlanCallHistory    on  _MaintPlanCallHistory.MaintenancePlan           = $projection.MaintenancePlan
                                                                              and _MaintPlanCallHistory.MaintenancePlanCallNumber = $projection.MaintenanceCall
{

      @ObjectModel.foreignKey.association: '_MaintenancePlan'
  key mhio.warpl         as MaintenancePlan,

  key mhio.abnum         as MaintenanceCall,

      @ObjectModel.foreignKey.association: '_MaintenanceItem'
  key mhio.wppos         as MaintenanceItem,

      @ObjectModel.foreignKey.association: '_MaintenanceOrder'
      mhio.aufnr         as MaintenanceOrder,

      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
      mhio.qmnum         as MaintenanceNotification,

      mhio.tsenq         as MaintCallHorizonIsNotReached,

      mhio.tstat         as SchedulingStatus,

      mhio.addat         as CompletionDate,

      mhio.adtime        as CompletionTime,

//      @Semantics.calendarItem.dtStart: true
      mhio.gstrp         as PlannedStartDate,

      mhio.usermod       as ReleasedByUserName,

      @ObjectModel.foreignKey.association: '_ServiceOrder'
      mhio.service_order as ServiceOrder,

      _MaintenancePlan,
      _MaintenanceItem,
      _MaintenanceOrder,
      _MaintenanceNotification,
      _MaintPlanCallHistory,
      _ServiceOrder
}
```
