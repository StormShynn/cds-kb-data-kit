---
name: C_MAINTPLANCALLOBJECTDEX
description: "MaintenancePlan Call Obj Data Extractor"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value
semantic_en: "MaintenancePlan Call Obj Data Extractor"
semantic_vi: "MaintenancePlan Call Obj Data Extractor — CDS view tiêu dùng dựa trên I_MaintPlanCallObject."
keywords:
  - "maintenanceplan"
  - "call"
  - "obj"
  - "data"
  - "extractor"
  - "maintenance"
  - "plan"
  - "number"
  - "item"
  - "order"
  - "notification"
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
# C_MAINTPLANCALLOBJECTDEX

**MaintenancePlan Call Obj Data Extractor**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | | `_MaintenancePlanCallObj` | `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | ✓ | | `_MaintenancePlanCallObj` | `MaintenancePlanCallNumber` | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` | ✓ | | `_MaintenancePlanCallObj` | `MaintenanceItem` | `CHAR(16)` | Maintenance Item |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `SchedulingStatus` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Basic start date |
| `ReleasedByUserName` |  | |  |  | `CHAR(1)` | Scheduling determined by user |
| `ServiceOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `CompletionDate` |  | |  |  | `DATS(8)` | Completion Date for Call Object |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Completion Time for Call Object |
| `ServiceEntrySheet` |  | |  |  | `CHAR(10)` | Entry Sheet Number |
| `RevisionNumber` |  | |  |  | `NUMC(3)` | Revision Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@AccessControl:{
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlanCallObject'
@EndUserText.label: 'MaintenancePlan Call Obj Data Extractor'
@ObjectModel: {
    usageType: {
      dataClass: #MIXED,
      serviceQuality: #D,
      sizeCategory: #XL
    }
  }
@ObjectModel.modelingPattern: #NONE
@Analytics.technicalName: 'CPLANCALLOBJDEX'
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic:true
    }
 }
define view entity C_MaintPlanCallObjectDEX 
as select from  I_MaintPlanCallObject as _MaintenancePlanCallObj
{

    key _MaintenancePlanCallObj.MaintenancePlan,
    key _MaintenancePlanCallObj.MaintenancePlanCallNumber,
    key _MaintenancePlanCallObj.MaintenanceItem,
    MaintenanceOrder,
    MaintenanceNotification,
    MaintCallHorizonIsNotReached,
    SchedulingStatus,
    PlannedStartDate,
    ReleasedByUserName,
    ServiceOrder,
    CompletionDate,
    CompletionTime,
    ServiceEntrySheet,
    RevisionNumber
}
```
