---
name: C_MAINTENANCEPLANSCHEDULEDEX
description: "This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value
semantic_en: "This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MaintenancePlan Schedule Data Extractor — CDS view tiêu dùng dựa trên I_MaintenancePlanSchedule."
keywords:
  - "maintenanceplan"
  - "schedule"
  - "data"
  - "extractor"
  - "maintenance"
  - "plan"
  - "call"
  - "number"
  - "package"
  - "scheduling"
  - "type"
  - "status"
tags:
  - PM
  - bo:companycode
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - task
---
# C_MAINTENANCEPLANSCHEDULEDEX

**This CDS view is designed to extract and provide detailed scheduling data related to maintenance plans. It serves as a data source for analytics and reporting purposes, enabling users to access and analyze maintenance plan schedules, including their status, dates, and associated tasks. This CDS view provides the data to answer the following business questions: What are the details of the maintenance plans, including call numbers and packages? What is the scheduling status and type for each maintenance plan? When are the next planned dates for maintenance calls, and what are the actual call and completion dates? Are there any outstanding maintenance calls, and have they been invoked on the planned dates? What is the completion status of maintenance tasks, including cycle set sequences and counter readings? Who released the maintenance plan, and what are the concatenated due packages? What are the manual call dates and last planned dates for maintenance calls? How can the maintenance plan data be extracted for further analysis and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePlanCallNumber` | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePackage` | ✓ | | `_MaintenancePlanSchedule` | `MaintenancePackage` | `NUMC(2)` | Maintenance Package Number |
| `SchedulingType` |  | | `_MaintenancePlanSchedule` | `SchedulingType` | `CHAR(1)` | Scheduling type |
| `SchedulingStatus` |  | |  | `cast(_MaintenancePlanSchedule.SchedulingStatus as char1 preserving type )` | `CHAR(1)` | Single-Character Flag |
| `MeasuringPoint` |  | | `_MaintenancePlanSchedule` | `MeasuringPoint` | `CHAR(12)` | Measuring Point |
| `MaintenanceTaskPerformanceUnit` |  | | `_MaintenancePlanSchedule` | `MaintenanceTaskPerformanceUnit` | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintenanceCallNextPlannedDate` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallNextPlannedDate` | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallDate` | `DATS(8)` | Call date |
| `CompletionDate` |  | | `_MaintenancePlanSchedule` | `CompletionDate` | `DATS(8)` | Date of last completion in maintenance plan |
| `CompletionTime` |  | | `_MaintenancePlanSchedule` | `CompletionTime` | `TIMS(6)` |  |
| `CycleSetSequence` |  | | `_MaintenancePlanSchedule` | `CycleSetSequence` | `NUMC(2)` | Cycle Set Sequence |
| `MaintCallCompltnCntrRdng` |  | | `_MaintenancePlanSchedule` | `MaintCallCompltnCntrRdng` | `FLTP(16)` | Counter reading confirmation |
| `MaintenanceCallIsOutstanding` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallIsOutstanding` | `CHAR(1)` | Scheduling status: call outstanding |
| `MaintCallIsInvokedOnPlndDate` |  | | `_MaintenancePlanSchedule` | `MaintCallIsInvokedOnPlndDate` | `CHAR(1)` | Scheduling status: planned date called |
| `MaintCallHorizonIsNotReached` |  | | `_MaintenancePlanSchedule` | `MaintCallHorizonIsNotReached` | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintPlanLastScheduledDate` |  | | `_MaintenancePlanSchedule` | `MaintPlanLastScheduledDate` | `DATS(8)` | Date of the call |
| `ReleasedByUserName` |  | | `_MaintenancePlanSchedule` | `ReleasedByUserName` | `CHAR(12)` | Name of the person who made the call |
| `MaintPlnCnctntdDuePackagesTxt` |  | | `_MaintenancePlanSchedule` | `MaintPlnCnctntdDuePackagesTxt` | `CHAR(256)` |  |
| `MaintPlanPrdcssrCallCompltnDte` |  | | `_MaintenancePlanSchedule` | `MaintPlanPrdcssrCallCompltnDte` | `DATS(8)` | Completion for Predecessor |
| `MaintenancePlanManualCallDate` |  | | `_MaintenancePlanSchedule` | `MaintenancePlanManualCallDate` | `DATS(8)` | Manual call date |
| `MaintenanceCallLastPlannedDate` |  | | `_MaintenancePlanSchedule` | `MaintenanceCallLastPlannedDate` | `DATS(8)` | Last planned date |
| `_MaintenancePlanCallObjects` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePlanCallObjects` | `I_MaintPlanCallObject` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@AccessControl:{
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlanSchedule'
@EndUserText.label: 'MaintenancePlan Schedule Data Extractor'
@ObjectModel: {
    usageType: {
      dataClass: #MIXED,
      serviceQuality: #D,
      sizeCategory: #XL
    }
  }
@ObjectModel.modelingPattern: #NONE
@Analytics.technicalName: 'CPLANSCHEDDEX'
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
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
            ]
        }
    }
 }

define view entity C_MaintenancePlanScheduleDEX

  as select from           I_MaintenancePlanSchedule as _MaintenancePlanSchedule


    left outer to one join I_MaintenancePlanBasic    as _MaintenancePlan on _MaintenancePlanSchedule.MaintenancePlan = _MaintenancePlan.MaintenancePlan

  association [0..*] to I_MaintPlanCallObject as _MaintenancePlanCallObjects on _MaintenancePlanCallObjects.MaintenancePlan = $projection.MaintenancePlan


{
  key _MaintenancePlanSchedule.MaintenancePlan,
  key _MaintenancePlanSchedule.MaintenancePlanCallNumber,
  key _MaintenancePlanSchedule.MaintenancePackage,
      _MaintenancePlanSchedule.SchedulingType,
      @EndUserText.label: 'Scheduling Status'
      cast(_MaintenancePlanSchedule.SchedulingStatus as char1 preserving type ) as SchedulingStatus,
      _MaintenancePlanSchedule.MeasuringPoint,
      _MaintenancePlanSchedule.MaintenanceTaskPerformanceUnit,
      _MaintenancePlanSchedule.MaintenanceCallNextPlannedDate,
      _MaintenancePlanSchedule.MaintenanceCallDate,
      _MaintenancePlanSchedule.CompletionDate,
      _MaintenancePlanSchedule.CompletionTime,
      _MaintenancePlanSchedule.CycleSetSequence,
      _MaintenancePlanSchedule.MaintCallCompltnCntrRdng,
      _MaintenancePlanSchedule.MaintenanceCallIsOutstanding,
      _MaintenancePlanSchedule.MaintCallIsInvokedOnPlndDate,
      _MaintenancePlanSchedule.MaintCallHorizonIsNotReached,
      _MaintenancePlanSchedule.MaintPlanLastScheduledDate,
      _MaintenancePlanSchedule.ReleasedByUserName,
      _MaintenancePlanSchedule.MaintPlnCnctntdDuePackagesTxt,
      _MaintenancePlanSchedule.MaintPlanPrdcssrCallCompltnDte,
      _MaintenancePlanSchedule.MaintenancePlanManualCallDate,
      _MaintenancePlanSchedule.MaintenanceCallLastPlannedDate,
      _MaintenancePlanSchedule._MaintenancePlan,
      _MaintenancePlanCallObjects

}
```
