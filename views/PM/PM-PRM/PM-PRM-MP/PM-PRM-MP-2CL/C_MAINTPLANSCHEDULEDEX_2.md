---
name: C_MAINTPLANSCHEDULEDEX_2
description: "Data Extraction for Maint Plan Schedule"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value
semantic_en: "Data Extraction for Maint Plan Schedule"
semantic_vi: "Data Extraction for Maint Plan Schedule — CDS view tiêu dùng dựa trên I_MaintenancePlanSchedule."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maint"
  - "plan"
  - "schedule"
  - "maintenance"
  - "call"
  - "number"
  - "package"
  - "scheduling"
  - "type"
  - "status"
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTPLANSCHEDULEDEX_2

**Data Extraction for Maint Plan Schedule**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePlanCallNumber` | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePackage` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePackage` | `NUMC(2)` | Maintenance Package Number |
| `SchedulingType` |  | | `_MaintenancePlanSchedule` | `SchedulingType` | `CHAR(1)` | Scheduling type |
| `SchedulingStatus` |  | |  | `cast(_MaintenancePlanSchedule.SchedulingStatus as char1 preserving type )` | `CHAR(1)` | Single-Character Flag |
| `MeasuringPoint` |  | | `_MaintenancePlanSchedule` | `MeasuringPoint` | `CHAR(12)` | Measuring Point |
| `MaintenanceCallNextPlannedDate` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallNextPlannedDate` | `DATS(8)` | Next planned date |
| `CompletionDate` |  | | `_MaintenancePlanSchedule` | `CompletionDate` | `DATS(8)` | Date of last completion in maintenance plan |
| `CycleSetSequence` |  | | `_MaintenancePlanSchedule` | `CycleSetSequence` | `NUMC(2)` | Cycle Set Sequence |
| `MaintCallCompltnCntrRdng` |  | | `_MaintenancePlanSchedule` | `MaintCallCompltnCntrRdng` | `FLTP(16)` | Counter reading confirmation |
| `MaintenanceCallIsOutstanding` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallIsOutstanding` | `CHAR(1)` | Scheduling status: call outstanding |
| `MaintCallIsInvokedOnPlndDate` |  | | `_MaintenancePlanSchedule` | `MaintCallIsInvokedOnPlndDate` | `CHAR(1)` | Scheduling status: planned date called |
| `MaintCallHorizonIsNotReached` |  | | `_MaintenancePlanSchedule` | `MaintCallHorizonIsNotReached` | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintPlanLastScheduledDate` |  | | `_MaintenancePlanSchedule` | `MaintPlanLastScheduledDate` | `DATS(8)` | Date of the call |
| `ReleasedByUserName` |  | | `_MaintenancePlanSchedule` | `ReleasedByUserName` | `CHAR(12)` | Name of the person who made the call |
| `MaintPlanPrdcssrCallCompltnDte` |  | | `_MaintenancePlanSchedule` | `MaintPlanPrdcssrCallCompltnDte` | `DATS(8)` | Completion for Predecessor |
| `MaintenancePlanManualCallDate` |  | | `_MaintenancePlanSchedule` | `MaintenancePlanManualCallDate` | `DATS(8)` | Manual call date |
| `MaintenanceCallLastPlannedDate` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallLastPlannedDate` | `DATS(8)` | Last planned date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for Maint Plan Schedule'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
             mapping:[
                {
                    table: 'mhis', role: #MAIN,
                    viewElement: ['MaintenancePlan', 'MaintenancePlanCallNumber', 'MaintenancePackage'],
                    tableElement: ['warpl', 'abnum', 'zaehl']
                },
                {
                    table: 'mpla', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['MaintenancePlan'],
                    tableElement: ['warpl']}
            ] } } 
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'CMNTPLNSCHEDLDEX'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlanSchedule'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@VDM.viewType: #CONSUMPTION

define view entity C_MaintPlanScheduleDEX_2

  as select from           I_MaintenancePlanSchedule as _MaintenancePlanSchedule


    left outer to one join I_MaintenancePlanBasic_2    as _MaintenancePlan on _MaintenancePlanSchedule.MaintenancePlan = _MaintenancePlan.MaintenancePlan

{
  key _MaintenancePlanSchedule.MaintenancePlan,
  key _MaintenancePlanSchedule.MaintenancePlanCallNumber,
  key _MaintenancePlanSchedule.MaintenancePackage,
      _MaintenancePlanSchedule.SchedulingType,
      @EndUserText.label: 'Scheduling Status'
      cast(_MaintenancePlanSchedule.SchedulingStatus as char1 preserving type ) as SchedulingStatus,
      _MaintenancePlanSchedule.MeasuringPoint,
      _MaintenancePlanSchedule.MaintenanceCallNextPlannedDate,
      _MaintenancePlanSchedule.CompletionDate,
      _MaintenancePlanSchedule.CycleSetSequence,
      _MaintenancePlanSchedule.MaintCallCompltnCntrRdng,
      _MaintenancePlanSchedule.MaintenanceCallIsOutstanding,
      _MaintenancePlanSchedule.MaintCallIsInvokedOnPlndDate,
      _MaintenancePlanSchedule.MaintCallHorizonIsNotReached,
      _MaintenancePlanSchedule.MaintPlanLastScheduledDate,
      _MaintenancePlanSchedule.ReleasedByUserName,
      _MaintenancePlanSchedule.MaintPlanPrdcssrCallCompltnDte,
      _MaintenancePlanSchedule.MaintenancePlanManualCallDate,
      _MaintenancePlanSchedule.MaintenanceCallLastPlannedDate,
      _MaintenancePlanSchedule._MaintenancePlan

}
```
